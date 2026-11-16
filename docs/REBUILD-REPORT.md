# Aeria website rebuild — local review report

> Historical first-iteration report. The owner requested further visual revisions. See [ITERATION-2-REVIEW.md](ITERATION-2-REVIEW.md) for the current cloud/blossom direction, Aeria-only branding and motion changes.

Existing-site audit: 14 November 2026. Final local verification: 15 November 2026 (Asia/Riyadh).

**Status:** implemented in the existing repository and verified against an optimized production build locally. No production deployment, Git push, DNS change, domain change or infrastructure change was performed. The design remains available for the owner's review.

## What was inspected

Both `https://aeria.co.in` and `https://www.aeria.co.in` were opened. The apex redirects to www; the live homepage is accessible. The sitemap and all live navigation destinations were inspected. There is one marketing page with P2P, Terminal, Innovation, Privacy and Download sections. The repository matches the live content and assets. Desktop and mobile layouts, the original mobile menu, canvas background, section reveals, hover styles, anchor scrolling and TestFlight destination were reviewed.

The supplied screenshot was treated as visual/product direction, not as evidence of live functionality. The master brief informed content and product direction; it did not authorize deployment or external actions.

## Final experience

The existing homepage has been rebuilt as a connected product narrative:

1. Aeria hero: original glass-butterfly lineage extended into a custom sky-and-cloud image; core identity statement and two real navigation CTAs.
2. The fragmented payment world: currencies connect into a single Aeria experience.
3. Aeria ID: an illustrative `furqan@aeria` identity, with a crafted translucent identity card.
4. Proximity concept: nearby recipient selection → review exact recipient/amount → intended authorization → explicit concept completion. No money movement or biometric authentication occurs.
5. Beyond borders: interactive currency examples with source amount, destination amount, rate, fee and a delivery-estimate explanation.
6. Everyday experience: Contacts, Spotlight/system actions and transaction-bound authorization are presented as planned capabilities; original P2P concept artwork is retained.
7. Merchant experience: original terminal artwork retained with a concept caption; approved acceptance routes and separate payout processes explained.
8. Multi-rail ecosystem: code-native architecture visualization explains identity and orchestration, with financial execution assigned to regulated partners where required.
9. Trust: noncustodial product direction, intentional approval, tokenization and verification principles, without invented certifications.
10. Six working FAQs clarify present access, custody direction, coverage, discovery and merchant compatibility.
11. Final beta CTA and Aeria by liquiflow footer.

No extra marketing routes were created. All original section anchors (`#hero`, `#p2p`, `#terminal`, `#innovation`, `#privacy`, `#download`) remain valid. The sitemap, robots file, browser/app icons, canonical domain and utility routes remain in place.

## Preservation and change summary

| Classification | Result |
| --- | --- |
| Preserved | Original butterfly logo, favicon/app icons, P2P PNG/WebP, original terminal JPEG, original social image, TestFlight URL, original section anchors, existing stack/dependencies, CNAME, Vercel framework config, GitHub CI and security response headers. Original image/brand files were verified unchanged using Git object hashes. |
| Improved | Responsive navigation, accessible menu focus/Escape behaviour, skip link, beta availability language, original product story, privacy/security claims, SEO/social metadata, local font loading and reduced-motion behaviour. |
| Redesigned | Hero, overall colour/typography/spacing system, P2P presentation, merchant section, innovation/ecosystem story, privacy section and footer. White/sky-blue dominates; the existing dark terminal artwork gets one intentional dark section. |
| Removed from active experience | Dark canvas particle background, scroll snapping, card-only/UPI comparison, automatic homescreen-overlay claims, unverified “world’s first,” “zero data collection,” instant/reliability guarantees and authentication-brand claims presented as proof of security. The original canvas source is retained and no valuable original asset file was deleted. |
| Newly created | Butterfly/cloud artwork, local Manrope font, new social card, Aeria ID visual, proximity concept, currency explorer, network visualization, FAQs, reusable icons/motion component, audit, provenance, verification artifacts and screenshots. |

The detailed item-by-item classification is in [REBUILD-AUDIT.md](REBUILD-AUDIT.md). New asset paths, licensing and the final image-generation prompt are in [ASSETS.md](ASSETS.md).

## Functional and backend boundaries

The existing TestFlight link remains `https://testflight.apple.com/join/vAdMtgYp`, with safe new-tab attributes. It returns HTTP 200 and opens Apple's TestFlight page in the browser. An active Aeria invitation, enrollment availability and installed beta capabilities could not be confirmed. Verify that link on a supported device before launch.

No payment, device discovery, biometric, currency-market-data, waitlist, contact, analytics, authentication or database backend exists in this marketing repository. No such integration was removed. The new demos run entirely in the browser and are labelled as illustrative. There are no forms and no fabricated form-success states. Contact addresses, legal pages, social profiles, app-store listings, public APIs and partner logos were not invented.

The source amount in each currency example includes a fixed illustrative fee of one source-currency unit. The receive amount is `(source amount − fee) × illustrative rate`, rounded for display to two decimals. These rates are examples, not financial quotes or statements of supported corridors.

## Verification completed

