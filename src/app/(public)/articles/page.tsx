"use client";
import Footer from "@/components/layout/PublicFooter";
import Navbar from "@/components/layout/PublicNavbar";
import { color, motion } from "framer-motion";
import { Baloo_2 } from "next/font/google";
import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CustomDropdown from "@/components/layout/CustomDropdown";
import ArticleCard from "@/components/articles/ArticleCard";
// import Image from "next/image";

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
// const articles = [
//     {
//         id: "1",
//         title: "bright starts brekkie bowl",
//         desc: "Perfect for hot summer days...",
//         img: "/images/recipe1.webp",
//         mealTime: "Luch",
//         color: "bg-purple-500",
//         colorMonth: "bg-green-500",
//     },
//     {
//         id: "2",
//         title: "three ways with yummy yogurt pots",
//         desc: "Yogurt is one of our go-to...",
//         img: "/images/recipe2.webp",
//         mealTime: "Snack",
//         color: "bg-yellow-500",
//         colorMonth: "bg-green-500",
//     },
//     {
//         id: "3",
//         title: "rise + shine scrambly eggs",
//         desc: "These speedy scrambly eggs...",
//         img: "/images/recipe3.webp",
//         mealTime: "Breakfast",
//         color: "bg-pink-500",
//         colorMonth: "bg-green-500",
//     },
//     {
//         id: "4",
//         title: "broc n roll cheesy chive pasta",
//         desc: "Ready in just 15 minutes...",
//         img: "/images/recipe4.webp",
//         mealTime: "Dinner",
//         color: "bg-pink-500",
//         colorMonth: "bg-green-500",
//     },
//     {
//         id: "5",
//         title: "my first chicken curry",
//         desc: "This recipe is a great way...",
//         img: "/images/recipe5.webp",
//         mealTime: "Snack",
//         color: "bg-pink-500",
//         colorMonth: "bg-green-500",
//     },
//     {
//         id: "6",
//         title: "my first chicken curry",
//         desc: "This recipe is a great way...",
//         img: "/images/recipe6.webp",
//         mealTime: "Luch",
//         color: "bg-orange-500",
//         colorMonth: "bg-green-500",
//     },
// ];

