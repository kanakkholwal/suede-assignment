# Decisions

## What I picked, and why

- **Problem:** D-01 (describe the brief as a sentence) plus D-05 (show what is missing, not just what is there).
- **Why together:** for this room the hardest constraint is size, and the catalog has no sizes. So the fix is a search that understands size, and a shortlist that names every gap before a client sees it.
- **Not built:** D-02 price tiers, D-03 margins, D-04 distinctive discovery. The data has no similarity, commercial or taste signals. Faking them would break the accuracy rule.

## The experience

Three steps, always visible at the top.

1. **Find pieces.** Type the brief as a sentence: "warm family sofa under $6k, 84 to 96 inches, in stock". It turns into chips you can edit. Words we can't filter on (warm, durable) stay visible as "not used", never silently dropped. Pieces with a known size come first, and every card says where its size came from.
2. **Fit the room.** A true-scale plan from the client's message. Drag pieces and the fit check explains each problem in plain designer terms. Elevation shows one wall against the ceiling and a 5′6″ person: the "Oh, it's THAT big" moment.
3. **Show the client.** A printable sheet to tape each piece's outline on the floor, with questions to send the client. It opens with what is still open and blocks sending until the real problems are fixed.

## Being honest about accuracy

- **Every size has a source:** verified on the brand site, from the listing, synthetic, or entered by the designer. The weakest source wins. Example: the "86″" sofa is really 86½″ on the brand site.
- **Unknown stays unknown.** A piece with no size can still be placed at a typical size. It is hatched, named in every warning it affects, and blocks the client sheet.
- **The client's message:** only 12 × 15 and the 8½′ ceiling are "stated". Window and door positions are assumptions, drawn dashed, each with a reason and a question for the client.
- **Verdicts carry their doubt.** "Possible conflict, depends on: door position is assumed." Confirm the door and it becomes "Won't work".
- **Stated vs assumed** is labelled on every screen.

## Teaching the designer

Each warning gives the rule of thumb and a fix: door swing, walkways, rug size, coffee-table gap, radiator, windows. Untrained designers learn from their own layout.

## Built, cut, traded off

- **Built:** brief to chips, sized-first results, one-click shortlist into the room, fit check, wall view, client sheet, rooms you create, shareable URL for every view.
- **Cut:** 3D, photo-to-plan, price tiers, smart parsing. Plain rules work offline and are easy to check.
- **Trade-offs:** 90° rotation only. Walkways checked between pieces, not along a path from the door. Example rooms are labelled fictional.
- **First-time test:** two imagined newcomers (homeowner, self-taught stylist; desktop and phone) could not place a piece without already knowing its size. That led to typical-size placement, reusing a verified size from the same piece in another finish, and sized-first results.

## Photo, sketch or listing plan to a room

- Treat the image as evidence, not truth.
- Designer marks one known length (a door, or "15 feet") to set scale.
- A model proposes walls and openings as assumptions, drawn dashed.
- A person accepts or fixes each one. Nothing is confirmed automatically.
- If scale and the client's numbers disagree, ask.

## With more time

- Watch three designers run a real brief. Measure time to a shortlist and which warnings they ignore.
- Share the client sheet as a phone-friendly link with comments.
- Walkway check from each door. Studio-tunable rules.
- Capture brand-site sizes when products are added.

## Growing into a Suede feature

- **Training:** every warning is a small lesson; repeated ones show what a designer needs to learn.
- **Client presentations:** "84 inches" becomes something felt before buying, aimed at the top reason for returns.
- **Catalog data:** every size a designer enters is a candidate verified size for everyone.

## Time and AI

- Time: **[Kanak to fill in]**.
- AI: **[Kanak to fill in]**. Claude Code as pair programmer: I set direction and trade-offs and reviewed each step in the browser. It wrote code and tests. Brand-page sizes were fetched, then checked by hand.
