# Project Documentation

## Overview

This project is a personal product design portfolio for Yulia McCoy. It is structured as a static, content-driven React application where the portfolio narrative, global site copy, and case study data live in TypeScript files and are rendered through reusable page and layout components.

The project is optimized for:

- Presenting a senior product design positioning statement.
- Showcasing measurable outcomes through compact metrics.
- Publishing detailed case studies with consistent structure.
- Providing a lightweight resume route and contact pathways.
- Publishing a dedicated artist portfolio and collector inquiry page.
- Publishing a standalone wedding invitation microsite at `/kirillandalina`.
- Keeping future content updates low-friction.

## User Experience

The main user journey starts on the homepage and moves through these sections:

1. **Hero:** introduces Yulia's product design positioning and directs visitors to case studies or email contact.
2. **Metrics:** highlights portfolio-level impact.
3. **Featured work:** displays project cards for the selected case studies.
4. **About:** gives context on experience, design approach, and selected companies.
5. **Closing CTA:** invites prospective collaborators or hiring teams to start a conversation.
6. **Footer:** repeats contact links and supporting portfolio destinations.

The artist portfolio journey at `/art` is a calm, editorial collector inquiry page. The older `/artist-portfolio` path also renders the same page as a compatibility alias.

1. **Hero:** introduces the artist portfolio and directs visitors to available works or contact.
2. **Available works:** displays the all-works view and data-driven artwork cards.
3. **Artwork inquiry cards:** show image, title, medium, year, size, price, and an email inquiry CTA.
4. **Artwork lightbox:** opens a full-screen image preview from each artwork card on the `/art` gallery.
5. **About:** presents the artist bio.
6. **Contact:** surfaces email, Instagram, and an availability request CTA.

The wedding invitation journey at `/kirillandalina` is a mobile-first standalone microsite inspired by the source Tilda invitation for Kirill and Alina.

1. **Decorative cover:** shows the couple names and date over the local calla lily hero image.
2. **Invitation copy:** confirms the wedding date as 10 October 2026.
3. **Schedule:** lists guest arrival, ceremony, dinner, and evening close times.
4. **Venue:** shows restaurant imagery and the Labinsk address.
5. **Flowers note:** asks guests to bring a bottle of wine with wishes instead of bouquets.
6. **RSVP form:** posts guest names and attendance answers to `melikhovau77@gmail.com` through FormSubmit.

Case study pages follow a consistent long-form structure:

1. Project title, summary, product description, and cover image.
2. Project-specific metrics.
3. Outcome sentence.
4. Challenge.
5. Goal and role.
6. Research.
7. Process.
8. Design rationale.
9. Solution.
10. Impact.
11. Final UI.
12. Reflection.
13. Navigation to other projects.

## Architecture

The app uses a conventional Vite React structure:

- `src/main.tsx` mounts the React application.
- `src/App.tsx` declares app providers and route definitions.
- `src/pages/*` contains route-level views.
- `src/components/*` contains layout and reusable presentation components.
- `src/components/ui/*` contains shadcn-style primitives.
- `src/data/*` contains content models and site data.
- `src/hooks/*` contains reusable React hooks.
- `src/index.css` defines the design system and global styles.

The application currently renders static local data. `@tanstack/react-query` is installed and initialized in `App.tsx`, which leaves room for future remote data or async integrations without changing the provider structure.

## Routing

Routing is handled by `react-router-dom` in `src/App.tsx`.

| Route | Component | Purpose |
| --- | --- | --- |
| `/` | `Index` | Homepage and portfolio overview |
| `/art` | `ArtistPortfolio` | Artist portfolio and collector inquiry page |
| `/artist-portfolio` | `ArtistPortfolio` | Compatibility alias for the artist portfolio page |
| `/kirillandalina` | `KirillAndAlina` | Mobile-first Kirill and Alina wedding invitation |
| `/projects/:slug` | `ProjectPage` | Dynamic case study detail page |
| `/resume` | `Resume` | Resume overview page with a PDF download CTA |
| `*` | `NotFound` | Catch-all fallback |

`ProjectPage` reads the `slug` route parameter, looks up the corresponding project with `getProjectBySlug`, and redirects unknown slugs to `/404` through the catch-all route.

