# Apple Pay informed product composition

15 November 2026. The user specified Apple Pay as the reference for both device positioning and screens.

## References inspected

- [Apple Pay](https://www.apple.com/apple-pay/): official product imagery and complete phone/contactless-reader composition. Large front-facing devices, restrained chrome, a prominent credential card and a short state/instruction.
- [Use Tap to Cash](https://support.apple.com/en-us/120544): official two-device visual, with phones horizontal and their top edges facing each other; large screen content and fine proximity particles.

## Aeria interpretation

- Proximity: top-to-top devices replace the separated angled portraits. The screens show large Mina/You identities and nearby instructions. Ends of the devices extend beyond the composition intentionally, concentrating the view on the interaction at their top edges.
- Merchant: an upright phone sits in front of the triangular Aeria Terminal. An original Aeria ID card, merchant discovery state and Hold near terminal instruction replace the previous small app dashboard. The complete phone fits the scene.
- Aeria's local display font, colours and triangular terminal remain. Device and screen artwork is authored in HTML/CSS/SVG. Apple photographs, card/network marks and Apple Pay logos are not embedded in the website. No Apple Pay integration is claimed or added.
- Discovery remains a product concept. No funds, payment success state, biometric result or automatic authorization is shown.

## Implementation

`src/components/ProductScene.tsx` and `src/app/product-scenes.css`. Current review images: `screenshots/apple-reference/`.

The production build passed, including type and integrated lint checks. The scenes were reviewed on desktop and at 390px; 320, 768 and 1440px widths also showed no horizontal overflow. Reduced motion disabled the discovery animation, and browser console checks returned no warnings or errors. Existing content, hero motion, navigation, CTAs and Our Vision wordmark-only treatment remain.

Local only: no deployment, push, domain, DNS or infrastructure changes. This document supersedes the positioning/interface details in `NATIVE-PRODUCT-SCENES.md`.
