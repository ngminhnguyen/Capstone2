"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Handlee } from "next/font/google";

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});

type BreadcrumbProps = {
    recipeTitle?: string;
};

export default function Breadcrumb({ recipeTitle }: BreadcrumbProps) {
    const pathname = usePathname();

    const hiddenSegments = ["parent", "expert", "admin", "(public)"];

    const segments = pathname
        .split("/")
        .filter(Boolean)
        .filter((segment) => !hiddenSegments.includes(segment));

    // format tên đẹp hơn
    const formatLabel = (text: string) => {
        const customLabels: Record<string, string> = {
            home: "Home",
            recipes: "Recipes",
            articles: "Expert's Articles",
            dashboard: "Dashboard",
            expert: "Expert",
            parent: "Parent",
        };

        return (
            customLabels[text] ||
            text
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())
        );
    };

    return (
        <div
            className={`
                text-white text-sm md:text-base flex items-center gap-2 pb-1
                ${handlee.className}
            `}
        >
            {segments.map((segment, index) => {
                const href = "/" + segments.slice(0, index + 1).join("/");

                const isLast = index === segments.length - 1;

                // chỉ đổi id cuối thành recipe title
                const label =
                    isLast && recipeTitle ? recipeTitle : formatLabel(segment);

                return (
                    <div key={href} className="flex items-center gap-2">
                        {index > 0 && <span>/</span>}

                        {isLast ? (
                            <span className="font-semibold">{label}</span>
                        ) : (
                            <Link href={href} className="hover:underline">
                                {label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
