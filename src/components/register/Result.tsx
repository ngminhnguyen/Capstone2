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
        <div className="sm:w-[80%] mx-auto bg-[#fdece4] text-[#5a0000] flex flex-col items-center py-5">
            {/* Progress */}
            <div className="relative w-[60%] h-20 flex items-center justify-between mb-10 pl-20 pr-20">
                <div className="absolute top-1/2 left-0 w-full h-2 bg-cyan-700 -translate-y-1/2 rounded-full"></div>

                <div
                    className={`relative z-20 w-16 h-16 flex items-center justify-center ${handlee.className}`}
                >
                    <span className="absolute text-3xl font-bold z-10">
                        Finish
                    </span>
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
