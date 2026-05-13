"use client";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const recipeData = [
    {
        name: "Recipes",
        value: 72,
        fill: "#FB923C",
    },
];

const articleData = [
    {
        name: "Articles",
        value: 48,
        fill: "#EC4899",
    },
];

export default function ExpertOverviewCharts() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recipe Chart */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">
                    Recipes Created This Year
                </h2>

                <div className="w-full h-80 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            innerRadius="75%"
                            outerRadius="100%"
                            data={recipeData}
                            startAngle={90}
                            endAngle={-270}
                        >
                            <RadialBar dataKey="value" cornerRadius={30} />
                        </RadialBarChart>
                    </ResponsiveContainer>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h3 className="text-5xl font-bold text-orange-400">
                            72
                        </h3>

                        <p className="text-gray-500 mt-2">Total Recipes</p>
                    </div>
                </div>
            </div>

            {/* Article Chart */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">
                    Articles Published This Year
                </h2>

                <div className="w-full h-[320px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                            innerRadius="75%"
                            outerRadius="100%"
                            data={articleData}
                            startAngle={90}
                            endAngle={-270}
                        >
                            <RadialBar dataKey="value" cornerRadius={30} />
                        </RadialBarChart>
                    </ResponsiveContainer>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h3 className="text-5xl font-bold text-pink-500">48</h3>

                        <p className="text-gray-500 mt-2">Total Articles</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
