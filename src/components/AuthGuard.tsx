"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode;
    role?: "expert" | "parent" | "admin";
};

export default function AuthGuard({ children, role }: Props) {
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const userStr = localStorage.getItem("user");

        if (!userStr) {
            router.replace("/login");
            return;
        }

        const user = JSON.parse(userStr);

        if (role && user.role !== role) {
            router.replace("/login");
            return;
        }

        setChecked(true);
    }, []);

    if (!checked) return null; // prevents flicker

    return <>{children}</>;
}