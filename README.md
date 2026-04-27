# Yulia McCoy Portfolio

A polished product design portfolio for Yulia McCoy, built with Vite, React, TypeScript, Tailwind CSS, and shadcn/Radix UI primitives. The site presents a senior product design positioning statement, selected metrics, three detailed case studies, an about section, and a lightweight resume route.

## What The Site Includes

- Homepage hero with positioning, calls to action, metrics, featured work, about content, and contact CTA.
- Data-driven project cards and case study pages.
- Dedicated resume route for hiring conversations.
- Shared layout shell with sticky navigation, skip link, footer, toast providers, and tooltip support.
- Responsive styling through Tailwind utilities and custom CSS design tokens.
- Static project artwork under `public/projects`.

## Tech Stack

- **Framework:** React 18 with Vite 5
- **Language:** TypeScript
- **Routing:** `react-router-dom`
- **Styling:** Tailwind CSS, custom CSS variables, `tailwindcss-animate`
- **UI primitives:** shadcn-style components backed by Radix UI
- **Icons:** `lucide-react`
- **State/data helpers:** `@tanstack/react-query` is initialized at the app root for future async data needs
- **Testing:** Vitest with React Testing Library and jsdom
- **Linting:** ESLint 9 with TypeScript and React Hooks rules

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The Vite server is configured to run on `http://localhost:8080`.

Build for production:

```bash
npm run build
```

Preview the production build locally:

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

## Project Structure

```text
.
├── docs/
│   ├── Project Documentation.md
│   └── Workflow Orchestration.md
├── public/
│   ├── images/
│   └── projects/
├── src/
│   ├── components/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── test/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
└── vitest.config.ts
```

## Application Routes

- `/` renders the portfolio homepage.
- `/projects/:slug` renders a case study from `src/data/projects.ts`.
- `/resume` renders the resume snapshot page.
- `*` renders the not-found page.

## Content Model

Most site content is stored in TypeScript data files so copy and portfolio entries can be updated without rewriting page components.

- `src/data/site.ts` contains global portfolio content: hero copy, metrics, services, bio, contact links, resume URL, social URL, and email.
- `src/data/projects.ts` contains the case study model and project entries. Each project includes its slug, ordering, summary, metrics, research methods, process artifacts, design rationale, solution, impact, final screens, reflection, and image paths.

To add a new case study:

1. Add artwork to `public/projects/<project-name>/`.
2. Add a new `Project` object to `projects` in `src/data/projects.ts`.
3. Give it a unique `slug` and `order`.
4. Confirm the page renders at `/projects/<slug>`.

## Styling System

The visual language is defined mostly in `src/index.css` and extended by `tailwind.config.ts`.

- CSS variables define the warm background, foreground, `#6F82E2` blue accent, radius, shadows, and type scale.
- `.page-wrap` and `.content-wrap` control consistent page widths.
- `.surface`, `.pill-cta`, `.pill-ghost`, `.eyebrow`, `.display`, and related classes provide reusable visual patterns.
- Tailwind utilities handle responsive layout, spacing, grid behavior, and component composition.

## Key Components

- `SiteShell` wraps every route with the header, main landmark, skip link, and footer.
- `SiteHeader` provides primary navigation and mail CTA.
- `SiteFooter` renders contact links and copyright.
- `ProjectCard` renders homepage case study cards.
- `MetricsStrip` renders reusable metric summaries.
- `CaseStudySection` standardizes case study content blocks.
- `ProjectNav` links from one case study to the others.
- `components/ui/*` contains reusable shadcn-style UI primitives.

## Quality Checks

Use these checks before shipping meaningful changes:

```bash
npm run lint
npm run test
npm run build
```

The current test suite contains a minimal Vitest smoke test. Add focused tests when changing shared utilities, routing behavior, data transformations, or interactive components.

## Documentation

- `README.md` is the main project guide.
- `docs/Project Documentation.md` contains deeper architecture, content, styling, accessibility, testing, and deployment documentation.
- `docs/Workflow Orchestration.md` describes the preferred planning, verification, and task-management workflow for future project work.
