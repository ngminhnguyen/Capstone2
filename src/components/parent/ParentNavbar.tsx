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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Handlee, Nunito } from "next/font/google";
import { ChevronDown, Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const navigation = [
    { name: "Dashboard", href: "/parent/dashboard" },
    { name: "Home", href: "/home" },
    { name: "Recipes", href: "/recipes" },
    { name: "Expert's Articles", href: "/articles" },
];
const shopMenu = [
    { name: "Coffee", href: "/collections/coffee" },
    { name: "Subscriptions", href: "/collections/subscriptions" },
    { name: "Amps Gear", href: "/collections/amps-gear" },
    { name: "Brewing Equipment", href: "/collections/brewing-equipment" },
    { name: "Shop All", href: "/collections/all" },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
type ParentNavbarProps = {
    bannerColor?: string;
};

export default function ParentNavbar({ bannerColor }: ParentNavbarProps) {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const defaultNavbar = "bg-[#FDECE4] text-[#4E0706]";

    const bgClass = scrolled
        ? defaultNavbar
        : bannerColor
          ? `${bannerColor} text-white`
          : defaultNavbar;
    return (
        <Disclosure
            as="nav"
            className={`
                sticky top-0 z-50
                border-b border-orange-900/20
                transition-all duration-300 ease-in-out
                ${bgClass}
                ${nunito.className}
            `}
        >
            <div className="w-full mx-auto  px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block size-6 group-data-open:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden size-6 group-data-open:block"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Logo Text  */}
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="/images/logo.png"
                                className="h-8 w-auto -rotate-20"
                            />
                            <span
                                className={`ml-2 text-3xl font-bold ${handlee.className} `}
                            >
                                BabyNutri
                            </span>
                        </div>
                        {/* Các mục điều hướng */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className={`flex space-x-4`}>
                                {/* showdown xuống */}
                                <li className="relative group inline-flex items-center px-3 pt-2 text-xl font-medium">
                                    <button className="flex items-center gap-1 text-xl font-medium border-b-2 border-transparent hover:border-orange-900">
                                        Shop
                                        <ChevronDown size={16} />
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

                                {/* Các mục chính */}
                                {navigation.map((item) => (
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
                                ))}
                                {/* Các mục phụ */}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link
                            href="/parent/favorites"
                            className={`group flex h-8 w-8 items-center justify-center rounded-full hover:outline-2${
                                scrolled
                                    ? " hover:outline-offset-2 hover:outline-orange-800"
                                    : " hover:outline-offset-2 hover:outline-[#FDECE4]"
                            }`}
                        >
                            <Heart
                                className={`text-xl ${
                                    scrolled
                                        ? "text-orange-800 text-xl fill-orange-800"
                                        : "text-[#FDECE4] fill-[#FDECE4] group-hover:text-[#FDECE4] group-hover:fill-[#FDECE4]"
                                } `}
                            />
                        </Link>
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <MenuButton
                                className={`group relative flex rounded-full
                                    ${
                                        scrolled
                                            ? "hover:outline-2 hover:outline-offset-2 hover:outline-orange-800"
                                            : "hover:outline-2 hover:outline-offset-2 hover:outline-[#FDECE4]"
                                    }`}
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>

                                <div
                                    className={`size-8 rounded-full flex items-center justify-center ${
                                        scrolled ? "bg-orange-800" : "bg-white"
                                    } `}
                                >
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className={`size-5 ${
                                            scrolled
                                                ? "text-white"
                                                : "text-orange-800"
                                        } `}
                                    />
                                </div>
                            </MenuButton>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                {/* <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-xl text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                            >
                                                Your profile
                                            </a>
                                        </MenuItem> */}
                                <MenuItem>
                                    <a
                                        href="/login"
                                        className={`block px-4 py-2 text-xl ${
                                            pathname === "/login"
                                                ? "text-[#4E0706] font-bold bg-[#E8D5C4]"
                                                : "text-gray-700 hover:bg-[#D9BBA0]"
                                        }`}
                                    >
                                        Sign out
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a
                                        href="/profile"
                                        className={`block px-4 py-2 text-xl ${
                                            pathname === "/register"
                                                ? "text-[#4E0706] font-bold bg-[#E8D5C4]"
                                                : "text-gray-700 hover:bg-[#D9BBA0]"
                                        }`}
                                    >
                                        My profile
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
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
