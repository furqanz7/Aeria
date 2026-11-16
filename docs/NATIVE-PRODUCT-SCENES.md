# Controlled product scenes

15 November 2026. Local revision following feedback that the generated devices and interfaces looked wrong.

## Change

The generated phone and terminal pictures are no longer mounted in the two product sections. `ProductScene.tsx` now renders purpose-built device visuals using HTML, CSS and SVG:

- Two phones show Mina and You as nearby recipients, with consistent screen proportions, local fonts, recipient details and discovery rings.
- A phone approaches the triangular Aeria Terminal. Its screen shows a discovered merchant and a review action; the terminal retains a defined contactless target and Aeria wordmark.
- Interfaces use real HTML text. Device bodies use deterministic geometry, restrained metallic edges and shadows. The former picture frames and edge masks are absent from the active scenes.
- Existing sky/depth atmosphere stays in the background. The scene scales proportionally through a cleaned-up ResizeObserver.
- Discovery rings animate twice on first entry and settle. Reduced motion disables them. These are labelled illustrative product visuals, with no fake payment completion or backend action.

The accepted hero, identity, typography, navigation, payment concepts and wordmark-only Our Vision diagram remain. Prior generated files remain archived in `public/visuals/`.

## Files

- `src/components/ProductScene.tsx`
- `src/app/product-scenes.css`
- Homepage mounts both scenes in `src/app/page.tsx`; the layout imports their stylesheet.

## Verification

Production build passed, including type and integrated lint checks. Browser review covers desktop and narrow layouts, complete device bounds, readable interfaces, no horizontal overflow, console checks and reduced-motion presentation. Screenshots are saved under `screenshots/native-products/`.

This note supersedes the active-artwork description in `DISCOVERY-ARTWORK.md`. No push, production deployment, DNS or infrastructure changes.
