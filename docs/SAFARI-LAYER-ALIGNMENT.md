# Safari layer alignment — native investigation

This revision follows the seams and header overlap shown in IMG_3813.PNG and IMG_3814.PNG. It preserves the shared cinematic sequence on desktop, tablet and phone.

## Header follow-up — 19 November 2026

At the user's request, the header scroll fade described in the original investigation below has been removed. The header retains its absolute document positioning and moves upward naturally with scrolling at full opacity. The artwork edge and scene-exit corrections remain in place. The historical fade measurements below describe the preceding release.

## Footer browser background — 19 November 2026

The sky-blue band below the dark footer was the document canvas behind Safari's bottom controls. The footer layout itself was not the source. An observer now applies the footer's existing #071a2c colour to the root/body background while the footer intersects the viewport, and restores the original colours when it leaves. The theme-colour metadata follows the same state for browsers that use it. Cleanup restores the original metadata and removes the state attribute.

Native iPhone Safari verification of the source build gives root/body rgb(7, 26, 44) and theme #071a2c at the footer; the screenshot shows a continuous dark background behind the bottom controls. Footer geometry remains 402×227.78125px. The same-page footer-to-top check restores the sky canvas and theme, with the sky fully visible and the sea hidden. Evidence is in ignored `work/native-safari/footer-edge-source.png` and `footer-edge-return-sky.png`. The footer markup and layout are unchanged by this correction.

## Native findings

The ordinary iPhone 17 simulator in Xcode Device Hub, running iOS 27.0, reproduced the production edge bands. Safari Web Inspector reported a 402×874 screen, a 714px visual viewport, a 754px large-viewport scene, and zero exposed top safe-area inset at the scroll origin. The duplicate document backdrop covered the entire 250svh section while the main image covered the scene. Their different cover crops could therefore meet at a visible seam.

A temporary simulator-only stylesheet hid the duplicate backdrop and extended the original image and atmospheric overlays by 72px vertically on each side. A subsequent native observation showed the cloud artwork extending behind the bottom Safari controls. All content and wing layers were retained. This was a prototype observation, not verification of the final source or sea phase.

Making the document background transparent in a separate native experiment produced a white status strip. That experiment is not part of the source change. It established that Safari still uses a canvas colour at the scroll origin.

## Source correction

- Remove only the duplicate `film-bleed` DOM/CSS. Keep the original sky, sea, wings, feathers, dust and light assets.
- Extend the original background and overlays vertically; retain content geometry and shared scroll timing. Contain horizontal artwork overflow with `overflow-x: clip` on the hero.
- Clip the overscanned image at the hero's document bottom, with 72px of allowed overflow at the top. Native Safari otherwise paints the enlarged image across the beginning of the next section even after the scene has exited. An explicit stacking level on the next section did not resolve that native overdraw; the hero clip did.
- Match the document canvas and viewport theme colour to the sampled sky edge, #4a727e, and blend the sky into that colour at the top. Remove this blend as the scene transitions to sea. Reduced motion retains the sky blend.
- Fade the normal header over the first 32px of scrolling before it passes beneath native status controls. Keep an open menu visible. Keep scroll-driven header and scene animations running when time-based atmosphere motion is paused.

## Local verification

The production build passes. Responsive checks at 1440×900, 390×844, 768×1024, 844×390 and 320×568 preserve the same halfway camera scale (1.14), wing scale (.84), wing Y (-63.1818px), sea opacity (.625), and scene top (0). Document width does not exceed the layout viewport. Measurements are in ignored `work/native-safari/regression.json`.

The header is fully visible at scroll 0, half visible at 16px, and hidden at 32px. At 390×844, the open menu extends to the viewport bottom and locks document scrolling. Atmosphere pause retains the scroll pin and sky/sea transition. At scroll 1200 the sea is fully visible and the scene remains pinned at top 0. At scroll 2210 the scene has released to bottom -100px and the following story section covers the artwork overflow. No browser warnings/errors were captured in this session.

Screenshots in `work/native-safari/source-hero.jpg` and `source-sea.jpg` are responsive Chromium captures, not native iPhone screenshots.

## Native verification after simulator capture was authorized

The user explicitly authorized Apple's simulator command-line tools after the computer capture service lost its window connection. `simctl openurl` and `simctl io screenshot` captured native iPhone 17 Safari. The initial source sky capture shows the artwork continuing behind the compact address control. The sea and crossfade captures show continuous artwork behind the expanded bottom controls and a hidden header. Native measurements at scroll 515 give scene top approximately 0, sky opacity .422329, sea opacity .623788 and document width 402, matching the 402px viewport. At scroll 927 the sea is fully visible and the scene remains pinned. At scroll 40 the header has opacity 0 and visibility hidden. The menu runs from y82 to y714, the bottom of the available visual viewport.

For deterministic frame selection, an ignored local-only HTTP wrapper serves the production build with a test script that scrolls after hydration and records layout measurements. It does not replace imagery, force opacity values or change animation progress directly. A temporary clip trial identified and removed the sea overdraw on exit. After implementing that clip and rebuilding, the trial stylesheet was removed: native captures of the final source confirm continuous sea edges and a clean exit into the story section. `native-final-sea.png` and `native-final-release.png` capture those results.

Native screenshot evidence and measurements are in ignored `work/native-safari/`. Captures include the sky with compact controls, sea with expanded controls, midpoint dissolve, header exit, open menu and scene release. This is native portrait simulator evidence, not a claim to have tested every physical iPhone or Android model. Landscape and other widths were checked responsively; real touch-driven toolbar transitions and physical-device rotation remain outside the automated evidence.
