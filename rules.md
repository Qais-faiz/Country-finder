# Country-finder Project Rules

> Project: Country-finder
> Project Type: Web App
> Tech Stack: Static Website + JavaScript + HTML + CSS
> AI Tool: Generic AI

---

## AI Behavior Rules

- Always explain your approach before writing code.
- Ask clarifying questions if requirements are unclear.
- Never assume missing context — ask for clarification.
- Prefer small, incremental changes instead of large rewrites.
- Modify only files that are directly related to the task.
- Never introduce new dependencies without explaining why.
- Avoid rewriting entire modules unless explicitly requested.
- Respect existing project architecture.
- Always consider backward compatibility when making changes.
- If a change may break existing functionality, warn before implementing.

## Architecture Guardrails

- Never change the project folder structure unless explicitly instructed.
- Follow existing architecture patterns used in the project.
- Do not introduce new architectural patterns without approval.
- Maintain clear separation between UI, business logic, and data layers.
- Avoid large structural refactors in a single response.
- Never move files between directories without explicit permission.
- Respect module boundaries and dependency directions.

## Coding Standards

- Prefer small, reusable functions with a single responsibility.
- Avoid functions longer than 50 lines.
- Use clear, descriptive variable and function names.
- Avoid deeply nested logic — prefer early returns and guard clauses.
- Write readable, self-documenting code.
- Keep files focused on one responsibility.
- Prefer composition over inheritance.
- Follow consistent naming conventions throughout the codebase.

## Protected Areas

- NEVER modify environment configuration and .env files without explicit approval and review.
- NEVER modify API keys, secrets, and third-party credentials without explicit approval and review.
- Always warn before making changes to any protected area.
- Document the exact reason and scope when modifying protected code.

## Refactoring Rules

- Do not refactor code unrelated to the current task.
- Limit refactoring to the files directly involved in the task.
- Explain the refactoring strategy before applying changes.
- Preserve existing public APIs unless explicitly asked to change them.
- Avoid large refactoring changes in a single step.
- Never rename widely-used functions or variables without discussing impact.

## Collaboration Rules

- Write code that is easy for other developers to understand.
- Add comments only for complex logic and non-obvious decisions.
- Keep functions focused on a single responsibility.
- Maintain consistent formatting and naming conventions across the project.
- Document breaking changes when modifying APIs.
- Provide clear explanations for major decisions.

## Debugging Workflow

- Reproduce the issue before proposing a fix.
- Identify and explain the root cause before writing code.
- Suggest minimal, targeted changes to fix bugs.
- Avoid rewriting working components as part of a bug fix.
- Clearly explain why the bug occurs and how the fix resolves it.
- Verify the fix does not introduce regressions.
