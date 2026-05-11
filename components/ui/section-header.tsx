import type { PropsWithChildren } from "react";
import styles from "./section-header.module.css";

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description: string;
    className?: string;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    className,
}: PropsWithChildren<SectionHeaderProps>) {
    return (
        <div className={`${styles.header} ${className ?? ""}`.trim()}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
