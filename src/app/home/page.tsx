"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { it } from "node:test";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
type Direction = "next" | "prev";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

type SupportItem = {
    title: string;
    desc: string;
    image: string;
    cta: string;
};

const cards = [
    {
        title: "weaning support",
        description: "get help + advice for every step of your weaning journey",
        image: "/images/homeWeaning.webp",
        href: "/weaning",
        button: "weaning",
    },
    {
        title: "toddler guide",
        description: "explore our handy guide to feeding toddler tums",
        image: "/images/homeToddler.webp",
        href: "/toddler",
        button: "learn more",
    },
    {
        title: "tasty recipes",
        description: "over 200 quick and easy recipes to try at home",
        image: "/images/homeTastyRecipes.webp",
        href: "/recipes",
        button: "explore recipes",
    },
    {
        title: "helpful stuff",
        description: "helpful guides, planners + tips from our experts",
        image: "/images/homeHelpfulStuff.webp",
        href: "/helpful",
        button: "read more",
    },
];
export default function Home() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            //vòng lập để chạy vô hạng, nếu false là chạy 1 lần thôi, còn true là chạy vô hạng
            loop: true,
            align: "start",
        },
        //chạy tự động, delay là thời gian chuyển slide, disableOnInteraction: false là khi người dùng tương tác với slider thì vẫn tiếp tục chạy tự động
        // [Autoplay({ delay: 3000 })],
    );
    return (
        <div
            className={`min-h-full bg-[#FDECE4] text-[#4E0706] ${baloo.className}`}
        >
            <Navbar />
            <main>
                {/*Header*/}
                <section className="relative overflow-hidden bg-[#b63b5d] text-[#4E0706] ">
                    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
                        <div className="flex flex-col items-center gap-10 md:flex-row">
                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="w-full md:w-1/2"
                            >
                                <h1 className="text-base font-bold leading-tight md:text-5xl">
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
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full md:w-1/2"
                            >
                                <picture>
                                    <source
                                        media="(max-width: 767px)"
                                        srcSet="/images/homeSlider.webp"
                                    />
                                    <img
                                        src="/images/homeSlider.webp"
                                        alt="Ella's Kitchen Hero"
                                    />
                                </picture>
                            </motion.div>
                        </div>
                    </div>
                    {/* Bottom decorative wave */}
                    {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <motion.svg
                    viewBox="0 0 3000 160"
                    className="block h-24 w-[200%]"
                    preserveAspectRatio="none"
                    animate={{ x: [0, -900] }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <path
                        d="M0,100 C120,50 240,110 360,80 C480,50 600,110 720,80 C840,50 960,110 1080,80 C1200,50 1320,110 1440,80 C1560,50 1680,110 1800,80 C1920,50 2040,110 2160,80 C2280,50 2400,110 2520,80 C2640,50 2760,110 2880,80 L2880,160 L0,160 Z"
                        className="fill-[#f5ebe6]"
                    />
                </motion.svg>
            </div> */}

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
                {/*Main Body*/}
                <section className="mx-auto max-w-6xl px-4 py-8 gap-4 flex flex-col">
                    <div className="px-10 py-10 md:grid-cols-2 rounded-2xl text-center">
                        <h2 className="text-[24px] font-bold">
                            Baby Feeding Tips & Essentials
                        </h2>
                        <p>
                            Helpful guides, tools, and quick tips for easier
                            baby meal preparation
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 px-10 py-10 md:grid-cols-2 bg-[#F99191] rounded-2xl">
                        <div className="md:text-left  flex flex-col justify-center gap-2 text-center">
                            <h2 className="text-[24px] font-bold mb-5">
                                Baby Weaning & Nutrition Guide
                            </h2>
                            <p>
                                Explore essential guidance for your baby’s early
                                nutrition journey, including how weaning helps
                                babies get used to solid meals, ways to maintain
                                balanced nutrition, and recommendations on how
                                long breastfeeding should continue. This section
                                gives parents a quick overview before diving
                                into detailed advice.
                            </p>
                            <button className="self-center md:self-start bg-[#F4B631] py-2 px-3 rounded hover:bg-yellow-400 transition duration-300">
                                View Utensils
                            </button>
                        </div>
                        <div>
                            <img
                                src="/images/homeBaby2.webp"
                                alt="Cooking Utensils"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 px-10 py-10 md:grid-cols-2 bg-[#A2F29E] rounded-2xl">
                        <div className="md:text-left  flex flex-col justify-center gap-2 text-center">
                            <h2 className="text-[24px] font-bold mb-5">
                                cooking utensils
                            </h2>
                            <p>
                                Please check what tools you have for preparing
                                food?
                            </p>
                            <p>
                                The necessary tools for preparing baby food
                                don't necessarily have to be those specifically
                                designed for children; you can use items you
                                already have at home. First, check what tools
                                you have.
                            </p>
                            <button className="self-center md:self-start bg-[#F4B631] py-2 px-3 rounded hover:bg-yellow-400 transition duration-300">
                                View Utensils
                            </button>
                        </div>
                        <div>
                            <img
                                src="/images/homeUtensils.webp"
                                alt="Cooking Utensils"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 px-10 py-10 md:grid-cols-2 bg-[#ADE4FF] rounded-2xl">
                        <div className="md:text-left  flex flex-col justify-center gap-2 text-center">
                            <h2 className="text-[24px] font-bold mb-5">
                                Tips for faster cooking
                            </h2>

                            <p>
                                Discover simple and practical tips that help
                                parents prepare baby meals faster while still
                                ensuring nutrition and safety. From time-saving
                                ingredient prep to easy cooking methods, this
                                section helps make daily meal preparation more
                                convenient.
                            </p>
                            <button className="self-center md:self-start bg-[#F4B631] py-2 px-3 rounded hover:bg-yellow-400 transition duration-300">
                                View Tips
                            </button>
                        </div>
                        <div>
                            <img
                                src="/images/homeBaby1.webp"
                                alt="Cooking Utensils"
                            />
                        </div>
                    </div>
                </section>
                {/*Support Section*/}
                <section className="mx-auto max-w-6xl px-4 py-16">
                    <div className="mb-12 text-center max-w-2xl mx-auto">
                        <h2 className="text-[24px] font-bold">
                            supporting happy mealtimes
                        </h2>
                        <p className="mx-auto mt-6 max-w-4xl">
                            We know that weaning + mealtimes can be a
                            rollercoaster with lots of twists + turns! And
                            making simple, organic food that's naturally tasty
                            for tiny tummies is just the start! We're here to
                            support you and your little one every step of the
                            way, helping you both navigate the exciting world of
                            foodie fun. With plenty of tips, advice, and lots of
                            love, we’re with you from that very first taste all
                            the way to the big table!
                        </p>
                    </div>

                    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="">
                            {/* slider */}
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex gap-6">
                                    {cards.map((card) => (
                                        <div
                                            key={card.title}
                                            className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)]"
                                        >
                                            <div className="overflow-hidden rounded-[28px] transition-all duration-300 hover:-translate-y-1">
                                                <img
                                                    className=" w-full object-cover"
                                                    src={card.image}
                                                    alt={card.title}
                                                    width={400}
                                                    height={300}
                                                />

                                                <div className="space-y-4 p-6 text-center">
                                                    <p className="text-24 font-bold">
                                                        {card.title}
                                                    </p>
                                                    <p className="text-sm">
                                                        {card.description}
                                                    </p>

                                                    <Link
                                                        href={card.href}
                                                        className="bg-[#FFCB2B] hover:bg-[#FFCB2B]/80 py-2 px-5 rounded-lg text-sm  transition duration-300"
                                                    >
                                                        {card.button}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
