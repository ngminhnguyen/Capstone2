type Props = {
    nextStep?: () => void;
    prevStep?: () => void;
};
import { Handlee } from "next/font/google";
import { useState } from "react";
const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});
const allergiesData = [
    {
        id: 1,
        name: "Seafood allergy",
        foods: ["Shrimp", "crab", "sea", "fish"],
        symptoms: [
            "Itching, rash",
            "Vomiting after eating",
            "Less common in children under 1 year old, but can still occur.",
        ],
    },
    {
        id: 2,
        name: "Milk allergy",
        foods: ["Cow milk", "cheese"],
        symptoms: ["Diarrhea", "Skin rash", "Abdominal pain"],
    },
    {
        id: 3,
        name: "Egg allergy",
        foods: ["Egg white", "Egg yolk"],
        symptoms: ["Hives", "Runny nose", "Vomiting"],
    },
];
export default function Step2({ nextStep, prevStep }: Props) {
    const [selectedId, setSelectedId] = useState<number | null>(null);
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
                        src="/images/circleCreate1.png"
                        alt="Step 1"
                        className="absolute inset-0 w-full h-full transition-opacity duration-300"
                    />
                    <span className="absolute -rotate-20 font-bold z-10">
                        Step 2
                    </span>
                </div>
            </div>
            {/* Heading */}
            <div className="w-[60%]">
                <h1 className="text-4xl font-bold mb-4">
                    does your baby have any allergies?
                </h1>
                <p className="mb-8 text-lg">
                    A suitable diet for children with allergies is very
                    important.
                </p>
            </div>
            {/* Allergies Choice */}
            <div className="w-[60%] ml-10">
                <div className="flex flex-col gap-4">
                    {allergiesData.map((item) => (
                        <div key={item.id} className="flex gap-2 items-start">
                            {/* CIRCLE BUTTON */}
                            <button
                                onClick={() =>
                                    setSelectedId(
                                        selectedId === item.id ? null : item.id,
                                    )
                                }
                                className={`mt-1 w-5 h-5 rounded-full border border-amber-950 hover:bg-amber-300 flex items-center justify-center transition ${selectedId === item.id ? "bg-amber-300" : "bg-white"}`}
                            >
                                {/* inner dot when active */}
                                {selectedId === item.id && (
                                    <div className="w-2.5 h-2.5 bg-amber-950 rounded-full"></div>
                                )}
                            </button>

                            {/* TEXT */}
                            <div>
                                <p>
                                    {item.name}({item.foods.join(", ")})
                                </p>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        selectedId === item.id
                                            ? "max-h-40 mt-2"
                                            : "max-h-0"
                                    }`}
                                >
                                    <p>Symptoms:</p>
                                    <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                                        {item.symptoms.map((symptom, index) => (
                                            <li key={index}>{symptom}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Button Step*/}
            <div className="w-[60%] flex justify-between gap-2 mt-8 pl-10 pr-10">
                <button
                    onClick={prevStep}
                    className="bg-gray-200 px-9 py-2 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200"
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
        </div>
    );
}
