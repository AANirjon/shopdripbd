# Shopdrip BD

Premium minimalist fashion storefront built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Key features

- App Router with server and client components
- Luxury editorial UI with mobile-first responsive design
- Product catalog, category, product detail, cart, checkout, wishlist and account pages
- Admin dashboard shell for inventory and sales management
- Supabase-ready authentication and database integration
- SEO metadata, sitemap-ready structure, and performance-first architecture

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Supabase
- Lucide icons

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and add your Supabase credentials.

3. Create your Supabase schema by running `supabase-schema.sql` in the Supabase SQL editor.

4. (Optional) Run `supabase-policies.sql` to enable recommended row-level security policies.

5. Run the development server:

```bash
npm run dev
```
