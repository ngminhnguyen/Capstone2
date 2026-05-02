export default function ResultSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#E8CFC8] flex flex-col items-center justify-start py-10 overflow-hidden">
            {/* Background sọc */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#E8CFC8, #E8CFC8 20px, #E0BEB6 20px, #E0BEB6 40px)] opacity-50" />

            {/* Top line + Finish */}
            <div className="relative w-[80%] flex items-center justify-center mb-10">
                <div className="absolute top-1/2 left-0 w-full h-[4px] bg-cyan-700 -translate-y-1/2 rounded-full"></div>

                <span className="relative px-4 bg-[#E8CFC8] text-3xl font-bold text-red-900">
                    Finish
                </span>
            </div>

            {/* Content */}
            <div className="relative text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-semibold text-red-900 leading-snug">
                    Growth referenced according to the World Health Organization
                    (WHO)
                </h2>

                <p className="mt-6 text-red-900">
                    Your little is growing at:{" "}
                    <span className="mx-4">Normal rate</span>
                </p>

                {/* Stats */}
                <div className="mt-10 flex justify-center gap-20">
                    {/* Height */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-green-200 flex items-center justify-center">
                            📏
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-900">
                                65 cm
                            </p>
                            <p className="text-red-900">height</p>
                        </div>
                    </div>

                    {/* Weight */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-red-300 flex items-center justify-center">
                            👶
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
                    <a href="#">Go to login page</a>
                    <a href="#">Get today’s menu suggestions</a>
                </div>
            </div>
        </section>
    );
}
