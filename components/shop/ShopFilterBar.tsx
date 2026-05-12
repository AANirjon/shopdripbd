"use client";

import { ChevronDown, Filter } from "lucide-react";
import { useShop } from "@/lib/shop-context";

const filterOptions = [
    "All",
    "New Arrivals",
    "Bags",
    "Dresses",
    "Accessories",
    "Footwear",
    "Best Sellers"
] as const;

const sortOptions = [
    "Newest",
    "Best Selling",
    "Price Low to High",
    "Price High to Low"
] as const;

export function ShopFilterBar() {
    const { activeFilter, setActiveFilter, sortOption, setSortOption, filteredCount, totalCount } = useShop();

    return (
        <div className="sticky top-[96px] z-30">
            <div className="overflow-hidden rounded-full border border-neutral-200 bg-white/85 px-4 py-4 shadow-soft backdrop-blur-xl">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-3 text-sm text-neutral-700">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-[#f8f5f1] text-[#111111]">
                            <Filter className="h-4 w-4" />
                        </span>
                        <div>
                            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">Filter</p>
                            <p className="text-sm font-medium text-[#111111]">Refine your edit</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-neutral-700 lg:flex-row lg:items-center">
                        <div className="rounded-full border border-neutral-200 bg-[#f8f5f1] px-4 py-2 uppercase tracking-[0.35em] text-neutral-600">
                            Showing {filteredCount} of {totalCount} products
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="sr-only" htmlFor="shop-sort">
                                Sort products
                            </label>
                            <div className="relative rounded-full border border-neutral-200 bg-[#f8f5f1]">
                                <select
                                    id="shop-sort"
                                    value={sortOption}
                                    onChange={(event) => setSortOption(event.target.value as typeof sortOptions[number])}
                                    className="appearance-none rounded-full bg-transparent px-4 py-3 pr-10 text-sm text-neutral-700 outline-none"
                                >
                                    {sortOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex min-w-0 flex-wrap items-center gap-3 overflow-x-auto pb-2 text-[11px] uppercase tracking-[0.35em] text-neutral-600 no-scrollbar sm:gap-4">
                    {filterOptions.map((option) => {
                        const active = option === activeFilter;
                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => setActiveFilter(option)}
                                className={`rounded-full border px-4 py-2 transition duration-300 ${active
                                        ? "bg-[#111111] border-[#111111] text-white"
                                        : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                                    }`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
