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

## Email delivery — Resend on Vercel

The `/api/contact` endpoint sends via [Resend](https://resend.com/). On Vercel the cleanest path is the **Resend marketplace integration**, which provisions the API key and can write env vars into the project for you. If `tenfishlabs.com` is on Vercel DNS it can also add the DKIM/SPF records automatically during domain verification.

### One-time setup

1. Install the Resend integration from Vercel Marketplace and connect it to the `tenfishlabs-site` project:
   <https://vercel.com/marketplace/resend>
2. In Resend, add `tenfishlabs.com` as a **sending domain**. Resend lists DKIM/SPF/DMARC records; accept Vercel's auto-write if your DNS is on Vercel, or paste into whichever DNS provider holds the apex.
3. Once the domain shows **Verified** in Resend (usually <5 min), set these env vars on the Vercel project in the **Production** scope:
   - `RESEND_API_KEY` — created by the integration in step 1
   - `CONTACT_FROM_EMAIL` — a verified address on the sending domain, e.g. `hello@tenfishlabs.com`
   - `CONTACT_TO_EMAIL` — destination inbox, e.g. `hello@tenfishlabs.com`
4. Redeploy (or trigger a new deploy) so the function picks up the env vars.

### CLI alternative

```bash
vercel env add RESEND_API_KEY production
vercel env add CONTACT_FROM_EMAIL production
vercel env add CONTACT_TO_EMAIL production
vercel --prod
```

### Until the env vars are live

`/api/contact` returns a 500 with a clear message and the frontend surfaces a **"Open in your mail client instead →"** button that drafts an email to `hello@tenfishlabs.com` with the form contents. The endpoint never logs submission content in production.

### Local development

Copy `.env.example` → `.env.local` (already gitignored), fill in values, and run `vercel dev` to exercise the serverless function against Resend from localhost.

## Bot protection — Cloudflare Turnstile

The contact form already has a hidden honeypot (`company_website`). Turnstile adds a second layer: a privacy-first CAPTCHA that is invisible for most legitimate users.

### Setup

1. Go to [Cloudflare Dashboard → Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) and add a site for `tenfishlabs.com` (Widget mode: *Managed*).
2. Copy the **Site key** and **Secret key**.
3. Set env vars on the Vercel project:
   - `VITE_TURNSTILE_SITE_KEY` — public site key (must be set for the build scope; `VITE_` prefix exposes it to the client bundle)
   - `TURNSTILE_SECRET_KEY` — server secret (Production scope)
4. Redeploy.

When `VITE_TURNSTILE_SITE_KEY` is not set, the widget is not rendered and the server skips verification — form still works. When both keys are set, `/api/contact` rejects any submission without a valid Turnstile token.

For **local development**, Cloudflare publishes always-pass test keys:

- Site key: `1x00000000000000000000AA`
- Secret key: `1x0000000000000000000000000000000AA`

Put these in `.env.local` to see the widget locally without needing a real site.

## Image & media hygiene

See [`docs/image-audit.md`](docs/image-audit.md). Every image reference is tracked there with a status (`in-use` / `archive` / `todo-media`). New placeholders go on that list before they land in the tree.
