# SKILLS.md — Technical Skills, Playbooks & Agent Capabilities for DoTA Platform

This document defines the specialized technical competencies, implementation playbooks, code patterns, and execution standards required to engineer, optimize, and maintain the **Department of Technical Arts (DoTA)** portfolio platform. Every human developer and AI coding agent (`Claude Code`, `Google Antigravity`, `OpenAI Codex`) must adhere to these skill specifications.

---

## Skill Matrix Overview

| Skill ID | Domain | Primary Technology | Assigned Agent Owner | Target Components / Systems |
| :--- | :--- | :--- | :--- | :--- |
| **SKILL-01** | **2D Rigid-Body Physics** | `Matter.js` (0.20.0), HTML5 Canvas | OpenAI Codex (`feat/canvas`) | `<KeychainHero />`, `<KeychainFallback />` |
| **SKILL-02** | **Creative WebGL & 3D Shaders** | Three.js, R3F, Drei, Custom GLSL | OpenAI Codex (`feat/canvas`) | `<SceneCanvas />`, `<TactileSticker />`, `<ArtifactPedestal />` |
| **SKILL-03** | **Neo-Brutalist Layout & Typography** | CSS Custom Properties, Tailwind, Geist | Google Antigravity (`feat/ui`) | Hairline grids, 4-corner telemetry, Asymmetric splits, Primitives |
| **SKILL-04** | **Motion Systems & Timeline Choreography** | GSAP 3.12, ScrollTrigger, Lenis | Shared (`feat/ui` & `feat/canvas`) | `<Preloader />`, SplitText hover, Smooth scroll, Capability tickers |
| **SKILL-05** | **Accessibility (A11y) & Contrast Engineering** | WCAG 2.1 AA/AAA, ARIA, axe-core | Google Antigravity (`feat/ui`) | Contrast remediation, Keyboard traps, Screen-reader mirrors |
| **SKILL-06** | **Content Schemas & Static Pipeline** | TypeScript, Zod, MDX, Next.js SSG | Claude Code (`feat/core`) | `src/content/**`, Schema validation, Dynamic OG, JSON-LD |
| **SKILL-07** | **Multi-Agent Orchestration & QA Protocol** | Git Worktrees, Playwright, Lighthouse | Claude Code (`feat/core`) | Conflict-free branching, Merge order, Performance budgeting |

---

## SKILL-01: 2D Rigid-Body Physics & Kinetic Interactivity (`Matter.js`)

### Competency Description
Architecting deterministic, performant 2D rigid-body simulations inside modern reactive web applications without main-thread blocking, layout shift, or mobile scroll hijacking.

### Key Patterns & Implementation Directives

#### 1. Engine & Canvas Lifecycle Management
- Initialize `Matter.Engine`, `Matter.Runner`, and `Matter.Render` inside a dedicated `useEffect` or lifecycle hook.
- Always unbind event listeners, cancel `Matter.Runner`, clear `Matter.World`, and invoke `Matter.Engine.clear()` during component unmount to prevent memory leaks across page transitions.
- Clamp canvas pixel rendering to `window.devicePixelRatio <= 2` to prevent GPU buffer starvation on mobile Retina displays.

```ts
// Clean Physics Lifecycle Hook Pattern
useEffect(() => {
  const engine = Engine.create({ gravity: { x: 0, y: 1.1, scale: 0.001 } });
  const runner = Runner.create();
  Runner.run(runner, engine);

  // Setup bodies, constraints, renderer...

  return () => {
    Runner.stop(runner);
    World.clear(engine.world, false);
    Engine.clear(engine);
  };
}, []);
```

#### 2. Suspended Keychain Constraint Solver (Wildy Riftian Pattern)
- Fixed split-ring anchor pinned at `(centerX, 48px)`.
- 5 chained academic pillar bodies suspended via `Matter.Constraint`:
  - `stiffness: 0.9`
  - `damping: 0.08`
