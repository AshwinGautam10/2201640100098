import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import AuthPage from "./pages/AuthPage";
import ShortenerPage from "./pages/ShortenerPage";
import StatsPage from "./pages/StatsPage";

export default function App() {
  const [token, setToken] = useState(null);
  const [clientID, setClientID] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="p-4 font-sans">
      <nav className="flex gap-4 mb-4">
        <Link to="/">Register</Link>
        <Link to="/auth">Auth</Link>
        <Link to="/shorten">Shortener</Link>
        <Link to="/stats">Stats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RegisterPage setClientID={setClientID} setClientSecret={setClientSecret} />} />
        <Route path="/auth" element={<AuthPage clientID={clientID} clientSecret={clientSecret} setToken={setToken} />} />
        <Route path="/shorten" element={<ShortenerPage token={token} />} />
        <Route path="/stats" element={<StatsPage token={token} />} />
      </Routes>
    </div>
  );
}