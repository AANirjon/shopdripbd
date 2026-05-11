import type { Variants } from "framer-motion";

export const sectionStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.14,
        },
    },
};

export const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.82, ease: "easeOut" },
    },
};

export const imageFloat = {
    hover: {
        y: -10,
        scale: 1.03,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const cardHover = {
    hover: {
        y: -10,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};
