"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/shop-types";
import { useWishlist } from "@/lib/wishlist-context";

export function WishlistCard({ product }: { product: Product }) {
    const { removeItem } = useWishlist();

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-[22px] border border-neutral-200 bg-white shadow-soft"
        >
            <div className="relative overflow-hidden bg-neutral-100">
                <motion.div
                    className="relative aspect-[3/4] overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f8f5f1]/80 via-transparent to-transparent" />
                </motion.div>

                <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/85 bg-white/75 text-[#111] shadow-soft backdrop-blur-xl transition duration-300 hover:scale-95 hover:bg-white/90"
                    aria-label={`Remove ${product.name} from wishlist`}
                >
                    <Heart fill="#111" size={18} className="opacity-90" />
                </button>
            </div>

            <div className="space-y-4 px-5 pb-6 pt-5">
                <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-600">{product.category}</p>
                    <span className="h-2 w-2 rounded-full bg-neutral-300" />
                </div>

                <div className="space-y-1">
                    <h2 className="text-xl font-semibold tracking-tight text-[#111111]">{product.name}</h2>
                    <p className="text-sm text-neutral-700">${product.price.toFixed(2)}</p>
                </div>

                <button
                    type="button"
                    onClick={() => undefined}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(13,10,8,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#080705] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
                >
                    <ShoppingBag size={16} />
                    Add to Cart
                </button>
            </div>
        </motion.article>
    );
}
