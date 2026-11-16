# Aeria motion repair

Verified locally on 16 November 2026. No production deployment, push, DNS or infrastructure changes.

## Confirmed problems and repairs

- The Aeria ID feather inherited a paused animation that only the hero could enable. The closing feather had the same problem, and its final CTA wrapper was missing from the chapter observer. Both now play while visible, using the existing feather artwork and restrained movement.
- Motion components had separate reduced-motion, pause and visibility logic. The installed Framer Motion reduced-motion hook also cached its initial React state, so it was unsuitable for reliable recovery when preferences changed during a visit. A hydration-safe shared store now subscribes to the actual media-query and document-visibility events. The hero, product scenes, native-entry scene, currency transitions and reveals use this state.
- The hero Pause control did not stop the wing-dissolve canvas. It now gates both canvas effects as well as CSS atmosphere. Canvas pixels remain frozen during Pause; the light-field clock resumes from its previous elapsed time.
- Nearby-discovery timers now obey the same Pause state as their screen atmosphere. Merchant playback and native-entry view changes share the same controller. Their existing viewport gates remain in place.
- Interrupted section reveals now settle fully visible and readable. Unvisited sections retain their entrance animation. Initial server-rendered text remains visible.
- The hero's 600/650 px minimum stage height could exceed a short mobile viewport. It is now bounded by 100svh so the pinned scene and scroll progress match the available height.
- The document scroll container now has an explicit position, resolving the motion library's scroll-target positioning warning.

The phone geometry, upright everyday device, triangular merchant terminal, artwork, colors, particle counts, copy and product section arrangement were preserved. No new dependencies were added.

## Browser verification

Tested the production build in Chromium at desktop 1440 × 1000 and mobile 320 × 568 / 390 × 844.

| Area | Observed result |
| --- | --- |
| Hero | CSS wing movement and both canvases render; pinned scroll transitions progress from sky through the ocean scene. At desktop scroll 1350, stage top remained 0 and depth/copy opacity reached 1. |
| Pause / resume | Repeated samples held both canvas hashes and the wing animation clock unchanged while paused. After resuming, canvas hashes changed again. Native entry held one view for over 5 seconds while paused, then advanced after resume. |
| Identity / closing | Both feather animation clocks and translate values advance when their chapters are visible. |
| Reveals | Entering text was observed mid-transition, then settled visible. Reduced-motion and pause interruptions settle readable. |
| Proximity | Searching → found → connected plays automatically. The background wash and in-screen particles remain running after connection. No click-through controls were reintroduced. |
| Designed Around You | All three native-entry views cycle on desktop. Mobile playback advances views with a live screen background. Phone remains upright and centered. |
| Merchant | Ready → tapping → review → authorizing → processing → complete observed on desktop and mobile. Renderer reports ready and running at completion; screen atmosphere continues. |
| Reduced motion | Both a live preference toggle and a fresh reduced-motion reload were tested. Discovery and merchant concepts show their settled states. Switching back to normal motion reactivates playback without a reload. |
| Mobile sizing | Short-screen hero stage measured exactly 568 px at 320 × 568; pinned scroll layers progressed. Document scroll width matched 320 and 390 px at those viewport widths. |
| Existing controls | Mobile navigation opens and closes, merchant anchor works, FAQ disclosure opens, currency route/input updates correctly (200 USD → 183.08 EUR illustrative result). |
| Console | No browser warnings or errors observed in the production test tab. |

Offscreen scenes deliberately suspend work. Reduced-motion preferences deliberately suppress ambient animation. Document visibility handling is connected in source; an actual operating-system tab-background transition was not separately instrumented in this pass.

## Build checks

- TypeScript check passed.
- Production build passed compilation, integrated lint/type checks and static route generation.
- First-load JavaScript: approximately 161 kB.
- Whitespace/diff check passed.

## Evidence

- [Recorded hero atmosphere](screenshots/motion-repair/atmosphere.gif): 16 browser frames captured over approximately 2.7 seconds, repeated as a GIF for review.
- [Hero sky](screenshots/motion-repair/hero-start.jpg), [mid-scroll](screenshots/motion-repair/hero-mid.jpg), [ocean](screenshots/motion-repair/hero-deep.jpg).
- [Aeria ID](screenshots/motion-repair/identity.jpg), [proximity](screenshots/motion-repair/proximity.jpg), [native entry](screenshots/motion-repair/native.jpg), [merchant](screenshots/motion-repair/merchant.jpg), [closing CTA](screenshots/motion-repair/closing.jpg).
- [Mobile hero](screenshots/motion-repair/mobile-hero.jpg), [native entry](screenshots/motion-repair/mobile-native.jpg), [merchant completion](screenshots/motion-repair/mobile-merchant.jpg).
- [Runtime observations](screenshots/motion-repair/runtime-evidence.json). Samples also include deliberately offscreen/paused scenes; these are expected idle states, followed by the visible-scene playback checks.

These are local product-concept animations; no discovery, authentication or financial transaction was executed.
