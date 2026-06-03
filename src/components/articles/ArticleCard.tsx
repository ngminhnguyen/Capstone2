type ArticleCardProps = {
    item: {
        id: number;
        title: string;
        mainTitle: string;
        desc: string;
        months: string;
        image: string;
        colorMonths: string;
    };
};

export default function ArticleCard({ item }: ArticleCardProps) {
    return (
        <div
            className="
                relative 
                bg-[#F8F4F1] 
                rounded-[30px] 
                shadow-md
                hover:-translate-y-2
                hover:rotate-2
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]
                transition-all duration-300
            "
        >
            {/* TOP LABEL */}
            <div
                className="
                    absolute 
                    -top-5 
                    right-6 
                    rotate-3 
                    bg-[#8ED4FF] 
                    border-2 
                    border-[#5A0E0E] 
                    px-8 
                    py-2 
                    rounded-lg 
                    z-10
                "
            >
                <span className="text-[#5A0E0E] font-semibold">
                    {item.title}
                </span>
            </div>

            {/* IMAGE */}
            <div className="p-4">
                <div className="relative w-full h-70 rounded-2xl overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.mainTitle}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* CONTENT */}
            <div className="px-6 pb-8">
                <h3 className="text-lg font-bold text-[#5A0E0E] mb-4">
                    {item.mainTitle}
                </h3>

                <p className="text-[#5A0E0E] leading-9 mb-10">{item.desc}</p>

                {/* FOOTER */}
                <div className="flex items-center justify-between">
                    <button
                        className="
                            text-[#5A0E0E]
                            font-bold
                            text-xl
                            hover:underline
                        "
                    >
                        Read more &gt;
                    </button>

                    <div
                        className={`
                            w-17 h-17
                            rounded-full
                            border-2 border-amber-900
                            flex items-center justify-center
                            text-white text-xl font-bold
                            text-center leading-5
                            shadow-md
                            ${item.colorMonths}
                        `}
                    >
                        <p className="text-sm -rotate-20">{item.months}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
