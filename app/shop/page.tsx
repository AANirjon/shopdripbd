import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ProductGrid } from "@/components/ecommerce/product-grid";
import { products } from "@/lib/shop-data";

export default function ShopPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Shop</p>
                        <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">A quiet edit of everyday silhouettes.</h1>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                        Explore curated categories, refined essentials and elevated pieces designed in soft neutrals for an editorial wardrobe.
                    </p>
                </div>
                <ProductGrid products={products} />
            </section>
            <Footer />
        </main>
    );
}
