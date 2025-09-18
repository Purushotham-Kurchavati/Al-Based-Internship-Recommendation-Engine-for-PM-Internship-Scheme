import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDetails() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    tenth: "",
    twelfth: "",
    graduation: "",
    university: "",
    passingYear: "",
    skills: [],
    location: "",
  });

  const skillsOptions = ["AI", "NLP", "CV", "Python", "PyTorch", "Transformers", "Research"];
  const locationOptions = ["Remote", "Bengaluru", "Mumbai", "Delhi", "Hyderabad"];

  // generate year options dynamically
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 12 }, (_, i) => currentYear + i);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (skill) => {
    setForm((prev) => {
      const exists = prev.skills.includes(skill);
      return {
        ...prev,
        skills: exists ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user details
    localStorage.setItem("user_details", JSON.stringify(form));

    // Redirect to dashboard
    navigate("/app/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Complete Your Profile
        </h2>
        <p className="text-center text-gray-500 text-sm">
          We’ll recommend the best internships based on your details 🚀
        </p>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        {/* 10th & 12th */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="tenth"
            placeholder="10th (%)"
            value={form.tenth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="number"
            name="twelfth"
            placeholder="12th (%)"
            value={form.twelfth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        {/* Graduation */}
        <select
          name="graduation"
          value={form.graduation}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="">Select Graduation</option>
          <option value="B.Tech CSE">B.Tech CSE</option>
          <option value="B.Tech ECE">B.Tech ECE</option>
          <option value="B.Sc AI/ML">B.Sc AI/ML</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>

        {/* University */}
        <input
          type="text"
          name="university"
          placeholder="University / College Name"
          value={form.university}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />

        {/* Passing Year */}
        <select
          name="passingYear"
          value={form.passingYear}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="">Select Passing Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Skills checkboxes */}
        <div>
          <label className="font-medium text-gray-700">Skills</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {skillsOptions.map((skill) => (
              <label key={skill} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.skills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <select
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="">Preferred Location</option>
          {locationOptions.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}
