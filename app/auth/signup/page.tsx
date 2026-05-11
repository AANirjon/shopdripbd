import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default function SignupPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">New account</p>
                        <h1 className="text-5xl font-semibold text-matte-900 dark:text-white">Create your Shopdrip profile.</h1>
                        <p className="max-w-lg text-neutral-600 dark:text-neutral-300">Join for an elevated shopping experience, save favorites, and track all purchases in one place.</p>
                    </div>
                    <div className="rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                        <form className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Name</label>
                                <Input placeholder="Your name" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Email</label>
                                <Input placeholder="you@example.com" type="email" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Password</label>
                                <Input placeholder="••••••••" type="password" />
                            </div>
                            <Button type="submit" className="w-full">Create account</Button>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                Already registered? <Link href="/auth/login" className="text-matte-900 hover:underline dark:text-white">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
