"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CustomDropdownProps = {
    label: string;
    options: string[];
    placeholder: string;

    selectedValues: string;
    setSelectedValues: React.Dispatch<React.SetStateAction<string>>;
};

export default function CustomDropdown({
    label,
    options,
    placeholder,
    selectedValues,
    setSelectedValues,
}: CustomDropdownProps) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full">
            {/* Label */}
            <label className="block text-gray-500 mb-2">{label}</label>

            {/* Button */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full bg-[#f7f5f2] rounded-xl px-4 py-3 flex items-center justify-between"
            >
                <span>{selectedValues || placeholder}</span>

                <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 max-h-52 overflow-y-scroll dropdown-scroll z-50">
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => {
                                setSelectedValues(option);
                                setOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
