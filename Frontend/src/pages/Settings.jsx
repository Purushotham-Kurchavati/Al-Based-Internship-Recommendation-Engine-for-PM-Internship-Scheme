import React, { useEffect, useState } from "react";

export default function Settings() {
  const [dark, setDark] = useState(!!localStorage.getItem("darkMode"));

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", dark ? "1" : "");
  }, [dark]);

  return (
    <div className="max-w-2xl bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold">Settings</h2>

      <label className="mt-4 flex items-center gap-3 cursor-pointer">
        <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
        <span>Enable dark mode</span>
      </label>

      <div className="mt-4 text-sm text-gray-500">
        Settings are saved to your browser (localStorage).
      </div>
    </div>
  );
}
