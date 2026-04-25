# Country-finder Architecture

## Purpose
This file describes the technical architecture for Country-finder. Keep this file focused on structure, boundaries, and engineering decisions. Do not place UI design rules or AI behavior rules here.

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

## Architecture Principles
- Keep feature code close to the route, module, or domain that owns it.
- Put shared utilities in small, named modules only when at least two features need them.
- Keep data access, API calls, and UI rendering separated so changes stay easy to review.
- Preserve existing project structure unless a change clearly reduces complexity.
- Avoid broad rewrites when a focused module-level change solves the problem.

## Module Boundaries
- UI components should not own persistence logic directly.
- API and data-access modules should return typed, predictable data shapes.
- Configuration and environment access should stay centralized.
- Generated files, build output, and dependency directories should not be edited by hand.

## Change Guidance
- Before adding a new abstraction, check whether an existing module already owns that responsibility.
- Prefer incremental migrations over large structural moves.
- Document new architectural decisions in this file when they affect multiple modules.