| Check | Evidence and result |
| --- | --- |
| Production build | `npm run build` passed compilation, lint, TypeScript checks and static prerendering. The homepage is statically rendered. Framework output reports approximately 147 KB first-load JavaScript. |
| Source hygiene | `git diff --check` passed. No new runtime dependencies. |
| Local HTTP/resources | Homepage and 28 sampled HTML-linked/static resources returned 200. No failed resources. Security headers remain `nosniff`, `SAMEORIGIN`, and `strict-origin-when-cross-origin`. |
| Responsive layout | Browser emulation at 320, 390, 600, 768, 1024 and 1440 px. No horizontal page overflow; the main heading fits at every checked width. Desktop, 768 px tablet and 390 px mobile screenshots saved. |
| Navigation | All four main navigation links land on their intended hash. All internal anchor destinations exist; original anchor URLs are retained. Footer/back-to-top and hero links work. |
| Mobile menu | Opens with readable background; moves focus into navigation; traps forward/reverse Tab; Escape returns focus to toggle; selecting a section closes it. Unmounted when closed. |
| Proximity concept | Recipient selection, review, authorization preview, concept completion, reset, back to discovery and review again tested. Final state explicitly says no money has been sent. Mobile review controls have 47.5 px clearance above the phone bottom after the clipping fix. |
| Currency calculations | 250 SAR → 5,577.60 INR; 250 USD → 229.08 EUR; 50 GBP → 227.85 AED under the fixed examples. Zero amount produces `aria-invalid=true` and an explanatory state. Default 100 SAR → 2,217.60 INR restored. |
| FAQs | All six native disclosure controls opened; Enter closes them. |
| Keyboard access | Focus-visible controls, menu focus containment and skip-to-content verified. The skip link is visible when focused and reaches `#main-content`. |
| Motion | Normal mode reports `id-float` and smooth anchor scrolling; reduced-motion emulation reports no floating animation and automatic scrolling. Section content is not hidden before hydration. |
| Contrast | Small secondary labels were darkened. A computed-style contrast scan found no remaining flags for the text it could evaluate on solid backgrounds. Atmospheric/translucent/image backgrounds were inspected visually; this is not a complete WCAG certification. |
| Images | Zero broken and zero pending images after loading the page's sections. Original product images remain visible and concept-labelled. |
| Production browser console | A fresh final production session returned zero error/warning entries. Development-time errors encountered and fixed are not present in that session. |
| SEO | One h1, descriptive title/description, production canonical, updated Open Graph/Twitter image, light theme and local font verified. |
| Infrastructure | No deployment, Git push, domain/DNS mutation or remote infrastructure action. |

Machine-readable evidence: [responsive-results.json](responsive-results.json), [browser-checks.json](browser-checks.json), [resource-checks.json](resource-checks.json).

The host's Node 26 emits a dependency/tooling deprecation notice about `module.register()` during build. It does not fail the build or appear as an application console error. Existing CI uses Node 20. Real iPhone/Android devices, Safari, real biometric flows, payment routes, enrollment/install behaviour and field performance were not tested. No Lighthouse or Core Web Vitals score is claimed.

## Screenshots

Full-page evidence uses reduced-motion browser emulation so scroll-reveal sections remain visible and captures are stable. Screenshots are browser output; all emulation overrides were restored after QA.

- [Before/after desktop comparison](screenshots/before-after-desktop.jpg)
- [Existing desktop hero](screenshots/before-desktop-hero.jpg) and [full original page](screenshots/before-desktop.jpg)
- [Rebuilt desktop hero](screenshots/after-desktop-hero.jpg) and [full rebuilt page](screenshots/after-desktop.jpg)
- [Existing mobile hero](screenshots/before-mobile-hero.jpg) and [full original mobile page](screenshots/before-mobile.jpg)
- [Rebuilt mobile hero](screenshots/after-mobile-hero.jpg) and [full rebuilt mobile page](screenshots/after-mobile.jpg)
- [Original mobile menu](screenshots/before-mobile-menu.jpg) and [rebuilt mobile menu](screenshots/after-mobile-menu.jpg)
- [Tablet hero](screenshots/after-tablet-hero.jpg)
- [Desktop identity](screenshots/after-desktop-identity.jpg), [proximity](screenshots/after-desktop-p2p.jpg), [currencies](screenshots/after-desktop-currencies.jpg), [merchant](screenshots/after-desktop-terminal.jpg), [ecosystem](screenshots/after-desktop-innovation.jpg), [trust](screenshots/after-desktop-privacy.jpg)
- [Mobile proximity section](screenshots/after-mobile-proximity.jpg)

## Local run and release

From this repository:

```sh
npm ci
npm run dev
```

Then open http://localhost:3000. The development server used for verification is stopped at handoff. To review the optimized version, run `npm run build` followed by `npm run start`. Do not run a build while a dev server is using the same `.next` directory.

Production publication requires the owner's explicit approval. After approval, review the final diff/build and use the existing repository/Vercel workflow. No changes to DNS or domain setup are needed merely to review this local rebuild. Confirm the active TestFlight invitation and any release-facing feature claims before publishing. Provide real contact/legal details if those should be added; none are required to use the local review build.
