"use client";

import { Star } from "lucide-react";

interface RatingReviewsProps {
    averageRating: number;
    totalRatings: number;
    maxStars?: number;
}

export default function RatingReviews({
    averageRating,
    totalRatings,
    maxStars = 5,
}: RatingReviewsProps) {
    const renderStar = (index: number) => {
        const fillPercent = Math.max(
            0,
            Math.min(100, (averageRating - index) * 100),
        );

        return (
            <div key={index} className="relative h-12 w-12">
                {/* Star xám background */}
                <Star
                    className="absolute inset-0 h-12 w-12 text-gray-300"
                    fill="currentColor"
                />

                {/* Star vàng fill theo % */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${fillPercent}%` }}
                >
                    <Star
                        className="h-12 w-12 text-yellow-400"
                        fill="currentColor"
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="rounded-[20px] bg-[#f5e9e5] p-8">
            <div className="flex flex-col gap-20 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}
                <div className="text-center lg:text-left">
                    <h2 className="text-xl font-bold text-[#4b0007]">
                        Rating & Reviews
                    </h2>

                    <h1 className="mt-4 text-3xl font-bold leading-none text-[#4b0007]">
                        {averageRating.toFixed(1)}
                    </h1>

                    <p className="mt-4 text-lg font-semibold text-[#4b000710]">
                        out of {maxStars}
                    </p>
                </div>

                {/* Right */}
                <div className="flex flex-col items-center">
                    <div className="flex gap-2">
                        {[...Array(maxStars)].map((_, index) =>
                            renderStar(index),
                        )}
                    </div>

                    <p className="mt-6 text-lg font-semibold text-[#9c6d6d]">
                        {Intl.NumberFormat().format(totalRatings)} Ratings
                    </p>
                </div>
            </div>
        </div>
    );
}
