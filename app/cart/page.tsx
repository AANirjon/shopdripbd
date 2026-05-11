import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

export default function CartPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Your bag</p>
                    <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Cart overview</h1>
                </div>
                <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
                    <div className="space-y-6 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
                            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Empty cart</p>
                            <h2 className="mt-4 text-2xl font-semibold text-matte-900 dark:text-white">Your cart is waiting.</h2>
                            <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                                Add premium essentials to your bag and enjoy a seamless checkout flow with COD and express delivery support.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Checkout preview</p>
                        <div className="mt-6 space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>—</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="flex justify-between text-matte-900 dark:text-white">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">—</span>
                            </div>
                        </div>
                        <Button asChild className="mt-8 w-full">
                            <Link href="/checkout">Proceed to checkout</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
