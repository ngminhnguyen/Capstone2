"use client";

import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/expert/theme-provider";
import { Suspense } from "react";
import ButtonDownload from "@/components/expert/button-download";

export default function ExpertLayout({
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
                {children}
                <ButtonDownload />
                <Analytics />
            </Suspense>
        </ThemeProvider>
    );
}
