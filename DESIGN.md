# DESIGN.md — Department of Technical Arts (DoTA) Design System & UI Specification

## 1. Overview & Visual Personality

The Department of Technical Arts (DoTA) website operates as an avant-garde creative technology studio and living archive, explicitly rejecting generic academic templates. Its visual personality synthesizes Swiss-typographic grid rigor (exposed 1px structural hairlines, bracketed monospace indices, corner-pinned telemetry) with tactile, physics-driven playfulness (draggable 2D rigid-body charms and raycasted 3D WebGL artifacts). High-contrast flat surfaces in Cream (`#F5F5DC`), Black (`#000000`), Teal (`#31C4B8`), and Red (`#C92D1C`) frame student work so that motion, shaders, and interactive prototypes carry the emotional weight. Every animation and 3D interaction is deterministic, purposeful, and accessible.

---

## 2. Colour Tokens, Contrast Rules & Usage Ratios

### 2.1 Core Brand & Functional Tokens

| Token Name | CSS Custom Property | Hex Value | RGB | Role & Usage Rules |
| :--- | :--- | :--- | :--- | :--- |
| **Cream (Canvas)** | `--color-cream` | `#F5F5DC` | `245, 245, 220` | Primary background surface (60%–65% of viewport area); light text on Red or Black surfaces. |
| **Black (Ink)** | `--color-black` | `#000000` | `0, 0, 0` | Primary typography, 1px structural borders, dark-mode/preloader surface (20%–25% of area). |
| **Teal (Signal)** | `--color-teal` | `#31C4B8` | `49, 196, 184` | Secondary interactive accent, 3D mesh key light/material, hover highlights, badge fills (10% of area). |
| **Red (Alert/CTA)** | `--color-red` | `#C92D1C` | `201, 45, 28` | High-priority primary CTA background, active filter states, featured badges, error states (5% of area). |
| **Teal Deep (A11y)** | `--color-teal-deep` | `#135C56` | `19, 92, 86` | Derived dark-teal surface used ONLY when unstroked Cream text (`#F5F5DC`) must sit on a teal background (6.62:1 AA). |
| **Black Muted** | `--color-ink-muted` | `#4A4A42` | `74, 74, 66` | Secondary body copy and muted captions on `--color-cream` (8.45:1 AAA contrast). |
| **Border Hairline** | `--color-border` | `#000000` | `0, 0, 0` | Primary brutalist exposed grid border (1px solid `#000000`). |
| **Border Subtle** | `--color-border-subtle` | `rgba(0,0,0,0.16)` | `0, 0, 0, 0.16` | Internal table/list dividers on `--color-cream`. |

### 2.2 Allowed Pairings (WCAG 2.1 Verified)

1. `--color-black` text on `--color-cream` background -> **18.98:1 (AAA)** — Default reading experience.
2. `--color-cream` text on `--color-black` background -> **18.98:1 (AAA)** — Preloader, footer, dark showcase blocks.
3. `--color-black` text on `--color-teal` background -> **9.72:1 (AAA)** — Mandatory text color on standard Teal surfaces.
4. `--color-cream` text on `--color-red` background -> **4.90:1 (AA)** — Primary CTA buttons, alert pills, featured banners.
5. `--color-red` text on `--color-cream` background -> **4.90:1 (AA)** — Bracketed index highlights `[01]`, active links, form errors.
6. `--color-teal` text on `--color-black` background -> **9.72:1 (AAA)** — Terminal telemetry, 3D HUD overlays on dark sections.
7. `--color-cream` text on `--color-teal-deep` background -> **6.62:1 (AA)** — Approved when light text on a teal hue is required.

### 2.3 Forbidden Pairings (CRITICAL AGENT GUARDRAILS)

- **FORBIDDEN**: Unstroked `--color-cream` (`#F5F5DC`) text directly on `--color-teal` (`#31C4B8`). Contrast is **1.95:1** (fails all WCAG levels). If Cream must appear over `--color-teal`, encapsulate it inside a `--color-black` pill or apply `-webkit-text-stroke: 1.5px #000000; text-shadow: 4px 4px 0px #000000;` on display type >= 48px.
- **FORBIDDEN**: `--color-red` (`#C92D1C`) text or icons directly on `--color-teal` (`#31C4B8`) or vice versa. Contrast is **2.51:1** and causes severe chromostereopsis.
- **FORBIDDEN**: `--color-black` (`#000000`) body text (< 24px) on `--color-red` (`#C92D1C`). Contrast is **3.88:1** (permitted only for large display type >= 24px or 1px borders).

---

## 3. Typography System (Geist Sans & Geist Mono Only)

