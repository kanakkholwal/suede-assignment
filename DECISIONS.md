# Decisions

## The flow

One room, three steps, always visible at the top of the app:

1. **Find pieces** (`/catalog`). Type the brief as a sentence: *"warm, durable family-room sofa under $6k, 84 to 96 inches, in stock"*. It becomes editable chips (Sofa, 84″ to 96″ wide, up to $6,000, available to order) that drive the same filters as the rail. Words the catalog has no data for (*warm, durable, family room*) stay on screen as "not used as filters" chips instead of silently failing the search. Results lead with pieces whose width is on file and fits; the rest fold under one line. Each card shows its size and where that size came from. Shortlisting adds the piece to the room.
2. **Fit the room** (`/room`). A true-scale plan built from the client's message. Drag pieces (or use the keyboard); a live fit check explains every problem in designer terms and says which assumptions it rests on.
3. **Show the client** (`/room?view=wall`, `?view=tape`). A wall elevation at true scale against the 8′ 6″ ceiling and a 5′ 6″ person, and a printable sheet for taping each outline on the real floor.

## What I prioritised from the research, and why

I combined **D-01** (sentence brief → a short, explained starting set) and **D-05** (show what is missing, not just what is there). They are one problem for this room: the brief's hardest constraint is size, and size is exactly what the catalog does not have. So the sourcing change is a brief that understands sizes, plus a shortlist that names every gap before a client sees it: no size on file, size only from the title, synthetic placeholder, option not chosen, unavailable on the snapshot date.

I did not build D-02's price tiers or D-03's margin logic: the data has no similarity signal and no commercial fields, and inventing either would contradict the brief's honesty rule. D-04 (distinctive discovery) needs taste signals the snapshot does not carry.

## Measurements, assumptions and missing data

**Product sizes.** Every measurement is a separate claim with a source, stored in `product_dimensions`, and resolved per field by rank: *designer entry > verified on the brand site > stated in the listing > synthetic*. A product can therefore have a verified width and a synthetic depth, and the UI shows the weakest source for the footprint.

- *Verified:* 6 products checked by hand against their brand pages on 2026-11-04, with URL and date. One proves the point: the "Elevate **86″** Sofa" measures **86½″** on the brand site.
- *Listing:* 113 claims parsed deterministically from titles and variant labels (`72"`, `50" x 21" x 13"`, `8'x10'`). Sizes often live in the variant, so claims are per variant. A lone number is labelled "read as width" because it could be a height.
- *Synthetic:* 2 placeholders, each with the reason in its note. Never shown as verified.
- *Unknown:* left unknown. A piece without width and depth cannot be placed; the designer enters a size with its source, saved as their own claim, never mixed into brand data.

**The room.** The client's message becomes data in `data/client-room.ts`. Only 12 × 15 and the 8½′ ceiling are *client-stated*. Everything else is an explicit *assumption* with a plain-language reason: which long wall has the windows, window widths and sill, what "left window" means, which corner the door is in, its width and swing. Assumed features are drawn dashed. Each one can be adjusted or marked confirmed, and the app generates the follow-up questions to send the client.

**Verdicts.** A fit warning that rests on anything unconfirmed says so ("Possible conflict… depends on: door position and size are assumed"). Confirming the door turns the same warning into a firm "Won't work". Nothing uncertain is shown as certain.

**Units.** Inches internally, quarter-inch display, feet-and-inches input (`7' 2½"`), one formatting module.

## Fit rules (and why they teach)

Through a wall; overlap; blocking the door swing; sitting on or crowding the radiator; rising above the window sill; walkways under 30″ (36″ main path); an awkward 1 to 30″ gap behind a piece; coffee table 14 to 18″ from seating and about two-thirds of the sofa's length; seating front legs on the rug; a rug almost touching the wall. Each message states the rule of thumb and a fix, which is the training layer for designers without formal training. Rules are pure functions, unit-tested, and run on every drag frame.

## What I built, cut and traded off

- **Built:** brief parser using the ontology's own aliases (*couch*, *end table*); width filter that drops only known-too-wide options and keeps unknowns visible; sourced dimension model; room model; SVG planner with snapping, rotation and keyboard control; fit check; wall view; tape-out sheet; client questions.
- **Cut:** 3D, photo-to-plan, multiple rooms, price tiers, LLM parsing. A deterministic parser runs without keys and is testable; an LLM would help with messy briefs but would need the same chip output to stay inspectable.
- **Trade-offs:** rotations are 90° only (real rooms rarely need more, and it keeps the geometry exact). Walkways are checked pairwise, not as a path from the door. One room per workspace.
- **Infrastructure:** a stale local database is now rebuilt from the seed automatically. On Windows, `db:reset` could not replace a file the dev server held open.

## Turning a sketch, listing plan or photo into an accurate room

Treat the image as evidence, not truth. (1) Upload, then have the designer mark **one known dimension** (a door is about 30 to 36″, or the client's "15 feet") to set the scale. (2) A vision model proposes walls and openings as *assumed* features, exactly like the text message today. (3) Every proposal is accepted, adjusted or confirmed; nothing becomes "confirmed" without a human. (4) Where scale and the client's numbers disagree by more than an inch or two, ask. Listing floor plans often round to the foot, so they are "stated", not "verified".

## What I would validate or build next

- Watch three designers run a real brief; measure time to a presentable shortlist and which warnings they ignore.
- Check rule thresholds with Suede's designers and make them studio-tunable.
- Path-based walkway check from each door, and diagonal rotation.
- Brand-site dimension capture at catalog ingest, with a refresh date per claim.
- Client view as a shareable link with comments.

## How this grows into a Suede feature

- **Designer training:** every warning is a small lesson tied to a real layout; repeated warnings show what each designer needs to learn.
- **Client presentations:** the wall view and tape-out turn "84 inches" into something a client can feel before buying, which targets the main reason for returns.
- **Sourcing data:** every designer-entered size is a candidate verified dimension for the whole catalog.

## Time and AI use

- Approximate time: **[Kanak to fill in]**.
- AI: **[Kanak to fill in]**. Built with Claude Code as a pair programmer: I set the product direction and the trade-offs, reviewed each milestone in the browser, and had it write code and tests under a fixed quality bar (typecheck, lint, tests, comment check and build green before every commit). Brand-page dimensions were fetched and then checked by hand.
