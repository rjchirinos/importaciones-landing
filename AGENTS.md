<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:ui-rules -->
# UI & Styling Conventions

- Respect Next.js conventions (RSC by default, `'use client'` only when needed, proper data fetching, server actions, layout/page hierarchy) for code quality and performance.
- Use **Tailwind CSS** for all styling. Avoid CSS modules, styled-components, or other CSS-in-JS solutions.
- Prefer **shadcn/ui** components over building custom ones. Before creating any UI component, check if shadcn has a suitable one.
- If a shadcn component is needed but not installed, **ask the user for permission** before running `npx shadcn@latest add <component>`.
<!-- END:ui-rules -->
