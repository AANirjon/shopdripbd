"use client";

import { useShop } from "@/lib/shop-context";
import { ShopProductCard } from "./ShopProductCard";
import type { Product } from "@/lib/shop-types";

export function ShopProductGrid({ products }: { products: Product[] }) {
    const { currentView } = useShop();

    return (
        <div className={`grid gap-6 ${currentView === "list" ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}>
            {products.map((product) => (
                <ShopProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
