import React from "react";
import AuthModal from "../components/AuthModal";

const AuthPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <AuthModal />
    </div>
  );
};

export default AuthPage;
