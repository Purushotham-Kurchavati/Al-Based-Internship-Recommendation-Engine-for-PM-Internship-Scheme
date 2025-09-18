import React from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Avatar({ name }) {
  const initials = name
    ? name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase()
    : "U";
  return (
    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
      {initials}
    </div>
  );
}

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function onLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="bg-white px-6 py-3 flex items-center justify-between border-b">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded hover:bg-slate-100">☰</button>
        <div>
          <div className="text-lg font-semibold">AI Internship</div>
          <div className="text-xs text-gray-500">Recommendations</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            placeholder="Search internships, tags, companies..."
            className="border rounded-full px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        <button className="relative">
          🔔
          <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            2
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div onClick={() => navigate("/app/profile")} className="cursor-pointer">
            <Avatar name={user?.name || "User"} />
          </div>
          <div className="text-sm">
            <div className="font-medium">{user?.name || "Guest"}</div>
            <div className="text-xs text-gray-500">{user?.email || ""}</div>
          </div>
          <button onClick={onLogout} className="ml-4 text-sm text-red-600">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
