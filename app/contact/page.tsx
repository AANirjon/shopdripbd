import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Contact</p>
                    <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Let's create something refined.</h1>
                </div>
                <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
                    <form className="space-y-6 rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Name</label>
                                <Input placeholder="Your name" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Email</label>
                                <Input placeholder="shopdrip@gmail.com" type="email" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Message</label>
                            <textarea rows={6} className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-matte-900 outline-none transition focus:border-matte-900 focus:ring-2 focus:ring-matte-100 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200"></textarea>
                        </div>
                        <Button type="submit">Send message</Button>
                    </form>
                    <aside className="space-y-6 rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <div>
                            <h2 className="text-2xl font-semibold text-matte-900 dark:text-white">Get in touch</h2>
                            <p className="mt-4 text-neutral-600 dark:text-neutral-300">Reach out for styling inquiries, inventory questions or collaborative projects.</p>
                        </div>
                        <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
                            <p className="font-semibold text-matte-900 dark:text-white">Phone</p>
                            <p>01963-121853</p>
                            <p className="font-semibold text-matte-900 dark:text-white">Email</p>
                            <p>shopdripbd@gmail.com</p>
                            <p className="font-semibold text-matte-900 dark:text-white">Location</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </aside>
                </div>
            </section>
            <Footer />
        </main>
    );
}
