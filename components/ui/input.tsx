import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = "text", ...props }, ref) => (
        <input
            ref={ref}
            type={type}
            className={cn(
                "w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-matte-900 placeholder:text-neutral-400 shadow-sm outline-none transition focus:border-matte-900 focus:ring-2 focus:ring-matte-100 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    )
);
Input.displayName = "Input";
