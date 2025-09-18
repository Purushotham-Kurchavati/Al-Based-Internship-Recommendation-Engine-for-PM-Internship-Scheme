import React, { useState } from "react";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import internships from "../data/internships";
import InternshipCard from "../components/InternshipCard";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  // ✅ Load user details (from profile form)
  const userDetails = JSON.parse(localStorage.getItem("user_details")) || {};

  // ✅ Personalized recommendations (skills + location)
  const personalized = internships.filter((job) => {
    const skillMatch =
      !userDetails.skills?.length ||
      job.tags.some((tag) => userDetails.skills.includes(tag));
    const locationMatch =
      !userDetails.location ||
      job.location === userDetails.location ||
      job.location === "Remote";
    return skillMatch && locationMatch;
  });

  // ✅ Filter internships based on quick filters
  const filteredInternships =
    filter === "All"
      ? internships
      : internships.filter((job) => job.tags.includes(filter));

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            👋 Welcome back, {user?.name || "Intern"}
          </h1>
          <p className="text-sm text-gray-500">
            Explore internships tailored for you.
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Recommendations + Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Personalized Recommendations */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">✨ Recommended for You</h2>
          <p className="text-sm text-gray-500">
            Based on your profile:{" "}
            {userDetails.graduation || "N/A"} •{" "}
            {userDetails.location || "Any Location"}
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalized.length > 0 ? (
              personalized.slice(0, 4).map((j) => (
                <div key={j.id} className="relative">
                  <InternshipCard job={j} />
                  <span className="absolute top-2 right-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Recommended
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No personalized matches found. Check all internships below 👇
              </p>
            )}
          </div>
        </div>

        {/* Quick Filters */}
        <aside className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Quick filters</h3>
          <div className="mt-3 space-y-2">
            {["All", "AI", "NLP", "CV"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`w-full text-left p-2 rounded transition ${
                  filter === cat
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : "hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>
      </div>

      {/* All Internships */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold">📋 All internships</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredInternships.map((j) => (
            <InternshipCard key={j.id} job={j} />
          ))}
        </div>
      </div>

      {/* Global Apply modal mount point */}
      <div id="apply-root"></div>
    </div>
  );
}
