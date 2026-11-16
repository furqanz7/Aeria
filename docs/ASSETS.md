# Aeria asset provenance

Original assets in `public/` remain byte-for-byte unchanged, including the dark glass butterfly `logo.png`, P2P concept, terminal concept, app icons, favicon and original social card.

## Additions

- `public/visuals/aeria-sky-butterfly.webp`: original atmospheric image, generated using the built-in image generation tool, converted to WebP at quality 88. Approximately 92 KB. Inspired by the existing glass butterfly, without replacing the original logo. Website hero and closing atmosphere.
- `public/visuals/aeria-social.jpg`: 1200 × 630 social card built from the new atmosphere, with code-rendered Aeria typography. Approximately 76 KB. Original `og-image.png` retained.
- `public/fonts/manrope-latin-variable.woff2`: official Google Fonts Manrope Latin variable face, 400–800, downloaded from `https://fonts.gstatic.com/s/manrope/v23/xn7gYHE41ni1AdIRggexSvfedN4.woff2`. 24,436 bytes, hosted locally through `next/font/local`. SIL Open Font License in `public/fonts/OFL.txt`.
- `src/components/Icons.tsx`: code-native functional line icons and a small decorative butterfly motif. The original raster logo remains the primary navigation brand image. No partner marks or stock imagery added.

## Final image-generation prompt

Use case: stylized-concept. Asset type: original Aeria website atmospheric hero background, wide landscape 1536x1024. Reference inspiration: Aeria's existing identity is a delicate clear sculptural glass butterfly with prismatic thin edges. Create an exquisite premium 3D editorial image of a single translucent pearlescent glass butterfly floating above a sea of soft white clouds in a luminous pale sky blue atmosphere. Butterfly positioned in right half at 68% width 47% height, wings gracefully spread diagonally, actual delicate wing veins and thin elegant silhouette, fine iridescent silver and ice-blue with tiny lavender refracted highlights, elegant and believable, no chunky plastic. Large butterfly occupies 45 percent image width. Left half is mostly clear pale blue sky, sparse fine white mist, ideal for overlaid dark text. Lower edge has soft volumetric cloud banks, airy horizon, beautiful daylight. Sophisticated luxury technology art direction, photorealistic physically rendered glass, beautiful negative space. Colors: cloud white, soft icy sky blue, subtle lilac. Not dark. No text, no typography, no logos, no UI, no coins, no bank cards, no stock illustration, no neon, no extra butterflies. The composition should have a subtly physical glass beauty rather than a generic gradient.
