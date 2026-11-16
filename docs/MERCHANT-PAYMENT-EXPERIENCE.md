# Merchant payment experience

16 November 2026. Focused follow-up to the triangular hardware revision.

The visitor can tap the Aeria Terminal, review an illustrative payment, explicitly confirm the demo, see authorization and processing, and receive confirmation on the phone and terminal. This is a client-only product demonstration: no API, payment rail, biometric prompt, or financial transaction is invoked.

## Screen and sequence

The previous single screen bitmap is replaced by a native Canvas interface using the site's local Italiana and Manrope fonts. Larger type, a cleaner identity card, a prominent total, a funding-account row, and distinct authorization and completion states make the sequence readable on the device.

1. **Ready:** Aeria ID and a proximity prompt.
2. **Tap:** The phone approaches the terminal, the contact area pulses, and the screen shows connection in progress.
3. **Review:** Example merchant, SAR 48.00, connected funding account, and the confirmation prompt. This state waits indefinitely for the visitor's explicit confirmation.
4. **Authorize:** A Face ID illustration represents authorization after the visitor clicks **Confirm demo payment**.
5. **Process:** The screen and page show processing.
6. **Complete:** The phone shows a check, the amount and merchant, and completed status. The terminal indicator and contact halo turn green. Replay starts a new demonstration; Start over cancels the review.

The example merchant and SAR amount are illustrative, not actual transactions or partners. The page labels the experience **Interactive product concept · No real payment or biometric check**. Hardware concept qualifications remain.

## Implementation

- `src/components/merchant-screen.ts` draws deterministic, readable UI for each state. The texture updates when state changes; it does not repaint continuously.
- `ProductScene.tsx` owns the state transitions, accessible status announcements, progress labels and keyboard-operable native buttons. Timed stages pause when the complete visual/control area is outside the viewport or the page is hidden.
- `MerchantHardware.tsx` updates the phone texture, bounded approach/contact animation and terminal acknowledgement. Each stage ends its render loop. Live reduced-motion preferences skip device/contact motion while preserving the sequence.
- Three matching transparent posters cover Ready, Review and Complete. These support loading, unavailable WebGL and no-JavaScript presentation. JavaScript-disabled controls remain disabled and explanatory text describes the flow.
- The triangular body, camera, phone/terminal transforms, two-phone scene, cinematic hero, branding, copy outside the walkthrough and TestFlight integration are preserved.

The older bitmap, source and screenshots are retained. The temporary UI/art export route was removed before the production build; export source is saved as text under `work/merchant-payment-flow/`.

## Verification

- **Build:** `npm run build` passed compilation, integrated lint and TypeScript checks, and static generation. Initial route JavaScript is 159 kB; the 3D renderer remains deferred. `git diff --check` passed.
- **Desktop production browser:** Tap opened Review; Review remained there until explicit confirmation. Confirmation reached Authorizing, Processing and Complete. The hardware's screen state matched the DOM sequence.
- **Mobile interaction:** Start over returned Review to Ready. Replay started a new tap sequence. The complete flow passed at 390px in development and 320×568 in production, including normal motion. This caught and addressed a visibility issue: timers now observe the whole visual/control area, so they continue when the controls are visible below the image.
- **Responsive layout:** 320, 390, 768 and 1440px viewport checks showed no horizontal overflow.
- **Reduced motion:** The production sequence completed with the reduced-motion preference enabled. Device/contact motion is skipped while all screens and actions remain available.
- **Fallback:** Loading with JavaScript disabled produced no renderer, a loaded Ready poster, disabled controls and explanatory no-script copy. The fallback fit at 320px.
- **Console:** The fresh production browser showed no warnings or errors.
- **Boundaries:** UI trigger → client state → native screen texture/terminal acknowledgement → accessible status and controls were verified. API, financial execution and biometric authentication are outside this illustrative website flow and were not invoked.
- **Screenshots:** `screen-sequence.jpg` shows actual browser-rendered UI states together; `desktop-complete.jpg` shows the production section, `mobile-complete.jpg` the mobile figure/controls, and `no-javascript.jpg` the fallback. Earlier captures and lossless source exports remain in the same review/work folders.
- **Teardown:** The temporary export route was removed before building. Owned local preview processes were stopped after verification.

Screenshots: `docs/screenshots/merchant-payment-flow/`.

This note supersedes the static merchant-screen portion of `MERCHANT-3D-REFINEMENT.md`. No production deployment or infrastructure changes.
