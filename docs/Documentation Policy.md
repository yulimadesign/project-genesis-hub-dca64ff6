# Documentation Policy

This project keeps durable implementation knowledge in the `docs/` folder. Any meaningful change should leave the documentation better aligned with the codebase than before.

## Required Practice

Document meaningful changes before considering work complete.

Meaningful changes include:

- New features or user-facing behavior.
- Route, architecture, provider, or data-model changes.
- Styling system, design-token, or shared component changes.
- Setup, build, lint, test, dependency, or deployment changes.
- Workflow, agent, or maintenance rule changes.
- Bug fixes that reveal important project behavior or future maintenance guidance.

## Where To Document

- Update `docs/Project Documentation.md` for application architecture, routing, content, styling, accessibility, testing, assets, and deployment.
- Update `docs/Workflow Orchestration.md` for planning, verification, task-management, and agent execution workflow.
- Create a new focused document in `docs/` when the change introduces a topic that does not belong in an existing document.
- Keep `README.md` as the concise entry point and link to deeper docs when helpful.

## What Not To Document

Do not create noisy documentation for:

- Formatting-only changes.
- Typo-only fixes.
- Generated build output.
- Temporary local debugging steps that do not affect future maintainers.
- Changes that are already fully self-explanatory and have no lasting behavior or workflow impact.

## Quality Bar

Good documentation should be:

- Accurate to the current implementation.
- Short enough to stay maintainable.
- Specific about file paths, commands, and workflows.
- Written for the next person who has to safely change the project.
- Updated in the same work session as the code or rule change.
