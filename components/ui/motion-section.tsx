"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 }
};

interface MotionSectionProps extends HTMLMotionProps<"section"> {
    className?: string;
}

export function MotionSection({ children, className, ...props }: PropsWithChildren<MotionSectionProps>) {
    return (
        <motion.section
            {...props}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(className)}
        >
            {children}
        </motion.section>
    );
}
