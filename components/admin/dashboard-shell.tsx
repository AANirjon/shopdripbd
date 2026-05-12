"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/admin/sidebar";
import { Topbar } from "@/components/admin/topbar";

interface DashboardShellProps {
    children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleToggle = () => setCollapsed((prev) => !prev);
    const handleMobileToggle = () => setMobileOpen((prev) => !prev);
    const handleCloseMobile = () => setMobileOpen(false);

    return (
        <div className="flex min-h-screen bg-[#f7f4ef] overflow-x-hidden text-[#171717]">
            <Sidebar
                collapsed={collapsed}
                onToggle={handleToggle}
                mobileOpen={mobileOpen}
                onCloseMobile={handleCloseMobile}
            />
            {mobileOpen && (
                <button
                    type="button"
                    onClick={handleCloseMobile}
                    className="fixed inset-0 z-30 bg-black/20 lg:hidden"
                    aria-label="Close sidebar"
                />
            )}
            <div className={`flex-1 min-h-screen transition-all duration-300 ease-in-out overflow-x-hidden ml-0 ${collapsed ? "lg:ml-[84px]" : "lg:ml-[260px]"}`}>
                <Topbar onToggle={handleMobileToggle} collapsed={collapsed} />
                <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
