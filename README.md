# Orlando Dela Cruz — Portfolio

Personal portfolio for **Orlando Dela Cruz, Front-End Web Developer**.
Live: https://orlandodelacruz.vercel.app/

Responsive React SPA showcasing skills, projects, experience, blog, and contact —
with Hygraph CMS for dynamic content and EmailJS for the contact form.

## Tech stack

| Area | Choice |
|---|---|
| App | React 19 + Vite 8 + React Router 7 |
| Styling | styled-components 6 + CSS vars (`theme.js` / `theme.css`) + Ant Design 6 (selective) |
| Motion | Framer Motion 12 (shared `src/animations/`) |
| CMS | Hygraph + `graphql-request` |
| Email | `@emailjs/browser` |
| SEO | `react-helmet-async` via `src/components/common/SEO.jsx` |
| Icons | `react-icons` |

## Getting started

```bash
yarn install
yarn dev        # local dev
yarn build      # production build -> dist/
yarn preview    # preview production build
yarn lint       # eslint .
yarn convert-images  # sharp WebP conversion (src/utils/convert-images.mjs)
```

Requires Node 20+ (developed on Node 24).

## Environment variables

Create `.env` in the repo root (never commit values):

```bash
VITE_HYGRAPH_ENDPOINT=https://...
VITE_HYGRAPH_ACCESS_TOKEN=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
```

- Missing Hygraph vars → `src/services/hygraph.js` throws at import.
- Missing EmailJS vars → `sendContactEmail()` throws; contact form shows an error.

## Project structure

```text
src/
  main.jsx            # HelmetProvider + BrowserRouter + GlobalStyle
  App.jsx             # Global shell: Navbar + AppRoutes + CallToAction + Footer
  routes/AppRoutes.jsx
  pages/              # Home, About, Project, ProjectDetail, Blog, BlogDetail, Contact
  features/           # Page sections (Home/*, About/*, Project/*, Blog/*, Contact/*)
  components/         # Navbar, Footer, CallToAction, ProjectCard, RichText, SEO, ...
  data/               # Static content (hero/about/services/experience/testimonials/faq/...)
  services/           # hygraph.js (CMS queries), emailService.js
  styles/             # theme.js + theme.css (mirrored tokens), global.js, fonts.css
  animations/         # variants.js, transitions.js, viewport.js
  hooks/useSectionNavigation.js
  utils/              # ScrollToTop, categoryUtils, githubUtils, stringUtils
public/
  images/logo.webp, images/preview.webp (OG), resume.pdf, robots.txt, sitemap.xml
```

Conventions:

- Each feature/component: `Name.jsx + Name.styled.js + index.js` re-export.
- Static data: `*.data.js` default-export plain objects (`{ pretitle, heading: { main, highlight }, stats/cards/items }`).
- CMS is source of truth for projects, blog posts, technologies. Static `src/data/` covers hero/about/services/experience/testimonials/FAQ/CTA/footer/navbar.
- Images are WebP-only. Run `yarn convert-images` after adding raster assets.

## Design tokens (`theme.js` / `theme.css`)

| Token | Value | Use |
|---|---|---|
| `textPrimary` | `#ffffff` | Headings, primary text |
| `textSecondary` | `#c3cad6` | Body copy, descriptions |
| `textMuted` | `#9aa4b5` | Meta, dates, placeholders, empty states |
| `borderSubtle` | `rgba(255,255,255,0.08)` | Default card/input borders |
| `borderStrong` | `rgba(255,255,255,0.14)` | Emphasized/hover borders |
| `error` / `errorBackground` | `#ff6b6b` / tint | Form errors (never blue — blue means focus) |
| `elevation.card` / `cardHover` | layered shadows | Card rest/hover (hover adds primary ring) |
| `motion.hoverLift` | `-6px` | Single hover-lift distance for all cards |
| `spacing.*` | `50/32/24/16px` | Section/block/group/tight rhythm |
| `zIndex.*` | `0–1000` | Base/sticky/dropdown/overlay/modal/toast |

