-- Supabase RLS policies for Shopdrip BD
-- Run this after creating tables with supabase-schema.sql.

-- Enable row-level security on tables
alter table users enable row level security;
alter table addresses enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table cart_items enable row level security;
alter table wishlist_items enable row level security;
alter table reviews enable row level security;

-- Users can read and update their own profile
create policy "Users can select their own profile"
  on users for select
  using (auth.uid() = auth_id);

create policy "Users can update their own profile"
  on users for update
  using (auth.uid() = auth_id);

create policy "Users can insert profile"
  on users for insert
  with check (auth.uid() = auth_id);

-- Addresses belong to users
create policy "Users can select own addresses"
  on addresses for select
  using (auth.uid() = user_id);

create policy "Users can insert own addresses"
  on addresses for insert
  with check (auth.uid() = user_id);

create policy "Users can update own addresses"
  on addresses for update
  using (auth.uid() = user_id);

create policy "Users can delete own addresses"
  on addresses for delete
  using (auth.uid() = user_id);

-- Orders belong to users
create policy "Users can select own orders"
  on orders for select
  using (auth.uid() = user_id);

create policy "Users can insert orders"
  on orders for insert
  with check (auth.uid() = user_id);

create policy "Users can update own orders"
  on orders for update
  using (auth.uid() = user_id);

-- Order items are accessible through order ownership
create policy "Users can select own order items"
  on order_items for select
  using (order_id in (select id from orders where user_id = auth.uid()));

-- Cart items belong to users
create policy "Users can select own cart items"
  on cart_items for select
  using (auth.uid() = user_id);

create policy "Users can insert own cart items"
  on cart_items for insert
  with check (auth.uid() = user_id);

create policy "Users can update own cart items"
  on cart_items for update
  using (auth.uid() = user_id);

create policy "Users can delete own cart items"
  on cart_items for delete
  using (auth.uid() = user_id);

-- Wishlist items belong to users
create policy "Users can select own wishlist items"
  on wishlist_items for select
  using (auth.uid() = user_id);

create policy "Users can insert own wishlist items"
  on wishlist_items for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own wishlist items"
  on wishlist_items for delete
  using (auth.uid() = user_id);

-- Reviews belong to users
create policy "Users can select own reviews"
  on reviews for select
  using (auth.uid() = user_id);

create policy "Users can insert reviews"
  on reviews for insert
  with check (auth.uid() = user_id);

create policy "Users can update own reviews"
  on reviews for update
  using (auth.uid() = user_id);

create policy "Users can delete own reviews"
  on reviews for delete
  using (auth.uid() = user_id);

-- Public read access for catalog and marketing data
create policy "Public select on products"
  on products for select
  using (true);

create policy "Public select on categories"
  on categories for select
  using (true);

create policy "Public select on product_variants"
  on product_variants for select
  using (true);

create policy "Public select on inventory"
  on inventory for select
  using (true);

create policy "Public select on coupons"
  on coupons for select
  using (true);

create policy "Public select on banners"
  on banners for select
  using (true);

create policy "Public select on related_products"
  on related_products for select
  using (true);

create policy "Public select on product_categories"
  on product_categories for select
  using (true);
