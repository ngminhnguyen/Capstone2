"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/parent/Navbar";
import Footer from "@/components/parent/Footer";
import { Baloo_2, Handlee, Nunito } from "next/font/google";

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "700"],
});
const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
export default function ParentDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const mainRef = useRef<HTMLDivElement>(null);

    // reset scroll when route changes
    useEffect(() => {
        mainRef.current?.scrollTo({
            top: 0,
            behavior: "instant" as ScrollBehavior,
        });
    }, [pathname]);

    return (
        <div className="min-h-screen bg-[#FDECE4] flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main
                ref={mainRef}
                className="flex-1 overflow-y-auto scrollbar-hide"
            >
                <div
                    className={`mx-auto px-4 py-6 md:px-8 ${baloo.className}`}
                >
                    {children}
                </div>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
}
