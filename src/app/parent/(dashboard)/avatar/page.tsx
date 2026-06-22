"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export default function AvatarPage() {
    const [parent, setParent] = useState<any>(null);
    const [babies, setBabies] = useState<any[]>([]);
    const [parentUrl, setParentUrl] = useState("");
    const [babyUrls, setBabyUrls] = useState<Record<number, string>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const router = useRouter();

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        try {
            setLoading(true);
            const res = await api.get("/parent/dashboard");
            setParent(res.data.parent);
            setBabies(res.data.babies || []);
        } catch (err) {
            toast.error("Failed to load data");
        } finally {
            setLoading(false);
        }
    };

    // ================= PARENT =================
    const updateParent = async () => {
        if (!parentUrl) return toast.warning("Enter image URL");

        try {
            setSaving(true);

            await api.put("/parent/avatar", {
                avatar: parentUrl,
            });

            setParent((p: any) => ({
                ...p,
                avatar: parentUrl,
            }));

            setParentUrl("");
            toast.success("Parent avatar updated!");
        } catch (err) {
            toast.error("Update failed");
        } finally {
            setSaving(false);
        }
    };

    // ================= BABY =================
    const updateBaby = async (id: number) => {
        const url = babyUrls[id];
        if (!url) return toast.warning("Enter image URL");

        try {
            setSaving(true);

            await api.put(`/parent/baby/${id}/avatar`, {
                avatar: url,
            });

            setBabies((prev) =>
                prev.map((b) =>
                    b.id === id ? { ...b, avatar: url } : b
                )
            );

            setBabyUrls((prev) => ({ ...prev, [id]: "" }));
            toast.success("Baby avatar updated!");
        } catch (err) {
            toast.error("Update failed");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDECE4] p-6">

            {/* TOAST */}
            <ToastContainer position="top-right" />

            {/* HEADER */}
            <div className="max-w-5xl mx-auto mb-8">
                <button
                    onClick={() => router.back()}
                    className="text-[#5A0000] font-semibold hover:underline"
                >
                    ← Back
                </button>

                <h1 className="text-3xl font-bold text-[#5A0000] mt-4">
                    Update Avatars
                </h1>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">

                {/* ================= PARENT ================= */}
                <div className="bg-[#F8F8F8] rounded-[30px] p-8 shadow-md">
                    <h2 className="text-2xl font-bold text-[#5A0000] mb-6">
                        Parent Avatar
                    </h2>

                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#6D0000]">
                            <Image
                                src={
                                    parent?.avatar ||
                                    "/images/default-parent.png"
                                }
                                alt="parent"
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>

                        <input
                            className="flex-1 p-4 rounded-xl border border-[#6D0000]/30 focus:ring-2 focus:ring-[#FFB405]"
                            placeholder="Paste image URL..."
                            value={parentUrl}
                            onChange={(e) =>
                                setParentUrl(e.target.value)
                            }
                        />

                        <button
                            onClick={updateParent}
                            disabled={saving}
                            className="bg-[#8CC800] text-[#4A0000] font-bold px-6 py-3 rounded-xl
                                       hover:scale-105 transition disabled:opacity-50"
                        >
                            Save
                        </button>
                    </div>
                </div>

                {/* ================= BABIES ================= */}
                <div className="bg-[#F8F8F8] rounded-[30px] p-8 shadow-md">
                    <h2 className="text-2xl font-bold text-[#5A0000] mb-6">
                        Babies Avatars
                    </h2>

                    <div className="space-y-6">
                        {babies.map((b) => (
                            <div
                                key={b.id}
                                className="flex items-center gap-6 bg-white p-4 rounded-2xl"
                            >
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#6D0000]">
                                    <Image
                                        src={
                                            b.avatar ||
                                            "/images/default-child.png"
                                        }
                                        alt={b.name}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1">
                                    <p className="font-bold text-[#5A0000]">
                                        {b.name}
                                    </p>

                                    <input
                                        className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB405]"
                                        placeholder="Paste image URL..."
                                        value={babyUrls[b.id] || ""}
                                        onChange={(e) =>
                                            setBabyUrls((prev) => ({
                                                ...prev,
                                                [b.id]: e.target.value,
                                            }))
                                        }
                                    />
                                </div>

                                <button
                                    onClick={() => updateBaby(b.id)}
                                    disabled={saving}
                                    className="bg-[#FFB405] text-[#4A0000] font-bold px-4 py-2 rounded-xl
                                               hover:scale-105 transition disabled:opacity-50"
                                >
                                    Save
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}