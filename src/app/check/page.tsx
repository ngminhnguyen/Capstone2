export default function Check() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filter */}
            <div className="flex flex-col items-center gap-3">
                <span className="font-medium text-[#4E0706]">Filter by:</span>

                <div className="flex items-center gap-3 flex-wrap">
                    <select className="px-4 py-2 rounded-xl border border-[#4E0706] bg-[#fff3ed] text-[#4E0706]">
                        <option>Age (s)</option>
                    </select>

                    <select className="px-4 py-2 rounded-xl border border-[#4E0706] bg-[#fff3ed] text-[#4E0706]">
                        <option>Dietary needs (s)</option>
                    </select>

                    <select className="px-4 py-2 rounded-xl border border-[#4E0706] bg-[#fff3ed] text-[#4E0706]">
                        <option>Mealtime (s)</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
