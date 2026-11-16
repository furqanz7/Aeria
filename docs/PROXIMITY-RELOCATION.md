# Original proximity visual relocated

16 November 2026. The owner requested the earlier Designed Around You proximity experience in Proximity, with Purpose, replacing the newly angled phones.

`ProximityDemo.tsx` now mounts the existing non-merchant `ProductScene` directly. Its original facing-phone geometry, discovery sequence, Mina/You identities, screen atmosphere and restrained particle movement are preserved. `ProductScene.tsx`, `WalletPhone.tsx` and their existing scene styles were not edited for this relocation.

Removed the angled `DeviceScreen` rendering and its unused styles from the proximity demo. The heading, narrative, step controls, keyboard behavior, back/replay and illustrative payment copy remain. The visual itself continues to depict nearby identity discovery; the manual controls advance the accompanying explanatory journey.

Designed Around You retains its separate single-phone native-entry illustration. Merchant presentation is unchanged. Source snapshots are in `work/proximity-relocation/`.

Verification: production build passed compilation, lint/types and static generation; diff whitespace checks passed. Production browser showed two original wallet devices, no angled-device nodes, Connected discovery, and active screen motion. Keyboard controls advanced Review → Authorization → Complete, then Replay returned to step 0. Designed Around You still contained one native-entry device and no old discovery scene. At 320px document width was 305px, with no horizontal overflow; reduced motion retained Connected and disabled particle animation. Browser logs showed no warnings/errors. Owned preview servers stopped after checking.

Proof: `screenshots/proximity-relocation/desktop.jpg` and `mobile.jpg`. This supersedes the angled-phone composition in `PROXIMITY-ENHANCEMENT.md`.

Local only; no deployment or infrastructure changes.

## Follow-up: controls removed

The owner subsequently requested removing the click-through controls. The Choose, Confirm, Preview, Back and Replay actions, their local step state/live status, interaction hint and unused styles are removed. Discover / Review / Authorize remain as static explanatory principles. The original nearby-discovery visual continues automatically with no change to its devices or animation. The caption now says Nearby discovery concept rather than Interactive product concept. `ProximityDemo` is now a server-rendered presentation around the existing client scene.

Production build and diff checks passed. Browser verification found zero buttons/inputs/selects in the section, automatic Connected discovery with active screen motion, no horizontal overflow at 320px, and a settled Connected view under reduced motion. No browser warnings/errors. Current screenshots: `screenshots/proximity-automatic/desktop.jpg` and `mobile.jpg`. Owned preview server stopped after verification. No deployment.
