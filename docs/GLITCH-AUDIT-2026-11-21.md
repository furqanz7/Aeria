# Aeria glitch audit — 21 November 2026

This pass repairs reproduced defects while retaining the accepted sky/sea composition, wing artwork, light navigation type, raised header, natural header scrolling, glass menu transitions and full-bleed product framing.

## Repairs

- **Reveal flash:** headings were fully visible, then dropped to roughly 26% opacity and moved down 33px when their entrance began. Offscreen entrances are now prepared before they enter view; content already visible at hydration or restored scroll positions stays settled. A fresh trace increased monotonically from 0 to 1 instead of flashing backwards.
- **Partial reveal after section jumps:** starting at the middle of a tall section could expose less than the previous 16% intersection threshold, leaving a visible heading fragment hidden. The entrance now starts at the first intersection. Server-rendered and no-JavaScript content remains visible.
- **Menu width jump:** browsers with classic scrollbars moved the menu toggle 15px sideways when opening removed the page scrollbar. A stable document gutter retains the same layout width during scroll locking. Overlay-scrollbar browsers retain their full viewport width.
- **Menu accessibility isolation:** background content and the skip link are inert while the navigation dialog is present. Closing restores each element's prior state and the original overflow settings. Closing links are excluded from the keyboard trap.
- **Narrow beta button:** at a 320px viewport with a classic scrollbar, the beta button wrapped and clipped above the raised header. At widths up to 360px, compact horizontal spacing keeps it on one line. Its measured height is now 39px rather than 51px, without lowering the header.
- **Maximum currency amount:** SAR 100,000 → INR expanded the card from 261px to 271.2px at a 305px layout width. Long formatted amounts now scale within the card's own content width; short amounts retain the approved type size. All three maximum-value routes retain the 261px card width. Rates, fees, copy and validation behaviour are unchanged.

## Verification already completed

- Production build, lint, TypeScript and static generation passed.
- Classic-scrollbar browser measurements confirm the menu toggle retains its horizontal position across open/close and Escape restores focus and scrolling.
- Accessibility-tree inspection exposes the navigation dialog while open and restores the page after selecting a section link.
- Native iPhone 17 Safari: three open/close cycles at a 320×568 responsive layout keep the toggle at x265.5px and retain a 320px document. Menu content fits its scroll area, background inert state and overflow lock are restored after every close.
- Native Safari currency tests cover three routes and six inputs each: 100, 100000, empty, zero, above maximum and a valid fractional amount. Expected invalid states and formatted outputs were checked.
- Merchant autoplay reaches ready, tapping, review, authorization, processing and completion. Its caption position and 122px message height stay stable through all phases at 320px width.
- Currency-route and ecosystem animations advance, pause without advancing, and resume. The everyday scene advances through all three views. Proximity discovery reaches connected and its ambient animation continues afterwards.
- A deliberate native WebGL context loss displays the merchant poster; restoration returns to the live canvas. The exception is injected only by ignored local QA code, which restores the context.
- Footer entry changes the document edge/theme to #071a2c and returning to the top restores #4a727e.

## Evidence and limits

Ignored local evidence is under `work/native-safari/`: `audit-*.json`, the native audit wrapper and native screenshots. Responsive iframe checks run inside native Safari at explicit CSS viewport dimensions; these are viewport checks, not separate physical devices. Earlier browser measurements also exercised classic scrollbars and the accessibility tree. Physical Android hardware and every mobile browser release are outside this pass's direct evidence.

No diagnostic scripts are included in the deployed application. Product demos remain illustrative; this audit does not validate real payments, banking integrations or the external TestFlight service.

## Final regression results

The final production source passed all 55 section checks across 320×568, 390×844, 768×1024, 1440×900 and 844×390: no document overflow, out-of-bounds controls, in-view hidden reveals, broken images, missing fragment targets or captured runtime errors. The 18 currency cases also passed explicit width, formatted-output and invalid-state checks.

Unframed native Safari at 402×714 passed rapid close/reopen during the closing transition, Escape, focus restoration, scroll-position preservation and section navigation. Opening at scroll 40 and closing with Escape retains scroll 40, restores focus to Open menu and releases the inert/overflow states. Selecting Aeria ID reaches #identity at a 23.83px top offset. All six FAQ summaries open their answer content without horizontal overflow. A native screenshot after returning to the top shows continuous sky behind the status area and bottom browser controls.

The final foreground motion trace confirms all three everyday views, continued discovery ambience after connection, currency/network pause-resume and footer-to-sky theme restoration. A backgrounded sample was excluded rather than treated as an animation failure; the application intentionally pauses background motion. QA result tokens distinguish fresh runs from older backgrounded documents. This instrumentation is local only.
