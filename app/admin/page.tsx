import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

const cards = [
    { title: "Revenue", value: "৳154K", delta: "+18%" },
    { title: "Orders", value: "1,248", delta: "+12%" },
    { title: "Inventory", value: "86% stocked", delta: "Stable" },
    { title: "New customers", value: "312", delta: "+9%" }
];

export default function AdminDashboardPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Admin dashboard</p>
                        <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Operations at a glance</h1>
                    </div>
                    <Button asChild>
                        <Link href="/admin/products">Manage products</Link>
                    </Button>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <div key={card.title} className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{card.title}</p>
                            <p className="mt-5 text-4xl font-semibold text-matte-900 dark:text-white">{card.value}</p>
                            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{card.delta}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
                    <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Recent orders</p>
                                <h2 className="mt-3 text-3xl font-semibold text-matte-900 dark:text-white">Latest activity</h2>
                            </div>
                            <Button variant="outline">View all</Button>
                        </div>
                        <div className="mt-8 space-y-4">
                            {[
                                { id: "SO-1287", status: "Confirmed", amount: "৳9,400" },
                                { id: "SO-1283", status: "Packed", amount: "৳5,800" },
                                { id: "SO-1279", status: "Delivered", amount: "৳12,200" }
                            ].map((item) => (
                                <div key={item.id} className="flex items-center justify-between rounded-3xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950">
                                    <div>
                                        <p className="font-semibold text-matte-900 dark:text-white">{item.id}</p>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.status}</p>
                                    </div>
                                    <span className="font-semibold text-matte-900 dark:text-white">{item.amount}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Inventory alerts</p>
                        <div className="mt-8 space-y-4">
                            {[
                                { label: "Nami Satin Dress", stock: "Low stock" },
                                { label: "Azura Trench", stock: "10 left" },
                                { label: "Sora Knit", stock: "Restock soon" }
                            ].map((item) => (
                                <div key={item.label} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950">
                                    <p className="font-semibold text-matte-900 dark:text-white">{item.label}</p>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.stock}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </main>
    );
}
