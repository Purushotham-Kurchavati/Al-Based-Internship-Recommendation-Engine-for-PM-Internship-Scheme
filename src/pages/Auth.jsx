import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-4">
      {/* Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl relative">
        {/* Tabs */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${
              isLogin ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-lg font-semibold transition ${
              !isLogin ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        {isLogin ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Welcome Back 👋
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Sign In
              </button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-4">
              Forgot password? <Link to="/reset" className="text-indigo-600">Reset</Link>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Create Account ✨
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Register
              </button>
            </form>
          </>
        )}

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-50 transition">
          <FcGoogle size={24} /> Continue with Google
        </button>
      </div>
    </div>
  );
}
