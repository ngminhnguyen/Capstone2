"use client";

import { SetStateAction, useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { initialRecipeSteps } from "@/data/recipeSteps";
import { RecipeStep } from "@/typeData/recipe";
import { initialIngredients } from "@/data/ingredients";
import { Ingredient } from "@/typeData/ingredient";
import CustomDropdown from "@/components/expert/custom-dropdown";

export default function CreateRecipePage() {
    const [preview, setPreview] = useState<string | null>(null);
    const [stepImages, setStepImages] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };

    const [steps, setSteps] = useState<RecipeStep[]>(initialRecipeSteps);
    const [ingredientSteps, setIngredientSteps] =
        useState<Ingredient[]>(initialIngredients);
    const [openStepMenu, setOpenStepMenu] = useState<number | null>(null);

    const [openIngredientMenu, setOpenIngredientMenu] = useState<number | null>(
        null,
    );

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

    const handleDeleteStep = (id: number) => {
        setSteps(steps.filter((step) => step.id !== id));
    };
    const handleAddStepBelow = (index: number) => {
        const newStep: RecipeStep = {
            id: Date.now(),
            text: "",
            image: "",
        };

        const updatedSteps = [...steps];

        updatedSteps.splice(index + 1, 0, newStep);

        setSteps(updatedSteps);
    };

    const handleAddIngredient = () => {
        const newIngredient: Ingredient = {
            id: ingredientSteps.length + 1,
            text: "",
        };
        setIngredientSteps([...ingredientSteps, newIngredient]);
    };
    const handleAddIngredientBelow = (index: number) => {
        const newIngredient: Ingredient = {
            id: Date.now(),
            text: "",
        };
        const updatedIngredients = [...ingredientSteps];
        updatedIngredients.splice(index + 1, 0, newIngredient);
        setIngredientSteps(updatedIngredients);
    };
    const handleDeleteIngredient = (id: number) => {
        setIngredientSteps(
            ingredientSteps.filter((ingredient) => ingredient.id !== id),
        );
    };

    // dropDownMenu
    // const [openAge, setOpenAge] = useState(false);
    // const [selectedAge, setSelectedAge] = useState("Select baby age");
    const [babyAge, setBabyAge] = useState("");
    const [weaningMethod, setWeaningMethod] = useState("");
    const [dietaryNeeds, setDietaryNeeds] = useState("");
    const [recipeType, setRecipeType] = useState("");
    const [occasion, setOccasion] = useState("");

    return (
        <div className="p-8 ">
            {/* Top Buttons */}
            <div className="flex justify-end gap-4 mb-6">
                <button className="border border-red-500 text-red-500 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition">
                    Delete
                </button>

                <button className="border border-gray-300 text-amber-950 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                    Save & Close
                </button>

                <button className="bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-500 transition">
                    Publish
                </button>
            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Upload Section */}
                <div className="col-span-4">
                    <label
                        htmlFor="upload-image"
                        className="bg-[#f7f5f2] rounded-2xl p-8 flex flex-col items-center justify-center min-h-125 cursor-pointer hover:bg-[#f1efec] transition overflow-hidden"
                    >
                        {preview ? (
                            <div className="relative w-full h-125">
                                <Image
                                    src={preview}
                                    alt="Preview"
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                        ) : (
                            <>
                                <Camera className="mb-6 w-18 h-18 text-amber-950" />

                                <h2 className="text-2xl font-bold text-amber-950 text-center mb-4">
                                    Have you uploaded your dish photo yet?
                                </h2>

                                <p className="text-amber-950 text-center leading-relaxed">
                                    Share your homemade ingredients and cooking
                                    creations with everyone!
                                </p>
                            </>
                        )}

                        <input
                            id="upload-image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>

                {/* Content Section */}
                <div className="col-span-8 flex flex-col gap-6">
                    {/* Recipe Title */}
                    <div className="bg-[#f7f5f2] rounded-xl px-5 py-4">
                        <input
                            type="text"
                            placeholder="Recipe Name: My Best Pumpkin Soup"
                            className="w-full bg-transparent outline-none text-2xl font-bold text-amber-950 placeholder:text-amber-950/50"
                        />
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4">
                        <img
                            src="/images/avatar.png"
                            alt="User Avatar"
                            className="w-14 h-14 rounded-full object-cover"
                        />

                        <div>
                            <h3 className="font-bold text-2xl text-amber-950">
                                Minh Nguyễn Nguyễn
                            </h3>

                            <p className="text-amber-950">@cook_116083150</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-[#f7f5f2] rounded-xl p-5">
                        <textarea
                            placeholder="Share your story about this dish — who inspired you, why it’s special, and how you enjoy it. Use @ to mention someone."
                            className="w-full min-h-37.5 bg-transparent outline-none resize-none text-lg text-amber-950 placeholder:text-amber-950/50"
                        />
                    </div>
                </div>
            </div>
            {/* Filter */}
            <div className="flex gap-4 mb-6 mt-6">
                <CustomDropdown
                    label="Baby Age"
                    placeholder="Select baby age"
                    options={[
                        "5 month",
                        "6 month",
                        "7 month",
                        "8 month",
                        "9 month",
                        "10 month",
                        "11 month",
                        "12 month",
                        "13 month",
                        "14 month",
                        "15 month",
                        "16 month",
                        "17 month",
                        "18 month",
                    ]}
                    selectedValues={babyAge}
                    setSelectedValues={setBabyAge}
                />

                <CustomDropdown
                    label="Weaning method"
                    placeholder="Select weaning method"
                    options={[
                        "Baby-led Weaning",
                        "Traditional Weaning",
                        "Japanese Weaning",
                    ]}
                    selectedValues={weaningMethod}
                    setSelectedValues={setWeaningMethod}
                />

                <CustomDropdown
                    label="Dietary needs"
                    placeholder="Select dietary needs"
                    options={[
                        "Vegetarian",
                        "Soy-Free",
                        "Nut-Free",
                        "Gluten-Free",
                        "Dairy-Free",
                        "Egg-Free",
                    ]}
                    selectedValues={dietaryNeeds}
                    setSelectedValues={setDietaryNeeds}
                />

                <CustomDropdown
                    label="Recipe Type"
                    placeholder="Select recipe type"
                    options={[
                        "First taste",
                        "Veg purees",
                        "Finger foods",
                        "Dips",
                    ]}
                    selectedValues={recipeType}
                    setSelectedValues={setRecipeType}
                />

                <CustomDropdown
                    label="Occasion"
                    placeholder="Select occasion"
                    options={[
                        "Breakfast",
                        "Lunch",
                        "Dinner",
                        "Snack",
                        "Pudding",
                    ]}
                    selectedValues={occasion}
                    setSelectedValues={setOccasion}
                />
            </div>
            <div className="grid grid-cols-12 gap-10 mt-10">
                {/* Ingredients Section */}
                <div className="col-span-4">
                    <h2 className="text-4xl font-bold mb-8 text-amber-950">
                        Ingredients
                    </h2>

                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex items-center gap-6">
                            <label className="block text-gray-500 mb-2">
                                Servings
                            </label>

                            <input
                                type="text"
                                placeholder="2 people"
                                className="w-full bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                            />
                        </div>

                        {/* <div className="flex">
                            <label className="block text-gray-500 mb-2">
                                Cooking Time
                            </label>

                            <input
                                type="text"
                                placeholder="1 hour 30 minutes"
                                className="w-full bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                            />
                        </div> */}
                    </div>

                    {/* Ingredient Items */}
                    {ingredientSteps.map((ingredient, index) => (
                        <div key={ingredient.id} className="mb-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-400 text-xl">
                                        ☰
                                    </span>

                                    <input
                                        type="text"
                                        value={ingredient.text}
                                        onChange={(e) =>
                                            setIngredientSteps(
                                                ingredientSteps.map((item) =>
                                                    item.id === ingredient.id
                                                        ? {
                                                              ...item,
                                                              text: e.target
                                                                  .value,
                                                          }
                                                        : item,
                                                ),
                                            )
                                        }
                                        placeholder="250g flour"
                                        className="flex-1 bg-[#f7f5f2] rounded-xl px-4 py-3 outline-none"
                                    />

                                    <div className="relative">
                                        <button
                                            onClick={() =>
                                                setOpenIngredientMenu(
                                                    openIngredientMenu ===
                                                        ingredient.id
                                                        ? null
                                                        : ingredient.id,
                                                )
                                            }
                                            className="text-gray-400 text-2xl"
                                        >
                                            ⋯
                                        </button>

                                        {openIngredientMenu ===
                                            ingredient.id && (
                                            <div className="absolute right-0 top-10 w-52 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                                                <button
                                                    onClick={() => {
                                                        handleAddIngredientBelow(
                                                            index,
                                                        );
                                                        setOpenIngredientMenu(
                                                            null,
                                                        );
                                                    }}
                                                    className="w-full text-left px-5 py-4 hover:bg-gray-100 transition"
                                                >
                                                    Add Ingredient
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        handleDeleteIngredient(
                                                            ingredient.id,
                                                        );
                                                        setOpenIngredientMenu(
                                                            null,
                                                        );
                                                    }}
                                                    className="w-full text-left px-5 py-4 hover:bg-gray-100 transition text-red-500"
                                                >
                                                    Delete Ingredient
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add Buttons */}
                    <button
                        onClick={handleAddIngredient}
                        className="font-semibold text-amber-950 hover:text-orange-500 transition"
                    >
                        + Ingredient
                    </button>
                </div>

                {/* Steps Section */}

                <div className="col-span-8">
                    <h2 className="text-4xl font-bold mb-8 text-amber-950">
                        Steps
                    </h2>

                    {/* Cooking Time */}
                    <div className="flex items-center mb-6 gap-6">
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

                                        <div className="relative">
                                            <button
                                                onClick={() =>
                                                    setOpenStepMenu(
                                                        openStepMenu === step.id
                                                            ? null
                                                            : step.id,
                                                    )
                                                }
                                                className="text-gray-400 text-2xl"
                                            >
                                                ⋯
                                            </button>

                                            {openStepMenu === step.id && (
                                                <div className="absolute right-0 top-10 w-52 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                                                    <button
                                                        onClick={() => {
                                                            handleAddStepBelow(
                                                                index,
                                                            );
                                                            setOpenStepMenu(
                                                                null,
                                                            );
                                                            setOpenStepMenu(
                                                                null,
                                                            );
                                                        }}
                                                        className="w-full text-left px-5 py-4 hover:bg-gray-100 transition"
                                                    >
                                                        Add Step
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            handleDeleteStep(
                                                                step.id,
                                                            );
                                                            setOpenStepMenu(
                                                                null,
                                                            );
                                                        }}
                                                        className="w-full text-left px-5 py-4 hover:bg-gray-100 transition text-red-500"
                                                    >
                                                        Delete This Step
                                                    </button>
                                                </div>
                                            )}
                                        </div>
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
        </div>
    );
}
