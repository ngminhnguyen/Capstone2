"use client";

import { Search, ArrowUpDown } from "lucide-react";

import { recipes } from "@/data/recipes";

export default function RecipeList() {
    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-5xl font-bold">
                    All
                    <span className="text-gray-400 text-3xl ml-1">
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
            <div className="space-y-4">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-[#f7f5f2] rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex"
                    >
                        {/* Image */}
                        <img
                            src={recipe.img}
                            alt={recipe.title}
                            className="w-44 h-44 object-cover"
                        />

                        {/* Content */}
                        <div className="flex-1 p-5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {recipe.title}
                                </h2>

                                <p className="text-gray-500 mt-2 text-lg">
                                    {recipe.ingredients} • {recipe.color}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={recipe.colorMonth}
                                    alt={recipe.desc}
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <span className="text-gray-500 text-xl">
                                    {recipe.desc}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
