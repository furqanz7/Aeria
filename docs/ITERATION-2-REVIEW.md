# Aeria — second visual iteration

> Historical floral iteration. The current direction removes flowers/petals, deepens the butterfly blue and restores the original wordmark logo. See [ITERATION-3-REVIEW.md](ITERATION-3-REVIEW.md).

15 November 2026. Local review build; no deployment, Git push, DNS, domain or production infrastructure change.

This iteration responds to the owner's feedback that Aeria needed a more ethereal, cloudy, blossomful direction, more animation, a more pleasant butterfly, removal of the floating identity container, and Aeria-only branding. This direction supersedes the first iteration's co-branding and oversized glass-butterfly treatment.

## What changed

- Replaced the giant glass butterfly image with a new sunlit cloud-and-blossom environment and a much smaller, natural pearl-white butterfly.
- Split the scene into a background, independent foreground cloud banks, butterfly and drifting petals. Clouds and butterfly move separately and travel at different rates during scrolling.
- Removed the hero's floating personal ID card entirely.
- Removed the second card from the Aeria ID section. Replaced it with open `you@aeria` typography, a delicate outline butterfly and a restrained connection reveal.
- Removed company co-branding from visible page copy, FAQ copy, footer, copyright, description, manifest and the active social image. The active website and metadata present simply Aeria.
- Refined the small butterfly motif in the existing code-native SVG component; original production logo and app-icon files remain unchanged.
- Softened chapter surfaces with mist-blue, faint lilac and blossom-pink light; added cloud transitions and a more botanical closing scene.
- Refined product-image framing, button/icon hover movement, navigation underlines, mobile-menu entrance and FAQ-answer transitions.

## Motion now in the experience

| Area | Motion |
| --- | --- |
| Hero copy | Staggered line entrances with a soft blur resolving into sharp type. |
| Sky | Independently drifting front/back cloud banks, with different scrolling offsets from the background. |
| Butterfly | A restrained flight path with gentle wing perspective movement, independently positioned from the atmosphere. |
| Blossoms | Small drifting petal accents, with fewer layers on mobile. |
| Story | Floating currency nodes and a travelling connection signal. |
| Identity | Name entrance and a connection line that opens as the section enters view. |
| Proximity concept | Discovery rings, nearby pulse, stage transitions and a completion flourish. Keyboard focus follows the next available action. The live region remains mounted across stages. |
| Currency concept | Animated route signal and a transition when the destination currency changes. |
| Ecosystem | Travelling points across the network connections. |
| Chapters | More visible movement, opacity and blur on entrance; content remains rendered before hydration. |
| Controls | Purposeful button, navigation, menu and disclosure feedback. |

Decorative scene loops pause outside the viewport and while the tab is hidden. Chapter loops are also paused outside their chapter. Reduced-motion mode disables decorative animation, parallax transforms and smooth scrolling. No extra runtime dependencies were introduced.

## Verification

- `npm run build` passed compilation, lint, TypeScript checking and static prerendering. Homepage first-load JavaScript is about 153 KB in Next's build output.
- `git diff --check` passed.
- Browser layout checks passed at 320, 390, 600, 768, 1024 and 1440 px; no horizontal page overflow and the main heading fits at every checked width.
- All 28 sampled HTML-linked/static resources returned HTTP 200, including the new scene assets and active social image.
- Final production browser session returned no console warnings or errors.
- Active rendered HTML and visible page copy contain no company co-branding. Neither floating-card component remains in the DOM.
- Normal cloud/butterfly animation and different scroll transforms were observed in the browser. Hero loops were observed pausing after scrolling out of view.
- Reduced-motion mode returned `animation-name: none` for cloud and butterfly, and automatic anchor scrolling. Normal motion returned after resetting emulation.
- Proximity flow was exercised by keyboard through recipient review, authorization preview, concept completion and reset. The next action receives focus. No real payment is sent.
- Currency route change recalculates the example; 250 USD produces 229.08 EUR under the fixed illustrative inputs. Invalid zero amount sets `aria-invalid=true`.
- All six FAQ disclosures opened and closed; mobile navigation and Escape-to-close work.
- All internal anchors exist; image loading completed without broken or pending images after visiting the page's sections.

Evidence: [iteration-2-checks.json](iteration-2-checks.json) and [iteration-2-resources.json](iteration-2-resources.json).

The existing TestFlight link is retained. Its enrollment/installation state remains unverified as recorded in the first audit. The website's interactions remain labelled concepts; no payment, biometric, discovery, FX quote or new inquiry backend was introduced. Real-device, Safari and field performance testing were not performed. No certification or Core Web Vitals score is claimed.

## Review artifacts

- [Captured atmosphere motion](screenshots/iteration-2/atmosphere-motion.gif): 28 actual browser frames, about three seconds, 720 × 450. It shows a sample of the atmosphere; the complete scrolling experience is best reviewed locally.
- [Desktop hero](screenshots/iteration-2/desktop-hero.jpg)
- [Mobile hero](screenshots/iteration-2/mobile-hero.jpg)
- [Tablet hero](screenshots/iteration-2/tablet-hero.jpg)
- [Open Aeria ID treatment](screenshots/iteration-2/desktop-identity.jpg)
- [Proximity concept](screenshots/iteration-2/desktop-p2p.jpg)
- [Connected ecosystem](screenshots/iteration-2/desktop-innovation.jpg)
- [Closing scene](screenshots/iteration-2/desktop-download.jpg)
- [Mobile navigation](screenshots/iteration-2/mobile-menu.jpg)
- [Full desktop page](screenshots/iteration-2/desktop-full.jpg)
- [Full mobile page](screenshots/iteration-2/mobile-full.jpg)
- [First and second iteration comparison](screenshots/iteration-2/iteration-comparison.jpg)

Static captures use reduced-motion emulation to keep them stable. The GIF was captured with normal motion enabled. Browser emulation was reset after QA. Original and first-iteration assets remain on disk as history; the previous giant butterfly and old social card are no longer referenced by the active page.

New image paths, licensing context and all three exact generation prompts are in [ITERATION-2-ASSETS.md](ITERATION-2-ASSETS.md).

## Run for review

```sh
cd /Users/Furqan/Desktop/Aeria/aeria.co.in
npm run dev
```

Open http://localhost:3000 to review the motion and scroll depth. The temporary production verification server was stopped after QA. For the optimized build, run `npm run build` and then `npm run start`, separately from the dev server. Production publication still requires the owner's approval.
