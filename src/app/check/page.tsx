export default function Check() {
    return (
        <div className="w-full bg-[#f5ebe6] px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* LEFT - FILTER */}
            <div className="flex items-center gap-3 flex-wrap">
                <span className="font-medium text-[#4E0706]">Filter by:</span>

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

            {/* RIGHT - ORDER */}
            <div className="flex items-center gap-3">
                <span className="font-medium text-[#4E0706]">Order by:</span>

                <select className="px-4 py-2 rounded-xl border border-[#4E0706] bg-[#fff3ed] text-[#4E0706]">
                    <option>What's new</option>
                </select>
            </div>
        </div>
    );
}
