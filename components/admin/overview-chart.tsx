"use client";

import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const overviewData = [
    { name: "Clothing", value: 50.3 },
    { name: "Accessories", value: 25.1 },
    { name: "Footwear", value: 17.5 },
    { name: "Bags", value: 7.1 }
];

const colors = ["#d8c7b3", "#f1ece5", "#ece7df", "#b9a48f"];

export function OverviewChart() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="rounded-[28px] border border-[#ece7df] bg-white p-8 shadow-[0_10px_50px_rgba(15,23,42,0.08)]">
            <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#7b7b7b]">Store overview</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#171717]">Category mix</h3>
            </div>
            <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="h-[260px] w-full min-h-0 min-w-0 sm:w-[260px]">
                    {mounted ? (
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} aspect={undefined}>
                            <PieChart>
                                <Pie data={overviewData} innerRadius={70} outerRadius={100} paddingAngle={4} dataKey="value">
                                    {overviewData.map((entry, index) => (
                                        <Cell key={entry.name} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    ) : null}
                </div>
                <div className="flex flex-1 flex-col gap-4">
                    <div className="rounded-[24px] border border-[#f1ece5] bg-[#f8f5f1] p-6">
                        <p className="text-sm uppercase tracking-[0.35em] text-[#7b7b7b]">Total Sales</p>
                        <p className="mt-3 text-3xl font-semibold text-[#171717]">৳24,690</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {overviewData.map((item, index) => (
                            <div key={item.name} className="rounded-[24px] border border-[#f1ece5] bg-[#f8f5f1] p-4">
                                <p className="text-sm uppercase tracking-[0.35em] text-[#7b7b7b]">{item.name}</p>
                                <p className="mt-3 text-lg font-semibold text-[#171717]">{item.value}%</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
