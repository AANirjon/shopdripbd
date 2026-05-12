"use client";

import * as React from "react";
import { BarChart3, ClipboardList, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
    BarChart3,
    ClipboardList,
    Users,
    Sparkles
};

interface StatsCardProps {
    label: string;
    value: string;
    delta: string;
    icon: keyof typeof iconMap;
}

export function StatsCard({ label, value, delta, icon }: StatsCardProps) {
    const Icon = iconMap[icon];

    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="group rounded-[28px] border border-[#ece7df] bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
        >
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#7b7b7b]">{label}</p>
                    <p className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#171717]">{value}</p>
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#d8c7b3]/15 text-[#111111] shadow-sm shadow-slate-200">
                    <Icon className="h-6 w-6" />
                </div>
            </div>
            <p className="mt-6 text-sm font-medium text-[#1f9d55]">{delta}</p>
        </motion.article>
    );
}
