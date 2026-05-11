import { ProductCard } from "@/components/ecommerce/product-card";
import type { Product } from "@/lib/shop-types";

export function ProductGrid({ products }: { products: Product[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
