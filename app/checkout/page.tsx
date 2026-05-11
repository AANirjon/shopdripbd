"use client";

import { useForm } from "react-hook-form";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type CheckoutFormValues = {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postcode: string;
    payment: string;
};

export default function CheckoutPage() {
    const { register, handleSubmit } = useForm<CheckoutFormValues>({
        defaultValues: {
            payment: "COD"
        }
    });

    const onSubmit = (data: CheckoutFormValues) => {
        console.log("Checkout payload", data);
    };

    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Checkout</p>
                    <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Complete your order</h1>
                </div>
                <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Full name</label>
                                <Input {...register("name", { required: true })} placeholder="Your name" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Email address</label>
                                <Input {...register("email", { required: true })} placeholder="you@example.com" type="email" />
                            </div>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Phone</label>
                                <Input {...register("phone", { required: true })} placeholder="01963-121853" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Payment method</label>
                                <select {...register("payment")} className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-matte-900 outline-none transition focus:border-matte-900 focus:ring-2 focus:ring-matte-100 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200">
                                    <option value="COD">Cash on Delivery</option>
                                    <option value="ONLINE">Online payment</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Shipping address</label>
                            <Input {...register("address", { required: true })} placeholder="Street, house, floor" />
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">City</label>
                                <Input {...register("city", { required: true })} placeholder="Dhaka" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Postal code</label>
                                <Input {...register("postcode", { required: true })} placeholder="1000" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Country</label>
                                <Input value="Bangladesh" readOnly className="cursor-not-allowed" />
                            </div>
                        </div>
                        <Button type="submit" className="w-full">Confirm order</Button>
                    </form>
                    <aside className="space-y-6 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Order summary</p>
                            <p className="mt-4 text-3xl font-semibold text-matte-900 dark:text-white">Premium service, effortless checkout</p>
                        </div>
                        <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
                            <div className="flex justify-between">
                                <span>Selected items</span>
                                <span>3</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-semibold text-matte-900 dark:text-white">
                                <span>Total</span>
                                <span>৳12,800</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
            <Footer />
        </main>
    );
}
