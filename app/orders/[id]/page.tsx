import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default function OrderPage({ params }: { params: any }) {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Order tracking</p>
                    <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Order #{params.id}</h1>
                    <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">Track the status of your recent order and estimated delivery time.</p>
                </div>
                <div className="rounded-[2rem] border border-neutral-200 bg-white p-12 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                    <div className="grid gap-6 sm:grid-cols-3">
                        {[
                            { label: "Placed", active: true },
                            { label: "Confirmed", active: true },
                            { label: "Out for delivery", active: false }
                        ].map((step) => (
                            <div key={step.label} className="space-y-2">
                                <div className={`h-3 w-3 rounded-full ${step.active ? "bg-matte-900" : "bg-neutral-300 dark:bg-neutral-700"}`} />
                                <p className="text-sm font-semibold text-matte-900 dark:text-white">{step.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-950">
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Estimated delivery</p>
                        <p className="mt-3 text-3xl font-semibold text-matte-900 dark:text-white">2–4 business days</p>
                        <p className="mt-4 text-neutral-600 dark:text-neutral-300">We will notify you when your order is ready for shipment.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
