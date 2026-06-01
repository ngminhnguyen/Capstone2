import { useEffect } from "react";
import { useBannerColor } from "@/components/layout/ui/BannerColorContext";

type RecipeHeaderProps = {
    recipe: {
        title: string;
        age: number | string;
        colorMonth: string;
        stickerImg1: string;
        stickerImg2: string;
    };
};

export default function RecipeHeader({ recipe }: RecipeHeaderProps) {
    const { setBannerColor } = useBannerColor();

    useEffect(() => {
        setBannerColor(recipe.colorMonth);

        return () => {
            setBannerColor("");
        };
    }, [recipe.colorMonth, setBannerColor]);
    return (
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
            <div className="absolute top-8 left-6 text-xl font-semibold z-20">
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
                    <span className="text-3xl">{recipe.age}</span>
                    <span className="text-xl">months</span>
                </div>
            </div>
        </section>
    );
}
