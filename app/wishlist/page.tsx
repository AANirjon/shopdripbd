"use client";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WishlistGrid } from "@/components/wishlist/WishlistGrid";
import { EmptyWishlist } from "@/components/wishlist/EmptyWishlist";
import { WishlistProvider, useWishlist } from "@/lib/wishlist-context";

function WishlistContent() {
    const { items } = useWishlist();

    return (
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
            {items.length > 0 ? <WishlistGrid /> : <EmptyWishlist />}
        </section>
    );
}

export default function WishlistPage() {
    return (
        <main className="bg-[#f8f5f1] text-[#111111]">
            <Navbar />

            <section className="mx-auto max-w-7xl px-6 pt-[120px] pb-[60px] lg:px-8 lg:pt-[160px] lg:pb-[80px]">
                <p className="text-[10px] uppercase tracking-[0.55em] text-neutral-600">Curated Favorites</p>
                <h1 className="mt-6 max-w-3xl text-[42px] font-serif font-light leading-[0.92] tracking-[-0.03em] text-[#111111] sm:text-[48px] lg:text-[72px]">
                    Your Wishlist
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700">
                    Save the pieces you love and revisit them anytime.
                </p>
            </section>

            <WishlistProvider>
                <WishlistContent />
            </WishlistProvider>

            <Footer />
        </main>
    );
}
