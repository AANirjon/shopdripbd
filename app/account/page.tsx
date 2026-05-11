import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default function AccountPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Account</p>
                    <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Your dashboard</h1>
                    <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">View your orders, saved items and account preferences in one premium place.</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {[
                        { title: "Orders", subtitle: "Track recent purchases.", href: "/orders/track" },
                        { title: "Wishlist", subtitle: "Saved favorites for later.", href: "/wishlist" },
                        { title: "Profile", subtitle: "Update your details.", href: "/auth/login" }
                    ].map((card) => (
                        <Link key={card.title} href={card.href} className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft transition hover:border-matte-900 dark:border-neutral-800 dark:bg-matte-950">
                            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{card.title}</p>
                            <p className="mt-4 text-lg font-semibold text-matte-900 dark:text-white">{card.subtitle}</p>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
