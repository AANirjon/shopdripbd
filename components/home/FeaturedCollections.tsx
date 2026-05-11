"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { CollectionCard } from "./CollectionCard";
import { fadeUp, sectionStagger } from "./section-animations";
import styles from "./FeaturedCollections.module.css";

const collections = [
    {
        label: "New arrivals",
        title: "Explore the latest drops",
        description: "A quiet campaign for elevated essentials and refined tailoring in tonal neutrals.",
        href: "/shop?collection=new-arrivals",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    },
    {
        label: "Wide leg pants",
        title: "Comfort meets style",
        description: "Wide-leg tailoring with soft movement and a premium editorial silhouette.",
        href: "/category/wide-leg-pants",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    },
    {
        label: "Accessories",
        title: "Details that define you",
        description: "Minimal finishes in warm metal and textured leather for a quiet luxury edit.",
        href: "/category/accessories",
        image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80",
    },
    {
        label: "Bags",
        title: "Carry your elegance",
        description: "Structured shapes and subtle hardware designed for a refined everyday wardrobe.",
        href: "/category/bags",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1600&q=80",
    },
    {
        label: "Footwear",
        title: "Step into confidence",
        description: "Sharp styling and sculptural simplicity for the modern everyday.",
        href: "/category/footwear",
        image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=1600&q=80",
    },
    {
        label: "Essentials",
        title: "The pieces you’ll live in",
        description: "Soft, tonal foundations with effortless form and luxurious texture.",
        href: "/category/essentials",
        image: "https://images.unsplash.com/photo-1520962911525-ebbc17a19d6c?auto=format&fit=crop&w=1600&q=80",
    },
];

export function FeaturedCollections() {
    return (
        <section className={styles.featuredSection}>
            <SectionContainer className={styles.sectionContainer}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionStagger}
                    className={styles.header}
                >
                    <p className={styles.smallLabel}>FEATURED COLLECTIONS</p>
                    <h2 className={styles.heroTitle}>
                        Discover Our
                        <br />
                        Premium Collections
                    </h2>
                    <p className={styles.description}>
                        Timeless pieces. Modern aesthetic. Made for everyday elegance.
                    </p>
                    <a href="/shop" className={styles.ctaLink}>
                        Shop all collections
                    </a>
                </motion.div>

                <div className={styles.editorialGrid}>
                    <motion.div variants={fadeUp} className={`${styles.gridItem} ${styles.leftCard}`}>
                        <CollectionCard {...collections[0]} ctaLabel="Shop now" />
                    </motion.div>

                    <motion.div variants={fadeUp} className={`${styles.gridItem} ${styles.topCenter}`}>
                        <CollectionCard {...collections[1]} />
                    </motion.div>

                    <motion.div variants={fadeUp} className={`${styles.gridItem} ${styles.topRight}`}>
                        <CollectionCard {...collections[2]} />
                    </motion.div>

                    <motion.div variants={fadeUp} className={`${styles.gridItem} ${styles.bottomCenter}`}>
                        <CollectionCard {...collections[3]} />
                    </motion.div>

                    <motion.div variants={fadeUp} className={`${styles.gridItem} ${styles.bottomRight}`}>
                        <CollectionCard {...collections[4]} />
                    </motion.div>

                    <motion.div variants={fadeUp} className={`${styles.gridItem} ${styles.bottomBanner}`}>
                        <CollectionCard {...collections[5]} />
                    </motion.div>
                </div>
            </SectionContainer>
        </section>
    );
}
