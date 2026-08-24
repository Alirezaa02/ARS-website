# ARS — AI Customer Service Marketing Site

**Live site: [www.arswebservices.com](https://www.arswebservices.com)**

Marketing site for ARS (AI Support & Web) — AI customer service systems and websites for Australian small businesses, trades especially. Brisbane, Australia.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build to /dist (includes prerendering, see below)
npm run preview  # preview the production build
```

Node 20+ recommended.

## Tech stack
- **React 19 + Vite** — dev/build
- **Tailwind CSS** (v3) — styling, design tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, counters, page transitions, micro-interactions
- **React Router** — client-side routing
- **Resend** — contact form delivery (`api/contact.js` serverless function)
- **Playwright** — build-time prerendering (see below)

## Structure
```
src/
  components/
    industries/   Shared template + data-driven components for
                   the industry landing pages (see below)
    ...            Navbar, Footer, Aurora (animated bg), etc.
  pages/
    industries/    One thin page per industry (12), all wrapped
                    around IndustryPageTemplate
    blog/           Blog posts
    Home, Services, Pricing, Book, Contact, Industries, Blog, ...
  data/
    industries.js   Content for all 12 industry pages
    blogPosts.js    Blog post metadata
  lib/
    motion.jsx      Shared animation variants + <Reveal> helper
    seo.js          Per-page <title>/meta/JSON-LD hooks
  App.jsx           Router + page-transition shell
  main.jsx          Entry
api/
  contact.js        Serverless function — sends contact form via Resend
scripts/
  prerender.mjs     Build-time crawler (see below)
```

## Industries
Twelve dedicated landing pages at `/industries/<slug>` (electrical, plumbing, air conditioning, construction, pest control, curtains & blinds, mechanics, real estate, accounting & finance, restaurants, parts suppliers, barbershops), listed on `/industries`. Each is driven entirely by `src/data/industries.js` — adding a new industry just needs a data entry, a one-line page wrapper, a route in `App.jsx`, and a `sitemap.xml` entry.

## SEO & AI visibility
- `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`
- Per-page `<title>`/meta description/canonical + JSON-LD (Organization + per-industry Service schema) via `src/lib/seo.js`
- **Build-time prerendering** (`npm run build` → `vite build && node scripts/prerender.mjs`): this is a client-rendered SPA, so per-page content only exists after JavaScript runs. Most AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) don't reliably execute JS, so `scripts/prerender.mjs` crawls every URL in `sitemap.xml` with a headless browser after the build and writes each one as its own static HTML file with the real content baked in. On Vercel specifically, it uses `@sparticuz/chromium` (Vercel's build image is missing the system libraries Playwright's normal Chromium needs) — locally it just uses Playwright's regular local Chromium.

## Deploy
- **Vercel** (primary/live) — `vercel.json` handles SPA routing. Build: `npm run build`, output: `dist`. Requires a `RESEND_API_KEY` environment variable for the contact form.
- **Netlify** — `public/_redirects` handles routing, also included, but not the platform currently in use.
