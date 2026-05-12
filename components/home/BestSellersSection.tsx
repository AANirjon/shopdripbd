"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { cardHover, fadeUp, sectionStagger } from "./section-animations";
import styles from "./BestSellersSection.module.css";

const bestSellers = [
    {
        id: "bs-01",
        name: "Kestrel Leather Shirt",
        category: "Essentials",
        price: "$249",
        primaryImage:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
        secondaryImage:
            "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "bs-02",
        name: "Luna Cashmere Knit",
        category: "Knitwear",
        price: "$178",
        primaryImage:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
        secondaryImage:
            "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "bs-03",
        name: "Virelli Wide Trousers",
        category: "Tailoring",
        price: "$219",
        primaryImage:
            "https://images.unsplash.com/photo-1520974735194-0f0e6a0a3f10?auto=format&fit=crop&w=1200&q=80",
        secondaryImage:
            "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "bs-04",
        name: "Marlowe Shirt Jacket",
        category: "Outerwear",
        price: "$248",
        primaryImage:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
        secondaryImage:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "bs-05",
        name: "Sorrel Rib Tee",
        category: "Basics",
        price: "$98",
        primaryImage:
            "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
        secondaryImage:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    },
];

const imageVariants = {
    rest: { opacity: 1, scale: 1 },
    hover: { opacity: 0, scale: 1.04, transition: { duration: 0.72, ease: "easeOut" } },
};

const secondImageVariants = {
    rest: { opacity: 0, scale: 1.08 },
    hover: { opacity: 1, scale: 1, transition: { duration: 0.72, ease: "easeOut" } },
};

export function BestSellersSection() {
    return (
        <section className={styles.bestSellersSection}>
            <div className={styles.backgroundTone} />
            <SectionContainer className={styles.sectionContainer}>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-2xl">
                        <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[#5f5751] font-semibold">
                            BEST SELLERS
                        </p>
                        <h2
                            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                            className="mt-5 text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] leading-[0.98] font-light text-[#111111] max-w-3xl"
                        >
                            Our most loved pieces right now.
                        </h2>
                    </div>

                    <a
                        href="#"
                        className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.35em] text-[#2f2b27] font-semibold transition-all duration-300"
                    >
                        VIEW ALL PRODUCTS
                        <span className={styles.linkArrow} aria-hidden="true">
                            →
                        </span>
                    </a>
                </motion.div>

                <motion.div
                    variants={sectionStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="mt-14 lg:mt-20"
                >
                    <div className="flex gap-7 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:snap-none">
                        {bestSellers.map((product, index) => (
                            <motion.article
                                key={product.id}
                                variants={fadeUp}
                                className="group relative min-w-[80vw] snap-start lg:min-w-0"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                transition={{ duration: 0.45, ease: "easeOut" }}
                            >
                                <motion.div
                                    variants={cardHover}
                                    className="rounded-[20px] overflow-hidden bg-[#ebe1d7] shadow-[0_18px_46px_rgba(15,15,15,0.07)]"
                                >
                                    <div className="relative aspect-[3/4]">
                                        <motion.div
                                            variants={imageVariants}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={product.primaryImage}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 22vw"
                                                className="object-cover"
                                            />
                                        </motion.div>
                                        <motion.div
                                            variants={secondImageVariants}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={product.secondaryImage}
                                                alt={`${product.name} alternate`}
                                                fill
                                                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 22vw"
                                                className="object-cover"
                                            />
                                        </motion.div>

                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/70 backdrop-blur-md text-[#2c2926] transition duration-300 hover:scale-105 hover:bg-white"
                                            aria-label="Add to wishlist"
                                        >
                                            ♥
                                        </button>

                                        <div className="absolute inset-x-5 bottom-5 opacity-0 translate-y-6 transition duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-[0.82rem] uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-black"
                                            >
                                                Quick Add
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="mt-6 flex flex-col gap-3 text-[#2f2b27]">
                                    <p className="text-[0.68rem] uppercase tracking-[0.35em] text-[#70665d]">
                                        {product.category}
                                    </p>
                                    <h3
                                        style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                                        className="text-[1.1rem] leading-[1.08] font-normal text-[#111111]"
                                    >
                                        {product.name}
                                    </h3>
                                    <p className="text-[0.92rem] font-medium uppercase tracking-[0.22em] text-[#7a6d62]">
                                        {product.price}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </SectionContainer>
        </section>
    );
}
