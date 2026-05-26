"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/parent/Navbar";
import Footer from "@/components/parent/Footer";
import PageBanner from "@/components/parent/PageBanner";

import { Baloo_2, Handlee, Nunito } from "next/font/google";
import { bannerConfig } from "@/config/banner-config";

const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

/* Banner Config */


export default function ParentDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const mainRef = useRef<HTMLDivElement>(null);

    const currentBanner = bannerConfig[pathname];

    // reset scroll when route changes
    useEffect(() => {
        mainRef.current?.scrollTo({
            top: 0,
            behavior: "instant" as ScrollBehavior,
        });
    }, [pathname]);

    return (
        <div
            className={`min-h-screen bg-[#FDECE4] flex flex-col ${baloo.className}`}
        >
            {/* Navbar */}
            <Navbar bannerColor={currentBanner?.color} />

            {/* Banner (not fixed) */}
            {currentBanner && (
                <PageBanner
                    title={currentBanner.title}
                    bgColor={currentBanner.color}
                />
            )}

            {/* Main Content */}
            <main ref={mainRef} className="flex-1 scrollbar-hide">
                <div className="mx-auto px-4 py-6 md:px-8">{children}</div>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
}
