import { DashboardShell } from "@/components/admin/dashboard-shell";
import { StatsCard } from "@/components/admin/stats-card";
import { RevenueChart } from "@/components/admin/revenue-chart";
import { TopProducts } from "@/components/admin/top-products";
import { RecentOrders } from "@/components/admin/recent-orders";
import { OverviewChart } from "@/components/admin/overview-chart";

type StatsIcon = "BarChart3" | "ClipboardList" | "Users" | "Sparkles";

const cards: { title: string; value: string; delta: string; icon: StatsIcon }[] = [
    { title: "Total Revenue", value: "৳24,690.00", delta: "+24.5% vs last 30 days", icon: "BarChart3" },
    { title: "Orders", value: "352", delta: "+18.2% vs last 30 days", icon: "ClipboardList" },
    { title: "Customers", value: "1,245", delta: "+15.7% vs last 30 days", icon: "Users" },
    { title: "Conversion Rate", value: "3.62%", delta: "+8.4% vs last 30 days", icon: "Sparkles" }
];

export default function AdminDashboardPage() {
    return (
        <DashboardShell>
            <section className="space-y-10 pb-10">
                <div className="space-y-6 rounded-[28px] border border-[#ece7df] bg-white p-10 shadow-[0_10px_50px_rgba(15,23,42,0.08)]">
                    <div className="max-w-3xl">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#7b7b7b]">Admin dashboard</p>
                        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[#111111]">Dashboard</h1>
                        <p className="mt-4 max-w-2xl text-base leading-8 text-[#7b7b7b]">
                            Welcome back, Shop Admin! Here’s what’s happening with your store today.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <StatsCard
                            key={card.title}
                            label={card.title}
                            value={card.value}
                            delta={card.delta}
                            icon={card.icon}
                        />
                    ))}
                </div>

                <div className="grid gap-6 xl:grid-cols-[1.4fr_0.95fr]">
                    <RevenueChart />
                    <TopProducts />
                </div>

                <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
                    <RecentOrders />
                    <OverviewChart />
                </div>
            </section>
        </DashboardShell>
    );
}
