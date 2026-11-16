# Nearby movement refinement

16 November 2026. After restoring the pre-experiment picture, the owner authorized continuing carefully.

This revision changes movement only. The restored 55 particle positions, sizes, colours, atmosphere, phone composition, discovery sequence and foreground typography are retained. No gap particles, trails, glow or additional controls were added. Merchant components are unchanged.

Once Connected, the original particle field stops its small alternating drift. Individual particles instead travel a short 48px path in 4.2–5.4 seconds, softly fading at the ends with staggered timing. Left-screen movement goes toward the facing edge; right-screen movement goes inward. Opposite animation directions account for the opposing phone rotations. The existing light and mist backgrounds remain independent and continuous.

Validation: production build passed compilation, lint/types and static generation. Compared `WalletPhone.tsx` against the pre-transfer snapshot: only timing/opacity CSS variables and their type import were added. Browser confirmed the original 55 points per screen, original point size and colour, running opposite-direction animations, and zero gap-stream elements. Existing atmosphere pause stopped the new motion; reduced motion disabled it. At 390px, document width was 375px with no horizontal overflow. No browser warnings/errors. Diff whitespace check passed. Local preview server stopped; nothing deployed.

Review recording: `screenshots/nearby-refinement/screen-current.gif`. Context screenshot: `screenshots/nearby-refinement/desktop-context.jpg`. This is a focused revision for visual review, not a claim of owner acceptance. Earlier rejected particle variants remain recorded as superseded in `NEARBY-PARTICLE-TRANSFER.md`.
