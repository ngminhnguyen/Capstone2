"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { articles } from "@/data/articles";

export default function ArticleManagementPage() {
    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                    <h1 className="text-3xl font-bold text-amber-950">
                        Articles
                    </h1>

                    <p className="text-amber-900/60 mt-2">
                        Manage nutrition articles
                    </p>
                </div>
            </div>

            {/* Search */}
            <div className="bg-[#f7f5f2] rounded-2xl px-5 py-4 flex items-center gap-3 mb-8">
                <Search className="text-amber-900" />

                <input
                    type="text"
                    placeholder="Search article..."
                    className="bg-transparent outline-none w-full"
                />
            </div>

            {/* List */}
            <div className="space-y-6">
                {articles.map((article) => (
                    <Link
                        key={article.id}
                        href={`/expert/articleManagement/${article.id}`}
                        className="block"
                    >
                        <div className="bg-[#fdf7f4] rounded-4xl p-6 hover:shadow-md transition">
                            <div className="flex gap-6">
                                {/* Image */}
                                <img
                                    src={article.coverImage}
                                    alt={article.title}
                                    className="w-55 h-45 object-cover rounded-[28px]"
                                />

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <div>
                                            <h2 className="text-3xl font-bold text-amber-950">
                                                {article.title}
                                            </h2>

                                            <p className="text-amber-900/70 mt-3 max-w-3xl">
                                                {article.shortDescription}
                                            </p>
                                        </div>

                                        <span
                                            className={`px-4 py-2 rounded-full h-fit text-sm font-medium ${
                                                article.status === "Published"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                        >
                                            {article.status}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-6">
                                        <span className="bg-[#F4E8E2] px-4 py-2 rounded-full">
                                            {article.category}
                                        </span>

                                        <span className="bg-[#F4E8E2] px-4 py-2 rounded-full">
                                            {article.ageGroup}
                                        </span>

                                        <span className="bg-[#F4E8E2] px-4 py-2 rounded-full">
                                            {article.readingTime}
                                        </span>
                                    </div>

                                    <p className="mt-5 text-amber-900/60">
                                        Created: {article.createdAt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