- Shapes: Octagon (`01 Game Arts`), Pill rectangle (`02 Shaders & VFX`), Monogram fob (`03 DoTA '26`), PCB card (`04 Physical Comp`), Circular disc (`05 Audio / Synth`).
- Render custom 2D canvas graphics on each `afterUpdate` tick with crisp `1.5px solid #000000` stroke borders and `4px 4px 0px #000000` hard brutalist shadows.

#### 3. Mobile Touch & Scroll Pass-Through Guardrail
- **Critical Requirement**: Never allow an interactive canvas to prevent standard vertical page scrolling on smartphones (`touch-action: pan-y`).
- Only intercept touch events (`event.preventDefault()`) when the user's finger explicitly collides with a rigid body:
```ts
const handleTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0];
  const mousePos = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
  const hitBodies = Matter.Query.point(interactiveBodies, mousePos);
  if (hitBodies.length > 0) {
    // Interacting with charm: capture pointer for dragging
    event.preventDefault();
  }
  // Otherwise allow native vertical scroll
};
```

#### 4. Offscreen Execution Governor
- Mount an `IntersectionObserver` on the hero container.
- If `entry.isIntersecting === false` (`scrollY > 100vh`), immediately pause `runner.enabled = false`.
- Resume physics when the hero re-enters the viewport.

#### 5. Keyboard & Reduced-Motion Accessibility Parity
- Render an overlaid `<ul className="sr-only focus-within:not-sr-only">` exposing all 5 charms as native focusable `<button>` elements.
- When `prefers-reduced-motion: reduce` is active, bypass Matter.js completely and render `<KeychainFallback />` (an interactive static SVG arrangement).

---

## SKILL-02: Creative WebGL & 3D Shader Engineering (Three.js / R3F)

### Competency Description
Writing declarative, low-poly 3D scene graphs in React Three Fiber (`@react-three/fiber`) and Three.js with custom cel/toon GLSL shaders that strictly adhere to a locked flat-color palette without performance degradation.

### Key Patterns & Implementation Directives

#### 1. Single Canvas Architecture & Context Conservation
- Never instantiate multiple independent `<Canvas>` instances on the same page.
- Use a single shared background/fixed canvas or `@react-three/drei` `<View>` portals to project multiple 3D scenes across different sections.
- Dynamically import all 3D components using `next/dynamic` or Vite lazy imports with `{ ssr: false }`.

#### 2. Strict On-Palette 3-Tone Cel/Toon Shading
- Never use photorealistic PBR HDRI environment maps or rainbow reflections.
- Restrict all 3D lighting and material steps strictly to:
  - **Highlight**: Cream (`#F5F5DC`)
  - **Midtone/Accent**: Teal (`#31C4B8`)
  - **Rim Light**: Red (`#C92D1C`)
  - **Shadow & Inverted Hull Outline**: Black (`#000000`)
- Ambient light `#F5F5DC` intensity `0.8`; Key directional light `#FFFFFF` intensity `1.4` from `(4, 6, 4)`.

```glsl
// Custom 3-Tone Cel Shader Fragment Logic
vec3 celShade(vec3 normal, vec3 lightDir, vec3 viewDir) {
  float NdotL = dot(normal, lightDir);
  vec3 color = uColorBlack; // Shadow
  if (NdotL > 0.6) {
    color = uColorCream; // Highlight
  } else if (NdotL > 0.1) {
    color = uColorTeal;  // Midtone
  }
  // Red Rim Light
  float rim = 1.0 - max(dot(viewDir, normal), 0.0);
  if (rim > 0.8 && NdotL > -0.2) {
    color = uColorRed;
  }
  return color;
}
```

#### 3. Asset Budgets & Draco Optimization
- Maximum triangles per individual badge/mesh: `<= 8,000 tris`.
- Maximum total triangles in any viewport: `<= 35,000 tris`.
- All `.glb` files must be compressed with Draco or Meshopt (`<= 450 KB`).
- Textures must be `.ktx2` or `.webp` at max `1024x1024` resolution (`<= 250 KB`).

