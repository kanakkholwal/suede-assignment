# Local SQLite catalog snapshot notes

This exercise contains a local snapshot of 280 active products from the staging
catalog, captured on September 15, 2026. It is not a live retail feed.

For each product, the repository retains its staging title, vendor, product
type, category, tags, public source URL, sale variants and prices, a derived
available-to-order signal, and one locally cached primary image. It also
retains every SKU-level image assignment present in staging: 1,862 assignments
reference 1,777 local 640px image copies. Variants without a staging image
assignment intentionally fall back to their product's primary image. The
snapshot uses USD throughout. Images are captured from the staging catalog's
public Shopify CDN source at export time.
It includes 2,165 uniquely identified priced variants across those products.

`staging-categories.ts` contains the complete 198-node staging category
ontology, including hierarchy, aliases, and deprecated nodes. Every active
snapshot product has an explicit category assignment in
`staging-category-assignments.ts`; a null assignment means staging left that
product unclassified. The UI uses the hierarchy so a parent category includes
its descendants.

The app queries the local SQLite database at runtime through local API routes.
It makes no remote database, catalog, or image requests. Source URLs open only
when a user explicitly chooses to research an item.

The snapshot intentionally does not include reviews, supplier cost, margin,
lead time, room type, dimensions, or material details. Those omissions are
real exercise constraints, not values to infer or fabricate.
