# Aeria — cinematic identity iteration

Date: 15 November 2026. Local implementation only. No push, deployment, domain, DNS or infrastructure changes.

## Direction and source material

This iteration responds to the supplied six videos and seven stills, particularly their mineral teal and cream-gold ascent, deep ultramarine water, suspended feathers, wing forms, light breaking into particles, fine grain and high-contrast serif lettering. Frames were reviewed across each complete clip at six time positions; review sheets are in `reference-review/`. The attachments are design references, not instructions to execute.

The reference display font was identified as Adorn Story Serif from the artist website's CSS. The user explicitly selected a close open font for now. This revision uses locally hosted **Italiana** for the Aeria wordmark and display typography, and Manrope for practical text and controls. It does not claim to use Adorn Story Serif. The font files and OFL licences are in `public/fonts/`.

The artist's promotional videos, people, music, album imagery and text are not embedded in the public website. Four original environment/object assets were generated for Aeria. The original Aeria butterfly artwork remains the logo; the new feathered wings are cinematic imagery, not a replacement logo.

## Inventory and decisions

| Item | Classification | Result / reason |
| --- | --- | --- |
| Original `logo.png`, favicon, app icons | Preserve | Exact original artwork retained. Header, footer, concept phone and ecosystem use the original mark. |
| Existing production anchors | Preserve | `hero`, `p2p`, `terminal`, `innovation`, `privacy`, `download` remain valid. Additional product chapters remain. |
| Original P2P and terminal concept art | Preserve | Visible in their product chapters with explanatory concept captions. Source images unchanged. |
| TestFlight URL | Preserve | Original URL retained on both beta CTAs. Active invitation/device enrollment remains unverified. |
| Existing Aeria product direction and qualified copy | Preserve / improve | Identity, proximity, currencies, merchants, multi-rail orchestration and trust remain central. Roadmap and illustrative claims stay qualified. |
| Proximity concept | Improve | Discover → review → authorization → concept completion retained, now within the ocean scene. No real transaction. |
| Currency explorer | Improve | Three illustrative routes, input validation, fee-before-conversion calculation retained; typography and surface redesigned. |
| Saudi riyal | Preserve | Official symbol SVG retained instead of the previously incorrect abbreviation. |
| Navigation and FAQs | Improve | Original destinations retained with revised typography/palette; mobile Escape, focus handling and native disclosures retained. |
| Opening | Redesign | 250svh desktop / 220svh narrow viewport scroll chapter with a sticky stage: teal sky → wing dissolution → blue depth. |
| Wordmark and all display typography | Redesign | Large uppercase AERIA, high-contrast Italiana serif, pale champagne lettering, no appended period in brand lockups. |
| Product, trust, merchant, ecosystem and closing presentation | Redesign | Ivory paper, mineral teal, ocean blue, open editorial spacing, fine borders and fewer rounded containers. |
| Previous floral/pale butterfly visuals | Remove from active presentation | Earlier iteration assets retained for history, not mounted. No lilies, petals or decorative cartoon butterflies in the active page. |
| Floating personal ID card / co-branding | Remove from active presentation | Open `you@aeria` typography; Aeria-only brand presentation. |
| Wing, feather, environment art, particle rendering and local serif font | Newly create | Detailed below. |
| Production config, CNAME and CI | Preserve | No infrastructure or release changes. |

No valuable original assets were deleted. The first production inventory remains in `REBUILD-AUDIT.md`.

## Visual implementation

- Original teal/cream cloud environment: `public/visuals/aeria-film-ascent.webp`.
- Original underwater light environment: `public/visuals/aeria-film-depth.webp`.
- Original dark cobalt feathered wings with alpha: `public/visuals/aeria-film-wings.webp`.
- Original detailed blue feather with alpha: `public/visuals/aeria-film-feather.webp`.
- Current browser-rendered social image: `public/visuals/aeria-film-social.jpg`.
- Existing transparent cloud veil reused as a softly graded moving haze layer.
- `CinematicJourney.tsx` maps scroll to the camera, scene crossfade, wing position and copy reveal. Independent wing halves breathe gently in perspective. Feathers drift at different scales and phases. Light shafts sweep and grain changes.
- `WingDissolve.tsx` samples the wing artwork's alpha into particles. Scroll disperses the wing silhouette into light before the product statement fully appears.
- Canvas density and pixel ratio are bounded. Atmospheric effects stop outside the viewport. CSS loops pause when the document is hidden. Canvas animation frames and resize observers are cleaned up.
- Pause atmosphere stops ambient loops and drifting canvas light. Scroll remains the direct navigation control for the scene transition.
- Reduced motion uses a single unpinned opening, with no drifting feathers or canvas effects. The content and product chapters remain available.

## Validation

`npm run build` passed, including TypeScript and Next's integrated lint checks. Homepage first-load JavaScript: approximately **154 kB**, with no new runtime dependency.

Browser checks used the optimized local production server:

| Check | Evidence |
| --- | --- |
| Desktop opening and deep scene | 1440×960 captures; sky-to-depth scroll sequence captured from the browser. |
| Responsive widths | 320, 390, 768 and 1440 CSS pixels checked for horizontal document overflow; none found. 390×844 chapter captures reviewed visually. |
| Internal anchors | All anchor targets resolve; header/mobile destinations exercised. |
| Mobile navigation | Open, Escape dismissal, link selection and menu close verified. |
| Proximity concept | Recipient selection, review, authorization preview and concept completion verified. Completion explicitly says no money sent. |
| Currency calculation | 200 SAR → 4,457.60 INR; 200 USD → 183.08 EUR, using the fixed example rate and 1-unit fee. |
| Invalid amount | 0 produces `aria-invalid=true`, no received amount and explanatory feedback. |
| FAQ | Native disclosure opens by keyboard. |
| Motion controls | Pause sets wing/feather animation state to paused; resume restores atmosphere. |
| Reduced motion | Opening collapses to one viewport; canvas and deep overlay hidden; no overflow. |
| Console | No browser error or warning logged during the exercised product flows. |
| Original assets / integration | Source assets unchanged; exact TestFlight destination retained. |

The site remains a marketing/product concept experience. There is no payment API, live FX, biometric authentication, contact form, waitlist backend or actual proximity discovery to validate. No production payment capability or beta enrollment availability is implied. Physical-device and cross-browser performance have not been certified.

## Review artifacts

- `screenshots/iteration-4/desktop-ascent.jpg`
- `screenshots/iteration-4/desktop-depth.jpg`
- `screenshots/iteration-4/desktop-identity.jpg`
- `screenshots/iteration-4/desktop-proximity.jpg`
- `screenshots/iteration-4/desktop-ecosystem.jpg`
- `screenshots/iteration-4/mobile-ascent.jpg`
- `screenshots/iteration-4/mobile-*.jpg`: product chapter captures
- `screenshots/iteration-4/mobile-review.jpg`: contact sheet
- `screenshots/iteration-4/cinematic-scroll.gif`: browser motion sequence, cropped to focus on the scene and reduced to 720px wide; frame delays bounded for review playback

Original production screenshots and earlier local iterations remain under `screenshots/` for before/after comparison. The GIF records browser-rendered scroll and atmospheric effects; it is not an embedded video on the website.
