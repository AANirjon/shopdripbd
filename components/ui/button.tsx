import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", asChild = false, ...props }, ref) => {
        const Component = asChild ? Slot : "button";

        return (
            <Component
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50",
                    variant === "primary" && "bg-matte-900 text-white hover:bg-matte-800 dark:bg-white dark:text-matte-900 dark:hover:bg-neutral-100",
                    variant === "secondary" && "border border-neutral-300 bg-white text-matte-900 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-900",
                    variant === "ghost" && "bg-transparent text-matte-900 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800",
                    variant === "outline" && "border border-neutral-200 bg-white text-matte-900 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-900",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
