import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Page not found</h1>
        <p className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-300">The page you are looking for doesn’t exist. Return to the shop to continue browsing premium fashion pieces.</p>
        <Button asChild className="mt-10">
          <Link href="/shop">Back to shop</Link>
        </Button>
      </section>
      <Footer />
    </main>
  );
}
