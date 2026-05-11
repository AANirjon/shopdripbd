"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cardHover, imageFloat } from "./section-animations";
import styles from "./CollectionCard.module.css";

interface CollectionCardProps {
    label: string;
    title: string;
    description: string;
    href: string;
    image: string;
    ctaLabel?: string;
    className?: string;
}

export function CollectionCard({
    label,
    title,
    description,
    href,
    image,
    ctaLabel = "Shop collection",
    className,
}: CollectionCardProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <motion.article
            whileHover="hover"
            variants={cardHover}
            className={`${styles.card} ${className ?? ""}`.trim()}
        >
            <div className={styles.imageContainer}>
                {!loaded && <div className={styles.imagePlaceholder} />}

                <motion.div variants={imageFloat} className={styles.imageMotion}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className={styles.image}
                        onLoad={() => setLoaded(true)}
                    />
                    <div className={styles.imageTint} />
                </motion.div>

                <div className={styles.cardDetails}>
                    <span className={styles.label}>{label}</span>
                    <div className={styles.titleGroup}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                    </div>
                    <Link href={href} className={styles.link}>
                        {ctaLabel}
                        <ArrowRight className={styles.linkIcon} />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
