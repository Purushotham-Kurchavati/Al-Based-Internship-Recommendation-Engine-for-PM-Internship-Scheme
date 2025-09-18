import React from "react";
import { Link } from "react-router-dom";

export default function InternshipCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
          <span className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full">
            {job.category}
          </span>
        </div>
        <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
      </div>

      {/* Details */}
      <div className="mt-3 text-sm text-gray-600 space-y-1">
        <p><span className="font-medium">Stipend:</span> {job.stipend}</p>
        <p><span className="font-medium">Duration:</span> {job.duration}</p>
      </div>

      {/* Short description */}
      <p className="mt-3 text-gray-700 text-sm line-clamp-2">{job.short}</p>

      {/* Actions */}
      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/app/internship/${job.id}`}
          className="text-indigo-600 font-medium hover:underline"
        >
          View Details
        </Link>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition">
          Apply
        </button>
      </div>
    </div>
  );
}
