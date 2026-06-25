"use client";

import { useEffect } from "react";
import { useBannerColor } from "@/components/layout/ui/BannerColorContext";
import Breadcrumb from "../Breadcrumb";

type RecipeHeaderProps = {
    recipe: any; // intentionally flexible for now (old + new data)
};

export default function RecipeHeader({ recipe }: RecipeHeaderProps) {
    const { setBannerColor } = useBannerColor();

    // =========================
    // SAFE FALLBACK MAPPING
    // =========================
    const title = recipe?.name || "Untitled Recipe";
    const age = recipe?.month_age;
    const monthColorMap: Record<number, string> = {
        1: "bg-red-500",
        2: "bg-pink-500",
        3: "bg-purple-500",
        4: "bg-indigo-500",
        5: "bg-blue-500",
        6: "bg-cyan-500",
        7: "bg-green-500",
        8: "bg-yellow-500",
        9: "bg-orange-500",
        10: "bg-amber-500",
        11: "bg-rose-500",
        12: "bg-fuchsia-500",
    };
    const colorMonth = monthColorMap[Number(recipe?.month_age)];

    const sticker1 =
        recipe?.stickerImg1 ||
        recipe?.assets?.stickers?.[0] ||
        "/images/stickerBananaMeal1.png";

    const sticker2 =
        recipe?.stickerImg2 ||
        recipe?.assets?.stickers?.[1] ||
        "/images/stickerBananaMeal2.png";

    // =========================
    // BANNER COLOR EFFECT
    // =========================
    useEffect(() => {
        setBannerColor(colorMonth);

        return () => {
            setBannerColor("");
        };
    }, [colorMonth, setBannerColor]);

    useEffect(() => {
        console.log("🎨 RecipeHeader set color:", colorMonth);
        setBannerColor(colorMonth);
    }, [colorMonth, setBannerColor]);
    return (
        <section
            className={`
                relative
                bg-linear-to-r ${colorMonth}
                text-white
                min-h-[420px]
            `}
        >
            {/* CONTENT WRAPPER */}
            <div className="relative w-full max-w-5xl mx-auto px-6 py-24">
                {/* BREADCRUMB */}
                <div className="absolute top-8 left-6 z-20">
                    <Breadcrumb recipeTitle={title} />
                </div>

                {/* LEFT DECOR */}
                <img
                    src={sticker1}
                    alt="decor"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-16 z-10"
                />

                {/* RIGHT DECOR */}
                <img
                    src={sticker2}
                    alt="decor"
                    className="absolute right-0 top-14 w-16 rotate-20 z-10"
                />

                {/* TITLE */}
                <div className="relative z-20 flex items-center justify-center min-h-[220px] text-center px-6">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
                        {title}
                    </h1>
                </div>
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
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30">
                <div
                    className={`
                        w-24 h-24
                        rounded-full
                        border-4 border-[#5A0A0A]
                        shadow-lg
                        flex flex-col
                        items-center justify-center
                        text-center
                        text-white
                        font-bold
                        leading-none
                        -rotate-12
                        ${colorMonth}
                    `}
                >
                    <span className="text-3xl">{age || "--"}</span>
                    <span className="text-xl">months</span>
                </div>
            </div>
        </section>
    );
}
