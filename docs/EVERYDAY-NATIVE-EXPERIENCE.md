# Designed Around You — native entry points

16 November 2026. The owner approved distinguishing this section from Proximity, with Purpose.

Proximity retains the two-device click-through payment journey. Designed Around You now explains the planned everyday conveniences around that journey: finding someone through contacts or an Aeria ID, a Home Screen widget, and Spotlight or supported system shortcuts.

## Inventory and decisions

| Element | Decision | Result |
| --- | --- | --- |
| Section heading and introductory copy | Preserve | Fits into your day / Stays out of your way and the native-experience direction remain. |
| Contacts and Aeria ID search | Preserve and illustrate | A single phone shows a name search and contact match. |
| Widgets, Spotlight and supported system actions | Improve | Split into distinct feature descriptions and illustrated views. |
| Repeated two-phone nearby-discovery picture | Replace | Removed from this section's mounted page; its source and prior assets are retained. |
| Repeated deliberate-confirmation paragraph | Consolidate | Authorization remains covered by the Proximity demo and trust content. |
| Existing sky artwork, Italiana and Manrope | Preserve | Reused inside a quiet native-device composition; no stock assets or dependencies added. |
| Device/platform availability qualification | Preserve | Planned capabilities, with availability varying by platform and release. |

`NativeExperience.tsx` and its scoped stylesheet render one device, cycling through three views at five-second intervals with a restrained crossfade. All simulated UI is inside the phone; it contains no functional inputs or buttons. The existing atmosphere control pauses both the cycle and subtle screen motion. Playback also stops offscreen, with the document hidden, and for reduced motion. Listeners, observers and timers are cleaned up. Server and initial client state match.

These are planned product illustrations. No native integration, contacts access, system search action, authentication or transaction is actually performed by the website.

## Verification report

Story: a visitor sees how Aeria could fit into daily phone use, through three automatic native-entry illustrations. Payment discovery/review/authorization stays in the separate manual Proximity demo. The feature has no backend or external data boundary.

- Production build passed compilation, integrated lint/types and static generation. TypeScript and diff whitespace checks passed. Initial route JavaScript is 161 kB, approximately 1 kB above the preceding build.
- Production recording observed views 0, 1 and 2 with playback active. Each settled view was captured and visually inspected.
- Existing Pause atmosphere control froze view 2 for more than six seconds while the illustration was in view; its screen wash also reported paused.
- An offscreen recording held view 0 with playback inactive until the scene was brought into view.
- At 320px and 390px, document width did not exceed the viewport. The phone is deliberately larger within the mobile composition for screen readability.
- A fresh reduced-motion page load kept view 0 static, removed the wash animation, and showed no browser warnings or errors.
- With JavaScript disabled, one pane remained visible with playback inactive, zero controls, and descriptive fallback text.
- DOM inspection confirmed one phone, zero old nearby-discovery scenes, no duplicated deliberate-confirmation copy and zero controls in Designed Around You.
- Proximity remained manually controlled: Choose Mina advanced to Review, with Confirm recipient & amount still required.
- Currency regression check passed: the illustrative USD → EUR route at an input of 200 displayed 183.08 EUR. Restored the initial route and amount afterward.

Reduced-motion verification exposed existing initial HTML/style mismatches in the hero and currency example. Small hydration guards were added to those two components, and reduced currency transitions use zero duration. Their normal-motion presentation and calculations are preserved. A fresh production reduced-motion load had no console warnings/errors.

React review retained declarative view state, no per-frame React updates, cleanup for owned resources, a hydration-safe initial view, scoped CSS and an accessible scene description without automatic live announcements. Owned preview servers were stopped after verification.

## Review artifacts

`screenshots/everyday-native/` contains the before desktop capture, three new desktop views, a mobile view and `native-entry-points.gif`. The GIF combines settled production captures for review; the website uses live HTML/CSS and does not load it. Source snapshots are retained in `work/everyday-native/`.

Local only. No production deployment, DNS, domains or infrastructure changes.

## Phone positioning correction

The owner requested correcting the phone placement. Mobile scaling previously used a top-centre transform origin, shifting the rendered phone about 19.33px right of the illustration centre at 390px. The device is now anchored by its centre at every breakpoint. Its dimensions, five-degree tilt, screen contents and animations are preserved; desktop geometry is equivalent to the previous placement. Only positioning declarations in `native-experience.css` were changed.

Production build and diff checks passed. Browser measurements at 1440px, 390px and 320px found less than 0.001px horizontal centre error. At 390px the rendered phone width and height matched the pre-fix measurements. At 320px it remained inside the illustration with no horizontal overflow. Updated screenshots: `screenshots/native-positioning/desktop.jpg` and `mobile.jpg`. Original CSS is retained in `work/native-positioning/`. Owned preview processes stopped after verification; nothing deployed.

Follow-up: removed the five-degree device rotation at the owner's request, retaining the centre anchor and scale. Production build and whitespace checks passed. Browser matrices confirmed zero rotation on desktop and mobile, with centre error below 0.001px. Current proof: `screenshots/native-positioning/straight-phone.jpg`. Preview server stopped; no deployment.
