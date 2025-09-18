import React, { useEffect, useState } from "react";

export default function ApplyModal() {
  const [open, setOpen] = useState(false);
  const [job, setJob] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function handler(e) {
      setJob(e.detail);
      setOpen(true);
    }
    window.addEventListener("openApply", handler);
    return () => window.removeEventListener("openApply", handler);
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    // store application locally
    const applications = JSON.parse(localStorage.getItem("applications") || "[]");
    applications.push({ jobId: job.id, message, date: new Date().toISOString() });
    localStorage.setItem("applications", JSON.stringify(applications));
    setOpen(false);
    setMessage("");
    alert("Application submitted (saved locally).");
  }

  if (!open || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)}></div>
      <div className="bg-white p-6 rounded-xl shadow-lg z-10 w-full max-w-xl">
        <h3 className="text-xl font-semibold">Apply to {job.title}</h3>
        <p className="text-sm text-gray-500">{job.company}</p>

        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Write a short message / cover note..."
            className="w-full border p-3 rounded"
            required
          />
          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
