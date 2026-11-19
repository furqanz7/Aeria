# Safari layer alignment — native investigation

This revision follows the seams and header overlap shown in IMG_3813.PNG and IMG_3814.PNG. It preserves the shared cinematic sequence on desktop, tablet and phone.

## Header follow-up — 19 November 2026

At the user's request, the header scroll fade described in the original investigation below has been removed. The header retains its absolute document positioning and moves upward naturally with scrolling at full opacity. The artwork edge and scene-exit corrections remain in place. The historical fade measurements below describe the preceding release.

## Footer browser background — 19 November 2026

The sky-blue band below the dark footer was the document canvas behind Safari's bottom controls. The footer layout itself was not the source. An observer now applies the footer's existing #071a2c colour to the root/body background while the footer intersects the viewport, and restores the original colours when it leaves. The theme-colour metadata follows the same state for browsers that use it. Cleanup restores the original metadata and removes the state attribute.

Native iPhone Safari verification of the source build gives root/body rgb(7, 26, 44) and theme #071a2c at the footer; the screenshot shows a continuous dark background behind the bottom controls. Footer geometry remains 402×227.78125px. The same-page footer-to-top check restores the sky canvas and theme, with the sky fully visible and the sea hidden. Evidence is in ignored `work/native-safari/footer-edge-source.png` and `footer-edge-return-sky.png`. The footer markup and layout are unchanged by this correction.

## Menu return — 19 November 2026

The native simulator reproduced the dark status-area strip after opening and closing the mobile menu. The menu DOM was gone, scroll locking was released, and computed root/body backgrounds were already sky-coloured, yet Safari retained the former menu colour above the page.

The open header and menu now use absolute document positioning while page scrolling is locked. A header-local offset captures the current scroll position before paint, so the open menu stays aligned with the viewport even when opened from a partially scrolled header. Closing removes that offset and restores the original overflow values. Focus restoration avoids scrolling the page. This removes the viewport-constrained menu layers responsible for the retained colour; the closed header continues to scroll naturally at full opacity.

The production build passes. At 402px width, three consecutive open/close cycles return to the uninterrupted sky. Opening at scroll 40 positions the menu header at viewport top 0 and the menu bottom at 714; Escape returns to scroll 40, header top -40, opacity 1, focus on the menu button, and unlocked root/body scrolling. Selecting Aeria ID closes the menu, releases scrolling, and reaches #identity. Native screenshots and measurements are in ignored `work/native-safari/menu-source-*` and `menu-close-source.png`.

The open header background extends through the large viewport plus the existing 72px artwork allowance, while the menu content keeps its dynamic-viewport height. Final native captures at 320px layout width show continuous dark coverage behind both browser control areas; at 402px, three more close cycles restore the sky without a retained strip. The final build also preserves the partially scrolled Escape result. Evidence is in ignored `work/native-safari/menu-final-*`.

WebKit's explanation of viewport-constrained colour extension is at https://bugs.webkit.org/show_bug.cgi?id=301756#c2. The results above are observations of this site's native reproduction and corrected build.

## Menu visual refinement — 19 November 2026

The mobile menu keeps its existing deep blue canvas and display typeface. Its row spacing is now bounded in relation to the viewport, with aligned number columns, smaller arrows, softer dividers, and a tagline aligned with the link labels. The inherited bottom border and shadow are removed so the background continues into Safari's controls. The open-menu beta button also stays on one line at narrow widths.

The production build passes. Native Safari checks at 320px and 402px layout widths show all five links fitting without horizontal or vertical menu overflow; row heights are approximately 77px and 100px respectively. Native responsive inspection at 768px also preserves all links. Three open/close cycles retain the clean sky return and restored page scrolling. Final source screenshots and measurements are in ignored `work/native-safari/menu-polish-final-*`.

## Glass menu — 19 November 2026

