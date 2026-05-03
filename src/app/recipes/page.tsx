"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Baloo_2 } from "next/font/google";
import React, { useState } from "react";
import CustomDropdown from "@/components/layout/CustomDropdown";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Recipes() {
    const [ageFilter, setAgeFilter] = useState<string[]>([]);
    const [methodFilter, setMethodFilter] = useState<string[]>([]);
    const [dietaryFilter, setDietaryFilter] = useState<string[]>([]);
    const [recipeTypeFilter, setRecipeTypeFilter] = useState<string[]>([]);
    const [OccasionFilter, setOccasionFilter] = useState<string[]>([]);

    // DATA demo
    const recipesFind = [
        { name: "Recipe 1", age: "6 months +" },
        { name: "Recipe 2", age: "7 months +" },
        { name: "Recipe 3", age: "10 months +" },
    ];

    // FILTER LOGIC
    const filteredData =
        ageFilter.length === 0
            ? recipesFind
            : recipesFind.filter((item) => ageFilter.includes(item.age));

    //Recipes Popular
    const recipesPopular = [
        {
            title: "Golden pumpkin spiced porridge",
            img: "/images/popularRecipe1.webp",
            age: "7+ months",
            color: "bg-purple-500",
        },
        {
            title: "Broccoli puree recipe",
            img: "/images/popularRecipe2.webp",
            age: "4-6 months",
            color: "bg-pink-500",
        },
        {
            title: "Easy Cheesy Eggy Bread",
            img: "/images/popularRecipe3.webp",
            age: "7+ months",
            color: "bg-purple-500",
        },
        {
            title: "Dairy Free Sweetcorn and Chive Pancake Fingers",
            img: "/images/popularRecipe4.webp",
            age: "7+ months",
            color: "bg-purple-500",
        },
        {
            title: "My first chicken curry",
            img: "/images/popularRecipe5.webp",
            age: "7+ months",
            color: "bg-purple-500",
        },
    ];

    //Recipes
    const recipes = [
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

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 9;
    // 🔥 chia data theo page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = recipes.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(recipes.length / itemsPerPage);
    //Love button
    const [liked, setLiked] = useState<Record<string, boolean>>({});
    return (
        <div
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
                                className="fill-[#FDECE4]"
                            />
                        </svg>
                    </div>
                </section>
                {/*Main Body Filter*/}
                <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* FILTER */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <span className="font-medium">Filter by:</span>

                        <div className="flex items-center gap-3 flex-wrap">
                            <CustomDropdown
                                label="Age (s)"
                                options={[
                                    "5-6 months",
                                    "7-8 months",
                                    "9-11 months",
                                    "12-18 months",
                                ]}
                                selectedValues={ageFilter}
                                setSelectedValues={setAgeFilter}
                            />
                            {/* RESULT */}
                            {/* <div className="mt-6">
                                {filteredData.map((item, index) => (
                                    <div key={index} className="p-2 border-b">
                                        {item.name} - {item.age}
                                    </div>
                                ))}
                            </div> */}
                            <CustomDropdown
                                label="Weaning method (s)"
                                options={[
                                    "Baby-led weaning (BLW)",
                                    "Traditional weaning",
                                    "Japanese-style weaning",
                                ]}
                                selectedValues={methodFilter}
                                setSelectedValues={setMethodFilter}
                            />

                            <CustomDropdown
                                label="Dietary needs (s)"
                                options={[
                                    "Vegetarian",
                                    "Soya free",
                                    "Nut free",
                                    "Gluten free",
                                    "Dairy free",
                                    "Egg free",
                                ]}
                                selectedValues={dietaryFilter}
                                setSelectedValues={setDietaryFilter}
                            />
                            <CustomDropdown
                                label="Recipe type (s)"
                                options={[
                                    "First tastes",
                                    "Veg puree",
                                    "Finger food",
                                    "Dips",
                                ]}
                                selectedValues={recipeTypeFilter}
                                setSelectedValues={setRecipeTypeFilter}
                            />

                            <CustomDropdown
                                label="Occasion (s)"
                                options={[
                                    "Breakfast",
                                    "Lunch",
                                    "Dinner",
                                    "Snacks",
                                    "Pudding",
                                    "Parties",
                                ]}
                                selectedValues={OccasionFilter}
                                setSelectedValues={setOccasionFilter}
                            />
                        </div>
                    </div>

                    {/* ORDER */}
                    {/* <div className="flex items-center gap-3">
                                    <span className="font-medium text-[#4E0706]">
                                        Order by:
                                    </span>
                
                                    <CustomDropdown
                                        label="What's new"
                                        options={["What's new", "Popular", "Oldest"]}
                                    />
                                </div> */}
                </div>
                {/* RECIPES POPULAR*/}
                <section className="relative w-full py-16">
                    {/* BACKGROUND 1/2 */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[#EFD36A] z-0"></div>

                    {/* CONTENT */}
                    <div className="relative z-10">
                        {/* TITLE */}
                        <h2 className="text-center text-4xl md:text-5xl font-serif text-[#5A0A0A] mb-12">
                            most popular recipes
                        </h2>

                        {/* CARDS */}
                        <div className="flex justify-center gap-6 px-6">
                            {recipesPopular.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center"
                                >
                                    {/* BADGE */}
                                    <div
                                        className={`absolute -top-8 left-1/2 -translate-x-1/2 z-20`}
                                    >
                                        <div
                                            className={`
                                     ${item.color}
                                    w-15 h-15
                                    flex flex-col items-center justify-center
                                     text-white
                                    border-2 border-[#5A0A0A]
                                    shadow-md
                                    rotate-[8deg]
                                    rounded-[60%_40%_55%_45%/55%_60%_40%_45%]
                                    `}
                                        >
                                            <span className="text-[14px] font-bold leading-none">
                                                {item.age.split(" ")[0]}
                                            </span>
                                            <span className="text-[12px] leading-none">
                                                {item.age.split(" ")[1]}
                                            </span>
                                        </div>
                                    </div>
                                    {/* CARD */}
                                    <div className=" w-55 overflow-visible">
                                        {/* IMAGE */}
                                        <div className="border-3 border-amber-950 rounded-2xl">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full object-cover rounded-2xl"
                                                width={400}
                                                height={300}
                                            />
                                        </div>
                                    </div>

                                    {/* TITLE */}
                                    <p className="mt-4 text-center text-[#5A0A0A] font-medium max-w-50">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* DOTS */}
                        <div className="flex justify-center gap-4 mt-6">
                            {[0, 1, 2, 3, 4].map((dot) => (
                                <div
                                    key={dot}
                                    className={`w-5 h-5 rounded-full border-2 border-white ${
                                        dot === 2
                                            ? "bg-orange-400"
                                            : "bg-[#E6C06A]"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* RECIPES */}
                <section className="w-full">
                    <h2 className="text-center text-[#5A0A0A] text-lg font-semibold mb-6">
                        {recipes.length} Recipe{recipes.length !== 1 && "s"}{" "}
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

                                        {/* Love */}
                                        <div
                                            onClick={() =>
                                                setLiked((prev) => ({
                                                    ...prev,
                                                    [item.id]: !prev[item.id],
                                                }))
                                            }
                                            className="w-14 h-14 cursor-pointer"
                                        >
                                            <svg
                                                viewBox="0 0 200 200"
                                                className="w-full h-full"
                                            >
                                                {/* background giữ nguyên */}
                                                {/* <rect width="200" height="200" fill="#6B21A8" /> */}

                                                {/* ❤️ HEART SHAPE (chuẩn hơn) */}
                                                <path
                                                    d="
                                                        M100 170
                                                        C 40 120, 20 70, 60 50
                                                        C 80 40, 100 60, 100 60
                                                        C 100 60, 120 40, 140 50
                                                        C 180 70, 160 120, 100 170
                                                        Z
                                                        "
                                                    fill={
                                                        liked[item.id]
                                                            ? "#EC4899"
                                                            : "#E5E5E5"
                                                    }
                                                    stroke="#4A0F0F"
                                                    strokeWidth="6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="transition-all duration-500"
                                                />
                                            </svg>
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
