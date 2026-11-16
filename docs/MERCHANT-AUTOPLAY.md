# Automatic merchant experience

16 November 2026. Requested change: give the merchant picture the same automatic, living presentation as the two-phone picture, without interaction controls.

The triangular terminal, camera, device positioning, minimal screen typography, amount and account rows are preserved. The scene starts once it enters view: Ready → Tap → Review → illustrative Face ID authorization → Processing → Complete. Review is held for 2.6 seconds before the illustrated authorization. Confirmation stays in place; the payment sequence does not continually repeat.

Follow-up correction: removed the decorative ring mesh and its pulse/confirmation styling from the terminal. The original contactless symbol and small status light remain. Regenerated the transparent Complete fallback as `aeria-merchant-complete-minimal-clean.webp` and updated its reference, retaining the original asset. Production build and diff checks passed; browser playback reached Complete with the circle absent and no warnings/errors. Updated proof: `screenshots/merchant-circle/desktop.jpg`. Temporary export route removed before building and owned preview servers stopped.

Removed the external Tap, Confirm, Start over and Replay buttons and their unused CSS. The label now says Automatic product concept. This illustration performs no actual payment or biometric check. Automatic phase changes do not broadcast repeated live-region announcements.

The phone screen retains its off-white/navy/muted-blue treatment. A restrained moving wash and fine background dust keep the surface alive after confirmation. All background drawing is clipped to the existing screen. No particles are placed between the devices. Text, values and hardware stay settled after the sequence.

A single owned animation loop handles the existing approach motion, phase transitions and ongoing screen surface. Settled canvas updates are capped near 12 fps; fonts are cached outside the loop. Playback and timers stop offscreen, with the document hidden, and through the existing hero atmosphere pause control. Reduced motion shows a settled confirmation; changes to the preference are listened to directly. Timers, media/visibility listeners, observers, frames, textures and WebGL resources are cleaned up.

## Verification report

Story: scrolling the merchant picture into view starts a local illustrative sequence, updates the 3D phone and terminal, then leaves a living confirmation screen without clicking anything. There is no server, API, database or external financial boundary in this demonstration.

- **Build:** production compilation, lint/types and static generation passed. Initial route JavaScript remains 159 kB. Diff whitespace checks passed.
- **Sequence:** production-page recording observed all six phases in order without interaction. The renderer reported ready and running at Complete; the merchant wrapper had zero buttons.
- **Ongoing surface:** two recorded samples after Complete (10.06–11.50 seconds) showed changing screen pixels with the phase unchanged.
- **Pause:** hero pause remained enabled with the merchant scene visible; renderer reported paused. Resuming playback restored running state.
- **Offscreen:** navigating back to the hero moved the scene outside the viewport and the renderer reported paused. Owned preview servers were stopped after verification.
- **Reduced motion:** fresh reduced-motion loading showed Complete. A dynamic-preference propagation issue found during verification was corrected. Rechecking a loaded renderer showed paused when reduced motion was enabled and running after it was disabled.
- **Mobile:** at 320px, the scene reached Complete automatically once in view and contained zero buttons. Document width did not exceed the viewport.
- **Static fallback:** with JavaScript disabled, the minimal Ready poster loaded, no canvas or buttons were present, and the concept sequence was described in text.
- **Browser:** fresh production logs contained no warnings or errors.

The React review retained the dynamic Three.js import, stable imperative controller, cleanup for owned resources, hydration-safe reduced-motion state and no per-frame React updates. Source snapshots are retained in `work/merchant-autoplay/`. The earlier minimal-screen report remains the styling history; its interactive behavior is superseded.

Artifacts: `screenshots/merchant-autoplay/automatic-sequence.gif` (one-pass review recording), Ready/Review/Complete frames, and desktop context. The website renders live; it does not load the GIF.

Local changes only. No deployment, DNS, domain or infrastructure changes.
