"use client";
import { color } from "framer-motion";
import React, { useState } from "react";

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

export default function RecipeWithPagination() {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 9;

    // 🔥 chia data theo page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = recipes.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(recipes.length / itemsPerPage);

    return (
        <section className="w-full bg-[#F6EDE7] py-16 px-6">
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
                        <h3 className="font-bold text-sm mb-2">{item.title}</h3>

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
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
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
                    ),
                )}

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
    );
}
