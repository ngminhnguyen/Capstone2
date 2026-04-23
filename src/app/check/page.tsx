"use client";
import React from "react";

const recipes = [
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

export default function PopularRecipes() {
    return (
        <section className="w-full bg-[#EFD36A] py-16">
            {/* TITLE */}
            <h2 className="text-center text-4xl md:text-5xl font-serif text-[#5A0A0A] mb-12">
                most popular recipes
            </h2>

            {/* CARDS */}
            <div className="flex justify-center gap-6 px-6 overflow-x-auto">
                {recipes.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* CARD */}
                        <div className="relative ">
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

                            {/* BADGE */}
                            <div
                                className={`absolute -top-2 left-1/2 -translate-x-1/2 ${item.color} text-white text-sm px-4 py-2 rounded-full border-2 border-[#5A0A0A] rotate-[8deg]`}
                            >
                                {item.age}
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
            <div className="flex justify-center gap-4 mt-10">
                {[0, 1, 2, 3, 4].map((dot) => (
                    <div
                        key={dot}
                        className={`w-5 h-5 rounded-full border-2 border-white ${
                            dot === 2 ? "bg-orange-400" : "bg-[#E6C06A]"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
