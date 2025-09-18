import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import translations from "../translations";  // ✅ import dictionary

export default function Landing() {
  const languages = Object.keys(translations);

  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("lang") || "English"
  );

  useEffect(() => {
    localStorage.setItem("lang", selectedLang);
  }, [selectedLang]);

  const t = translations[selectedLang]; // ✅ shortcut

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      {/* Main Hero Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl mx-auto p-10 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold leading-snug">{t.title}</h1>
            <p className="mt-4 text-lg text-indigo-100">{t.description}</p>
            <div className="mt-6 flex gap-4">
              {/* Both buttons now point to /auth */}
              <Link
                to="/auth"
                className="px-6 py-3 bg-white text-purple-700 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
              >
                {t.getStarted}
              </Link>
              <Link
                to="/auth"
                className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-purple-700 transition"
              >
                {t.signIn}
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white p-6 rounded-xl text-gray-800 shadow">
            <h3 className="font-semibold text-lg">{t.featured}</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li>🤖 AI Research Intern — DeepLab — Remote</li>
              <li>🗣️ NLP Intern — LangWorks — Bengaluru</li>
              <li>👁️ CV Intern — VisioTech — Hybrid</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Language Selector Section */}
      <div className="bg-white/20 backdrop-blur-md py-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-lg font-semibold mb-3">🌐 {t.chooseLang}</h2>
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="w-60 p-3 rounded-lg text-gray-800 shadow focus:ring-2 focus:ring-indigo-400"
          >
            {languages.map((lang, i) => (
              <option key={i} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
