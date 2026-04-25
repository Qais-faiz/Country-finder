# Country-finder Design

## Purpose
This file describes UI and UX guidance for Country-finder. Keep this file focused on product experience, layout, visual consistency, and interaction quality. Do not place architecture rules or AI behavior rules here.

## Styling Context
- Existing project styling

## UX Principles
- Make the primary user workflow visible without requiring explanation text.
- Keep controls predictable: buttons perform actions, inputs collect values, and links navigate.
- Use loading, empty, success, and error states for every async workflow.
- Keep forms short, clearly labeled, and forgiving of user mistakes.
- Avoid surprising layout shifts after user interaction.

## UI Principles
- Match the existing component style before introducing new visual patterns.
- Keep spacing consistent across repeated lists, panels, and forms.
- Use icons for common actions when they improve scanning.
- Ensure text fits within its container on desktop and mobile.
- Keep contrast strong enough for primary text, controls, and status messages.

## Interaction Guidance
- Show immediate feedback after save, copy, commit, delete, or generation actions.
- Disable actions while they are running to prevent duplicate submissions.
- Keep destructive actions visually distinct and easy to cancel.
- Prefer concise interface labels over instructional paragraphs.

## Responsive Guidance
- Design the mobile layout as a first-class workflow, not a compressed desktop page.
- Lists should remain scannable on small screens.
- Modals and preview windows should stay usable within the viewport.