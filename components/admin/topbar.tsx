"use client";

import { Bell, Search, UserCircle, Menu } from "lucide-react";
import { motion } from "framer-motion";

interface TopbarProps {
    onToggle: () => void;
    collapsed: boolean;
}

export function Topbar({ onToggle, collapsed }: TopbarProps) {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="sticky top-0 z-30 w-full border-b border-[#ece7df] bg-white/90 backdrop-blur-xl"
        >
            <div className="mx-auto flex h-20 max-w-7xl w-full items-center justify-between gap-4 px-6 lg:px-10">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={onToggle}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-[#ece7df] bg-[#f8f5f1] text-[#111111] transition hover:bg-[#f1ece5] lg:hidden"
                        aria-label="Toggle sidebar"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                    <div className="hidden rounded-3xl border border-[#ece7df] bg-[#f8f5f1] px-4 py-3 shadow-sm shadow-slate-100 lg:flex lg:items-center lg:gap-3">
                        <Search className="h-4 w-4 text-[#7b7b7b]" />
                        <input
                            type="search"
                            placeholder="Search anything..."
                            className="w-72 bg-transparent text-sm text-[#171717] placeholder:text-[#7b7b7b] outline-none"
                        />
                        <span className="ml-auto rounded-2xl bg-white px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-[#7b7b7b] shadow-sm shadow-slate-100">
                            ⌘ K
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-[#ece7df] bg-[#f8f5f1] text-[#111111] transition hover:bg-[#f1ece5]"
                        aria-label="Notifications"
                    >
                        <Bell className="h-5 w-5" />
                    </button>
                    <div className="inline-flex h-12 items-center gap-3 rounded-3xl border border-[#ece7df] bg-white px-4 shadow-sm shadow-slate-100">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-[#f8f5f1] text-[#111111]">
                            <UserCircle className="h-5 w-5" />
                        </div>
                        {!collapsed && (
                            <div className="hidden min-w-0 flex-col gap-1 sm:flex">
                                <p className="text-sm font-semibold text-[#171717]">Shop Admin</p>
                                <p className="text-xs uppercase tracking-[0.35em] text-[#7b7b7b]">Admin</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
