# LinkShorten

A simple URL shortening service built with JavaScript, HTML, and CSS.

# Demo

- Live demo: https://linkshorten-60ni.onrender.com/

# Overview

LinkShorten provides a lightweight front-end and backend API to create short, memorable links that redirect to long URLs. It is intended to be easy to run locally for development and simple to deploy to platforms like Render, Heroku, Vercel, etc.

# Features

- Generate short codes for long URLs
- Redirect from short URL to original URL
- Basic web UI to create short links
- Input validation and error handling
- Simple to extend (persistent storage, analytics, auth)

# Tech stack

- JavaScript (Node.js/Express or similar backend)
- HTML, CSS for the frontend UI

# Demo Screenshot

<img width="600" height="400" alt="image" src="https://github.com/user-attachments/assets/570ca09f-4864-4a46-993d-a57431d90a5b" />


# Getting started

# Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- (Optional) MongoDB if you want persistent storage

# Install

1. Clone the repo
   git clone https://github.com/codejasleen/linkshorten.git
2. Enter the project folder
   cd linkshorten
3. Install dependencies
   npm install
   # or
   yarn install

# Configuration

Create a .env file in the project root (or set environment variables in your host). Example environment variables:

- PORT=3000
- MONGO_URI=mongodb://localhost:27017/linkshorten   # optional, if using MongoDB
- BASE_URL=http://localhost:3000
- JWT_SECRET=your_jwt_secret   # optional, if auth is added

# Project Structure

```bash
.
├── backend/
│   ├── index.js
│   ├── test.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   │   └── (static files)
│   │
│   └── src/
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── config.js
│       ├── index.css
│       ├── index.js
│       └── logo.svg
│
├── .gitignore
├── package.json
├── package-lock.json
├── index.js
├── test.js
└── README.md

```
# Start the app

- Development (with live reload if available):
   npm run dev

 Thank you for checking out LinkShorten — happy shortening!
