# Safari edge coverage — IMG_3812.PNG follow-up

The user's native iPhone screenshot confirms the normal document backdrop in 0d731f6 did not remove Safari's solid teal top/bottom extensions. The screenshot also shows a caption line clipped at the bottom of the viewport-attached scene.

## Renderer

On browsers supporting CSS scroll timelines and length-based animation ranges, the scene is normal, relative-positioned document content. A browser-driven transform advances exactly one pixel per scroll pixel from 0 to 250svh minus 100lvh, then releases with the section. This reproduces the original pin without JavaScript scroll writes or a fixed/sticky element. Unsupported browsers retain the same scene and timing with native sticky positioning. All zoom, fade, wing dissolve, sky/sea crossfade and headline animations remain shared across screen sizes.

The hidden skip link is absolute until focused, so it does not introduce another hidden fixed layer. It remains fixed and usable when reached by keyboard. The mobile menu is mounted only while open and retains its intended fixed overlay.

The caption/discovery controls reserve the stable difference between large and small viewport heights, in addition to safe-area spacing. This puts them above the expanded browser toolbar without dynamic-height-driven layout shifts. The artwork still fills the large viewport.

Atmosphere pause stops time-based wing/ray/feather/cloud/particle motion. The document pin and scroll-driven dissolve continue to follow user scrolling so pausing does not leave the scene or dust at an old scroll position. Reduced motion continues to show the static composition.

## Evidence and limits

`npm run build` passes lint/type checks and static generation. At 390×844 the scene stays at viewport top 0 at progress 0, .25, .5, .9 and 1. After release at progress 1.1 its top is -126.5px, as expected; returning to .3 and 0 returns it to top 0. No JavaScript writes the scene transform.

After allowing viewport/style changes to settle across animation frames, checks at 1440×900, 768×1024, 844×390, 320×568 and 390×844 produce the same halfway camera (1.14), wing scale (.84), wing Y (-63.1818px) and sea opacity (.625), with scene top 0 and no horizontal overflow. An immediate read during a viewport resize caught one stale frame; the checks await layout and scroll-timeline updates rather than treating that transient measurement as a final frame.

When atmosphere is paused, wings/rays stop while the document pin continues to follow scrolling. Reduced motion disables the pin animation and renders the static sky. The skip link becomes fixed when focused and Enter navigates to #main-content; after activation it is absolute again. The mobile menu closes on Aeria ID, navigates to #identity and restores body scrolling. No browser warnings/errors in the checked session. Local screenshots and measurements are in ignored work/safari-scroll-timeline/. Native iPhone Safari top/bottom toolbar compositing remains a physical-device check. Responsive Chromium screenshots cannot establish that the teal strips are removed on the user's iPhone.

Primary references:
- https://bugs.webkit.org/show_bug.cgi?id=301756#c2 — fixed/sticky colour extension near obscured viewport edges.
- https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/ — Safari scroll timelines.
- https://webkit.org/blog/17862/webkit-features-for-safari-26-4/ — compositor-thread scroll-driven animation support.
