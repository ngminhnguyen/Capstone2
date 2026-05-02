import { Handlee } from "next/font/google";
const handlee = Handlee({
    subsets: ["latin"],
    weight: ["400"],
});
import { Baloo_2 } from "next/font/google";
const baloo = Baloo_2({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});
type Props = {
    prevStep?: () => void;
};
export default function Result({ prevStep }: Props) {
    return (
        <div className="sm:w-[80%] mx-auto bg-[#fdece4] text-amber-900 flex flex-col items-center py-5">
            {/* Progress */}

            <section
                className={`relative w-full flex flex-col items-center justify-start py-10 overflow-hidden ${baloo.className}`}
            >
                {/* Background sọc */}
                <div className="absolute  inset-0 bg-[repeating-linear-gradient(90deg,#E8CFC8, #E8CFC8 20px, #E0BEB6 20px, #E0BEB6 40px)] opacity-50" />

                {/* Top line + Finish */}
                <div className="relative  w-[80%] flex items-center justify-center mb-10">
                    <div className="absolute  top-1/2 left-0 w-full h-1 bg-cyan-700 -translate-y-1/2 rounded-full"></div>

                    <span
                        className={`relative px-2 bg-[#fdece4] text-4xl font-bold [text-shadow:0_0_1px_#000] ${handlee.className}`}
                    >
                        Finish
                    </span>
                </div>

                {/* Content */}
                <div className="relative text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
                        Growth referenced according to the World Health
                        Organization (WHO)
                    </h2>

                    <p className="mt-6 ">
                        Your little is growing at:{" "}
                        <span className="mx-4">Normal rate</span>
                    </p>

                    {/* Stats */}
                    <div className="mt-10 flex justify-center gap-20">
                        {/* Height */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-green-200 flex items-center justify-center">
                                <img
                                    src="images/height.png"
                                    alt="Height"
                                    className="h-10 w-10"
                                />
                            </div>
                            <div>
                                <p className="text-3xl font-bold ">65 cm</p>
                                <p className="">height</p>
                            </div>
                        </div>

                        {/* Weight */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-red-300 flex items-center justify-center">
                                <img
                                    src="images/weight.png"
                                    alt="Weight"
                                    className="h-10 w-10"
                                />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-red-900">
                                    7 kg
                                </p>
                                <p className="text-red-900">weight</p>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-10 flex justify-center gap-20 text-red-900 underline">
                        <a href="/login">Go to login page</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
