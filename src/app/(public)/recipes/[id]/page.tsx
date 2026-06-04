"use client";
import { Baloo_2 } from "next/font/google";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import CommentSection from "@/components/parent/ui/CommentSection";

import RatingReviews from "@/components/parent/ui/RatingReviews";
import RecipeRating from "@/components/parent/ui/RecipeRating";
import RecipeHeader from "@/components/layout/ui/RecipeHeader";
import { useEffect, useState } from "react";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function RecipeDetail() {

    const params = useParams();

    const [recipe, setRecipe] = useState<any>(null);
    const [comments, setComments] = useState<any[]>([]);

    const [ratingSummary, setRatingSummary] = useState({
        averageRating: 0,
        totalRatings: 0,
    });
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await api.get(`/recipes/${params?.id}/comments`);
                setComments(res.data);
            } catch (err) {
                console.error("Failed to fetch comments:", err);
            }
        };

        if (params?.id) fetchComments();
    }, [params?.id]);
    useEffect(() => {
        const fetchRating = async () => {
            try {
                const res = await api.get(`/recipes/${params?.id}/rating-summary`);
                setRatingSummary(res.data);
            } catch (err) {
                console.error("Failed to fetch rating:", err);
            }
        };

        if (params?.id) fetchRating();
    }, [params?.id]);
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await api.get(`/recipes/${params?.id}`);
                setRecipe(res.data);
            } catch (err) {
                console.error("Failed to fetch recipe:", err);
            }
        };

        if (params?.id) fetchRecipe();
    }, [params?.id]);

    if (!recipe) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                Loading recipe...
            </div>
        );
    }

    return (
        <div
            className={`min-h-full bg-[#FDECE4] text-[#4E0706] ${baloo.className}`}
        >
            <main>
                {/*Header*/}
                <RecipeHeader recipe={recipe} />

                {/* Information Recipe */}
                <section className="max-w-5xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            {/* LABEL */}
                            <div className="inline-block rotate-2 bg-[#B9A7FF] border-2 border-[#5A0A0A] px-10 py-1 rounded-lg mb-10">
                                <span className="text-[#5A0A0A] text-xl">
                                    {recipe.mealType}
                                </span>
                            </div>

                            {/* TITLE */}
                            <h2 className=" font-bold text-[#5A0A0A] mb-8 leading-tight">
                                {recipe.name}
                            </h2>

                            {/* DESC */}
                            <p className=" text-[#5A0A0A] leading-relaxed mb-8">
                                {recipe.description}
                            </p>

                            {/* LINE */}
                            <div className="border-t-4 border-dotted border-[#5A0A0A] mb-4"></div>

                            {/* INFO */}
                            <div className="flex items-center gap-4 mb-4">
                                {/* PREP */}
                                <div className="flex flex-col items-center">
                                    <span className="text-xl text-[#5A0A0A] mb-2">
                                        Prep
                                    </span>

                                    <div className="relative">
                                        <img
                                            src="/images/recipeCircle2.png"
                                            alt=""
                                            className="w-14 h-14"
                                        />

                                        <div
                                            className="absolute inset-0
                                                        flex flex-col
                                                        items-center justify-center
                                                        text-[#5A0A0A]
                                                        leading-none
                                                        "
                                        >
                                            <span className="text-3xl font-bold leading-none">
                                                {recipe.prep_time ?? 0}
                                            </span>

                                            <span className="text-xs leading-none -mt-1">
                                                mins
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* COOK */}
                                <div className="flex flex-col items-center">
                                    <span className="text-xl text-[#5A0A0A] mb-2">
                                        Cook
                                    </span>

                                    <div className="relative">
                                        <img
                                            src="/images/recipeCircle2.png"
                                            alt=""
                                            className="w-14 h-14"
                                        />

                                        <div
                                            className="absolute inset-0
                                                        flex flex-col
                                                        items-center justify-center
                                                        text-[#5A0A0A]
                                                        leading-none
                                                        "
                                        >
                                            <span className="text-3xl font-bold leading-none">
                                                {recipe.cooking_time ?? 0}
                                            </span>

                                            <span className="text-xs leading-none -mt-1">
                                                mins
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* LINE */}
                            <div className="border-t-4 border-dotted border-[#5A0A0A] mb-8"></div>

                            {/* ICONS */}
                            <div className="flex items-center gap-4">
                                {(recipe.allergies ?? []).map((item: any, index: number) => (
                                    <img
                                        key={index}
                                        src={item.img}
                                        alt={item.name}
                                        title={item.name}
                                        className="w-14 h-14"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative">
                            <div className="-rotate-2 border-[6px] border-[#470707] rounded-[30px] overflow-hidden shadow-xl">
                                <img
                                    src={recipe.image_url}
                                    alt="Recipe"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Cook */}
                <section className="relative grid grid-cols-1 lg:grid-cols-2 ">
                    {/* COOK ME BADGE */}
                    <div
                        className="
                                absolute
                                left-1/2
                                top-0
                                -translate-x-1/2
                                -translate-y-1/2
                                z-30
                                w-26
                                h-26
                            "
                    >
                        <img src="/images/cookMe.png" alt="Cook Me" />
                    </div>
                    {/* INGREDIENTS */}
                    <div className="relative bg-[#4B3C97] px-6 py-20 flex justify-center">
                        {/* CONTENT */}
                        <div className="relative z-10 w-full max-w-md">
                            {/* TITLE */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <h2 className="text-white text-4xl font-bold">
                                    Ingredients
                                </h2>
                            </div>
                            <div className="relative">
                                {/* splatter */}
                                <img
                                    src="/images/splatter.png"
                                    className="
                                            absolute
                                            -right-12
                                            -top-12
                                            w-30
                                            z-10
                                        "
                                />

                                <img
                                    src="/images/splatter.png"
                                    className="
                                            absolute
                                            -left-12
                                            -bottom-12
                                            w-30
                                            z-10
                                        "
                                />

                                {/* CARD */}
                                <div className="relative bg-[#FFF6EE] border-4 border-[#5A0A0A] rounded-[20px] p-8 shadow-xl z-20">
                                    {/* TAPE */}
                                    {/* DECOR */}
                                    <img
                                        src="/images/stickerIngredient1.png"
                                        className="absolute -left-8 -top-14 w-20 "
                                    />

                                    <img
                                        src="/images/stickerIngredient2.png"
                                        className="absolute -right-8 -bottom-5 w-20"
                                    />
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#F3C15B] -rotate-3 border border-[#5A0A0A]"></div>

                                    {/* LIST */}
                                    <ul className="space-y-5">
                                        {(recipe.ingredients ?? []).map((item: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3 text-[#5A0A0A]">
                                                <span className="mt-2 w-3 h-3 rounded-full bg-pink-500"></span>
                                                <span className="text-lg">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* METHOD */}
                    <div className="relative bg-[#A792F0] px-6 py-20 flex justify-center">
                        {/* CONTENT */}
                        <div className="relative z-10 w-full max-w-md">
                            {/* TITLE */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <h2 className="text-[#5A0A0A] text-4xl font-bold">
                                    method
                                </h2>
                            </div>

                            {/* CARD */}
                            <div className="relative">
                                {/* splatter */}
                                <img
                                    src="/images/splatter1.png"
                                    className="
                                            absolute
                                            -right-12
                                            -top-12
                                            w-30
                                            z-10
                                        "
                                />

                                <img
                                    src="/images/splatter1.png"
                                    className="
                                            absolute
                                            -left-12
                                            -bottom-12
                                            w-30
                                            z-10
                                        "
                                />

                                {/* CARD */}
                                <div
                                    className="
                                    relative
                                    z-20
                                    bg-[#FFF6EE]
                                    border-4 border-[#5A0A0A]
                                    rounded-[20px]
                                    p-8
                                    shadow-xl
                                "
                                >
                                    {/* DECOR */}
                                    <img
                                        src="/images/stickerCook1.png"
                                        className="absolute -left-8 -top-14 w-20"
                                    />

                                    <img
                                        src="/images/stickerCook2.png"
                                        className="absolute -right-8 -bottom-5 w-20"
                                    />

                                    {/* TAPE */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#F3C15B] rotate-3 border border-[#5A0A0A]"></div>

                                    {/* STEPS */}
                                    <ol className="space-y-6">
                                        {(recipe.steps ?? []).map((step: string, index: number) => (
                                            <li key={index} className="flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-bold">
                                                    {index + 1}
                                                </div>
                                                <p className="text-[#5A0A0A] text-lg">
                                                    {step}
                                                </p>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SHARE RECIPE */}
                <section className="relative py-10">
                    {/* dotted line top */}
                    <div className="absolute top-0 left-0 w-full border-t-4 border-dotted border-[#5A0A0A]" />

                    {/* dotted line bottom */}
                    <div className="absolute bottom-0 left-0 w-full border-b-4 border-dotted border-[#5A0A0A]" />

                    <div className="flex items-center justify-center gap-6">
                        {/* text */}
                        <h3 className="text-xl text-[#5A0A0A]">
                            Share with friends:
                        </h3>

                        {/* icons */}
                        <div className="flex items-center gap-4">
                            {/* facebook */}
                            <a
                                href="#"
                                className="
                                        w-10 h-10
                                        rounded-full
                                        bg-[#3B5998]
                                        flex items-center justify-center
                                        text-white
                                        text-3xl
                                        hover:scale-110
                                        transition
                                    "
                            >
                                <img
                                    src="/images/facebook-app-symbol.png"
                                    alt="Facebook"
                                    className="w-5 h-5"
                                />
                            </a>

                            {/* instagram */}
                            <a
                                href="#"
                                className="
                                    w-10 h-10
                                    rounded-full
                                    bg-[#B11C7A]
                                    flex items-center justify-center
                                    text-white
                                    text-2xl
                                    hover:scale-110
                                    transition
                                "
                            >
                                <img
                                    src="/images/instagram.png"
                                    alt="Instagram"
                                    className="w-5 h-5"
                                />
                            </a>

                            {/* copy */}
                            <a
                                href="#"
                                className="
                                    w-10 h-10
                                    rounded-full
                                    bg-[#79B63E]
                                    flex items-center justify-center
                                    text-white
                                    text-2xl
                                    hover:scale-110
                                    transition
                                "
                            >
                                <img
                                    src="/images/link.png"
                                    alt="Copy"
                                    className="w-5 h-5"
                                />
                            </a>
                        </div>
                    </div>
                </section>
                {/* Rating Reviews*/}

                <div className="max-w-7xl mx-auto px-4 mt-8">
                    <div className="flex justify-center">
                        <RatingReviews
                            averageRating={ratingSummary.averageRating}
                            totalRatings={ratingSummary.totalRatings}
                        />
                    </div>
                </div>
                {/* COMMENT SECTION */}
                <CommentSection
                    recipeId={recipe.id}
                    recipeComments={comments}
                    onCommentAdded={(newComment) =>
                        setComments((prev) => [newComment, ...prev])
                    }
                />

                {/* RATING TAB */}
                <RecipeRating recipeId={recipe.id} />
            </main>
        </div>
    );
}