Only two font families are permitted across the entire application, loaded via `next/font/local` or the `geist` npm package (`GeistSans` and `GeistMono`).

### 3.1 Font Roles

- **Primary (`--font-sans: Geist Sans`)**: Display headlines, manifesto statements, project titles, long-form case study copy, primary navigation drawers.
- **Secondary (`--font-mono: Geist Mono`)**: Bracketed indices (`[01]`), parenthetical section labels (`( THE ARCHIVE )`), top/bottom nav links, metadata tables, timestamps, coordinates, prices (`₹` / `$`), filter counters (`All (24)`), tags, and button labels.
- **Where Geist Mono is NEVER used**: Multi-sentence paragraphs, project descriptions longer than 2 lines, or H1–H3 headlines.

### 3.2 Fluid Type Scale & Specifications

| Scale Token | Element / Role | Font Family | Fluid Size (`clamp()`) | Line Height | Weight | Tracking (letter-spacing) | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-display-xl` | Hero / Preloader Wordmark | Geist Sans | `clamp(3.5rem, 9vw, 8.5rem)` (56px–136px) | 0.90 | 700 (Bold) | `-0.04em` | Uppercase |
| `--text-display-lg` | Page H1 / Manifesto Lead | Geist Sans | `clamp(2.5rem, 5.5vw, 5.25rem)` (40px–84px) | 0.94 | 600 (SemiBold) | `-0.035em` | Sentence / Upper |
| `--text-h2` | Section Header (H2) | Geist Sans | `clamp(1.75rem, 3.2vw, 3.25rem)` (28px–52px) | 1.05 | 600 (SemiBold) | `-0.025em` | Sentence |
| `--text-h3` | Project / Card Title (H3) | Geist Sans | `clamp(1.25rem, 2vw, 1.75rem)` (20px–28px) | 1.15 | 500 (Medium) | `-0.015em` | Sentence |
| `--text-body-lg` | Lead Paragraph / Intro | Geist Sans | `clamp(1.125rem, 1.4vw, 1.375rem)` (18px–22px) | 1.45 | 400 (Regular) | `-0.01em` | Sentence |
| `--text-body` | Standard Body Copy | Geist Sans | `1rem` (16px) | 1.60 | 400 (Regular) | `0em` | Sentence |
| `--text-mono-md` | Nav Links / Buttons / Prices | Geist Mono | `0.875rem` (14px) | 1.20 | 500 (Medium) | `+0.04em` | Uppercase |
| `--text-mono-sm` | Indices `[01]` / Telemetry / Tags | Geist Mono | `0.75rem` (12px) | 1.30 | 400 (Regular) | `+0.06em` | Uppercase |
| `--text-mono-xs` | Micro Counters / Coordinates | Geist Mono | `0.6875rem` (11px) | 1.20 | 400 (Regular) | `+0.08em` | Uppercase |

---

## 4. Spacing, Grid & Layout System

### 4.1 Base Unit & Spacing Scale

Base unit = `8px` (`0.5rem`). Half-unit `4px` (`0.25rem`) is restricted to tag/badge internals.

- `--space-1`: `4px` (`0.25rem`)
- `--space-2`: `8px` (`0.5rem`)
- `--space-3`: `12px` (`0.75rem`)
- `--space-4`: `16px` (`1rem`)
- `--space-6`: `24px` (`1.5rem`)
- `--space-8`: `32px` (`2rem`)
- `--space-12`: `48px` (`3rem`)
- `--space-16`: `64px` (`4rem`)
- `--space-24`: `96px` (`6rem`)
- `--space-32`: `128px` (`8rem`)

### 4.2 Responsive Breakpoints & Grid Columns

| Breakpoint Token | Viewport Range | Columns | Outer Margin | Gutter | Max Container Width |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `sm` (Mobile) | 0px – 639px | 4 | 16px | 12px | 100% |
| `md` (Tablet) | 640px – 1023px | 8 | 24px | 16px | 100% |
| `lg` (Desktop) | 1024px – 1439px | 12 | 32px | 24px | 1440px |
| `xl` (Studio Wide) | >= 1440px | 12 | `clamp(32px, 4vw, 64px)` | 24px | 1600px |

### 4.3 Placement & Section Rhythm Rules

1. **Exposed Structural Hairlines**: Major sections are separated by full-bleed 1px solid `#000000` horizontal borders. Grid cells inside the Shop and Works Archive use 1px solid `#000000` collapsed borders (`gap: 1px; background-color: #000000;` where child cells have `background-color: #F5F5DC`).
2. **Asymmetric 4/8 and 5/7 Splits**: On `lg` and `xl` viewports, section headers and sticky sidebars occupy Columns 1–4 (or 1–5), while primary interactive content, grids, and forms occupy Columns 5–12 (or 6–12).
3. **4-Corner Telemetry Anchoring**: Inside hero viewports, project cards, and shop cards, pin metadata to the 4 corners using `padding: 16px` (`24px` on `lg`):
   - **Top-Left**: `[01]` or `[ED-01]` (`--text-mono-sm`)
   - **Top-Right**: `( CATEGORY )` or stock badge (`--text-mono-sm`)
   - **Bottom-Left**: Item Title (`--text-h3`)
   - **Bottom-Right**: Action arrow `->` or Price (`--text-mono-md`)

