type Props = {
    nextStep?: () => void;
};
import { Handlee } from "next/font/google";
const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});
export default function Step2({ nextStep }: Props) {
    return (
        <div className="min-h-screen sm:w-[80%] mx-auto bg-[#fdece4] text-[#5a0000] flex flex-col items-center py-5">
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
        </div>
    );
}