The current menu replaces the preceding numbered list with a centered group of display-type links over a full-screen frosted layer. Backdrop blur and a translucent blue tint reveal the underlying cinematic scene; a top colour blend matches the document canvas. Browsers without backdrop-filter support receive a nearly opaque blue fallback. The open header keeps the original logo and wordmark, uses a 44px circular close control, and moves the beta action into a glass button below the links. The closed header and its natural scroll behaviour are unchanged.

The production build passes. Native Safari checks at 320px and 402px show all five links and the beta action fitting without menu overflow. Three consecutive open/close cycles restore the sky and unlocked scrolling with no retained colour strip. Keyboard checks confirm initial link focus, reverse wrapping from Close to the beta action, forward wrapping back to Close, and Escape restoring focus to Open menu. Opening from scroll 40 and selecting Aeria ID closes the menu and reaches #identity with scrolling released. Evidence is in ignored `work/native-safari/menu-glass-final-*`.

## Menu type and transition correction — 19 November 2026

The navigation now uses Manrope in a left-aligned column, retaining the original Aeria wordmark. The beta action is an underlined text link, and the close control has a consistent 44px hit area without the previous circular treatment. Header controls keep their layout throughout opening and closing.

The menu lifecycle explicitly separates entering, open, closing and closed states. Its glass surface fades with CSS opacity; the links use a short opacity/translation transition. The menu stays mounted and document scrolling stays locked until the exit finishes. Internal navigation runs after that cleanup, so destination scrolling begins after the glass closes. Interrupted transitions can reverse, a timeout handles missing transition-end events, and reduced motion bypasses the fade. At a partially scrolled header, the shell moves between its original document position and the open-menu position without snapping.

The production build passes. Native Safari frame samples at scroll 0 and 40 show intermediate opacity values in both directions, stable horizontal control positions, and scrolling remaining locked until the menu closes. At scroll 40, shell top moves continuously from -40 to 0 and back to -40. Tests also pass for 320px menu fit, keyboard wrapping and Escape, rapid close/reopen/close, and deferred #identity navigation. Screenshots and measurements are in ignored `work/native-safari/menu-refined-*` and `menu-motion-*`; `menu-refined-transition.mp4` is a native simulator recording.

## Menu lettering and easing refinement — 19 November 2026

The accepted layout now uses locally hosted Belleza for the five navigation labels, with champagne-gold text and more open letter spacing. Its SIL Open Font License is included alongside the font; the source is Google's `fonts/ofl/belleza` directory. Other site text keeps its existing typefaces. The glass and header-shell transitions increase from 280ms to 340ms with gentler initial easing; the link reveal and exit timings follow that pace, and the missing-event timeout increases to 440ms.

The production build passes. Native Safari checks at 402px and 320px show the new lettering fitting without menu overflow. Frame samples from scroll 40 confirm intermediate opacity values in both directions, stable horizontal controls, and restored scroll position/overflow after closing. Rapid close/reopen/close also passes. Evidence is in ignored `work/native-safari/menu-champagne-*`.

## Light menu lettering — 19 November 2026

The menu now uses Aeria Navigation Light, a renamed OFL derivative of the bundled Belleza font. The generator in `scripts/make-navigation-light.py` reduces outline weight while preserving character coverage, advances and kerning. The font declares weight 300 and includes a modification notice beside the original license. Size, colour, spacing and transition values are unchanged by this revision.

The production build passes. Native Safari loads the actual 300-weight font at 402px and 320px, with all five labels fitting and the same champagne RGB values. Link bounding boxes at 402px match the preceding release exactly. Evidence is in ignored `work/native-safari/menu-light-*`.

## Header placement — 20 November 2026

The navigation shell sits 18px higher through a relative offset, including its desktop and open-menu positions. The menu content geometry and animation timings retain their existing values. The production build passes; native Safari confirms the raised position and the transition from a partially scrolled header back to the same document offset, with scrolling released after close. Evidence is in ignored `work/native-safari/header-raised-*`.

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
