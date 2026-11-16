# Proximity, with Purpose — visual enhancement

16 November 2026. The owner asked to enhance this section and explicitly chose to keep the click-through demo.

The section now presents the same connection from two sides. A light sender screen and a deep-blue recipient screen sit in an angled device composition within the existing underwater artwork. The larger, left-aligned Italiana heading and open narrative layout give the section a clearer visual hierarchy. Motion remains restrained: the devices settle slightly when discovery becomes a connection, screen content transitions on clicks, and soft light fields continue behind the interface.

## Inventory and decisions

| Element | Decision | Result |
| --- | --- | --- |
| `#p2p` anchor, navigation and introductory copy | Preserve | Existing links and product direction remain. |
| Discover, Review, Authorize, Confirmation | Preserve and improve | Every stage still requires a click. The recipient screen now reflects the same stage. |
| Choose, Confirm, Preview, Back, Replay controls | Preserve and improve | Controls sit beside the scene on desktop and immediately below it on mobile. Keyboard focus stays on the primary action after stage changes. |
| $25.00 USD, $0.00 example fee, route and recipient | Preserve | Same illustrative values and Mina/you Aeria IDs. |
| Find the person / Make it personal / Keep it intentional | Preserve and redesign | Original headings and copy now form the active step narrative. |
| Single phone, floating letter avatars and orbit outlines | Redesign | Replaced with two code-native devices and distinct screens. No original assets were deleted. |
| Existing ocean artwork and approved open typography | Preserve | Reused the site's own background, Italiana and Manrope. |
| New receiver states and subtle screen light | New | Discovery, connected, waiting for authorization, received confirmation. No particles or decorative circles were added between devices. |
| Concept qualification | Preserve and improve | Visible no-real-transaction caption and explicit live status for each manually selected step. |

The interfaces are illustrative. The demo does not perform discovery, biometrics or money movement. No integration or external action was added. Merchant and Designed Around You components retain their prior implementation.

## Verification report

Story: the visitor chooses Mina, reviews the recipient and illustrative amount, separately previews authorization, then sees confirmation on both devices. Back and replay remain available. All boundaries are local React state and rendered UI; there is no API or database boundary.

- Production build passed compilation, integrated lint/types and static generation. TypeScript and diff whitespace checks passed. Initial route JavaScript is 160 kB, approximately 1 kB above the preceding build. No dependencies were added.
- Production browser checks passed all four stages using keyboard Enter. Focus remained on the primary action, the current step updated, and review stayed in place until another action.
- Both devices showed $25.00 at confirmation; the recipient waited through review and authorization. Content bounds stayed above each phone's footer.
- Back to discovery returned to stage 0, Review again returned to stage 1, and Explore again reset to stage 0.
- At 320px, document width was 305px with no horizontal overflow; the heading and paired devices fit. Saved a 390px full-section review image.
- Reduced-motion changes removed atmospheric animation and screen transitions while preserving clickable controls. A fresh reduced-motion load showed stage 0, visible screens and enabled controls.
- With JavaScript disabled, both devices remained visible, the primary action was disabled, and a text description explained the full sequence and how to enable the demo.
- Existing hero Pause atmosphere control paused both screen light fields with the picture in view.
- Scrolling back to the hero paused both light fields offscreen. No browser errors were recorded; the reused tab retained two earlier development-only Framer scroll-container warnings, outside the changed component. Owned preview servers were stopped after verification.
- React review: animations do not update React state per frame; resize/media/visibility listeners are cleaned up; motion state is hydration-safe; decorative device text is represented by an accessible scene description; one live status reports user-selected changes.

## Artifacts

Before-and-after desktop and mobile captures are in `screenshots/proximity-enhancement/`. `click-through-steps.gif` combines the four captured states as a review preview; the website itself remains click-through and does not load the GIF. Original source snapshots are in `work/proximity-enhancement/`.

Changes are local only. No production deployment, DNS, domain or infrastructure changes.
