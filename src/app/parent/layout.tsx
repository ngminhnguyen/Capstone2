"use client";

import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/expert/theme-provider";
import { Suspense } from "react";
import AuthGuard from "@/components/AuthGuard";
import { BannerColorProvider } from "@/components/layout/ui/BannerColorContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/PublicFooter";

export default function ParentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthGuard role="Parent">
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                <Suspense fallback={null}>
                    <div className="min-h-screen">
                        <BannerColorProvider>
                            <Navbar />
                            {children}
                            <Footer />
                        </BannerColorProvider>
                        <Analytics />
                    </div>
                </Suspense>
            </ThemeProvider>
        </AuthGuard>
    );
}
