import React, { useState } from "react";
import { log } from "../api/logs";

export default function ShortenerPage({ token }) {
  const [longUrl, setLongUrl] = useState("");
  const [urls, setUrls] = useState([]);

  const handleShorten = () => {
    if (!longUrl.startsWith("http")) {
      alert("Invalid URL");
      log("frontend", "error", "handler", "Invalid URL format", token);
      return;
    }
    const shortUrl = "http://short.ly/" + Math.random().toString(36).substring(7);
    const entry = {
      longUrl,
      shortUrl,
      created: new Date().toISOString(),
      expiry: new Date(Date.now() + 7 * 86400000).toISOString(),
      clicks: 0,
    };
    setUrls([entry, ...urls]);
    log("frontend", "info", "handler", "URL shortened successfully", token);
  };

  const handleClick = (url) => {
    url.clicks++;
    window.open(url.longUrl, "_blank");
    log("frontend", "info", "handler", "Shortened URL clicked", token);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <input placeholder="Enter long URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
      <button onClick={handleShorten}>Shorten</button>

      <ul>
        {urls.map((u, i) => (
          <li key={i}>
            <a href="#" onClick={() => handleClick(u)}>{u.shortUrl}</a> → {u.longUrl}
          </li>
        ))}
      </ul>
    </div>
  );
}