const articles = [
    {
        id: 1,
        title: "planner",
        mainTitle: "week 1 weaning planner",
        desc: "Follow our easy peasy weaning planner to help you through the first week of weaning.",
        months: "6+ months",
        image: "/images/weaningPlanning1.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 2,
        title: "planner",
        mainTitle: "week 2 weaning planner",
        desc: "Follow our handy weaning planner packed full of daily ideas of what to give your little one during week 2.",
        months: "6+ months",
        image: "/images/weaningPlanning2.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 3,
        title: "planner",
        mainTitle: "week 3 weaning planner",
        desc: "Week 3 of weaning is all about trying thicker purees + exciting new finger foods!",
        months: "6+ months",
        image: "/images/weaningPlanning3.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 4,
        title: "planner",
        mainTitle: "week 4 weaning planner",
        desc: "Week 4 of weaning is all about trying thicker purees + exciting new finger foods!",
        months: "6+ months",
        image: "/images/weaningPlanning3.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 5,
        title: "planner",
        mainTitle: "week 5 weaning planner",
        desc: "Week 5 of weaning is all about trying thicker purees + exciting new finger foods!",
        months: "6+ months",
        image: "/images/weaningPlanning3.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 6,
        title: "planner",
        mainTitle: "week 6 weaning planner",
        desc: "Week 6 of weaning is all about trying thicker purees + exciting new finger foods!",
        months: "6+ months",
        image: "/images/weaningPlanning3.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 7,
        title: "planner",
        mainTitle: "week 1 weaning planner",
        desc: "Follow our easy peasy weaning planner to help you through the first week of weaning.",
        months: "6+ months",
        image: "/images/weaningPlanning1.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 8,
        title: "planner",
        mainTitle: "week 2 weaning planner",
        desc: "Follow our handy weaning planner packed full of daily ideas of what to give your little one during week 2.",
        months: "6+ months",
        image: "/images/weaningPlanning2.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 9,
        title: "planner",
        mainTitle: "week 3 weaning planner",
        desc: "Week 3 of weaning is all about trying thicker purees + exciting new finger foods!",
        months: "6+ months",
        image: "/images/weaningPlanning3.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 10,
        title: "planner",
        mainTitle: "week 4 weaning planner",
        desc: "Week 4 of weaning is all about trying thicker purees + exciting new finger foods!",
        months: "6+ months",
        image: "/images/weaningPlanning3.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 11,
        title: "planner",
        mainTitle: "week 5 weaning planner",
        desc: "Week 5 of weaning is all about trying thicker purees + exciting new finger foods!",
        months: "6+ months",
        image: "/images/weaningPlanning3.webp",
        colorMonths: "bg-[#F8AFA6]",
    },
    {
        id: 12,
        title: "planner",
        mainTitle: "week 6 weaning planner",
        desc: "Week 6 of weaning is all about trying thicker purees + exciting new finger foods!",
        months: "6+ months",
        image: "/images/weaningPlanning3.webp",
        colorMonths: "bg-[#F8AFA6]",
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
    // FILTER STATES
    const [ageFilter, setAgeFilter] = useState<string[]>([]);
    const [methodFilter, setMethodFilter] = useState<string[]>([]);
    const [dietaryFilter, setDietaryFilter] = useState<string[]>([]);
    const [recipeTypeFilter, setRecipeTypeFilter] = useState<string[]>([]);
    const [occasionFilter, setOccasionFilter] = useState<string[]>([]);
    const [open, setOpen] = useState(false);
    const filterData = [
        {
            label: "Topics",
            options: [
                "when to start weaning",
                "How to wean",
                "Trying new foods",
                "Fun activities",
                "Finger foods",
            ],
            selectedValues: ageFilter,
            setSelectedValues: setAgeFilter,
        },
    ];
    // 👉 controls
    const scrollPrev = useCallback(() => {
        emblaApi && emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi && emblaApi.scrollNext();
    }, [emblaApi]);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 12;

    // 🔥 chia data theo page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = articles.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(articles.length / itemsPerPage);
    return (
        <div
            className={`min-h-full bg-[#FDECE4] text-[#4E0706] ${baloo.className}`}
        >
            <main>
                {/*Header*/}
                <section className="relative overflow-hidden bg-[#EE9B06] text-[#4E0706] ">
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
                                    helpful stuff
                                </h1>

                                <p className="mt-6 text-xl leading-8 text-white/90">
                                    Our experts have created lots of helpful
                                    stuff to support you with your little one's
                                    weaning adventure! From weaning guides +
                                    videos, to planners + fun activities,
                                    there's so much to explore!
                                </p>

                                <p className="mt-4 text-xl leading-8 text-white/90">
                                    Pssst! Visit our weaning hub for advice on
                                    every stage of the journey!
                                </p>
                                <p className="text-2xl font-bold text-white pt-20 pb-8">
                                    helpful articles...
                                </p>
                                {/* BUTTONS */}
                                <div className="flex  gap-5">
                                    <button
                                        className="
                                        bg-white
                                        text-[#5A0E0E]
                                        px-5 py-1.5
                                        rounded-full
                                        
                                        font-semibold
                                        hover:scale-105
                                        transition-all
                                        duration-300"
                                    >
                                        6 - 9 months
                                    </button>

                                    <button
                                        className="
                                            bg-white
                                            text-[#5A0E0E]
                                            px-5 py-1.5
                                            rounded-full
                                            font-semibold
                                            hover:scale-105
                                            transition-all
                                            duration-300"
                                    >
                                        10 - 18 months
                                    </button>

                                    <button
                                        className="
                                            bg-white
                                            text-[#5A0E0E]
                                            px-5 py-1.5
                                            rounded-full
                                            font-semibold
                                            hover:scale-105
                                            transition-all
                                            duration-300"
                                    >
                                        18 months +
                                    </button>
                                </div>
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
                {/* FILTERS */}
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-end">
                    {/* LEFT */}
                    <div>
                        <h1 className="text-xl text-[#5A0E0E] mb-3">
                            Filters by
                        </h1>

                        <div className="flex flex-wrap gap-6">
                            {filterData.map((filter, index) => (
                                <CustomDropdown
                                    key={index}
                                    label={filter.label}
                                    options={filter.options}
                                    selectedValues={filter.selectedValues}
                                    setSelectedValues={filter.setSelectedValues}
                                    className="
                        w-82.5
                        rounded-3xl
                        border-2 border-[#8B2A16]
                        bg-[#F5E7DF]"
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <h2 className="text-[#5A0A0A] text-lg font-semibold pb-2">
                        We have {articles.length} Article
                        {articles.length !== 1 && "s"}
                    </h2>
                </div>
                {/* Articles */}
                <section className="max-w-7xl mx-auto px-4 py-16 md:px-12">
                    {/* FIRST 6 ARTICLES */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {currentData.slice(0, 6).map((item) => (
                            <ArticleCard key={item.id} item={item} />
                        ))}
                    </div>

                    {/* EXPERT BANNER */}
                    <div className="my-16">
                        <div className="relative bg-orange-500 rounded-[30px] p-10 border-10 border-amber-50">
                            <img
                                src="/images/meetExpert1.webp"
                                alt=""
                                className=" absolute bottom-5 -rotate-40  left-10 w-20 h-20 "
                            />
                            <img
                                src="/images/meetExpert2.webp"
                                alt=""
                                className=" absolute -top-10 -rotate-20 -left-5 w-20 h-20 "
                            />
                            <img
                                src="/images/meetExpert4.webp"
                                alt=""
                                className=" absolute -rotate-20  left-1/6 w-20 h-20 "
                            />
                            <img
                                src="/images/meetExpert5.webp"
                                alt=""
                                className=" absolute -bottom-7 -rotate-70 right-0  w-20 h-20 "
                            />
                            <h2 className="text-white text-4xl font-bold text-center mb-6">
                                meet our experts
                            </h2>

                            <div className="flex justify-center">
                                <button className="bg-[#F4B233] px-10 py-4 rounded-2xl text-[#5A0A0A] hover:bg-amber-300">
                                    meet the team
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* REMAINING ARTICLES */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {currentData.slice(6).map((item) => (
                            <ArticleCard key={item.id} item={item} />
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
        </div>
    );
}