#### 4. Adaptive DPR & Performance Degradation Governor
- Clamp Canvas DPR strictly to `dpr={[1, 1.5]}` (never 2.0 or 3.0).
- Integrate `@react-three/drei`'s `<PerformanceMonitor>`:
  - If rolling frame times exceed `22ms` (`< 45fps`), drop DPR to `1.0` and disable anti-aliasing.
  - If device tier is `'low'`, unmount WebGL and render lightweight SVG fallbacks.
- Switch `frameloop` to `"never"` when offscreen via `IntersectionObserver`.

---

## SKILL-03: Swiss Neo-Brutalist Layout & Typography Systems

### Competency Description
Translating strict Swiss modernist typographic grids and Dutch neo-brutalist aesthetics into production CSS and component architectures, prioritizing structural hairlines, high contrast, and asymmetric balance.

### Key Patterns & Implementation Directives

#### 1. Exposed 1px Structural Hairlines & Collapsed Border Grids
- Eliminate generic modern SaaS soft drop-shadows (`box-shadow: 0 10px 25px rgba(...)`) and rounded cards (`border-radius: 16px`).
- Enforce `border-radius: 0px` globally (only filter pills may use `rounded-full`).
- Build structural grids using 1px collapsed borders:
```css
.hairline-grid {
  display: grid;
  gap: 1px;
  background-color: #000000;
  border: 1px solid #000000;
}
.hairline-cell {
  background-color: var(--color-cream);
}
```

#### 2. Dual-Font System: Strict Geist Sans & Geist Mono Rules
- **Geist Sans**: Exclusively for editorial display headlines, manifesto statements, card titles, and body prose.
- **Geist Mono**: Exclusively for bracketed indices (`[01]`), parenthetical tags (`( ARCHIVE )`), coordinates (`17.3850° N`), timestamps (`UTC+5:30`), prices (`₹1,200`), and button triggers (`[ TRANSMIT -> ]`).
- **NEVER** use Geist Mono for multi-sentence paragraphs or H1–H3 headlines.

#### 3. 4-Corner Telemetry Anchoring (Hiroto Sato / Wildy Riftian Pattern)
Every hero frame, project card, and shop card must anchor metadata to its four internal corners (`padding: 16px` mobile / `24px` desktop):
- **Top-Left**: Bracketed index (`[01]` or `[ED-01]`)
- **Top-Right**: Parenthetical category or status badge (`( INTERACTIVE )` or `IN STOCK`)
- **Bottom-Left**: Primary title in Geist Sans
- **Bottom-Right**: Interactive action trigger or price (`VIEW PROJECT ->` or `₹1,200`)

#### 4. Asymmetric Column Splitting (Studio K95 / Nothin' Pattern)
- Prohibit centered body copy across case studies and content pages.
- Divide the 12-column desktop grid into asymmetric **4/8** or **5/7** ratios:
  - Columns 1–4 (or 1–5): Sticky section directory, telemetry, creator metadata, and filters with `border-right: 1px solid #000000`.
  - Columns 5–12 (or 6–12): High-density media grids, interactive inquiry forms, and case study MDX prose.

---

## SKILL-04: Motion Systems & Timeline Choreography (GSAP & Lenis)

### Competency Description
Engineering 60fps cinematic motion choreographies, synchronized smooth scrolling, and micro-interactions with robust memory management, zero layout shift, and instant reduced-motion bypass.

### Key Patterns & Implementation Directives

