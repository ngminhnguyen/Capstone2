"use client";

import { use, useState } from "react";
import Image from "next/image";
import { Camera, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomDropdown from "@/components/expert/custom-dropdown";
import { articles, ContentBlock } from "@/data/articles";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default function EditArticlePage({ params }: Props) {
    const router = useRouter();

    const { id } = use(params);

    const article = articles.find((item) => item.id === id);

    if (!article) {
        return <div className="p-8 text-amber-950">Article not found</div>;
    }

    // Basic Info
    const [title, setTitle] = useState(article.title);

    const [shortDescription, setShortDescription] = useState(
        article.shortDescription,
    );

    const [category, setCategory] = useState(article.category);

    const [babyAge, setBabyAge] = useState(article.ageGroup);

    const [readingTime, setReadingTime] = useState(article.readingTime);

    const [tags, setTags] = useState(article.tags.join(", "));

    const [views, setViews] = useState(article.views);

    const [status, setStatus] = useState(article.status);

    const [preview, setPreview] = useState(article.coverImage);

    // ContentBlock[]
    const [content, setContent] = useState<ContentBlock[]>(article.content);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);

            setPreview(imageUrl);
        }
    };

    const updateBlock = (index: number, updated: ContentBlock) => {
        const updatedContent = [...content];

        updatedContent[index] = updated;

        setContent(updatedContent);
    };

    const handleSave = () => {
        const updatedArticle = {
            ...article,
            title,
            shortDescription,
            category,
            ageGroup: babyAge,
            readingTime,
            views,
            status,
            coverImage: preview,
            tags: tags.split(",").map((tag) => tag.trim()),
            content,
        };

        console.log(updatedArticle);

        alert("Article updated!");

        router.push(`/expert/articleManagement/${id}`);
    };

    const handleDeleteImage = () => {
        setPreview("");
    };

    return (
        <div className="p-8">
            {/* Top Buttons */}
            <div className="flex justify-end gap-4 mb-6">
                <button
                    onClick={() => router.back()}
                    className="border border-red-500 text-red-500 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
                >
                    Cancel
                </button>

                <button
                    onClick={handleSave}
                    className="border border-gray-300 text-amber-950 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                    Save & Close
                </button>

                <button className="bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-500 transition">
                    {status === "Published" ? "Published" : "Publish"}
                </button>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Upload */}
                <div className="col-span-4">
                    <div className="bg-[#f7f5f2] rounded-2xl p-6 min-h-125 overflow-hidden relative">
                        {preview ? (
                            <div className="relative w-full h-125">
                                <Image
                                    src={preview}
                                    alt="Preview"
                                    fill
                                    className="object-cover rounded-2xl"
                                />

                                {/* Action Buttons */}
                                <div className="absolute bottom-4 right-4 flex items-center bg-black/40 backdrop-blur-md rounded-full px-3 py-2 gap-3">
                                    {/* Edit Image */}
                                    <label
                                        htmlFor="upload-image"
                                        className="cursor-pointer"
                                    >
                                        <Pencil
                                            size={20}
                                            className="text-white hover:scale-110 transition"
                                        />
                                    </label>

                                    <div className="w-px h-5 bg-white/40" />

                                    {/* Delete Image */}
                                    <button
                                        type="button"
                                        onClick={handleDeleteImage}
                                    >
                                        <Trash2
                                            size={20}
                                            className="text-white hover:text-red-400 transition"
                                        />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <label
                                htmlFor="upload-image"
                                className="flex flex-col items-center justify-center h-125 cursor-pointer"
                            >
                                <Camera className="mb-6 w-18 h-18 text-amber-950" />

                                <h2 className="text-2xl font-bold text-amber-950 text-center mb-4">
                                    Upload article cover
                                </h2>

                                <p className="text-gray-500 text-center">
                                    Click to upload image
                                </p>
                            </label>
                        )}

                        <input
                            id="upload-image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="col-span-8 flex flex-col gap-6">
                    {/* Title */}
                    <div className="bg-[#f7f5f2] rounded-xl px-5 py-4">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter article title"
                            className="w-full bg-transparent outline-none text-2xl font-bold text-amber-950"
                        />
                    </div>

                    {/* User */}
                    <div className="flex items-center gap-4">
                        <img
                            src="/images/avatar.png"
                            alt="avatar"
                            className="w-14 h-14 rounded-full"
                        />

                        <div>
                            <h3 className="font-bold text-2xl text-amber-950">
                                {article.author}
                            </h3>

                            <p className="text-amber-950">
                                {article.createdAt}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-[#f7f5f2] rounded-xl p-5">
                        <textarea
                            value={shortDescription}
                            onChange={(e) =>
                                setShortDescription(e.target.value)
                            }
                            className="w-full min-h-37.5 bg-transparent outline-none resize-none text-lg text-amber-950"
                        />
                    </div>
                </div>
            </div>

            {/* Dropdown */}
            <div className="grid grid-cols-3 gap-6 mt-10">
                <CustomDropdown
                    label="Article Category"
                    placeholder="Select category"
                    options={[
                        "Baby Nutrition",
                        "Healthy Recipes",
                        "Feeding Tips",
                        "Growth & Development",
                        "Food Allergies",
                    ]}
                    selectedValues={category}
                    setSelectedValues={setCategory}
                />

                <CustomDropdown
                    label="Baby Age"
                    placeholder="Age"
                    options={["5 - 6 Months", "7 - 8 Months", "9 - 11 Months"]}
                    selectedValues={babyAge}
                    setSelectedValues={setBabyAge}
                />

                <CustomDropdown
                    label="Reading Time"
                    placeholder="Reading"
                    options={["3 min", "5 min", "8 min", "10 min"]}
                    selectedValues={readingTime}
                    setSelectedValues={setReadingTime}
                />
            </div>

            {/* Content */}
            <div className="mt-10">
                <label className="block text-2xl font-bold text-amber-950 mb-4">
                    Article Content
                </label>

                <div className="space-y-5">
                    {content.map((block, index) => (
                        <div
                            key={index}
                            className="bg-[#f7f5f2] rounded-[20px] p-6"
                        >
                            {block.type === "heading" && (
                                <input
                                    value={block.text}
                                    onChange={(e) =>
                                        updateBlock(index, {
                                            ...block,
                                            text: e.target.value,
                                        })
                                    }
                                    className="w-full bg-transparent text-2xl font-bold outline-none text-amber-950"
                                />
                            )}

                            {block.type === "paragraph" && (
                                <textarea
                                    value={block.text}
                                    onChange={(e) =>
                                        updateBlock(index, {
                                            ...block,
                                            text: e.target.value,
                                        })
                                    }
                                    rows={5}
                                    className="w-full bg-transparent resize-none outline-none"
                                />
                            )}

                            {block.type === "bullet-list" && (
                                <textarea
                                    rows={8}
                                    value={block.items.join("\n")}
                                    onChange={(e) =>
                                        updateBlock(index, {
                                            ...block,
                                            items: e.target.value.split("\n"),
                                        })
                                    }
                                    className="w-full bg-transparent resize-none outline-none"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Tags */}
            <div className="mt-10">
                <label className="block text-lg text-amber-950 mb-3 font-medium">
                    Tags
                </label>

                <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full bg-[#f7f5f2] rounded-[25px] px-6 py-5 outline-none"
                />
            </div>
        </div>
    );
}
