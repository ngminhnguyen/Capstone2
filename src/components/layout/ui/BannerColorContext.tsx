"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BannerContextType = {
    bannerColor: string;
    setBannerColor: (color: string) => void;
};

const BannerColorContext = createContext<BannerContextType | null>(null);

export function BannerColorProvider({ children }: { children: ReactNode }) {
    const [bannerColor, setBannerColor] = useState("");

    return (
        <BannerColorContext.Provider
            value={{
                bannerColor,
                setBannerColor,
            }}
        >
            {children}
        </BannerColorContext.Provider>
    );
}

export function useBannerColor() {
    const context = useContext(BannerColorContext);

    return (
        context ?? {
            bannerColor: "",
            setBannerColor: () => {},
        }
    );
}
