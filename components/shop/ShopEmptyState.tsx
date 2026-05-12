"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function ShopEmptyState() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-2xl rounded-[28px] border border-neutral-200 bg-white p-16 text-center shadow-soft"
        >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-neutral-200 bg-[#f8f5f1] text-[#111111]">
                <Heart className="h-10 w-10" />
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-[0.55em] text-neutral-500">No results</p>
            <h2 className="mt-4 text-4xl font-serif font-light leading-[1.05] tracking-[-0.03em] text-[#111111] sm:text-5xl">
                No pieces found.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-700">
                Try exploring a different collection or category to discover the next refined wardrobe essential.
            </p>
            <Link href="/shop" className="mt-10 inline-flex rounded-full bg-[#111111] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#080705]">
                Back to Collection
            </Link>
        </motion.div>
    );
}
