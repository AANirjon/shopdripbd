"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Star, ChevronRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionContainer } from "@/components/ui/section-container";

const textStagger: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.12, delayChildren: 0.12 }
    }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.png"
                    alt="Shopdrip editorial hero background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: "center 42%" }}
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-slate-950/40" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.2),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/80 to-transparent" />

            <SectionContainer className="relative min-h-[92vh] flex items-center py-28 lg:py-36">
                <MotionSection
                    className="max-w-2xl space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textStagger}
                >
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
                        NEW COLLECTION
                    </p>
                    <motion.h1
                        variants={fadeUp}
                        className="text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-white sm:text-[4.6rem] lg:text-[5.5rem]"
                    >
                        Elevated Essentials For Every Moment
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="max-w-xl text-base leading-8 text-slate-200 sm:text-lg"
                    >
                        Shopdrip offers a quiet wardrobe edit with tactile silhouettes, nuanced neutrals, and editorial details designed for the modern lifestyle.
                    </motion.p>
                    <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                        <CTAButton asChild>
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-950/95 px-7 py-4 text-sm uppercase tracking-[0.32em] text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition hover:bg-white/10"
                            >
                                SHOP NOW
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </CTAButton>
                    </motion.div>
                </MotionSection>
            </SectionContainer>
        </section>
    );
}
