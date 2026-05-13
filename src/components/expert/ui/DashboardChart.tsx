"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

type DashboardChartProps = {
    data: {
        month: string;
        recipes: number;
        articles: number;
    }[];
};

export default function DashboardChart({ data }: DashboardChartProps) {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">
                Monthly Content Activity
            </h2>

            <div className="w-full h-87.5">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="2 2" vertical={false} />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        {/* Recipes */}
                        <Bar
                            dataKey="recipes"
                            fill="#FB923C"
                            radius={[8, 8, 0, 0]}
                            name="Recipes"
                        />

                        {/* Articles */}
                        <Bar
                            dataKey="articles"
                            fill="#EC4899"
                            radius={[8, 8, 0, 0]}
                            name="Articles"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
