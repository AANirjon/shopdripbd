"use client";

import { AnimatePresence } from "framer-motion";
import { useWishlist } from "@/lib/wishlist-context";
import { WishlistCard } from "./WishlistCard";

export function WishlistGrid() {
    const { items } = useWishlist();

    return (
        <div className="mx-auto grid max-w-7xl gap-6 px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            <AnimatePresence initial={false} mode="popLayout">
                {items.map((product) => (
                    <WishlistCard key={product.id} product={product} />
                ))}
            </AnimatePresence>
        </div>
    );
}
