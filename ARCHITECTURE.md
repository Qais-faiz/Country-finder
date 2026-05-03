# Country-finder Architecture Rules

## Purpose
This file defines the architecture rules for Country-finder. Keep it focused on structure, boundaries, ownership, and technical decision-making. Do not place UI design rules or general AI behavior rules here.

## Detected Stack
### Languages and Frameworks
- Static Website
- JavaScript
- HTML
- CSS

### Package Manager
- No package manager detected yet

### Databases and Services
- No database detected yet

### Testing
- No testing framework detected yet

## System Boundaries
- Keep feature code close to the route, module, or domain that owns it.
- Separate UI rendering, domain logic, and data access into distinct layers.
- Keep data-fetching and persistence logic out of presentational components.
- Route cross-cutting concerns through shared modules only when multiple features genuinely depend on them.
- Preserve existing project structure unless a concrete simplification justifies a change.

## Module Rules
- UI components should not own persistence logic directly.
- API, service, and data-access modules must return typed, predictable shapes.
- Prefer pure helpers for data transformation and keep side effects at the edges of the system.
- Use classes only for connectors and interfaces to external systems. Prefer functions everywhere else.
- Configuration, environment access, and service clients should stay centralized.
- Generated files, build output, and dependency directories must not be edited by hand.

## Change Rules
- Before adding a new abstraction, verify that an existing module does not already own that responsibility.
- Prefer incremental migrations over broad structural moves.
- Never move files between domains or layers without a clear ownership reason.
- Avoid introducing fallback logic that hides real failures.
- Document architectural decisions in this file when they affect multiple modules or teams.

## API and Data Rules
- Validate inputs before domain or persistence logic runs.
- Raise explicit, actionable errors instead of silently swallowing failures.
- Include enough context in external-service errors to debug request params, status codes, and response bodies.
- Keep schema changes, migrations, and persistence changes narrowly scoped and reviewable.

## Maintenance Rules
- Keep modules single-purpose and easy to review.
- Favor explicit types for domain entities, API payloads, and repository responses.
- Remove dead code only when you can confirm it is truly unused.
- Keep this file current as the architecture evolves.