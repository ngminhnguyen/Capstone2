"use client";

import { useState } from "react";
import api from "@/lib/api";

interface CommentSectionProps {
    recipeId: number;
    recipeComments: any[];
    onCommentAdded?: (comment: any) => void;
}

export default function CommentSection({
    recipeId,
    recipeComments,
    onCommentAdded,
}: CommentSectionProps) {
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!comment.trim()) return;

        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const res = await api.post(
                `/recipes/${recipeId}/comments`,
                { content: comment },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            // backend can return created comment OR just message
            const newComment = res.data?.data || {
                id: Date.now(),
                content: comment,
                userName: "You",
            };

            setComment("");

            // update UI instantly (NO reload)
            onCommentAdded?.(newComment);
        } catch (err) {
            console.error("Failed to post comment:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
            {/* LEFT - Add comment */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#5A0A0A] bg-[#F5EED8] p-6 md:p-8 shadow-[6px_6px_0px_#5A0A0A]">
                <div className="mb-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#A65B20]">
                        Share your thought
                    </p>
                    <h2 className="mt-1 text-2xl md:text-3xl font-bold text-[#5A0A0A]">
                        Leave a comment
                    </h2>
                </div>

                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="What do you think about this recipe?"
                    className="min-h-45 w-full resize-none rounded-2xl border-2 border-[#D9B873] bg-[#FFFDF7] p-4 text-base text-[#5A0A0A] outline-none transition placeholder:text-[#A98E70] focus:border-[#A65B20] md:text-lg"
                />

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-[#8B5E3C]">
                        Be kind and keep your feedback helpful.
                    </p>

                    <button
                        onClick={handleSubmit}
                        disabled={loading || !comment.trim()}
                        className="rounded-full border-2 border-[#5A0A0A] bg-[#F4B233] px-7 py-2.5 font-bold text-[#5A0A0A] transition hover:-translate-y-0.5 hover:bg-[#FFC857] hover:shadow-[3px_3px_0px_#5A0A0A] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                        {loading ? "Posting..." : "Submit comment"}
                    </button>
                </div>
            </div>

            {/* RIGHT - Comment list */}
            <div className="rounded-3xl border border-[#F0DFC0] bg-[#FFFDF7] p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between border-b border-[#EBD9B5] pb-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#A65B20]">
                            Community
                        </p>
                        <h2 className="mt-1 text-2xl md:text-3xl font-bold text-[#5A0A0A]">
                            Comments
                        </h2>
                    </div>

                    <span className="flex h-10 min-w-10 items-center justify-center rounded-full border-2 border-[#5A0A0A] bg-[#F4B233] px-3 font-bold text-[#5A0A0A]">
                        {recipeComments.length}
                    </span>
                </div>

                <div className="max-h-130 space-y-4 overflow-y-auto pr-2">
                    {recipeComments.length > 0 ? (
                        recipeComments.map((c: any) => (
                            <div
                                key={c.id}
                                className="rounded-2xl border border-[#F0DFC0] bg-white p-4 transition hover:border-[#D7A64A] hover:shadow-sm"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5EED8] font-bold text-[#5A0A0A]">
                                        {c.userName?.charAt(0)?.toUpperCase() ||
                                            "U"}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="font-bold text-[#5A0A0A]">
                                            {c.userName || "Anonymous user"}
                                        </p>

                                        <p className="mt-1 break-words leading-relaxed text-[#6D4C41]">
                                            {c.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="rounded-2xl border-2 border-dashed border-[#E3C789] bg-[#FFF8E8] px-5 py-12 text-center">
                            <p className="text-lg font-semibold text-[#5A0A0A]">
                                No comments yet
                            </p>
                            <p className="mt-1 text-sm text-[#8B5E3C]">
                                Be the first person to share your thoughts!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
