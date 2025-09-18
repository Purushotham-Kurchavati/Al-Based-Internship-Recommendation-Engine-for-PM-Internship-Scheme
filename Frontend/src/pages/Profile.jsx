import React, { useState, useEffect } from "react";
import { useAuth } from "../utils/auth";

export default function Profile() {
  const { user, login } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [about, setAbout] = useState(localStorage.getItem("profile_about") || "");

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
  }, [user]);

  function save() {
    // Save user profile locally and update auth context for demo
    const u = { name, email };
    localStorage.setItem("ai_user", JSON.stringify(u));
    login(u); // update context (login overwrites user)
    localStorage.setItem("profile_about", about);
    alert("Profile saved locally.");
  }

  return (
    <div className="max-w-2xl bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">My Profile</h2>

      <label className="block text-sm mt-2">Full name</label>
      <input value={name} onChange={e=>setName(e.target.value)} className="w-full border px-3 py-2 rounded" />

      <label className="block text-sm mt-2">Email</label>
      <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" />

      <label className="block text-sm mt-2">About</label>
      <textarea value={about} onChange={e=>setAbout(e.target.value)} className="w-full border px-3 py-2 rounded" rows={4} />

      <div className="mt-4 flex gap-3">
        <button onClick={save} className="px-4 py-2 bg-purple-600 text-white rounded">Save</button>
      </div>
    </div>
  );
}
