"use client";

import Image from "next/image";
import { Handlee } from "next/font/google";
import { useEffect } from "react";
import { useBannerColor } from "@/components/layout/ui/BannerColorContext";
import Breadcrumb from "../layout/Breadcrumb";

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});

type Props = {
    title: string;
    bgColor: string;
};

const stickers = [
    {
        src: "/images/parent/carrots.png",
        className: "top-0 left-[5%] rotate-[-20deg]",
    },

    {
        src: "/images/parent/banana.png",
        className: "bottom-5 left-[8%] rotate-[10deg]",
    },

    {
        src: "/images/parent/chard.png",
        className: "top-6 left-[18%]",
    },

    {
        src: "/images/parent/element.png",
        className: "top-20 left-[25%]",
    },

    {
        src: "/images/parent/grape.png",
        className: "top-5 left-[35%] -rotate-100",
    },

    {
        src: "/images/parent/lemon.png",
        className: "top-15 left-[48%] rotate-12",
    },
    {
        src: "/images/parent/vegetables.png",
        className: "bottom-8 left-[38%] -rotate-12",
    },
    {
        src: "/images/parent/soybean.png",
        className: "-bottom-2 left-[58%]",
    },
    {
        src: "/images/parent/mangosteen.png",
        className: "top-0 left-[58%] -rotate-12",
    },
    {
        src: "/images/parent/chard.png",
        className: "-top-4 right-[20%] -rotate-60",
    },
    {
        src: "/images/parent/passion-fruit.png",
        className: "top-28 left-[72%]",
    },

    {
        src: "/images/parent/soybean.png",
        className: "top-20 left-[88%]",
    },

    {
        src: "/images/parent/vegetables.png",
        className: "top-5 right-[2%] rotate-12",
    },
];

export default function PageBanner({ title, bgColor }: Props) {
    const { setBannerColor } = useBannerColor();

    useEffect(() => {
        setBannerColor(bgColor);

        return () => {
            setBannerColor("");
        };
    }, [bgColor, setBannerColor]);

    return (
        <section className={`relative overflow-hidden h-55 ${bgColor}`}>
            {/* Stickers */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
                {stickers.map((sticker, index) => (
                    <div
                        key={index}
                        className={`absolute hidden md:block ${sticker.className}`}
                    >
                        <Image
                            src={sticker.src}
                            alt=""
                            width={70}
                            height={70}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full px-8 md:px-20 pt-14">
                {/* Breadcrumb */}
                <div className="">
                    <Breadcrumb />
                </div>

                {/* Title */}
                <div className="flex items-center h-[70%]">
                    <h1
                        className={`text-white text-3xl md:text-5xl ${handlee.className}`}
                    >
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
}
