# Suede Take-Home: From Catalog to Room

We're excited to move on to the next step of the interview process.

We picked this project because it brings together two real problems we want to solve at Suede: helping designers find the right furniture and helping clients understand how it will actually fit in their homes.

## The goal

Build a connected experience where a designer can find furniture for a room, lay it out, and help their client understand its scale.

Start with this Catalog Lab app. Choose one meaningful sourcing improvement, then connect it to a floor planner. These are two parts of one project.

Plan on **6–8 hours total**, including setup, reading the research, building, your write-up, and a short recording. We'll pay **$150 total** for the combined exercise. Please send everything back within **seven days of receiving the assignment**.

## Why

Our designers serve everyday clients: a friend furnishing her first apartment, a follower redoing her living room, someone moving into a new home.

Many of our designers have no formal design training. They bring the taste and the relationships. We bring the infrastructure around them: trade pricing, sourcing, client presentations, ordering, and training.

Today, finding something worth recommending takes work. A designer might need a sofa with a particular silhouette, within a budget, that fits a narrow room. The catalog has products, but it doesn't always help them make that decision.

And neither side can really see the space inside Suede.

A client might send a floor plan as a photo, PDF, sketch, or listing image, but it sits as an attachment. The designer can't easily show where things go or check whether they fit. The client sees an 84-inch sofa on a product page and has to imagine what that means in their actual room.

The most common reason our clients return furniture is that it doesn't fit the way they expected. That's happened with sofas, tables, lamps, shelves, and more.

We want to help designers make better recommendations and clients feel confident about what they're buying.

## What you start with

This repository includes a working Catalog and saved-product Library, product data and local images, Suede's visual language, and [a fictional customer-interview packet](docs/customer-interviews.md) describing sourcing problems.

For the room, start with this exact client message:

> “It’s 12 by 15, ceilings are 8 and a half feet, two windows on the long wall, door’s in the corner by the kitchen, radiator under the left window.”

Think about what you can safely infer, what you can't, and how you'd handle the uncertainty.

## The project

### 1. Help the designer find something worth recommending

Read the customer-interview packet and choose one sourcing problem to improve.

Make a working change that helps a designer get from a client's needs to a small selection of products for this room. You could focus on search, comparing alternatives, shortlisting, or making missing information easier to understand. The choice is yours.

Explain why you picked that problem. You don't need to address every interview or redesign the entire catalog.

### 2. Help the designer and client understand those products in the room

Build a floor planner using a small selection of catalog products. Connect it to the sourcing experience so the designer can move from considering products to seeing them in the room.

The designer needs to lay out the room accurately and recognize when something won't work. They may still be learning the rules a trained designer carries in their head: walkway widths, rug sizes, furniture spacing, or whether a piece blocks a door.

The client may never have read a floor plan. They need to understand what the furniture's size and placement will feel like before they buy it.

Exactly how you solve that is up to you. We're looking for one moment that makes someone say: “Oh, it's THAT big.” Or: “Oh, that was so easy.”

### One rule: be honest about accuracy

A beautiful visualization that's six inches off can cause exactly the returns we're trying to prevent.

Use consistent scale and units. Preserve the measurements you're given, and make assumptions and missing measurements visible.

The catalog doesn't include dimensions. You can add real or synthetic values for the products you use; clearly label their source and whether they are synthetic or verified.

Don't present an uncertain fit as a verified one. Asking someone to enter or confirm a measurement is a valid solution.

## Scope and time

A focused experience for one room and a handful of products is enough. Automated image interpretation, 3D rendering, and support for arbitrary rooms aren't required.

Budget roughly 5–6 hours for setup, research, and building, and 1–2 hours for the write-up and recording. Keep a rough count and stop within the overall 6–8 hours. Explain what you'd do next.

We care about your judgment, the coherence of the experience, and whether it works.

## Deliverables

- The repository, with instructions to run it.
- A short screen recording showing the full workflow.
- A write-up of about two pages. A `DECISIONS.md` in your repo is fine.

Please cover:

