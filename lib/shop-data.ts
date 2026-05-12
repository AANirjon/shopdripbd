export const categories = [
    { id: "1", name: "Outerwear", slug: "outerwear" },
    { id: "2", name: "Knitwear", slug: "knitwear" },
    { id: "3", name: "Dresses", slug: "dresses" },
    { id: "4", name: "Accessories", slug: "accessories" },
    { id: "5", name: "Footwear", slug: "footwear" },
    { id: "6", name: "Bags", slug: "bags" },
    { id: "7", name: "Essentials", slug: "essentials" }
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
        category: "Dresses",
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
    },
    {
        id: "linen-utility-shirt",
        name: "Linen Utility Shirt",
        slug: "linen-utility-shirt",
        category: "Essentials",
        price: 98.0,
        compare_at: 0,
        label: "New",
        image:
            "https://images.unsplash.com/photo-1531834204908-82f8cfb51d45?auto=format&fit=crop&w=1200&q=80",
        description:
            "A relaxed linen shirt with clean lines and a refined drape.",
        color: "Sand",
        sizes: ["S", "M", "L", "XL"],
        featured: false,
        preorder: false
    },
    {
        id: "pleated-trouser",
        name: "Pleated Trouser",
        slug: "pleated-trouser",
        category: "Essentials",
        price: 89.0,
        compare_at: 0,
        label: "Best Seller",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
        description:
            "Tailored wide-leg trousers in a sophisticated neutral palette.",
        color: "Oat",
        sizes: ["S", "M", "L"],
        featured: true,
        preorder: false
    },
    {
        id: "canvas-tote",
        name: "Washed Canvas Tote",
        slug: "canvas-tote",
        category: "Bags",
        price: 129.0,
        compare_at: 0,
        label: "New",
        image:
            "https://images.unsplash.com/photo-1526632506761-4b99f5d38615?auto=format&fit=crop&w=1200&q=80",
        description:
            "A structured canvas tote with polished leather details.",
        color: "Taupe",
        sizes: [],
        featured: false,
        preorder: false
    },
    {
        id: "leather-loafer",
        name: "Leather Loafer",
        slug: "leather-loafer",
        category: "Footwear",
        price: 199.0,
        compare_at: 0,
        label: "Best Seller",
        image:
            "https://images.unsplash.com/photo-1516707570268-9c881cb8cd5d?auto=format&fit=crop&w=1200&q=80",
        description:
            "Minimal leather loafers with a refined silhouette and soft leather lining.",
        color: "Black",
        sizes: ["7", "8", "9", "10"],
        featured: true,
        preorder: false
    },
    {
        id: "soft-silk-blouse",
        name: "Soft Silk Blouse",
        slug: "soft-silk-blouse",
        category: "Dresses",
        price: 138.0,
        compare_at: 0,
        label: "New",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
        description:
            "A draped silk blouse with a whisper-soft finish that layers beautifully.",
        color: "Ivory",
        sizes: ["XS", "S", "M"],
        featured: false,
        preorder: false
    },
    {
        id: "cargo-jacket",
        name: "Modern Cargo Jacket",
        slug: "cargo-jacket",
        category: "Outerwear",
        price: 169.0,
        compare_at: 0,
        label: "Best Seller",
        image:
            "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80",
        description:
            "A refined cargo jacket with elevated tailoring and matte hardware.",
        color: "Khaki",
        sizes: ["S", "M", "L"],
        featured: true,
        preorder: false
    },
    {
        id: "minimal-tee",
        name: "Minimal Cotton Tee",
        slug: "minimal-tee",
        category: "Essentials",
        price: 39.0,
        compare_at: 0,
        label: "New",
        image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
        description:
            "A soft jersey tee with a clean neckline and relaxed fit.",
        color: "Bone",
        sizes: ["XS", "S", "M", "L"],
        featured: false,
        preorder: false
    },
    {
        id: "studio-wool-coat",
        name: "Studio Wool Coat",
        slug: "studio-wool-coat",
        category: "Outerwear",
        price: 239.0,
        compare_at: 0,
        label: "Editor's Pick",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
        description:
            "A timeless wool coat with sculptural shoulders and a clean finish.",
        color: "Stone",
        sizes: ["S", "M", "L"],
        featured: true,
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
