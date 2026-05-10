"use client";
import { useState } from "react";
import { initialRecipeSteps } from "@/data/recipeSteps";
import { RecipeStep } from "@/typeData/recipe";

export default function Check() {
    const [steps, setSteps] = useState<RecipeStep[]>(initialRecipeSteps);
    const handleStepImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
    ) => {
        const file = e.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);

            setSteps(
                steps.map((step, i) =>
                    i === index
                        ? {
                              ...step,
                              image: imageUrl,
                          }
                        : step,
                ),
            );
        }
    };
    const handleAddStep = () => {
        const newStep: RecipeStep = {
            id: steps.length + 1,
            text: "",
            image: "",
        };

        setSteps([...steps, newStep]);
    };
    return (
        <div>
            {/* Steps Section */}
            <div className="col-span-8">
                <h2 className="text-4xl font-bold mb-8 text-amber-950">
                    Steps
                </h2>

                {/* Cooking Time */}
                <div className="mb-6">
                    <label className="block text-gray-500 mb-2">
                        Cooking Time
                    </label>

                    <input
                        type="text"
                        placeholder="1 hour 30 minutes"
                        className="bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                    />
                </div>

                {steps.map((step, index) => (
                    <div key={step.id} className="mb-10">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-amber-950 text-white flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>

                                <span className="text-gray-400 text-xl">
                                    ☰
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        value={step.text}
                                        onChange={(e) =>
                                            setSteps(
                                                steps.map((s) =>
                                                    s.id === step.id
                                                        ? {
                                                              ...s,
                                                              text: e.target
                                                                  .value,
                                                          }
                                                        : s,
                                                ),
                                            )
                                        }
                                        placeholder="Write your cooking step..."
                                        className="flex-1 bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                                    />

                                    <button className="text-gray-400 text-2xl">
                                        ⋯
                                    </button>
                                </div>

                                {/* Upload Image */}
                                <label
                                    htmlFor={`step-image-${step.id}`}
                                    className="mt-4 w-40 h-40 bg-[#f7f5f2] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[#f1efec] transition overflow-hidden"
                                >
                                    {step.image ? (
                                        <img
                                            src={step.image}
                                            alt="Preview"
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    ) : (
                                        <img
                                            src="/images/camera.png"
                                            alt="Upload Image"
                                            className="w-20 h-20"
                                        />
                                    )}

                                    <input
                                        id={`step-image-${step.id}`}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) =>
                                            handleStepImageChange(e, index)
                                        }
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add Step */}
                <button
                    onClick={handleAddStep}
                    className="font-semibold text-amber-950 hover:text-orange-500 transition mb-8"
                >
                    + Add Step
                </button>

                {/* Secret Tip */}
                <textarea
                    placeholder="What is your secret tip to make this dish delicious?"
                    className="w-full min-h-30 bg-[#f7f5f2] rounded-2xl px-5 py-4 outline-none resize-none"
                />
            </div>
        </div>
    );
}
