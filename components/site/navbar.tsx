"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
    ArrowRight,
    ArrowUpRight,
    Facebook,
    Heart,
    Instagram,
    Menu,
    Search,
    ShoppingBag,
    Twitter,
    User,
    X
} from "lucide-react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
];

export function Navbar() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow =
            menuOpen || searchOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen, searchOpen]);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    const useDarkNavbar = isScrolled || pathname !== "/";
    const navbarText = useDarkNavbar ? "text-slate-900" : "text-white";

    const iconButton = `
        inline-flex items-center justify-center
        h-10 w-10
        rounded-full
        border
        transition-all duration-300
        backdrop-blur-xl
    `;

    return (
        <>
            {/* NAVBAR */}
            <header
                className={`
                    fixed inset-x-0 top-0 z-50
                    transition-all duration-500
                    ${useDarkNavbar
                        ? "bg-[#f7f3ee]/90 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
                        : "bg-transparent backdrop-blur-[6px]"
                    }
                `}
            >
                <div
                    className={`
                        mx-auto max-w-7xl
                        px-6 lg:px-10
                        transition-all duration-500
                        ${isScrolled ? "py-4" : "py-6"}
                    `}
                >
                    {/* GRID */}
                    <div className="grid grid-cols-3 items-center">

                        {/* LEFT NAV */}
                        <div className="justify-self-start">
                            <nav className="hidden lg:flex items-center gap-7">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`
                                            group relative
                                            text-[12px]
                                            uppercase
                                            tracking-[0.24em]
                                            font-normal
                                            transition-all duration-300
                                            ${navbarText}
                                        `}
                                    >
                                        <span
                                            className={`
                                                transition-opacity duration-300
                                                ${isActive(item.href)
                                                    ? "opacity-100"
                                                    : "opacity-70 group-hover:opacity-100"
                                                }
                                            `}
                                        >
                                            {item.label}
                                        </span>

                                        <span
                                            className={`
                                                absolute left-0 -bottom-1
                                                h-px w-full bg-current
                                                origin-left
                                                transition-all duration-300
                                                ${isActive(item.href)
                                                    ? "scale-x-100 opacity-100"
                                                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                                                }
                                            `}
                                        />
                                    </Link>
                                ))}
                            </nav>

                            {/* MOBILE MENU BUTTON */}
                            <button
                                onClick={() => setMenuOpen(true)}
                                className={`
                                    ${iconButton}
                                    lg:hidden
                                    ${useDarkNavbar
                                        ? "bg-white/70 border-black/10 text-black"
                                        : "bg-white/[0.04] border-white/10 text-white"
                                    }
                                `}
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                        </div>

                        {/* CENTER LOGO */}
                        <div className="justify-self-center">
                            <Link
                                href="/"
                                className={`
                                    text-[20px] sm:text-[15px]
                                    uppercase
                                    tracking-[0.28em]
                                    font-extrabold
                                    transition-all duration-300
                                    ${navbarText}
                                `}
                            >
                                SHOPDRIP
                            </Link>
                        </div>

                        {/* RIGHT ACTIONS */}
                        <div className="justify-self-end flex items-center gap-2">
                            {/* SEARCH */}
                            <button
                                onClick={() => setSearchOpen(true)}
                                className={`
                                    ${iconButton}
                                    hidden lg:inline-flex
                                    ${useDarkNavbar
                                        ? "bg-white/70 border-black/10 text-black hover:bg-white"
                                        : "bg-white/[0.04] border-white/10 text-white hover:bg-white/[0.08]"
                                    }
                                `}
                            >
                                <Search className="h-4 w-4" />
                            </button>

                            {/* WISHLIST */}
                            <Link
                                href="/wishlist"
                                className={`
                                    ${iconButton}
                                    hidden lg:inline-flex
                                    ${useDarkNavbar
                                        ? "bg-white/70 border-black/10 text-black hover:bg-white"
                                        : "bg-white/[0.04] border-white/10 text-white hover:bg-white/[0.08]"
                                    }
                                `}
                            >
                                <Heart className="h-4 w-4" />
                            </Link>

                            {/* ACCOUNT */}
                            <Link
                                href="/account"
                                className={`
                                    ${iconButton}
                                    hidden lg:inline-flex
                                    ${useDarkNavbar
                                        ? "bg-white/70 border-black/10 text-black hover:bg-white"
                                        : "bg-white/[0.04] border-white/10 text-white hover:bg-white/[0.08]"
                                    }
                                `}
                            >
                                <User className="h-4 w-4" />
                            </Link>

                            {/* CART */}
                            <Link
                                href="/cart"
                                className={`
                                    ${iconButton}
                                    relative
                                    ${useDarkNavbar
                                        ? "bg-white/70 border-black/10 text-black hover:bg-white"
                                        : "bg-white/[0.04] border-white/10 text-white hover:bg-white/[0.08]"
                                    }
                                `}
                            >
                                <ShoppingBag className="h-4 w-4" />

                                <span
                                    className="
                                        absolute -right-1 -top-1
                                        flex h-5 min-w-[20px]
                                        items-center justify-center
                                        rounded-full
                                        bg-slate-900
                                        px-1
                                        text-[10px]
                                        font-medium
                                        text-white
                                    "
                                >
                                    2
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* SEARCH OVERLAY */}
            <AnimatePresence>
                {searchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="
                            fixed inset-0 z-[60]
                            flex items-center justify-center
                            bg-black/70
                            backdrop-blur-xl
                            px-6
                        "
                    >
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="
                                relative
                                w-full max-w-4xl
                                rounded-[24px]
                                border border-black/5
                                bg-[#f8f5f1]
                                p-8 sm:p-12
                            "
                        >
                            {/* CLOSE */}
                            <button
                                onClick={() => setSearchOpen(false)}
                                className="
                                    absolute right-6 top-6
                                    inline-flex h-11 w-11
                                    items-center justify-center
                                    rounded-full
                                    border border-black/10
                                    bg-white/80
                                    transition hover:bg-white
                                "
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="max-w-2xl">
                                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                                    Search
                                </p>

                                <h2
                                    className="
                                        mt-5
                                        text-[2.4rem]
                                        sm:text-[4rem]
                                        font-light
                                        tracking-[-0.05em]
                                        leading-[0.95]
                                        text-slate-950
                                    "
                                >
                                    Discover the perfect edit.
                                </h2>

                                <p className="mt-6 text-sm leading-7 text-slate-600">
                                    Explore curated essentials,
                                    timeless silhouettes, and
                                    premium everyday fashion.
                                </p>
                            </div>

                            <form className="mt-12 flex flex-col gap-6">
                                <input
                                    type="search"
                                    placeholder="Search products, collections, styles..."
                                    className="
                                        w-full
                                        border-b border-black/10
                                        bg-transparent
                                        pb-5
                                        text-2xl
                                        font-light
                                        outline-none
                                        placeholder:text-slate-400
                                    "
                                />

                                <button
                                    type="submit"
                                    className="
                                        inline-flex w-fit items-center gap-2
                                        rounded-full
                                        bg-black
                                        px-8 py-4
                                        text-xs
                                        uppercase
                                        tracking-[0.25em]
                                        text-white
                                        transition hover:bg-black/90
                                    "
                                >
                                    Search
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="
                            fixed inset-0 z-[70]
                            bg-[#0f0f0f]
                            text-white
                        "
                    >
                        <div className="flex h-full flex-col px-6 py-6">
                            {/* TOP */}
                            <div className="flex items-center justify-between">
                                <span className="text-xs uppercase tracking-[0.35em] text-white/50">
                                    Menu
                                </span>

                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        inline-flex h-11 w-11
                                        items-center justify-center
                                        rounded-full
                                        border border-white/10
                                        bg-white/[0.04]
                                    "
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* NAV */}
                            <div className="mt-14 flex-1">
                                <nav className="flex flex-col gap-8">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() =>
                                                setMenuOpen(false)
                                            }
                                            className="
                                                group flex items-center justify-between
                                                border-b border-white/10
                                                pb-4
                                                text-[2.5rem]
                                                font-extralight
                                                tracking-[-0.04em]
                                            "
                                        >
                                            <span>{item.label}</span>

                                            <ArrowUpRight className="h-5 w-5 text-white/50 transition group-hover:text-white" />
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* BOTTOM */}
                            <div className="space-y-6 border-t border-white/10 pt-8">
                                <div
                                    className="
                                        rounded-[24px]
                                        border border-white/10
                                        bg-white/[0.04]
                                        p-6
                                    "
                                >
                                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                                        New Collection
                                    </p>

                                    <h3
                                        className="
                                            mt-4
                                            text-3xl
                                            font-light
                                            leading-tight
                                            tracking-[-0.04em]
                                        "
                                    >
                                        Timeless essentials for
                                        modern everyday elegance.
                                    </h3>

                                    <Link
                                        href="/shop"
                                        onClick={() =>
                                            setMenuOpen(false)
                                        }
                                        className="
                                            mt-6 inline-flex items-center gap-2
                                            text-xs uppercase tracking-[0.25em]
                                            text-white/80
                                        "
                                    >
                                        Explore now
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>

                                {/* SOCIALS */}
                                <div className="flex items-center gap-4 text-white/60">
                                    <Link href="#">
                                        <Instagram className="h-5 w-5" />
                                    </Link>

                                    <Link href="#">
                                        <Twitter className="h-5 w-5" />
                                    </Link>

                                    <Link href="#">
                                        <Facebook className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}