---

## 5. Component Specifications & State Matrix

### 5.1 Global Top Navigation Bar (`<Navbar />`)

- **Structure**: Fixed top bar (height: `56px`, z-index: `50`), full-bleed width, `background: rgba(245, 245, 220, 0.88)`, `backdrop-filter: blur(12px)`, bottom border `1px solid #000000`.
- **Layout**: 3-zone flex/grid aligned to main container margins:
  - **Left**: DoTA geometric mark + live telemetry (`HYD / 17.3850° N` in `--text-mono-xs`, hidden on `< 768px`).
  - **Center**: Horizontal links (`WORKS [24]`, `EVENTS [04]`, `SHOP [08]`, `STUDIO`, `CONTACT`) in `--text-mono-sm`.
  - **Right**: Primary CTA pill (`CONTACT ->`) + Audio/Reduced-Motion toggle button (`[FX: ON]`).
- **States**:
  - `default`: Text `#000000`, transparent background.
  - `hover`: K95-style vertical split-character translation (`translateY(-100%)` over `280ms cubic-bezier(0.22, 1, 0.36, 1)`) revealing a duplicate text layer in `--color-red` (`#C92D1C`).
  - `focus-visible`: `2px solid #000000` outline with `2px` offset and `--color-teal` (`#31C4B8`) background fill.
  - `active` (current route): Preceded by a `6px x 6px` solid `--color-red` square indicator.
  - `disabled`: `opacity: 0.4`, `pointer-events: none`.

### 5.2 Buttons (`<Button />`)

- **Geometry**: Height `44px` (standard) / `52px` (large CTA), horizontal padding `20px`, `border-radius: 0px` (sharp brutalist rectangle) or `9999px` (pill variant for filters), border `1px solid #000000`, font `--text-mono-md`.
- **Variants & States**:
  - **Primary (`variant="primary"`)**:
    - `default`: Background `--color-red` (`#C92D1C`), text `--color-cream` (`#F5F5DC`), border `1px solid #000000`, shadow `4px 4px 0px #000000`.
    - `hover`: Background `--color-black` (`#000000`), text `--color-cream` (`#F5F5DC`), transform `translate(-2px, -2px)`, shadow `6px 6px 0px #31C4B8`.
    - `focus-visible`: `2px solid #000000` outline, offset `3px`.
    - `active`: Transform `translate(2px, 2px)`, shadow `0px 0px 0px #000000`.
    - `disabled`: Background `#E2E2CE`, text `#7A7A6E`, border `1px solid #7A7A6E`, shadow none, `cursor: not-allowed`.
  - **Secondary (`variant="secondary"`)**:
    - `default`: Background `--color-cream` (`#F5F5DC`), text `--color-black` (`#000000`), border `1px solid #000000`, shadow `3px 3px 0px #000000`.
    - `hover`: Background `--color-teal` (`#31C4B8`), text `--color-black` (`#000000`), transform `translate(-2px, -2px)`, shadow `5px 5px 0px #000000`.
    - `active`: Transform `translate(2px, 2px)`, shadow none.

### 5.3 Project Card (`<ProjectCard />` — Wildy Riftian Pattern)

- **Structure**: Folder-tabbed container with `1px solid #000000` border on `--color-cream`. Top header strip (height: `36px`, border-bottom `1px solid #000000`, padding `0 16px`) displays `[01]` on the left and production year `2026` on the right in `--text-mono-sm`.
- **Media Area**: `16:10` aspect ratio container, `overflow: hidden`, background `#000000`.
- **Capability Ticker**: Below the image, a `32px` high strip (border-top `1px solid #000000`, border-bottom `1px solid #000000`, background `--color-cream`) repeats the project's 3 tags (e.g., `SHADER ART • PHYSICAL COMPUTING • UNREAL 5 •`) in `--text-mono-xs`.
- **States**:
  - `default`: Static poster image (`scale(1.0)`), ticker static, bottom bar background `--color-cream`, text `--color-black`.
  - `hover`: Poster image scales to `1.04` (`450ms cubic-bezier(0.16, 1, 0.3, 1)`) and plays muted `.mp4` preview loop; capability ticker scrolls horizontally at `40px/s` with background shifting to `--color-teal` (`#31C4B8`) and text `--color-black`; bottom action arrow `VIEW PROJECT ->` shifts `4px` right.
  - `focus-visible`: Full card `3px solid #C92D1C` outline.
  - `active`: Card scales to `0.995` over `100ms`.

