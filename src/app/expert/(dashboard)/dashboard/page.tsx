import { expertChartData } from "@/data/expert-chart";
import DashboardChart from "@/components/expert/ui/DashboardChart";
import ExpertOverviewCharts from "@/components/expert/ui/ExpertOverviewCharts";

export default function ExpertDashboardPage() {
    return (
        <div>
            {/* Hero Section */}
            <div className="rounded-4xl bg-linear-to-r from-pink-400 to-pink-800 p-8 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className=" text-white">
                    <h1 className="text-2xl font-bold mb-2">
                        Welcome back, Nutrition Expert
                    </h1>

                    <p className="text-sm text-violet-100 leading-2">
                        Help parents build healthy eating habits for their
                        babies with personalized nutrition guidance, balanced
                        meal plans, and expert feeding support for every stage
                        of growth.
                    </p>

                    {/* Info Card */}
                    <div className="mt-8 bg-white/10 backdrop-blur-md rounded-3xl px-6 py-5 flex items-center gap-5 w-full max-w-2xl">
                        <div className="text-2xl font-bold">95%</div>

                        <div>
                            <h3 className="text-xl font-semibold">
                                Parent Satisfaction
                            </h3>

                            <p className="text-violet-100 text-lg">
                                Trusted baby nutrition support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chart Section */}
            <div className="mt-10 px-4">
                <DashboardChart data={expertChartData} />
            </div>
            {/* ExpertOverviewCharts */}
            <div className="mt-10 px-4">
                <ExpertOverviewCharts />
            </div>
        </div>
    );
}