#### 1. Nothin'-Style Shifting Preloader Buffer
- Duration: 2000ms total master timeline on first session visit.
- `0ms – 1300ms`: Centered DoTA geometric wordmark cycles through 6 procedural visual textures every 180ms (`Solid Cream`, `Teal Wireframe Grid`, `Red Halftone`, `ASCII Matrix`, `Teal/Cream Diagonal`, `Solid Black Box`) while Geist Mono counter interpolates `[000%]` -> `[100%]`.
- `1300ms – 2000ms`: Exponential clip-path expansion (`inset(38% 32% 38% 32%) -> inset(0% 0% 0% 0%)`) with `cubic-bezier(0.87, 0, 0.13, 1)` unveiling the hero canvas and firing `dota:preloader-complete` to release the keychain drop.

#### 2. K95 Duplicated Vertical Split-Text Roll Hover
- Text containers duplicate characters into paired spans:
```html
<span class="split-char-wrapper overflow-hidden inline-block">
  <span class="primary-glyph block transition-transform duration-280">W</span>
  <span class="hover-glyph block transition-transform duration-280 text-red">W</span>
</span>
```
- Hover triggers `translateY(-100%)` with a `14ms` per-character stagger and `cubic-bezier(0.22, 1, 0.36, 1)`.
- Semantic accessibility: Parent container carries `aria-label="Works"`, while child spans carry `aria-hidden="true"`.

#### 3. Lenis Smooth Scroll & GSAP Synchronization
- Initialize Lenis with `lerp: 0.1`, `duration: 1.1`, and `smoothWheel: true`.
- Disable `syncTouch: false` on mobile to preserve native touch momentum.
- Link Lenis scroll ticks to GSAP ticker:
```ts
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
```

#### 4. Cleanup & Memory Safety via `useGSAP`
- Always scope animations to container refs using `@gsap/react`'s `useGSAP()` hook to ensure all `ScrollTrigger` and tween instances are destroyed on route changes.

---

## SKILL-05: High-Contrast Accessible Design (WCAG 2.1 AA/AAA)

### Competency Description
Enforcing mathematical contrast compliance across vibrant brand palettes, building accessible custom interactive controls, and guaranteeing complete keyboard/screen-reader navigability.

### Key Patterns & Implementation Directives

