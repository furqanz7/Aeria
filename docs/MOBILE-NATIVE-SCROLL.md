# Mobile cinematic scrolling repair — 17 November 2026

> Superseded. The user rejected this mobile-only presentation and required the full desktop cinematic sequence on every device. See [UNIFIED-CINEMA.md](UNIFIED-CINEMA.md). The notes below describe the rejected ff8cde4 release.

## Reported failure

The user's native iPhone screenshots IMG_3810.PNG and IMG_3811.PNG show an abrupt navy area below the artwork and unstable scene/header positioning while Safari's controls change. The 23b15b8 JavaScript scroll-following stage did not resolve the native problem.

## Change

Below 860px, the sky and sea are two naturally scrolling chapters in one continuous document stage. Removed the stage-position measurements, ResizeObserver and scroll-to-translation pin. Mobile no longer uses a sticky stage, camera scaling, scroll-driven title/wing fading or dynamic-toolbar control offsets. Stable large viewport units size the chapters; minimum dimensions keep the wings clear of the discovery link on small phones and landscape screens. Both source images fade into a shared background at the chapter join rather than leaving an unpainted stage area.

The original artwork, Aeria wordmark, blue wings, iridescent ray assets and ambient wing/feather/cloud/light animation remain. The wing dissolve canvas runs only for the desktop pinned transition. Desktop retains its original scroll transforms and crossfade, applied through CSS variables so the mobile layout can override them from the first server-rendered paint. Reduced-motion mobile retains both readable chapters without ambient effects; desktop retains the static sky fallback, including when the preference changes during a sea scene.

No product demonstrations, integrations, navigation destinations, metadata, infrastructure or domain settings changed.

## Verification

- `npm run build` succeeds, including Next.js lint/type checks and static generation.
- Responsive browser sizes checked: 320×568, 390×844, 768×1024, 844×390 and 1440×900. No horizontal document overflow.
- Mobile stage uses relative document positioning with computed `transform: none`. At 660px scroll its top is -660px, with both chapter images and sea copy visible. There is no JavaScript pin to lag behind scrolling.
- Wings end before the discovery controls at each mobile size checked.
- Mobile menu fills the available 390×844 viewport below its header. Selecting Aeria ID closes it, restores body/root scrolling and navigates to #identity.
- Pause stops wing/ray CSS animations; resume restarts them.
- Desktop stage remains sticky at top 0; at 1100px scroll sea opacity is 1, sky/title opacity 0 and sea copy opacity approximately .98.
- Emulated reduced motion on mobile shows sea copy and hides rays/motion button.
- No warning/error messages in the checked browser session.

Screenshots are in ignored local `work/mobile-native-scroll/`: hero.jpg, transition.jpg and desktop-sea.jpg. These are responsive Chromium checks, not native iPhone Safari screenshots. Native toolbar compositing, momentum scrolling, safe-area rendering and the final top/bottom coverage must still be confirmed on the user's actual iPhone. The earlier protected Vercel preview is inaccessible to the user; use the public production domain for that check.
