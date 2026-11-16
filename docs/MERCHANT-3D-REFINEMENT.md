# Merchant hardware revision

16 November 2026. Local implementation following the rejection of the flat triangular terminal and its phone positioning.

## What changed

- Replaced the flat SVG terminal and independently rotated phone with a shared Three.js scene. The rounded triangular terminal now has an extruded body, beveled metal perimeter, inset navy face, Aeria engraving, contactless mark and indicator.
- Set the phone and reader in the same camera and lighting system. The phone approaches the contact area from the foreground; the final geometry was visually checked for screen/terminal intersections and adjusted to provide clearance.
- Preserved the accepted merchant screen. `WalletPhone.tsx` was extracted from the preceding component without changing its markup, dimensions, or content. A transparent 3x browser export of that UI supplies the screen texture, avoiding generated interface text and browser-zoom differences between DOM and WebGL layers.
- Added a restrained, one-time 1.5-second approach. Reduced-motion preferences receive the final static pose. There is no continuous render loop after the approach.
- Load the 3D component only when the merchant scene enters view. A 44,784-byte transparent WebP of the same scene supplies the server-rendered, loading, no-JavaScript and unavailable-WebGL fallback. The screen texture is 61,146 bytes. GPU resources, observers and animation frames are released on unmount; context loss reveals the fallback.
- Removed the superseded flat-terminal CSS from the active stylesheet. Earlier source/artwork and screenshots remain available as history.

## Preserved scope

The two-phone proximity scene, cinematic hero, original logo, wordmarks elsewhere, copy, navigation, currency and proximity interactions, and original TestFlight destination were not redesigned in this revision. Existing product-concept qualification remains. This is an exploration of hardware form, not final specifications.

## Files

- `src/components/MerchantHardware.tsx`: physical geometry, materials, lighting, pose and bounded motion.
- `src/components/ProductScene.tsx`: viewport loading, accessible scene description and poster.
- `src/components/WalletPhone.tsx`: preserved phone UI used by the two-phone scene and as the source of the merchant-screen export.
- `src/app/product-scenes.css`: isolated scene layout and fallback visibility.
- `public/visuals/aeria-merchant-screen.webp` and `aeria-merchant-hardware.webp`: UI texture and transparent fallback.

For future screen changes, regenerate the screen texture from the HTML component. The local export-page source and lossless PNGs are retained in `work/merchant-3d/`; the temporary export route was removed before building production. Export captures use the actual browser renderer, not AI-generated devices or interface artwork.

## Verification

- `npm run build` passed compilation, integrated lint and TypeScript checks, and static generation. Initial route JavaScript is 156 kB; the 3D engine remains in deferred chunks.
- Confirmed that the extracted phone component matches the preceding accepted component markup exactly.
- Reviewed the production build at desktop and mobile sizes. 320, 390, 768 and 1440px viewport checks showed no horizontal overflow.
- Reviewed the reduced-motion final pose and the normal-motion final pose in the production browser. The new approach is bounded in code to 1.5 seconds; the entire transition was not recorded for frame-by-frame review.
- With JavaScript disabled at 320px, confirmed there was no renderer, the poster loaded, its opacity was 1, and the complete composition fit the scene.
- The fresh production browser console showed no warnings or errors. Earlier development-only warnings were not present in production.
- Saved `desktop.jpg`, `mobile.jpg`, `detail.jpg`, and `no-javascript-320.jpg` in `docs/screenshots/merchant-3d/`.
- Removed the temporary export route before the production build. Local preview processes were stopped after verification.

No production deployment, push, DNS, domain or infrastructure changes.
