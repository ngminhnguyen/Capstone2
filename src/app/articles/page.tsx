"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Baloo_2 } from "next/font/google";
import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
const weaningJourney = [
    {
        img: "/images/startingSoon-Seedstick.png",
        subtitle: "starting soon",
        desc: "Top tips on how to grow a Little Veg Lover + what to do on day 1 of weaning",
        btn: "Let's wean!",
    },
    {
        img: "/images/firstTastes-Seedstick.png",
        subtitle: "first tastes",
        desc: "Introduce new yummy tastes and play + learn with finger foods",
        btn: "Take a peek",
    },
    {
        img: "/images/6Months-Seedstick.png",
        subtitle: "from 6 months",
        desc: "Top tips on exploring new textures + exciting tastes at mealtimes",
        btn: "Find out more",
    },
    {
        img: "/images/7Months-Seedstick.png",
        subtitle: "from 7 months",
        desc: "Finger food ideas + top tips on learning to chew",
        btn: "Explore now",
    },
    {
        img: "/images/10Months-Seedstick.png",
        subtitle: "from 10 months",
        desc: "Finger food ideas + top tips on learning to chew",
        btn: "Explore now",
    },
    {
        img: "/images/12Months-Seedstick.png",
        subtitle: "from 12 months",
        desc: "Finger food ideas + top tips on learning to chew",
        btn: "Explore now",
    },
];

