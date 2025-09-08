import React from "react";

export default function StatsPage({ token }) {
  return (
    <div>
      <h2>Statistics Page</h2>
      <p>Here you would fetch and show stats for all shortened URLs.</p>
      <p>Protected with token: {token ? "✅" : "❌"}</p>
    </div>
  );
}