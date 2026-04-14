"use client";

import { useState } from "react";
import { Handlee } from "next/font/google";

type Props = {
    nextStep?: () => void;
    prevStep?: () => void;
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

export default function Step1({ nextStep, prevStep }: Props) {
    const [children, setChildren] = useState<ChildProfile[]>([
        {
            name: "",
            weight: "",
            height: "",
            dob: "",
            gender: "",
        },
    ]);

    const addChildForm = () => {
        setChildren([
            ...children,
            {
                name: "",
                weight: "",
                height: "",
                dob: "",
                gender: "",
            },
        ]);
    };

    const removeChildForm = (index: number) => {
        const updated = children.filter((_, i) => i !== index);
        setChildren(updated);
    };

    const handleChange = (
        index: number,
        field: keyof ChildProfile,
        value: string,
    ) => {
        const updated = [...children];
        updated[index][field] = value;
        setChildren(updated);
    };

    return (
        <div className="min-h-screen sm:w-[80%] mx-auto bg-[#fdece4] text-[#5a0000] flex flex-col items-center py-5">
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
                        className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                        src="/images/circleCreate1.png"
                        alt="Step 2 Hover"
                        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
                            <input
                                type="text"
                                value={child.weight}
                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "weight",
                                        e.target.value,
                                    )
                                }
                                className="w-full border rounded-xl px-4 py-3 bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">
                                My little one’s height is...
                            </label>
                            <input
                                type="text"
                                value={child.height}
                                onChange={(e) =>
                                    handleChange(
                                        index,
                                        "height",
                                        e.target.value,
                                    )
                                }
                                className="w-full border rounded-xl px-4 py-3 bg-white"
                            />
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
                                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
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
            <button
                onClick={prevStep}
                className="px-8 py-3 rounded-xl bg-gray-300 font-bold"
            >
                Back
            </button>
            <button
                onClick={nextStep}
                className="bg-yellow-400 px-9 py-2 rounded-xl font-bold hover:bg-yellow-300 transition-colors duration-200"
            >
                Next
            </button>
        </div>
    );
}
