"use client";

import { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const chartData = [
    { date: "May 17", revenue: 11200 },
    { date: "May 20", revenue: 15300 },
    { date: "May 24", revenue: 13200 },
    { date: "May 28", revenue: 16200 },
    { date: "Jun 1", revenue: 14700 },
    { date: "Jun 7", revenue: 18300 },
    { date: "Jun 16", revenue: 21600 }
];

function CustomTooltip({ active, payload }: any) {
    if (!active || !payload?.length) return null;

    return (
        <div className="rounded-3xl border border-[#ece7df] bg-white p-4 text-sm shadow-lg shadow-slate-200">
            <p className="font-semibold text-[#171717]">{payload[0].payload.date}</p>
            <p className="mt-1 text-[#7b7b7b]">Revenue</p>
            <p className="mt-2 text-lg font-semibold text-[#171717]">৳{payload[0].value.toLocaleString()}</p>
        </div>
    );
}

export function RevenueChart() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="rounded-[28px] border border-[#ece7df] bg-white p-8 shadow-[0_10px_50px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#7b7b7b]">Revenue Overview</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#171717]">Daily revenue</h2>
                </div>
                <div className="inline-flex items-center gap-3 rounded-3xl border border-[#ece7df] bg-[#f8f5f1] px-4 py-3 text-sm text-[#171717]">
                    <span className="text-[#7b7b7b]">Time frame</span>
                    <select className="bg-transparent outline-none">
                        <option>May 17 - Jun 16</option>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                    </select>
                </div>
            </div>
            <div className="mt-8 h-[420px] min-h-0 min-w-0">
                {mounted ? (
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} aspect={undefined}>
                        <LineChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <CartesianGrid stroke="#ece7df" vertical={false} strokeDasharray="3 3" />
                            <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: "#7b7b7b", fontSize: 12 }} />
                            <YAxis tickLine={false} axisLine={false} tick={{ fill: "#7b7b7b", fontSize: 12 }} />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#d8c7b3", strokeWidth: 2, opacity: 0.2 }} />
                            <Line type="monotone" dataKey="revenue" stroke="#d8c7b3" strokeWidth={4} dot={{ r: 4, fill: "#111111" }} activeDot={{ r: 6, fill: "#111111" }} />
                        </LineChart>
                    </ResponsiveContainer>
                ) : null}
            </div>
        </section>
    );
}
