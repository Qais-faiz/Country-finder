# Country-finder Project Rules

> Project: Country-finder
> Project Type: Web App
> Tech Stack: Static Website + JavaScript + HTML + CSS
> AI Tool: Generic AI

---

## AI Behavior Rules

- Always explain your approach before writing code.
- Ask clarifying questions if requirements are unclear.
- Never assume missing context. Ask for clarification.
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

- Prefer functional programming over OOP. Use classes only for connectors and interfaces to external systems.
- Write pure functions whenever possible. Return new values instead of mutating inputs or shared global state.
- Prefer small, reusable functions with a single responsibility.
- Avoid functions longer than 50 lines.
- Make all parameters explicit. Do not rely on default parameter values.
- Keep imports at the top of the file.
- Use clear, descriptive variable and function names.
- Check whether equivalent logic already exists before adding a new helper, module, or abstraction.
- Use strict typing for function returns, variables, and collections.
- Create explicit types for complex data structures instead of relying on loose object shapes.
- Avoid untyped variables and broad generic types such as Any, unknown, or loose dictionary structures.
- Avoid deeply nested logic. Prefer early returns and guard clauses.
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
- Write comments in English only.
- Add comments only for complex logic and non-obvious decisions.
- Keep functions focused on a single responsibility.
- Maintain consistent formatting and naming conventions across the project.
- Document breaking changes when modifying APIs.
- Provide clear explanations for major decisions.

## Error Handling Rules

- Raise errors explicitly. Never silently ignore failures.
- Use specific error types or error categories that clearly identify what went wrong.
- Keep error messages clear and actionable.
- Do not add fallback behavior unless the requirement explicitly asks for it.
- Fix root causes instead of hiding symptoms behind generic recovery logic.
- For external API or service calls, retry with warnings and then raise the last error if the request still fails.
- Include enough debugging context in external request errors, including request params, status codes, and response bodies when available.
- Prefer structured logging fields over interpolating dynamic values directly into message strings.

## Debugging Workflow

- Reproduce the issue before proposing a fix.
- Identify and explain the root cause before writing code.
- Suggest minimal, targeted changes to fix bugs.
- Avoid rewriting working components as part of a bug fix.
- Clearly explain why the bug occurs and how the fix resolves it.
- Verify the fix does not introduce regressions.
