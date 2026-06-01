"use client";

import { useState } from "react";
import {
    Bold,
    Italic,
    Underline,
    Paperclip,
    Image,
    Smile,
    AtSign,
} from "lucide-react";

interface CommentSectionProps {
    recipeComments: any[];
}

export default function CommentSection({
    recipeComments,
}: CommentSectionProps) {
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        console.log(comment);

        setComment("");
    };

    return (
        <section className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
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
                        onClick={handleSubmit}
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
                        <h2 className="text-xl text-[#5A0A0A]">Comment</h2>

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
                            text-xl
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
                            <div key={comment.id} className="flex gap-4">
                                {/* avatar */}
                                <img
                                    src={comment.user.avatar}
                                    alt={comment.user.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div className="flex-1">
                                    {/* header */}
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-semibold text-lg text-[#5A0A0A]">
                                                {comment.user.name}
                                            </h3>

                                            <p className="text-sm text-gray-400">
                                                {comment.time}
                                            </p>
                                        </div>
                                    </div>

                                    {/* content */}
                                    <p className="mt-3 text-[#5A0A0A] text-lg">
                                        {comment.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