- What you prioritized from the research and why.
- What you built, what you cut, and the important tradeoffs.
- How you handled measurements, assumptions, and missing data.
- How you'd turn a photographed sketch, listing floor plan, photo, or similar input into an accurate room.
- What you'd validate or build with more time.
- How this could grow into a Suede feature for designer training and client presentations.
- Your approximate time spent and how you used AI tools.

## Practical details

The starter uses Next.js, React, TypeScript, and Tailwind. You're welcome to use other tools or a different stack while building on the supplied data and assets.

Use AI tools the way you would on the job. If you call a paid API, keep a way for the core experience to run without a key.

We'll pay the **$150 total within five business days of submission**, and the submitted code will belong to Suede.

We're excited to see what you come up with! Please reach out with questions at any point.

—Ali

## Run it locally

The starter is local-only, but it is not a static site: a local Next.js server queries a checked-in SQLite catalog and stores Library changes in a local runtime copy.

Use Node 24 LTS (supported minimum: Node `>=22.13.0`) and pnpm `11.1.1`. Docker, Supabase, database credentials, an `.env` file, a separate SQLite installation, and an account are not required.

If the `corepack` command is unavailable in your Node installation, install it once with `npm install --global corepack`. Corepack reads the repository's pinned pnpm version.

From the repository root:

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm db:check
pnpm dev
```

Then open [http://localhost:3000/catalog](http://localhost:3000/catalog).

An internet connection may be needed for the one-time Node/package-manager setup and dependency installation. After the tools and dependencies are installed, the application, catalog data, and product images run locally. The app makes no remote catalog, image, account, or credential request at runtime.

Useful optional checks:

```sh
pnpm test
pnpm lint
pnpm build
```

## How the local database works

`data/catalog-lab-interview.sqlite` is the committed, immutable seed template. The server copies it to the gitignored `.catalog-lab-interview/runtime.sqlite` when it first needs a mutable database. Your first Library request establishes an anonymous local workspace cookie; saves and collections then persist in the runtime copy for that browser workspace.

```sh
pnpm db:check
pnpm db:reset
```

After pulling a schema change, run `pnpm db:reset` once. On Windows, stop the dev server first: Windows will not delete a database file another process has open.

`pnpm db:check` verifies the committed snapshot, including integrity, foreign keys, counts, local image paths, and the search index. `pnpm db:reset` deterministically rebuilds the template and deletes the runtime copy, so it also deletes local saves and collections. You can leave the local server running: it reconnects to the fresh database on the next request. Reload the page to see the reset state. A SQLite viewer can be useful for exploration, but it is entirely optional.

The normalized database includes products, variants, product images, categories and tags with their bridge tables, an FTS5 search index, and anonymous Library workspace and collection tables. The FTS5 index is seeded but is not used by the default search route.

## Source facts and intentional gaps

- The Catalog is a September 15, 2026 snapshot of 280 active staging products, 2,165 variants, and the complete 198-node category ontology. Product names, brands, types, descriptions, explicit category assignments, variants, prices, and available-to-order signals are local to this repository.
- Primary product images and staging-assigned SKU images are local. Some variants do not have an assigned image and fall back to the product image.
- Reviews, supplier costs, margins, lead times, room types, dimensions, and material details are not included in the source snapshot. An absent field means the source data is unknown; it is not a negative claim about a product.
- Current search performs literal matching across a limited set of fields. Existing category, brand, price, and availability filters are intentionally basic.
- Keep the repository runnable without credentials. If you choose to call an external service or add a dependency, explain the tradeoff and preserve a clear local path.

The interview packet is fictional composite research written for this exercise. Treat it as directional qualitative input, not a quantitative study or claims about real people.

## Repository map

```text
app/                 Catalog and Library routes plus local API handlers
components/catalog/  Catalog rail, cards, grid, and product detail dialog
components/library/  Saved-product and collection Library surface
data/                Source artifacts, migrations, and SQLite seed template
docs/                Candidate-facing fictional research packet
lib/db/              SQLite seed, connection, and repository boundaries
public/products/     Local product and assigned variant images
tests/               UI, API, repository, and fixture-integrity coverage
```
