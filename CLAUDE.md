# CLAUDE.md — DoTA Portfolio Multi-Agent Engineering Constitution

## 1. Project Context & Compulsory Reading
This repository contains the official portfolio, archive, events, and merchandise platform for the **Department of Technical Arts (DoTA)**.
- **Hard Launch Deadline**: 30 November 2026 (Feature Freeze: 23 November 2026).
- **Mandatory First Step**: Before planning or editing any file, read `/DESIGN.md` in full. Every color hex, typography scale, border thickness, easing curve, and component state is strictly locked in `/DESIGN.md`. Do not improvise visual styles.

## 2. Tech Stack (Locked)
- **Framework**: Next.js 15 (App Router) / React 19, TypeScript 5.6 (`strict: true`)
- **Styling**: Tailwind CSS v3.4/v4 + CSS Custom Properties (`src/styles/tokens.css`)
- **Fonts**: `geist` package (`GeistSans` and `GeistMono` ONLY)
- **Motion & Scroll**: GSAP 3.12 (`@gsap/react`) + Lenis (`lenis/react`)
- **2D Physics**: `matter-js` (`0.20.0`) for the Home Keychain Hero
- **3D / WebGL**: `three`, `@react-three/fiber`, `@react-three/drei`
- **Content & Validation**: Local MDX/JSON in `src/content/**` validated by `zod` (`src/lib/schemas.ts`)
- **Forms**: Next.js Server Actions + `resend` + `zod`

## 3. Commands
- Install dependencies: `pnpm install`
- Run dev server: `pnpm dev`
- Typecheck (MUST PASS with 0 errors): `pnpm typecheck` (`tsc --noEmit`)
- Lint (MUST PASS with 0 warnings): `pnpm lint`
- Validate content schemas: `pnpm content:validate`
- Production build test: `pnpm build`
- Run E2E / A11y checks: `pnpm test:e2e`

## 4. Multi-Agent Directory Ownership (Conflict Prevention)
Three AI agents operate on this codebase. Respect directory boundaries strictly:
1. **Claude Code (`feat/core-*`)**: Owns `src/lib/**`, `src/content/**`, `src/app/actions/**`, `src/app/api/**`, `src/app/**/page.tsx`, `next.config.ts`, `package.json`.
2. **Google Antigravity (`feat/ui-*`)**: Owns `src/components/ui/**`, `src/components/sections/**`, `src/styles/**`, `tailwind.config.ts`.
3. **OpenAI Codex (`feat/canvas-*`)**: Owns `src/components/canvas/**`, `src/lib/performance.ts`.
- **Rule**: Never modify files outside the assigned ownership zone unless explicitly instructed in the prompt. Communicate cross-boundary requirements via exported TypeScript interfaces in `src/lib/schemas.ts`.

## 5. Non-Negotiable Design & Accessibility Guardrails
1. **Color Contrast Guardrail**:
   - NEVER render unstroked Cream (`#F5F5DC`) text on Teal (`#31C4B8`) backgrounds (1.95:1 WCAG failure). Always use Black (`#000000`) text on Teal (`#31C4B8`) (9.72:1 AAA), or use `--color-teal-deep` (`#135C56`) if Cream text is mandatory.
   - NEVER pair Red (`#C92D1C`) directly on/adjacent to Teal (`#31C4B8`) without a `1px solid #000000` border or Cream (`#F5F5DC`) buffer.
   - NEVER use Black (`#000000`) for body text `< 24px` on Red (`#C92D1C`). Use Cream (`#F5F5DC`) text on Red (`#C92D1C`) (4.90:1 AA).
2. **Typography Guardrail**:
   - Use ONLY `font-sans` (`Geist Sans`) and `font-mono` (`Geist Mono`).
   - All bracketed indices (`[01]`), parenthetical section tags (`( ARCHIVE )`), coordinates, timestamps, prices, and filter counts MUST use `Geist Mono` uppercase.
3. **Brutalist Grid Guardrail**:
   - Use `border-radius: 0px` on all cards, inputs, drawers, and containers (only filter pills may use `rounded-full`).
   - Use `1px solid #000000` structural borders and hard offset shadows (`4px 4px 0px #000000`). Never use soft blurred shadows (`shadow-lg`, `shadow-xl`).
4. **Performance & Motion Guardrail**:
   - Every component in `src/components/canvas/**` must be dynamically imported (`next/dynamic` with `{ ssr: false }`) and wrapped in an `IntersectionObserver` that pauses the `requestAnimationFrame` / physics loop when scrolled out of view.
   - Respect `prefers-reduced-motion: reduce` in every GSAP timeline, Lenis instance, and physics/3D component.

## 6. Code Conventions
- Use named exports for all components (`export function ProjectCard(...)`).
- No `any` types. Import shared data models from `@/lib/schemas`.
- Use GSAP exclusively via the `useGSAP()` hook from `@gsap/react` with a scoped `container` ref so animations clean up on route changes.
- Keep component files under `250 lines`; extract helper hooks or sub-components if a file grows larger.

## 7. Definition of Done (Per Stage)
A task is ONLY complete when:
1. All acceptance criteria in the stage prompt are satisfied.
2. `pnpm typecheck` and `pnpm build` succeed with 0 errors.
3. Keyboard navigation (`Tab`, `Enter`, `Escape`) and `:focus-visible` states work on every interactive element created.
4. Both mobile (`375px` width) and desktop (`1440px` width) layouts render without horizontal overflow (`overflow-x: hidden` leaks).
5. `BACKLOG.md` is updated to mark the completed stage `[x]`.
