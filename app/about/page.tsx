import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr]">
                    <div className="space-y-8 rounded-[2rem] border border-neutral-200 bg-white p-12 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Brand story</p>
                        <h1 className="text-5xl font-semibold text-matte-900 dark:text-white">Minimal luxury for modern domestic wardrobes.</h1>
                        <p className="max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
                            Shopdrip is a Bangladesh-based fashion label that blends Korean and Japanese minimalism with premium editorial styling. We focus on elevated essentials, soft neutrals and quiet confidence across every collection.
                        </p>
                    </div>
                    <div className="space-y-8 rounded-[2rem] border border-neutral-200 bg-white p-12 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <div>
                            <h2 className="text-2xl font-semibold text-matte-900 dark:text-white">Our design ethos</h2>
                            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                                Every piece is conceived with mindful simplicity, luxurious texture, and elevated silhouette. We champion modern minimalism without losing warmth, softness or attention to detail.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-matte-900 dark:text-white">Sustainability</h2>
                            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                                We prioritize responsible sourcing, thoughtful production and timeless design to ensure each item remains essential season after season.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
