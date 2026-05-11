import Image from "next/image";

const reels = [
    {
        id: "reel-01",
        title: "Soft tonal styling",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "reel-02",
        title: "Light layering",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "reel-03",
        title: "Contemporary essentials",
        image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=900&q=80"
    }
];

export function InstagramGrid() {
    return (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <div className="mb-12">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Instagram edit</p>
                <h2 className="mt-4 text-4xl font-semibold text-matte-900 dark:text-white">Shop the story behind the feed.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
                {reels.map((item) => (
                    <article key={item.id} className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-soft transition hover:shadow-elevated dark:border-neutral-800 dark:bg-matte-950">
                        <div className="relative h-96">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">{item.title}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
