import React, { useState } from "react";
import axios from "axios";

export default function AuthPage({ clientID, clientSecret, setToken }) {
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [accessCode, setAccessCode] = useState("");

  const handleAuth = async () => {
    try {
      const res = await axios.post("http://20.244.56.144/evaluation-service/auth", {
        email, rollNo, accessCode, clientID, clientSecret
      });
      setToken(res.data.access_token);
      alert("Authenticated successfully!");
    } catch {
      alert("Auth failed");
    }
  };

  return (
    <div>
      <h2>Authenticate</h2>
      <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="rollNo" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      <input placeholder="accessCode" value={accessCode} onChange={(e) => setAccessCode(e.target.value)} />
      <button onClick={handleAuth}>Get Token</button>
    </div>
  );
}