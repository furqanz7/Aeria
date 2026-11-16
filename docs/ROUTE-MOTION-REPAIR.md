# Beyond Borders and ecosystem motion

Local follow-up on 16 November 2026. The previous motion pass missed these two illustrations: the ecosystem connection dots had no animation, and currency motion only happened on selection changes.

## Changes

- Beyond Borders: continuous directional light travels across the existing connection divider. The central routing symbol gently changes tone. The received amount also transitions when the entered amount changes, as well as when the route changes. Currency values are still controlled by the visitor, with the same illustrative calculation and disclaimer.
- One Experience, Many Possibilities: the six existing connection dots now travel along their lines. Incoming and outgoing paths have opposing local directions to account for the existing mirrored layout, with staggered timing.
- Mobile ecosystem: the existing vertical bridges have moving light markers. This is scoped to the actual 600 px vertical-layout breakpoint; desktop paths remain in use above it.
- Motion suspends offscreen and follows the shared Pause control. Reduced-motion mode removes the traveling decorative marks and preserves the static diagrams. Re-enabling normal motion resumes without a reload.

No copy, device scenes, brand assets, layout, dependencies, exchange rates or integrations changed.

## Verification

- Production build passed compilation, lint/type checks and static generation. First-load JavaScript remains about 161 kB.
- Desktop 1440 × 1000: ecosystem dot positions changed during repeated rendered-style samples while animation state was running. Currency marker positions changed while in view and remained paused offscreen.
- Global Pause: ecosystem computed animation state switched to paused. Resume restored normal playback.
- Reduced motion: decorative currency marks became display:none and CSS animations were disabled. Re-enabling normal motion restored the running state.
- Mobile 390 × 844: visible ecosystem bridge positions changed from 0.992/6.5 px to 11.914/10.578 px, with both samples reporting running and the section active. Visible currency markers also advanced. No horizontal overflow was observed at 390 px.
- Existing currency controls still return 183.08 EUR for the 200 USD illustrative example.
- No browser warnings or errors observed.
- git diff --check passed.

Evidence: [desktop currency](screenshots/route-motion/beyond-borders-desktop.jpg), [mobile currency](screenshots/route-motion/beyond-borders-mobile.jpg), [mobile ecosystem](screenshots/route-motion/ecosystem-mobile.jpg), [runtime samples](screenshots/route-motion/runtime-evidence.json). Runtime samples include offscreen idle states and the final visible-section checks.

No deployment, push, DNS or production infrastructure changes were made.
