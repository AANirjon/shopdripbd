const topProducts = [
    { name: "Minimal Knit Sweater", sold: 120, revenue: "৳4,800", initials: "MK" },
    { name: "Tailored Wide Trousers", sold: 98, revenue: "৳4,410", initials: "TW" },
    { name: "Relaxed Fit Shirt", sold: 86, revenue: "৳3,870", initials: "RF" },
    { name: "Leather Tote Bag", sold: 74, revenue: "৳3,330", initials: "LT" },
    { name: "Textured Knit Polo", sold: 64, revenue: "৳3,200", initials: "TP" }
];

export function TopProducts() {
    return (
        <section className="rounded-[28px] border border-[#ece7df] bg-white p-8 shadow-[0_10px_50px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#7b7b7b]">Top selling products</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#171717]">Best sellers</h3>
                </div>
                <button className="rounded-full border border-[#ece7df] bg-[#f8f5f1] px-4 py-3 text-sm text-[#171717] transition hover:bg-[#f1ece5]">
                    View all
                </button>
            </div>
            <div className="mt-8 space-y-5">
                {topProducts.map((product) => (
                    <div key={product.name} className="grid gap-4 rounded-[24px] border border-[#f1ece5] p-4 sm:grid-cols-[80px_1fr] sm:items-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-[20px] bg-[#f8f5f1] text-lg font-semibold text-[#171717]">
                            {product.initials}
                        </div>
                        <div className="grid gap-2">
                            <p className="text-sm uppercase tracking-[0.35em] text-[#7b7b7b]">{product.sold} sold</p>
                            <p className="text-lg font-semibold text-[#171717]">{product.name}</p>
                            <p className="text-sm text-[#7b7b7b]">{product.revenue}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
