"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { userProfile } from "@/data/userProfiles";

export default function Dashboard() {
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
        <div className="bg-[#FDECE4] p-6">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 max-w-7xl mx-auto">
                {/* LEFT CARD */}
                <div className="xl:col-span-7 relative bg-[#F8F8F8] rounded-[40px] min-h-130 overflow-hidden p-10">
                    {/* Decor */}
                    <img
                        src="/images/parent/fish.png"
                        alt=""
                        className="absolute -top-2 left-8 w-20 opacity-40"
                    />

                    <img
                        src="/images/parent/univers.png"
                        alt=""
                        className="absolute top-9 left-[36%] w-20 opacity-60"
                    />

                    <img
                        src="/images/parent/strawberry.png"
                        alt=""
                        className="absolute top-3 right-8 w-20 opacity-60 -rotate-30"
                    />

                    <img
                        src="/images/parent/vegetable.png"
                        alt=""
                        className="absolute bottom-4 left-7 w-20 opacity-60 rotate-40"
                    />

                    <img
                        src="/images/parent/pet.png"
                        alt=""
                        className="absolute bottom-20 left-[32%] w-16 opacity-50"
                    />

                    <img
                        src="/images/parent/spinach.png"
                        alt=""
                        className="absolute bottom-16 right-16 w-16 opacity-60 rotate-30"
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

                            <p className="mt-8 text-xl font-medium text-amber-600">
                                {baby.growthStatus}
                            </p>

                            <button className="mt-10 bg-[#F2E266] hover:scale-105 transition px-12 py-4 rounded-full text-[#5A0000] text-2xl font-semibold">
                                More detail
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="xl:col-span-5 bg-white rounded-[40px] overflow-hidden min-h-130 relative">
                    {/* Top Wave */}
                    <div className="relative h-40 bg-[#0099C6]">
                        <svg
                            className="absolute bottom-0 w-full"
                            viewBox="0 0 1440 120"
                            fill="none"
                        >
                            <path
                                fill="white"
                                d="M0,64L80,53.3C160,43,320,21,480,26.7C640,32,800,64,960,80C1120,96,1280,96,1360,96L1440,96L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
                            />
                        </svg>
                    </div>

                    {/* Floating User */}
                    <div className="absolute top-19 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-orange-200 shadow-md bg-white">
                            <Image
                                src={userProfile.avatar}
                                alt={userProfile.fullName}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold mt-3 text-center text-[#4A0000]">
                            {userProfile.fullName}
                        </h2>

                        <p className="text-sm md:text-base text-[#7A5A50] mt-1">
                            Parent Account
                        </p>
                    </div>

                    {/* Content */}
                    <div className="pt-30 px-8 md:px-10 pb-10 text-[#4A0000]">
                        <div className="space-y-8">
                            {/* Email */}
                            <div>
                                <p className="text-sm md:text-base font-medium text-[#7A5A50] mb-2">
                                    Email
                                </p>

                                <p className="text-lg md:text-xl font-bold break-words">
                                    {userProfile.email}
                                </p>
                            </div>

                            {/* Button */}
                            <button className="w-full bg-[#8CC800] hover:bg-[#7AB500] transition text-[#4A0000] text-xl md:text-2xl font-bold py-4 rounded-2xl mt-3">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="mt-20">
                {/* Title */}
                <h2 className="text-center text-[#4A0000] text-lg md:text-xl font-bold mb-14">
                    chat to our customer support team
                </h2>

                {/* Support Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Customer Care */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-36 h-36 mb-6">
                            <Image
                                src="/images/parent/careTeam.png"
                                alt="Customer Care"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-[#4A0000] text-xl md:text-2xl font-bold mb-2">
                            Customer care
                        </h3>

                        <p className="text-[#4A0000] text-sm md:text-lg leading-relaxed max-w-105">
                            Our lovely customer care team are here to help. Get
                            in touch via our contact form or call us on:
                        </p>

                        <p className="text-[#4A0000] text-xl font-bold mt-2">
                            0909 099 0909
                        </p>

                        <p className="text-[#4A0000] text-lg md:text-xl mt-5 leading-relaxed max-w-95">
                            (Monday - Friday: 8:30am - 4:30pm, excluding
                            Holidays)
                        </p>
                    </div>

                    {/* FAQs */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-36 h-36 mb-6">
                            <Image
                                src="/images/parent/question.png"
                                alt="FAQs"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-[#4A0000] text-xl md:text-2xl font-bold mb-2">
                            FAQs
                        </h3>

                        <p className="text-[#4A0000] text-lg md:text-xl leading-relaxed max-w-105">
                            Check out our FAQs for our most asked questions!
                        </p>

                        <button className="mt-2 text-[#4A0000] text-xl font-bold hover:underline">
                            Visit FAQs
                        </button>
                    </div>

                    {/* Expert Question */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-36 h-36 mb-6">
                            <Image
                                src="/images/parent/expert.png"
                                alt="Expert"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-[#4A0000] text-xl md:text-2xl font-bold mb-2 max-w-112.5 leading-tight">
                            Ask the expert question
                        </h3>

                        <p className="text-[#4A0000] text-lg md:text-xl leading-relaxed max-w-105">
                            Got a question or need help with your baby? Visit
                            form question
                        </p>

                        <p className="text-[#4A0000] text-lg md:text-xl mt-10 leading-relaxed max-w-95">
                            (Monday - Friday: 8:30am - 4:30pm, excluding
                            Holidays)
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
