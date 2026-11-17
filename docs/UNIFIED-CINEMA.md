# One cinematic experience on every device

The user rejected the mobile-only scrolling chapters introduced in ff8cde4. The desktop cinematic sequence is now the shared implementation at every viewport width. Responsive rules adjust composition and safe-area spacing; they no longer remove or substitute animations.

## Restored

- Native sticky scene throughout the scroll sequence.
- Camera zoom, title fade/translation and wing movement/scale/fade.
- Wing-to-particle dissolve, including mobile canvas rendering.
- Overlapping sky-to-sea crossfade and the sea headline reveal.
- Identical normalized timing and the same 250svh journey length on every device.

The JavaScript scroll-following pin from 23b15b8 remains removed. Native CSS sticky positioning handles pinning. Both stage height (100lvh) and scroll-track length are stable during browser toolbar movement. Scroll progress is measured from the start/end of a document track whose height equals the hero minus the stage, rather than from a viewport-relative end offset. A normal document background crossfades with the stage to provide matching sky/sea artwork outside the viewport-attached layer. This background coverage is an implementation hypothesis for native Safari edge compositing; it is not a verified native-device fix.

The dissolve measures the actual untransformed wing layout rather than maintaining separate hardcoded responsive geometry, including short landscape viewports. Artwork, typography, all other sections, product demonstrations and integrations are preserved. Pause and the user's reduced-motion preference still work across devices.

## Verification

`npm run build` passes including lint/type checks and static generation. Browser checks at 1440×900, 390×844, 768×1024, 844×390 and 320×568 show native sticky positioning, stage top 0 during the pin, an enabled wing canvas and no horizontal overflow.

At 50 percent progress, all five sizes produced identical values: camera scale 1.14, wing scale .84, wing Y -63.1818px, sky opacity .421053 and sea opacity .625. The mobile dissolve canvas contained 12,719 painted pixels in the checked frame. At 90 percent progress, mobile sky opacity is 0, sea/background opacity and sea-copy opacity are 1.

Pause stops wing/ray CSS animations. Reduced-motion mobile renders the static sky and hides the dust. The mobile menu reaches the viewport bottom and locks body scrolling while open. No browser warnings/errors in the checked session. Screenshots and parity measurements are in ignored local work/unified-cinema/.

Responsive Chromium checks establish sequence parity, not native iPhone Safari toolbar rendering. Native compositing, safe-area coverage and momentum-scroll behaviour still need a physical-device check. Protected preview access was unavailable to the user; use the public production domain.

## Background research

WebKit documents a special solid-colour background extension for viewport-constrained elements near obscured viewport edges: https://bugs.webkit.org/show_bug.cgi?id=301756#c2 . This explains why preserving the scene while addressing browser edge coverage requires a separate treatment. It does not prove that this implementation resolves a specific iPhone configuration.
