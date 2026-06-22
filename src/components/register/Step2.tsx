"use client";

import { Handlee } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Props = {
    nextStep?: () => void;
    prevStep?: () => void;
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});

const allergiesData = [
    {
        id: 1,
        name: "Seafood allergy",
        foods: ["Shrimp", "Crab", "Sea Fish"],
        symptoms: [
            "Itching, rash",
            "Vomiting after eating",
            "Difficulty breathing",
        ],
    },
    {
        id: 2,
        name: "Milk allergy",
        foods: ["Cow Milk", "Cheese"],
        symptoms: [
            "Diarrhea",
            "Skin rash",
            "Abdominal pain",
        ],
    },
    {
        id: 3,
        name: "Egg allergy",
        foods: ["Egg White", "Egg Yolk"],
        symptoms: [
            "Hives",
            "Runny nose",
            "Vomiting",
        ],
    },
];

export default function Step2({
    prevStep,
    formData,
    setFormData,
}: Props) {

    const router = useRouter();

    const [selectedIds, setSelectedIds] =
        useState<number[]>([]);

    const handleSelect = (id: number) => {

        setSelectedIds((prev) => {

            let updated: number[];

            if (prev.includes(id)) {
                updated =
                    prev.filter(
                        (item) => item !== id
                    );
            } else {
                updated = [...prev, id];
            }

            return updated;
        });
    };

    const handleSubmit = async () => {

        try {

            const childrenWithAllergies =
                formData.children.map(
                    (child: any) => ({
                        ...child,
                        allergies: selectedIds,
                    })
                );

            const payload = {
                parent: formData.parent,
                children: childrenWithAllergies,
            };

            console.log(
                "🚀 REGISTER PAYLOAD:",
                payload
            );

            const res = await axios.post(
                "http://localhost:5000/api/auth/register",
                payload
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            router.replace(
                "/parent/dashboard"
            );

        } catch (err: any) {

            console.error(
                "❌ REGISTER ERROR:",
                err?.response?.data || err
            );

            alert(
                err?.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    useEffect(() => {
        console.log(
            "STEP 2 DATA:",
            formData
        );
    }, [formData]);

    return (
        <div className="sm:w-[80%] mx-auto bg-[#fdece4] text-[#5a0000] flex flex-col items-center py-5">

            {/* Progress */}
            <div className="relative w-[60%] h-20 flex items-center justify-between mb-10 pl-20 pr-20">

                <div className="absolute top-1/2 left-0 w-full h-2 bg-cyan-700 -translate-y-1/2 rounded-full"></div>

                <div
                    className={`relative z-10 w-16 h-16 flex items-center justify-center ${handlee.className}`}
                >
                    <img
                        src="/images/circleCreate1.png"
                        alt="Step 1"
                        className="absolute inset-0 w-full h-full"
                    />

                    <span className="absolute -rotate-20 font-bold z-10">
                        Step 1
                    </span>
                </div>

                <div
                    className={`relative z-10 w-16 h-16 flex items-center justify-center ${handlee.className}`}
                >
                    <img
                        src="/images/circleCreate1.png"
                        alt="Step 2"
                        className="absolute inset-0 w-full h-full"
                    />

                    <span className="absolute -rotate-20 font-bold z-10">
                        Step 2
                    </span>
                </div>
            </div>

            {/* Heading */}
            <div className="w-[60%]">
                <h1 className="text-4xl font-bold mb-4">
                    Does your baby have any allergies?
                </h1>

                <p className="mb-8 text-lg">
                    A suitable diet for children with allergies is very important.
                </p>
            </div>

            {/* Allergies */}
            <div className="w-[60%] ml-10">

                <div className="flex flex-col gap-4">

                    {allergiesData.map((item) => (

                        <div
                            key={item.id}
                            className="flex gap-2 items-start"
                        >

                            <button
                                type="button"
                                onClick={() =>
                                    handleSelect(item.id)
                                }
                                className={`mt-1 w-5 h-5 rounded-full border border-amber-950 flex items-center justify-center transition ${
                                    selectedIds.includes(item.id)
                                        ? "bg-amber-300"
                                        : "bg-white"
                                }`}
                            >
                                {selectedIds.includes(item.id) && (
                                    <div className="w-2.5 h-2.5 bg-amber-950 rounded-full"></div>
                                )}
                            </button>

                            <div>

                                <p>
                                    <strong>
                                        {item.name}
                                    </strong>
                                    {" "}
                                    (
                                    {item.foods.join(", ")}
                                    )
                                </p>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        selectedIds.includes(item.id)
                                            ? "max-h-40 mt-2"
                                            : "max-h-0"
                                    }`}
                                >
                                    <p>
                                        Symptoms:
                                    </p>

                                    <ul className="list-disc ml-5 mt-1 text-lg space-y-1">
                                        {item.symptoms.map(
                                            (
                                                symptom,
                                                index
                                            ) => (
                                                <li
                                                    key={
                                                        index
                                                    }
                                                >
                                                    {
                                                        symptom
                                                    }
                                                </li>
                                            )
                                        )}
                                    </ul>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Debug */}
            <div className="w-[60%] mt-6">
                <pre className="text-xs bg-white p-3 rounded">
                    {JSON.stringify(
                        selectedIds,
                        null,
                        2
                    )}
                </pre>
            </div>

            {/* Buttons */}
            <div className="w-[60%] flex justify-between gap-2 mt-8 pl-10 pr-10">

                <button
                    onClick={prevStep}
                    className="bg-gray-200 px-9 py-2 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200"
                >
                    Back
                </button>

                <button
                    onClick={handleSubmit}
                    className="bg-yellow-400 px-9 py-2 rounded-xl font-bold hover:bg-yellow-200 transition-colors duration-200"
                >
                    Finish
                </button>

            </div>

        </div>
    );
}