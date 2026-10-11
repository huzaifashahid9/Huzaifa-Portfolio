# Huzaifa Shahid Portfolio

Next.js 15 (App Router) + TypeScript + GSAP. Light, editorial design with a photo-led hero.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 18.18 or newer (20+ recommended). Deploys to Vercel as-is.

## Where things live

| What | File |
| --- | --- |
| Web projects, mobile apps, contact details | `lib/data.ts` |
| Colors, fonts, spacing, every style | `app/globals.css` (tokens at the top in `:root`) |
| Page order | `app/page.tsx` |
| Sections | `components/*.tsx` |
| Images | `public/img/` |
| SEO title, description, social preview | `app/layout.tsx` |

## Common edits

- **Add a web project:** drop the screenshot in `public/img/`, add an entry to `webProjects` in `lib/data.ts` (set `width`/`height` to the image size, `filter` to `ai`, `saas`, `shop` or `site`, and `url` to show a "Visit site" button).
- **Add a mobile app:** add two screenshots named `<key>-1.webp` and `<key>-2.webp` to `public/img/`, then add an entry to `mobileApps`.
- **Change the accent color:** edit `--sun` and `--sun-deep` in `app/globals.css`.
- **Dots Travel:** its App Store link is a search URL; replace it with the direct listing in `lib/data.ts`.

## Notes

- Animations use GSAP + ScrollTrigger through `@gsap/react` and all sit behind `prefers-reduced-motion: no-preference`.
- Fonts are self-hosted from npm (Archivo variable, Geist, Geist Mono), so there are no Google Fonts requests.
- Icons are Phosphor; App Store / Google Play marks are from Simple Icons.
