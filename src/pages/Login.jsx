import React, { useState } from "react";
import {
    Music2,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Headphones,
} from "lucide-react";
import { Navigate, useNavigate } from "react-router";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add your login API call here
        console.log("Login submitted");
    };

    return (
        <div className="min-h-screen bg-[#07070a] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />

            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[120px]" />

            {/* Main Card */}
            <div className="relative w-full max-w-5xl grid lg:grid-cols-2 bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">

                {/* Left Side */}
                <div className="hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-violet-600/20 via-transparent to-fuchsia-600/10 border-r border-white/10">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                            <Music2 size={23} />
                        </div>

                        <span className="text-2xl font-bold tracking-tight">
                            Music<span className="text-violet-400">Hub</span>
                        </span>
                    </div>

                    {/* Content */}
                    <div className="max-w-md">
                        <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6">
                            <Headphones
                                size={28}
                                className="text-violet-400"
                            />
                        </div>

                        <h1 className="text-5xl font-bold leading-tight">
                            Your music.
                            <br />
                            <span className="text-violet-400">
                                Your vibe.
                            </span>
                        </h1>

                        <p className="text-gray-400 mt-6 leading-relaxed">
                            Sign in to continue discovering new music,
                            following your favorite artists, and enjoying
                            everything Music Hub has to offer.
                        </p>
                    </div>

                    {/* Bottom */}
                    <p className="text-sm text-gray-500">
                        Music that brings people together.
                    </p>
                </div>

                {/* Right Side */}
                <div className="p-7 sm:p-10 lg:p-12">

                    {/* Mobile Logo */}
                    <div className="flex lg:hidden items-center gap-3 mb-10">
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
                            Welcome back
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Sign in to continue to Music Hub.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

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
                                    className="w-full h-13 bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder:text-gray-600"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-gray-300">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="text-sm text-violet-400 hover:text-violet-300 transition"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <div className="relative">
                                <Lock
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    className="w-full h-13 bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-12 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 placeholder:text-gray-600"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 accent-violet-600 cursor-pointer"
                            />

                            <label
                                htmlFor="remember"
                                className="text-sm text-gray-400 cursor-pointer"
                            >
                                Remember me
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full h-13 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-[0.98] transition font-semibold shadow-lg shadow-violet-600/20"
                        >
                            Sign In
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-7">
                        <div className="h-px flex-1 bg-white/10" />

                        <span className="text-xs text-gray-600">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="text-violet-400 hover:text-violet-300 font-medium transition"
                        >
                            Create account
                        </button>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;