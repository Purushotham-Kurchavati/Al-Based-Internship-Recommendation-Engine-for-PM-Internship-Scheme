import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import internships from "../data/internships";

export default function Internship() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find the internship by id
  const job = internships.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold text-gray-700">❌ Internship not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
      {/* Title & Company */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
        <p className="text-gray-500">
          {job.company} • {job.location} • {job.type}
        </p>
      </div>

      {/* Stipend & Duration */}
      <div className="flex gap-6 text-sm text-gray-600">
        <p>
          <span className="font-medium">💰 Stipend:</span> {job.stipend}
        </p>
        <p>
          <span className="font-medium">⏳ Duration:</span> {job.duration}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Short description */}
      <p className="text-gray-700">{job.short}</p>

      {/* Long description */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">About this internship</h3>
        <p className="text-gray-600 leading-relaxed">{job.long}</p>
      </div>

      {/* Apply Button */}
      <div className="flex justify-end">
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          onClick={() => alert("Apply modal will open here 🚀")}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}


