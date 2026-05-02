"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
export default function Articles() {
    return (
        <div
            className={`min-h-full bg-[#FDECE4] text-[#4E0706] ${baloo.className}`}
        >
            <Navbar />
            <main>
                {/*Header*/}
                <section className="relative overflow-hidden bg-[#B20B0B] text-[#4E0706] ">
                    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
                        <div className="flex flex-col items-center gap-10 md:flex-row">
                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="w-full md:w-1/2"
                            >
                                <h1 className="text-base text-white/90 font-bold leading-tight md:text-5xl">
                                    Peas-ed to meet you, we&apos;re BabyNutri!
                                </h1>

                                <p className="mt-6 text-sm leading-8 text-white/90">
                                    BabyNutri is a smart web-based platform that
                                    helps parents build healthy eating habits
                                    for their children through personalized meal
                                    planning, growth tracking, and
                                    expert-supported nutrition guidance. Our
                                    goal is to make child nutrition easier,
                                    safer, and more suitable for every stage of
                                    development.
                                </p>

                                <p className="mt-4 text-sm leading-8 text-white/90">
                                    Every child has unique needs, so BabyNutri
                                    provides meal recommendations based on age,
                                    growth data, allergies, and feeding
                                    preferences. With trusted recipes, nutrition
                                    articles, and expert consultation, the
                                    platform supports parents in making better
                                    daily nutrition decisions.
                                </p>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full md:w-1/2"
                            >
                                <picture>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="/images/articlesBg.webp"
                                    />
                                    <img
                                        src="/images/articlesBg.webp"
                                        alt="Ella's Kitchen Hero"
                                    />
                                </picture>
                            </motion.div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                        <svg
                            viewBox="0 0 1440 120"
                            className="relative block h-20 w-full"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,40 C240,80 360,120 720,60 C1080,0 1200,100 1440,80 L1440,120 L0,120 Z"
                                className="fill-[#FDECE4]"
                            />
                        </svg>
                    </div>
                </section>
                {/*Take a look at our latest articles!*/}
                <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
                    <h2 className=" text-2xl font-bold">let's get weaning</h2>
                    <p className="max-w-2xl">
                        At BabyNutri, we take the stress out of weaning + put
                        the fun into mealtimes! Explore our weaning hub as we
                        guide you through every stage of your little one's
                        journey.
                    </p>
                    <p>Look out for:</p>
                    <p className="flex items-center gap-2">
                        <img
                            src="images/smileFace.png"
                            className="h-8 w-8 border-2 border-[#4F7A9E] rounded-full"
                        />
                        What to expect at every stage
                    </p>
                    <p className="flex items-center gap-2">
                        <img
                            src="images/smileFace.png"
                            className="h-8 w-8 border-2 border-[#4F7A9E]"
                        />
                        Top tips from nutritionist Claire
                    </p>
                    <p className="flex items-center gap-2">
                        <img
                            src="images/smileFace.png"
                            className="h-8 w-8 border-2 border-[#4F7A9E]"
                        />
                        Yummy recipes
                    </p>
                    <p>…and much more!</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
