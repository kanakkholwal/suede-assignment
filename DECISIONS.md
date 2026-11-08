# Decisions

## What I picked

I went with D-01 and D-05 together. D-01 types a whole sentence as a brief, and D-05 wants to see what's missing before sending anything to a client. For this room they're the same problem. The catalog has no sizes, and size is the one thing that decides if a sofa fits. So the search had to understand size, and the shortlist had to say plainly when a size is missing or guessed.

I left out D-02 (price tiers), D-03 (margins) and D-04 (discovery). The data has nothing to build them on, and making it up would go against the accuracy rule.

## How it works

You write the brief as a sentence. It turns into chips you can change. The words it can't filter on, like "warm" or "durable", stay on screen as "not used" so you know they did nothing. Pieces with a known size show first, and each card says where its size came from.

Add pieces and they go straight into the room. The plan is drawn to scale from the client's message. Drag things around and the fit check tells you what's wrong in normal words, with the rule and a fix. Elevation shows one wall next to the ceiling and a 5'6" person. That's the "oh, it's that big" bit.

The last step is a sheet for taping each piece's outline on the floor, plus the questions to ask the client. It lists what's still open and won't let you send while real problems remain.

## Measurements and guesses

- Every size has a source: checked on the brand's site, read from the listing, made up as a placeholder, or typed in by the designer. When a piece mixes sources, the weakest one is shown.
- The Elevate sofa is listed as 86" and is really 86½" on the brand's site. That's why I checked six by hand.
- From the client's message only 12 by 15 and the 8½' ceiling are stated. Where the windows sit, which corner the door is in, how wide it is, all of that is my guess. It's drawn dashed and comes with a question for the client.
- A warning built on a guess says so, like "possible conflict, door position is assumed". Confirm the door and the same warning becomes a firm "won't work".
- A piece with no size can still be placed at a typical size. It's hatched, named in every warning it touches, and blocks the client sheet.

## What I cut

3D, photo to plan, price tiers, and any smart parsing of the brief. Plain rules run offline and are easy to check. Rotation is 90 degrees only. Walkways are checked between pieces, not along a path from the door. The two extra example rooms are marked as made up.

## Testing it as a newcomer

I played two first-timers (a homeowner and a self-taught stylist, on desktop and phone). Neither could place a piece without already knowing its size. So now you can place at a typical size, copy a verified size from the same piece in another finish, and see sized pieces first.

## From a photo or sketch to a room

The designer marks one length they know, like a door or "15 feet", to set the scale. A model suggests walls and openings, shown as guesses. A person accepts or fixes each one, and nothing counts as confirmed on its own. If the scale and the client's numbers disagree, ask.

## With more time

- Watch three real designers use it and see which warnings they ignore.
- A client link that opens nicely on a phone.
- Walkway check from each door, and rules a studio can tune.
- Get brand sizes in when products are added.

## Where it could go at Suede

Every warning is a small lesson, so it doubles as designer training. The elevation and tape-out help a client feel "84 inches" before buying, which targets returns. Any size a designer enters could become a verified size for everyone.

## Time and AI

- Time: [Kanak to fill in]
- AI: [Kanak to fill in]. I used Claude Code as a pair programmer. I set the direction and the trade-offs, checked each step in the browser, and it wrote the code and tests. I checked the brand-site sizes by hand.
