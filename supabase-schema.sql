-- Supabase SQL schema for Shopdrip BD
-- Run this in the Supabase SQL editor in the `public` schema.

create extension if not exists "pgcrypto";

create type order_status as enum (
  'pending',
  'confirmed',
  'shipped',
  'delivered',
  'cancelled',
  'returned'
);

create type payment_method as enum (
  'cod',
  'online'
);

create type coupon_type as enum (
  'percentage',
  'amount'
);

create type user_role as enum (
  'customer',
  'admin'
);

create table users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid unique references auth.users(id),
  email text not null unique,
  name text,
  role user_role not null default 'customer',
  phone text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table addresses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  label text not null,
  line1 text not null,
  line2 text,
  city text not null,
  postcode text not null,
  country text not null default 'Bangladesh',
  phone text,
  created_at timestamptz not null default now()
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  description text,
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  short_description text,
  price numeric(10,2) not null,
  currency text not null default 'BDT',
  featured boolean not null default false,
  hero_image_url text,
  gallery jsonb,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  sku text unique,
  name text,
  price numeric(10,2) not null,
  compare_at_price numeric(10,2),
  image_url text,
  attributes jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table inventory (
  id uuid primary key default gen_random_uuid(),
  product_variant_id uuid not null references product_variants(id) on delete cascade,
  stock integer not null default 0,
  restock_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_categories (
  product_id uuid not null references products(id) on delete cascade,
  category_id uuid not null references categories(id) on delete cascade,
  primary key (product_id, category_id)
);

create table related_products (
  product_id uuid not null references products(id) on delete cascade,
  related_product_id uuid not null references products(id) on delete cascade,
  relationship_type text default 'similar',
  primary key (product_id, related_product_id)
);

create table coupons (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  type coupon_type not null default 'percentage',
  value numeric(10,2) not null,
  minimum_order_amount numeric(10,2) default 0,
  starts_at timestamptz,
  expires_at timestamptz,
  usage_limit integer default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete restrict,
  shipping_address_id uuid references addresses(id) on delete set null,
  coupon_id uuid references coupons(id) on delete set null,
  status order_status not null default 'pending',
  payment_method payment_method not null default 'online',
  subtotal numeric(10,2) not null,
  shipping_fee numeric(10,2) not null default 0,
  discount numeric(10,2) not null default 0,
  total numeric(10,2) not null,
  placed_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id) on delete restrict,
  product_variant_id uuid references product_variants(id) on delete restrict,
  quantity integer not null default 1,
  unit_price numeric(10,2) not null,
  total_price numeric(10,2) not null,
  created_at timestamptz not null default now()
);

create table cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  product_id uuid not null references products(id) on delete restrict,
  product_variant_id uuid references product_variants(id) on delete restrict,
  quantity integer not null default 1,
  added_at timestamptz not null default now(),
  unique (user_id, product_variant_id)
);

create table wishlist_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  product_id uuid not null references products(id) on delete restrict,
  added_at timestamptz not null default now(),
  unique (user_id, product_id)
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete set null,
  product_id uuid not null references products(id) on delete cascade,
  rating smallint not null check (rating between 1 and 5),
  title text,
  comment text,
  approved boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table banners (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  image_url text,
  target_url text,
  active boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_products_slug on products(slug);
create index idx_categories_slug on categories(slug);
create index idx_orders_user_id on orders(user_id);
create index idx_cart_items_user_id on cart_items(user_id);
create index idx_wishlist_items_user_id on wishlist_items(user_id);
create index idx_reviews_product_id on reviews(product_id);
