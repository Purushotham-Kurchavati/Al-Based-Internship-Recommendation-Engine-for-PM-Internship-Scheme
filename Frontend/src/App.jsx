import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Recommendations from "./pages/Recommendations";
import Internship from "./pages/Internship";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { RequireAuth } from "./utils/auth";
import AuthPage from "./pages/AuthPage"; // new combined login/register
import UserDetails from "./pages/UserDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="user-details" element={<UserDetails />} />

      {/* Protected app area */}
      <Route
        path="/app/*"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="internship/:id" element={<Internship />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="/test" element={<div>✅ TEST WORKING</div>} />

      {/* fallback */}
      <Route path="*" element={<div className="p-10">Page not found</div>} />
    </Routes>
  );
}
