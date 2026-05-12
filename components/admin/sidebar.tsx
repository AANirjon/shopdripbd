"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    BarChart3,
    ShoppingBag,
    Box,
    ClipboardList,
    LayoutGrid,
    PackagePlus,
    Settings,
    Sparkles,
    Tag,
    User,
    Users,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutGrid },
    { label: "Analytics", href: "/admin", icon: BarChart3 },
    { label: "Orders", href: "/admin", icon: ClipboardList, badge: "24" },
    { label: "Products", href: "/admin/products", icon: Box },
    { label: "Collections", href: "/admin", icon: ShoppingBag },
    { label: "Customers", href: "/admin", icon: Users },
    { label: "Inventory", href: "/admin", icon: PackagePlus },
    { label: "Discounts", href: "/admin", icon: Tag },
    { label: "Reviews", href: "/admin", icon: Sparkles },
    { label: "Marketing", href: "/admin", icon: BarChart3 },
    { label: "Blog Posts", href: "/admin", icon: LayoutGrid },
    { label: "Pages", href: "/admin", icon: LayoutGrid },
    { label: "Appearance", href: "/admin", icon: Sparkles },
    { label: "Settings", href: "/admin", icon: Settings }
];

interface SidebarProps {
    collapsed: boolean;
    onToggle: () => void;
    mobileOpen: boolean;
    onCloseMobile: () => void;
}

export function Sidebar({ collapsed, onToggle, mobileOpen, onCloseMobile }: SidebarProps) {
    return (
        <>
            <motion.aside
                initial={false}
                animate={{ width: collapsed ? 84 : 260 }}
                className={`fixed top-0 left-0 h-screen z-40 overflow-y-auto border-r border-[#ece7df] bg-[#f8f5f1] px-3 py-6 transition-all duration-300 ease-in-out ${collapsed ? "w-[84px]" : "w-[260px]"} ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <div className="flex h-full flex-col justify-between">
                    <div className="space-y-8">
                        <div className="flex items-center justify-between gap-3 px-1">
                            {!collapsed ? (
                                <>
                                    <div className="flex min-h-[56px] items-center justify-center rounded-3xl bg-white px-3 text-center shadow-sm shadow-slate-200">
                                        <span className="block text-lg font-serif uppercase tracking-[0.45em] text-[#111111]">
                                            SHOPDRIP
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={onToggle}
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ece7df] bg-white text-[#111111] transition hover:bg-[#f1ece5]"
                                        aria-label="Collapse sidebar"
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>
                                </>
                            ) : (
                                <button
                                    type="button"
                                    onClick={onToggle}
                                    className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ece7df] bg-white text-[#111111] transition hover:bg-[#f1ece5]"
                                    aria-label="Expand sidebar"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            )}
                        </div>

                        <nav className="space-y-2">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`group flex items-center gap-4 rounded-3xl px-3 py-3 transition ${collapsed ? "justify-center" : ""} hover:bg-[#f1ece5] hover:text-[#111111] ${item.badge ? "shadow-sm shadow-slate-200" : ""}`}
                                    >
                                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#111111] shadow-sm shadow-slate-200 transition group-hover:bg-[#f1ece5]">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        {!collapsed && (
                                            <>
                                                <span className="flex-1 text-sm font-medium text-[#171717]">{item.label}</span>
                                                {item.badge && (
                                                    <span className="rounded-full bg-[#d8c7b3] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#111111]">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className={`rounded-3xl border border-[#ece7df] bg-white p-4 transition ${collapsed ? "mx-auto w-12" : "w-full"}`}>
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#f1ece5] text-[#111111]">SA</div>
                            {!collapsed && (
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-[#171717]">Shop Admin</p>
                                    <p className="truncate text-xs uppercase tracking-[0.3em] text-[#7b7b7b]">admin@shopdrip.com</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.aside>
        </>
    );
}
