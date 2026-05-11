export type Product = {
    id: string;
    name: string;
    slug: string;
    category: string;
    price: number;
    compare_at: number | null;
    label: string;
    image: string;
    description: string;
    color: string;
    sizes: string[];
    featured: boolean;
    preorder: boolean;
};

export type Category = {
    id: string;
    name: string;
    slug: string;
};

export type Testimonial = {
    id: string;
    quote: string;
    author: string;
    role: string;
};

export type EditorialCard = {
    id: string;
    title: string;
    description: string;
    image: string;
};
