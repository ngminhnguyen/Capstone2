"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import styles from "./page.module.css";
import { Nunito, Handlee } from "next/font/google";
import { Risque } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/PublicFooter";

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});

const risque = Risque({
    subsets: ["latin"],
    weight: ["400"],
});

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {
                email,
                password,
            });

            console.log("LOGIN RESPONSE:", res.data);
            console.log("LOGIN RESPONSE:", res.data);
            const { token, user } = res.data;

            console.log("USER:", user);
            console.log("ROLE:", user.role);

            localStorage.setItem("token", token);

            localStorage.setItem("user", JSON.stringify(user));
            window.dispatchEvent(new Event("storage"));
            const role = (user?.role || "").toLowerCase();

            if (role === "parent") {
                router.push("/parent/dashboard");
                return;
            }

            if (role === "admin") {
                router.push("/admin/dashboard");
                return;
            }

            if (role === "expert") {
                router.push("/expert");
                return;
            }

            router.push("/home");
        } catch (error: any) {
            console.error("LOGIN ERROR:", error);

            console.error("RESPONSE:", error?.response?.data);

            alert(error?.response?.data?.message || "Login failed");
        }
    };
    return (
        <div className={`min-h-full ${styles.pageBg} ${nunito.className}`}>
            <main>
                <div className="mx-auto max-w-400 px-5 py-8">
                    <div className="grid grid-cols-[1.2fr_0.8fr] gap-12 items-center bg-[url('/images/loginBgR.png')] bg-cover bg-center">
                        {/* Left image */}
                        <div className="flex justify-center">
                            <img
                                src="/images/loginBg.png"
                                alt="Login background"
                                className="w-full max-w-195"
                            />
                        </div>

                        {/* Right form */}
                        <div className="flex flex-col items-center justify-center">
                            <h1
                                className={`text-center text-5xl mb-8 font-bold ${handlee.className}`}
                            >
                                Sign In to Account
                            </h1>

                            <div className="relative w-full max-w-130 bg-white rounded-2xl shadow-md p-6 space-y-5">
                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-base font-medium mb-2"
                                    >
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="block w-full rounded-xl px-4 py-3 shadow-sm ring-1 ring-inset ring-orange-900/60 placeholder:text-orange-900/40 focus:ring-2 focus:ring-orange-700 outline-none"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-base font-medium mb-2"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="block w-full rounded-xl px-4 py-3 shadow-sm ring-1 ring-inset ring-orange-900/60 placeholder:text-orange-900/40 focus:ring-2 focus:ring-orange-700 outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>

                                {/* Remember */}
                                <div className="flex justify-between items-center text-xl">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="h-4 w-4"
                                        />

                                        <label htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>

                                    <p className="underline hover:text-orange-900 cursor-pointer">
                                        Forgot your password?
                                    </p>
                                </div>

                                {/* Login button */}
                                <button
                                    onClick={handleLogin}
                                    className="flex w-full justify-center rounded-xl bg-[#80C700] px-3 py-3 text-lg font-semibold shadow-sm hover:bg-[#6faa00] transition-colors duration-200"
                                >
                                    Log in
                                </button>

                                {/* Register */}
                                <div className="flex justify-center items-center gap-2 text-base">
                                    <span>Don't have an account?</span>

                                    <a
                                        href="/register"
                                        className="cursor-pointer text-[#FF8E9E] border-b-2 border-transparent hover:border-[#FF8E9E] transition-all duration-200"
                                    >
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
