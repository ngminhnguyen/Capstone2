"use client";

import CardBox from "@/components/expert/shared/CardBox";
import Image from "next/image";
import { JSX } from "react";

interface BreadCrumbType {
    subtitle?: string;
    items?: any[];
    title: string;
    children?: JSX.Element;
}

const BreadcrumbComp = ({ title }: BreadCrumbType) => {
    return (
        <CardBox className="mb-6 py-5 px-6 bg-fuchsia-100 rounded-2xl overflow-hidden border border-amber-100 shadow-sm">
            <div className="grid grid-cols-12 items-center gap-6">
                {/* Left content */}
                <div className="col-span-12 md:col-span-10">
                    <h4 className="font-bold text-2xl text-fuchsia-950 mb-3">
                        {title}
                    </h4>

                    <ol
                        className="flex items-center whitespace-nowrap text-xl"
                        aria-label="Breadcrumb"
                    >
                        <li className="flex items-center">
                            <a
                                href="/"
                                className="text-fuchsia-700 hover:text-fuchsia-900 transition-colors"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-600 mx-3"></div>
                        </li>

                        <li className="text-gray-600" aria-current="page">
                            {title}
                        </li>
                    </ol>
                </div>

                {/* Right image */}
                <div className="hidden md:flex col-span-2 justify-center">
                    <Image
                        src="/images/parent/stars.png"
                        alt="breadcrumb image"
                        className="translate-y-5"
                        width={120}
                        height={120}
                    />
                </div>
            </div>
        </CardBox>
    );
};

export default BreadcrumbComp;
