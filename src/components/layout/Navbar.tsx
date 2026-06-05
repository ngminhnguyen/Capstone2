"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Handlee, Nunito } from "next/font/google";
import { ChevronDown, Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { parentNavigation, publicNavigation } from "@/data/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useBannerColor } from "@/components/layout/ui/BannerColorContext";
import { pageConfig } from "@/config/page-config";

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const shopMenu = [
    { name: "Coffee", href: "#" },
    { name: "Subscriptions", href: "#" },
    { name: "Amps Gear", href: "#" },
    { name: "Brewing Equipment", href: "#" },
    { name: "Shop All", href: "#" },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

type NavbarItem = {
    name: string;
    href: string;
};

type PublicNavbarProps = {
    navigation?: NavbarItem[];
    bannerColor?: string;
};

export default function Navbar({
    navigation,
    bannerColor,
}: PublicNavbarProps) {
    const pathname = usePathname();

    const currentConfig = pageConfig[pathname];

    const { bannerColor: contextBannerColor } = useBannerColor();

    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState<any>(null);

    // ===== ROUTE CHECK =====
    const isAuthPage = pathname === "/login" || pathname === "/register";

    const isParentRoute = pathname.startsWith("/parent");

    const isParentUser = user?.role === "parent";

    // ===== NAVIGATION LOGIC =====
    const shouldShowParentNavigation =
        !isAuthPage && (isParentUser || isParentRoute);

    const defaultNavigation = shouldShowParentNavigation
        ? [...publicNavigation, ...parentNavigation]
        : publicNavigation;

    // ===== EFFECT =====
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        const syncUser = () => {
            const storedUser = localStorage.getItem("user");
            setUser(storedUser ? JSON.parse(storedUser) : null);
        };

        handleScroll();
        syncUser();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("storage", syncUser);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("storage", syncUser);
        };
    }, [pathname]);

    // ===== NAVBAR COLOR =====
    const defaultNavbar = "bg-[#FDECE4] text-[#4E0706]";

    const routeColors: Record<string, string> = {
        "/": "bg-[#b63b5d]",
        "/home": "bg-[#b63b5d]",
        "/recipes": "bg-linear-to-r from-purple-700 to-fuchsia-600",
        "/articles": "bg-[#EE9B06]",
    };

    const currentRouteColor = routeColors[pathname] || defaultNavbar;

    const isGradient =
        contextBannerColor?.includes("from-") ||
        contextBannerColor?.includes("to-");

    const pageNavbarColor = currentConfig?.navbarColor;

    const recipeNavbarColor = contextBannerColor
        ? `${isGradient
            ? `bg-linear-to-r ${contextBannerColor}`
            : contextBannerColor
        } text-white`
        : null;

    const activeNavbarColor =
        pageNavbarColor ||
        recipeNavbarColor ||
        (currentRouteColor.includes("text-")
            ? currentRouteColor
            : `${currentRouteColor} text-white`);

    const bgClass = scrolled ? defaultNavbar : activeNavbarColor;

    // ===== LOGOUT =====
    const handleLogout = () => {
        // clear auth
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // update navbar immediately
        window.dispatchEvent(new Event("storage"));

        setUser(null);

        // redirect
        window.location.href = "/login";
    };

    return (
        <Disclosure
            as="nav"
            className={`sticky top-0 z-50 border-b border-orange-900/20 ${bgClass} ${nunito.className}`}
        >
            <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
                            <Bars3Icon className="block size-6 group-data-open:hidden" />
                            <XMarkIcon className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* LEFT */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Logo */}
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="logo"
                                src="/images/logo.png"
                                className="h-8 w-auto -rotate-20"
                            />

                            <span
                                className={`ml-2 text-3xl font-bold ${handlee.className}`}
                            >
                                BabyNutri
                            </span>
                        </div>

                        {/* NAVIGATION */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* Shop */}
                                <li className="relative group inline-flex items-center px-3 pt-2 text-xl font-medium">
                                    <button className="flex items-center gap-1 text-xl font-medium border-b-2 border-transparent hover:border-orange-900">
                                        Shop
                                        <ChevronDown size={20} />
                                    </button>

                                    <ul className="absolute left-0 top-full mt-3 w-60 rounded-xl border bg-white shadow-lg opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                                        {shopMenu.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className="block px-4 py-3 text-xl rounded-xl hover:bg-gray-100 transition"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                {/* Navigation */}
                                {(navigation || defaultNavigation).map(
                                    (item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                pathname === item.href
                                                    ? "border-b-2 border-orange-900"
                                                    : "border-b-2 border-transparent hover:border-orange-900",
                                                "inline-flex items-center px-3 pt-2 text-xl font-medium",
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Logged in */}
                        {user && !isAuthPage ? (
                            <div className="flex items-center gap-2">
                                {/* Favorites */}
                                <Link
                                    href="/parent/favorites"
                                    className={`group flex h-8 w-8 items-center justify-center rounded-full hover:outline-2 ${scrolled
                                        ? "hover:outline-offset-2 hover:outline-orange-800"
                                        : "hover:outline-offset-2 hover:outline-[#FDECE4]"
                                        }`}
                                >
                                    <Heart
                                        className={`text-xl ${scrolled
                                            ? "text-orange-800 fill-orange-800"
                                            : "text-[#FDECE4] fill-[#FDECE4]"
                                            }`}
                                    />
                                </Link>

                                {/* Profile */}
                                <Menu as="div" className="relative ml-3">
                                    <MenuButton
                                        className={`group relative flex rounded-full ${scrolled
                                            ? "hover:outline-2 hover:outline-offset-2 hover:outline-orange-800"
                                            : "hover:outline-2 hover:outline-offset-2 hover:outline-[#FDECE4]"
                                            }`}
                                    >
                                        <div
                                            className={`size-8 rounded-full flex items-center justify-center ${scrolled
                                                ? "bg-orange-800"
                                                : "bg-[#FDECE4]"
                                                }`}
                                        >
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className={`size-5 ${scrolled
                                                    ? "text-white"
                                                    : "text-orange-800"
                                                    }`}
                                            />
                                        </div>
                                    </MenuButton>

                                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5">
                                        <MenuItem>
                                            <a
                                                href="/profile"
                                                className="block px-4 py-2 text-xl text-gray-700 hover:bg-[#D9BBA0]"
                                            >
                                                My profile
                                            </a>
                                        </MenuItem>

                                        <MenuItem>
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 text-xl text-gray-700 hover:bg-[#D9BBA0]"
                                            >
                                                Sign out
                                            </button>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        ) : (
                            <a
                                href="/login"
                                className={`block px-4 py-2 text-lg font-medium rounded-xl ${pathname === "/login"
                                    ? "text-[#4E0706] font-bold border-b border-orange-900"
                                    : "hover:bg-[#D9BBA0] hover:text-amber-950 transition"
                                    }`}
                            >
                                Sign in
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {(navigation || defaultNavigation).map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                pathname === item.href
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                                "block rounded-md px-3 py-2 text-base font-medium",
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
