import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ProductDetails } from "@/components/ecommerce/product-details";
import { products } from "@/lib/shop-data";

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: any }) {
    const product = products.find((item) => item.slug === params.slug);

    if (!product) {
        return (
            <main>
                <Navbar />
                <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <h1 className="text-3xl font-semibold text-matte-900 dark:text-white">Product not found</h1>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-300">Please return to the shop to continue browsing.</p>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <ProductDetails product={product} />
            </section>
            <Footer />
        </main>
    );
}
