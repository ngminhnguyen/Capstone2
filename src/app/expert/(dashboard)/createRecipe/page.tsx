"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

export default function CreateRecipePage() {
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };

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
                                    Have you uploaded your dish photo yet?
                                </h2>

                                <p className="text-amber-950 text-center leading-relaxed">
                                    Share your homemade ingredients and cooking
                                    creations with everyone!
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
                            placeholder="Recipe Name: My Best Pumpkin Soup"
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
                            placeholder="Share your story about this dish — who inspired you, why it’s special, and how you enjoy it. Use @ to mention someone."
                            className="w-full min-h-37.5 bg-transparent outline-none resize-none text-lg text-amber-950 placeholder:text-amber-950/50"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-10 mt-10">
                {/* Ingredients Section */}
                <div className="col-span-4">
                    <h2 className="text-4xl font-bold mb-8 text-amber-950">
                        Ingredients
                    </h2>

                    <div className="flex gap-4 mb-6">
                        <div className="flex-1">
                            <label className="block text-gray-500 mb-2">
                                Servings
                            </label>

                            <input
                                type="text"
                                placeholder="2 people"
                                className="w-full bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-gray-500 mb-2">
                                Cooking Time
                            </label>

                            <input
                                type="text"
                                placeholder="1 hour 30 minutes"
                                className="w-full bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                            />
                        </div>
                    </div>

                    {/* Ingredient Items */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-xl">☰</span>

                            <input
                                type="text"
                                placeholder="250g flour"
                                className="flex-1 bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                            />

                            <button className="text-gray-400 text-2xl">
                                ⋯
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-xl">☰</span>

                            <input
                                type="text"
                                placeholder="100ml water"
                                className="flex-1 bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                            />

                            <button className="text-gray-400 text-2xl">
                                ⋯
                            </button>
                        </div>
                    </div>

                    {/* Add Buttons */}
                    <div className="flex gap-8 mt-8">
                        <button className="font-semibold text-amber-950 hover:text-orange-500 transition">
                            + Section
                        </button>

                        <button className="font-semibold text-amber-950 hover:text-orange-500 transition">
                            + Ingredient
                        </button>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="col-span-8">
                    <h2 className="text-4xl font-bold mb-8 text-amber-950">
                        Steps
                    </h2>

                    {/* Cooking Time */}
                    <div className="mb-6">
                        <label className="block text-gray-500 mb-2">
                            Cooking Time
                        </label>

                        <input
                            type="text"
                            placeholder="1 hour 30 minutes"
                            className="bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                        />
                    </div>

                    {/* Step 1 */}
                    <div className="mb-10">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-amber-950 text-white flex items-center justify-center font-bold">
                                    1
                                </div>

                                <span className="text-gray-400 text-xl">
                                    ☰
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        placeholder="Mix flour and water until thickened"
                                        className="flex-1 bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                                    />

                                    <button className="text-gray-400 text-2xl">
                                        ⋯
                                    </button>
                                </div>

                                {/* Upload Image */}
                                <div className="mt-4 w-40 h-40 bg-[#f7f5f2] rounded-2xl flex items-center justify-center text-4xl text-gray-300 cursor-pointer hover:bg-[#f1efec] transition">
                                    <img src="/images/camera.png" alt="Upload Image" className="w-20 h-20" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-10">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-amber-950 text-white flex items-center justify-center font-bold">
                                    2
                                </div>

                                <span className="text-gray-400 text-xl">
                                    ☰
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        placeholder="Cover the mixture and leave at room temperature for 24–36 hours"
                                        className="flex-1 bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                                    />

                                    <button className="text-gray-400 text-2xl">
                                        ⋯
                                    </button>
                                </div>

                                <div className="mt-4 w-40 h-40 bg-[#f7f5f2] rounded-2xl flex items-center justify-center text-4xl text-gray-300 cursor-pointer hover:bg-[#f1efec] transition">
                                    <img src="/images/camera.png" alt="Upload Image" className="w-20 h-20" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add Step */}
                    <button className="font-semibold text-amber-950 hover:text-orange-500 transition mb-8">
                        + Add Step
                    </button>

                    {/* Secret Tip */}
                    <textarea
                        placeholder="What is your secret tip to make this dish delicious?"
                        className="w-full min-h-[120px] bg-[#f7f5f2] rounded-2xl px-5 py-4 outline-none resize-none"
                    />
                </div>
            </div>
        </div>
    );
}
