"use client";

import type React from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Home,
    MessageCircle,
    BookImage,
    ChefHat,
    TabletSmartphone,
    UserRound,
    LogIn,
    LogOut,
    ChevronFirst,
    ChevronLast,
} from "lucide-react";

type Item = {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
    { href: "/expert/dashboard", label: "Home", icon: Home },
    { href: "/expert/createRecipe", label: "Create Recipe", icon: ChefHat },
    {
        href: "/expert/recipeManagement",
        label: "Recipe Management",
        icon: ChefHat,
    },
    { href: "/expert/createArticle", label: "Create Article", icon: BookImage },
    {
        href: "/expert/articleManagement",
        label: "Article Management",
        icon: TabletSmartphone,
    },
    { href: "/expert/chat", label: "Chat", icon: MessageCircle },
    { href: "/expert/profile", label: "Profile", icon: UserRound }
];
type SidebarProps = {
    onClose?: () => void;
};


export function Sidebar({ onClose }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();

    const [open, setOpen] = useState(true);
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            setUser(null);
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);

        router.push("/login");
    };
    useEffect(() => {
        const saved = localStorage.getItem("sidebar-open");
        if (saved) setOpen(saved === "1");
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebar-open", open ? "1" : "0");
    }, [open]);

    const sidebarBg = pathname.startsWith("/expert/createRecipe")
        ? "bg-gradient-to-b from-amber-300"
        : pathname.startsWith("/expert/dashboard")
            ? "bg-gradient-to-b from-pink-300 to-pink-700"
            : pathname.startsWith("/expert/recipeManagement")
                ? "bg-gradient-to-b from-amber-300 to-amber-800"
                : pathname.startsWith("/expert/createArticle")
                    ? "bg-gradient-to-b from-sky-300"
                    : pathname.startsWith("/expert/articleManagement")
                        ? "bg-gradient-to-b from-sky-300 to-blue-700"
                        : pathname.startsWith("/expert/chat")
                            ? "bg-gradient-to-b from-sky-300 to-blue-700"
                            : "bg-gradient-to-b from-purple-300 to-purple-700";
    return (
        <aside
            className={`${sidebarBg}  text-amber-950 transition-[width] duration-300 rounded-l-3xl flex flex-col h-full  ${open ? "w-52" : "w-20"
                }`}
            aria-label="Primary navigation"
        >
            <div className="flex items-center justify-between gap-2 px-4 py-5">
                <div className="flex items-center gap-2">
                    <div className="size-9 rounded-xl -rotate-18 grid place-items-center font-bold">
                        <img src="/images/logo.png" alt="BabyNutri Logo" />
                    </div>
                    <span
                        className={`${open ? "block" : "hidden"} text-xl font-semibold`}
                    >
                        BabyNutri
                    </span>
                </div>
                <button
                    aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
                    onClick={() => setOpen((v) => !v)}
                    className="rounded-lg bg-white/20 p-1.5 hover:bg-white/30"
                >
                    {open ? (
                        <ChevronFirst className="size-5" />
                    ) : (
                        <ChevronLast className="size-5" />
                    )}
                </button>
            </div>

            <nav className="mt-2 flex-1">
                <ul className="flex flex-col gap-1 px-3">
                    {items.map(({ href, label, icon: Icon }) => {
                        const active =
                            pathname === href ||
                            (href !== "/" && pathname?.startsWith(href));
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-current={active ? "page" : undefined}
                                    onClick={() => onClose?.()}
                                    className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${active
                                        ? "bg-white text-brand"
                                        : "text-amber-900 hover:bg-[#FDECE4]"
                                        }`}
                                >
                                    <Icon
                                        className={`size-5 ${active ? "text-brand" : "text-amber-900"}`}
                                    />
                                    <span
                                        className={`${open ? "block" : "hidden"} text-sm font-medium`}
                                    >
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="px-3 pb-5 pt-2">
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-amber-900 bg-[#FDECE4]"
                >
                    <LogOut className="size-5" />
                    {open && <span className="text-sm font-medium">Sign out</span>}
                </button>
            </div>
        </aside>
    );
}
