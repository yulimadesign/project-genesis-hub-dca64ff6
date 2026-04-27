# Workflow Orchestration

This document describes the preferred execution workflow for project work in this repository. Use it as an operating guide for planning, implementation, verification, and continuous improvement.

## 1. Planning Defaults

- Enter planning mode for non-trivial tasks, especially tasks with three or more steps, unclear requirements, or architectural decisions.
- If implementation reveals a wrong assumption, stop and re-plan before continuing.
- Include verification steps in the plan, not only implementation tasks.
- Write enough specification up front to reduce ambiguity before touching code.

## 2. Subagent Strategy

- Use subagents when parallel exploration or isolated research will reduce main-context noise.
- Assign one focused track per subagent so outputs are easier to evaluate and merge.
- Offload bounded research, codebase exploration, or verification tasks when they can run in parallel with the main work.
- Keep implementation ownership clear when multiple agents may edit files.

## 3. Self-Improvement Loop

- After user corrections, capture the pattern in `tasks/lessons.md` when that file exists or when the project creates one.
- Write lessons as reusable rules that prevent the same mistake in future work.
- Review relevant lessons at session start before beginning similar work.
- Iterate on lessons when the same failure mode appears more than once.

## 4. Verification Before Done

- Do not mark work complete without evidence that it behaves as intended.
- Run the narrowest useful verification first, then broaden when the change affects shared behavior.
- Compare behavior before and after changes when regression risk is meaningful.
- Ask whether the result would pass a senior engineering review for correctness, maintainability, and scope control.

## 5. Balanced Elegance

- For non-trivial changes, pause before finalizing and ask whether a simpler, clearer solution exists.
- If an implementation feels brittle, rework toward the cleanest solution supported by the current context.
- Skip extra abstraction for simple, obvious fixes.
- Challenge the finished work before presenting it.

## 6. Autonomous Bug Fixing

- When given a bug report, reproduce or identify the failure source before editing.
- Use logs, errors, failing tests, or visible behavior to guide the fix.
- Resolve root causes instead of adding temporary patches.
- Fix failing CI or local checks without requiring the user to prescribe each step.

## Task Management

1. Write a checkable plan in `tasks/todo.md` for larger efforts when that task-tracking workflow is active.
2. Confirm the plan before implementation when the work has meaningful ambiguity or product tradeoffs.
3. Track progress by marking items complete as work finishes.
4. Explain changes at a high level as implementation proceeds.
5. Add a result or review section to `tasks/todo.md` when the plan file is used.
6. Capture relevant lessons in `tasks/lessons.md` after corrections.

## Documentation Requirement

- Document every meaningful project change in the `docs/` folder before marking work complete.
- Update existing documentation when the changed behavior, workflow, or architecture is already covered.
- Create a focused new document only when the change introduces a durable topic that does not fit an existing document.
- Follow `docs/Documentation Policy.md` for scope, placement, and quality expectations.

## Core Principles

- **Simplicity first:** make changes as small and clear as the problem allows.
- **Root cause over patches:** investigate failures deeply enough to fix the underlying issue.
- **Minimal impact:** touch only the files needed for the task and avoid unrelated refactors.
- **Verification matters:** use tests, builds, linting, screenshots, or manual checks to prove the work.