`App` includes a route-change scroll reset so direct navigation to routes such as `/art` starts at the top of the page. Hash links such as `/#projects` keep their target-section behavior.

## Data Model

### Global Site Content

`src/data/site.ts` exports the `siteContent` object and supporting interfaces:

- `Metric`
- `ContactLink`
- `Company`
- `Service`
- `SiteContent`

This file controls:

- Hero copy.
- Homepage supporting line.
- Portfolio-wide metrics.
- Service descriptions.
- Bio paragraphs.
- Selected experience.
- Contact links.
- Resume, LinkedIn, painting portfolio, and email values.

### Project Content

`src/data/projects.ts` exports:

- `FinalScreen`
- `Project`
- `projects`
- `getProjects`
- `getProjectBySlug`

Each `Project` object controls a complete case study. The `slug` drives routing, `order` controls homepage/project navigation ordering, and image paths reference files in `public/projects`.

Projects can optionally define `problemInsights` to render a compact challenge table on the case study page. Each row summarizes the issue, the observed signal, and the business risk.

Projects can also define `onboardingFlowComparison` to render a before/after flow block that compares original and redesigned step counts.

Projects can define `researchSignals`, `designMoves`, and `impactHighlights` to replace text-heavy lists with compact infographic cards for scannable case study storytelling. The selected case studies use these fields to make research inputs, design decisions, and impact summaries more visual.

The current case studies are:

- `starthub-user-onboarding`
- `sbermegamarket-content-creation-app`
- `tetrika-student-dashboard`

### Artwork Content

`src/data/artworks.ts` exports:

- `artworkCategories`
- `ArtworkCategory`
- `Artwork`
- `artworks`
- `artContact`

The `artworks` array controls the artist portfolio gallery at `/art`. Each artwork includes a stable `id`, title, orientation, image path, and accessible alt text. Works can optionally include category, medium, year, size, price, custom `imageFit`, `placement`, and `status: "sold"` when those details are confirmed. The gallery currently exposes only the `All` tab, so all live artworks remain visible together.

`orientation` is required and should be `landscape`, `portrait`, or `square`. `ArtworkGrid` groups visible works by orientation so landscape pieces sit with landscape pieces and portrait pieces sit with portrait pieces. Set `placement: "bottom"` to pin a specific artwork after the grouped sections. `ArtworkCard` uses the orientation to set the image frame aspect ratio and avoid large empty bands around horizontal paintings. Set `imageFit: "contain"` on a specific artwork when the full image should remain visible inside the card frame instead of being cropped, including when a landscape image needs to sit in the square group.

Artwork image paths point to `public/images/art/works/*.jpeg`. The current artwork images were copied from the local `картины copy` folder and renamed to URL-safe filenames. Files from `картины copy/продано` are marked as sold in the data file, while selected works from `картины copy/не выставочные` can be copied into `public/images/art/works` when they are added to the live gallery. Images can remain in `public` as archived assets even when their corresponding `artworks` entry is removed from the live gallery.

`Border of Silence` is listed as a 2026 square oil pastel on canvas work using `public/images/art/works/border-of-silence.jpeg`, with `imageFit: "contain"` so the full artwork remains visible in the gallery card.

## Component Responsibilities

### Layout Components

- `SiteShell` creates the shared page frame around the header, main content, and footer.
- `SiteHeader` renders the sticky navigation, brand link, section links, resume link, and email CTA.
- `SiteFooter` renders copyright, email, and configured contact links.

### Portfolio Components

- `ProjectCard` renders each homepage project card and keeps metric chips vertically aligned across the desktop card grid.
- `MetricsStrip` renders a row/grid of metric summaries.
- `CaseStudySection` standardizes case study section layout and keeps list text aligned with visual cards in the content column.
- `ProjectPage` renders optional case-study insight tables, before/after step comparisons, infographic card groups, and compact final-screen grids when project data includes the corresponding visual content fields.
- `ProjectNav` renders links to other case studies.
- `ServicesStrip` and `NavLink` are available supporting components.

### Artist Portfolio Components

