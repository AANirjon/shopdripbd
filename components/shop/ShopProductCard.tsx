"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/shop-types";

export function ShopProductCard({ product }: { product: Product }) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-[24px] border border-neutral-200 bg-[#f9f4ed] shadow-soft transition duration-300 hover:shadow-elevated"
        >
            <div className="relative overflow-hidden bg-[#f5efea]">
                <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                        />
                    </motion.div>
                </div>

                <button
                    type="button"
                    className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/75 text-[#111111] shadow-soft backdrop-blur-xl transition duration-300 hover:scale-95 hover:bg-white"
                    aria-label={`Add ${product.name} to wishlist`}
                >
                    <Heart className="h-4 w-4" />
                </button>

                <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    whileHover={{ scale: 1.02 }}
                    className="absolute left-5 right-5 bottom-5 hidden items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_40px_rgba(13,10,8,0.16)] transition duration-300 group-hover:flex"
                >
                    <ShoppingBag className="h-4 w-4" />
                    Quick Add
                </motion.button>
            </div>

            <div className="space-y-3 px-5 pb-6 pt-5">
                <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-neutral-500">{product.category}</p>
                    {product.label ? (
                        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-neutral-600">
                            {product.label}
                        </span>
                    ) : null}
                </div>
                <div className="space-y-1">
                    <Link href={`/product/${product.slug}`} className="block">
                        <h2 className="text-xl font-semibold tracking-tight text-[#111111] transition-colors duration-300 hover:text-neutral-700">
                            {product.name}
                        </h2>
                    </Link>
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-sm text-neutral-700">${product.price.toFixed(2)}</p>
                        <div className="flex items-center gap-1">
                            <span className="h-2.5 w-2.5 rounded-full bg-neutral-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-neutral-500" />
                            <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
