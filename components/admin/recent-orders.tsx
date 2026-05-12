const recentOrders = [
    { order: "#ORD-2345", customer: "John Doe", total: "৳129.00", status: "Delivered", date: "Jun 16, 2024" },
    { order: "#ORD-2344", customer: "Jane Smith", total: "৳89.00", status: "Processing", date: "Jun 16, 2024" },
    { order: "#ORD-2343", customer: "Robert Johnson", total: "৳159.00", status: "Shipped", date: "Jun 15, 2024" },
    { order: "#ORD-2342", customer: "Emily Davis", total: "৳99.00", status: "Processing", date: "Jun 15, 2024" },
    { order: "#ORD-2341", customer: "Michael Brown", total: "৳199.00", status: "Delivered", date: "Jun 14, 2024" }
];

function statusStyles(status: string) {
    const base = "inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-[0.25em] uppercase";
    switch (status) {
        case "Delivered":
            return `${base} bg-[#e7f6ed] text-[#1f9d55]`;
        case "Processing":
            return `${base} bg-[#f8f1e9] text-[#b37a3d]`;
        case "Shipped":
            return `${base} bg-[#eef4fb] text-[#4a6ead]`;
        default:
            return `${base} bg-[#f1ece5] text-[#7b7b7b]`;
    }
}

export function RecentOrders() {
    return (
        <section className="rounded-[28px] border border-[#ece7df] bg-white p-8 shadow-[0_10px_50px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#7b7b7b]">Recent orders</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#171717]">Latest activity</h3>
                </div>
                <button className="rounded-full border border-[#ece7df] bg-[#f8f5f1] px-5 py-3 text-sm text-[#171717] transition hover:bg-[#f1ece5]">
                    View all
                </button>
            </div>
            <div className="mt-8 overflow-hidden rounded-[24px] border border-[#f1ece5]">
                <table className="min-w-full border-separate border-spacing-y-3 text-left">
                    <thead className="text-xs uppercase tracking-[0.35em] text-[#7b7b7b]">
                        <tr>
                            <th className="px-6 py-4">Order</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Total</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((item) => (
                            <tr key={item.order} className="bg-white transition hover:bg-[#f8f5f1]">
                                <td className="px-6 py-5 text-sm font-semibold text-[#171717]">{item.order}</td>
                                <td className="px-6 py-5 text-sm text-[#7b7b7b]">{item.customer}</td>
                                <td className="px-6 py-5 text-sm font-semibold text-[#171717]">{item.total}</td>
                                <td className="px-6 py-5"><span className={statusStyles(item.status)}>{item.status}</span></td>
                                <td className="px-6 py-5 text-sm text-[#7b7b7b]">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
