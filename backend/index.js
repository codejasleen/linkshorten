// index.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import shortid from "shortid";

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema + Model
const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, unique: true },
});

const Url = mongoose.model("Url", urlSchema);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 URL Shortener Backend is running!");
});

// POST /shorten
const BASE_URL = process.env.FRONTEND_BASE || `http://localhost:${PORT}`;

app.post("/shorten", async (req, res) => {
  try {
    const { originalUrl, alias } = req.body;

    // Use alias if provided, else auto-generate
    const shortId = alias || shortid.generate();

    // Prevent duplicate alias
    const existing = await Url.findOne({ shortId });
    if (existing) {
      return res.status(400).json({ error: "Alias already in use" });
    }

    // Save new record
    const newUrl = new Url({ originalUrl, shortId });
    await newUrl.save();

    res.json({
       shortUrl: `${BASE_URL}/${shortId}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /:shortId → Redirect
app.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlEntry = await Url.findOne({ shortId });

    if (urlEntry) {
      return res.redirect(urlEntry.originalUrl);
    } else {
      return res.status(404).send("❌ URL not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});