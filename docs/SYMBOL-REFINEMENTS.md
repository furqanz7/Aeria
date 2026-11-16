# Riyal and miniature-butterfly refinements

15 November 2026. Local only; no deployment or infrastructure changes.

- Replaced the Arabic riyal abbreviation in the currency illustration with the official Saudi riyal vector symbol. The mask preserves the original aspect ratio and carries an accessible “Saudi riyal” label. Existing ISO `SAR` labels in the illustrative currency explorer remain correct and unchanged.
- Official design reference: https://www.sama.gov.sa/en-US/Currency/SRS/Pages/Guideline.aspx
- Local asset: `public/brand/saudi-riyal.svg`. The official download endpoint reset the connection, so the identical published design was retrieved via the Wikimedia Commons file mirror: https://commons.wikimedia.org/wiki/File:Saudi_Riyal_Symbol.svg. The SVG shape itself is retained unchanged; CSS supplies the page's text colour.
- Rebuilt the shared miniature butterfly as a detailed vector with pearl-blue upper wings, lilac underwings, fine vein lines, highlight strokes and restrained independent wing movement. Each instance has unique gradient IDs.
- Applied it to all seven page placements: header, connection label, Aeria ID, phone concept, ecosystem, closing section and footer. Original raster logo/app-icon files remain on disk.
- Reduced-motion support is retained.

Verification: production build, lint, TypeScript and static generation passed. The browser confirmed all seven butterfly instances, no old Arabic abbreviation, and a correctly loaded riyal mask. No horizontal overflow at 320, 390, 768 or 1440 px; no production browser warnings/errors.

Screenshots:
- `docs/screenshots/detail-refinement/currencies.jpg`
- `docs/screenshots/detail-refinement/butterfly-identity.jpg`
- `docs/screenshots/detail-refinement/mobile-brand.jpg`

The temporary verification server was stopped at handoff. Run `npm run dev` in the repository for local review.
