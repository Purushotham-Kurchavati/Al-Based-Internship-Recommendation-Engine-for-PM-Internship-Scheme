import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!name || !email) return alert("Enter name and email.");
    // For demo, register = login
    login({ name, email });
    navigate("/app/dashboard");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Create account</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="w-full border px-4 py-2 rounded" />
          <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" className="w-full border px-4 py-2 rounded" />
          <button className="w-full bg-purple-600 text-white py-2 rounded">Create account</button>
        </form>
      </div>
    </div>
  );
}
