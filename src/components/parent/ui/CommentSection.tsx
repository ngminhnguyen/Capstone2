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
                }
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
        <section className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT */}
            <div className="bg-[#F5EED8] border-2 border-[#5A0A0A] rounded-2xl p-4 flex flex-col">
                
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add comment..."
                    className="flex-1 bg-transparent outline-none resize-none text-2xl text-[#5A0A0A]"
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-[#F4B233] border-2 border-[#5A0A0A] rounded-full px-6 py-2 mt-4"
                >
                    {loading ? "Posting..." : "Submit"}
                </button>
            </div>

            {/* RIGHT */}
            <div>
                <h2 className="text-xl mb-4">
                    Comments ({recipeComments.length})
                </h2>

                <div className="space-y-6">
                    {recipeComments.map((c: any) => (
                        <div key={c.id} className="p-3 bg-white rounded">
                            <p className="font-bold">{c.userName}</p>
                            <p>{c.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}