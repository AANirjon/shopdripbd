import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

const products = [
    { name: "Azura Trench", stock: 12, price: "৳129" },
    { name: "Sora Knit", stock: 6, price: "৳72" },
    { name: "Nami Satin Dress", stock: 4, price: "৳84" }
];

export default function AdminProductsPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Products</p>
                        <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Manage inventory</h1>
                    </div>
                    <Button asChild>
                        <Link href="/admin">Back to dashboard</Link>
                    </Button>
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                    <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
                        <thead className="bg-neutral-50 text-left text-sm uppercase tracking-[0.2em] text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
                            <tr>
                                <th className="px-8 py-5">Product</th>
                                <th className="px-8 py-5">Stock</th>
                                <th className="px-8 py-5">Price</th>
                                <th className="px-8 py-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 bg-white text-sm dark:divide-neutral-800 dark:bg-matte-950">
                            {products.map((product) => (
                                <tr key={product.name}>
                                    <td className="px-8 py-5 text-matte-900 dark:text-white">{product.name}</td>
                                    <td className="px-8 py-5 text-neutral-600 dark:text-neutral-300">{product.stock}</td>
                                    <td className="px-8 py-5 text-neutral-600 dark:text-neutral-300">{product.price}</td>
                                    <td className="px-8 py-5">
                                        <Button variant="outline">Edit</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </main>
    );
}
