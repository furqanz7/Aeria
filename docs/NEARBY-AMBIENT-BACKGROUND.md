# Continuous nearby-screen atmosphere

16 November 2026. Follow-up to the request that the UI background stay alive after discovery completes.

- Both nearby-discovery screens now contain two slowly drifting light fields behind the text. The existing particle layer also drifts, with occasional soft glints.
- Connected identities, labels and phone positions stay steady. The discovery sequence does not restart; ambient motion continues independently after Connected.
- CSS transforms and opacity handle the motion. There is no new JavaScript animation loop, dependency or downloaded artwork.
- Ambient animation pauses outside the picture's viewport threshold and while the document is hidden. It also honors the existing **Pause atmosphere** control in the hero; no control was added to the picture.
- Reduced motion disables the ambient animations. With JavaScript disabled, their default state is paused.
- The merchant UI and all other page sections retain their existing presentation.

`WalletPhone.tsx` adds the two background layers; all styling and animation is scoped to `.product-scene-people` in `product-scenes.css`.

The recorded review clip is `docs/screenshots/nearby-ambient/connected-motion.gif`. It shows background motion after the identities have already reached Connected. The website uses live CSS rather than this GIF. Capture files and temporary preview source are retained under `work/nearby-ambient/`; the preview route was removed before building production.

## Verification

- Production build passed compilation, integrated lint/TypeScript checks and static generation. `git diff --check` passed. Initial route JavaScript remains 159 kB.
- In the production page, the scene stayed Connected while the light field's transform continued changing. The animation had infinite iterations and a running state. Names remained Mina and You; the picture contained zero buttons.
- Verified the existing hero atmosphere control pauses the screen backgrounds even when the picture is in view, and resumes them afterward.
- Verified offscreen backgrounds pause and resume on re-entry.
- At 320px, content fit within the viewport without horizontal overflow. Reduced-motion reloads showed no light or particle animation.
- A JavaScript-disabled load retained visible identities and paused backgrounds, with zero picture controls.
- Fresh production browser logs showed no warnings or errors.
- Saved an ongoing-motion recording and a desktop section capture. The GIF is only a review artifact; no GIF is loaded by the website.
- Removed the temporary preview route before building and stopped owned preview processes after checking.

Local only. No deployment or infrastructure changes.
