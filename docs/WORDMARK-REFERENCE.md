# Aeria wordmark reference correction

The owner supplied IMG_9863.PNG as the reference for Aeria's lettering. The former Italiana text did not reproduce its thin strokes, wide capital spacing, flared E terminals and curved R leg.

A shared SVG wordmark in src/components/AeriaWordmark.tsx now provides reference-led AERIA outlines in the hero, navigation, footer and ecosystem diagram. This is an authored vector reconstruction from the visual reference, not an identification or embedding of an original font file. No substitute font has been presented as the exact source typeface.

The original butterfly logo, other headings, body typography, artwork, product scenes and animation logic are preserved. The wordmark inherits each placement's existing color. Its accessible name remains Aeria, and the page retains one h1.

Verification:

- Production build passed compilation, lint/type checks and route generation.
- Desktop 1440 × 1000, mobile 390 × 844 and 320 × 568 reviewed.
- No horizontal overflow at mobile widths; navigation opens and closes at 320 px.
- Browser console showed no warnings or errors.
- No new runtime font or package dependencies.

[Desktop](screenshots/wordmark-reference/desktop.jpg) · [Mobile](screenshots/wordmark-reference/mobile.jpg)
