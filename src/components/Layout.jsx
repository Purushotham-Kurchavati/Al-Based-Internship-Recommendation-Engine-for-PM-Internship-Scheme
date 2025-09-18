import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../utils/auth";
import {
  HomeIcon,
  StarIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Layout() {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/app/dashboard", icon: HomeIcon },
    { name: "Recommendations", path: "/app/recommendations", icon: StarIcon },
    { name: "Profile", path: "/app/profile", icon: UserIcon },
    { name: "Settings", path: "/app/settings", icon: Cog6ToothIcon },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar (mobile overlay + desktop fixed) */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 md:static md:translate-x-0 md:flex md:flex-col
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 font-bold text-xl text-indigo-600">AI Internships</div>
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
              onClick={() => setSidebarOpen(false)} // close menu on mobile nav click
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={() => {
            logout();
            setSidebarOpen(false);
          }}
          className="flex items-center gap-3 px-4 py-3 m-4 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Logout
        </button>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>

          <h1 className="text-lg font-semibold text-gray-700">
            Welcome, {user?.name || "Intern"}
          </h1>
          <div className="text-sm text-gray-500 hidden sm:block">{user?.email}</div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
