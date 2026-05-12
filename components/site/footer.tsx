import Link from "next/link";
import { Facebook, Instagram, Mail, Music, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#2f1f19] text-slate-100 shadow-[0_0_120px_rgba(15,23,42,0.28)]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
                    <div className="space-y-6">
                        <p className="text-3xl font-semibold uppercase tracking-[0.35em] text-amber-300 sm:text-4xl md:text-5xl">
                            Shopdrip
                        </p>
                        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                            Quiet luxury, editorial energy.
                        </h2>
                        <p className="max-w-xl text-base leading-8 text-slate-300">
                            A modern wardrobe destination shaped by tactile silhouettes, tonal neutrals, and elevated essentials for every moment.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link
                                href="https://www.facebook.com/profile.php?id=61566980369999"
                                target="_blank"
                                aria-label="Facebook"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-100 transition hover:bg-slate-700"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/shopdripbd/"
                                target="_blank"
                                aria-label="Instagram"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-100 transition hover:bg-slate-700"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://www.tiktok.com/@shopdripbd?is_from_webapp=1&sender_device=pc"
                                target="_blank"
                                aria-label="TikTok"
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-100 transition hover:bg-slate-700"
                            >
                                <Music className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Shop</p>
                        <Link href="/shop" className="text-base text-slate-100 transition hover:text-white">
                            Collections
                        </Link>
                        <Link href="/about" className="text-base text-slate-100 transition hover:text-white">
                            About
                        </Link>
                        <Link href="/contact" className="text-base text-slate-100 transition hover:text-white">
                            Contact
                        </Link>
                    </div>

                    <div className="grid gap-5">
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Customer Care</p>
                        <Link href="/faq" className="text-base text-slate-100 transition hover:text-white">
                            FAQ
                        </Link>
                        <Link href="/checkout" className="text-base text-slate-100 transition hover:text-white">
                            Checkout
                        </Link>
                        <Link href="/wishlist" className="text-base text-slate-100 transition hover:text-white">
                            Wishlist
                        </Link>
                    </div>

                    <div className="grid gap-5">
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Contact</p>
                        <a href="tel:01963121853" className="flex items-center gap-3 text-base text-slate-100 transition hover:text-white">
                            <Phone className="h-4 w-4 text-slate-400" />
                            01963-121853
                        </a>
                        <a href="mailto:shopdripbd@gmail.com" className="flex items-center gap-3 text-base text-slate-100 transition hover:text-white">
                            <Mail className="h-4 w-4 text-slate-400" />
                            shopdripbd@gmail.com
                        </a>
                        <p className="text-base text-slate-300">Dhaka, Bangladesh</p>
                    </div>
                </div>

                <div className="mt-14 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Shopdrip. Quiet wardrobe edits for the modern life.</p>
                    <p className="mt-4 sm:mt-0">Designed with precision, tailored for every screen.</p>
                </div>
            </div>
        </footer>
    );
}
