# AGENTS.md — Working Safely in This Repo

## Commands

```bash
yarn install
yarn dev        # Vite dev server
yarn build      # vite build -> dist/
yarn preview    # preview dist
yarn lint       # eslint .  (flat config, react-hooks + react-refresh)
```

- No test runner is configured. Verify with `yarn lint && yarn build` plus a manual route walk.
- Node 20+ required. `node_modules/` and `dist/` are gitignored.
- Network-restricted environments may fail on `yarn install` (sharp registry); code changes are still safe to make without a build.

## Architecture (read before editing)

```text
main.jsx (HelmetProvider > BrowserRouter > App)
  App.jsx = Navbar + <main><AppRoutes/></main> + CallToAction + Footer   # THE ONLY shell
  routes/AppRoutes.jsx = /, /about, /projects, /projects/:slug, /blogs, /blogs/:slug, /contact
  pages/* = thin composition (SEO + feature sections, NO Navbar/Footer/CTA)
  features/* = page sections, each: Component.jsx + Component.styled.js + index.js
  components/* = shared (SEO, ProjectCard, RichText, CallToAction, Footer, Navbar, ...)
```

Data flow:

- **Hygraph CMS** (`src/services/hygraph.js`, `graphql-request`) is source of truth for `projects`, `blogPosts`, `technologies`. Fails fast if `VITE_HYGRAPH_ENDPOINT` / `VITE_HYGRAPH_ACCESS_TOKEN` are missing.
- **Static `src/data/`** covers hero/about/services/experience/testimonials/FAQ/CTA/footer/navbar plus `blogs.js#hero` only. Do not reintroduce static project/blog duplicates.
- **EmailJS** (`src/services/emailService.js`) powers `ContactForm`. Requires `VITE_EMAILJS_PUBLIC_KEY` / `SERVICE_ID` / `TEMPLATE_ID`.
- Rich text (`.raw`) renders via `src/components/RichText/` (`@graphcms/rich-text-react-renderer`).
- Section-anchor nav lives in `src/hooks/useSectionNavigation.js` + `HomePage` `location.state.scrollTo`; footer `quickLinks` hold the real `#` anchors.

## Conventions

- Component folder: `Name.jsx + Name.styled.js + index.js` (`export { default } from "./Name"`).
- Static data: `*.data.js` plain objects — `{ pretitle, heading: { main, highlight }, stats/cards/items }`.
- Styling: `styled-components` consuming `src/styles/theme.js`; tokens mirrored as CSS vars in `theme.css`. Breakpoints: mobile 576px, tablet 1024px, laptop 1280px, desktop 1440px.
- Motion: import from `src/animations/` (`fadeUp`, `staggerContainer`, `ease.standard`, `viewport { once: true, amount: 0.3 }`); respect `useReducedMotion` where already used.
- Categories: normalize via `src/utils/categoryUtils.js` (`getDisplayLabel`, `getSortedCategories`, `getSortedProjectCategories`). GitHub labels via `githubUtils#getGitHubLabel`. Capitalization via `stringUtils#capitalizeFirstLetter`.
- SEO: always use `src/components/common/SEO.jsx` (`title, description, path, image?`), never raw `<Helmet>` in pages. `image` accepts `/relative` or `http(s)` URLs.
- Images: WebP-only in `src/assets/` + `public/images/`; run `yarn convert-images` for new rasters.

## Pitfalls — do not regress

1. **Single shell only.** `App.jsx` owns Navbar/CTA/Footer. Never add Navbar/CTA/Footer to pages or a Layout wrapper (the double-Navbar bug was fixed by deleting `Layout/`).
2. **HelmetProvider required.** `main.jsx` wraps the app; removing it silently breaks all `<SEO>` tags.
3. **No raw Helmet.** `ProjectDetail` and `BlogDetailPage` were migrated to `<SEO>` — keep it that way.
4. **Sitemap scope.** `public/sitemap.xml` lists the 5 static routes only. Do not add CMS slugs.
5. **Deleted code stays deleted.** `ComingSoon.jsx`, `Navbar/useActiveSection.js`, `data/project.js`, `BlogDetail/Hero|Content`, `components/Layout/` were intentionally removed. `data/blogs.js` is hero-only on purpose.
6. **Env keys only.** Never log or commit `.env` values. The 5 `VITE_*` keys above are the full contract.
7. **SPA routing.** `vercel.json` rewrite to `/index.html` is required for deep links; `ScrollToTop.jsx` already skips scroll-reset for `state.scrollTo` navigations.

## Definition of done

- `yarn lint` clean (or note network-blocked install if unverifiable).
- `yarn build` succeeds; `dist/` contains `sitemap.xml` + `robots.txt`.
- Manual check: `/`, `/about`, `/projects`, `/projects/:slug`, `/blogs`, `/blogs/:slug`, `/contact` each render exactly one Navbar, one Footer, one CTA, with correct `<title>`/canonical/OG tags.
- `grep -r "ComingSoon|useActiveSection|from.*components/Layout|blogDetailData" src/` returns no hits (except this file).
