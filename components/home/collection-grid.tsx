"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const collections = [
    {
        title: "Outerwear",
        subtitle: "Crafted for transitional layering.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1080&q=80",
        href: "/category/outerwear"
    },
    {
        title: "Knitwear",
        subtitle: "Soft silhouettes with refined details.",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1080&q=80",
        href: "/category/knitwear"
    },
    {
        title: "Accessories",
        subtitle: "Minimal accents, tonal finishing.",
        image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1080&q=80",
        href: "/category/accessories"
    }
];

export function CollectionGrid() {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Featured collections</p>
                    <h2 className="mt-4 text-4xl font-semibold text-matte-900 dark:text-white">Curated edits for modern dressing.</h2>
                </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
                {collections.map((collection) => (
                    <motion.article
                        key={collection.title}
                        whileHover={{ y: -6 }}
                        className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-soft transition dark:border-neutral-800 dark:bg-matte-950"
                    >
                        <Link href={collection.href} className="relative block h-80 overflow-hidden">
                            <Image
                                src={collection.image}
                                alt={collection.title}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                        </Link>
                        <div className="p-6">
                            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{collection.subtitle}</p>
                            <h3 className="mt-4 text-2xl font-semibold text-matte-900 dark:text-white">{collection.title}</h3>
                            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">Shop the latest minimal pieces in this category.</p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
