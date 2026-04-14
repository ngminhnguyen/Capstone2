import styles from "./page.module.css";
import { Nunito, Handlee } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Risque } from "next/font/google";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    return (
        <div className={`min-h-full ${styles.pageBg} ${nunito.className}`}>
            <Navbar />
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
                        <div className=" flex flex-col items-center justify-center ">
                            <h1
                                className={`text-center text-5xl mb-8 font-bold  ${handlee.className}`}
                            >
                                Sign In to Account
                            </h1>

                            <div className="relative w-full max-w-130 bg-white rounded-2xl shadow-md p-6 space-y-5">
                                {/* Email */}
                                {/* <FontAwesomeIcon
                                    icon={faStar}
                                    className="absolute left-0 -top-2 w-10 -rotate-20 text-[#FF8E9E] stroke-[#5B2C06] stroke-30"
                                /> */}
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
                                        className="block w-full rounded-xl px-4 py-3 shadow-sm ring-1 ring-inset ring-orange-900/60 placeholder:text-orange-900/40 focus:ring-2 focus:ring-orange-700 outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>

                                {/* năng cấp mà chưa làm đc */}
                                {/* <div className="mb-4">
                                            <label
                                                htmlFor="CustomerPassword"
                                                className="mb-2 block text-sm font-medium text-gray-700"
                                            >
                                                Password{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
            
                                            <div className="relative">
                                                <input
                                                    dir="ltr"
                                                    type={
                                                        showPassword ? "text" : "password"
                                                    }
                                                    name="customer[password]"
                                                    id="CustomerPassword"
                                                    autoComplete="current-password"
                                                    required
                                                    placeholder="Your Password"
                                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-sm outline-none transition focus:border-black"
                                                />
            
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(!showPassword)
                                                    }
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                                                >
                                                    {showPassword ? (
                                                        // Eye Close
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M2.9095 10.8282L3.45467 11.0788L3.45467 11.0788L2.9095 10.8282ZM21.0913 13.1718L20.5462 12.9212L20.5462 12.9212L21.0913 13.1718ZM12.0004 4.4C7.72364 4.4 4.03969 6.9328 2.36433 10.5777L3.45467 11.0788C4.94152 7.84406 8.20954 5.6 12.0004 5.6V4.4ZM12.0004 19.6C16.2772 19.6 19.9612 17.0672 21.6365 13.4223L20.5462 12.9212C19.0593 16.1559 15.7913 18.4 12.0004 18.4V19.6Z"
                                                                fill="currentColor"
                                                            />
                                                            <path
                                                                d="M19.5761 3.57574L3.57615 19.5757"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        // Eye Open
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M2.27407 13.2555C1.90864 12.4593 1.90864 11.5407 2.27407 10.7445C3.96562 7.05903 7.6844 4.5 12 4.5C16.3156 4.5 20.0344 7.05903 21.7259 10.7445C22.0914 11.5407 22.0914 12.4593 21.7259 13.2555C20.0344 16.941 16.3156 19.5 12 19.5C7.6844 19.5 3.96562 16.941 2.27407 13.2555Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.2"
                                                            />
                                                            <path
                                                                d="M15.2096 12C15.2096 13.7752 13.7726 15.2143 12 15.2143C10.2274 15.2143 8.79045 13.7752 8.79045 12C8.79045 10.2248 10.2274 8.78571 12 8.78571C13.7726 8.78571 15.2096 10.2248 15.2096 12Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.2"
                                                            />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                        </div> */}

                                {/* Remember + forgot */}
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                                        />
                                        <label htmlFor="remember">
                                            Remember me
                                        </label>
                                    </div>

                                    <p className="underline hover:text-orange-900 cursor-pointer">
                                        Forgot your password?
                                    </p>
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-xl bg-[#80C700] px-3 py-3 text-lg font-semibold shadow-sm hover:bg-[#6faa00] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#80C700] focus-visible:ring-offset-2"
                                >
                                    Log in
                                </button>

                                {/* Sign up */}
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
            <Footer />
        </div>
    );
}
