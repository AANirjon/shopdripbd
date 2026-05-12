"use client";

import Image from "next/image";
import { Navbar } from "@components/site/navbar";
import { Footer } from "@components/site/footer";
import { ShopProductGrid } from "@components/shop/ShopProductGrid";
import { ShopEmptyState } from "@components/shop/ShopEmptyState";
import { LoadMoreSection } from "@components/shop/LoadMoreSection";
import { ShopSidebar } from "@components/shop/ShopSidebar";
import { ShopMobileFilter } from "@components/shop/ShopMobileFilter";
import { ShopProvider, useShop } from "@lib/shop-context";

function ShopContent() {
    const { visibleProducts, filteredCount } = useShop();

    return (
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
            <ShopMobileFilter />

            <div className="mt-10 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
                <ShopSidebar />

                <div className="space-y-10">
                    {filteredCount === 0 ? <ShopEmptyState /> : <ShopProductGrid products={visibleProducts} />}
                    <LoadMoreSection />
                </div>
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <main className="bg-[#f8f5f1] text-[#111111]">
            <Navbar />

            <section className="bg-[#f8f5f1] pt-[120px] pb-[60px] lg:pt-[160px] lg:pb-[90px]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:hidden relative overflow-hidden rounded-[28px] border border-neutral-200 bg-[#faf5ef] w-full h-[360px] sm:h-[420px]">
                        <div className="absolute inset-0">
                            <Image
                                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80"
                                alt="Hero background image"
                                fill
                                className="object-cover blur-sm"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/10 to-transparent" />
                        </div>

                        <div className="relative z-10 px-6 pt-8 pb-10 text-white sm:px-8 sm:pt-10 sm:pb-12">
                            <p className="text-[10px] uppercase tracking-[0.55em] text-white/80">Curated Collection</p>
                            <h1 className="mt-4 text-[34px] font-serif font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[40px]">
                                Modern Essentials For Everyday Elegance.
                            </h1>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">
                                Discover timeless silhouettes, refined tailoring, and elevated essentials curated for the modern wardrobe.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.55em] text-neutral-600">Curated Collection</p>
                            <h1 className="mt-6 max-w-[900px] text-[42px] font-serif font-light leading-[0.92] tracking-[-0.03em] text-[#111111] sm:text-[48px] md:text-[64px] lg:text-[84px]">
                                Modern Essentials For Everyday Elegance.
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
                                Discover timeless silhouettes, refined tailoring, and elevated essentials curated for the modern wardrobe.
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-[#faf5ef] p-6 shadow-soft lg:p-8">
                            <Image
                                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
                                alt="Editorial still life"
                                width={710}
                                height={500}
                                className="relative h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <ShopProvider>
                <ShopContent />
            </ShopProvider>

            <Footer />
        </main>
    );
}
