import API_BASE from "./config";
import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // import css

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE}/shorten`, {
        originalUrl,
        alias,
      });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      console.error(err);
      alert("Error creating short link. Try again.");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Link Shortener</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="url"
            placeholder="Paste your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Custom alias (optional)"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
          <button type="submit">Shorten</button>
        </form>

        {shortUrl && (
          <div className="result">
            <p>Your short link:</p>
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
