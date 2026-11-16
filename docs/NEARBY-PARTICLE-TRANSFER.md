# Directional nearby particles — rolled back

16 November 2026. **Current status: rolled back.** The owner rejected the particle revisions. `WalletPhone.tsx` and `ProductScene.tsx` were restored from the snapshots saved before directional-particle work. The appended directional CSS was removed. The original automatic discovery and ongoing atmospheric background remain. All directional recordings below are superseded.

Historical requested refinement: one phone should appear to send particles and the other should receive them.

Rollback verification: both restored TSX files exactly match their pre-transfer snapshots. Production build passed compilation, lint/types and static generation; diff whitespace checks passed. Browser reached Connected and confirmed the original light/mist fields and particle drift running on both screens, with 55 original points each and no gap-stream elements. Current screenshot: `screenshots/nearby-transfer/restored-ambient.png`. Local preview server stopped. No deployment.

Current treatment supersedes the brighter visibility refinement described below, which the owner rejected. Removed all added glow and trails, reduced size to 0.8–1.4 CSS pixels and density to 64 per screen, and replaced the bending midpoint trajectories with continuous straight paths. Soft blue-grey particles fade in and out on 4.6–5.8 second cycles, with a broad outward/inward flow. The gap remains clear. Current preview: `screenshots/nearby-transfer/soft-screen-flow.gif` and context: `screenshots/nearby-transfer/soft-screen-context.jpg`.

Current validation: production build passed compilation, lint/types and static generation. Browser confirmed both directional loops running with no box shadow or pseudo-element trails, clipped screen overflow, and zero gap-stream elements. Mobile at 390px had no horizontal overflow; reduced motion disabled animation. No browser warnings/errors. Local preview server stopped; nothing deployed. Visual acceptance remains with the owner.

Latest correction: the external gap stream was removed at the owner's request. After automatic discovery reaches Connected, the left phone's screen particles funnel toward its facing edge and the right phone's screen particles disperse inward. All particles remain clipped inside the screens; the space between phones stays clear. The opposite rotations of the phones are accounted for, so both screen effects travel in the same visible direction.

Visibility refinement: each screen now uses 84 particles rather than the previous 30 active points. Varied sizes (1.2–2.32 CSS pixels before scene scaling), brighter icy-blue points, a soft glow, and short trails on every fourth particle give the flow more depth. Individual 2.6–4.2 second cycles follow gently bending paths. The sender funnels outward; the receiver disperses inward. Foreground text and composition remain unchanged.

The existing slow atmospheric light fields continue behind the steady identities. No interaction or control was added to the picture. Phone geometry, typography, discovery timing, merchant presentation and integrations are preserved. This is a visual product concept, not a real transfer.

`WalletPhone.tsx` assigns sender/receiver roles and deterministic particle positions and timing. `ProductScene.tsx` assigns the two screen roles. `product-scenes.css` scopes the movement to the people picture and its Connected phase. CSS transforms and opacity drive the loops, without a JavaScript animation loop or additional dependency.

Motion pauses while offscreen, while the document is hidden, or through the existing hero atmosphere control. Reduced motion retains static screen particles. The preceding ambient-motion report remains a record of that iteration; this directional flow supersedes its Connected particle drift.

## Verification

Latest clear-gap correction: TypeScript and `git diff --check` passed. Browser verification found zero gap-stream elements, both screen animations running, and both screen containers clipping overflow. The corrected screenshot is `screenshots/nearby-transfer/clear-gap.png`. No production deployment was performed.

Visibility-refinement verification: the production build passed compilation, lint/types and static generation. Production browser inspection confirmed 84 displayed particle elements per screen, sender/receiver animations running, zero gap-stream elements, and clipped screen overflow. At 390px, document width was 375px with no horizontal overflow. Reduced motion disabled animation and removed trails. Browser logs contained no warnings or errors. Updated preview: `screenshots/nearby-transfer/enhanced-screen-flow.gif`; context screenshot: `screenshots/nearby-transfer/enhanced-screen-context.jpg`. Preview server stopped after checking.

- `npx tsc --noEmit` and `npm run build` passed, including integrated lint/types and static generation. Initial route JavaScript remains 159 kB.
- Production page reached Connected automatically, with zero buttons in the picture and stable Mina/You identities.
- Two position samples relative to their phone bounds confirmed every tracked visible particle moved right: 26 sender particles and 22 receiver particles. All nine gap particles used the running crossing animation.
- Existing Pause atmosphere control paused both screen and bridge particles. Offscreen particles paused; reduced motion disabled particle animation and hid the bridge.
- At a 320px viewport, document width was 305px and the picture width was 261px, with no horizontal overflow.
- Fresh production browser logs contained no warnings or errors.
- The earlier recording below predates removal of the gap particles and is superseded. Saved a production-page recording at `screenshots/nearby-transfer/particle-flow.gif`, a connected frame, and a desktop context screenshot. The website renders live CSS; it does not load the GIF.
- Temporary preview route was removed before building. Owned preview servers were stopped after verification.

Local changes only; no deployment, DNS or infrastructure changes.
