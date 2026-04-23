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

    //Recipes
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
                {/* RECIPES */}
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
            </main>
            <Footer />
        </div>
    );
}
