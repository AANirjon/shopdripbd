"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ArrowRight, ArrowUpRight, CreditCard, Gift, Shield, Truck, User, Heart, Search, ShoppingBag } from "lucide-react";

const cartItems = [
    {
        id: "textured-knit-polo",
        name: "Textured Knit Polo",
        meta: "Beige • Size: M",
        price: 79,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "tailored-wide-trousers",
        name: "Tailored Wide Trousers",
        meta: "Sand • Size: 32",
        price: 99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "leather-tote-bag",
        name: "Leather Tote Bag",
        meta: "Black • One Size",
        price: 129,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
    }
];

export default function CartPage() {
    const [items, setItems] = useState(cartItems);

    const updateQuantity = (id: string, delta: number) => {
        setItems((current) =>
            current.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0;
    const tax = Number((subtotal * 0.088).toFixed(2));
    const total = subtotal + shipping + tax;

    return (
        <main className="bg-[#f8f5f1] text-[#111111]">
            <Navbar transparent />

            <section
                className="relative overflow-hidden bg-cover bg-center text-white"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1473654729523-203e25dfda10?auto=format&fit=crop&w=1200&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <div className="mx-auto relative max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-3xl space-y-6"
                    >
                        <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">Home &gt; Your Cart</p>
                        <h1 className="text-[48px] font-serif font-light leading-[0.95] tracking-[-0.03em] text-white sm:text-[64px] md:text-[72px] lg:text-[92px]">
                            Your Cart
                        </h1>
                        <p className="max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                            Review your items and proceed to checkout. You’re just one step away from timeless pieces.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
                <div className="grid gap-10 lg:grid-cols-[1.7fr_0.9fr] lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="rounded-[28px] border border-[#dad1c6] bg-white p-6 shadow-soft lg:p-8"
                    >
                        <div className="overflow-hidden rounded-[28px] border border-[#ece3d9] bg-[#faf5ef]">
                            <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b border-[#ece3d9] px-6 py-4 text-[11px] uppercase tracking-[0.35em] text-[#8b8076] sm:grid">
                                <span>Product</span>
                                <span>Price</span>
                                <span>Quantity</span>
                                <span>Total</span>
                            </div>

                            <div className="divide-y divide-[#f0e7de]">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, delay: index * 0.08 }}
                                        className="flex flex-col gap-6 px-6 py-6 sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr] sm:items-center"
                                    >
                                        <div className="flex gap-4">
                                            <div className="relative h-24 w-24 overflow-hidden rounded-[18px] bg-[#f2ece6] sm:h-28 sm:w-28">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex flex-col justify-between gap-3">
                                                <div>
                                                    <p className="text-sm font-medium text-[#111111]">{item.name}</p>
                                                    <p className="mt-3 text-[13px] text-[#7a726b]">{item.meta}</p>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-[#7a726b]">
                                                    <button className="underline decoration-[#bab0a6] underline-offset-4 transition hover:text-[#111111]">Remove</button>
                                                    <button className="underline decoration-[#bab0a6] underline-offset-4 transition hover:text-[#111111]">Move to Wishlist</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-[#55504b] sm:justify-center">
                                            <span className="sm:hidden uppercase tracking-[0.35em] text-[#8b8076]">Price</span>
                                            <span>${item.price.toFixed(2)}</span>
                                        </div>

                                        <div className="sm:flex sm:justify-center">
                                            <div className="inline-flex items-center rounded-[18px] border border-[#ece3d9] bg-[#f7f2ec] px-3 py-2 shadow-none">
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#111111] transition hover:bg-[#e6ddd3]"
                                                >
                                                    −
                                                </button>
                                                <span className="mx-4 min-w-[28px] text-center text-sm font-medium text-[#111111]">{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#111111] transition hover:bg-[#e6ddd3]"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-sm font-semibold text-[#111111] sm:justify-end">
                                            <span className="sm:hidden uppercase tracking-[0.35em] text-[#8b8076]">Total</span>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link href="/shop" className="text-sm font-medium uppercase tracking-[0.3em] text-[#111111] transition hover:text-[#5e5a55]">
                                ← Continue Shopping
                            </Link>
                        </div>
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <div className="sticky top-[140px] space-y-6 rounded-[28px] border border-[#dad1c6] bg-white p-8 shadow-soft lg:top-[110px]">
                            <div className="space-y-3">
                                <p className="text-[11px] uppercase tracking-[0.35em] text-[#85786f]">Order Summary</p>
                                <h2 className="text-2xl font-semibold text-[#111111]">ORDER SUMMARY</h2>
                            </div>

                            <div className="space-y-4 text-sm text-[#5e5a55]">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>FREE</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax (Estimated)</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="border-t border-[#ece3d9] pt-6">
                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#85786f]">Total</p>
                                        <p className="mt-2 text-3xl font-serif font-light text-[#111111]">${total.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                className="inline-flex w-full items-center justify-center rounded-[18px] bg-[#111111] px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
                            >
                                Proceed to Checkout →
                            </Link>

                            <div className="rounded-[24px] border border-[#e9e0d7] bg-[#faf5ef] px-4 py-4 text-sm text-[#5e5a55]">
                                <div className="flex items-center gap-3">
                                    <Truck className="h-5 w-5 text-[#85786f]" />
                                    <span>Free Shipping Worldwide On all orders over $100</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-3 px-1">
                                {[
                                    { label: "Visa", src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
                                    { label: "Mastercard", src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" },
                                    { label: "Amex", src: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" },
                                    { label: "Pay", src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Apple_Pay_logo.svg" }
                                ].map((card) => (
                                    <div key={card.label} className="flex h-12 items-center justify-center rounded-[18px] border border-[#ece3d9] bg-white p-2">
                                        <Image src={card.src} alt={card.label} width={74} height={24} className="object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </section>

            <section className="bg-[#ede5dc] py-12">
                <div className="mx-auto grid max-w-7xl gap-6 px-6 text-sm text-[#5e5a55] sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                    <div className="flex flex-col gap-3 rounded-[28px] border border-[#e9e0d7] bg-white/80 p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf5ef] text-[#85786f]">
                            <Truck className="h-5 w-5" />
                        </div>
                        <p className="font-semibold text-[#111111]">FREE SHIPPING</p>
                        <p className="text-[#7a726b]">Worldwide on all orders</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-[28px] border border-[#e9e0d7] bg-white/80 p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf5ef] text-[#85786f]">
                            <Gift className="h-5 w-5" />
                        </div>
                        <p className="font-semibold text-[#111111]">EASY RETURNS</p>
                        <p className="text-[#7a726b]">30-day return policy</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-[28px] border border-[#e9e0d7] bg-white/80 p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf5ef] text-[#85786f]">
                            <Shield className="h-5 w-5" />
                        </div>
                        <p className="font-semibold text-[#111111]">SECURE PAYMENT</p>
                        <p className="text-[#7a726b]">100% secure checkout</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-[28px] border border-[#e9e0d7] bg-white/80 p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf5ef] text-[#85786f]">
                            <User className="h-5 w-5" />
                        </div>
                        <p className="font-semibold text-[#111111]">CUSTOMER SUPPORT</p>
                        <p className="text-[#7a726b]">We’re here to help</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
