create table schema_migrations (id text primary key);
create table catalog_meta (key text primary key, value text not null);
create table categories (
  id integer primary key,
  slug text not null unique,
  name text not null,
  parent_id integer references categories(id),
  level integer not null check (level >= 1),
  path text not null unique,
  status text not null check (status in ('active', 'deprecated')),
  merged_into_id integer references categories(id)
);
create table category_aliases (
  category_id integer not null references categories(id) on delete cascade,
  alias text not null,
  primary key (category_id, alias)
);
create table products (
  id text primary key,
  name text not null,
  brand text not null,
  product_type text not null,
  source_category_label text not null,
  source_url text not null,
  description text not null,
  availability_status text not null check (availability_status in ('in_stock', 'backorder', 'unknown')),
  in_stock_variant_count integer not null check (in_stock_variant_count >= 0),
  material text,
  width_in real,
  depth_in real,
  height_in real,
  lead_time_min_weeks integer,
  lead_time_max_weeks integer,
  margin_percent real,
  price_confidence text not null check (price_confidence in ('verified', 'unknown', 'exercise')),
  availability_confidence text not null check (availability_confidence in ('verified', 'unknown', 'exercise')),
  lead_time_confidence text not null check (lead_time_confidence in ('verified', 'unknown', 'exercise')),
  margin_confidence text not null check (margin_confidence in ('verified', 'unknown', 'exercise'))
);
create table product_categories (
  product_id text not null references products(id) on delete cascade,
  category_id integer not null references categories(id),
  position integer not null default 0,
  primary key (product_id, category_id)
);
create table tags (id integer primary key, slug text not null unique, label text not null unique);
create table product_tags (
  product_id text not null references products(id) on delete cascade,
  tag_id integer not null references tags(id),
  primary key (product_id, tag_id)
);
create table variants (
  id text primary key,
  product_id text not null references products(id) on delete cascade,
  label text not null,
  price_cents integer not null check (price_cents >= 0),
  available integer not null check (available in (0, 1)),
  position integer not null check (position >= 0)
);
create table product_images (
  id integer primary key,
  product_id text not null references products(id) on delete cascade,
  variant_id text references variants(id) on delete cascade,
  local_path text not null,
  alt_text text not null,
  is_primary integer not null default 0 check (is_primary in (0, 1)),
  position integer not null default 0 check (position >= 0),
  check (variant_id is null or is_primary = 0)
);
create unique index product_images_one_primary_per_product on product_images(product_id) where variant_id is null and is_primary = 1;
create unique index product_images_one_variant_assignment on product_images(variant_id) where variant_id is not null;
create index variants_product_price_availability on variants(product_id, price_cents, available);
create index products_brand on products(brand collate nocase);
create index product_categories_category_product on product_categories(category_id, product_id);
create index product_images_variant on product_images(variant_id);
create virtual table catalog_search using fts5(product_id unindexed, name, brand, product_type, category_names, tag_names, tokenize='unicode61 remove_diacritics 2');