### 5.4 Shop Product Card (`<ProductCard />` — Emergence Projects Pattern)

- **Structure**: Cell within a collapsed `1px solid #000000` grid (aspect-ratio: `4 / 5` media box + `72px` metadata footer).
- **Overlays**: Top-left badge `[ED-01]` (`--text-mono-xs`, padding: `4px 8px`, background `--color-cream`, border `1px solid #000000`). Top-right status pill (`IN STOCK` in `--color-teal` with `#000000` text, or `SOLD OUT` in `--color-red` with `#F5F5DC` text).
- **States**:
  - `default`: Displays primary flat-lay image (`object-fit: cover`), footer shows Product Title (`--text-h3`, 18px) on left and Price (`₹1,200` in `--text-mono-md`) on right.
  - `hover`: Secondary worn/detail image cross-fades in (`opacity: 0 -> 1`, `350ms cubic-bezier(0.22, 1, 0.36, 1)`) with `scale(1.03)`; footer background transitions to `--color-black` (`#000000`) with text inverting to `--color-cream` (`#F5F5DC`) and right side swapping price for `[ ACQUIRE -> ]`.
  - `focus-visible`: `3px solid #31C4B8` inset outline.
  - `disabled` (`SOLD OUT`): Image filter: `grayscale(100%) contrast(0.85)`, hover cross-fade still functions for archive inspection, but CTA reads `[ ARCHIVED ]` with `pointer-events: none` on checkout link.

### 5.5 Tag / Filter Pill (`<Tag />`)

- **Geometry**: height `32px`, padding `0 12px`, border `1px solid #000000`, `border-radius: 9999px`, font `--text-mono-sm`.
- **States**:
  - `default`: Background `--color-cream`, text `--color-black`.
  - `hover`: Background `--color-teal`, text `--color-black`.
  - `active` (Selected): Background `--color-black`, text `--color-cream` (or `--color-red` background with `--color-cream` text for primary category).
  - `focus-visible`: `2px solid #C92D1C` outline, offset `2px`.
  - `disabled`: `opacity: 0.35`.

### 5.6 Form Fields (`<Input />`, `<Textarea />`, `<ChipSelect />` — K95 Pattern)

- **Text Inputs**: Borderless top/left/right; bottom border only `1px solid #000000` (`border-radius: 0`), height `52px`, padding `12px 0`, background: transparent, font `--text-body-lg` (Geist Sans 18px, color `#000000`). Floating or top-pinned label in `--text-mono-xs` (`[01 / YOUR NAME *]`).
- **States**:
  - `default`: Bottom border `1px solid #000000`, placeholder `rgba(0,0,0,0.40)`.
  - `hover`: Bottom border `2px solid #000000`.
  - `focus`: Bottom border `2px solid #31C4B8`, background `rgba(49, 196, 184, 0.08)`, `outline: none`.
  - `error`: Bottom border `2px solid #C92D1C`, error helper message below in `--text-mono-xs` color `--color-red` (4.90:1 AA contrast).
  - `disabled`: Bottom border `1px dashed rgba(0,0,0,0.3)`, `opacity: 0.5`.

### 5.7 Global Footer (`<Footer />`)

- **Structure**: Full-bleed `--color-black` (`#000000`) background, text `--color-cream` (`#F5F5DC`), top border `1px solid #000000`, padding `64px 0 32px`.
- **Layout**:
  - **Top Row (12 cols)**: Cols 1–6 department mission statement + live local IST clock (`HYDERABAD / UTC+5:30`); Cols 7–9 sitemap index (`[01] WORKS` to `[05] CONTACT`); Cols 10–12 external links (`GITHUB`, `INSTAGRAM`, `ARENA`, `YOUTUBE`).
  - **Bottom Row**: Giant edge-to-edge DoTA wordmark (`--text-display-xl`, width: 100%, color `--color-cream`, hover reveals `--color-teal` shader/wireframe fill) + copyright bar (`© 2026 DEPARTMENT OF TECHNICAL ARTS`).

---

