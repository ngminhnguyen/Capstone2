"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [checked, setChecked] = useState(false);
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");

        if (!user) {
            router.replace("/login");
            return;
        }

        setAllowed(true);
        setChecked(true);
    }, []);

    // ⛔ NOTHING renders until check is done
    if (!checked) {
        return null; // or loading screen
    }

    if (!allowed) {
        return null;
    }

    return <>{children}</>;
}