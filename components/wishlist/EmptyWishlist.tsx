"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyWishlist() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex max-w-2xl flex-col items-center justify-center rounded-[28px] border border-neutral-200 bg-white/95 px-8 py-20 text-center shadow-soft"
        >
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-neutral-200 bg-[#f8f5f1] text-[2rem] text-[#111111]">
                <Heart className="h-10 w-10" />
            </div>
            <p className="text-xs uppercase tracking-[0.55em] text-neutral-600">Wishlist</p>
            <h2 className="mt-6 text-4xl font-serif font-light leading-[1.05] tracking-[-0.03em] text-[#111111] sm:text-5xl">
                Your wishlist is feeling empty.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-700">
                Discover timeless essentials and save your favorite pieces for a quiet luxury edit.
            </p>
            <Button asChild className="mt-10 bg-[#111111] text-white hover:bg-[#080705]">
                <Link href="/shop">Explore Collection</Link>
            </Button>
        </motion.div>
    );
}
