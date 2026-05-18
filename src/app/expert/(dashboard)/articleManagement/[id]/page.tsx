import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { Baby, Eye, Timer } from "lucide-react";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ArticleDetailPage({ params }: Props) {
    const { id } = await params;

    const article = articles.find((item) => item.id === id);

    if (!article) {
        return <div className="p-10 text-amber-950">Article not found</div>;
    }

    return (
        <div className="min-h-screen bg-[#F9F4EF] p-8">
            {/* Top Action */}
            <div className="flex justify-end gap-4 mb-10">
                <Link
                    href={`/expert/articleManagement/edit/${article.id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl transition"
                >
                    Edit Article
                </Link>

                <button className="border border-red-400 text-red-500 px-6 py-3 rounded-2xl hover:bg-red-50 transition">
                    Delete
                </button>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10">
                {/* Left */}
                <div className="col-span-4">
                    <div className="sticky top-8">
                        <Image
                            src={article.coverImage}
                            alt={article.title}
                            width={500}
                            height={500}
                            className="rounded-3xl object-cover w-full shadow-md"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="col-span-8">
                    {/* Title */}
                    <h1 className="text-4xl font-bold text-amber-950 leading-tight">
                        {article.title}
                    </h1>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-8">
                        <img
                            src="/images/avatar.png"
                            alt="Author"
                            className="w-10 h-10 rounded-full object-cover"
                        />

                        <div>
                            <h3 className="text-lg font-semibold">
                                {article.author}
                            </h3>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="flex gap-3 mt-6 flex-wrap border-y border-amber-900/20 ">
                        <span className="bg-[#F4E8E2] text-amber-950 px-4 py-2 rounded-full text-sm">
                            {article.status}
                        </span>

                        <span className="bg-[#F4E8E2] text-amber-950 px-4 py-2 rounded-full text-sm">
                            {article.createdAt}
                        </span>
                    </div>
                    <div className="flex gap-4 mt-10 text-amber-950">
                        <div className="px-6 py-4 rounded-2xl border flex items-center gap-2">
                            <Eye className="text-amber-400" /> Category:{" "}
                            {article.category}
                        </div>

                        <div className="px-6 py-4 rounded-2xl border flex items-center gap-2">
                            <Baby className="text-amber-400" /> Baby age:{" "}
                            {article.ageGroup}
                        </div>

                        <div className="px-6 py-4 rounded-2xl border flex items-center gap-2">
                            <Timer className="text-amber-400" /> Reading time:{" "}
                            {article.readingTime}
                        </div>
                    </div>
                </div>
            </div>
            {/* Description */}
            <p className="text-lg text-amber-950 mt-8 leading-7 text-center">
                {article.shortDescription}
            </p>
            {/* Content */}
            <div className="flex justify-center mb-10">
                <div className="mt-10 space-y-8">
                    {article.content.map((block, index) => {
                        switch (block.type) {
                            case "heading":
                                return (
                                    <h2
                                        key={index}
                                        className="text-3xl font-bold text-amber-950 text-center"
                                    >
                                        {block.text}
                                    </h2>
                                );
                            case "paragraph":
                                return (
                                    <p
                                        key={index}
                                        className="text-lg leading-9 text-amber-950 text-center py-4"
                                    >
                                        {block.text}
                                    </p>
                                );

                            case "bullet-list":
                                return (
                                    <ul
                                        key={index}
                                        className="list-disc pl-8 space-y-4 text-lg leading-9 text-amber-950"
                                    >
                                        {block.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                );

                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
            {/* Tags */}
            <div className="flex gap-3 flex-wrap justify-end">
                {article.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
