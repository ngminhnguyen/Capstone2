import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function CustomDropdown({
    label,
    options,
    selectedValues,
    setSelectedValues,
    className = "",
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // ✅ FIX CHUẨN: dùng click + capture phase
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!ref.current) return;
            if (!ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside, true); // 👈 capture

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    const handleToggle = (item) => {
        if (selectedValues.includes(item)) {
            setSelectedValues(selectedValues.filter((i) => i !== item));
        } else {
            setSelectedValues([...selectedValues, item]);
        }
    };

    return (
        <div ref={ref} className="relative w-50">
            {/* BUTTON */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-full flex justify-between items-center px-4 py-2 rounded-xl border border-[#4E0706] bg-white text-[#4E0706] leading-none"
            >
                <span className="flex-1 text-left truncate">
                    {selectedValues.length > 0
                        ? selectedValues.join(", ")
                        : label}
                </span>
                <div
                    className="
                        w-7 h-7
                        rounded
                        bg-[#F4B233]
                        flex items-center justify-center"
                >
                    {open ? (
                        <ChevronUp className="w-5 h-5" />
                    ) : (
                        <ChevronDown className="w-5 h-5" />
                    )}
                </div>
            </button>

            {/* DROPDOWN */}
            {open && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[#4E0706] rounded-xl shadow-lg z-50 max-h-50 overflow-y-auto p-2 flex flex-col gap-2">
                    <div
                        className="max-h-65
                            overflow-y-auto
                            pr-2
                            space-y-3"
                    >
                        {options.map((item, index) => {
                            const checked = selectedValues.includes(item);

                            return (
                                <div
                                    key={index}
                                    onClick={() => handleToggle(item)}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer border
                ${checked ? "bg-[#f5ebe6]" : ""}
              `}
                                >
                                    <div
                                        className={`w-4 h-4 border border-[#4E0706] rounded flex items-center justify-center
                  ${checked ? "bg-orange-300" : ""}
                `}
                                    >
                                        {checked && "✓"}
                                    </div>

                                    <span>{item}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

///////////////////////////////
