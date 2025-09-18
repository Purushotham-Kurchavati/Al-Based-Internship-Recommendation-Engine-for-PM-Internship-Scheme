import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const s = localStorage.getItem("ai_user");
    if (s) setUser(JSON.parse(s));
  }, []);

  function login({ name, email }) {
    const token = "tok_" + Math.random().toString(36).slice(2);
    const u = { name, email };
    localStorage.setItem("ai_token", token);
    localStorage.setItem("ai_user", JSON.stringify(u));
    setUser(u);
  }

  function logout() {
    localStorage.removeItem("ai_token");
    localStorage.removeItem("ai_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

/** Protected wrapper used in routes */
export function RequireAuth({ children }) {
  const token = localStorage.getItem("ai_token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
}
