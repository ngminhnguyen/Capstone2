"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import CustomDropdown from "@/components/expert/custom-dropdown";

export default function CreateArticles() {
    const [preview, setPreview] = useState<string | null>(null);
    const [category, setCategory] = useState("");

    const [babyAge, setBabyAge] = useState("");

    const [readingTime, setReadingTime] = useState("");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };
    const [tags, setTags] = useState("");
    const [heading, setHeading] = useState("");
    const [paragraph, setParagraph] = useState("");
    const [content, setContent] = useState("");
    return (
        <div className="p-8 ">
            {/* Top Buttons */}
            <div className="flex justify-end gap-4 mb-6">
                <button className="border border-red-500 text-red-500 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition">
                    Delete
                </button>

                <button className="border border-gray-300 text-amber-950 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                    Save & Close
                </button>

                <button className="bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-500 transition">
                    Publish
                </button>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Upload Section */}
                <div className="col-span-4">
                    <label
                        htmlFor="upload-image"
                        className="bg-[#f7f5f2] rounded-2xl p-8 flex flex-col items-center justify-center min-h-125 cursor-pointer hover:bg-[#f1efec] transition overflow-hidden"
                    >
                        {preview ? (
                            <div className="relative w-full h-125">
                                <Image
                                    src={preview}
                                    alt="Preview"
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                        ) : (
                            <>
                                <Camera className="mb-6 w-18 h-18 text-amber-950" />

                                <h2 className="text-2xl font-bold text-amber-950 text-center mb-4">
                                    Have you uploaded your article cover yet?
                                </h2>

                                <p className="text-amber-950 text-center leading-relaxed">
                                    Upload a professional cover image to make
                                    your nutrition article more engaging and
                                    trustworthy.
                                </p>
                            </>
                        )}

                        <input
                            id="upload-image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>

                {/* Content Section */}
                <div className="col-span-8 flex flex-col gap-6">
                    {/* Recipe Title */}
                    <div className="bg-[#f7f5f2] rounded-xl px-5 py-4">
                        <input
                            type="text"
                            placeholder="Enter article title"
                            className="w-full bg-transparent outline-none text-2xl font-bold text-amber-950 placeholder:text-amber-950/50"
                        />
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4">
                        <img
                            src="/images/avatar.png"
                            alt="User Avatar"
                            className="w-14 h-14 rounded-full object-cover"
                        />

                        <div>
                            <h3 className="font-bold text-2xl text-amber-950">
                                Minh Nguyễn Nguyễn
                            </h3>

                            <p className="text-amber-950">@cook_116083150</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-[#f7f5f2] rounded-xl p-5">
                        <textarea
                            placeholder="Write an introduction to your article. Share expert advice, nutrition guidance, or parenting tips for healthy child development."
                            className="w-full min-h-37.5 bg-transparent outline-none resize-none text-lg text-amber-950 placeholder:text-amber-950/50"
                        />
                    </div>
                </div>
            </div>
            {/* Dropdown Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <CustomDropdown
                    label="ArticleCategory"
                    placeholder="Select category"
                    options={[
                        "Baby Nutrition",
                        "Healthy Recipes",
                        "Feeding Tips",
                        "Growth & Development",
                        "Food Allergies",
                        "Meal Planning",
                    ]}
                    selectedValues={category}
                    setSelectedValues={setCategory}
                />

                <CustomDropdown
                    label="Baby age"
                    placeholder="Target Baby Age"
                    options={[
                        "5-6 months",
                        "7-8 months",
                        "9-11 months",
                        "12-18 months",
                    ]}
                    selectedValues={babyAge}
                    setSelectedValues={setBabyAge}
                />

                <CustomDropdown
                    label="Reading Time"
                    placeholder="Select reading time"
                    options={[
                        "3 min read",
                        "5 min read",
                        "8 min read",
                        "10 min read",
                        "15 min read",
                    ]}
                    selectedValues={readingTime}
                    setSelectedValues={setReadingTime}
                />
            </div>

            {/* Tags */}
            <div className="mt-10">
                <label className="block text-lg text-amber-950 mb-3 font-medium">
                    Tags
                </label>

                <input
                    type="text"
                    placeholder="nutrition, baby food, healthy meals"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full bg-[#f7f5f2] rounded-[25px] px-6 py-5 outline-none text-lg text-amber-950 placeholder:text-[#A88C7D]"
                />
            </div>

            {/* Content */}
            <div className="mt-10">
                <label className="block text-2xl font-bold text-amber-950 mb-4">
                    Article Content
                </label>
                <textarea
                    placeholder="Write heading of your article here..."
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    className="w-full min-h-50 bg-[#f7f5f2] p-8 resize-none outline-none text-lg text-amber-950 placeholder:text-[#A88C7D] rounded-2xl mb-8"
                />
                <textarea
                    placeholder="Write a little note for your article here..."
                    value={paragraph}
                    onChange={(e) => setParagraph(e.target.value)}
                    className="w-full min-h-50 bg-[#f7f5f2] p-8 resize-none outline-none text-lg text-amber-950 placeholder:text-[#A88C7D] rounded-2xl mb-8"
                />
                <textarea
                    placeholder="Write your article content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full min-h-50  bg-[#f7f5f2] p-8 resize-none outline-none text-lg text-amber-950 placeholder:text-[#A88C7D] rounded-2xl"
                />
            </div>
        </div>
    );
}
