"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface RecipeRatingProps {
    recipeId: string;
}

export default function RecipeRating({ recipeId }: RecipeRatingProps) {
    const [selectedRating, setSelectedRating] = useState<number>(0);

    const [hoverRating, setHoverRating] = useState<number>(0);

    const [submitted, setSubmitted] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleRate = async (rating: number) => {
        setSelectedRating(rating);

        // show submit ngay
        setSubmitted(true);

        try {
            setLoading(true);

            await fetch("/api/recipe-rating", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    recipeId,
                    rating,
                }),
            });
        } catch (error) {
            console.error("Submit rating error:", error);
        } finally {
            setLoading(false);

            // auto close popup
            setTimeout(() => {
                setSubmitted(false);
            }, 2500);
        }
    };

    return (
        <>
            {/* Rating UI */}
            <div className="rounded-[20px] bg-[#f5d9d5] px-8 py-6 text-center">
                <h3 className="mb-6 text-[20px] font-semibold text-[#5e0d14]">
                    Tap To Rate
                </h3>

                <div className="flex items-center justify-center gap-4">
                    {[1, 2, 3, 4, 5].map((star) => {
                        const active = star <= (hoverRating || selectedRating);

                        return (
                            <button
                                key={star}
                                disabled={loading}
                                onClick={() => handleRate(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                className="transition hover:scale-110"
                            >
                                <Star
                                    className={`h-10 w-10 ${
                                        active
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                    }`}
                                    fill="currentColor"
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Submitted Modal */}
            {submitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="w-full max-w-md rounded-[40px] bg-white p-10 text-center shadow-xl">
                        <Star
                            className="mx-auto h-30 w-30 text-yellow-400"
                            fill="currentColor"
                        />

                        <h2 className="mt-6 text-3xl font-bold text-amber-950">
                            Submitted
                        </h2>

                        <p className="mt-4 text-2xl text-amber-700">
                            Thanks for your feedback.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
