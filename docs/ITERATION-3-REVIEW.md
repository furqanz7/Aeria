# Aeria — sky, sunlight and cobalt revision

15 November 2026. Local review only; no production deployment, Git push, domain, DNS or infrastructure change.

This revision supersedes the floral direction. It follows the owner's preference for light skies and clouds, a darker blue main butterfly, the original logo beside the Aeria wordmark, and the mood references Salt & Silence × Closer To The Sun.

## Result

- Main butterfly: deep sapphire/cobalt wings with navy veining; same pose, silhouette and transparent background as the prior butterfly.
- Atmosphere: flowers, branches, leaves, floral blur and floating petals removed. New background retains light skies and layered white clouds, with cooler blue depth and restrained ivory sunlight.
- Wordmark: `public/logo.png` restored, unchanged, beside Aeria in the header and footer. The original artwork is also used for the phone concept and central ecosystem identity.
- Small decorative butterflies: deeper blue gradients replace the pale blue/lilac treatment. They are distinct decorative illustrations, not replacements for the original wordmark logo.
- Existing independent cloud drift, butterfly flight, scroll depth and reduced-motion behaviour are retained.
- Active social image updated to the cloud/cobalt direction; no floral asset is referenced by the active page.
- Footer line changed from the blossom reference to “A new dimension of connection.”
- The backdrop component is now `src/components/SkyAtmosphere.tsx`; the shared wordmark artwork is `src/components/OriginalLogo.tsx`.

## Reference interpretation

Reviewed the artist's own pages visually:
- [Salt & Silence](https://saidthesky.com/music/salt-silence)
- [Closer To The Sun](https://saidthesky.com/music/closer-to-the-sun)

The interpretation is cinematic blue depth, quiet scale, upward light and open space. Aeria remains bright and cloud-filled as requested. Album artwork, people, music, cover layouts and artist branding were not reused in the website. The two new assets are original edits of Aeria's prior generated artwork.

## New assets

Created with the built-in image-generation tool, then optimized into the repository:

- `public/visuals/aeria-cinematic-sky.webp` — approximately 112 KB.
- `public/visuals/aeria-cobalt-butterfly.webp` — approximately 64 KB, transparent alpha.
- `public/visuals/aeria-social-cinematic.jpg` — approximately 100 KB, code-composited from the current scene, dark butterfly, original logo and Aeria typography.

Previous image files remain on disk as history. The original `public/logo.png` was verified byte-for-byte unchanged using its Git object hash.

### Exact background-edit prompt

Edit target: the attached Aeria cloud-and-blossom background. Create a revised version preserving the spacious, luminous sky, fine cloud texture and clean negative space in the left half. Remove EVERY flower, blossom, lily-like bloom, branch, leaf, petal and pink floral blur, including all foreground and background floral details. Replace those regions with a continuous majestic cloudscape and open sky. Keep the scene bright and airy, but bring more cinematic depth: layered white cumulus cloud towers on the right, cooler slate-blue and sea-blue shadows within the clouds, a little far-off azure atmosphere and restrained warm ivory sunlight filtering through the upper right. A sense of quiet blue vastness meeting the uplifting sunlight above clouds, with fine photographic grain and soft atmospheric depth. It must feel elemental, expansive, emotional and premium, not botanical or decorative. Preserve the mostly pale left 55 percent for dark website text. Palette: white, silver mist, sky blue, deeper blue in distant/cloud shadows and subtle ivory sunlight. Remove the pink/lilac cast. No flowers or plants of any kind. No butterfly, no person, no typography, no album artwork or recognizable cover composition. Keep wide landscape aspect ratio. Background is opaque.

### Exact butterfly-edit prompt

Edit target: the attached transparent pearl-white butterfly. Change the WING COLOUR ONLY to a much deeper, richer blue: saturated sapphire and cobalt-blue wing membranes with navy-blue veins and slightly darker inky-blue outer edges, restrained silver-blue iridescent highlights. The wings must unmistakably read as a DARK BLUE butterfly against a white cloud-filled sky, not pale baby blue, not white, not pastel, not cyan. Keep the exact same butterfly pose, silhouette, proportions, realistic body, delicate antennae, natural anatomy and photographic fine wing detail. Keep it elegant and sophisticated, with softly lit dark blue colour, no neon or exaggerated glow. Preserve full genuine transparent alpha around the butterfly; no sky, no clouds, no flowers, no background, no text. Do not change the wing shapes or composition.

## Verification

- `npm run build` passed compilation, lint, TypeScript and static page generation. Next reports approximately 153 KB first-load JavaScript.
- `git diff --check` passed.
- Responsive browser checks at 320, 390, 600, 768, 1024 and 1440 px found no horizontal overflow.
- Browser DOM confirmed four original-logo placements, zero replacement SVG marks in the wordmark lockups, zero petal elements and zero active floral/pearl-butterfly images.
- Main butterfly source is the cobalt asset. Normal cloud and butterfly animation names remain active; reduced-motion mode was used for stable screenshots.
- The proximity concept was exercised through completion and reset; the page still clearly says no money was sent.
- Mobile menu/Escape, anchor targets and image loading checked.
- A fresh check of the local production page returned no console warnings or errors. Earlier logs from the separate reference website are excluded from this result.
- No new dependencies or backend integrations. Existing TestFlight destination and the corrected Saudi riyal mark are retained.

Machine-readable browser evidence: [iteration-3-checks.json](iteration-3-checks.json).

Screenshots:
- [Desktop hero](screenshots/iteration-3/desktop-hero.jpg)
- [Mobile hero](screenshots/iteration-3/mobile-hero.jpg)
- [Closing scene](screenshots/iteration-3/closing-scene.jpg)

All browser emulation was reset after verification. The temporary production server is stopped at handoff.

## Local review

```sh
cd /Users/Furqan/Desktop/Aeria/aeria.co.in
npm run dev
```

Open http://localhost:3000. Production publication remains subject to the owner's approval.
