# Merchant reader and tap positioning

16 November 2026. Focused local visual revision.

The user accepted the merchant screen, identified the terminal and positioning as wrong, and explicitly chose a compact conventional reader in place of the original triangular shape.

## Change

- Replace the triangular illustration with a small rounded-square contactless reader. Its face, raised base, edge highlights, tap target, subtle Aeria engraving and status light are rendered in CSS/SVG.
- Size the reader to about three quarters of the phone's width, giving it familiar compact-reader proportions.
- Angle the existing phone toward the reader. Position the reader's tap area just above the phone's top edge, with restrained proximity feedback at that point.
- Preserve the phone screen component byte-for-byte, including its identity card, merchant state and prompt. Its existing dimensions and screen styling remain.
- Preserve the accepted two-phone scene and all other site content, motion, navigation and integrations.

The original terminal art is retained on disk for history. The active change in hardware form follows the user's explicit preference. No hardware compatibility or final specifications are implied.

## Files and verification

`src/components/ProductScene.tsx` and merchant-only rules in `src/app/product-scenes.css`. Browser captures: `screenshots/merchant-reader/`.

The production build passed, including type and integrated lint checks. Desktop and mobile compositions were reviewed; 320, 390 and 768px checks showed no horizontal overflow, and the browser console showed no warnings or errors. Comparison against the saved preceding component confirms that the phone screen component is unchanged.

Local only. No production deployment, push, DNS or infrastructure changes. This note supersedes the terminal form/placement in `APPLE-PAY-VISUAL-REFERENCE.md`.


## Latest revision — triangle restored

On 16 November 2026, the user requested returning to the triangular terminal. The rounded triangular Aeria Terminal has been restored. The current phone angle and its accepted screen are retained; the terminal's tap point is aligned with that approach. The conventional reader is no longer mounted. Current screenshots: `screenshots/triangle-restored/`.
