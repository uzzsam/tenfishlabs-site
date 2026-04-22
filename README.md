# Ten Fish Labs

Marketing site for Ten Fish Labs — purpose-specific commercial systems built with AI methodologies and deep domain expertise, for sensitive data workflows that should not be exposed to third-party LLMs.

Vite + React + Tailwind. Pathname-based routing (no hash-only state). Vercel serverless `/api/contact`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` — home
- `/products` — Schaaq · LNYRD · Warranty Triage · In development
- `/method` — data boundary + process
- `/team` — people
- `/contact` — three-field enquiry form posting to `/api/contact`

## Structure

- `src/components/` — `Nav`, `Footer`, `primitives`, `DataBoundaryDiagram`, `HeroMedia`
- `src/pages/` — `HomePage`, `ProductsPage`, `MethodPage`, `TeamPage`, `ContactPage`
- `src/lib/router.js` — `window.history` pathname router
- `api/contact.js` — Vercel serverless contact endpoint (Resend)
- `public/assets/` — product screenshots (proof)
- `public/images/`, `public/video/` — TODO-media placeholders, see [`docs/image-audit.md`](docs/image-audit.md)
- `vercel.json` — SPA rewrites (with `/api/*` pass-through)

## Environment variables (Vercel production)

`/api/contact` needs:

- `CONTACT_TO_EMAIL` — destination inbox
- `CONTACT_FROM_EMAIL` — verified sender
- `RESEND_API_KEY` — Resend API key

If these aren't set, the endpoint responds with a 500 and the frontend exposes a mailto fallback button. The endpoint does not log submission content in production.

## Image & media hygiene

See [`docs/image-audit.md`](docs/image-audit.md). Every image reference is tracked there with a status (`in-use` / `archive` / `todo-media`). New placeholders go on that list before they land in the tree.
