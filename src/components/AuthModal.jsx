import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth"; // ✅ Auth context

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      // ✅ simulate login/register
      login({ name: isLogin ? "User" : "New User", email });

      // ✅ after login/signup, go to User Details page
      navigate("/user-details");
    } else {
      alert("Please enter email & password");
    }
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 animate-fadeIn">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        {isLogin ? "Sign In" : "Create Account"}
      </h2>

      {/* Form */}
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-500"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {isLogin ? "Sign In" : "Register"}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google Button */}
      <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
        <FcGoogle className="mr-2 text-lg" />
        Continue with Google
      </button>

      {/* Switch link */}
      <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-indigo-600 hover:underline font-medium"
        >
          {isLogin ? "Register here" : "Login here"}
        </button>
      </p>
    </div>
  );
};

export default AuthModal;
