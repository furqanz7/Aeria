# Aeria merchant screen art direction

16 November 2026. Focused visual iteration after the screen was described as boring.

## Visual changes

- Replaced the repeated light identity-card layout with a full-screen midnight/cobalt composition using the existing Aeria ocean and feather-wing artwork. There are no new stock or AI-generated device assets.
- Discovery now combines large Italiana lettering, cobalt wings, light orbits, proximity feedback and a restrained identity strip.
- Review centers an oversized serif payment total, the merchant name, a translucent funding-account panel and a warm ivory confirmation prompt.
- Authorization has its own composition: a large Face ID illustration, a light scan and the payment details below. Processing uses a moving point and progress arc.
- Completion unfolds Aeria's wings around a luminous check, then shows the amount, merchant and confirmation status.
- All native UI text uses the existing local Italiana and Manrope fonts. Currency remains the SAR code; the merchant and 48.00 amount are illustrative.

## Motion and implementation

`merchant-screen.ts` composes the screen directly in Canvas. `MerchantHardware.tsx` shares the existing film artwork decode, updates the screen during bounded transitions at a maximum of 12 frames per second, and ends rendering when each stage settles. The backing canvas is 880×1856, sufficient for the displayed device size while reducing texture transfer compared with the preceding 1320×2784 canvas.

Live reduced-motion preferences skip scanning, unfolding and device/contact motion while retaining the full state sequence. New `*-cobalt.webp` Ready/Review/Complete posters avoid stale cached fallbacks. Previous artwork and screenshots remain available.

The triangular terminal geometry, camera, phone pose, external walkthrough controls, explicit review/approval gate, amount, and all other site sections/integrations are preserved. No actual payment or biometric operation is performed.

## Verification

- `npm run build` passed compilation, integrated lint/TypeScript checks and static generation. Initial route JavaScript is 160 kB. `git diff --check` passed.
- Visually reviewed all five screen states in the local export surface. Export source and PNGs are retained in `work/merchant-screen-art-direction/`; the temporary route was removed before building production.
- In the production browser, Tap reached Review, which held for explicit confirmation. Confirmation reached authorization, processing and completion with the new screen textures.
- The full flow also completed at 320×568 with normal motion, including Replay. Reduced motion was verified on desktop.
- 320, 390, 768 and 1440px layout checks showed no horizontal overflow.
- The fresh production browser console showed no errors or warnings.
- Loading with JavaScript disabled showed the new `ready-cobalt.webp` fallback, with disabled controls and no renderer.
- Saved the actual screen sequence, desktop review/completion and mobile completion screenshots under `docs/screenshots/merchant-cobalt-screen/`.
- Owned preview processes were stopped after verification.

Review images are in `docs/screenshots/merchant-cobalt-screen/`. This note supersedes the visual styling in `MERCHANT-PAYMENT-EXPERIENCE.md`; its payment sequence remains.

Local only. No deployment or infrastructure changes.
