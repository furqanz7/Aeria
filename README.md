# Aeria — Marketing Site

Landing page for [Aeria](https://aeria.co.in), a universal cross-platform proximity payment product.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push to GitHub (`main` branch).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add domain **`aeria.co.in`** under Project → Settings → Domains.
4. Point DNS to Vercel (A record `76.76.21.21` or CNAME to `cname.vercel-dns.com`).

Every push to `main` runs lint + build via GitHub Actions (`.github/workflows/ci.yml`).

### CLI deploy

```bash
npx vercel --prod
```

## Project structure

```
src/
  app/          # Pages, layout, global styles
  components/   # Nav, Button, AnimatedBackground
  lib/          # Site constants (URLs, nav links)
public/         # Static assets (logo, images, icons)
```

## Environment variables

None required for the marketing site.
