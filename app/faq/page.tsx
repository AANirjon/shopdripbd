import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const faqs = [
    {
        question: "Do you support Cash on Delivery?",
        answer: "Yes, COD is available for orders across Bangladesh. You can select it during checkout."
    },
    {
        question: "How can I request a preorder item?",
        answer: "Preorder items are highlighted on product pages. Add them to your bag and complete checkout to reserve your order."
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns within 7 days on unworn products. Contact customer support for a return request."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Currently we ship within Bangladesh only. International fulfillment is coming soon."
    }
];

export default function FAQPage() {
    return (
        <main>
            <Navbar />
            <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">FAQ</p>
                    <h1 className="mt-4 text-5xl font-semibold text-matte-900 dark:text-white">Everything you need to know.</h1>
                </div>
                <div className="space-y-6">
                    {faqs.map((item) => (
                        <details key={item.question} className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft dark:border-neutral-800 dark:bg-matte-950">
                            <summary className="cursor-pointer text-xl font-semibold text-matte-900 dark:text-white">{item.question}</summary>
                            <p className="mt-4 text-neutral-600 dark:text-neutral-300">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
