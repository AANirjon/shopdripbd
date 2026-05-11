import type { PropsWithChildren } from "react";
import styles from "./section-container.module.css";

interface SectionContainerProps {
    className?: string;
}

export function SectionContainer({ children, className }: PropsWithChildren<SectionContainerProps>) {
    return (
        <section className={`${styles.container} ${className ?? ""}`.trim()}>
            {children}
        </section>
    );
}
