export const categories = [
    { id: "1", name: "Outerwear", slug: "outerwear" },
    { id: "2", name: "Knitwear", slug: "knitwear" },
    { id: "3", name: "Essentials", slug: "essentials" },
    { id: "4", name: "Accessories", slug: "accessories" }
];

export const products = [
    {
        id: "azura-trench",
        name: "Azura Trench",
        slug: "azura-trench",
        category: "Outerwear",
        price: 129.0,
        compare_at: 158.0,
        label: "Preorder",
        image:
            "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
        description:
            "A soft drape trench coat with minimalist tailoring and tactile matte finish.",
        color: "Oyster",
        sizes: ["XS", "S", "M", "L"],
        featured: true,
        preorder: true
    },
    {
        id: "sora-knit",
        name: "Sora Knit",
        slug: "sora-knit",
        category: "Knitwear",
        price: 72.0,
        compare_at: 0,
        label: "New",
        image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
        description:
            "Streamlined elevated knit with soft lines, tailored for modern layering.",
        color: "Sable",
        sizes: ["XS", "S", "M", "L"],
        featured: true,
        preorder: false
    },
    {
        id: "nami-satin",
        name: "Nami Satin Dress",
        slug: "nami-satin",
        category: "Essentials",
        price: 84.0,
        compare_at: null,
        label: "Editor's Pick",
        image:
            "https://images.unsplash.com/photo-1520962911525-ebbc17a19d6c?auto=format&fit=crop&w=1200&q=80",
        description:
            "A modern slip dress in glazed satin with softly draped contouring.",
        color: "Sand",
        sizes: ["XS", "S", "M"],
        featured: false,
        preorder: false
    }
];

export const testimonials = [
    {
        id: "test-01",
        quote:
            "Shopdrip creates pieces that look editorial and effortless. The materials feel premium and timeless.",
        author: "Aarifa H.",
        role: "Style Curator"
    },
    {
        id: "test-02",
        quote:
            "The website experience is clean, refined and fast. Every touchpoint feels luxurious.",
        author: "Nazmul A.",
        role: "Fashion Editor"
    }
];

export const editorialCards = [
    {
        id: "edit-01",
        title: "Minimal form, maximum presence.",
        description: "Seasonless silhouettes for elegant everyday dressing.",
        image:
            "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: "edit-02",
        title: "Soft neutrals with statement details.",
        description: "A refined wardrobe for the modern quiet luxury edit.",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
    }
];
