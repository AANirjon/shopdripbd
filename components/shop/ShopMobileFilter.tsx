"use client";

import { useEffect, useState } from "react";
import { Filter, X } from "lucide-react";
import { useShop } from "@/lib/shop-context";

const categoryOptions = ["All", "New Arrivals", "Bags", "Dresses", "Accessories", "Footwear", "Best Sellers"];
const sizeOptions = ["All", "XS", "S", "M", "L", "XL", "XXL"];
const colorOptions = ["All", "Beige", "Black", "White", "Brown", "Grey", "Navy"];
const sortOptions = ["Newest", "Best Selling", "Price Low to High", "Price High to Low"] as const;

export function ShopMobileFilter() {
    const {
        activeFilter,
        setActiveFilter,
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor,
        priceRange,
        setPriceRange,
        sortOption,
        setSortOption,
        filteredCount,
        totalCount
    } = useShop();
    const [open, setOpen] = useState(false);
    const [topOffset, setTopOffset] = useState(72);

    const clearFilters = () => {
        setActiveFilter("All");
        setSelectedSize("All");
        setSelectedColor("All");
        setPriceRange([20, 260]);
    };

    useEffect(() => {
        const updateTopOffset = () => {
            const header = document.querySelector("header");
            const headerHeight = header ? header.clientHeight || header.getBoundingClientRect().height : 0;
            setTopOffset(headerHeight || 72);
        };

        updateTopOffset();
        window.addEventListener("resize", updateTopOffset, { passive: true });

        return () => {
            window.removeEventListener("resize", updateTopOffset);
        };
    }, []);

    return (
        <div className="lg:hidden">
            <div
                className="fixed inset-x-0 z-[51] bg-white/95 backdrop-blur-xl shadow-sm"
                style={{ top: topOffset }}
            >
                <div className="rounded-b-[28px] border-t border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-3 rounded-full border border-neutral-200 bg-white/95 px-4 py-3 shadow-sm">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#333333]"
                        >
                            <Filter className="h-4 w-4" />
                            Filters
                        </button>
                        <div className="text-right text-sm text-neutral-600">
                            Showing {filteredCount} of {totalCount}
                        </div>
                    </div>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-[60] overflow-y-auto bg-black/40 px-4 py-6">
                    <div className="mx-auto w-full max-w-lg rounded-[28px] bg-white p-6 shadow-2xl sm:p-8">
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">Filters</p>
                                <h2 className="mt-2 text-lg font-semibold text-neutral-900">Refine your edit</h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-neutral-500">Sort</p>
                                <div className="rounded-full border border-neutral-200 bg-[#faf5ef] px-4 py-2">
                                    <select
                                        value={sortOption}
                                        onChange={(event) => setSortOption(event.target.value as typeof sortOptions[number])}
                                        className="w-full bg-transparent text-sm text-neutral-700 outline-none"
                                    >
                                        {sortOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-neutral-500">Category</p>
                                <div className="flex flex-wrap gap-2">
                                    {categoryOptions.map((option) => {
                                        const active = option === activeFilter;
                                        return (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setActiveFilter(option as any)}
                                                className={`rounded-full border px-3 py-2 text-[11px] transition ${active
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

                            <div>
                                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-neutral-500">Size</p>
                                <div className="flex flex-wrap gap-2">
                                    {sizeOptions.map((size) => {
                                        const active = size === selectedSize;
                                        return (
                                            <button
                                                key={size}
                                                type="button"
                                                onClick={() => setSelectedSize(size)}
                                                className={`rounded-full border px-3 py-2 text-[11px] transition ${active
                                                    ? "bg-[#111111] border-[#111111] text-white"
                                                    : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-neutral-500">Color</p>
                                <div className="flex flex-wrap gap-2">
                                    {colorOptions.map((color) => {
                                        const active = color === selectedColor;
                                        return (
                                            <button
                                                key={color}
                                                type="button"
                                                onClick={() => setSelectedColor(color)}
                                                className={`rounded-full border px-3 py-2 text-[11px] transition ${active
                                                    ? "bg-[#111111] border-[#111111] text-white"
                                                    : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                                                    }`}
                                            >
                                                {color}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                                    <span>Price</span>
                                    <span className="text-neutral-700">${priceRange[0]} - ${priceRange[1]}</span>
                                </div>
                                <div className="space-y-3">
                                    <input
                                        type="range"
                                        min={20}
                                        max={260}
                                        value={priceRange[0]}
                                        onChange={(event) => setPriceRange([Number(event.target.value), priceRange[1]])}
                                        className="w-full accent-[#111111]"
                                    />
                                    <input
                                        type="range"
                                        min={20}
                                        max={260}
                                        value={priceRange[1]}
                                        onChange={(event) => setPriceRange([priceRange[0], Number(event.target.value)])}
                                        className="w-full accent-[#111111]"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
                                >
                                    Clear All
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#333333]"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
