import Link from "next/link";
import { articles } from "@/data/articles";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ArticleDetailPage({ params }: Props) {
    const { id } = await params;

    const article = articles.find((item) => item.id === id);

    if (!article) {
        return <div className="p-10">Article not found</div>;
    }

    return (
        <div className="p-8">
            {/* Top */}
            <div className="flex justify-end mb-8">
                <Link
                    href={`/expert/articleManagement/edit/${article.id}`}
                    className="bg-orange-500 text-white px-6 py-3 rounded-2xl"
                >
                    Edit Article
                </Link>
            </div>

            {/* Cover */}
            <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-125 object-cover rounded-[40px]"
            />

            {/* Content */}
            <div className="max-w-5xl mx-auto mt-10">
                <h1 className="text-6xl font-bold text-amber-950">
                    {article.title}
                </h1>

                <div className="flex gap-3 mt-5 flex-wrap">
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

                <p className="text-amber-900/70 text-xl mt-8 leading-10">
                    {article.shortDescription}
                </p>

                <div className="mt-10 text-xl leading-10 text-amber-950 whitespace-pre-line">
                    {article.content}
                </div>

                {/* Tags */}
                <div className="flex gap-3 mt-10 flex-wrap">
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
        </div>
    );
}
