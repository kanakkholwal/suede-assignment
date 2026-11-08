# Decisions

## What I picked

Interview 1 (D-01) and interview 5 (D-05) together. D-01 types the brief as a sentence, D-05 wants to see what's missing before it goes to the client. Here it's one problem: the catalog has no sizes, and size decides if a sofa fits. So search understands size, and the shortlist says when a size is missing or guessed.

Skipped D-02, D-03, D-04 (price tiers, margins, discovery). No data behind them and I didn't want to fake it.

## How it works

- Type the brief like you'd say it. It becomes chips you can edit. Words it can't filter on ("warm", "durable") stay as "not used" so you can see they did nothing.
- Pieces with a known size come first. Each card says where the size came from.
- Add a piece and it goes into the room, drawn to scale from the client's message. The fit check says what's wrong and how to fix it.
- Elevation shows one wall against the ceiling and a 5'6" person, so you see how big the sofa really is.
- The last step is a sheet for taping outlines on the floor, plus questions for the client. It lists what's still open and stops you sending while real problems remain.

## Measurements and guesses

- Every size has a source: brand site, listing, my placeholder, or the designer. Mixed sources show the weakest.
- I checked six products by hand. The Elevate sofa says 86" in the catalog and is 86½".
- From the client's message only 12 by 15 and the 8½' ceiling are stated. Windows, door corner and door width are my guess, drawn dashed, each with a question for the client.
- A warning built on a guess says so ("door position is assumed"). Confirm the door and it becomes a firm "won't work".
- A piece with no size can be placed at a typical size. It's hatched, named in every warning it touches, and blocks the client sheet.

## Cut

3D, photo to plan, price tiers, smart brief parsing (plain rules work offline and are easy to check). Rotation is 90 degrees only. Walkways are checked between pieces, not from the door. The two extra rooms are labelled made up.

## What went wrong

- Plan, elevation and tape-out all sat in the step bar, so switching a view felt like changing step. Elevation now lives in "Fit the room"; the client sheet is its own step.
- I tested with two imaginary first-timers (homeowner, self-taught stylist, desktop and phone), written as a prompt and played by AI. Not real users. Both got stuck: they couldn't place a piece without knowing its size. Hence typical sizes, and copying a size from another finish of the same piece.
- Two search boxes showed different things. Now one; the exact-words filter is in Filters.
- Tiles said "depth unknown". I pushed back, it read like an error. Tiles now show only what's known.

Not sure about typical sizes. A designer might place a sofa at 84 by 38 and forget it was a guess. It blocks the client sheet for that reason, but nobody has used it for real.

## Photo or sketch to room

Designer marks one known length (a door, "15 feet") to set scale. A model suggests walls and openings as guesses; the designer accepts or fixes each. If scale and the client's numbers disagree, ask.

## With more time

- Watch three real designers and see which warnings they ignore.
- A client link that works on a phone. Today it's a print sheet.
- Walkway check from each door.
- Phone check of elevation, filters and library. I only tested the plan properly.

## At Suede

Each warning says why, so a new designer learns from their own layout. The client sheet is meant to cut returns; I can't say yet that it does.

## Time and AI

- Time: 4 Days (3 hr each) + 1 Day (3 hr) for recording, along with festive season and family time. I did not work on the project outside of these 4 days.
- AI: I used Claude Code with a proper persona and plan to first audit the things as ux designer and the product usecase and had a audit report generated, then verified those visually, then provided feedback with screenshots at each step. Claude wrote the code and tests. Then I used the application and tried to be a first time user and provided feedback to Claude, then he wrote the next iteration. After I couldn't find flaws, I make two distinct user personas of first time user like rookie designer and a self taught stylist and claude wrote a the audit report, I noticed stuffed I missed, some were kinda obvious but my developer persona made me overlook them, so real user audience persona agents helped with even precise reviews.