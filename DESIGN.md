# Country-finder Design Rules

## Purpose
This file defines the UI and UX rules for Country-finder. Keep it focused on interaction quality, layout consistency, visual decisions, and user feedback. Do not place architecture rules or generic AI behavior rules here.

## Styling Context
- Existing project styling

## UX Rules
- Make the primary workflow obvious without relying on long explanatory text.
- Keep controls predictable: buttons perform actions, inputs collect values, and links navigate.
- Every async workflow must include loading, empty, success, and error states.
- Keep forms short, clearly labeled, and resilient to user mistakes.
- Avoid surprising layout shifts after user interaction.

## Visual Rules
- Match the existing component style before introducing new visual patterns.
- Keep spacing, borders, radii, and typography consistent across repeated panels and forms.
- Use icons only when they improve scanning or clarify a common action.
- Ensure text fits within its container on desktop and mobile.
- Keep contrast strong enough for primary text, controls, status, and disabled states.
- Avoid decorative UI that adds noise without improving comprehension.

## Interaction Rules
- Show immediate feedback after save, copy, commit, delete, generation, or sync actions.
- Disable actions while they are running to prevent duplicate submissions.
- Keep destructive actions visually distinct and easy to cancel.
- Prefer concise labels over long instructional paragraphs.
- Keep primary actions visually obvious and secondary actions quieter.
- Preserve predictable keyboard and focus behavior in forms, dialogs, and menus.

## Content Rules
- Prefer simple, direct copy over clever or vague wording.
- Keep headings descriptive and easy to scan.
- Use consistent labels for repeated actions across the product.
- Error and success messages should tell the user what happened and what to do next.

## Responsive Rules
- Design the mobile layout as a first-class workflow, not a compressed desktop page.
- Lists should remain scannable on small screens.
- Modals, drawers, and preview windows must stay usable within the viewport.
- Prevent horizontal overflow in tables, code previews, and action rows.

## Quality Rules
- Reuse existing UI patterns before inventing new ones.
- Check empty and edge states before shipping any new view.
- Keep this file updated when major interaction or design system rules change.