## 6. Page-Section Specifications (Adapted Reference Patterns)

### 6.1 Loader / Buffer Animation (`<Preloader />` — Adapted from noth.in)

- **Trigger Rule**: Runs once per browser session (`sessionStorage.getItem('dota_preloader_seen')`). If already seen or if `prefers-reduced-motion: reduce` is active, skip immediately (0ms).
- **Sequence & Timing (2000ms total)**:
  1. **Viewport Lock (0ms)**: Fixed overlay (`inset: 0`, `z-index: 9999`, `background: #000000`). Corner telemetry shows `( INITIALIZING ARCHIVE )` top-left and numeric counter `[000%]` bottom-right in `--text-mono-md` (`--color-cream`).
  2. **Shifting Wordmark Cycle (0ms – 1300ms)**: Centered DoTA SVG wordmark (`clamp(4rem, 12vw, 10rem)`) cycles through 6 distinct visual masks/textures every `180ms` (01: Solid Cream, 02: Teal Wireframe Grid, 03: Red Halftone Dots, 04: ASCII Pixel Matrix, 05: Teal/Cream Diagonal Stripe, 06: Solid Black on Cream Box). Counter interpolates from 000 to 100 using `gsap.to()` with `power2.inOut`.
  3. **Runway Clip-Path Reveal (1300ms – 2000ms)**: The central box expands to full viewport via `clip-path: inset(38% 32% 38% 32%) -> clip-path: inset(0% 0% 0% 0%)` over `700ms` with easing `cubic-bezier(0.87, 0, 0.13, 1)` (`expo.inOut`), unveiling the live Home Hero underneath and triggering the keychain physics drop.

### 6.2 Interactive Keychain Hero (`<KeychainHero />` — Adapted from wildyriftian.com)

- **Layout**: `min-height: calc(100dvh - 56px)`, 12-column grid on `--color-cream` (`#F5F5DC`) with exposed 1px perimeter frame.
- **Physics Canvas (Matter.js 2D Rigid-Body Engine)**:
  - Mounted in an interactive `<canvas>` spanning the central 8 columns (or full hero bounds with pointer pass-through on text).
  - A fixed metallic/brutalist split-ring anchor is pinned at (`50% X`, `48px Y`).
  - **5 Interactive Charms** hang from the ring via `Matter.Constraint` links (`stiffness: 0.9`, `damping: 0.08`):
    1. **Charm 01 (`[GAME ARTS]`)**: Teal `#31C4B8` octagonal badge (`110px x 110px`) with `#000000` border and icon.
    2. **Charm 02 (`[SHADERS & VFX]`)**: Red `#C92D1C` pill tag (`140px x 64px`) with `#F5F5DC` typography.
    3. **Charm 03 (`[DoTA '26]`)**: Black `#000000` monogram fob (`96px x 120px`) with `#F5F5DC` wireframe mark.
    4. **Charm 04 (`[PHYSICAL COMP]`)**: Cream `#F5F5DC` PCB-shaped card (`120px x 90px`) with `#000000` traces.
    5. **Charm 05 (`[AUDIO / SYNTH]`)**: Teal `#31C4B8` circular disc (`100px` diameter) with `#000000` waveform ring.
- **Interaction**: Users can grab and fling any charm with mouse or touch (`Matter.MouseConstraint`). Double-clicking a discipline charm filters and smooth-scrolls to that category in the Featured Works section. On mobile (`< 768px`), scale charm dimensions by `0.72` and allow vertical page scrolling outside charm hit-boxes (`touch-action: pan-y`).

### 6.3 3D Element Usage (`<SceneCanvas />` — Adapted from hirotos.com)

- **Architecture**: A single shared `<Canvas>` (React Three Fiber) or scoped `<View>` portals to prevent WebGL context exhaustion.
- **What is Rendered**:
  1. **Tactile Department Sticker/Badge Array (Home / Studio transition)**: 3D extruded low-poly department badges (`<= 8,000` triangles per mesh) that tilt toward the raycasted cursor position (`gsap.quickTo` rotation x/y max `±0.35 rad`, damping `0.15`) and deform with a subtle vertex wave when clicked/flicked.
  2. **Interactive Artifact Pedestal (Works Header)**: A rotating low-poly topological mesh that morphs material state (`Wireframe Teal #31C4B8` -> `Matte Clay Cream #F5F5DC` -> `Halftone Red #C92D1C`) as the user switches work categories (01–05).
- **Scroll Integration**: Lenis scroll velocity (`velocity`) feeds into a uniform `uScrollVelocity` that temporarily increases mesh rotation speed and axial tilt, settling back to idle (`0.2 rad/s`) via spring damping when scroll stops.