#### 1. Mathematical Contrast Remediation Protocol
- **Cream (#F5F5DC) on Teal (#31C4B8)**: Contrast ratio is **1.95:1** (Severe WCAG failure).
  - **Rule**: Standard body copy, navigation labels, and icons on Teal MUST use Black `#000000` (9.72:1 AAA).
  - If Cream text must sit over Teal, it must be enclosed in a `#000000` pill, or have a 1.5px black text stroke with hard shadow (headlines >= 48px), or use `--color-teal-deep: #135C56` (6.62:1 AA).
- **Red (#C92D1C) on Teal (#31C4B8)**: Contrast is **2.51:1** with chromostereopsis.
  - **Rule**: FORBIDDEN. Always separate with 1px solid `#000000` border or Cream buffer.
- **Black (#000000) on Red (#C92D1C)**: Contrast is **3.88:1**.
  - **Rule**: FORBIDDEN for body text (< 24px). Only Cream text is allowed on Red (4.90:1 AA).

#### 2. Universal Focus Ring Architecture
- Never write `outline: none` without providing an active focus ring.
- Global standard: `outline: 2px solid #000000; outline-offset: 2px; box-shadow: 0 0 0 4px #31C4B8;`.

#### 3. Accessible Slide-Over Dialogs (`<ProductSpecDrawer />`)
- Must set `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.
- Implement keyboard focus trapping (`Tab` cycles within drawer only).
- Close on `Escape` key press and backdrop click. Return focus to triggering product card upon closure.

---

## SKILL-06: In-Repo Content Pipeline, Schemas & Static SSG

### Competency Description
Designing strictly typed, in-repo content models validated via Zod, enabling zero-database static site generation (SSG) with automated linting, MDX compilation, dynamic Open Graph generation, and structured JSON-LD SEO.

### Key Patterns & Implementation Directives

#### 1. Zod Runtime Build Verification (`src/lib/schemas.ts`)
- All content entities (`Project`, `Person`, `Event`, `Product`, `ContactSubmission`) must have matching Zod schemas.
- Provide a CLI validation script (`pnpm content:validate`) that parses every MDX and JSON file at build time:
```ts
export const ProjectSchema = z.object({
  id: z.string().regex(/^\d{2}$/),
  slug: z.string(),
  title: z.string(),
  summary: z.string().max(160),
  category: z.enum(["games", "shaders", "hardware", "motion", "audio"]),
  capabilities: z.tuple([z.string(), z.string(), z.string()]),
  year: z.union([z.literal(2025), z.literal(2026)]),
  featured: z.boolean(),
  coverImage: z.string(),
  creators: z.array(z.string()),
  techStack: z.array(z.string()),
  previewVideo: z.string().optional(),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
});
```

#### 2. Shop Hosted Handoff Integration
- Avoid unmaintainable custom carts or PCI liabilities.
- Products in `src/content/products/index.json` link directly to hosted **Razorpay Payment Pages** (for INR `₹` and UPI) and **Stripe Payment Links** (for USD `$`).

#### 3. Dynamic Open Graph Image Generator (`next/og`)
- Generate `1200x630` social preview PNGs using Satori / `next/og`.
- Render dynamic cards featuring the DoTA brutalist layout, project title, student creators, and live campus coordinates in Geist Sans and Geist Mono.

#### 4. Semantic JSON-LD for AI Search Visibility
- Inject structured data into page `<head>`:
  - `EducationalOrganization` on `/` and `/studio`
  - `CreativeWork` on `/works/[slug]`
  - `Event` on `/events`
  - `Product` on `/shop`

---

## SKILL-07: Multi-Agent Orchestration & Quality Assurance Protocol

### Competency Description
Managing autonomous multi-agent software delivery across distinct branches and Git worktrees without file conflicts, enforcing automated definition of done gates, and managing scope trade-offs.

### Key Patterns & Implementation Directives

#### 1. Git Worktree Partitioning & Non-Overlapping Ownership
- **Claude Code** (`feat/core`): `src/lib/**`, `src/content/**`, `src/app/**/page.tsx`, `package.json`, `e2e/**`
- **Google Antigravity** (`feat/ui`): `src/components/ui/**`, `src/components/sections/**`, `src/styles/**`, `tailwind.config.ts`
- **OpenAI Codex** (`feat/canvas`): `src/components/canvas/**`, `src/lib/performance.ts`
- Communication across boundaries happens strictly through exported TypeScript interfaces in `src/lib/schemas.ts`.

#### 2. Sequential Milestone Merge Order
To avoid merge collisions, branches merge into `main` in strict sequential order:
1. `feat/core` (Scaffolds types, content loaders, and contracts)
2. `feat/ui` (Builds 2D layout primitives and section views)
3. `feat/canvas` (Mounts isolated physics and WebGL layers)
Every merge must pass: `pnpm typecheck && pnpm lint && pnpm content:validate && pnpm build`.

#### 3. Prioritized Scope Shedding Protocol (MVIP)
If schedule slippage occurs prior to the **November 23 Feature Freeze**, drop features in this exact sequence:
- **Drop 1**: 3D Morphing Pedestal in Works header (`ArtifactPedestal.tsx`) -> Replace with static SVG wireframe.
- **Drop 2**: Floating cursor preview thumbnail in Works List View -> Keep row inversion without cursor tracker.
- **Drop 3**: Custom GLSL vertex bend deformation on 3D stickers -> Retain extruded badges and cursor tilt without vertex peel.
- **Drop 4**: Slide-over Shop Spec Drawer -> Have card button link directly to hosted payment page.
- **Core MVIP Retained**: 2.0s Nothin' preloader, Matter.js 5-charm keychain hero, Hiroto Sato 3D badges, No Art 1px Swiss typography, and all 7 routes.
