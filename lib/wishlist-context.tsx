"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { products } from "@/lib/shop-data";
import type { Product } from "@/lib/shop-types";

type WishlistContextValue = {
    items: Product[];
    removeItem: (id: string) => void;
    addItem: (product: Product) => void;
};

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<Product[]>([products[0], products[1], products[2]]);

    const removeItem = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id));

    const addItem = (product: Product) =>
        setItems((prev) => (prev.some((item) => item.id === product.id) ? prev : [...prev, product]));

    const value = useMemo(
        () => ({ items, removeItem, addItem }),
        [items]
    );

    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error("useWishlist must be used within WishlistProvider");
    }

    return context;
}
