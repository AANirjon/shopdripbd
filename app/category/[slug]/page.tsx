import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ProductGrid } from "@/components/ecommerce/product-grid";
import { products } from "@/lib/shop-data";

export default function CategoryPage({ params }: { params: any }) {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <h1 className="text-4xl font-semibold text-matte-900 dark:text-white">Category route minimal test</h1>
                <ProductGrid products={products} />
            </section>
            <Footer />
        </main>
    );
}