### 6.4 Works Page (`<WorksArchive />` — Adapted from wildyriftian.com & k95.it)

- **Top Control Bar**: Sticky below Navbar (top: `56px`, z-index: `40`, background `--color-cream`, border-bottom `1px solid #000000`). Left side displays folder-tab category switches: `ALL (24)`, `01. INTERACTIVE & GAMES (08)`, `02. 3D & SHADERS (06)`, `03. HARDWARE & IOT (04)`, `04. MOTION & FILM (04)`, `05. GENERATIVE AUDIO (02)`. Right side displays K95-style view mode toggle: `[ GRID / LIST ]`.
- **Grid View**: 2 columns on `md`, 3 columns on `lg/xl`, separated by `24px` gutters, using `<ProjectCard />` with folder tabs and capability tickers.
- **List View**: Full-width collapsed `1px solid #000000` rows (height: `72px`). Columns: `[Index 01]` (Col 1) | `Project Title` (Cols 2–5) | `Student Creator(s)` (Cols 6–8) | `Category Tag` (Cols 9–11) | `Year ->` (Col 12). Hovering a row inverts background to `--color-black` (`#000000`), text to `--color-cream`, and spawns a floating `320px x 200px` preview thumbnail tracking the cursor (`gsap.quickTo` x/y at `180ms` lag).

### 6.5 Shop Grid (`<ShopSection />` — Adapted from emergenceprojects.com)

- **Layout**: Full-width container with collapsed `1px solid #000000` borders (`grid-template-columns: repeat(1, 1fr)` on `sm`, `repeat(2, 1fr)` on `md`, `repeat(3, 1fr)` on `lg`, `repeat(4, 1fr)` on `xl`).
- **Header Block**: Asymmetric 4/8 split above the grid: Cols 1–4 show `[ SHOP / EDITIONS ]` and edition release telemetry (`BATCH 01 // AUTUMN 2026`); Cols 5–12 display a Geist Sans H1 (`Student-Designed Hardware Kits, Zines & Apparel`).
- **Interaction**: Clicking any `<ProductCard />` opens a slide-over Spec Drawer (width: `min(480px, 100vw)`, right-aligned, border-left: `1px solid #000000`, background `--color-cream`) with high-res zoomable gallery, fabric/PCB specs in Geist Mono, size selector pills, and direct checkout CTA (`[ PROCEED TO ACQUISITION -> ]`).

### 6.6 Contact Page (`<ContactPage />` — Adapted from k95.it/en)

