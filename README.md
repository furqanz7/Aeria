# Aeria — a new dimension of payments

The existing Aeria marketing website, rebuilt locally around the universal payment identity and proximity-first product vision for Aeria. The production domain is https://aeria.co.in. This repository does not implement payment processing or custody.

## Current visual iteration

The current revision is a cinematic journey through mineral teal sky, cream-gold clouds and deep blue water. Large Italiana serif lettering, dark cobalt feathered wings, drifting feathers, film grain and suspended light connect the opening to the product story. The wings dissolve into sampled light particles as the visitor scrolls into the next scene. The original butterfly logo remains unchanged beside the Aeria wordmark.

See `docs/MERCHANT-READER-REFINEMENT.md` for the current triangular terminal restoration and tap placement. `docs/APPLE-PAY-VISUAL-REFERENCE.md` records the product composition and screen treatment based on the requested Apple Pay reference. `docs/NATIVE-PRODUCT-SCENES.md` records the preceding controlled phone-to-phone and phone-to-terminal visuals. `docs/DISCOVERY-ARTWORK.md` records the preceding generated images. `docs/PRODUCT-VISUAL-REFINEMENTS.md` records the preceding artwork and Our Vision refinement. `docs/ITERATION-4-REVIEW.md` records the broader cinematic rebuild, references and motion preview. Earlier reports are historical records.

## Stack

Next.js 15.5, React 19, TypeScript, Tailwind CSS 4 and Framer Motion. Homepage content is rendered on the server; interactive client components are limited to the mobile menu, section motion and illustrative product demonstrations. No new runtime dependencies were added.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For the exact optimized build:

```sh
npm run build
npm run start
```

Run development and production builds separately because they share Next's `.next` output directory.

## What is connected

- The original TestFlight URL is retained in `src/lib/site.ts`.
- The website has no payment backend, contact submission endpoint, waitlist storage, analytics, public API or partner connection.
- The proximity experience is an automatic product concept. It does not discover devices, authenticate biometrics or send money.
- Currency examples are fixed illustrative rates and fees, not live FX quotes. The fee is deducted from the entered source amount before conversion.
- FAQs use native keyboard-operable disclosure controls.
- Contact, legal and social links have not been invented where none were supplied or present in the original.

## Source guide

- `src/app/page.tsx`: homepage narrative and preserved section anchors.
- `src/app/layout.tsx`: metadata, local font, skip link and shared navigation.
- `src/app/globals.css`: shared layouts, functional component styles and responsive rules.
- `src/app/cinema.css`: current typography, palette, cinematic scene layers and responsive art direction.
- `src/components/ProximityDemo.tsx`: automatic nearby-discovery illustration and explanatory principles.
- `src/components/CurrencyDemo.tsx`: illustrative currency explorer.
- `src/components/ProductScene.tsx` and `src/app/product-scenes.css`: device geometry, precise HTML interfaces and proportional scene rendering.
- `src/components/Nav.tsx`: responsive navigation, Escape and focus containment.
- `src/components/Reveal.tsx`: blur, opacity and movement on chapter entrance, without initially hidden content.
- `src/components/CinematicJourney.tsx`: pinned sky-to-depth journey, atmospheric particles, feather and wing layers, pause control.
- `src/components/WingDissolve.tsx`: image-sampled wing particles driven by scroll.
- `src/components/SkyAtmosphere.tsx`: previous visual iteration retained, no longer mounted.
- `src/components/OriginalLogo.tsx`: unchanged original Aeria artwork for wordmark lockups.
- `src/components/AirIdentity.tsx`: open Aeria ID typography with a connection reveal.
- `src/lib/motion.ts` and `src/components/MotionDirector.tsx`: shared reactive motion preferences, global Pause, document visibility and chapter viewport gates.
- `src/components/AnimatedBackground.tsx`: original canvas retained for history, no longer mounted.
- `public/`: original brand/product assets retained unchanged, with additions in `visuals/` and `fonts/`.
- `docs/REBUILD-AUDIT.md`: original-site inventory and decisions.
- `docs/REBUILD-REPORT.md`: changes, verification evidence and remaining limits.
- `docs/screenshots/`: before/after browser captures.

Italiana and Manrope are locally hosted under their included SIL Open Font Licenses. Italiana is the approved open-font substitute for the Adorn Story Serif reference. Original brand and product image files are not overwritten. Current art provenance is recorded in `docs/ITERATION-4-REVIEW.md`.

## Production release

Production deployment, DNS, domains and infrastructure require the owner's approval. None were changed as part of this local rebuild. After approval, use the existing repository/Vercel workflow and review the final diff and successful build before release. The existing CI workflow and CNAME are preserved. This README does not authorize a push or deployment.

Before release, the owner should confirm that the TestFlight invitation is active on a supported device, verify beta feature availability and provide any real contact/privacy/terms information intended for publication.

Latest focused merchant hardware revision: [3D terminal and tap composition](docs/MERCHANT-3D-REFINEMENT.md).

Previous merchant screen and interactive post-tap flow: [Payment experience](docs/MERCHANT-PAYMENT-EXPERIENCE.md). Superseded by the automatic sequence below.

Latest phone-screen visual treatment: [Cobalt screen art direction](docs/MERCHANT-SCREEN-ART-DIRECTION.md).

Current phone-screen treatment: [Clean, minimal payment screens](docs/MERCHANT-MINIMAL-SCREEN.md).

Earlier Designed Around You iteration: [automatic nearby discovery](docs/NEARBY-DISCOVERY-AUTOPLAY.md), retained as review history.

Earlier nearby discovery screen treatment: [continuous ambient background motion](docs/NEARBY-AMBIENT-BACKGROUND.md).

The directional-particle experiments were rolled back. See the [historical iteration record](docs/NEARBY-PARTICLE-TRANSFER.md).

Earlier movement revision: [short directional movement within the restored particle field](docs/NEARBY-CAREFUL-REFINEMENT.md), superseded by the native-entry illustration below.

The merchant picture now plays its [tap-to-confirmation sequence automatically](docs/MERCHANT-AUTOPLAY.md), with continuous screen atmosphere and no interaction controls.

Proximity, with Purpose retains its click-through flow in a [new two-device composition](docs/PROXIMITY-ENHANCEMENT.md), with sender/recipient screens, an active step narrative, and desktop/mobile review captures.

Current proximity visual: [the original facing-phone experience relocated from Designed Around You](docs/PROXIMITY-RELOCATION.md), with automatic discovery and static explanatory principles. Click-through controls were removed at the owner's request.

Designed Around You now covers [native everyday entry points](docs/EVERYDAY-NATIVE-EXPERIENCE.md): contacts/Aeria ID search, Home Screen widgets, Spotlight and supported shortcuts, illustrated on one device. This supersedes the earlier nearby-discovery picture and particle iterations in that section.

Current site-wide motion repair: [playback controller, mobile sizing and browser verification](docs/MOTION-REPAIR.md).

Beyond Borders and the ecosystem map now have [continuous connection motion on desktop and mobile](docs/ROUTE-MOTION-REPAIR.md), following the shared motion preferences and Pause control.
