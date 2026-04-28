import { Handlee } from "next/font/google";
const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});
type Props = {
    prevStep?: () => void;
};
export default function Result({ prevStep }: Props) {
    return (
        <div className="sm:w-[80%] mx-auto bg-[#fdece4] text-amber-950 flex flex-col items-center py-5">
            {/* Progress */}
            <div className="w-[60%] h-20 flex items-center justify-center mb-10 pl-20 pr-20 mx-auto">
                <div className="flex flex-col items-center">
                    <div
                        className={`flex z-10 w-16 h-16 items-center justify-center text-center ${handlee.className}`}
                    >
                        <span className="text-3xl font-bold">
                            Finish
                            {/* Wave */}
                            <svg
                                className=""
                                width="120"
                                height="20"
                                viewBox="0 0 120 20"
                                fill="none"
                            >
                                <path
                                    d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10 T100 10 T120 10"
                                    stroke="#78350f"
                                    strokeWidth="4"
                                    fill="transparent"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            {/* Button Step*/}
            <div className="w-[60%] flex justify-between mt-8 pr-10 pl-10">
                <button
                    onClick={prevStep}
                    className="bg-gray-200 px-9 py-2 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200"
                >
                    Back
                </button>
            </div>
        </div>
    );
}
