"use client";

import { useShop } from "@/lib/shop-context";

export function LoadMoreSection() {
    const { hasMore, loadMore, visibleCount, filteredCount } = useShop();

    if (!hasMore) {
        return (
            <div className="mt-14 text-center text-sm text-neutral-600">
                Showing all {filteredCount} refined pieces.
            </div>
        );
    }

    return (
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                Showing {visibleCount} of {filteredCount}
            </p>
            <button
                type="button"
                onClick={loadMore}
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-[0_18px_40px_rgba(13,10,8,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#080705]"
            >
                Load More Products
            </button>
        </div>
    );
}
