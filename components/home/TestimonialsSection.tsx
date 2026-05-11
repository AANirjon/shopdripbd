"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { SectionContainer } from "@/components/ui/section-container";
import { fadeUp } from "./section-animations";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
    {
        id: "t1",
        quote: "The Shopdrip edit feels like a private fashion story — polished, intimate, and unforgettable.",
        highlight: "An emotional wardrobe built with restraint and luxury.",
        name: "Ariana S.",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "t2",
        quote: "Every piece feels like a quiet statement. The silhouettes are modern and deeply considered.",
        highlight: "A beautifully edited capsule for the discerning dresser.",
        name: "Lina M.",
        location: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "t3",
        quote: "Shopping here is a ritual. The storytelling, fabric, and fit all feel clearly curated.",
        highlight: "A collection that feels emotional without being loud.",
        name: "Noah R.",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
    },
];

export function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", containScroll: "trimSnaps" });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef<number | null>(null);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("pointerUp", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("pointerUp", onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi) return;
        const play = () => {
            if (isPaused) return;
            emblaApi.scrollNext();
        };
        autoplayRef.current = window.setInterval(play, 6200);
        return () => {
            if (autoplayRef.current !== null) {
                window.clearInterval(autoplayRef.current);
            }
        };
    }, [emblaApi, isPaused]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.backgroundLayer} />
            <div className={styles.blurOrb} />

            <SectionContainer className={styles.sectionContainer}>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={styles.header}
                >
                    <p className={styles.smallLabel}>CLIENT EXPERIENCES</p>
                    <h2 className={styles.title}>
                        Testimonials that feel like
                        <br />
                        a fashion editorial.
                    </h2>
                    <p className={styles.description}>
                        A one-row carousel of quiet luxury impressions, designed to feel cinematic and intimate on every screen.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={styles.carouselWrapper}
                >
                    <div
                        className={styles.carouselViewport}
                        ref={emblaRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className={styles.carouselContainer}>
                            {testimonials.map((item) => (
                                <div key={item.id} className={styles.slide}>
                                    <article className={styles.slideCard}>
                                        <div className={styles.textPanel}>
                                            <span className={styles.quoteMark}>“</span>
                                            <p className={styles.quote}>{item.quote}</p>
                                            <p className={styles.highlight}>{item.highlight}</p>
                                            <div className={styles.metaGroup}>
                                                <p className={styles.name}>{item.name}</p>
                                                <p className={styles.location}>{item.location}</p>
                                            </div>
                                        </div>
                                        <div className={styles.imagePanel}>
                                            <div className={styles.imageFrame}>
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    sizes="(max-width: 1024px) 80vw, 50vw"
                                                    className={styles.slideImage}
                                                />
                                                <div className={styles.imageOverlay} />
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.controls}>
                        <button type="button" className={styles.controlButton} onClick={scrollPrev} aria-label="Previous testimonial">
                            <span aria-hidden="true">←</span>
                        </button>

                        <div className={styles.pagination}>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`${styles.dot} ${selectedIndex === index ? styles.dotActive : ""}`}
                                    onClick={() => scrollTo(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    aria-current={selectedIndex === index ? "true" : "false"}
                                />
                            ))}
                        </div>

                        <button type="button" className={styles.controlButton} onClick={scrollNext} aria-label="Next testimonial">
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </motion.div>
            </SectionContainer>
        </section>
    );
}
