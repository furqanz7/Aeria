# Restrained iridescence

Added on 16 November 2026 in response to the owner's glass / spectral-light references and request for a little iridescence in combination with Aeria's current direction.

- A translucent cyan, violet, rose, pearl and warm-light sheen travels across the existing cobalt wings. Each half uses the original artwork's alpha mask, background sizing and alignment, so colour stays inside its feather silhouette and follows the existing wing movement.
- The existing currency-divider light and ecosystem connection markers carry a faint version of the same spectrum. Their geometry, timing and density are unchanged.
- The original artwork, dark blue base, cloud scenes, wordmark, body typography, product screens, terminal and content are unchanged.
- CSS only: no new image, font or JavaScript dependency; existing wing artwork is reused from the browser cache.

Checks:

- Production build passed compile, lint/type checks and static generation. First-load JavaScript remains approximately 161 kB.
- Desktop 1440 × 1000 and mobile 390 × 844 reviewed; no horizontal overflow at 390 px.
- Rendered sheen position changed while running. On Pause it held at 23.6195% across repeated samples; resume restored playback.
- Reduced motion sets a faint static sheen at 55% and half opacity. Re-enabling normal motion restores playback.
- No browser warnings or errors observed. git diff --check passed.

[Desktop preview](screenshots/iridescence/desktop.jpg) · [Mobile preview](screenshots/iridescence/mobile.jpg) · [Runtime observations](screenshots/iridescence/verification.json)
