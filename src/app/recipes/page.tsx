"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Baloo_2 } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Recipes() {
    return (
        <body
            className={`min-h-full bg-[#FDECE4] text-[#4E0706] ${baloo.className}`}
        >
            <Navbar />
            <main className="mb-8">
                {/*Header*/}
                <section className="relative overflow-hidden bg-linear-to-r from-purple-700 to-fuchsia-600 text-white">
                    <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col md:flex-row items-center gap-10">
                        {/* LEFT CONTENT (có motion) */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="flex-1 text-center md:text-left"
                        >
                            {/* <p className="text-sm mb-4 opacity-80">
                                Home / Weaning Recipes
                            </p> */}

                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                weaning recipes
                            </h1>

                            <p className="text-lg leading-relaxed max-w-xl">
                                We’ve cooked up over 200 quick + easy recipes
                                for you + your little one to make at home! From
                                very first tastes all the way to the big table,
                                there’s something yummy for the whole family to
                                enjoy!
                            </p>
                        </motion.div>

                        {/* RIGHT IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full md:w-1/2 relative"
                        >
                            <div className="flex-1 flex justify-center relative">
                                <img
                                    src="/images/recipeFridge.webp"
                                    alt="fridge"
                                    className="w-75 md:w-100 relative z-10"
                                />

                                <div className="absolute w-87.5 h-87.5 bg-purple-500 rounded-full opacity-30 blur-2xl z-0"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* WAVE */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                        <svg
                            viewBox="0 0 1440 120"
                            className="relative block h-30 w-full"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,40 C240,80 360,120 720,60 C1080,0 1200,100 1440,80 L1440,120 L0,120 Z"
                                className="fill-[#f5ebe6]"
                            />
                        </svg>
                    </div>
                </section>
                {/*Main Body*/}
                <div className="mx-auto max-w-6xl">
                    <p>Filter by:</p>
                    <div className="flex justify-between">
                        <div className="flex border border-amber-950 p-2">
                            <p>Age(0)</p>
                            <span className="">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </body>
    );
}
