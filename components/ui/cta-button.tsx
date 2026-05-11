import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import styles from "./cta-button.module.css";

export interface CTAButtonProps extends ButtonProps {
    variant?: "primary" | "secondary";
}

export function CTAButton({ variant = "primary", className, ...props }: CTAButtonProps) {
    return (
        <Button
            variant={variant === "primary" ? "primary" : "secondary"}
            className={`${styles.ctaButton} ${variant === "primary" ? styles.primary : styles.secondary} ${className ?? ""}`.trim()}
            {...props}
        />
    );
}
