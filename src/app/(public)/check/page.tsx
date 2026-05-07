"use client";

import { useState } from "react";
import CustomDropdown from "@/components/layout/CustomDropdown";
import { ChevronDown, ChevronUp } from "lucide-react";

const topics = [
    "when to start weaning",
    "How to wean",
    "Trying new foods",
    "Fun activities",
    "Finger foods",
];

export default function CheckPage() {
    // FILTER STATES
    const [ageFilter, setAgeFilter] = useState<string[]>([]);
    const [methodFilter, setMethodFilter] = useState<string[]>([]);
    const [dietaryFilter, setDietaryFilter] = useState<string[]>([]);
    const [recipeTypeFilter, setRecipeTypeFilter] = useState<string[]>([]);
    const [occasionFilter, setOccasionFilter] = useState<string[]>([]);
    const [open, setOpen] = useState(false);

    // FILTER DATA
    const filterData = [
        {
            label: "Age (s)",
            options: [
                "5-6 months",
                "7-8 months",
                "9-11 months",
                "12-18 months",
            ],
            selectedValues: ageFilter,
            setSelectedValues: setAgeFilter,
        },

        {
            label: "Weaning method (s)",
            options: [
                "Baby-led weaning (BLW)",
                "Traditional weaning",
                "Japanese-style weaning",
            ],
            selectedValues: methodFilter,
            setSelectedValues: setMethodFilter,
        },

        {
            label: "Dietary needs (s)",
            options: [
                "Vegetarian",
                "Soya free",
                "Nut free",
                "Gluten free",
                "Dairy free",
                "Egg free",
            ],
            selectedValues: dietaryFilter,
            setSelectedValues: setDietaryFilter,
        },

        {
            label: "Recipe type (s)",
            options: ["First tastes", "Veg puree", "Finger food", "Dips"],
            selectedValues: recipeTypeFilter,
            setSelectedValues: setRecipeTypeFilter,
        },

        {
            label: "Occasion (s)",
            options: [
                "Breakfast",
                "Lunch",
                "Dinner",
                "Snacks",
                "Pudding",
                "Parties",
            ],
            selectedValues: occasionFilter,
            setSelectedValues: setOccasionFilter,
        },
    ];

    return (
        <div className="min-h-screen bg-[#F8EEE8] p-10">
            <h1 className="text-5xl font-bold text-[#5A0E0E] mb-10">
                Recipe Filters
            </h1>

            {/* FILTERS */}
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

            <div className="w-82.5">
                {/* TITLE */}
                <h3 className="text-3xl text-[#5A0E0E] mb-4">Filter by:</h3>

                {/* BOX */}
                <div className="rounded-3xl border-2 border-[#8B2A16] bg-[#F5E7DF] overflow-hidden">
                    {/* HEADER */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-full flex items-center justify-between px-6 py-4"
                    >
                        <span className="text-2xl text-[#5A0E0E]">
                            Topics (0)
                        </span>

                        <div
                            className="
                        w-14 h-14
                        rounded-2xl
                        bg-[#F4B233]
                        flex items-center justify-center"
                        >
                            {open ? (
                                <ChevronUp className="text-[#5A0E0E]" />
                            ) : (
                                <ChevronDown className="text-[#5A0E0E]" />
                            )}
                        </div>
                    </button>

                    {/* DROPDOWN */}
                    {open && (
                        <div className="px-4 pb-4">
                            <div
                                className="
                            max-h-65
                            overflow-y-auto
                            pr-2
                            space-y-3"
                            >
                                {topics.map((topic, index) => (
                                    <label
                                        key={index}
                                        className="
                                    flex items-center gap-3
                                    border-2 border-[#8B2A16]
                                    rounded-xl
                                    px-4 py-3
                                    bg-white
                                    cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 accent-[#8B2A16]"
                                        />

                                        <span className="text-xl text-[#5A0E0E]">
                                            {topic}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
