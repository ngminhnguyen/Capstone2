"use client";

import { use } from "react";
import { useState } from "react";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { Camera, UserRound } from "lucide-react";
import CustomDropdown from "@/components/expert/custom-dropdown";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default function EditArticlePage({ params }: Props) {
    const { id } = use(params);

    const article = articles.find((item) => item.id === id);

    if (!article) {
        notFound();
    }

    // Load existing data
    const [coverImage, setCoverImage] = useState(article.coverImage);

    const [title, setTitle] = useState(article.title);

    const [description, setDescription] = useState(article.shortDescription);

    const [content, setContent] = useState(article.content);

    const [tags, setTags] = useState(article.tags.join(", "));

    const [category, setCategory] = useState(article.category);

    const [babyAge, setBabyAge] = useState(article.ageGroup);

    const [readingTime, setReadingTime] = useState(article.readingTime);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);

            setCoverImage(imageUrl);
        }
    };

    const handleSave = () => {
        console.log({
            title,
            description,
            content,
            category,
            babyAge,
            readingTime,
            tags,
            coverImage,
        });

        alert("Article updated!");
    };

    return (
        <div className="min-h-screen bg-[#FDF1EC] p-6">
            {/* Top Buttons */}
            <div className="flex justify-end gap-4 mb-8">
                <button className="border border-red-400 text-red-500 px-6 py-3 rounded-2xl hover:bg-red-50 transition">
                    Delete
                </button>

                <button
                    onClick={handleSave}
                    className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
                >
                    Save & Close
                </button>
            </div>

            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Cover */}
                <div className="lg:col-span-4">
                    <label
                        htmlFor="upload-cover"
                        className="bg-[#f7f5f2] rounded-[40px] h-137.5 flex items-center justify-center cursor-pointer overflow-hidden"
                    >
                        {coverImage ? (
                            <img
                                src={coverImage}
                                alt="Cover"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="text-center">
                                <Camera className="w-20 h-20 mx-auto text-amber-950 mb-4" />
                                <p className="text-2xl font-bold text-amber-950">
                                    Upload cover
                                </p>
                            </div>
                        )}

                        <input
                            id="upload-cover"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>

                {/* Right */}
                <div className="lg:col-span-8 space-y-6">
                    {/* Title */}
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-[#f7f5f2] rounded-[30px] px-8 py-7 text-4xl font-bold outline-none text-amber-950"
                    />

                    {/* Author */}
                    <div className="flex items-center gap-5">
                        <UserRound className="w-16 h-16 text-amber-950" />

                        <div>
                            <h3 className="text-3xl font-bold text-amber-950">
                                {article.author}
                            </h3>

                            <p className="text-xl text-amber-900/70">
                                Nutrition Expert
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full h-45 bg-[#f7f5f2] rounded-[30px] p-8 resize-none outline-none text-xl text-amber-950"
                    />
                </div>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <CustomDropdown
                    label="Category"
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
                    label="Baby Age"
                    placeholder="Select age"
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
                    ]}
                    selectedValues={readingTime}
                    setSelectedValues={setReadingTime}
                />
            </div>

            {/* Tags */}
            <div className="mt-10">
                <label className="block text-lg text-amber-950 mb-3">
                    Tags
                </label>

                <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full bg-[#f7f5f2] rounded-[25px] px-6 py-5 outline-none"
                />
            </div>

            {/* Content */}
            <div className="mt-10">
                <label className="block text-2xl font-bold text-amber-950 mb-4">
                    Article Content
                </label>

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full min-h-125 bg-[#f7f5f2] rounded-[35px] p-8 resize-none outline-none text-lg text-amber-950"
                />
            </div>
        </div>
    );
}
