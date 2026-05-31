"use client";

import { Search, ArrowUpDown } from "lucide-react";
import Link from "next/link";

import { recipes } from "@/data/recipes";

export default function RecipeList() {
    return (
        <div className="w-full text-amber-950">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">
                    All
                    <span className="text-amber-950/50 text-3xl ml-1">
                        ({recipes.length})
                    </span>
                </h1>
            </div>

            {/* Search */}
            <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 flex items-center gap-3 bg-[#f7f5f2] rounded-xl px-4 py-4">
                    <Search className="w-6 h-6 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search your delicious recipes"
                        className="bg-transparent outline-none w-full text-lg"
                    />
                </div>

                <button className="flex items-center gap-2 text-gray-500">
                    <ArrowUpDown className="w-5 h-5" />

                    <span>Recently Viewed</span>
                </button>
            </div>

            {/* Recipe List */}
            <div className="space-y-6">
                {recipes.map((recipe) => (
                    <Link
                        key={recipe.id}
                        href={`/expert/recipeManagement/${recipe.id}`}
                        className="block"
                    >
                        <div
                            key={recipe.id}
                            className="bg-[#fdf7f4] 
                                        rounded-4xl 
                                        p-4 flex flex-col lg:flex-row gap-10 items-center
                                        hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            {/* Image */}
                            <div className="w-full lg:w-90">
                                <img
                                    src={recipe.img}
                                    alt={recipe.title}
                                    className="w-full h-60 object-cover rounded-[28px]"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full">
                                {/* Title */}
                                <h2 className="text-xl font-bold text-[#5A1E1E] capitalize mb-4">
                                    {recipe.title}
                                </h2>

                                {/* Ingredients */}
                                <div className="space-y-2">
                                    {recipe.ingredients.map(
                                        (ingredient: string, index: number) => (
                                            <p
                                                key={index}
                                                className="text-xl text-[#A57C7C]"
                                            >
                                                {ingredient}
                                            </p>
                                        ),
                                    )}
                                </div>

                                {/* Bottom Info */}
                                <div className="flex items-center gap-6 mt-7 flex-wrap">
                                    {/* Serves Time */}
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-xs opacity-80">
                                            Ser
                                        </span>
                                        <div className="relative">
                                            <img
                                                src="/images/recipeCircle1.png"
                                                alt="Recipe Circle 2"
                                                className="w-10 h-10"
                                            />
                                            <span className="absolute top-2 left-3.5 text-[#5A0A0A] flex flex-col items-center leading-none">
                                                <span className="text-[16px] font-bold">
                                                    {recipe.serves}
                                                </span>
                                                <span className="text-[8px]">
                                                    child
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* Pre Time */}
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
                                                    {recipe.prepTime}
                                                </span>
                                                <span className="text-[8px]">
                                                    min
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* Cooking Time */}
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
                                                    {recipe.cookTime}
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
                                            className={`w-12 h-12 text-white rounded-full flex items-center justify-center text-[11px] font-semibold border-2 border-[#5A0A0A] ${recipe.colorMonth}`}
                                        >
                                            <div className="text-center -rotate-12 leading-none">
                                                <div>{recipe.age}</div>
                                                <div>months</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