- `components/art/Header` renders the artist portfolio sticky header with the Yulia McCoy logo linking to `https://ymccoy.com/art` and a single Contact destination.
- `components/art/Hero` renders the artist portfolio hero and primary CTAs.
- `components/art/FilterTabs` renders the keyboard-accessible all-works tab.
- `components/art/ArtworkGrid` maps filtered artwork data into responsive cards and owns the full-screen artwork lightbox state for `/art`, fitting opened images fully within the viewport and supporting previous/next navigation with on-screen arrows and keyboard arrow keys.
- `components/art/ArtworkCard` renders artwork image, metadata, price, and email inquiry CTA; clicking the card opens the lightbox while the inquiry CTA keeps its mailto behavior.
- `components/art/AboutSection` renders the artist bio.
- `components/art/ContactSection` renders email, Instagram, and availability request CTAs.

### Wedding Invitation Page

- `pages/KirillAndAlina.tsx` renders the standalone wedding invitation content, schedule, venue, flowers note, and RSVP form.
- The RSVP form submits to `https://formsubmit.co/melikhovau77@gmail.com`; the first live submission may require FormSubmit email activation for that recipient.
- The page intentionally does not use `SiteShell`, so it can preserve the narrow mobile invitation look without the portfolio header and footer.

### UI Primitive Components

`src/components/ui` contains reusable shadcn-style components such as buttons, dialogs, cards, tabs, accordions, forms, inputs, menus, tooltips, toasts, and other Radix-backed primitives. These components should be reused for future interactive UI instead of introducing one-off component implementations.

## Styling And Design System

The global style system is defined in `src/index.css`.

Key design tokens include:

- Cool neutral background colors: `#F7F7FB` primary and `#F1F2F8` secondary.
- Clean white and soft-white surface colors.
- High-contrast dark foreground colors with cool gray secondary text.
- `#7C72FF` digital lavender accent with hover, pressed, soft, and selected states.
- Reusable shadows.
- Fluid type scale variables.
- Display and body font stacks.
- Shared radii and focus-ring behavior.

Reusable CSS classes include:

- `.page-wrap`
- `.content-wrap`
- `.surface`
- `.eyebrow`
- `.section-label`
- `.section-title`
- `.display`
- `.case-hero-title`
- `.muted`
- `.coral-text`
- `.coral-underline`
- `.pill-cta`
- `.pill-ghost`
- `.metric-arrow`
- `.metrics-grid`
- `.home-hero`
- `.home-cta`
- `.about-panel`
- `.case-hero`
- `.case-section`
- `.resume-section`
- `.art-hero-title`
- `.reveal`

The wedding invitation uses route-specific classes prefixed with `.wedding-` in `src/index.css`. These styles keep the page constrained to a mobile invitation width, use `public/images/wedding/kirill-alina-hero.jpeg` for the opening cover, and provide a desktop wrapper only to center the mobile composition.

The schedule invitation block uses `public/images/wedding/kirill-alina-invitation-bg.jpeg` as its pearlescent background image.

Tailwind remains the primary layout layer, while CSS variables and component classes preserve the portfolio's visual identity.

The accent color is defined in `src/index.css` as HSL `244 100% 72%`, matching `#7C72FF`. Text on primary accent-colored controls uses white foreground tokens for contrast, while softer accent surfaces use the darker `#5F52E6` accent text color. Some reusable CSS hooks still use legacy `coral` names for compatibility, but they now render the digital lavender accent system.

Mobile rules live mostly in the `max-width: 720px` block in `src/index.css`.
Shared mobile behavior includes narrower page gutters, stacked CTA groups, one-column
metric grids, one-column case-study layouts, compact resume cards, and horizontally
scrollable artist category tabs.

## Assets

Static assets live in `public`.

- `public/favicon.ico` is the favicon.
- `public/robots.txt` configures crawler behavior.
- `public/images/og-yulia-mccoy.svg` is the Open Graph-style image asset.
- `public/images/art/works/` stores artwork photographs for the `/art` gallery.
- `public/images/art/yulia-gallery-hero.jpeg` is the uncropped artist portrait/gallery image used on the `/art` hero.
- `public/projects/<project>/cover.png` stores the 1448 x 1086 laptop mockup cover used for homepage project cards and project hero images through each project's `coverImage`.
- `public/projects/<project>/cover.svg` contains earlier SVG cover artwork that can still be reused if needed.
- `public/projects/<project>/final-01.svg` and `final-02.svg` are used in case study final UI sections.

