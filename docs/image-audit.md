# Image audit — Ten Fish Labs site

Generated against the rebuilt site. Every image reference tracked, duplication noted, final use assigned.

Legend:

- **Status** — `in-use`, `archive` (shipped but not referenced; kept as proof asset), `todo-media` (placeholder path, file not yet delivered).
- **Duplicated?** — flagged if the same asset is referenced in two unrelated contexts.

## Product screenshots (`public/assets/`)

| File                        | Status  | Used in                                                            | Duplicated?                           | Recommended final use                                    |
| --------------------------- | ------- | ------------------------------------------------------------------ | ------------------------------------- | -------------------------------------------------------- |
| `/assets/schaaq.png`        | in-use  | `HomePage` portfolio card · `ProductsPage` Schaaq hero             | Yes (home card + product hero — OK, same product) | Keep. Schaaq primary shot.                               |
| `/assets/schaaq-ma.png`     | in-use  | `ProductsPage` Schaaq detail                                       | No                                    | Keep as Schaaq M&A diagnostic detail shot.               |
| `/assets/schaaq-report.png` | archive | —                                                                  | Was duplicative with `schaaq-ma.png`  | Hold as backup. Re-introduce only if Schaaq grows a third distinct shot. |
| `/assets/lnyrd-dashboard.png` | in-use | `HomePage` portfolio card · `ProductsPage` LNYRD hero              | Yes (home card + product hero — OK)   | Keep. LNYRD primary shot.                                |
| `/assets/lnyrd-candidates.png` | in-use | `ProductsPage` LNYRD detail                                       | No                                    | Keep as LNYRD candidate-review detail shot.              |
| `/assets/lnyrd-reviews.png` | archive | —                                                                  | No                                    | Hold as backup. Was duplicative with `lnyrd-candidates.png`. |
| `/assets/triage-home.png`   | in-use  | `HomePage` portfolio card · `ProductsPage` Warranty hero           | Yes (home card + product hero — OK)   | Keep. Warranty Triage primary shot.                      |
| `/assets/triage-rive.png`   | in-use  | `ProductsPage` Warranty detail                                     | No                                    | Keep as Warranty Triage start-review detail shot.        |

### Notes

- The previous site re-used `schaaq.png`, `triage-home.png`, `lnyrd-dashboard.png` across *unrelated* contexts (approach mosaics, priority callouts, full-bleed bands). That's gone. In the rebuild each screenshot is used at most once per page, and only inside its own product context.
- `schaaq-report.png` and `schaaq-ma.png` overlapped in content — the M&A diagnostic view is richer, so that stays in-use; the report view goes to archive.
- `lnyrd-reviews.png` and `lnyrd-candidates.png` overlapped — candidate view is sharper proof, so that stays in-use; reviews goes to archive.
- Product screenshots are never used as decorative background imagery. They only appear framed in a product context.

## New media (`public/video/`, `public/images/`)

| File                          | Status     | Used in                                  | TODO                                                                                   |
| ----------------------------- | ---------- | ---------------------------------------- | -------------------------------------------------------------------------------------- |
| `/video/hero-scanner.mp4`     | todo-media | `HeroMedia` on `/`                       | Deliver a short (5–8s), silent, looping MP4 of an operational-review scanner/workflow. |
| `/images/hero-scanner.jpg`    | todo-media | `HeroMedia` poster + fallback            | Deliver a 1920×1280 still matching the video's first frame.                            |
| `/images/perth-coast.jpg`     | todo-media | (reserved — not yet wired)               | Candidate for a `/team` or `/contact` locale backdrop. Not referenced in code yet.     |
| `/images/team/uzy.jpg`        | todo-media | `HomePage` team preview · `TeamPage`     | Portrait, 4:5, high-res. CSS applies `grayscale(1)`.                                   |
| `/images/team/julia.jpg`      | todo-media | `HomePage` team preview · `TeamPage`     | Same brief.                                                                            |
| `/images/team/brad.jpg`       | todo-media | `HomePage` team preview · `TeamPage`     | Same brief.                                                                            |
| `/images/team/ishay.jpg`      | todo-media | `HomePage` team preview · `TeamPage`     | Same brief.                                                                            |
| `/images/team/sam.jpg`        | todo-media | `HomePage` team preview · `TeamPage`     | Same brief.                                                                            |

While `todo-media` files are missing:

- `<img onError>` hides the broken image so empty plinths render clean.
- `HeroMedia` hides the `<video>` on error and reveals the `/assets/schaaq.png` fallback (marked as a temporary fallback in source).

## Removed from use

- `schaaq-report.png`, `lnyrd-reviews.png` — kept on disk as proof archive, not referenced in components.
- Full-bleed screenshot bands, `HeroTripleShot`, `CraftMosaic`, `PhoneShot` — removed with the old `visuals.jsx`. Product screenshots no longer act as decorative backdrops.

## Hygiene rules going forward

1. A product screenshot may appear in at most one card on a given page, and only inside that product's own context.
2. No stock imagery.
3. No decorative use of product screenshots behind text — if a background image is needed, use a `todo-media` placeholder and flag it here.
4. Team portraits get `grayscale(1) contrast(1.02)` — no colour portraits mixed in.
5. Every new `/images/*` or `/video/*` reference must be added to this table with a `todo-media` entry until the file lands in `public/`.
