# ARS — AI Customer Service Marketing Site

Premium dark-theme marketing site for ARS (AI customer service systems + websites for Australian small businesses). Built with React + Vite, Tailwind CSS, Framer Motion, and React Router.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

Node 18+ recommended.

## Tech stack
- **React 18 + Vite** — fast dev/build
- **Tailwind CSS** (v3) — styling, design tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, counters, page transitions, micro-interactions
- **React Router** — pages at `/`, `/services`, `/pricing`, `/book`, `/contact`

## Structure
```
src/
  components/   Navbar, Hero, HowItWorks, Features, Services,
                Pricing, Testimonials, BookDemo, Contact, Footer,
                Aurora (animated bg), Counter (animated stats)
  pages/        Home, Services, Pricing, Book, Contact
  lib/motion.jsx  shared animation variants + <Reveal> helper
  App.jsx       router + page-transition shell
  main.jsx      entry
```

## Things to customise
- **Copy & pricing** — placeholder copy throughout; edit component files.
- **Calendly** — replace the placeholder in `components/BookDemo.jsx` with your inline embed.
- **Contact form** — `components/Contact.jsx` `submit()` is a stub; wire to your email service (Formspree, Resend, etc.).
- **Testimonials** — placeholder quotes in `components/Testimonials.jsx`.
- **Email/brand** — search for `hello@ars.com.au` and swap in your real address.
- **Colours** — accent + ink palette live in `tailwind.config.js`.

## Deploy
SPA rewrites are already included for both hosts.
- **Vercel** — import the repo; `vercel.json` handles routing. Build: `npm run build`, output: `dist`.
- **Netlify** — `public/_redirects` handles routing. Build: `npm run build`, publish: `dist`.
