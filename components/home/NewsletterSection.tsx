"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const buttonHover = {
    hover: {
        y: -2,
        scale: 1.01,
        transition: { duration: 0.28, ease: "easeOut" },
    },
};

export function NewsletterSection() {
    return (
        <section className="relative overflow-hidden bg-[#f6f2ee]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_30%)]" />
            <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#efe7dd]/70 blur-3xl" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto max-w-[900px] px-6 py-[90px] sm:py-[110px] lg:py-[140px] text-center"
            >
                <motion.p
                    variants={fadeUp}
                    className="text-[0.7rem] uppercase tracking-[0.42em] text-[#6d655f] font-medium"
                >
                    NEWSLETTER
                </motion.p>

                <motion.h2
                    variants={fadeUp}
                    transition={{ delay: 0.08, duration: 0.88, ease: "easeOut" }}
                    style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                    className="mt-6 text-[40px] leading-[0.96] text-[#111111] sm:text-[56px] lg:text-[72px] font-light tracking-[-0.03em] max-w-[820px] mx-auto"
                >
                    Join the Curated Circle.
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    transition={{ delay: 0.16, duration: 0.88, ease: "easeOut" }}
                    className="mt-6 max-w-[600px] mx-auto text-[1rem] leading-[1.85] text-[#6f675f]"
                >
                    Be the first to know about new drops, exclusive offers, and curated fashion updates.
                </motion.p>

                <motion.form
                    variants={fadeUp}
                    transition={{ delay: 0.24, duration: 0.88, ease: "easeOut" }}
                    className="mt-10 sm:mt-14 mx-auto flex w-full max-w-[700px] flex-col gap-4 rounded-[32px] border border-black/10 bg-white/90 p-2 shadow-[0_32px_90px_rgba(20,18,15,0.06)] backdrop-blur-sm sm:flex-row"
                    action="#"
                    method="post"
                >
                    <label htmlFor="newsletter-email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Enter your email"
                        className="min-h-[60px] flex-1 rounded-[28px] border-none bg-transparent px-6 text-[1rem] font-medium text-[#111111] placeholder:text-[#9c958c] focus:outline-none focus:ring-2 focus:ring-[#111111]/10 focus:ring-offset-2 focus:ring-offset-[#f6f2ee]"
                    />
                    <motion.button
                        type="submit"
                        variants={buttonHover}
                        whileHover="hover"
                        className="group inline-flex min-h-[60px] items-center justify-center rounded-[28px] bg-[#111111] px-8 text-[0.82rem] uppercase tracking-[0.3em] text-white transition duration-300"
                    >
                        <span className="flex items-center gap-3">
                            SUBSCRIBE
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
}
