# Focused product visual refinements

15 November 2026. Local-only update following the cinematic identity iteration.

## Requested changes

- Replace the mismatched images in Designed Around You and For Merchants & Businesses.
- Remove the logo alongside the Aeria wordmark only in Our Vision (`#innovation`).

## Implemented

- Designed Around You now shows a pearl phone suspended in the existing mineral-teal and ivory-cloud atmosphere, with Aeria ID lettering and a cobalt feather.
- For Merchants & Businesses now shows the recognizable triangular terminal concept in deep-blue light, with a feather, suspended particles and caustics. The old black technical collage is no longer presented.
- Both images use soft edge masks to blend into their chapter. Alt text and concept captions match the new art. The selected everyday section's introductory copy has a darker colour for readability.
- Our Vision keeps only the Aeria wordmark in the diagram's center; the butterfly image is removed there. Header, footer, phone concept and the earlier connection diagram retain the original artwork.
- Original source files `p2p.webp`, `p2p.PNG` and `terminal.jpeg` are preserved unchanged for historical reference. The accepted opening, atmospheric motion, content, CTAs and integrations are retained.

## New assets

Generated with the built-in image_gen tool, using the existing Aeria sky and depth art as palette/lighting references and the original terminal image as a form reference. Prompts are recorded in `PRODUCT-ART-PROMPTS.json`.

- `public/visuals/aeria-everyday-cinematic.webp`
- `public/visuals/aeria-terminal-cinematic.webp`

The everyday image received one focused edit removing three ambiguous play-arrow controls from the screen.

## Verification

- Production build passed, including TypeScript and integrated lint checks.
- Desktop (1440px) and narrow (390px) layouts reviewed and captured.
- New images load successfully; no horizontal overflow at those widths.
- No image remains in `#innovation`; four other original-logo instances remain.
- No browser warnings or errors during the visual check.
- No production deployment, push, DNS or infrastructure changes.

Screenshots: `screenshots/product-refinements/desktop-{everyday,terminal,innovation}.jpg` and corresponding `mobile-*.jpg`.

The broader rebuild inventory and previous screenshots remain in `ITERATION-4-REVIEW.md` as a historical record; this note supersedes its original-image visibility and ecosystem-logo entries.
