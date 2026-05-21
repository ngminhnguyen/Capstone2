"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { userProfile } from "@/data/userProfiles";

export default function UserProfilePage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const babies = userProfile.babies;

    const baby = babies[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? babies.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === babies.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="bg-[#FDECE4] min-h-screen p-6">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-7xl mx-auto">
                {/* LEFT CARD */}
                <div className="xl:col-span-7 relative bg-[#F8F8F8] rounded-[40px] min-h-130 overflow-hidden p-10">
                    {/* Decor */}
                    <img
                        src="/images/parent/fish.png"
                        alt=""
                        className="absolute top-8 left-8 w-20 opacity-40"
                    />

                    <img
                        src="/images/parent/univers.png"
                        alt=""
                        className="absolute top-2 left-[36%] w-20 opacity-60"
                    />

                    <img
                        src="/images/parent/strawberry.png"
                        alt=""
                        className="absolute top-5 right-12 w-20 opacity-60 -rotate-30"
                    />

                    <img
                        src="/images/jellyfish.png"
                        alt=""
                        className="absolute bottom-4 left-12 w-20 opacity-60"
                    />

                    <img
                        src="/images/cat.png"
                        alt=""
                        className="absolute bottom-20 left-[32%] w-16 opacity-50"
                    />

                    <img
                        src="/images/strawberry.png"
                        alt=""
                        className="absolute bottom-16 right-16 w-16 opacity-60"
                    />

                    {/* Prev */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
                    >
                        <ChevronLeft className="w-14 h-14 text-pink-400 hover:scale-110 transition" />
                    </button>

                    {/* Next */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20"
                    >
                        <ChevronRight className="w-14 h-14 text-pink-400 hover:scale-110 transition" />
                    </button>

                    <div className="grid lg:grid-cols-2 items-center h-full">
                        {/* Avatar */}
                        <div className="flex justify-center">
                            <div className="w-65 h-65 rounded-full border-4 border-[#6D0000] overflow-hidden shadow-lg">
                                <img
                                    src={baby.avatar}
                                    alt={baby.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-[#5A0000]">
                                {baby.name}
                            </h1>

                            <p className="mt-8 text-xl font-medium text-[#5A0000]">
                                {baby.dateOfBirth}
                            </p>

                            <p className="mt-8 text-xl text-[#5A0000]">
                                weight: {baby.weight}
                            </p>

                            <p className="mt-4 text-xl text-[#5A0000]">
                                height: {baby.height}
                            </p>

                            <p className="mt-8 text-xl font-medium text-[#5A0000]">
                                {baby.growthStatus}
                            </p>

                            <button className="mt-10 bg-[#F2E266] hover:scale-105 transition px-12 py-4 rounded-full text-[#5A0000] text-2xl font-semibold">
                                More detail
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="xl:col-span-5 bg-[#EFEFEF] rounded-[40px] overflow-hidden min-h-130">
                    {/* Top Wave */}
                    <div className="relative h-28 bg-[#0099C6]">
                        <svg
                            className="absolute bottom-0 w-full"
                            viewBox="0 0 1440 120"
                            fill="none"
                        >
                            <path
                                fill="#EFEFEF"
                                d="M0,64L80,53.3C160,43,320,21,480,26.7C640,32,800,64,960,80C1120,96,1280,96,1360,96L1440,96L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
                            />
                        </svg>
                    </div>

                    <div className="p-10 text-[#4A0000]">
                        <h2 className="text-5xl text-center font-bold mb-16 capitalize">
                            Account Summary
                        </h2>

                        <div className="space-y-10">
                            <div>
                                <p className="text-3xl font-semibold">Email</p>

                                <p className="text-3xl font-bold mt-4 wrap-break-word">
                                    {userProfile.email}
                                </p>
                            </div>

                            <button className="w-full bg-[#8CC800] hover:bg-[#7AB500] transition text-[#4A0000] text-3xl font-bold py-5 rounded-2xl mt-10">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
