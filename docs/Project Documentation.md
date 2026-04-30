# Project Documentation

## Overview

This project is a personal product design portfolio for Yulia McCoy. It is structured as a static, content-driven React application where the portfolio narrative, global site copy, and case study data live in TypeScript files and are rendered through reusable page and layout components.

The project is optimized for:

- Presenting a senior product design positioning statement.
- Showcasing measurable outcomes through compact metrics.
- Publishing detailed case studies with consistent structure.
- Providing a lightweight resume route and contact pathways.
- Keeping future content updates low-friction.

## User Experience

The main user journey starts on the homepage and moves through these sections:

1. **Hero:** introduces Yulia's product design positioning and directs visitors to case studies or email contact.
2. **Metrics:** highlights portfolio-level impact.
3. **Featured work:** displays project cards for the selected case studies.
4. **About:** gives context on experience, design approach, and selected companies.
5. **Closing CTA:** invites prospective collaborators or hiring teams to start a conversation.
6. **Footer:** repeats contact links and supporting portfolio destinations.

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
| `/projects/:slug` | `ProjectPage` | Dynamic case study detail page |
| `/resume` | `Resume` | Lightweight resume destination |
| `*` | `NotFound` | Catch-all fallback |

`ProjectPage` reads the `slug` route parameter, looks up the corresponding project with `getProjectBySlug`, and redirects unknown slugs to `/404` through the catch-all route.

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

The current case studies are:

- `starthub-user-onboarding`
- `sbermegamarket-content-creation-app`
- `tetrika-student-dashboard`

## Component Responsibilities

### Layout Components

- `SiteShell` creates the shared page frame around the header, main content, and footer.
- `SiteHeader` renders the sticky navigation, brand link, section links, resume link, and email CTA.
- `SiteFooter` renders copyright, email, and configured contact links.

### Portfolio Components

- `ProjectCard` renders each homepage project card.
- `MetricsStrip` renders a row/grid of metric summaries.
- `CaseStudySection` standardizes case study section layout.
- `ProjectNav` renders links to other case studies.
- `ServicesStrip` and `NavLink` are available supporting components.

### UI Primitive Components

`src/components/ui` contains reusable shadcn-style components such as buttons, dialogs, cards, tabs, accordions, forms, inputs, menus, tooltips, toasts, and other Radix-backed primitives. These components should be reused for future interactive UI instead of introducing one-off component implementations.

## Styling And Design System

The global style system is defined in `src/index.css`.

Key design tokens include:

- Warm cream background colors.
- Dark neutral foreground colors.
- `#4343E5` blue accent and supporting gradient values.
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
- `.muted`
- `.coral-text`
- `.coral-underline`
- `.pill-cta`
- `.pill-ghost`
- `.metric-arrow`
- `.reveal`

Tailwind remains the primary layout layer, while CSS variables and component classes preserve the portfolio's visual identity.

The accent color is defined in `src/index.css` as HSL `240 76% 58%`, matching `#4343E5`. Text on primary and accent-colored controls uses white foreground tokens for contrast. Some reusable CSS hooks still use legacy `coral` names for compatibility, but they now render the blue accent.

## Assets

Static assets live in `public`.

- `public/favicon.ico` is the favicon.
- `public/robots.txt` configures crawler behavior.
- `public/images/og-yulia-mccoy.svg` is the Open Graph-style image asset.
- `public/projects/<project>/cover.svg` is used on project cards and project hero sections.
- `public/projects/<project>/final-01.svg` and `final-02.svg` are used in case study final UI sections.

Because Vite serves `public` from the site root, assets are referenced with root-relative URLs such as `/projects/starthub/cover.svg`.

## SEO And Metadata

Metadata is currently managed inside route components with `useEffect`.

- `Index` sets the homepage document title and description.
- `ProjectPage` sets a project-specific document title and description based on the active project.
- `Resume` sets the resume document title and description.

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

1. Create a new asset folder in `public/projects/<new-project>/`.
2. Add a cover image and final screen images.
3. Add a new `Project` object to `src/data/projects.ts`.
4. Give the project a unique `slug`.
5. Set `order` to control where it appears.
6. Visit `/projects/<slug>` locally.
7. Run `npm run build`.

### Update Contact Information

1. Open `src/data/site.ts`.
2. Update `email`, `linkedinUrl`, `resumeUrl`, `paintingPortfolioUrl`, or `contactLinks`.
3. Confirm header, footer, and CTA links still point to the expected destinations.

### Replace Resume Route With A PDF

The current `/resume` route is a lightweight page. To switch to a PDF:

1. Add the PDF to `public`.
2. Update `resumeUrl` in `src/data/site.ts` to point to the PDF path.
3. Decide whether to keep or remove `src/pages/Resume.tsx`.
4. Update routes if `/resume` should redirect or no longer render a React page.

## Testing Strategy

The current Vitest setup is ready for React component and utility tests, but the suite only includes a minimal smoke test. Recommended future tests:

- `getProjects` returns projects sorted by `order`.
- `getProjectBySlug` returns the correct project and handles missing slugs.
- `ProjectPage` handles an unknown slug.
- `SiteHeader` renders expected navigation links.
- `ProjectCard` renders title, summary, image, and destination link.

## Build And Deployment

The production build output is generated by Vite in `dist`.

Recommended deployment steps:

1. Run `npm run lint`.
2. Run `npm run test`.
3. Run `npm run build`.
4. Deploy the generated `dist` directory to a static hosting provider.

For client-side routing, configure the host to serve `index.html` for unknown paths so routes like `/projects/starthub-user-onboarding` work on refresh.

## Maintenance Notes

- Prefer editing data files before changing page components when making content updates.
- Keep project slugs stable once shared externally.
- Keep all image paths root-relative when referencing files from `public`.
- Reuse existing design tokens and component classes to preserve visual consistency.
- Add tests when changing shared helpers, routing behavior, or component logic.
- `package-lock.json` indicates npm is supported; `bun.lock` and `bun.lockb` are also present, so align on one package manager before making dependency updates.

## Agent Guidance

The repository root includes `AGENTS.md` for AI agent instructions. Agents must document meaningful changes in the `docs/` folder and should follow `docs/Documentation Policy.md` when deciding what to update or create.
