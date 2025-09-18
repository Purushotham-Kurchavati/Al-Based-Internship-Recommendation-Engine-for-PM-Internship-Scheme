import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded hover:bg-slate-50 ${isActive ? "bg-slate-100 font-semibold" : ""}`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r p-6 hidden md:block">
      <div className="mb-6">
        <div className="text-2xl font-bold">AI Internship</div>
        <div className="text-xs text-gray-500">Recommendation App</div>
      </div>

      <nav className="space-y-1">
        <NavItem to="/app/dashboard">🏠 Dashboard</NavItem>
        <NavItem to="/app/recommendations">🔎 Recommendations</NavItem>
        <NavItem to="/app/profile">👤 Profile</NavItem>
        <NavItem to="/app/settings">⚙️ Settings</NavItem>
      </nav>

      <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()}</div>
    </aside>
  );
}