Because Vite serves `public` from the site root, assets are referenced with root-relative URLs such as `/projects/starthub/cover.png`.

## SEO And Metadata

Metadata is currently managed inside route components with `useEffect`.

- `Index` sets the homepage document title and description.
- `ProjectPage` sets a project-specific document title and description based on the active project.
- `Resume` sets the resume document title and description and links to the downloadable PDF resume.

If the project grows, consider centralizing metadata updates in a small helper to avoid repeating document title and meta description logic across pages.

## Accessibility

Current accessibility considerations include:

- Semantic `main`, `header`, `footer`, `nav`, `section`, `figure`, and list structures.
- Focus-visible styling for interactive elements.
- Meaningful `alt` text for project images and final screens.
- Reduced-motion handling in CSS.

Future additions should preserve keyboard navigation, visible focus states, semantic landmarks, and descriptive labels for interactive controls.

## Development Workflow

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the app:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

Run tests:

```bash
npm run test
```

## Content Update Workflows

### Update Homepage Copy

1. Open `src/data/site.ts`.
2. Edit the relevant fields in `siteContent`.
3. Run `npm run build` to catch type or import errors.
4. Review the homepage in the browser.

### Add A Project

1. Add card artwork to `public/cases/`.
2. Create a new asset folder in `public/projects/<new-project>/`.
3. Add final screen images.
4. Add a new `Project` object to `src/data/projects.ts`.
5. Point `coverImage` to the card artwork in `public/cases`.
6. Give the project a unique `slug`.
7. Set `order` to control where it appears.
8. Visit `/projects/<slug>` locally.
9. Run `npm run build`.

### Update Contact Information

1. Open `src/data/site.ts`.
2. Update `email`, `linkedinUrl`, `resumeUrl`, `paintingPortfolioUrl`, or `contactLinks`.
   The painting portfolio link should point to the internal `/art` route unless that experience moves off-site.
3. Confirm header, footer, and CTA links still point to the expected destinations.

### Resume PDF Download

The header Resume links download the hosted PDF at `/files/yulia-mccoy-resume.pdf`.
The source asset lives in `public/files/yulia-mccoy-resume.pdf`, and
`resumeUrl` plus the Resume contact link in `src/data/site.ts` should stay pointed
at that path.

To replace the file later:

1. Export the new PDF.
2. Replace `public/files/yulia-mccoy-resume.pdf`.
3. Confirm header and contact links still download the expected document.

## Testing Strategy

The current Vitest setup is ready for React component and utility tests, but the suite only includes a minimal smoke test. Recommended future tests:

- `getProjects` returns projects sorted by `order`.
- `getProjectBySlug` returns the correct project and handles missing slugs.
- `ProjectPage` handles an unknown slug.
- `SiteHeader` renders expected navigation links.
- `ProjectCard` renders title, summary, image, and destination link.

## Build And Deployment

The production build output is generated by Vite in `dist`.

For Cloudflare Pages, use these project build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

Do not use `npm run dev` as the Cloudflare Pages build command. That command starts the long-running Vite development server and does not exit, so Cloudflare waits until the deployment times out instead of uploading static assets.

Recommended deployment steps:

1. Run `npm run lint`.
2. Run `npm run test`.
3. Run `npm run build`.
4. Deploy the generated `dist` directory to a static hosting provider.

For client-side routing, configure the host to serve `index.html` for unknown paths so routes like `/projects/starthub-user-onboarding` work on refresh.

This repo includes `public/_redirects` with `/* /index.html 200` so Cloudflare Pages serves the React app for direct client-side URLs such as `/art`, `/resume`, and `/projects/:slug`.

## Maintenance Notes

- Prefer editing data files before changing page components when making content updates.
- Keep project slugs stable once shared externally.
- Keep all image paths root-relative when referencing files from `public`.
- Reuse existing design tokens and component classes to preserve visual consistency.
- Add tests when changing shared helpers, routing behavior, or component logic.
- `package-lock.json` indicates npm is supported; `bun.lock` and `bun.lockb` are also present, so align on one package manager before making dependency updates.

## Agent Guidance

The repository root includes `AGENTS.md` for AI agent instructions. Agents must document meaningful changes in the `docs/` folder and should follow `docs/Documentation Policy.md` when deciding what to update or create.
