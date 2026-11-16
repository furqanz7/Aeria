# Designed Around You — nearby discovery animation

16 November 2026. The user's clarified request is an automatic discovery animation on the existing two-phone picture, with no interaction controls and no payment walkthrough.

## Implemented

- Preserve the existing top-to-top phone composition, dark screens, Aeria wordmarks, sample identities, section copy and caption.
- On entering view, the phones move slightly closer. Both screens show a brief nearby search with a restrained scan and proximity pulse.
- Reveal Mina and You with their Aeria IDs, then show Connected and a small confirmation mark on both screens.
- The discovery sequence takes about 3.2 seconds and settles on the connected identities. It does not repeat or add buttons, amounts, payment approval or payment results. A later refinement keeps the UI background alive continuously: see `NEARBY-AMBIENT-BACKGROUND.md`.
- Timers and scan effects pause outside the viewport or while the document is hidden. Reduced motion shows the connected identities without animation.
- With JavaScript disabled, a scoped no-script style presents the existing static identities. Motion preferences are applied after hydration to keep the first client render consistent with server markup.

## Files

`ProductScene.tsx` controls the short sequence and viewport/visibility gates. `WalletPhone.tsx` supplies the searching and identity screen layers. Scoped additions in `product-scenes.css` animate phone translation, the scan, identity fades and the proximity pulse. No new dependencies or website image assets are needed.

The merchant experience, earlier interactive proximity demo, cinematic hero, branding and TestFlight integration are outside this revision.

## Review artifacts

`docs/screenshots/nearby-autoplay/discovery.gif` records the actual component playing automatically in a local preview. The GIF is a review artifact; the website renders live DOM/CSS. Still frames show Searching, Found and Connected. Desktop/mobile page captures show it in the real section.

The temporary capture route was removed before building. Its source is retained in `work/nearby-autoplay/preview-page.txt`.

## Verification

- Production build passed compilation, integrated lint/TypeScript checks and static generation. `git diff --check` passed.
- Confirmed that the scene remains Idle offscreen and automatically reaches Searching → Found → Connected when the picture enters view.
- Both screens display their sample identities and Connected status at the end. The picture contains zero buttons.
- Reviewed the actual component recording and desktop/mobile section captures. 320, 390 and 768px checks showed no horizontal overflow; desktop was reviewed at 1440px.
- Reduced motion immediately resolves to Connected with zero transition duration and no scan animation. Corrected an initial hydration mismatch by applying this preference after hydration; fresh normal and reduced-motion production loads then had no browser errors or warnings.
- JavaScript-disabled loading shows the static identities at opacity 1 and hides the search layer, with no controls.
- The existing merchant demo still reaches Review and Start over returns Ready.
- The GIF was captured outside the repository to prevent development hot reload from restarting the animation during recording. The temporary route was removed before the production build; the website renders DOM/CSS rather than the GIF.
- Owned preview processes were stopped after verification.

Local only. No production deployment or infrastructure changes.
