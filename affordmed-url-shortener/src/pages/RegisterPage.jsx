import React, { useState } from "react";
import axios from "axios";

export default function RegisterPage({ setClientID, setClientSecret }) {
  const [form, setForm] = useState({ email: "", name: "", rollNo: "", githubUsername: "", accessCode: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://20.244.56.144/evaluation-service/register", form);
      setResponse(res.data);
      setClientID(res.data.clientID);
      setClientSecret(res.data.clientSecret);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <input key={key} name={key} placeholder={key} value={form[key]} onChange={handleChange} required />
        ))}
        <button type="submit">Register</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}