"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Baloo_2 } from "next/font/google";
import { motion } from "framer-motion";
import { recipes } from "@/data/recipes";
import { useParams } from "next/navigation";
import { comments } from "@/data/comments";

import {
    Bold,
    Italic,
    Underline,
    Paperclip,
    Image,
    Smile,
    AtSign,
} from "lucide-react";
const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function RecipeDetail() {
    const params = useParams();

    const recipe = recipes.find((item) => item.id === params.id);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }
    const recipeComments = comments.filter(
        (comment) => comment.recipeId === params.id,
    );
    return (
        <div
            className={`min-h-full bg-[#FDECE4] text-[#4E0706] ${baloo.className}`}
        >
            <Navbar />
            <main>
                {/*Header*/}
                <section
                    className={`
                        relative 
                        bg-linear-to-r ${recipe.colorMonth}
                        text-white
                        min-h-90
                        flex items-center justify-center
    `}
                >
                    {/* TOP CONTENT */}
                    <div className="absolute top-8 left-6 text-sm font-semibold z-20">
                        {/* Home / Weaning Recipes / {recipe.title} */}
                    </div>

                    {/* DECOR LEFT */}
                    <img
                        src={recipe.stickerImg1}
                        alt="decor"
                        className="
                                absolute
                                left-10
                                top-1/2
                                -translate-y-1/2
                                w-16
                                z-10
                                
                            "
                    />

                    {/* DECOR RIGHT */}
                    <img
                        src={recipe.stickerImg2}
                        alt="decor"
                        className="
                            absolute
                            right-16
                            top-24
                            w-16
                            rotate-20
                            z-10
                        "
                    />

                    {/* TITLE */}
                    <div className="relative z-20 text-center px-6">
                        <h1
                            className="
                                text-3xl
                                md:text-5xl
                                font-bold
                                leading-tight
                            "
                        >
                            {recipe.title}
                        </h1>
                    </div>

                    {/* WAVE */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                        <svg
                            viewBox="0 0 1440 180"
                            className="relative block w-full h-30"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="
                                    M0,80
                                    C240,140 480,180 720,120
                                    C960,60 1200,140 1440,120
                                    L1440,180
                                    L0,180
                                    Z
                                "
                                className="fill-[#FDECE4]"
                            />
                        </svg>
                    </div>

                    {/* MONTH BADGE */}
                    <div
                        className="
                                absolute
                                -bottom-5
                                left-1/2
                                -translate-x-1/2
                                z-30
                            "
                    >
                        <div
                            className={`
                                    w-24 h-24
                                    rounded-full
                                    border-4 border-[#5A0A0A]
                                    shadow-lg
                                    flex flex-col
                                    items-center
                                    justify-center
                                    text-center
                                    text-white
                                    font-bold
                                    leading-none
                                    -rotate-12
                                    
                                    ${recipe.colorMonth}
                                `}
                        >
                            <span className="text-3xl">7+</span>
                            <span className="text-sm">months</span>
                        </div>
                    </div>
                </section>
                {/* Information Recipe */}
                <section className="max-w-5xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            {/* LABEL */}
                            <div className="inline-block rotate-2 bg-[#B9A7FF] border-2 border-[#5A0A0A] px-10 py-1 rounded-lg mb-10">
                                <span className="text-[#5A0A0A] text-xl">
                                    {recipe.mealTime}
                                </span>
                            </div>

                            {/* TITLE */}
                            <h2 className=" font-bold text-[#5A0A0A] mb-8 leading-tight">
                                {recipe.titleInside}
                            </h2>

                            {/* DESC */}
                            <p className=" text-[#5A0A0A] leading-relaxed mb-8">
                                {recipe.desc}
                            </p>

                            {/* LINE */}
                            <div className="border-t-4 border-dotted border-[#5A0A0A] mb-4"></div>

                            {/* INFO */}
                            <div className="flex items-center gap-4 mb-4">
                                {/* SERVES */}
                                {/* <div className="flex flex-col items-center">
                                    <span className="text-sm text-[#5A0A0A] mb-2">
                                        Serves
                                    </span>

                                    <div className="relative">
                                        <img
                                            src="/images/recipeCircle2.png"
                                            alt=""
                                            className="w-18 h-18"
                                        />

                                        <span className="absolute inset-0 flex items-center justify-center text-[#5A0A0A] text-3xl font-bold">
                                            2
                                        </span>
                                    </div>
                                </div> */}

                                {/* PREP */}
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-[#5A0A0A] mb-2">
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
                                                {recipe.prepTime}
                                            </span>

                                            <span className="text-xs leading-none -mt-1">
                                                mins
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* COOK */}
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-[#5A0A0A] mb-2">
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
                                                {recipe.cookTime}
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
                            {/* ICONS */}
                            <div className="flex items-center gap-4">
                                {recipe.allergyIngredients?.map(
                                    (item, index) => (
                                        <img
                                            key={index}
                                            src={item.img}
                                            alt={item.name}
                                            title={item.name}
                                            className="w-14 h-14"
                                        />
                                    ),
                                )}
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative">
                            <div className="-rotate-2 border-[6px] border-[#470707] rounded-[30px] overflow-hidden shadow-xl">
                                <img
                                    src={recipe.img}
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
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#F3C15B] rotate-[-3deg] border border-[#5A0A0A]"></div>

                                    {/* LIST */}
                                    <ul className="space-y-5">
                                        {recipe.ingredients.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3 text-[#5A0A0A]"
                                                >
                                                    <span className="mt-2 w-3 h-3 rounded-full bg-pink-500 shrink-0"></span>

                                                    <span className="text-lg leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ),
                                        )}
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
                                        {recipe.steps.map((step, index) => (
                                            <li
                                                key={index}
                                                className="flex gap-4"
                                            >
                                                {/* NUMBER */}
                                                <div
                                                    className="
                                                        w-8 h-8
                                                        rounded-full
                                                        bg-pink-500
                                                        text-white
                                                        flex items-center justify-center
                                                        text-sm
                                                        font-bold
                                                        shrink-0
                                                        mt-1
                                                    "
                                                >
                                                    {index + 1}
                                                </div>

                                                {/* TEXT */}
                                                <p className="text-[#5A0A0A] text-lg leading-relaxed">
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
                {/* Comment */}
                {/* COMMENT SECTION */}
                <section className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* LEFT - COMMENT INPUT */}
                    <div
                        className="
                            bg-[#F5EED8]
                            border-2 border-[#5A0A0A]
                            rounded-2xl
                            p-4
                            relative
                            min-h-107.5
                            flex flex-col
                        "
                    >
                        {/* textarea */}
                        <textarea
                            placeholder="Add comment..."
                            className="
                                flex-1
                                bg-transparent
                                outline-none
                                resize-none
                                text-2xl
                                text-[#5A0A0A]
                                placeholder:text-[#5A0A0A]
                            "
                        />

                        {/* bottom toolbar */}
                        <div className="flex items-center justify-between mt-6">
                            {/* icons */}
                            <div className="flex items-center gap-5 text-gray-500">
                                <button>
                                    <Bold size={20} />
                                </button>

                                <button>
                                    <Italic size={20} />
                                </button>

                                <button>
                                    <Underline size={20} />
                                </button>

                                <button>
                                    <Paperclip size={20} />
                                </button>

                                <button>
                                    <Image size={20} />
                                </button>

                                <button>
                                    <Smile size={20} />
                                </button>

                                <button>
                                    <AtSign size={20} />
                                </button>
                            </div>

                            {/* submit */}
                            <button
                                className="
                    bg-[#F4B233]
                    border-2 border-[#5A0A0A]
                    rounded-full
                    px-6 py-2
                    text-[#5A0A0A]
                    text-2xl
                    hover:scale-105
                    transition
                "
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* RIGHT - COMMENTS */}
                    <div>
                        {/* heading */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl text-[#5A0A0A]">
                                    Comment
                                </h2>

                                <div
                                    className="
                                    w-10 h-10
                                    rounded-full
                                    bg-[#F4B233]
                                    flex items-center justify-center
                                    text-[#5A0A0A]
                                    text-xl
                                "
                                >
                                    {recipeComments.length}
                                </div>
                            </div>

                            {/* sort */}
                            <button
                                className="
                                    bg-white
                                    px-4 py-2
                                    rounded-md
                                    text-gray-500
                                    text-sm
                                    flex items-center gap-2
                                "
                            >
                                <i className="fa-solid fa-arrow-down-wide-short"></i>
                                Most recent
                                <i className="fa-solid fa-chevron-down text-xs"></i>
                            </button>
                        </div>

                        {/* COMMENTS WRAPPER */}
                        <div
                            className="
                                bg-[#F8F8F8]
                                p-8
                                max-h-87.5
                                overflow-y-auto
                                pr-4
                            "
                        >
                            <div className="space-y-10">
                                {recipeComments.map((comment: any) => (
                                    <div
                                        key={comment.id}
                                        className="flex gap-4"
                                    >
                                        {/* avatar */}
                                        <img
                                            src={comment.user.avatar}
                                            alt={comment.user.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />

                                        <div className="flex-1">
                                            {/* header */}
                                            <div className="flex items-center gap-3">
                                                <h4 className="font-bold text-[#5A0A0A]">
                                                    {comment.user.name}
                                                </h4>

                                                <span className="text-gray-400 text-sm">
                                                    {comment.time}
                                                </span>
                                            </div>

                                            {/* content */}
                                            <p className="mt-3 text-[#23395B] text-xl leading-relaxed">
                                                {comment.content}
                                            </p>

                                            {/* actions */}
                                            <div className="flex items-center gap-8 mt-5 text-gray-500">
                                                <button>{comment.likes}</button>

                                                <button>
                                                    {comment.dislikes}
                                                </button>

                                                <button>Reply</button>
                                            </div>

                                            {/* replies */}
                                            {comment.replies.length > 0 && (
                                                <div className="mt-8 ml-10 space-y-5">
                                                    {comment.replies.map(
                                                        (reply: any) => (
                                                            <div
                                                                key={reply.id}
                                                                className="
                                                                    bg-[#F3F3F3]
                                                                    rounded-3xl
                                                                    p-6
                                                                    flex gap-4
                                                                "
                                                            >
                                                                <img
                                                                    src={
                                                                        reply
                                                                            .user
                                                                            .avatar
                                                                    }
                                                                    alt={
                                                                        reply
                                                                            .user
                                                                            .name
                                                                    }
                                                                    className="w-12 h-12 rounded-full object-cover"
                                                                />

                                                                <div>
                                                                    <div className="flex items-center gap-2">
                                                                        <h5 className="font-bold text-[#5A0A0A]">
                                                                            {
                                                                                reply
                                                                                    .user
                                                                                    .name
                                                                            }
                                                                        </h5>

                                                                        {reply
                                                                            .user
                                                                            .verified && (
                                                                            <span className="text-blue-500">
                                                                                ✔
                                                                            </span>
                                                                        )}

                                                                        <span className="text-gray-400 text-sm">
                                                                            {
                                                                                reply.time
                                                                            }
                                                                        </span>
                                                                    </div>

                                                                    <p className="mt-2 text-[#23395B] leading-relaxed">
                                                                        {
                                                                            reply.content
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