- **Layout**: 12-column asymmetric split (`min-height: calc(100dvh - 56px)`).
- **Left Column (Cols 1–5, border-right 1px solid #000000 on lg, padding 48px 32px)**:
  - K95-style architectural directory:
    - `[01 / LOCATION]`: Department of Technical Arts, Studio Block C, Floor 3, Campus Coordinates.
    - `[02 / DIRECT CHANNELS]`: `lab@dota.edu` (General), `industry@dota.edu` (Recruiters & Partnerships), `press@dota.edu`.
    - `[03 / SOCIAL INDEX]`: Staggered character-roll links (`IInnssttaaggrraamm`, `GGiittHHuubb`, `AArrеennaa`).
- **Right Column (Cols 6–12, padding 48px 48px)**:
  - Interactive Inquiry Builder:
    - **Step 1 (`[01 / SELECT INTENT]`)**: Horizontal wrap of `<Tag />` pills (`Prospective Student`, `Industry / Recruiter`, `Event Collaboration`, `Merch / Press`, `General`).
    - **Step 2 (`[02 / CREDENTIALS]`)**: 2-column row with bottom-border `<Input />` for Full Name * and Email Address *, plus optional Organization / Portfolio URL.
    - **Step 3 (`[03 / TRANSMISSION]`)**: Auto-expanding bottom-border `<Textarea />` (`rows={4}`).
    - **Submit Row**: Full-width or right-aligned `<Button variant="primary">` with K95 split-character hover (`[ TRANSMIT MESSAGE -> ]`) and live status feedback (`[ STATUS: READY ]` -> `[ TRANSMITTING... ]` -> `[ 200 OK: RECEIVED ]`).

---

## 7. Motion System & Choreography

### 7.1 Durations, Easings & Stagger Tokens

- `--ease-out-expo`: `cubic-bezier(0.16, 1, 0.3, 1)` — Primary UI entrance, card hover zoom, drawer slide.
- `--ease-in-out-expo`: `cubic-bezier(0.87, 0, 0.13, 1)` — Preloader clip-path reveal, page transitions.
- `--ease-out-quart`: `cubic-bezier(0.22, 1, 0.36, 1)` — K95 character stagger hover, image cross-fades.
- `--duration-fast`: `180ms` — Micro-interactions, button press, tag toggle.
- `--duration-base`: `350ms` — Product card image cross-fade, color inversions, split-text hover.
- `--duration-slow`: `700ms` — Section reveals, preloader expansion, drawer open/close.
- **Stagger Rule**: Grid cards stagger at `60ms` per item (max `360ms` total per viewport row); split-text characters stagger at `14ms` per glyph.

### 7.2 Smooth Scroll (Lenis)

- Initialize `<ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothWheel: true, syncTouch: false }} />`.
- Synchronize Lenis scroll ticks with `gsap.ticker` and `ScrollTrigger.update`. Disable smooth touch scrolling (`syncTouch: false`) on mobile devices so native iOS/Android momentum scrolling remains responsive.

### 7.3 `prefers-reduced-motion: reduce` Protocol

When `(prefers-reduced-motion: reduce)` matches:
1. Bypass the `2000ms` preloader immediately (`sessionStorage` marked complete, overlay hidden).
2. Disable Lenis smooth scrolling; fall back to native browser scroll.
3. Render the hero keychain in its settled static equilibrium layout (no active `Matter.js` gravity drop, though manual click/focus selection remains active).
4. Set all WebGL 3D meshes to static rotation (`0 rad/s`) and disable scroll-velocity distortion uniforms.
5. Collapse all CSS transition durations to `0.01ms`.

---

## 8. Imagery & 3D Asset Guidelines

1. **On-Palette 3D Lighting & Shading**:
   - Never use photorealistic PBR environment maps with arbitrary rainbow reflections that clash with the brand palette.
   - Use custom Three.js `MeshToonMaterial`, `MeshMatcapMaterial`, or a 3-band cel/lambert shader restricted to `--color-cream` (`#F5F5DC` highlight), `--color-teal` (`#31C4B8` midtone/accent), `--color-red` (`#C92D1C` rim light), and `--color-black` (`#000000` shadow/outline).
   - **Ambient Light**: `#F5F5DC` at intensity `0.8`.
   - **Key Directional Light**: `#FFFFFF` at intensity `1.4` from `(4, 6, 4)`.
   - **Rim Point Light**: `#31C4B8` at intensity `1.0` from `(-4, -2, -2)`.
2. **Polygon & Texture Budgets**:
   - Maximum triangles per individual 3D badge/artifact: `8,000 tris`.
   - Maximum total triangles rendered simultaneously in any viewport: `35,000 tris`.
   - All `.glb` models must be compressed with **Draco** or **Meshopt** (`<= 450 KB` per `.glb` file).
   - All textures must be `.ktx2` or `.webp` at max `1024x1024` resolution (`<= 250 KB` per texture).
   - 2D project/shop images must use `next/image` with `.avif`/`.webp` formats (`<= 200 KB` for cards, `<= 450 KB` for hero/detail views).

---

## 9. Accessibility (A11y) Rules

1. **Focus Rings**: Every interactive DOM element (`<a>`, `<button>`, `<input>`, `[role="button"]`) must exhibit a visible `:focus-visible` indicator: `outline: 2px solid #000000; outline-offset: 2px; box-shadow: 0 0 0 4px #31C4B8;`. Never set `outline: none` without a replacement `:focus-visible` rule.
2. **Keyboard Parity for Physics & 3D Elements**:
   - The `<KeychainHero />` canvas must include an overlaid, screen-reader-accessible and keyboard-focusable `<ul class="sr-only focus-within:not-sr-only">` list of the 5 discipline charms so keyboard users can Tab through `[01 Game Arts]` to `[05 Audio / Synth]` and press `Enter` to trigger the category filter.
   - All `<Canvas>` elements must carry `aria-hidden="true"` while their companion DOM text carries the semantic content.
3. **Touch Targets**: Minimum interactive tap target on mobile/tablet is `44px x 44px` (WCAG 2.2 Target Size).

---

## 10. AI Agent Do / Don't Directives

### DO:
- **DO** read `/DESIGN.md` before creating or modifying any component, page, or stylesheet.
- **DO** use only the 4 core brand hexes (`#F5F5DC`, `#000000`, `#31C4B8`, `#C92D1C`) and the derived accessible deep-teal (`#135C56`) and muted-ink (`#4A4A42`) tokens.
- **DO** use Geist Sans (`var(--font-geist-sans)`) and Geist Mono (`var(--font-geist-mono)`) exclusively.
- **DO** enforce Black `#000000` text on all Teal `#31C4B8` backgrounds.
- **DO** use exposed 1px solid `#000000` borders, zero-padded bracketed indices (`[01]`), and 4-corner metadata placement across cards and sections.
- **DO** wrap all Three.js `<Canvas>` components in `React.Suspense` and dynamic imports (`ssr: false`) with lightweight static SVG/DOM fallbacks.

### DON'T:
- **DON'T** place unstroked Cream `#F5F5DC` text on Teal `#31C4B8` backgrounds (1.95:1 contrast failure).
- **DON'T** place Red `#C92D1C` adjacent to or on top of Teal `#31C4B8` without a `#000000` border or `#F5F5DC` separator.
- **DON'T** introduce generic SaaS UI tropes: no soft gray drop shadows (`box-shadow: 0 10px 25px rgba(0,0,0,0.05)`), no `border-radius: 16px` glassmorphic cards, no purple/indigo Tailwind gradients, and no Inter/Roboto/Arial fonts.
- **DON'T** instantiate multiple simultaneous WebGL `<Canvas>` contexts on the same page; use a single canvas or `@react-three/drei` `<View>` portals.
- **DON'T** block initial HTML hydration or SEO crawlers with the preloader; the underlying page DOM must render server-side while the preloader acts purely as a visual overlay.

---

## 11. Token Implementation Snippets

### 11.1 CSS Custom Properties (`src/styles/tokens.css`)

```css
:root {
  /* Brand Colors */
  --color-cream: #F5F5DC;
  --color-black: #000000;
  --color-teal: #31C4B8;
  --color-red: #C92D1C;

  /* Derived Functional / A11y Tokens */
  --color-teal-deep: #135C56;
  --color-ink-muted: #4A4A42;
  --color-border: #000000;
  --color-border-subtle: rgba(0, 0, 0, 0.16);

  /* Semantic Surface & Text Mapping */
  --surface-primary: var(--color-cream);
  --surface-inverse: var(--color-black);
  --surface-accent: var(--color-teal);
  --surface-cta: var(--color-red);
  --text-primary: var(--color-black);
  --text-secondary: var(--color-ink-muted);
  --text-on-inverse: var(--color-cream);
  --text-on-teal: var(--color-black);
  --text-on-red: var(--color-cream);

  /* Typography */
  --font-sans: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace;

  /* Fluid Type Scale */
  --text-display-xl: clamp(3.5rem, 9vw, 8.5rem);
  --text-display-lg: clamp(2.5rem, 5.5vw, 5.25rem);
  --text-h2: clamp(1.75rem, 3.2vw, 3.25rem);
  --text-h3: clamp(1.25rem, 2vw, 1.75rem);
  --text-body-lg: clamp(1.125rem, 1.4vw, 1.375rem);
  --text-body: 1rem;
  --text-mono-md: 0.875rem;
  --text-mono-sm: 0.75rem;
  --text-mono-xs: 0.6875rem;

  /* Spacing Scale (8px base) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Layout */
  --container-max: 1600px;
  --grid-margin: clamp(1rem, 4vw, 4rem);
  --grid-gutter: 1.5rem;
  --nav-height: 3.5rem;

  /* Motion */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
  --ease-out-quart: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 180ms;
  --duration-base: 350ms;
  --duration-slow: 700ms;
}
```

### 11.2 Tailwind Configuration Snippet (`tailwind.config.ts`)

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx,jsx,js,html}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5DC",
        black: "#000000",
        teal: {
          DEFAULT: "#31C4B8",
          deep: "#135C56",
        },
        red: {
          DEFAULT: "#C92D1C",
        },
        ink: {
          DEFAULT: "#000000",
          muted: "#4A4A42",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.9", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 5.25rem)", { lineHeight: "0.94", letterSpacing: "-0.035em", fontWeight: "600" }],
        "h2": ["clamp(1.75rem, 3.2vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "600" }],
        "h3": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "500" }],
        "body-lg": ["clamp(1.125rem, 1.4vw, 1.375rem)", { lineHeight: "1.45", letterSpacing: "-0.01em" }],
        "mono-md": ["0.875rem", { lineHeight: "1.2", letterSpacing: "0.04em", fontWeight: "500" }],
        "mono-sm": ["0.75rem", { lineHeight: "1.3", letterSpacing: "0.06em", fontWeight: "400" }],
        "mono-xs": ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "400" }],
      },
      boxShadow: {
        brutal: "4px 4px 0px #000000",
        "brutal-sm": "3px 3px 0px #000000",
        "brutal-teal": "6px 6px 0px #31C4B8",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "out-quart": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
```