Rules: no raw `rgba(255,255,255,*)` text/borders in components — use the tokens above (translucent `background` washes and decorative gradients are exempt). One hover language: `translateY(hoverLift)` + `elevation.cardHover`. Primary buttons min-height 44px. FAQ accordion animates via `grid-template-rows`, never `max-height`.

## CMS & content

All page content (except `src/data/navbar.js`) comes from Hygraph.
Sections fetch via `src/services/hygraph.js` + `src/hooks/useCmsQuery.js`,
show `SectionSkeleton` while loading and `QueryError` + retry on failure.
Icons resolve through `src/utils/iconMap.js` (`iconKey` string → component).

Hygraph models queried — 14 custom models (plan limit is 20 total
including the 5 pre-existing: `Project, Technology, BlogPost,
BlogCategory, Author`). Shared models discriminate rows via
`key`/`section`/`placement`:

- `projects`, `blogPosts`, `technologies` (as before)
- `sectionHeading` (`key` unique, `pretitle`, `title`, `highlight`) — keys:
  `home-projects, home-blog, home-skills, home-services, home-experience,
  home-testimonials, about-whatido, about-approach, contact-info, contact-faq`
- `pageHero` (`key` unique: `home|about|project|blog|contact`; optional
  `pretitle, label, title, highlightTitle, headingMain, highlight,
  subtitle, description, subheading, primaryLabel, primaryLink,
  secondaryLabel, imageAlt` + assets `image, background, secondaryCv`)
- `socialLink` (`platform?, label, url?, color?, iconKey`,
  `placement`: `hero-socials|hero-skills|footer-socials`, `order`)
- `homeAbout`, `experience` (`slug, date, position, company, description,
  order`), `testimonial` (`name, position, quote, rating, avatar, order`)
- `featureCard` (`slug` unique, `section`:
  `home-services|about-whatido|about-approach`, `title, description?,
  content?, tag?, iconKey, order`)
- `contentBlock` (`key` unique:
  `about-story|approach-intro|current-goals|project-overview`; optional
  `pretitle, title, highlight, headingMain, headingHighlight, imageAlt,
  paragraphs` RichText, `tags` Json, asset `image`)
- `quickFact` (`label, value, order`), `contactChannel` (`slug, title,
  value, href, description, iconKey, order`),
  `faqItem` (`question, answer, order`)
- `footerContent`, `footerLink` (`label, href,
  linkType: page|section|external, group: quick|pages|contact, iconKey,
  order`), `ctaContent`
- Stats are **derived** via `*Connection { aggregate { count } }`, never stored.
- Schema managed by `scripts/hygraph-migrate-schema.mjs`, content by
  `scripts/hygraph-seed-content.mjs` (`yarn hygraph:migrate` /
  `yarn hygraph:seed`, both support `--dry-run`).

Rich-text fields (`*.raw`) render via
`@graphcms/rich-text-react-renderer` in `src/components/RichText/`.

## SEO & deployment

- Per-route `<SEO>` (title, description, canonical, OG, Twitter) on `/`, `/about`, `/projects`, `/projects/:slug`, `/blogs`, `/blogs/:slug`, `/contact`. `SEO.jsx` accepts relative or absolute `image` URLs.
- `index.html` holds fallback meta + JSON-LD Person schema.
- `public/sitemap.xml` lists the 5 static routes; dynamic slugs are intentionally omitted. `vercel.json` rewrites all routes to `/index.html` for SPA routing.
- Deployed on Vercel from `main`.

## Routes

| Path | Page |
|---|---|
| `/` | Home (hero → about → projects → skills → services → experience → testimonials → blog → contact + FAQ) |
| `/about` | Story, facts, approach, goals |
| `/projects` | CMS grid + filter + search |
| `/projects/:slug` | CMS case study |
| `/blogs` | CMS featured + list |
| `/blogs/:slug` | CMS article |
| `/contact` | Form (EmailJS) + info + FAQ |
