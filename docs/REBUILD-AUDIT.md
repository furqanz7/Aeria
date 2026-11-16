# Aeria existing-site audit and rebuild inventory

Audit date: 14 November 2026 (Asia/Riyadh). Baseline commit: cb921af.

## Evidence and scope

Opened https://aeria.co.in and followed its 307 redirect to https://www.aeria.co.in/ (200). Browser-rendered content, source, sitemap and links were inspected. The web text extraction service failed, but the website itself was accessible using the browser and HTTP. The live sitemap contains only the homepage. All linked internal destinations are homepage sections; no linked additional, legal, social or contact pages were found. The local Next.js homepage's content, assets and navigation match the live site. The supplied screenshot is a mood board/master brief, not a screenshot of the live site. Its embedded third-party fintech UI is inspiration, not an Aeria asset or verified product screen.

## Architecture

Next.js 15.5.18 App Router, React 19.1, TypeScript, Tailwind 4, Framer Motion 12. Single route `/`, generated sitemap, robots.txt, web manifest, Next image optimization, security response headers, Vercel configuration and CNAME. Clean working tree before audit output. No API routes, forms, database, credentials, payment service, analytics or inquiry delivery integration found. TestFlight is the only external functional integration. Its URL returns HTTP 200; enrollment capacity and the beta app's capabilities are not established by that response.

## Inventory and decisions before implementation

| Existing item | Classification | Decision and justification |
| --- | --- | --- |
| Homepage `/` | Redesign | Retain a complete single-page experience; no need to create empty subpages. |
| `#hero` | Redesign | Replace dark generic intro with atmospheric identity-led introduction. Preserve Aeria name and butterfly lineage. |
| `#p2p` | Improve | Retain P2P discovery story; distinguish discovery, confirmation and authorization; concept demonstration. |
| `#terminal` | Improve | Retain merchant/terminal direction and original terminal artwork; label artwork and capabilities as concepts. |
| `#innovation` | Redesign | Replace UPI-versus-card comparison with global multi-method orchestration per master brief. |
| `#privacy` | Improve | Retain privacy/security story; explain noncustodial direction without unverified certifications. |
| `#download` | Improve | Retain exact TestFlight destination and beta framing; add availability qualification. |
| Desktop/mobile navigation | Redesign | Keep original anchor URLs working; introduce identity, experience, merchants, vision and security labels; keyboard-operable mobile menu. |
| Skip-to-content | Preserve | Retain keyboard access to main. |
| Footer | Improve | Add Aeria by liquiflow; real section and beta links only. No invented contact/legal/social destinations. |
| `logo.png` | Preserve | Original glass butterfly identity. Keep original unchanged and available; retain a visible small brand image. New bright artwork extends this visual lineage. |
| `p2p.PNG`, `p2p.webp` | Preserve | Keep original files unchanged; use optimized WebP as the original product concept, clearly labelled. |
| `terminal.jpeg` | Preserve | Keep original artwork unchanged and feature it as original terminal concept. Image contains historical claims, so explain its conceptual status. |
| `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Preserve | Retain established butterfly app/browser identity. |
| `og-image.png` | Preserve | Keep original file; add a dedicated light redesign social image without overwriting. |
| `file.svg`, `globe.svg`, `next.svg`, `window.svg` | Preserve | Unused starter assets; leave files intact, do not introduce into experience. |
| Videos | Preserve | No video files or embeds found. Nothing to replace. |
| Black/zinc surfaces, sky-blue buttons, system sans type | Redesign | Light cloud/sky composition, restrained translucent layers and refined sans typography. |
| Canvas particles/network lines | Remove | Remove from active page: dark atmospheric effect no longer suits bright visual direction; avoid continuous JS render loop. Original source remains in Git. |
| Framer stagger/fade-up and hover transitions | Improve | Purposeful section motion with reduced-motion support and readable content before hydration. |
| Scroll snapping | Remove | Can interfere with browsing long product stories; retain smooth anchor navigation with reduced-motion override. |
| TestFlight `https://testflight.apple.com/join/vAdMtgYp` | Preserve | Existing real beta link remains unchanged. Do not imply broad availability or add fabricated app-store links. |
| SEO, canonical, sitemap, robots, manifest | Improve | Preserve existing production URL and crawl structure; align descriptions/theme with truthful global vision. |
| Security headers, Vercel config, CNAME | Preserve | No infrastructure, domain, DNS or deployment changes. |
| Shared Button | Improve | Preserve reusable link component with accessible focus and external-link behavior; align styling. |
| “World's first”, instant payments, enterprise-grade claims | Remove | No supporting verification in repository. Replace with aspirational product direction. |
| Automatic homescreen UI | Remove | Conflicts with supported-native-OS constraint; use planned Contacts/Spotlight/system actions. |
| Card-only replacement for bank rails, “Beyond UPI” | Redesign | Global, partner-dependent, multi-rail architecture replaces India-centric comparison and unsupported reliability claims. |
| “Zero data collection”, local-only transactions | Remove | Not established by website source; conflict with identity/orchestration direction. |
| Apple REST API/Google OAuth as security proof | Remove | Authentication technologies do not establish end-to-end payment security; no implementation verified. |
| Forms | Preserve | None exist. Do not add a fake waitlist or success state without a delivery integration. |

## Implementation plan

1. Preserve source history/assets and document the baseline with desktop/mobile captures.
2. Establish white/sky-blue design tokens, refined type, glass-butterfly imagery and responsive navigation.
3. Introduce the universal identity vision; explain fragmentation without attacking a specific payment rail.
4. Build an explicitly illustrative recipient → review → authorization concept; never represent nearby discovery as approval or execute money movement.
5. Show a labelled currency quote example with rate, fees, received amount and timing; no live-market data claim.
6. Extend existing terminal and innovation sections into merchant acceptance and modular payment orchestration.
7. Explain noncustodial/security design principles; distinguish product direction from verified availability.
8. Retain TestFlight CTAs and original section anchors, update metadata, verify build/TypeScript, browser layouts and interactions, capture after screenshots.
9. Deliver local review and a preservation/change/validation report. No production deployment.

## Additional audit findings

The existing `.github/workflows/ci.yml` runs npm install via `npm ci`, lint and build on main pushes and pull requests. It was retained unchanged. Existing file-based Next icon routes (`/icon.png`, `/apple-icon.png`) are retained. No repository workflow, git remote or production release was invoked. During live mobile inspection the existing offscreen menu also expanded document scroll width beyond the viewport; the rebuild mounts mobile navigation only while open.
