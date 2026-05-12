"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import styles from "./FollowJourneySection.module.css";

const galleryItems = [
    {
        id: "journey-01",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
        alt: "Neutral outfit editorial image",
    },
    {
        id: "journey-02",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
        alt: "Editorial fashion campaign shot",
    },
    {
        id: "journey-03",
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
        alt: "Minimal lifestyle editorial image",
    },
    {
        id: "journey-04",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
        alt: "Editorial fashion campaign shot",
    },
    {
        id: "journey-05",
        image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
        alt: "Luxury clothing detail image",
    },
    {
        id: "journey-06",
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
        alt: "Minimal lifestyle editorial image",
    },
    {
        id: "journey-07",
        image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
        alt: "Monochrome fashion detail shot",
    },
    {
        id: "journey-08",
        image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
        alt: "Monochrome fashion detail shot",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.88, ease: "easeOut" },
    },
};

export function FollowJourneySection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: "trimSnaps", align: "start", skipSnaps: false });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("scroll", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("scroll", onSelect);
        };
    }, [emblaApi]);

    return (
        <section className={styles.followJourneySection}>
            <div className={styles.atmosphereLayer} />
            <div className="relative mx-auto max-w-[1440px] px-6 py-[80px] sm:py-[100px] lg:py-[120px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.24 }}
                    variants={fadeUp}
                    className="mx-auto max-w-[1180px]"
                >
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="space-y-3">
                            <p className="text-[0.72rem] uppercase tracking-[0.48em] text-[#6b635c] font-medium">
                                FOLLOW OUR JOURNEY
                            </p>
                            <p className="text-[0.95rem] text-[#7a736c] tracking-[0.18em] uppercase">
                                @shopdripbd
                            </p>
                        </div>

                        <a
                            href="https://www.instagram.com/shopdripbd/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.38em] text-[#2f2b27] font-semibold transition duration-300"
                        >
                            VIEW INSTAGRAM
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>

                    <div className="relative mt-10">
                        <div className={styles.embla} ref={emblaRef}>
                            <div className={styles.emblaContainer}>
                                {galleryItems.map((item) => {
                                    const isActive = activeCard === item.id;

                                    return (
                                        <motion.div
                                            key={item.id}
                                            whileHover={{ y: -4 }}
                                            className={`${styles.emblaSlide} aspect-[4/5]`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setActiveCard(isActive ? null : item.id)}
                                                className="group relative h-full w-full overflow-hidden rounded-[8px] bg-[#f1ece6] p-0 text-left"
                                            >
                                                <div className="relative h-full w-full overflow-hidden">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.alt}
                                                        fill
                                                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 22vw"
                                                        className={`object-cover transition duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "scale-105 blur-sm" : "group-hover:scale-105"}`}
                                                    />
                                                </div>

                                                <div className={`absolute inset-0 transition duration-500 ${isActive ? "bg-black/20 backdrop-blur-sm" : "bg-black/0 group-hover:bg-black/20"}`} />
                                                <div className={`absolute inset-0 flex items-center justify-center transition duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                                                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/65 bg-white/70 text-[#111111] shadow-[0_16px_45px_rgba(0,0,0,0.12)] backdrop-blur-md">
                                                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                                                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm-4.25 3.3a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 1.5a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm4.85-.7a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </button>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="absolute inset-y-0 left-4 hidden items-center sm:flex">
                            <button
                                type="button"
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#111] shadow-[0_14px_40px_rgba(15,15,15,0.08)] transition duration-300 hover:bg-white disabled:opacity-40"
                                aria-label="Previous slide"
                            >
                                ←
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-4 hidden items-center sm:flex">
                            <button
                                type="button"
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#111] shadow-[0_14px_40px_rgba(15,15,15,0.08)] transition duration-300 hover:bg-white disabled:opacity-40"
                                aria-label="Next slide"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 overflow-hidden rounded-full bg-[#111111] px-4 py-3 text-[0.72rem] uppercase tracking-[0.35em] text-[#f7f2ec]">
                        <div className={styles.marqueeText}>
                            <span>LIMITED COLLECTION&nbsp;—&nbsp;NEW ARRIVALS EVERY WEEK&nbsp;—&nbsp;QUIET LUXURY&nbsp;—&nbsp;</span>
                            <span>LIMITED COLLECTION&nbsp;—&nbsp;NEW ARRIVALS EVERY WEEK&nbsp;—&nbsp;QUIET LUXURY&nbsp;—&nbsp;</span>
                            <span>LIMITED COLLECTION&nbsp;—&nbsp;NEW ARRIVALS EVERY WEEK&nbsp;—&nbsp;QUIET LUXURY&nbsp;—&nbsp;</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
