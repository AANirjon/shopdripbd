import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Wishlist</p>
                    <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Your curated edit.</h1>
                </div>
                <div className="rounded-[2rem] border border-neutral-200 bg-white p-16 text-center shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                    <p className="text-xl font-semibold text-matte-900 dark:text-white">Your wishlist is empty.</p>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-300">Save pieces you love and return later for an effortless checkout.</p>
                    <Button asChild className="mt-10">
                        <Link href="/shop">Browse pieces</Link>
                    </Button>
                </div>
            </section>
            <Footer />
        </main>
    );
}
