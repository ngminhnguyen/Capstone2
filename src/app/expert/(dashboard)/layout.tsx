"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Sidebar } from "@/components/expert/sidebar";
import { Topbar } from "@/components/expert/topbar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        mainRef.current?.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, [pathname]);

    return (
        <div className="bg-[#FDECE4]">
            <div className="mx-auto  px-2 py-3 sm:px-4 sm:py-6">
                <div className="rounded-3xl bg-card shadow-sm ring-1 ring-border overflow-hidden">
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    <div className="flex h-[95vh]">
                        <div
                            className={`
                                        fixed inset-y-0 left-0 z-50 lg:relative lg:z-auto
                                        transform transition-transform duration-300 ease-in-out
                                        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                                    `}
                        >
                            <Sidebar onClose={() => setSidebarOpen(false)} />
                        </div>

                        <main
                            ref={mainRef}
                            className="flex-1 w-full lg:w-auto rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none bg-muted p-3 sm:p-5 md:px-7 md:py-7 xl:pb-7 xl:pt-0 overflow-auto scrollbar-hide"
                        >
                            <Topbar onMenuClick={() => setSidebarOpen(true)} />

                            <div className="overflow-y-auto scrollbar-hide">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
