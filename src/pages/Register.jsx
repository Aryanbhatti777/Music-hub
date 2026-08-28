import React, { useState } from "react";
import { Music2, User, Mail, Lock, AtSign, Headphones, Mic2 } from "lucide-react";
import { Navigate, useNavigate } from "react-router";

const Register = () => {
  const [role, setRole] = useState("listener");
  console.log(role)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your register API call here
    console.log("Register submitted");
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[120px]" />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl grid lg:grid-cols-2 bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-violet-600/20 via-transparent to-fuchsia-600/10 border-r border-white/10">

          <div>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                <Music2 size={23} />
              </div>

              <span className="text-2xl font-bold tracking-tight">
                Music<span className="text-violet-400">Hub</span>
              </span>
            </div>

            <div className="mt-24">
              <p className="text-violet-400 font-medium mb-4">
                YOUR MUSIC. YOUR WORLD.
              </p>

              <h1 className="text-5xl font-bold leading-tight">
                Discover.
                <br />
                Create.
                <br />
                <span className="text-violet-400">
                  Connect.
                </span>
              </h1>

              <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
                Join Music Hub and experience music in a whole
                new way. Discover artists, share your sound,
                and connect with people who love music.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Discover new music</span>
            <span>•</span>
            <span>Connect with artists</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-7 sm:p-10">

          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
              <Music2 size={21} />
            </div>

            <span className="text-xl font-bold">
              Music<span className="text-violet-400">Hub</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              Create your account
            </h2>

            <p className="text-gray-400 mt-2">
              Join the Music Hub community today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-12 bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>

              <div className="relative">
                <AtSign
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Choose a username"
                  className="w-full h-12 bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-12 bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                I am joining as
              </label>

              <div className="grid grid-cols-2 gap-3">

                {/* Listener */}
                <button
                  type="button"
                  onClick={() => setRole("listener")}
                  className={`p-4 rounded-xl border transition text-left ${role === "listener"
                      ? "border-violet-500 bg-violet-500/10 ring-1 ring-violet-500/30"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                >
                  <Headphones
                    size={21}
                    className={
                      role === "listener"
                        ? "text-violet-400"
                        : "text-gray-500"
                    }
                  />

                  <p className="mt-2 font-medium">
                    Listener
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Discover & enjoy music
                  </p>
                </button>

                {/* Artist */}
                <button
                  type="button"
                  onClick={() => setRole("artist")}
                  className={`p-4 rounded-xl border transition text-left ${role === "artist"
                      ? "border-violet-500 bg-violet-500/10 ring-1 ring-violet-500/30"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                >
                  <Mic2
                    size={21}
                    className={
                      role === "artist"
                        ? "text-violet-400"
                        : "text-gray-500"
                    }
                  />

                  <p className="mt-2 font-medium">
                    Artist
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Share & grow your music
                  </p>
                </button>

              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full h-12 bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-[0.98] transition font-semibold shadow-lg shadow-violet-600/20"
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-sm text-gray-500 mt-7">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-violet-400 hover:text-violet-300 font-medium transition"
            >
              Sign in
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;