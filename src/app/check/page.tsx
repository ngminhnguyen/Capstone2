"use client";
import { useState } from "react";

export default function HandDrawnHeart() {
    const [active, setActive] = useState(false);

    return (
        <div
            onClick={() => setActive(!active)}
            className="w-24 h-24 cursor-pointer"
        >
            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* background giữ nguyên */}
                {/* <rect width="200" height="200" fill="#6B21A8" /> */}

                {/* ❤️ HEART SHAPE (chuẩn hơn) */}
                <path
                    d="
                    M100 170
                    C 40 120, 20 70, 60 50
                    C 80 40, 100 60, 100 60
                    C 100 60, 120 40, 140 50
                    C 180 70, 160 120, 100 170
                    Z
                    "
                    fill={active ? "#EC4899" : "#E5E5E5"}
                    stroke={active ? "#EC4899" : "#4A0F0F"}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-500"
                />
            </svg>
        </div>
    );
}
