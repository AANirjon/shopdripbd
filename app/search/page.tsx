import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Search</p>
                    <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Find your next signature piece.</h1>
                </div>
                <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                    <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                        <Input placeholder="Search by style, silhouette, or collection" />
                        <Button>Search</Button>
                    </div>
                </div>
                <div className="mt-16 rounded-[2rem] border border-neutral-200 bg-white p-12 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Quick picks</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {["trench", "minimal knitwear", "monochrome", "preorder", "soft tailoring"].map((term) => (
                            <span key={term} className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-matte-900 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200">
                                {term}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