//Recipes
const articles = [
    {
        id: "1",
        title: "bright starts brekkie bowl",
        desc: "Perfect for hot summer days...",
        img: "/images/recipe1.webp",
        mealTime: "Luch",
        color: "bg-purple-500",
        colorMonth: "bg-green-500",
    },
    {
        id: "2",
        title: "three ways with yummy yogurt pots",
        desc: "Yogurt is one of our go-to...",
        img: "/images/recipe2.webp",
        mealTime: "Snack",
        color: "bg-yellow-500",
        colorMonth: "bg-green-500",
    },
    {
        id: "3",
        title: "rise + shine scrambly eggs",
        desc: "These speedy scrambly eggs...",
        img: "/images/recipe3.webp",
        mealTime: "Breakfast",
        color: "bg-pink-500",
        colorMonth: "bg-green-500",
    },
    {
        id: "4",
        title: "broc n roll cheesy chive pasta",
        desc: "Ready in just 15 minutes...",
        img: "/images/recipe4.webp",
        mealTime: "Dinner",
        color: "bg-pink-500",
        colorMonth: "bg-green-500",
    },
    {
        id: "5",
        title: "my first chicken curry",
        desc: "This recipe is a great way...",
        img: "/images/recipe5.webp",
        mealTime: "Snack",
        color: "bg-pink-500",
        colorMonth: "bg-green-500",
    },
    {
        id: "6",
        title: "my first chicken curry",
        desc: "This recipe is a great way...",
        img: "/images/recipe6.webp",
        mealTime: "Luch",
        color: "bg-orange-500",
        colorMonth: "bg-green-500",
    },
];
export default function Articles() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        // [
        //     Autoplay({
        //         delay: 3000,
        //         stopOnInteraction: false,
        //         stopOnMouseEnter: true, // 👉 hover là dừng
        //     }),
        // ]
    );

    // 👉 controls
    const scrollPrev = useCallback(() => {
        emblaApi && emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi && emblaApi.scrollNext();
    }, [emblaApi]);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 9;

    // 🔥 chia data theo page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = articles.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(articles.length / itemsPerPage);
    return (
        <div
            className={`min-h-full bg-[#FDECE4] text-[#4E0706] ${baloo.className}`}
        >
            <Navbar />
            <main>
                {/*Header*/}
                <section className="relative overflow-hidden bg-[#002870] text-[#4E0706] ">
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
                                        srcSet="/images/exABg.webp"
                                    />
                                    <img
                                        src="/images/exABg.webp"
                                        alt="BabyNutri header image"
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
                <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 flex flex-col gap-2">
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
                            className="h-6 w-6 border-2 border-[#4F7A9E] rounded-full"
                        />
                        What to expect at every stage
                    </p>
                    <p className="flex items-center gap-2">
                        <img
                            src="images/smileFace.png"
                            className="h-6 w-6 border-2 border-[#4F7A9E] rounded-full"
                        />
                        Top tips from nutritionist Claire
                    </p>
                    <p className="flex items-center gap-2">
                        <img
                            src="images/smileFace.png"
                            className="h-6 w-6 border-2 border-[#4F7A9E] rounded-full"
                        />
                        Yummy recipes
                    </p>
                    <p>…and much more!</p>
                </div>

                {/* Weaning journey carousel */}
                <section className="w-full bg-[#7FB3C4] ">
                    <div className="py-16 relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
                            Your little one's weaning journey
                        </h2>

                        {/* arrows */}
                        <button
                            onClick={scrollPrev}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-yellow-400 shadow-md"
                        >
                            {"<"}
                        </button>

                        <button
                            onClick={scrollNext}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-yellow-400 shadow-md"
                        >
                            {">"}
                        </button>

                        {/* embla */}
                        <div
                            className="overflow-hidden max-w-6xl mx-auto px-6"
                            ref={emblaRef}
                        >
                            <div className="flex gap-6">
                                {weaningJourney.map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                            min-w-full
                            sm:min-w-[calc(50%-12px)]
                            lg:min-w-[calc(25%-18px)]
                            shrink-0
                            text-center
                            "
                                    >
                                        <div className="flex flex-col items-center">
                                            {/* image */}
                                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                                <img
                                                    src={item.img}
                                                    alt={item.subtitle}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* title */}
                                            <h3 className="mt-6 text-xl font-semibold">
                                                {item.subtitle}
                                            </h3>

                                            {/* desc */}
                                            <p className="mt-3 text-sm max-w-55">
                                                {item.desc}
                                            </p>

                                            {/* btn */}
                                            <button className="mt-3 bg-[#FFBF00] px-5 py-2 rounded-xl hover:scale-105 transition">
                                                {item.btn}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/*Take a look at our latest articles!*/}
                <div className="max-w-7xl mx-auto px-4 py-16 md:px-12 flex justify-end">
                    {/* content block */}
                    <div className="max-w-md text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#4A1F14] mb-6">
                            meet the experts
                        </h2>

                        <p className="text-[#4A1F14] leading-relaxed mb-6">
                            We work reeeally closely with lots of experts so
                            that our yummy foods are the best for tiny tummies
                            and to make sure you have all the info you need for
                            your little one's weaning adventure.
                        </p>

                        <button className="bg-yellow-400 hover:bg-[#F4A62A]/80 px-6 py-3 rounded-xl text-black transition">
                            Tell me more
                        </button>
                    </div>
                </div>

                {/* Articles */}

                <section className="max-w-7xl mx-auto px-4 py-16 md:px-12">
                    <h2 className="text-center text-[#5A0A0A] text-lg font-semibold mb-6">
                        {articles.length} Article{articles.length !== 1 && "s"}{" "}
                        Found
                    </h2>
                    {/* GRID */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {currentData.map((item) => (
                            <div
                                key={item.id}
                                className={`relative bg-linear-to-b ${item.color}
                                        text-white rounded-2xl p-4
                                        h-180
                                        transition-all duration-300
                                        hover:-translate-y-2
                                        hover:rotate-2
                                        hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]
                                        "`}
                            >
                                {/* Meal Time */}
                                <div className="absolute -top-3 right-4 bg-pink-200 text-[#5A0A0A] text-sm px-6 py-1 rotate-5 rounded-sm border-2 border-amber-950 ">
                                    {item.mealTime}
                                </div>

                                {/* IMG */}
                                <div className="rounded-xl overflow-hidden mb-4">
                                    <img
                                        src={item.img}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="font-bold text-sm mb-2">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-xs text-gray-200 mb-4">
                                    {item.desc}
                                </p>

                                <div className="absolute bottom-4 left-4 right-3 mt-4">
                                    {/* DOTTED LINE */}
                                    <div
                                        className="w-full h-2 mb-4 
                                                        bg-[radial-gradient(circle,#ffffff_3px,transparent_3px)] 
                                                        bg-size-[14px_8px] bg-repeat-x"
                                    ></div>
                                    {/* INFO ROW */}
                                    <div className="flex items-center justify-start gap-3">
                                        {/* Prep */}
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-xs opacity-80">
                                                Prep
                                            </span>
                                            <div className="relative">
                                                <img
                                                    src="/images/recipeCircle2.png"
                                                    alt="Recipe Circle 2"
                                                    className="w-10 h-10"
                                                />
                                                <span className="absolute top-2 left-3.5 text-[#5A0A0A] flex flex-col items-center leading-none">
                                                    <span className="text-[16px] font-bold">
                                                        6
                                                    </span>
                                                    <span className="text-[8px]">
                                                        min
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Cook */}
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-xs opacity-80">
                                                Cook
                                            </span>
                                            <div className="relative">
                                                <img
                                                    src="/images/recipeCircle2.png"
                                                    alt="Recipe Circle 2"
                                                    className="w-10 h-10"
                                                />
                                                <span className="absolute top-2 left-3.5 text-[#5A0A0A] flex flex-col items-center leading-none">
                                                    <span className="text-[16px] font-bold">
                                                        6
                                                    </span>
                                                    <span className="text-[8px]">
                                                        min
                                                    </span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* AGE */}
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-xs opacity-80 invisible">
                                                Age
                                            </span>
                                            <div
                                                className={`w-12 h-12 text-white rounded-full flex items-center justify-center text-[11px] font-semibold border-2 border-[#5A0A0A] ${item.colorMonth}`}
                                            >
                                                <div className="text-center leading-none">
                                                    <div>12+</div>
                                                    <div>months</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAGINATION */}
                    <div className="flex justify-center gap-4 mt-10">
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`
                                                w-10 h-10 rounded-full border-2 flex items-center justify-center
                                                transition-all duration-200
                
                                                ${
                                                    currentPage === page
                                                        ? "bg-orange-400 border-[#5A0A0A]"
                                                        : "border-[#5A0A0A] text-[#5A0A0A] hover:bg-[#f3d9c9]"
                                                }
                                            `}
                            >
                                {page}
                            </button>
                        ))}

                        {/* NEXT */}
                        <button
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    prev < totalPages ? prev + 1 : prev,
                                )
                            }
                            className="ml-2 text-[#5A0A0A] hover:underline"
                        >
                            next &gt;
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
