import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-white py-16 dark:border-neutral-800 dark:bg-matte-900">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 text-neutral-700 dark:text-neutral-300 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">Shopdrip</p>
                        <p className="max-w-sm text-base leading-7">
                            A minimalist luxury fashion destination for modern wardrobes, inspired by Korean and Japanese editorial aesthetics.
                        </p>
                        <div className="flex gap-3 text-neutral-600 dark:text-neutral-300">
                            <Link href="https://www.facebook.com/profile.php?id=61566980369999" target="_blank" aria-label="Facebook">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-xs text-neutral-700">F</span>
                            </Link>
                            <Link href="https://www.instagram.com/shopdripbd/" target="_blank" aria-label="Instagram">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-xs text-neutral-700">I</span>
                            </Link>
                            <Link href="https://www.tiktok.com/@shopdripbd?is_from_webapp=1&sender_device=pc" target="_blank" aria-label="TikTok">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-xs text-neutral-700">T</span>
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">Customer Care</p>
                        <Link href="/faq" className="text-base hover:text-matte-900 dark:hover:text-white">FAQ</Link>
                        <Link href="/contact" className="text-base hover:text-matte-900 dark:hover:text-white">Contact</Link>
                        <Link href="/checkout" className="text-base hover:text-matte-900 dark:hover:text-white">Checkout</Link>
                    </div>

                    <div className="grid gap-4">
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">Contact</p>
                        <a href="tel:01963121853" className="flex items-center gap-2 text-base hover:text-matte-900 dark:hover:text-white">
                            <span aria-hidden="true">📞</span> 01963-121853
                        </a>
                        <a href="mailto:shopdripbd@gmail.com" className="flex items-center gap-2 text-base hover:text-matte-900 dark:hover:text-white">
                            <span aria-hidden="true">✉️</span> shopdripbd@gmail.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-neutral-200 pt-8 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                    <p>© {new Date().getFullYear()} Shopdrip. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
