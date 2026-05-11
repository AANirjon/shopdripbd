"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/shop-data";

export function TestimonialGrid() {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <div className="mb-12">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Customer perspective</p>
                <h2 className="mt-4 text-4xl font-semibold text-matte-900 dark:text-white">Quiet confidence in every detail.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((item) => (
                    <motion.blockquote
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-soft dark:border-neutral-800 dark:bg-matte-950"
                    >
                        <p className="text-lg leading-8 text-neutral-800 dark:text-neutral-100">“{item.quote}”</p>
                        <footer className="mt-8 text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                            {item.author}, {item.role}
                        </footer>
                    </motion.blockquote>
                ))}
            </div>
        </section>
    );
}
