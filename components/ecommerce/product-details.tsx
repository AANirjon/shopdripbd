"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import type { Product } from "@/lib/shop-types";

export function ProductDetails({ product }: { product: Product }) {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [quantity, setQuantity] = useState(1);

    const priceLabel = useMemo(() => `$${product.price.toFixed(2)}`, [product.price]);

    return (
        <section className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-neutral-100 p-6 dark:bg-neutral-900">
                    <Image src={product.image} alt={product.name} width={960} height={960} className="h-full w-full object-cover" />
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-7 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">{product.category}</p>
                        <h1 className="mt-3 text-4xl font-semibold text-matte-900 dark:text-white">{product.name}</h1>
                    </div>
                    {product.preorder ? <Badge variant="accent">Preorder</Badge> : <Badge variant="muted">Essentials</Badge>}
                </div>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                    <p>{product.description}</p>
                    <p className="text-3xl font-semibold text-matte-900 dark:text-white">{priceLabel}</p>
                </div>
                <div className="grid gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Size</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setSelectedSize(size)}
                                    className={`rounded-full border px-4 py-2 text-sm transition ${selectedSize === size
                                            ? "border-matte-900 bg-matte-900 text-white"
                                            : "border-neutral-300 bg-white text-matte-900 hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
                        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">Quantity</span>
                        <div className="flex items-center gap-3">
                            <button type="button" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="h-10 w-10 rounded-full border border-neutral-200 text-matte-900 transition hover:border-matte-900 dark:border-neutral-700 dark:text-neutral-200">
                                −
                            </button>
                            <span className="min-w-[2rem] text-center text-base font-medium text-matte-900 dark:text-white">{quantity}</span>
                            <button type="button" onClick={() => setQuantity((prev) => prev + 1)} className="h-10 w-10 rounded-full border border-neutral-200 text-matte-900 transition hover:border-matte-900 dark:border-neutral-700 dark:text-neutral-200">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button className="flex-1">Add to cart</Button>
                        <Button variant="outline" className="flex-1">Add to wishlist</Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
