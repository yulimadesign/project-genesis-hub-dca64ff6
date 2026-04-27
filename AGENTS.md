# AGENTS.md

Guidance for AI agents working in this repository.

## Project Context

This is a Vite, React, TypeScript, and Tailwind CSS portfolio site for Yulia McCoy. The application is content-driven: most portfolio copy and case study content lives in `src/data`, while reusable page structure lives in `src/components` and `src/pages`.

## Core Working Rules

- Keep changes focused on the user request.
- Prefer existing project patterns before adding new abstractions.
- Do not revert user changes unless the user explicitly asks for that.
- Use TypeScript types and existing data models when changing content-driven behavior.
- Reuse existing Tailwind tokens, CSS variables, and shared components for UI work.
- Run the narrowest useful verification for the change, then broaden when the change affects shared behavior.

## Documentation Rule

Every meaningful change must be documented in the `docs/` folder before the work is considered complete.

Use this rule with judgment:

- Document feature additions, behavior changes, architecture decisions, workflow updates, setup changes, dependency changes, deployment changes, and testing strategy changes.
- Update existing docs when the change modifies something already documented.
- Create a new focused doc only when the topic does not fit an existing document.
- Keep documentation concise, accurate, and actionable.
- Do not add noisy entries for purely mechanical formatting, typo-only fixes, generated build output, or changes with no lasting project impact.
- If a change affects developer workflow, update `docs/Workflow Orchestration.md` or another workflow-specific doc.
- If a change affects app architecture, content model, routing, styling, testing, or deployment, update `docs/Project Documentation.md`.

## Recommended Verification

Before finishing code changes, run the commands that match the risk of the edit:

```bash
npm run lint
npm run test
npm run build
```

If a command fails because of pre-existing issues, note that clearly and explain whether the current change introduced the failure.

## Repository Map

- `README.md`: main project guide.
- `docs/`: project documentation and workflow rules.
- `src/App.tsx`: providers and route definitions.
- `src/pages/`: route-level screens.
- `src/components/`: shared portfolio components.
- `src/components/ui/`: shadcn-style UI primitives.
- `src/data/`: global site content and case study data.
- `src/index.css`: global design tokens and reusable CSS classes.
- `public/`: static images, project artwork, favicon, and robots file.
