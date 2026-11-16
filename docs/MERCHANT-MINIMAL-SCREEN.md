# Minimal merchant screen

16 November 2026. Focused revision following the request for a cleaner, more minimal phone interface.

- Off-white surface, navy text, muted blue controls and small functional icons.
- Italiana is reserved for the Aeria wordmark. Amounts and interface text use Manrope.
- One clear amount, simple account rows and thin separators replace layered decorative compositions.
- Removed the wing imagery, ocean texture, particles, orbit lines, glow and screen-art loading from the active phone renderer. Existing artwork remains available on disk and elsewhere in the site.
- Discovery, Review, Face ID demonstration, Processing and Complete remain distinct screens. The review still waits for explicit confirmation, with Start over and Replay available.
- Small progress and confirmation animations remain, with reduced-motion support. Hardware form, camera and device positioning are unchanged.
- New Ready/Review/Complete `*-minimal.webp` fallbacks match the simplified screens and avoid stale image caches.

The live scene is still an illustrative product experience. It does not perform a real financial transaction or biometric check.

## Verification

- Production build passed compilation, integrated lint/TypeScript checks and static generation. `git diff --check` passed.
- All screen states were visually reviewed in the local export surface. The route was removed before building; source and PNGs remain under `work/merchant-minimal/`.
- Production desktop flow passed with reduced motion: Tap → Review, explicit confirmation → Authorization → Processing → Complete. Review stayed in place until confirmation.
- Production mobile flow and Replay passed at 320×568 with normal motion. Content fit within the viewport with no horizontal overflow.
- The production browser console showed no errors or warnings.
- JavaScript-disabled loading showed the matching Ready minimal poster, disabled controls and no renderer.
- Saved the actual screen sequence and desktop/mobile completion captures. Owned local preview processes were stopped after verification.

Screenshots: `docs/screenshots/merchant-minimal/`. This supersedes the phone styling in `MERCHANT-SCREEN-ART-DIRECTION.md`.

Local only. No production deployment or infrastructure changes.
