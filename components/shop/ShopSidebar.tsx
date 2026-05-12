"use client";

import { useShop } from "@/lib/shop-context";

const categoryOptions = ["All", "New Arrivals", "Bags", "Dresses", "Accessories", "Footwear", "Best Sellers"];
const sizeOptions = ["All", "XS", "S", "M", "L", "XL", "XXL"];
const colorOptions = ["All", "Beige", "Black", "White", "Brown", "Grey", "Navy"];

export function ShopSidebar() {
    const {
        activeFilter,
        setActiveFilter,
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor,
        priceRange,
        setPriceRange
    } = useShop();

    return (
        <aside className="hidden lg:block">
            <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-soft">
                <div className="space-y-6">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.55em] text-neutral-500">Categories</p>
                        <div className="mt-4 space-y-3">
                            {categoryOptions.map((option) => {
                                const active = option === activeFilter;
                                return (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => setActiveFilter(option as any)}
                                        className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-sm transition duration-300 ${active
                                                ? "border-[#111111] bg-[#111111] text-white"
                                                : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50"
                                            }`}
                                    >
                                        <span>{option}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <p className="text-[10px] uppercase tracking-[0.55em] text-neutral-500">Size</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {sizeOptions.map((size) => {
                                const active = size === selectedSize;
                                return (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setSelectedSize(size)}
                                        className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.35em] transition duration-300 ${active
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
                        <p className="text-[10px] uppercase tracking-[0.55em] text-neutral-500">Color</p>
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {colorOptions.map((color) => {
                                const active = color === selectedColor;
                                return (
                                    <button
                                        key={color}
                                        type="button"
                                        onClick={() => setSelectedColor(color)}
                                        className={`flex items-center justify-center rounded-full border px-4 py-3 text-[11px] uppercase tracking-[0.35em] transition duration-300 ${active
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
                        <div className="flex items-center justify-between">
                            <p className="text-[10px] uppercase tracking-[0.55em] text-neutral-500">Price</p>
                            <p className="text-sm font-medium text-neutral-700">${priceRange[0]} - ${priceRange[1]}</p>
                        </div>
                        <div className="mt-5 space-y-3">
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
                            <div className="flex justify-between text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                                <span>$20</span>
                                <span>$260</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
