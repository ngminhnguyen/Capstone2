import { recipes } from "@/data/recipes";
import {
    AlarmClockCheck,
    AlarmClockPlus,
    Baby,
    BarChart3,
    Clock,
    FolderPlus,
    MoreHorizontal,
    Pencil,
    Share2,
    UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function RecipeDetailPage({ params }: PageProps) {
    const { id } = await params;

    const recipe = recipes.find((item) => item.id === id);

    if (!recipe) {
        return <div className="p-10 text-3xl font-bold">Recipe not found</div>;
    }

    return (
        <div>
            {/* 2 */}
            <div className="w-full p-6 text-amber-950">
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
                    {/* Left Side */}
                    <div>
                        <Image
                            src={recipe.img}
                            alt={recipe.title}
                            width={320}
                            height={420}
                            className="w-full h-105 object-cover rounded-3xl"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* Title */}
                            <h1 className="text-3xl font-bold capitalize leading-tight">
                                {recipe.title}
                            </h1>

                            {/* Description */}
                            <p className="mt-4 text-lg text-amber-950/70 leading-relaxed max-w-3xl">
                                {recipe.desc ||
                                    "Delicious homemade recipe for your little one."}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 mt-8">
                                <img
                                    src="/images/avatar.png"
                                    alt="Author"
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {recipe.author}
                                    </h3>

                                    <p className="text-xl text-amber-950/60">
                                        Recipe Creator
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex gap-4 mt-10">
                            <div className="px-6 py-4 rounded-2xl border flex items-center gap-2">
                                <UsersRound className="text-amber-400" />{" "}
                                {recipe.serves} servings
                            </div>

                            <div className="px-6 py-4 rounded-2xl border flex items-center gap-2">
                                <AlarmClockPlus className="text-amber-400" />{" "}
                                Prepare: {recipe.prepTime} mins
                            </div>

                            <div className="px-6 py-4 rounded-2xl border flex items-center gap-2">
                                <AlarmClockCheck className="text-amber-400" />{" "}
                                Cooking: {recipe.cookTime} mins
                            </div>

                            <div className="flex items-center gap-2 px-6 py-4 rounded-2xl border">
                                <Baby className="text-amber-400" /> {recipe.age}{" "}
                                months+
                            </div>
                        </div>
                        {/* ACTION BUTTONS */}
                        <div className="flex flex-wrap gap-4 mt-10 border-t border-t-amber-950/20 pt-6">
                            <Link
                                href={`/expert/recipeManagement/${recipe.id}/edit`}
                                className="flex items-center gap-2 border border-orange-400 text-orange-500 px-5 py-3 rounded-xl font-medium hover:bg-orange-50"
                            >
                                <Pencil size={18} />
                                Edit
                            </Link>

                            <button className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100">
                                <BarChart3 size={18} />
                                View Reports
                            </button>

                            {/* <button className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100">
                                <FolderPlus size={18} />
                                Add to Collection
                            </button> */}

                            <button className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100">
                                <Share2 size={18} />
                                Share
                            </button>

                            <button className="border px-4 rounded-xl hover:bg-gray-100">
                                <MoreHorizontal />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 mt-8">
                    {/* Left Side */}
                    <div>
                        {/* Ingredients */}
                        <div className="">
                            <h2 className="text-2xl font-bold mb-5">
                                Ingredients
                            </h2>

                            <ul className="space-y-3">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li
                                        key={index}
                                        className="text-lg text-amber-950/80"
                                    >
                                        • {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        {/* Instructions */}
                        <div className="">
                            <h2 className="text-2xl font-bold mb-8">
                                Instructions
                            </h2>

                            <div className="space-y-6">
                                {recipe.steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="min-w-10 w-10 h-10 rounded-full bg-amber-950 text-white flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>

                                        <p className="text-lg leading-relaxed text-amber-950/80">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ACTION BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-10 border-t border-t-amber-950/20 pt-6">
                    <Link
                        href={`/expert/recipeManagement/${recipe.id}/edit`}
                        className="border border-[#7A2E2E] rounded-2xl px-8 py-5 flex items-center gap-3 hover:bg-[#7A2E2E] hover:text-white transition"
                    >
                        Edit
                    </Link>
                    <button className="flex items-center gap-2 border border-orange-400 text-orange-500 px-5 py-3 rounded-xl font-medium hover:bg-orange-50">
                        <Pencil size={18} />
                        Edit
                    </button>

                    <button className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100">
                        <BarChart3 size={18} />
                        View Reports
                    </button>

                    {/* <button className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100">
                        <FolderPlus size={18} />
                        Add to Collection
                    </button> */}

                    <button className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100">
                        <Share2 size={18} />
                        Share
                    </button>

                    <button className="border px-4 rounded-xl hover:bg-gray-100">
                        <MoreHorizontal />
                    </button>
                </div>
            </div>
        </div>
    );
}
