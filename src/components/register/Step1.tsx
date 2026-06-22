"use client";

import { useState, useEffect } from "react";
import { Handlee } from "next/font/google";

type Props = {
    nextStep?: () => void;
    prevStep?: () => void;
    formData: RegisterData;
    setFormData: React.Dispatch<React.SetStateAction<RegisterData>>;
};

const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});

type ChildProfile = {
    name: string;
    weight: string;
    height: string;
    dob: string;
    gender: string;
};

type RegisterData = {
    parent: any;
    children: ChildProfile[];
    allergy: number | null;
};

export default function Step1({
    nextStep,
    prevStep,
    formData,
    setFormData,
}: Props) {
    // const [formData, setFormData] = useState<RegisterData>({
    //     parent: {},
    //     children: [],
    //     allergy: null,
    // });

    const children = formData?.children ?? [];

    const addChildForm = () => {
        setFormData((prev) => ({
            ...prev,
            children: [
                ...(prev.children || []),
                {
                    name: "",
                    weight: "",
                    height: "",
                    dob: "",
                    gender: "",
                },
            ],
        }));
    };

    // useEffect(() => {
    //     console.log("🔥 GLOBAL formData:", formData);
    //     console.log("🔥 UPDATE:", Date.now());
    // }, [formData]);

    const [error, setError] = useState("");

    const handleNext = () => {
        const hasCompleteChild = formData?.children?.some(
            (child: ChildProfile) =>
                child.name.trim() !== "" &&
                child.weight.trim() !== "" &&
                child.height.trim() !== "" &&
                child.dob !== "" &&
                child.gender !== "",
        );

        if (!hasCompleteChild) {
            setError(
                "Please complete all information for at least one little one before continuing.",
            );
            return;
        }

        setError("");
        nextStep?.();
    };

    const removeChildForm = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            children: prev.children.filter((_, i: number) => i !== index),
        }));
    };

    const handleChange = (
        index: number,
        field: keyof ChildProfile,
        value: string,
    ) => {
        setFormData((prev) => {
            const updated = [...prev.children];

            updated[index] = {
                ...updated[index],
                [field]: value,
            };

            return {
                ...prev,
                children: updated,
            };
        });
    };

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
                    className={`group relative z-10 w-16 h-16 flex items-center justify-center ${handlee.className}`}
                >
                    <img
                        src="/images/circleCreate2.png"
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
                    tell us about your little one
                </h1>
                <p className="mb-8 text-lg">
                    Answer some questions about your child and we’ll personalise
                    your experience.
                </p>
            </div>

            {/* Multiple child forms */}
            {children.map((child, index) => (
                <div
                    key={index}
                    className="w-[60%] border-2 border-gray-200 rounded-2xl p-10 mb-8"
                >
                    {index > 0 && (
                        <h2 className="font-bold text-xl mb-4">
                            Your Little {index + 1}
                        </h2>
                    )}

                    <div className="mb-6">
                        <label className="block mb-2">
                            My little one’s name is...
                        </label>
                        <input
                            type="text"
                            value={child.name}
                            onChange={(e) =>
                                handleChange(index, "name", e.target.value)
                            }
                            className="w-full border rounded-xl px-4 py-3 bg-white"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <div>
                            <label className="block mb-2">
                                My little one’s weight is...
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={child.weight}
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "weight",
                                            e.target.value,
                                        )
                                    }
                                    className="w-full border rounded-xl px-4 py-2 pr-12 bg-white"
                                    step="0.01"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    kg
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2">
                                My little one’s height is...
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    step="0.01"
                                    placeholder="0.00"
                                    value={child.height}
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "height",
                                            e.target.value,
                                        )
                                    }
                                    className="w-full border rounded-xl px-4 py-2 pr-12 bg-white"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    cm
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="block mb-2">
                                My little one’s date of birth is...
                            </label>

                            <input
                                type="date"
                                value={child.dob}
                                onChange={(e) =>
                                    handleChange(index, "dob", e.target.value)
                                }
                                className="w-full border rounded-xl px-4 py-3 bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">
                                My little one’s gender is...
                            </label>
                            <div className="grid grid-cols-2 gap-6 bg-white w-full border rounded-xl px-4 py-3">
                                <label className="text-center">
                                    <input
                                        type="radio"
                                        name={`gender-${index}`}
                                        checked={child.gender === "girl"}
                                        onChange={() =>
                                            handleChange(
                                                index,
                                                "gender",
                                                "girl",
                                            )
                                        }
                                    />{" "}
                                    girl
                                </label>
                                <label className="text-center">
                                    <input
                                        type="radio"
                                        name={`gender-${index}`}
                                        checked={child.gender === "boy"}
                                        onChange={() =>
                                            handleChange(index, "gender", "boy")
                                        }
                                    />{" "}
                                    boy
                                </label>
                            </div>
                        </div>
                        {/* Button Remove*/}
                        {index > 0 && (
                            <div className="flex justify-end mt-6 col-start-2">
                                <button
                                    onClick={() => removeChildForm(index)}
                                    className="flex items-center gap-2 text-[#7a0000] hover:text-red-600"
                                >
                                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold">
                                        ×
                                    </span>
                                    Remove little one
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Add more */}
            <div className="w-[60%] flex justify-between items-center mt-4 mb-10">
                <p>More than one little one? No problem...</p>
                <div className="flex gap-3 items-center">
                    <label htmlFor="addButton" className="hover:text-[#C4F270]">
                        Add another little one
                    </label>
                    <button
                        id="addButton"
                        onClick={addChildForm}
                        className="w-7 h-7 bg-[#80C700] rounded-full border border-amber-50 hover:bg-[#C4F270]"
                    >
                        +
                    </button>
                </div>
            </div>
            {error && (
                <div className="w-[60%] mb-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-red-600">
                    {error}
                </div>
            )}
            {/* Button Step*/}
            <div className="w-[60%] flex justify-between mt-8 pr-10 pl-10">
                <button
                    onClick={prevStep}
                    className="bg-gray-200 px-9 py-2 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200"
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className="bg-yellow-400 px-9 py-2 rounded-xl font-bold hover:bg-yellow-300 transition-colors duration-200"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
