import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "neutral" | "accent" | "muted";
}

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
                variant === "neutral" && "bg-neutral-100 text-matte-900",
                variant === "accent" && "bg-matte-900 text-white",
                variant === "muted" && "bg-neutral-200 text-neutral-700",
                className
            )}
            {...props}
        />
    );
}
