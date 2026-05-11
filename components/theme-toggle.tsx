"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === "system" ? resolvedTheme : theme || "light";
    const icon = currentTheme === "dark" ? "☀️" : "🌙";

    return (
        <Button
            variant="ghost"
            className="h-11 w-11 rounded-full border border-neutral-200 p-0 text-base"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {mounted ? icon : null}
        </Button>
    );
}
