# LinkShorten

A simple URL shortening service built with JavaScript, HTML, and CSS.

Demo

- Live demo: https://linkshorten-60ni.onrender.com/

Overview

LinkShorten provides a lightweight front-end and backend API to create short, memorable links that redirect to long URLs. It is intended to be easy to run locally for development and simple to deploy to platforms like Render, Heroku, Vercel, etc.

Features

- Generate short codes for long URLs
- Redirect from short URL to original URL
- Basic web UI to create short links
- Input validation and error handling
- Simple to extend (persistent storage, analytics, auth)

Tech stack

- JavaScript (Node.js/Express or similar backend)
- HTML, CSS for the frontend UI

Demo Screenshot

_Add screenshots or GIFs here (optional)._ 

Getting started

Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- (Optional) MongoDB if you want persistent storage

Install

1. Clone the repo
   git clone https://github.com/codejasleen/linkshorten.git
2. Enter the project folder
   cd linkshorten
3. Install dependencies
   npm install
   # or
   yarn install

Configuration

Create a .env file in the project root (or set environment variables in your host). Example environment variables:

- PORT=3000
- MONGO_URI=mongodb://localhost:27017/linkshorten   # optional, if using MongoDB
- BASE_URL=http://localhost:3000
- JWT_SECRET=your_jwt_secret   # optional, if auth is added

Start the app

- Development (with live reload if available):
  npm run dev
  # or
  yarn dev

- Production:
  npm start

API

- POST /api/shorten
  - Body: { "url": "https://example.com", "customCode": "mycode" } — customCode optional
  - Response: { "shortUrl": "http://yourdomain/<code>", "code": "<code>", "originalUrl": "https://example.com" }

- GET /:code
  - Redirects (301/302) to the original URL associated with the code

Usage examples

- Create a short link (curl)
  curl -X POST -H "Content-Type: application/json" -d '{"url":"https://example.com"}' http://localhost:3000/api/shorten

- Visit the short link in a browser:
  http://localhost:3000/<code>

Persistence options

- In-memory storage (demo/testing): data will be lost when the server restarts.
- MongoDB (recommended for production): save short codes and original URLs to a collection.

Deployment

- Deploy to Render, Heroku, Vercel, or any VPS. Ensure env vars (PORT, MONGO_URI, BASE_URL) are set in your host.

Testing

- If the repository includes tests, run:
  npm test
  # or
  yarn test

Contributing

- Fork the repo
- Create a feature branch: git checkout -b feature/my-feature
- Commit your changes: git commit -m "Add my feature"
- Push to the branch and open a pull request

License

- MIT © codejasleen

Author

- codejasleen

Notes / TODO

- Add rate limiting and abuse protection
- Add analytics (click counts, referrers)
- Add link expiration options
- Add user accounts and link management
