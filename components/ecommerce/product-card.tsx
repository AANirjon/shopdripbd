"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/shop-types";

export function ProductCard({ product }: { product: Product }) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-soft transition duration-300 hover:border-neutral-300 dark:border-neutral-800 dark:bg-matte-950"
        >
            <Link href={`/product/${product.slug}`} className="relative block overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={760}
                    className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </Link>
            <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">{product.category}</p>
                        <h3 className="text-xl font-semibold text-matte-900 dark:text-white">{product.name}</h3>
                    </div>
                    {product.label ? <Badge variant="accent">{product.label}</Badge> : null}
                </div>
                <div className="flex items-center justify-between gap-4">
                    <p className="text-base font-semibold text-matte-900 dark:text-white">${product.price.toFixed(2)}</p>
                    <Button variant="outline" className="px-4 py-2 text-sm">
                        View
                    </Button>
                </div>
            </div>
        </motion.article>
    );
}
