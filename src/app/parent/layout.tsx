"use client";

import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/expert/theme-provider";
import { Suspense } from "react";

export default function ParentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <Suspense fallback={null}>
                <div className="h-screen overflow-hidden">
                    <div className="h-full overflow-y-auto scrollbar-hide">
                        {children}
                    </div>
                </div>

                <Analytics />
            </Suspense>
        </ThemeProvider>
    );
}
