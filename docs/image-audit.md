# Image audit — Ten Fish Labs site

Every image and video reference tracked. Duplicates, archive, and TODO-media all recorded here before a file lands in `public/`.

**Current standing (reverified):**

- ✅ No product screenshot is used as generic decorative filler. Each of the eight product screenshots appears only inside its own product's context (home portfolio card → `/products` overview card → `/products/:slug` hero fallback, plus one detail shot on the product page).
- ✅ `/team` does not depend on individual portraits. The page uses three documentary/group images (`tenfish-team-working.jpg`, `tenfish-whiteboard.jpg`, `tenfish-session-detail.jpg`) and typographic role cards with expandable `<details>` bios. The five previous portrait paths (`/images/team/{uzy,julia,brad,ishay,sam}.jpg`) are no longer referenced anywhere in code.
- ✅ No stock imagery. No fake AI graphics (no neural-net swirls, no data-stream gradients).

Legend:

- **Status** — `in-use` · `archive` (shipped but unreferenced; kept as proof asset) · `todo-media` (placeholder path, file not yet delivered).
- **Duplicated?** — flagged only when the same asset appears in *unrelated* contexts.

## Product screenshots (`public/assets/`)

| File                           | Status  | Used in                                                                                          | Duplicated?                       | Recommended final use                                                                          |
| ------------------------------ | ------- | ------------------------------------------------------------------------------------------------ | --------------------------------- | ---------------------------------------------------------------------------------------------- |
| `/assets/schaaq.png`           | in-use  | HomePage portfolio card · `/products` overview card · `/products/schaaq` hero fallback           | No (all within Schaaq context)    | Schaaq primary shot.                                                                           |
| `/assets/schaaq-ma.png`        | in-use  | `/products/schaaq` detail ref (via `detailImg`)                                                   | No                                | Schaaq M&A diagnostic detail.                                                                  |
| `/assets/schaaq-report.png`    | archive | —                                                                                                | Was duplicative with `schaaq-ma.png` | Hold. Surface only if Schaaq earns a third distinct shot.                                  |
| `/assets/lnyrd-dashboard.png`  | in-use  | HomePage portfolio card · `/products` overview card · `/products/lnyrd` hero fallback            | No (all within LNYRD context)     | LNYRD primary shot.                                                                            |
| `/assets/lnyrd-candidates.png` | in-use  | `/products/lnyrd` detail ref                                                                     | No                                | LNYRD candidate-review detail.                                                                 |
| `/assets/lnyrd-reviews.png`    | archive | —                                                                                                | No                                | Hold. Duplicated with `lnyrd-candidates.png`.                                                  |
| `/assets/triage-home.png`      | in-use  | HomePage portfolio card · `/products` overview card · `/products/warranty-triage` hero fallback  | No (all within Warranty context)  | Warranty Triage primary shot.                                                                  |
| `/assets/triage-rive.png`      | in-use  | `/products/warranty-triage` detail ref                                                           | No                                | Warranty Triage start-review detail.                                                           |

### Rules

- No product screenshot is used as decorative filler. They appear only inside their own product context.
- No screenshot appears in two unrelated places (home hero, team, method, etc.).
- Each product's own page uses at most one primary shot + one detail shot.

## New media (`public/video/`, `public/images/`)

### Home hero — systems loop

| File                                    | Status     | Used in                | TODO brief                                                                                                 |
| --------------------------------------- | ---------- | ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `/video/tenfish-systems-loop.mp4`       | todo-media | HomePage `HeroMedia`   | 8–12s silent loop cutting product interface · data scanning · evidence/outputs · architecture diagram · team working. H.264, <3 MB. |
| `/images/tenfish-systems-poster.jpg`    | todo-media | HomePage hero poster   | 1920×1280 still — representative frame from the loop.                                                      |

Fallback while missing: `/assets/schaaq.png` (screenshot only — no text overlay on the video).

### Product hero loops

| File                              | Status     | Used in                      | TODO brief                                                                |
| --------------------------------- | ---------- | ---------------------------- | ------------------------------------------------------------------------- |
| `/video/schaaq-loop.mp4`          | todo-media | `/products/schaaq` hero      | Short loop of Schaaq UI scanning a schema and producing a finding.        |
| `/images/schaaq-poster.jpg`       | todo-media | `/products/schaaq` poster    | 1920×1280 still from Schaaq UI.                                           |
| `/video/lnyrd-loop.mp4`           | todo-media | `/products/lnyrd` hero       | Short loop of LNYRD criteria review surface in use.                       |
| `/images/lnyrd-poster.jpg`        | todo-media | `/products/lnyrd` poster     | 1920×1280 still from LNYRD surface.                                       |
| `/video/warranty-loop.mp4`        | todo-media | `/products/warranty-triage`  | Short loop of Warranty Triage claim routing.                              |
| `/images/warranty-poster.jpg`     | todo-media | `/products/warranty-triage`  | 1920×1280 still from Warranty Triage.                                     |

Fallback while missing: each product's existing primary screenshot (via `HeroMedia` `onError`).

### Team imagery — group/documentary, not portraits

| File                                              | Status     | Used in                                  | TODO brief                                                                                 |
| ------------------------------------------------- | ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| `/images/team/tenfish-team-working.jpg`           | todo-media | `/team` hero · (HomePage: no image used) | Wide documentary frame of the team working together. Natural light. No corporate posing.   |
| `/images/team/tenfish-whiteboard.jpg`             | todo-media | `/team` documentary strip (left)         | Whiteboard session — hands and board, not centred faces. Same visual language.             |
| `/images/team/tenfish-session-detail.jpg`         | todo-media | `/team` documentary strip (right)        | Close detail — a notebook, a screen, a model on a laptop. Reinforces "we build, in situ".  |

### Removed / no longer referenced

Individual portrait paths from the previous iteration are **no longer used in code**:

- `/images/team/uzy.jpg`
- `/images/team/julia.jpg`
- `/images/team/brad.jpg`
- `/images/team/ishay.jpg`
- `/images/team/sam.jpg`

The `/team` page and the HomePage team preview now rely on typographic role cards + group documentary imagery. Bring portraits back only if they are used editorially *in addition to* the group imagery, never as the primary visual direction.

- `/images/hero-scanner.jpg` / `/video/hero-scanner.mp4` — superseded by `tenfish-systems-*`. Remove from any stale references.
- `/images/perth-coast.jpg` — reserved; not referenced anywhere in code. Hold.

### Archive

- `schaaq-report.png`, `lnyrd-reviews.png` — on disk, unreferenced.

## Hygiene rules going forward

1. No stock imagery.
2. No fake AI graphics — no neural-network swirls, no data-stream gradients.
3. No product screenshot may be reused as decorative filler. One product, one context.
4. Team imagery is group/documentary — not corporate headshot-led.
5. Every new `/images/*` or `/video/*` path must be added to this table with a `todo-media` entry *before* it lands in `public/`.
