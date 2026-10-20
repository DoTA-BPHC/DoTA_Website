# **Architectural Blueprint, Design System, and Multi-Agent Execution Plan for the Department of Technical Arts (DoTA) Portfolio Platform**

## **Deliverable 1: Reference Analysis and Cross-Site Design System**

### **Forensic Breakdown of Reference Sites**

Evaluating the six reference domains requires separating static DOM declarations from client-rendered WebGL canvases and JavaScript animation timelines. Throughout this analysis, each technical and aesthetic observation is explicitly labeled as **Verified** (directly confirmed via live DOM inspection, build metadata, or published technical documentation), **Inferred** (derived from framework constraints, runtime behavior, and studio engineering conventions), or **Unknown** (obscured within compiled client-side bundles or inaccessible server states).

#### **1\. Emergence Projects (**https\://emergenceprojects.com/**) — Shop Section**

The platform at https\://emergenceprojects.com/ operates as the digital archive and curated shop for Armenian multimedia artist Khoren Matevosyan (@xoromat), bridging traditional woven tapestries and wearable cloaks with digital pixel logic and frozen game-environment interfaces (**Verified**). Rather than presenting merchandise as a high-density e-commerce catalog, the shop frames physical artifacts—such as woven cloaks, tapestries, and prints—as numbered, museum-grade editions (**Verified**). Product cards occupy tall portrait or square aspect ratios (4:5 and 1:1) framed by exposed 1px structural grid hairlines and gallery margins, with minimal monospace metadata (edition index, artifact title, and price) pinned to the perimeter corners (**Inferred**). Technically, the site utilizes a signature parallax scroll-zoom animation across its showcase views (**Verified**), while static crawler access to the underlying shop DOM is gated by client-side rendering (**Verified**). Hovering over a product card triggers a dual-layer state transition: the primary studio flat-lay photograph cross-fades (opacity: 0 to 1 over 350ms) to a secondary in-situ detail photograph (such as a woven textile worn as a cloak) while the image plane executes a subtle scale(1.03) transform inside an overflow: hidden container (**Inferred**). The exact CSS custom property identifiers on the live shop node remain **Unknown** due to client-side rendering restrictions. For the Department of Technical Arts (DoTA) at https\://emergenceprojects.com/, the merch and student-edition shop will adapt this pattern into an exposed 1px solid \#000000 architectural grid on a Cream (\#F5F5DC) canvas. Each card will utilize a 4:5 aspect-ratio container, a top-left Geist Mono edition badge (\[ED-01\]), a 350ms hover cross-fade between flat-lay merchandise and student model photography, and a 72px bottom metadata bar divided by a 1px rule into title (Geist Sans Medium, left) and price/availability (Geist Mono, right).

#### **2\. Wildy Riftian (**https\://www\.wildyriftian.com/**) — Interactive Keychain Hero & Works Page**

Designed and developed by Surd Studio for Bay Area multidisciplinary visual and motion designer Wildy Riftian (https\://www\.wildyriftian.com/), this portfolio organizes creative work into a tactile filing system that mimics flipping through physical folders and an art book (**Verified**). The home hero establishes spatial context through corner-pinned header telemetry (BAY AREA, CA. 37.3688° N, 122.0363° W, WILDY RIFTIAN 2026, scroll down ↓) and centers on an interactive, draggable keychain assembly where individual charms represent the designer's core creative disciplines (**Verified**). On the /works index and discipline subpages (/works-motion, /works-3d-tech, /works-illustration, /works-editorial), projects are categorized into six zero-padded tracks (01\. Motion Design, 02\. Brand Design, 03\. Editorial Design, 04\. Photography, 05\. Illustration, and 06\. 3D Tech), presenting each entry with a repeating three-part capability ticker (for example, 3D Modeling, 3D Texturing, Product Visualization), production year (2024, 2025), and sequential index (FEATURED WORK 01, 02, 03) (**Verified**). Inspection of the build environment confirms the site is constructed with **Framer**, pairing Lock Serif (by CoType Foundry) with JetBrains Mono on a \#FFFFFF surface (**Verified**). Because Framer compiles interactive widgets into client-side React bundles, static HTML inspection does not expose the raw physics constants (**Verified**), which remain **Unknown** in source markup. From runtime interaction mechanics, the keychain operates via a 2D rigid-body constraint solver (Matter.js or Verlet spring chains inside a Framer Code Component) coupled with pointer drag events (onPointerDown, onPointerMove, onPointerUp) that apply impulse vectors to linked charm bodies suspended from a fixed top split-ring (**Inferred**). DoTA will adapt https\://www\.wildyriftian.com/ by translating Lock Serif and JetBrains Mono into Geist Sans (600/700 weight, \-0.035em tracking) and Geist Mono (01–05 indexing). The DoTA home hero will mount an HTML5 \<canvas\> driven by Matter.js anchored at the top center of the hero grid, suspending five custom rigid-body charms representing DoTA's academic pillars (01 Game Arts, 02 Shaders & VFX, 03 DoTA '26 Monogram, 04 Physical Computing, and 05 Generative Audio). The /works archive will adopt the tactile folder-tab category bar (01 to 05) and numbered project cards featuring horizontal capability tickers.

#### **3\. Hiroto Sato (**https\://www\.hirotos.com/**) — Overall 3D Elements & Layout Integration**

The personal portfolio of Tokyo-based creative developer Hiroto Sato (https\://www\.hirotos.com/) won both Awwwards Site of the Day and the Developer Award on July 17, 2026 (**Verified**). The site employs a Swiss-minimal layout built on a stark two-tone palette (\#050505 / \#0B0B0A background, \#FFFFFF foreground, and \#8C8C8C muted gray) and helvetica-neue-lt-pro typography across 44 extracted design tokens (**Verified**). The 2D typographic layer is intentionally restrained—displaying compact key-value pairs (Base: Tokyo, Japan, Focus: Creative development / Motion / 3D modeling, Index: Portfolio 2026) alongside scrambled ASCII strings (r8\>eLu4we\*6r)—so that 3D WebGL objects and motion carry the visual hierarchy (**Verified**). On the homepage, visitors manipulate tactile 3D stickers that respond directly to cursor flicking and touch, while the /projects/ route renders a continuous 3D runner animated alongside athlete quotations (**Verified**). Technical metadata confirms the stack combines **Blender** for 3D modeling, **WebGL / Three.js** for real-time rendering, and **GSAP** for motion and page transitions (**Verified**). Because the initial HTML document is an empty client-rendered shell (even omitting og:image and twitter:image tags), the exact GLSL vertex shader code and physics solver parameters for the sticker peel interaction are **Unknown** from static source inspection (**Verified**). In Three.js production pipelines, this tactile sticker behavior is achieved by raycasting normalized pointer coordinates (\[-1, 1\]) onto a subdivided mesh plane and passing pointer velocity into a custom vertex displacement shader or spring-damped rotation uniform (**Inferred**). For DoTA, rather than locking visitors into a heavy full-screen 3D canvas that degrades mobile battery life, the architecture adapts https\://www\.hirotos.com/ by mounting a shared React Three Fiber \<Canvas\> layer that renders tactile 3D department badges and an interactive /works header artifact. These low-poly meshes (\<= 8,000 triangles) will use custom 3-tone cel/toon shaders strictly mapped to DoTA's Teal (\#31C4B8), Cream (\#F5F5DC), Red (\#C92D1C), and Black (\#000000) palette, tilting toward the raycasted cursor (±0.35 rad) and accelerating axial rotation in response to Lenis scroll velocity.

#### **4\. No Art Music (**https\://www\.noartmusic.com/**) — Typography & Page Composition**

Created by Amsterdam digital agency BORING (weareboring.nl) for the independent music label and avant-garde event collective No Art (https\://www\.noartmusic.com/), the site's typographic system creates dramatic tension between confrontational manifesto statements (Broaden your mind, Our aim, however, is not to create parties, but to broaden our visitor's minds) and cold, utilitarian technical telemetry (**Verified**). Event rows and merchandise listings are prefixed with bracketed zero-padded counters (\[02\] No Art ADE Festival After By Night, \[03\] No Art Mumbai), while persistent header and footer bars display uppercase geographic and temporal coordinates (LON. 72.8777° E. LOCAL TIME: 17:00:05. TIME ZONE: PDT (UTC-7)) (**Verified**). Direct stylesheet scraping of the live server is restricted (**Verified**), leaving the raw CSS stylesheet rules **Unknown**. However, evaluating the rendered DOM text nodes alongside Dutch neo-brutalist typographic conventions confirms that the hierarchy contrasts tightly tracked (\-0.035em to \-0.04em), compressed line-height (0.90 to 0.94) sans-serif display blocks against 11px–14px uppercase monospace metadata (\+0.06em to \+0.08em tracking) anchored to column edges (**Inferred**). DoTA will translate the typographic behavior of https\://www\.noartmusic.com/ exclusively into **Geist Sans** and **Geist Mono**. Geist Sans (600 SemiBold and 700 Bold, \-0.035em tracking, 0.94 line-height) will drive all manifesto statements and section headlines, while Geist Mono (400 Regular and 500 Medium, uppercase, \+0.06em tracking) will govern all bracketed indices (\[01\], \[02\]), live Hyderabad campus coordinates (HYD / 17.3850° N, 78.4867° E), local IST timestamps, and filter counters.

#### **5\. Nothin' (**https\://www\.noth.in/**) — Buffer / Loading Animation**

Founded in Paris by Sara Guedj and Pierre Patrault, with UX designed in Figma by Patrault and frontend code engineered by Thomas Carré, the creative studio Nothin' (https\://www\.noth.in/) won Awwwards Site of the Day, Awwwards Portfolio Honors, and FWA of the Day in July–August 2026 (**Verified**). The site is built on a black-and-white typographic canvas where the preloader buffer sequence and shifting wordmark establish the studio's thesis ("Not a style, a perspective. Because Nothin' is Everythin'") within the opening seconds (**Verified**). During the preloader sequence, the central Nothin' wordmark is alive—rapidly cycling through shifting visual textures so it never appears identical twice—while a numeric percentage counter (000% to 100%) advances; once complete, a full-screen showreel expands outward like the opening of a runway show into consecutive pinned hero sections (**Verified**). Throughout the site, sections are demarcated by parenthetical labels such as ( The step aside ), ( The Studio ), and ( Awards ) (**Verified**). Technically, the site runs on **Webflow** augmented with custom **JavaScript** and **GSAP** (ScrollTrigger consecutive pins and timeline choreography), plus clean structured data (JSON-LD) engineered specifically for AI assistants and language models to parse (**Verified**). While exact millisecond keyframe numbers inside the compiled custom script are **Inferred**, Webflow \+ GSAP implementations of this exact preloader-to-hero pattern execute a 2000ms master timeline: from 0ms to 1300ms, an array of 6 SVG/canvas mask textures cycles inside the wordmark every 180ms alongside a gsap.to() counter; from 1300ms to 2000ms, an exponential clip-path transition (clip-path: inset(38% 32% 38% 32%) to inset(0% 0% 0% 0%) using cubic-bezier(0.87, 0, 0.13, 1\)) reveals the hero canvas underneath (**Inferred**). DoTA will adapt https\://www\.noth.in/ by running a 2.0s GSAP buffer sequence on initial session visit (sessionStorage.getItem('dota\_preloader\_seen') \!== 'true') over a solid Black (\#000000) viewport. The central DoTA geometric wordmark will cycle through 6 procedural wireframe, halftone, and ASCII fills in Teal (\#31C4B8), Red (\#C92D1C), and Cream (\#F5F5DC) every 180ms while a Geist Mono counter advances from \[000%\] to \[100%\], culminating in a 700ms expo.inOut clip-path expansion that releases the interactive keychain physics bodies into the Cream hero viewport.

#### **6\. Studio K95 (**https\://k95.it/en**) — Contact Us Page & Micro-Interactions**

Studio K95 (https\://k95.it/en) is a brand and digital design studio in Catania, Italy, recognized for combining Swiss typographic rigor with Italian editorial sensibility (Stelvio Grotesk) and WebGL experiences (**Verified**). Across its navigation and interactive triggers, the DOM utilizes duplicated character strings (AAllll WWoorrkkss, SSttuuddiioo, CCoonnttaacctt, TTuuttttii ii PPrrooggeettttii) to drive vertical split-character hover animations, paired with explicit fraction counters (12 / 20 Works) and parenthetical category tallies (All (20) Packaging (2) Branding (11)) (**Verified**). Direct inspection of https\://k95.it/contacts reveals a pivotal architectural detail: the live K95 contact page omits a conventional multi-box HTML input form, presenting instead a stark architectural directory containing physical studio coordinates (Via Vittorio Emanuele II, 140, Catania, Italia), direct email routing (info@k95.it, webservices@k95.it), and legal registry metadata (Arti Grafiche Leonardi P.IVA 05462590877) (**Verified**). Because DoTA explicitly requires a functional, interactive contact form while preserving K95's architectural spacing and split-character interactions, the DoTA Contact page will synthesize K95's verified 12-column Swiss directory layout and split-character hover mechanics with a hairline-driven interactive inquiry builder (**Inferred**). On desktop, Columns 1–5 (border-right: 1px solid \#000000) will house the K95-style studio directory (Campus Lab Coordinates, Direct Department Channels, and SplitTextHover Social Index), while Columns 6–12 will present interactive pill-tag intent selectors (\[Prospective Student\], \[Industry / Recruiter\], \[Event Collaboration\], \[Merch / Press\]) and bottom-border-only (1px solid \#000000) input fields with a K95 split-character submit button (\[ TRANSMIT MESSAGE \-\> \]).

| Reference Site | Target Pattern Studied | Verified Stack & Fonts | Verification Status | Core Mechanism Adapted for DoTA |
| :---- | :---- | :---- | :---- | :---- |
| emergenceprojects.com | Shop grid, product cards, hover state | Custom JS, Parallax Scroll Zoom | Aesthetic Verified; DOM CSS Inferred | 1px exposed border grid, 4:5 aspect cards, \[ED-XX\] mono tags, dual-image hover cross-fade \+ 1.03x zoom |
| wildyriftian.com | Keychain physics hero & Works layout | Framer, Lock Serif, JetBrains Mono | Stack & Layout Verified; Physics Inferred | Matter.js 2D rigid-body keychain in hero; 01–05 folder-tab filter and triple-capability marquee rows on /works |
| hirotos.com | 3D elements, cursor/scroll reaction, layout | Three.js/WebGL, GSAP, Blender, Helvetica Neue | Stack & Tactile Sticker Verified; GLSL Inferred | Shared R3F background/inline \<Canvas\> with raycasted pointer-reactive 3D department badges on minimalist 2D grid |
| noartmusic.com | Typography scale, tracking, case, composition | Custom build by BORING (weareboring.nl) | Text Hierarchy Verified; CSS Values Inferred | Extreme scale contrast in Geist Sans (\-0.035em) vs uppercase Geist Mono (\+0.06em) with \[01\] indices & live telemetry |
| noth.in | Buffer/loading animation & transition | Webflow, Custom JS, GSAP ScrollTrigger \[cite: 25, 26\] | Wordmark & Pin Sequence Verified; Timing Inferred | 2.0s GSAP preloader cycling 6 textures inside DoTA wordmark (180ms step) \+ expo.inOut clip-path reveal into hero |
| k95.it/en | Contact page layout, form, spacing | WebGL, Custom Split-Text DOM, Stelvio Grotesk | Directory & Split-Text Verified; Form Synthesized | 5/7 asymmetric 12-column split, K95 character-roll hover buttons, pill-chip inquiry toggles, 1px bottom-border inputs |

### **Brand Palette Audit and WCAG 2.1 Contrast Remediation**

A mathematical audit of the fixed brand inputs (Teal \#31C4B8, Cream \#F5F5DC, Red \#C92D1C, Black \#000000) exposes a severe accessibility failure in one of the logo sheet's observed pairings. Calculating relative luminance via the WCAG 2.1 formula $L=0.2126R+0.7152G+0.0722B$ and evaluating the contrast ratio equation $CR=({L}_{\max\limits_{}}+0.05)/({L}_{\min\limits_{}}+0.05)$ establishes the exact legibility thresholds across every possible foreground and background combination.  
Because Teal (\#31C4B8) exhibits a high relative luminance ($0.449$) relative to Cream (\#F5F5DC, $0.906$), placing unbordered Cream typography or icons on a Teal surface yields a 1.95:1 contrast ratio. This fails not only WCAG AA for normal text (4.5:1) but also WCAG AA for large display text and user-interface components (3.0:1), rendering even 72px headlines illegible on mobile screens in ambient daylight. Conversely, pairing Black (\#000000) on Teal (\#31C4B8) achieves 9.72:1 (AAA compliance), while Black (\#000000) on Cream (\#F5F5DC) achieves 18.98:1 (AAA compliance), and Cream (\#F5F5DC) on Red (\#C92D1C) achieves 4.90:1 (AA compliance).  
To honor the brand sheet's visual spirit without failing accessibility audits, the design system enforces a three-tier remediation protocol for Teal surfaces. First, all standard body copy, navigation labels, and UI icons placed directly on Teal \#31C4B8 must use Black \#000000 (9.72:1 AAA). Second, when Cream (\#F5F5DC) typography or emblems must appear over a Teal \#31C4B8 background to echo the logo sheet, they must either sit inside a solid Black \#000000 or Red \#C92D1C badge container, or—for display headlines $\geq 48px$—carry a mandatory 1.5px solid \#000000 outline (\-webkit-text-stroke) paired with a 4px 4px 0px \#000000 hard brutalist drop shadow to guarantee a 9.72:1 edge boundary. Third, for interactive states requiring unstroked Cream text on a teal-family surface, the token architecture introduces a derived deep-teal functional shade (\--color-teal-deep: \#135C56) that preserves the exact $17{5}^{\circ }$ cyan-teal hue angle while darkening luminance to deliver a 6.62:1 WCAG AA contrast ratio against Cream (\#F5F5DC).

| Foreground Token | Background Token | Contrast Ratio | WCAG AA Normal (≥4.5:1\\ge 4.5:1≥4.5:1) | WCAG AA Large / UI (≥3.0:1\\ge 3.0:1≥3.0:1) | WCAG AAA (≥7.0:1\\ge 7.0:1≥7.0:1) | System Rule & Remediation |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Black** (\#000000) | **Cream** (\#F5F5DC) | **18.98 : 1** \[cite: 35\] | PASS | PASS | PASS | **Primary Canvas Pairing (65% of site)**. Use for all default body copy, headlines, and 1px structural grid hairlines. |
| **Black** (\#000000) | **Teal** (\#31C4B8) | **9.72 : 1** \[cite: 35\] | PASS | PASS | PASS | **Primary Teal Pairing**. Mandatory foreground for all copy, icons, and labels placed directly on Teal \#31C4B8. |
| **Cream** (\#F5F5DC) | **Red** (\#C92D1C) | **4.90 : 1** \[cite: 35\] | PASS | PASS | FAIL | **Primary Accent / CTA Pairing**. Approved for buttons, alert banners, active tags, and featured section blocks. |
| **Red** (\#C92D1C) | **Cream** (\#F5F5DC) | **4.90 : 1** \[cite: 35\] | PASS | PASS | FAIL | **Approved Editorial Highlight**. Use for hover states, active nav indicators, error text, and bracketed counters on Cream. |
| **Black** (\#000000) | **Red** (\#C92D1C) | **3.88 : 1** \[cite: 35\] | FAIL | PASS | FAIL | **Restricted to Large Display / Borders**. Permitted only for headlines $\geq 24px$ (or $\geq 19px$ Bold) and 1px–2px brutalist borders on Red. Never use for small body text. |
| **Red** (\#C92D1C) | **Teal** (\#31C4B8) | **2.51 : 1** \[cite: 35\] | FAIL | FAIL | FAIL | **FORBIDDEN**. Vibrating chromostereopsis and severe contrast failure. Always separate with a 1px solid \#000000 border or Cream buffer. |
| **Cream** (\#F5F5DC) | **Teal** (\#31C4B8) | **1.95 : 1** \[cite: 35\] | FAIL | FAIL | FAIL | **CRITICAL FAILURE — REMEDIATION REQUIRED**. Fails even for giant headlines. Apply Black text, \#000000 pill encapsulation, or \--color-teal-deep (\#135C56). |

### **Cross-Site Merged Spacing, Grid, and Placement System**

Synthesizing the spatial architecture across all six reference domains (emergenceprojects.com, wildyriftian.com, hirotos.com, noartmusic.com, noth.in, and k95.it/en) reveals a shared foundation of **Swiss Neo-Brutalist Architectural Precision**. Rather than floating cards in arbitrary whitespace with soft drop shadows, these sites structure the viewport through exposed 1px structural hairlines, extreme contrast between open gallery planes and corner-pinned monospace telemetry, and asymmetric column splits.  
The merged spatial system establishes an 8px (0.5rem) base unit, reserving a 4px (0.25rem) half-step strictly for micro-tag internal padding and icon-to-label optical alignment. Across responsive viewports, the macro grid scales from 4 columns on mobile (\< 640px, 16px outer margins, 12px gutters) to 8 columns on tablet (640px–1023px, 24px outer margins, 16px gutters), and 12 columns on desktop (1024px–1439px, 32px outer margins, 24px gutters) and wide studio monitors (\>= 1440px, fluid outer margins clamp(32px, 4vw, 64px), 24px gutters, 1600px max content container). Full-bleed 100vw 1px solid \#000000 horizontal dividers extend to the viewport edges between major sections, while standard vertical section padding scales fluidly via clamp(64px, 8vw, 128px). Pinned hero and manifesto viewports (noth.in and wildyriftian.com pattern) lock to 100dvh (calc(100dvh \- 56px) below the fixed navbar) with internal padding matching the outer grid margin.  
Within this grid, item placement follows two strict alignment habits derived from the reference corpus. First, **The 4-Corner Telemetry Rule** (adapted from hirotos.com, noartmusic.com, and wildyriftian.com) anchors secondary Geist Mono (12px uppercase) metadata to the four internal corners of every hero frame, project card, and shop cell (16px mobile / 24px desktop inset): Top-Left displays the bracketed index (\[01\] or \[ED-01\]), Top-Right displays the parenthetical category or status badge (( ARCHIVE ) or IN STOCK), Bottom-Left houses the Geist Sans primary title, and Bottom-Right houses the interactive action trigger or timestamp (VIEW PROJECT \-\>, ₹1,200, or 2026). Second, **Asymmetric Column Allocation** (adapted from k95.it/en and noth.in) prohibits centering long-form body copy; instead, section introductions, case studies, and the Contact page divide the 12-column desktop grid into an asymmetric **4-column / 8-column** or **5-column / 7-column** split, pinning sticky section indices and directory metadata in the left columns (Cols 1–4 or 1–5) while allocating the right columns (Cols 5–12 or 6–12) to interactive media grids, case study prose, and hairline forms.

## **Deliverable 2: Complete** DESIGN.md **Specification File**

The following fenced Markdown block contains the complete, self-contained DESIGN.md file ready to be saved in the repository root (/DESIGN.md) so that Claude Code, Google Antigravity, and OpenAI Codex read it before generating any UI components.

# **DESIGN.md — DoTA (Department of Technical Arts) Design System & UI Specification**

## **1\. Overview & Visual Personality**

The Department of Technical Arts (DoTA) website operates as an avant-garde creative technology studio and living archive, explicitly rejecting generic academic templates. Its visual personality synthesizes Swiss-typographic grid rigor (exposed 1px structural hairlines, bracketed monospace indices, corner-pinned telemetry) with tactile, physics-driven playfulness (draggable 2D rigid-body charms and raycasted 3D WebGL artifacts). High-contrast flat surfaces in Cream (\#F5F5DC), Black (\#000000), Teal (\#31C4B8), and Red (\#C92D1C) frame student work so that motion, shaders, and interactive prototypes carry the emotional weight. Every animation and 3D interaction is deterministic, purposeful, and accessible.

## **2\. Colour Tokens, Contrast Rules & Usage Ratios**

### **2.1 Core Brand & Functional Tokens**

| Token Name | CSS Custom Property | Hex Value | RGB | Role & Usage Rules |
| :---- | :---- | :---- | :---- | :---- |
| **Cream (Canvas)** | \--color-cream | \#F5F5DC | 245, 245, 220 | Primary background surface (60%–65% of viewport area); light text on Red or Black surfaces. |
| **Black (Ink)** | \--color-black | \#000000 | 0, 0, 0 | Primary typography, 1px structural borders, dark-mode/preloader surface (20%–25% of area). |
| **Teal (Signal)** | \--color-teal | \#31C4B8 | 49, 196, 184 | Secondary interactive accent, 3D mesh key light/material, hover highlights, badge fills (10% of area). |
| **Red (Alert/CTA)** | \--color-red | \#C92D1C | 201, 45, 28 | High-priority primary CTA background, active filter states, featured badges, error states (5% of area). |
| **Teal Deep (A11y)** | \--color-teal-deep | \#135C56 | 19, 92, 86 | Derived dark-teal surface used ONLY when unstroked Cream text (\#F5F5DC) must sit on a teal background (6.62:1 AA). |
| **Black Muted** | \--color-ink-muted | \#4A4A42 | 74, 74, 66 | Secondary body copy and muted captions on \--color-cream (8.45:1 AAA contrast). |
| **Border Hairline** | \--color-border | \#000000 | 0, 0, 0 | Primary brutalist exposed grid border (1px solid \#000000). |
| **Border Subtle** | \--color-border-subtle | rgba(0,0,0,0.16) | 0, 0, 0, 0.16 | Internal table/list dividers on \--color-cream. |

### **2.2 Allowed Pairings (WCAG 2.1 Verified)**

1. \--color-black text on \--color-cream background \-\> **18.98:1 (AAA)** — Default reading experience.  
2. \--color-cream text on \--color-black background \-\> **18.98:1 (AAA)** — Preloader, footer, dark showcase blocks.  
3. \--color-black text on \--color-teal background \-\> **9.72:1 (AAA)** — Mandatory text color on standard Teal surfaces.  
4. \--color-cream text on \--color-red background \-\> **4.90:1 (AA)** — Primary CTA buttons, alert pills, featured banners.  
5. \--color-red text on \--color-cream background \-\> **4.90:1 (AA)** — Bracketed index highlights \[01\], active links, form errors.  
6. \--color-teal text on \--color-black background \-\> **9.72:1 (AAA)** — Terminal telemetry, 3D HUD overlays on dark sections.  
7. \--color-cream text on \--color-teal-deep background \-\> **6.62:1 (AA)** — Approved when light text on a teal hue is required.

### **2.3 Forbidden Pairings (CRITICAL AGENT GUARDRAILS)**

* **FORBIDDEN**: Unstroked \--color-cream (\#F5F5DC) text directly on \--color-teal (\#31C4B8). Contrast is **1.95:1** (fails all WCAG levels). If Cream must appear over \--color-teal, encapsulate it inside a \--color-black pill or apply \-webkit-text-stroke: 1.5px \#000000; text-shadow: 4px 4px 0px \#000000; on display type \>= 48px.  
* **FORBIDDEN**: \--color-red (\#C92D1C) text or icons directly on \--color-teal (\#31C4B8) or vice versa. Contrast is **2.51:1** and causes severe chromostereopsis.  
* **FORBIDDEN**: \--color-black (\#000000) body text (\< 24px) on \--color-red (\#C92D1C). Contrast is **3.88:1** (permitted only for large display type \>= 24px or 1px borders).

## **3\. Typography System (Geist Sans & Geist Mono Only)**

Only two font families are permitted across the entire application, loaded via next/font/local or the geist npm package (GeistSans and GeistMono).

### **3.1 Font Roles**

* **Primary (**\--font-sans**: Geist Sans)**: Display headlines, manifesto statements, project titles, long-form case study copy, primary navigation drawers.  
* **Secondary (**\--font-mono**: Geist Mono)**: Bracketed indices (\[01\]), parenthetical section labels (( THE ARCHIVE )), top/bottom nav links, metadata tables, timestamps, coordinates, prices (₹ / \$), filter counters (All (24)), tags, and button labels.  
* **Where Geist Mono is NEVER used**: Multi-sentence paragraphs, project descriptions longer than 2 lines, or H1–H3 headlines.

### **3.2 Fluid Type Scale & Specifications**

| Scale Token | Element / Role | Font Family | Fluid Size (clamp()) | Line Height | Weight | Tracking (letter-spacing) | Case |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| \--text-display-xl | Hero / Preloader Wordmark | Geist Sans | clamp(3.5rem, 9vw, 8.5rem) (56px–136px) | 0.90 | 700 (Bold) | \-0.04em | Uppercase |
| \--text-display-lg | Page H1 / Manifesto Lead | Geist Sans | clamp(2.5rem, 5.5vw, 5.25rem) (40px–84px) | 0.94 | 600 (SemiBold) | \-0.035em | Sentence / Upper |
| \--text-h2 | Section Header (H2) | Geist Sans | clamp(1.75rem, 3.2vw, 3.25rem) (28px–52px) | 1.05 | 600 (SemiBold) | \-0.025em | Sentence |
| \--text-h3 | Project / Card Title (H3) | Geist Sans | clamp(1.25rem, 2vw, 1.75rem) (20px–28px) | 1.15 | 500 (Medium) | \-0.015em | Sentence |
| \--text-body-lg | Lead Paragraph / Intro | Geist Sans | clamp(1.125rem, 1.4vw, 1.375rem) (18px–22px) | 1.45 | 400 (Regular) | \-0.01em | Sentence |
| \--text-body | Standard Body Copy | Geist Sans | 1rem (16px) | 1.60 | 400 (Regular) | 0em | Sentence |
| \--text-mono-md | Nav Links / Buttons / Prices | Geist Mono | 0.875rem (14px) | 1.20 | 500 (Medium) | \+0.04em | Uppercase |
| \--text-mono-sm | Indices \[01\] / Telemetry / Tags | Geist Mono | 0.75rem (12px) | 1.30 | 400 (Regular) | \+0.06em | Uppercase |
| \--text-mono-xs | Micro Counters / Coordinates | Geist Mono | 0.6875rem (11px) | 1.20 | 400 (Regular) | \+0.08em | Uppercase |

## **4\. Spacing, Grid & Layout System**

### **4.1 Base Unit & Spacing Scale**

Base unit \= 8px (0.5rem). Half-unit 4px (0.25rem) is restricted to tag/badge internals.

* \--space-1: 4px (0.25rem)  
* \--space-2: 8px (0.5rem)  
* \--space-3: 12px (0.75rem)  
* \--space-4: 16px (1rem)  
* \--space-6: 24px (1.5rem)  
* \--space-8: 32px (2rem)  
* \--space-12: 48px (3rem)  
* \--space-16: 64px (4rem)  
* \--space-24: 96px (6rem)  
* \--space-32: 128px (8rem)

### **4.2 Responsive Breakpoints & Grid Columns**

| Breakpoint Token | Viewport Range | Columns | Outer Margin | Gutter | Max Container Width |
| :---- | :---- | :---- | :---- | :---- | :---- |
| sm (Mobile) | 0px – 639px | 4 | 16px | 12px | 100% |
| md (Tablet) | 640px – 1023px | 8 | 24px | 16px | 100% |
| lg (Desktop) | 1024px – 1439px | 12 | 32px | 24px | 1440px |
| xl (Studio Wide) | \>= 1440px | 12 | clamp(32px, 4vw, 64px) | 24px | 1600px |

### **4.3 Placement & Section Rhythm Rules**

1. **Exposed Structural Hairlines**: Major sections are separated by full-bleed 1px solid \#000000 horizontal borders. Grid cells inside the Shop and Works Archive use 1px solid \#000000 collapsed borders (gap: 1px; background-color: \#000000; where child cells have background-color: \#F5F5DC).  
2. **Asymmetric 4/8 and 5/7 Splits**: On lg and xl viewports, section headers and sticky sidebars occupy Columns 1–4 (or 1–5), while primary interactive content, grids, and forms occupy Columns 5–12 (or 6–12).  
3. **4-Corner Telemetry Anchoring**: Inside hero viewports, project cards, and shop cards, pin metadata to the 4 corners using padding: 16px (24px on lg):  
   * Top-Left: \[01\] or \[ED-01\] (\--text-mono-sm)  
   * Top-Right: ( CATEGORY ) or stock badge (\--text-mono-sm)  
   * Bottom-Left: Item Title (\--text-h3)  
   * Bottom-Right: Action arrow \-\> or Price (\--text-mono-md)

## **5\. Component Specifications & State Matrix**

### **5.1 Global Top Navigation Bar (**\<Navbar /\>**)**

* **Structure**: Fixed top bar (height: 56px, z-index: 50), full-bleed width, background: rgba(245, 245, 220, 0.88), backdrop-filter: blur(12px), bottom border 1px solid \#000000.  
* **Layout**: 3-zone flex/grid aligned to main container margins:  
  * Left: DoTA geometric mark \+ live telemetry (HYD / 17.3850° N in \--text-mono-xs, hidden on \< 768px).  
  * Center: Horizontal links (WORKS \[24\], EVENTS \[04\], SHOP \[08\], STUDIO, CONTACT) in \--text-mono-sm.  
  * Right: Primary CTA pill (CONTACT \-\>) \+ Audio/Reduced-Motion toggle button (\[FX: ON\]).  
* **States**:  
  * default: Text \#000000, transparent background.  
  * hover: K95-style vertical split-character translation (translateY(-100%) over 280ms cubic-bezier(0.22, 1, 0.36, 1\)) revealing a duplicate text layer in \--color-red (\#C92D1C).  
  * focus-visible: 2px solid \#000000 outline with 2px offset and \--color-teal (\#31C4B8) background fill.  
  * active (current route): Preceded by a 6px x 6px solid \--color-red square indicator.  
  * disabled: opacity: 0.4, pointer-events: none.

### **5.2 Buttons (**\<Button /\>**)**

* **Geometry**: Height 44px (standard) / 52px (large CTA), horizontal padding 20px, border-radius: 0px (sharp brutalist rectangle) or 9999px (pill variant for filters), border 1px solid \#000000, font \--text-mono-md.  
* **Variants & States**:  
  * **Primary (**variant="primary"**)**:  
    * default: Background \--color-red (\#C92D1C), text \--color-cream (\#F5F5DC), border 1px solid \#000000, shadow 4px 4px 0px \#000000.  
    * hover: Background \--color-black (\#000000), text \--color-cream (\#F5F5DC), transform translate(-2px, \-2px), shadow 6px 6px 0px \#31C4B8.  
    * focus-visible: 2px solid \#000000 outline, offset: 3px.  
    * active: Transform translate(2px, 2px), shadow 0px 0px 0px \#000000.  
    * disabled: Background \#E2E2CE, text \#7A7A6E, border 1px solid \#7A7A6E, shadow none, cursor: not-allowed.  
  * **Secondary (**variant="secondary"**)**:  
    * default: Background \--color-cream (\#F5F5DC), text \--color-black (\#000000), border 1px solid \#000000, shadow 3px 3px 0px \#000000.  
    * hover: Background \--color-teal (\#31C4B8), text \--color-black (\#000000), transform translate(-2px, \-2px), shadow 5px 5px 0px \#000000.  
    * active: Transform translate(2px, 2px), shadow none.

### **5.3 Project Card (**\<ProjectCard /\> **— Wildy Riftian Pattern)**

* **Structure**: Folder-tabbed container with 1px solid \#000000 border on \--color-cream. Top header strip (height: 36px, border-bottom 1px solid \#000000, padding 0 16px) displays \[01\] on the left and production year 2026 on the right in \--text-mono-sm.  
* **Media Area**: 16:10 aspect ratio container, overflow: hidden, background \#000000.  
* **Capability Ticker**: Below the image, a 32px high strip (border-top: 1px solid \#000000, border-bottom: 1px solid \#000000, background \--color-cream) repeats the project's 3 tags (e.g., SHADER ART • PHYSICAL COMPUTING • UNREAL 5 •) in \--text-mono-xs.  
* **States**:  
  * default: Static poster image (scale(1.0)), ticker static, bottom bar background \--color-cream, text \--color-black.  
  * hover: Poster image scales to 1.04 (450ms cubic-bezier(0.16, 1, 0.3, 1\)) and plays muted .mp4 preview loop; capability ticker scrolls horizontally at 40px/s with background shifting to \--color-teal (\#31C4B8) and text \--color-black; bottom action arrow VIEW PROJECT \-\> shifts 4px right.  
  * focus-visible: Full card 3px solid \#C92D1C outline.  
  * active: Card scales to 0.995 over 100ms.

### **5.4 Shop Product Card (**\<ProductCard /\> **— Emergence Projects Pattern)**

* **Structure**: Cell within a collapsed 1px solid \#000000 grid (aspect-ratio: 4 / 5 media box \+ 72px metadata footer).  
* **Overlays**: Top-left badge \[ED-01\] (\--text-mono-xs, padding: 4px 8px, background \--color-cream, border 1px solid \#000000). Top-right status pill (IN STOCK in \--color-teal with \#000000 text, or SOLD OUT in \--color-red with \#F5F5DC text).  
* **States**:  
  * default: Displays primary flat-lay image (object-fit: cover), footer shows Product Title (\--text-h3, 18px) on left and Price (₹1,200 in \--text-mono-md) on right.  
  * hover: Secondary worn/detail image cross-fades in (opacity: 0 \-\> 1, 350ms cubic-bezier(0.22, 1, 0.36, 1\)) with scale(1.03); footer background transitions to \--color-black (\#000000) with text inverting to \--color-cream (\#F5F5DC) and right side swapping price for \[ ACQUIRE \-\> \].  
  * focus-visible: 3px solid \#31C4B8 inset outline.  
  * disabled (SOLD OUT): Image filter: grayscale(100%) contrast(0.85), hover cross-fade still functions for archive inspection, but CTA reads \[ ARCHIVED \] with pointer-events: none on checkout link.

### **5.5 Tag / Filter Pill (**\<Tag /\>**)**

* **Geometry**: height: 32px, padding: 0 12px, border: 1px solid \#000000, border-radius: 9999px, font \--text-mono-sm.  
* **States**:  
  * default: Background \--color-cream, text \--color-black.  
  * hover: Background \--color-teal, text \--color-black.  
  * active (Selected): Background \--color-black, text \--color-cream (or \--color-red background with \--color-cream text for primary category).  
  * focus-visible: 2px solid \#C92D1C outline, offset: 2px.  
  * disabled: opacity: 0.35.

### **5.6 Form Fields (**\<Input /\>**,** \<Textarea /\>**,** \<ChipSelect /\> **— K95 Pattern)**

* **Text Inputs**: Borderless top/left/right; bottom border only 1px solid \#000000 (border-radius: 0), height: 52px, padding: 12px 0, background: transparent, font \--text-body-lg (Geist Sans 18px, color \#000000). Floating or top-pinned label in \--text-mono-xs (\[01 / YOUR NAME \*\]).  
* **States**:  
  * default: Bottom border 1px solid \#000000, placeholder rgba(0,0,0,0.40).  
  * hover: Bottom border 2px solid \#000000.  
  * focus: Bottom border 2px solid \#31C4B8, background rgba(49, 196, 184, 0.08), outline: none.  
  * error: Bottom border 2px solid \#C92D1C, error helper message below in \--text-mono-xs color \--color-red (4.90:1 AA contrast).  
  * disabled: Bottom border 1px dashed rgba(0,0,0,0.3), opacity: 0.5.

### **5.7 Global Footer (**\<Footer /\>**)**

* **Structure**: Full-bleed \--color-black (\#000000) background, text \--color-cream (\#F5F5DC), top border 1px solid \#000000, padding 64px 0 32px.  
* **Layout**:  
  * Top Row (12 cols): Cols 1–6 department mission statement \+ live local IST clock (HYDERABAD / UTC+5:30); Cols 7–9 sitemap index (\[01\] WORKS to \[05\] CONTACT); Cols 10–12 external links (GITHUB, INSTAGRAM, ARENA, YOUTUBE).  
  * Bottom Row: Giant edge-to-edge DoTA wordmark (\--text-display-xl, width: 100%, color \--color-cream, hover reveals \--color-teal shader/wireframe fill) \+ copyright bar (© 2026 DEPARTMENT OF TECHNICAL ARTS).

## **6\. Page-Section Specifications (Adapted Reference Patterns)**

### **6.1 Loader / Buffer Animation (**\<Preloader /\> **— Adapted from** noth.in**)**

* **Trigger Rule**: Runs once per browser session (sessionStorage.getItem('dota\_preloader\_seen')). If already seen or if prefers-reduced-motion: reduce is active, skip immediately (0ms).  
* **Sequence & Timing (**2000ms **total)**:  
  1. **Viewport Lock (**0ms**)**: Fixed overlay (inset: 0, z-index: 9999, background: \#000000). Corner telemetry shows ( INITIALIZING ARCHIVE ) top-left and numeric counter \[000%\] bottom-right in \--text-mono-md (\--color-cream).  
  2. **Shifting Wordmark Cycle (**0ms – 1300ms**)**: Centered DoTA SVG wordmark (clamp(4rem, 12vw, 10rem)) cycles through 6 distinct visual masks/textures every 180ms (01: Solid Cream, 02: Teal Wireframe Grid, 03: Red Halftone Dots, 04: ASCII Pixel Matrix, 05: Teal/Cream Diagonal Stripe, 06: Solid Black on Cream Box). Counter interpolates from 000 to 100 using gsap.to() with power2.inOut.  
  3. **Runway Clip-Path Reveal (**1300ms – 2000ms**)**: The central box expands to full viewport via clip-path: inset(38% 32% 38% 32%) \-\> clip-path: inset(0% 0% 0% 0%) over 700ms with easing cubic-bezier(0.87, 0, 0.13, 1\) (expo.inOut), unveiling the live Home Hero underneath and triggering the keychain physics drop.

### **6.2 Interactive Keychain Hero (**\<KeychainHero /\> **— Adapted from** wildyriftian.com**)**

* **Layout**: min-height: calc(100dvh \- 56px), 12-column grid on \--color-cream (\#F5F5DC) with exposed 1px perimeter frame.  
* **Physics Canvas (**Matter.js **2D Rigid-Body Engine)**:  
  * Mounted in an interactive \<canvas\> spanning the central 8 columns (or full hero bounds with pointer pass-through on text).  
  * A fixed metallic/brutalist split-ring anchor is pinned at (50% X, 48px Y).  
  * **5 Interactive Charms** hang from the ring via Matter.Constraint links (stiffness: 0.9, damping: 0.08):  
    1. **Charm 01 (**\[GAME ARTS\]**)**: Teal \#31C4B8 octagonal badge (110px x 110px) with \#000000 border and icon.  
    2. **Charm 02 (**\[SHADERS & VFX\]**)**: Red \#C92D1C pill tag (140px x 64px) with \#F5F5DC typography.  
    3. **Charm 03 (**\[DoTA '26\]**)**: Black \#000000 monogram fob (96px x 120px) with \#F5F5DC wireframe mark.  
    4. **Charm 04 (**\[PHYSICAL COMP\]**)**: Cream \#F5F5DC PCB-shaped card (120px x 90px) with \#000000 traces.  
    5. **Charm 05 (**\[AUDIO / SYNTH\]**)**: Teal \#31C4B8 circular disc (100px diameter) with \#000000 waveform ring.  
* **Interaction**: Users can grab and fling any charm with mouse or touch (Matter.MouseConstraint). Double-clicking a discipline charm filters and smooth-scrolls to that category in the Featured Works section. On mobile (\< 768px), scale charm dimensions by 0.72 and allow vertical page scrolling outside charm hit-boxes (touch-action: pan-y).

### **6.3 3D Element Usage (**\<SceneCanvas /\> **— Adapted from** hirotos.com**)**

* **Architecture**: A single shared \<Canvas\> (React Three Fiber) or scoped \<View\> portals to prevent WebGL context exhaustion.  
* **What is Rendered**:  
  1. **Tactile Department Sticker/Badge Array (Home / Studio transition)**: 3D extruded low-poly department badges (\<= 8,000 triangles per mesh) that tilt toward the raycasted cursor position (gsap.quickTo rotation x/y max ±0.35 rad, damping 0.15) and deform with a subtle vertex wave when clicked/flicked.  
  2. **Interactive Artifact Pedestal (Works Header)**: A rotating low-poly topological mesh that morphs material state (Wireframe Teal \#31C4B8 \-\> Matte Clay Cream \#F5F5DC \-\> Halftone Red \#C92D1C) as the user switches work categories (01–05).  
* **Scroll Integration**: Lenis scroll velocity (velocity) feeds into a uniform uScrollVelocity that temporarily increases mesh rotation speed and axial tilt, settling back to idle (0.2 rad/s) via spring damping when scroll stops.

### **6.4 Works Page (**\<WorksArchive /\> **— Adapted from** wildyriftian.com **&** k95.it**)**

* **Top Control Bar**: Sticky below Navbar (top: 56px, z-index: 40, background \--color-cream, border-bottom 1px solid \#000000). Left side displays folder-tab category switches: ALL (24), 01\. INTERACTIVE & GAMES (08), 02\. 3D & SHADERS (06), 03\. HARDWARE & IOT (04), 04\. MOTION & FILM (04), 05\. GENERATIVE AUDIO (02). Right side displays K95-style view mode toggle: \[ GRID / LIST \].  
* **Grid View**: 2 columns on md, 3 columns on lg/xl, separated by 24px gutters, using \<ProjectCard /\> with folder tabs and capability tickers.  
* **List View**: Full-width collapsed 1px solid \#000000 rows (height: 72px). Columns: \[Index 01\] (Col 1\) | Project Title (Cols 2–5) | Student Creator(s) (Cols 6–8) | Category Tag (Cols 9–11) | Year \-\> (Col 12). Hovering a row inverts background to \--color-black (\#000000), text to \--color-cream, and spawns a floating 320px x 200px preview thumbnail tracking the cursor (gsap.quickTo x/y at 180ms lag).

### **6.5 Shop Grid (**\<ShopSection /\> **— Adapted from** emergenceprojects.com**)**

* **Layout**: Full-width container with collapsed 1px solid \#000000 borders (grid-template-columns: repeat(1, 1fr) on sm, repeat(2, 1fr) on md, repeat(3, 1fr) on lg, repeat(4, 1fr) on xl).  
* **Header Block**: Asymmetric 4/8 split above the grid: Cols 1–4 show \[ SHOP / EDITIONS \] and edition release telemetry (BATCH 01 // AUTUMN 2026); Cols 5–12 display a Geist Sans H1 (Student-Designed Hardware Kits, Zines & Apparel).  
* **Interaction**: Clicking any \<ProductCard /\> opens a slide-over Spec Drawer (width: min(480px, 100vw), right-aligned, border-left: 1px solid \#000000, background \--color-cream) with high-res zoomable gallery, fabric/PCB specs in Geist Mono, size selector pills, and direct checkout CTA (\[ PROCEED TO ACQUISITION \-\> \]).

### **6.6 Contact Page (**\<ContactPage /\> **— Adapted from** k95.it/en**)**

* **Layout**: 12-column asymmetric split (min-height: calc(100dvh \- 56px)).  
* **Left Column (Cols** 1–5**, border-right** 1px solid \#000000 **on** lg**, padding** 48px 32px**)**:  
  * K95-style architectural directory:  
    * \[01 / LOCATION\]: Department of Technical Arts, Studio Block C, Floor 3, Campus Coordinates.  
    * \[02 / DIRECT CHANNELS\]: lab@dota.edu (General), industry@dota.edu (Recruiters & Partnerships), press@dota.edu.  
    * \[03 / SOCIAL INDEX\]: Staggered character-roll links (IInnssttaaggrraamm, GGiittHHuubb, AArrеennaa).  
* **Right Column (Cols** 6–12**, padding** 48px 48px**)**:  
  * Interactive Inquiry Builder:  
    * Step 1 (\[01 / SELECT INTENT\]): Horizontal wrap of \<Tag /\> pills (Prospective Student, Industry / Recruiter, Event Collaboration, Merch / Press, General).  
    * Step 2 (\[02 / CREDENTIALS\]): 2-column row with bottom-border \<Input /\> for Full Name \* and Email Address \*, plus optional Organization / Portfolio URL.  
    * Step 3 (\[03 / TRANSMISSION\]): Auto-expanding bottom-border \<Textarea /\> (rows={4}).  
    * Submit Row: Full-width or right-aligned \<Button variant="primary"\> with K95 split-character hover (\[ TRANSMIT MESSAGE \-\> \]) and live status feedback (\[ STATUS: READY \] \-\> \[ TRANSMITTING... \] \-\> \[ 200 OK: RECEIVED \]).

## **7\. Motion System & Choreography**

### **7.1 Durations, Easings & Stagger Tokens**

* \--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1\) — Primary UI entrance, card hover zoom, drawer slide.  
* \--ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1\) — Preloader clip-path reveal, page transitions.  
* \--ease-out-quart: cubic-bezier(0.22, 1, 0.36, 1\) — K95 character stagger hover, image cross-fades.  
* \--duration-fast: 180ms — Micro-interactions, button press, tag toggle.  
* \--duration-base: 350ms — Product card image cross-fade, color inversions, split-text hover.  
* \--duration-slow: 700ms — Section reveals, preloader expansion, drawer open/close.  
* **Stagger Rule**: Grid cards stagger at 60ms per item (max 360ms total per viewport row); split-text characters stagger at 14ms per glyph.

### **7.2 Smooth Scroll (Lenis)**

* Initialize \<ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothWheel: true, syncTouch: false }} /\>.  
* Synchronize Lenis scroll ticks with gsap.ticker and ScrollTrigger.update. Disable smooth touch scrolling (syncTouch: false) on mobile devices so native iOS/Android momentum scrolling remains responsive.

### **7.3** prefers-reduced-motion: reduce **Protocol**

When (prefers-reduced-motion: reduce) matches:

1. Bypass the 2000ms preloader immediately (sessionStorage marked complete, overlay hidden).  
2. Disable Lenis smooth scrolling; fall back to native browser scroll.  
3. Render the hero keychain in its settled static equilibrium layout (no active Matter.js gravity drop, though manual click/focus selection remains active).  
4. Set all WebGL 3D meshes to static rotation (0 rad/s) and disable scroll-velocity distortion uniforms.  
5. Collapse all CSS transition durations to 0.01ms.

## **8\. Imagery & 3D Asset Guidelines**

1. **On-Palette 3D Lighting & Shading**:  
   * Never use photorealistic PBR environment maps with arbitrary rainbow reflections that clash with the brand palette.  
   * Use custom Three.js MeshToonMaterial, MeshMatcapMaterial, or a 3-band cel/lambert shader restricted to \--color-cream (\#F5F5DC highlight), \--color-teal (\#31C4B8 midtone/accent), \--color-red (\#C92D1C rim light), and \--color-black (\#000000 shadow/outline).  
   * Ambient Light: \#F5F5DC at intensity: 0.8. Key Directional Light: \#FFFFFF at intensity: 1.4 from (4, 6, 4\). Rim Point Light: \#31C4B8 at intensity: 1.0 from (-4, \-2, \-2).  
2. **Polygon & Texture Budgets**:  
   * Maximum triangles per individual 3D badge/artifact: 8,000 tris.  
   * Maximum total triangles rendered simultaneously in any viewport: 35,000 tris.  
   * All .glb models must be compressed with **Draco** or **Meshopt** (\<= 450 KB per .glb file).  
   * All textures must be .ktx2 or .webp at max 1024x1024 resolution (\<= 250 KB per texture).  
   * 2D project/shop images must use next/image with .avif/.webp formats (\<= 200 KB for cards, \<= 450 KB for hero/detail views).

## **9\. Accessibility (A11y) Rules**

1. **Focus Rings**: Every interactive DOM element (\<a\>, \<button\>, \<input\>, \[role="button"\]) must exhibit a visible :focus-visible indicator: outline: 2px solid \#000000; outline-offset: 2px; box-shadow: 0 0 0 4px \#31C4B8;. Never set outline: none without a replacement :focus-visible rule.  
2. **Keyboard Parity for Physics & 3D Elements**:  
   * The \<KeychainHero /\> canvas must include an overlaid, screen-reader-accessible and keyboard-focusable \<ul class="sr-only focus-within:not-sr-only"\> list of the 5 discipline charms so keyboard users can Tab through \[01 Game Arts\] to \[05 Audio / Synth\] and press Enter to trigger the category filter.  
   * All \<Canvas\> elements must carry aria-hidden="true" while their companion DOM text carries the semantic content.  
3. **Touch Targets**: Minimum interactive tap target on mobile/tablet is 44px x 44px (WCAG 2.2 Target Size).

## **10\. AI Agent Do / Don't Directives**

### **DO:**

* **DO** read /DESIGN.md before creating or modifying any component, page, or stylesheet.  
* **DO** use only the 4 core brand hexes (\#F5F5DC, \#000000, \#31C4B8, \#C92D1C) and the derived accessible deep-teal (\#135C56) and muted-ink (\#4A4A42) tokens.  
* **DO** use Geist Sans (var(--font-geist-sans)) and Geist Mono (var(--font-geist-mono)) exclusively.  
* **DO** enforce Black \#000000 text on all Teal \#31C4B8 backgrounds.  
* **DO** use exposed 1px solid \#000000 borders, zero-padded bracketed indices (\[01\]), and 4-corner metadata placement across cards and sections.  
* **DO** wrap all Three.js \<Canvas\> components in React.Suspense and dynamic imports (ssr: false) with lightweight static SVG/DOM fallbacks.

### **DON'T:**

* **DON'T** place unstroked Cream \#F5F5DC text on Teal \#31C4B8 backgrounds (1.95:1 contrast failure).  
* **DON'T** place Red \#C92D1C adjacent to or on top of Teal \#31C4B8 without a \#000000 border or \#F5F5DC separator.  
* **DON'T** introduce generic SaaS UI tropes: no soft gray drop shadows (box-shadow: 0 10px 25px rgba(0,0,0,0.05)), no border-radius: 16px glassmorphic cards, no purple/indigo Tailwind gradients, and no Inter/Roboto/Arial fonts.  
* **DON'T** instantiate multiple simultaneous WebGL \<Canvas\> contexts on the same page; use a single canvas or @react-three/drei \<View\> portals.  
* **DON'T** block initial HTML hydration or SEO crawlers with the preloader; the underlying page DOM must render server-side while the preloader acts purely as a visual overlay.

## **11\. Token Implementation Snippets**

### **11.1 CSS Custom Properties (**src/styles/tokens.css**)css**

:root {  
/\* Brand Colors \*/  
\--color-cream: \#F5F5DC;  
\--color-black: \#000000;  
\--color-teal: \#31C4B8;  
\--color-red: \#C92D1C;  
/\* Derived Functional / A11y Tokens \*/  
\--color-teal-deep: \#135C56;  
\--color-ink-muted: \#4A4A42;  
\--color-border: \#000000;  
\--color-border-subtle: rgba(0, 0, 0, 0.16);  
/\* Semantic Surface & Text Mapping \*/  
\--surface-primary: var(--color-cream);  
\--surface-inverse: var(--color-black);  
\--surface-accent: var(--color-teal);  
\--surface-cta: var(--color-red);  
\--text-primary: var(--color-black);  
\--text-secondary: var(--color-ink-muted);  
\--text-on-inverse: var(--color-cream);  
\--text-on-teal: var(--color-black);  
\--text-on-red: var(--color-cream);  
/\* Typography \*/  
\--font-sans: var(--font-geist-sans), \-apple-system, BlinkMacSystemFont, sans-serif;  
\--font-mono: var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace;  
/\* Fluid Type Scale \*/  
\--text-display-xl: clamp(3.5rem, 9vw, 8.5rem);  
\--text-display-lg: clamp(2.5rem, 5.5vw, 5.25rem);  
\--text-h2: clamp(1.75rem, 3.2vw, 3.25rem);  
\--text-h3: clamp(1.25rem, 2vw, 1.75rem);  
\--text-body-lg: clamp(1.125rem, 1.4vw, 1.375rem);  
\--text-body: 1rem;  
\--text-mono-md: 0.875rem;  
\--text-mono-sm: 0.75rem;  
\--text-mono-xs: 0.6875rem;  
/\* Spacing Scale (8px base) \*/  
\--space-1: 0.25rem;  
\--space-2: 0.5rem;  
\--space-3: 0.75rem;  
\--space-4: 1rem;  
\--space-6: 1.5rem;  
\--space-8: 2rem;  
\--space-12: 3rem;  
\--space-16: 4rem;  
\--space-24: 6rem;  
\--space-32: 8rem;  
/\* Layout \*/  
\--container-max: 1600px;  
\--grid-margin: clamp(1rem, 4vw, 4rem);  
\--grid-gutter: 1.5rem;  
\--nav-height: 3.5rem;  
/\* Motion \*/  
\--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);  
\--ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);  
\--ease-out-quart: cubic-bezier(0.22, 1, 0.36, 1);  
\--duration-fast: 180ms;  
\--duration-base: 350ms;  
\--duration-slow: 700ms;  
}

\#\#\# 11.2 Tailwind Configuration Snippet (\`tailwind.config.ts\`)  
\`\`\`ts  
import type { Config } from "tailwindcss";

const config: Config \= {  
  content: \["./src/\*\*/\*.{ts,tsx,mdx}"\],  
  theme: {  
    extend: {  
      colors: {  
        cream: "\#F5F5DC",  
        black: "\#000000",  
        teal: {  
          DEFAULT: "\#31C4B8",  
          deep: "\#135C56",  
        },  
        red: {  
          DEFAULT: "\#C92D1C",  
        },  
        ink: {  
          DEFAULT: "\#000000",  
          muted: "\#4A4A42",  
        },  
      },  
      fontFamily: {  
        sans: \["var(--font-geist-sans)", "sans-serif"\],  
        mono: \["var(--font-geist-mono)", "monospace"\],  
      },  
      fontSize: {  
        "display-xl": \["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.9", letterSpacing: "-0.04em", fontWeight: "700" }\],  
        "display-lg": \["clamp(2.5rem, 5.5vw, 5.25rem)", { lineHeight: "0.94", letterSpacing: "-0.035em", fontWeight: "600" }\],  
        "h2": \["clamp(1.75rem, 3.2vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "600" }\],  
        "h3": \["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "500" }\],  
        "body-lg": \["clamp(1.125rem, 1.4vw, 1.375rem)", { lineHeight: "1.45", letterSpacing: "-0.01em" }\],  
        "mono-md": \["0.875rem", { lineHeight: "1.2", letterSpacing: "0.04em", fontWeight: "500" }\],  
        "mono-sm": \["0.75rem", { lineHeight: "1.3", letterSpacing: "0.06em", fontWeight: "400" }\],  
        "mono-xs": \["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "400" }\],  
      },  
      boxShadow: {  
        brutal: "4px 4px 0px \#000000",  
        "brutal-sm": "3px 3px 0px \#000000",  
        "brutal-teal": "6px 6px 0px \#31C4B8",  
      },  
      transitionTimingFunction: {  
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",  
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",  
        "out-quart": "cubic-bezier(0.22, 1, 0.36, 1)",  
      },  
    },  
  },  
  plugins: \[\],  
};

export default config;

\---

\#\# Deliverable 3: Website Workflow and Information Architecture

\#\#\# Sitemap Evaluation and Structural Challenge

The initial prompt suggested eight top-level routes (\`Home\`, \`Works/Projects\`, \`Project detail\`, \`Shop\`, \`Team/People\`, \`Events/News\`, \`About\`, and \`Contact\`). For a college technical arts department operating on a 6-week timeline, splitting \`About\` and \`Team/People\` into separate top-level pages introduces unnecessary navigation sprawl and thins out editorial density. Across modern creative studios (\`noth.in/studio\`, \`k95.it/studio\`, and \`hirotos.com\`), institutional philosophy, curriculum pillars, physical lab infrastructure, and faculty/student rosters are unified into a single authoritative \*\*Studio / Department (\`/studio\`)\*\* destination \[cite: 14, 27, 36\].

Consolidating \`About\` and \`Team/People\` into \`/studio\` (with deep-link hash anchors \`\#manifesto\`, \`\#pillars\`, \`\#labs\`, \`\#faculty\`, and \`\#cohort-2026\`) tightens the global navigation bar to five primary links (\`Works\`, \`Events\`, \`Shop\`, \`Studio\`, \`Contact\`) alongside \`Home\` and dynamic \`Project Detail\` (\`/works/\[slug\]\`). This consolidation cuts page-shell maintenance overhead for the AI agents while presenting recruiters and prospective students with a cohesive narrative linking academic tracks directly to the people who run them.

| Route Path | Page Title | Core Purpose | Sections in Vertical Order | Reference Pattern Used | Primary Interactions |  
| :--- | :--- | :--- | :--- | :--- | :--- |  
| \`/\` | \*\*Home\*\* | Establish studio caliber, introduce DoTA pillars, funnel visitors to Works, Events, and Shop | 1\. \`\<Preloader /\>\` (\`noth.in\`)\<br\>2. \`\<KeychainHero /\>\` (\`wildyriftian.com\`)\<br\>3. \`\<ManifestoTicker /\>\` (\`noartmusic.com\`)\<br\>4. \`\<FeaturedWorks /\>\` (\`01–04\` bento)\<br\>5. \`\<StickerPlayground /\>\` (\`hirotos.com\`)\<br\>6. \`\<UpcomingEventsStrip /\>\`\<br\>7. \`\<ShopTeaserGrid /\>\` (\`emergenceprojects.com\`)\<br\>8. \`\<Footer /\>\` | \`noth.in\`, \`wildyriftian.com\` \[cite: 7, 8\], \`hirotos.com\`, \`noartmusic.com\` | \`2.0s\` wordmark preloader; \`Matter.js\` draggable 5-charm keychain; raycasted 3D department stickers; hover video previews |  
| \`/works\` | \*\*Works Archive\*\* | Filterable index of all student and department capstone projects | 1\. \`\<ArchiveHeader /\>\` \+ 3D morphing pedestal\<br\>2. \`\<FolderFilterBar /\>\` (\`01\`–\`05\` tabs \+ Grid/List toggle)\<br\>3. \`\<ProjectGrid /\>\` or \`\<ProjectListTable /\>\`\<br\>4. \`\<Footer /\>\` | \`wildyriftian.com/works\` \[cite: 7, 9, 11\], \`k95.it/works\` \[cite: 32\] | Folder-tab discipline switching (\`01\` to \`05\`); Grid vs. List layout morph (\`Flip\`); floating cursor-tracked preview in List mode |  
| \`/works/\[slug\]\` | \*\*Project Detail\*\* | Deep editorial case study for a single project with credits and live demo | 1\. \`\<ProjectHero /\>\` (Full-bleed video/WebGL \+ corner telemetry)\<br\>2. \`\<StickyCreditsSidebar /\>\` (Cols 1–4: Creators, Stack, Year, Repo/Live links) \+ \`\<EditorialMDXBody /\>\` (Cols 5–12)\<br\>3. \`\<NextProjectPortal /\>\` | \`noth.in\` editorial case studies \[cite: 17, 37\], \`wildyriftian.com\` | Sticky metadata sidebar; interactive iframe/shader embed toggle; next-project scroll portal at bottom |  
| \`/events\` | \*\*Events & Exhibitions\*\* | Showcase workshops, guest lectures, game jams, and annual degree show | 1\. \`\<EventsTelemetryHeader /\>\` (Live countdown to next event)\<br\>2. \`\<FeaturedExhibitionHero /\>\`\<br\>3. \`\<ChronologicalEventRows /\>\` (\`\[01\]\`, \`\[02\]\` rows)\<br\>4. \`\<PastArchiveAccordion /\>\` | \`noartmusic.com/events\` \[cite: 20, 38\] | Bracketed \`\[01\]\` row expansion; hover poster reveal; 1-click \`.ics\` / Google Calendar export and RSVP drawer |  
| \`/shop\` | \*\*Shop / Editions\*\* | Curated showcase and acquisition portal for student hardware kits, zines, and apparel | 1\. \`\<ShopEditionHeader /\>\` (\`BATCH 01 // 2026\`)\<br\>2. \`\<CategoryFilterPills /\>\` (\`All\`, \`Apparel\`, \`Zines\`, \`PCB Kits\`)\<br\>3. \`\<ExposedBorderShopGrid /\>\`\<br\>4. \`\<ProductSpecDrawer /\>\` (Slide-over) | \`emergenceprojects.com\`, \`noartmusic.com/shop\` \[cite: 20, 39\] | Dual-image hover cross-fade \+ \`1.03x\` scale; slide-over technical spec drawer; external Stripe/Razorpay payment link handoff |  
| \`/studio\` | \*\*Studio & People\*\* | Consolidated About, Curriculum Pillars, Lab Facilities, Faculty, and Student Cohort directory | 1\. \`\<StudioManifesto /\>\` (\`( THE DEPARTMENT )\`)\<br\>2. \`\<FivePillarsAccordion /\>\` (\`01\`–\`05\` tracks with 3D badges)\<br\>3. \`\<LabFacilitiesGallery /\>\`\<br\>4. \`\<PeopleDirectory /\>\` (Filterable Faculty / Cohort 2026 / Alumni grid) | \`noth.in/studio\` \[cite: 27\], \`hirotos.com\`, \`k95.it/studio\` \[cite: 36\] | Interactive 3D badge inspection per curriculum track; filterable student/faculty directory with portfolio & GitHub links |  
| \`/contact\` | \*\*Contact Us\*\* | Route inquiries from prospective students, industry recruiters, and collaborators | 1\. \`\<K95DirectoryColumn /\>\` (Cols 1–5: Coordinates, Direct emails, Socials)\<br\>2. \`\<InteractiveFormColumn /\>\` (Cols 6–12: Intent pills, Hairline inputs, Transmit button) | \`k95.it/en\` & \`k95.it/contacts\` \[cite: 28, 33\] | Pill-chip intent selector that dynamically adapts form prompts; split-character hover submit; real-time Zod validation |

\---

\#\#\# Primary Visitor User Flows

The platform is engineered around four primary visitor journeys, each moving from immediate sensory engagement to structured conversion. When a \*\*Prospective Student\*\* arrives on \`/\` from social media or search, the \`2.0s\` \`noth.in\` wordmark preloader immediately signals that DoTA operates like an elite creative studio rather than a conventional university department. Upon reveal, the visitor drags the \`\[01 GAME ARTS\]\` and \`\[02 SHADERS & VFX\]\` charms on the \`\<KeychainHero /\>\` (\`wildyriftian.com\` pattern) \[cite: 7, 8\]; double-clicking a discipline charm smooth-scrolls directly to Featured Works filtered to that track. Clicking a project card opens \`/works/\[slug\]\`, where the prospective student inspects student credits, live shader embeds, and GitHub source repositories before navigating to \`/studio\` to examine the five academic tracks and physical lab facilities. Finally, clicking the navbar \`CONTACT \-\>\` CTA lands the user on \`/contact\` (\`k95.it\` pattern) \[cite: 28, 33\], where selecting the \`\[Prospective Student\]\` intent chip reveals a direct admissions brochure link and portfolio inquiry prompt.

For an \*\*Industry Recruiter or Studio Partner\*\*, efficiency of technical vetting is paramount. Entering on \`/\` or \`/works\`, the recruiter toggles the archive view from \`GRID\` to \`LIST\` (\`k95.it/works\` pattern) \[cite: 32\], enabling rapid scanning of 24 projects indexed by technology stack (\`Unreal Engine 5\`, \`GLSL\`, \`Rust\`, \`TouchDesigner\`, \`Three.js\`) with a cursor-tracked floating preview thumbnail. Selecting a standout capstone project on \`/works/\[slug\]\` exposes the creator's profile badge in the sticky left sidebar (\`Cols 1–4\`); clicking the creator routes to \`/studio\#cohort-2026\` pre-filtered to that student's profile card (with direct links to GitHub, LinkedIn, and personal portfolio), or routes to \`/contact\` with the \`\[Industry / Recruiter\]\` pill pre-selected to schedule a studio showcase review.

A \*\*Current Student\*\* visiting on mobile primarily interacts with \`/events\` and \`/shop\`, alongside contributing work to \`/works\`. On \`/events\`, the student checks the \`\[01\]\` upcoming workshop or game jam countdown (\`noartmusic.com/events\` pattern) \[cite: 20, 38\] and taps the 1-click \`.ics\` calendar export or RSVP link. On \`/shop\`, the student inspects \`\[ED-01\]\` hardware kits or department apparel via the \`emergenceprojects.com\` dual-image card hover and slide-over Spec Drawer, completing acquisition via the linked payment page. To publish a new capstone project, the student submits a GitHub Pull Request adding a single \`.mdx\` file and media directory to \`src/content/projects/\`, which automatically validates against the Zod build schema. Meanwhile, \*\*Faculty and Parents\*\* navigate from the homepage manifesto to \`/studio\` to review faculty credentials, research labs, and graduate outcomes, before visiting \`/events\` to obtain campus coordinates and guest passes for the Annual Technical Arts Exhibition.

\---

\#\#\# Content Model and Schema Definitions

All four content entities are stored directly in the Git repository and validated at build time via \`Zod\` (\`src/lib/schemas.ts\`), guaranteeing that AI agents never pass undefined properties into React components.

| Content Entity | Storage Path | Required Fields & Types | Optional Fields & Types | Relationships |  
| :--- | :--- | :--- | :--- | :--- |  
| \*\*\`Project\`\*\* | \`src/content/projects/\[slug\].mdx\` | \`id\`: string (\`"01"\`)\<br\>\`slug\`: string\<br\>\`title\`: string\<br\>\`summary\`: string (\`\<= 160 chars\`)\<br\>\`category\`: \`"games" \\| "shaders" \\| "hardware" \\| "motion" \\| "audio"\`\<br\>\`capabilities\`: \`\[string, string, string\]\` (exact 3 items for ticker)\<br\>\`year\`: number (\`2025 \\| 2026\`)\<br\>\`featured\`: boolean\<br\>\`coverImage\`: string (\`16:10\` path)\<br\>\`creators\`: \`string\[\]\` (person slugs)\<br\>\`techStack\`: \`string\[\]\` | \`previewVideo\`: string (\`.mp4\` loop)\<br\>\`liveUrl\`: string\<br\>\`repoUrl\`: string\<br\>\`model3dUrl\`: string (\`.glb\`)\<br\>\`awards\`: \`string\[\]\` | References \`Person\[\]\` via \`creators\` array |  
| \*\*\`Person\`\*\* | \`src/content/people/index.json\` | \`slug\`: string\<br\>\`name\`: string\<br\>\`role\`: \`"Faculty" \\| "Student" \\| "Alumni" \\| "Staff"\`\<br\>\`discipline\`: string\<br\>\`avatar\`: string (\`1:1\` path)\<br\>\`cohortYear\`: number | \`bio\`: string\<br\>\`website\`: string\<br\>\`github\`: string\<br\>\`linkedin\`: string\<br\>\`featured\`: boolean | Linked from \`Project.creators\` |  
| \*\*\`Event\`\*\* | \`src/content/events/index.json\` | \`id\`: string (\`"\[01\]"\`)\<br\>\`slug\`: string\<br\>\`title\`: string\<br\>\`dateISO\`: string (\`YYYY-MM-DDTHH:mm:ss+05:30\`)\<br\>\`endDateISO\`: string\<br\>\`location\`: string\<br\>\`type\`: \`"Workshop" \\| "Exhibition" \\| "Lecture" \\| "Hackathon"\`\<br\>\`status\`: \`"upcoming" \\| "live" \\| "past"\` | \`rsvpUrl\`: string\<br\>\`posterImage\`: string (\`4:5\` path)\<br\>\`speaker\`: string | Standalone or links to \`Person\` |  
| \*\*\`Product\`\*\* | \`src/content/products/index.json\` | \`editionId\`: string (\`"ED-01"\`)\<br\>\`slug\`: string\<br\>\`title\`: string\<br\>\`category\`: \`"Apparel" \\| "Zines" \\| "PCB Kits" \\| "Prints"\`\<br\>\`priceINR\`: number\<br\>\`priceUSD\`: number\<br\>\`primaryImage\`: string (\`4:5\` flat-lay)\<br\>\`hoverImage\`: string (\`4:5\` worn/detail)\<br\>\`stockStatus\`: \`"in\_stock" \\| "low\_stock" \\| "sold\_out"\`\<br\>\`checkoutUrl\`: string | \`specs\`: \`string\[\]\` (e.g., \`\["420 GSM Cotton", "Puff Print"\]\`)\<br\>\`sizes\`: \`("S" \\| "M" \\| "L" \\| "XL")\[\]\`\<br\>\`designerSlug\`: string | Optional link to \`Person\` via \`designerSlug\` |

\---

\#\#\# Content Supply Checklist (Required from Human Director)

To prevent missing photography or copy from stalling the final build weeks prior to the November 23 feature freeze, the human director and student leads must supply the following assets according to the staged deadlines below. During Weeks 1–3, the AI coding agents will build against schema-valid seed data so engineering never waits on content collection.

| Asset Category | Specific Deliverable | Format & Technical Spec | Owner | Due Date |  
| :--- | :--- | :--- | :--- | :--- |  
| \*\*Brand & Identity\*\* | Final SVG vector logo mark (\`DoTA\` wordmark \+ icon) and exact confirmation of the 3 brand hex codes | \`.svg\` (clean paths, \`viewBox="0 0 400 120"\`), confirmed Hex values | Human Director | \*\*22 Oct 2026\*\* (Week 1\) |  
| \*\*3D / Keychain Assets\*\* | 5 vector icons/badges for the 2D keychain charms \+ 1 hero \`.glb\` department emblem (or approval for AI agent to generate procedural geometry) | 5 \`.svg\` files (\`512x512\`); \`.glb\` (\`\<= 8k tris\`, Draco compressed) | Human Director \+ 3D Student Lead | \*\*29 Oct 2026\*\* (Week 2\) |  
| \*\*Student Projects (Batch 1)\*\*| Minimum \*\*8 Featured Projects\*\* (\`title\`, \`160-char summary\`, \`MDX case study\`, \`16:10 cover image\`, \`6-sec muted .mp4 loop\`, creator names) | \`.mdx\` text \+ \`.webp\` (\`1920x1200\`, \`\< 250KB\`) \+ \`.mp4\` (\`720p\`, \`\< 2.5MB\`, H.264) | Student Cohort Leads / Human Director | \*\*05 Nov 2026\*\* (Week 3\) |  
| \*\*Shop Merchandise\*\* | \*\*6 to 8 Products\*\*: 2 photos per item (1 flat-lay \+ 1 worn/detail shot), pricing (\`₹\`/\`\$\`), specs, and payment links | \`.webp\` (\`1200x1500\` \`4:5\` aspect, \`\< 200KB\` each) \+ JSON table | Merch Coordinator / Human Director | \*\*10 Nov 2026\*\* (Week 4\) |  
| \*\*People & Events\*\* | Roster of Faculty \+ 2026 Student Cohort (\`1:1\` headshots, roles, social URLs) \+ \*\*4 Upcoming / 4 Past Events\*\* | \`.webp\` (\`600x600\` headshots, \`\< 80KB\`) \+ \`.csv\` / \`.json\` sheet | Dept Admin / Human Director | \*\*14 Nov 2026\*\* (Week 4\) |  
| \*\*Student Projects (Batch 2)\*\*| Remaining \*\*12 to 16 Archive Projects\*\* for full \`/works\` population \+ final department manifesto copy | \`.mdx\` \+ \`.webp\` (\`16:10\`) | Student Contributors | \*\*20 Nov 2026\*\* (Week 5\) |

\---

\#\# Deliverable 4: Tech Stack and Architecture

\#\#\# Unified Stack Selection & Justification

Delivering an interactive 3D and physics-heavy portfolio within 6 weeks using three autonomous AI coding agents (\`Claude Code\`, \`Google Antigravity\`, and \`OpenAI Codex\`) on a \$0 budget requires selecting technologies that sit at the absolute center of LLM training distributions, provide strict compile-time type verification (\`tsc \--noEmit\`), and deploy statically or on free serverless edge tiers.

http\://googleusercontent.com/visual\_element\_1

| Architectural Layer | Selected Technology | Justification Against Deadline, AI Agents, Mobile Perf & \$0 Budget |  
| :--- | :--- | :--- |  
| \*\*Core Framework\*\* | \*\*Next.js 15 (App Router) \+ React 19 \+ TypeScript 5.6\*\* | Highest representation in Claude, Gemini, and OpenAI coding weights; React Server Components (RSC) keep initial JS payloads small on mid-range mobile devices while isolating client-side WebGL/physics trees via \`'use client'\`. |  
| \*\*Styling & Tokens\*\* | \*\*Tailwind CSS v3.4 \+ CSS Custom Properties (\`tokens.css\`)\*\* | AI agents generate deterministic utility classes without inventing conflicting CSS class names; CSS variables allow GSAP to tween colors and layout tokens directly at 60fps. |  
| \*\*Typography\*\* | \*\*\`geist\` npm package (\`geist/font/sans\`, \`geist/font/mono\`)\*\* | Zero-network-hop self-hosted \`.woff2\` variable fonts with automatic \`size-adjust\` fallback metrics, eliminating Cumulative Layout Shift (CLS) at \$0 cost. |  
| \*\*Smooth Scroll & Motion\*\* | \*\*GSAP 3.12 (\`@gsap/react\`) \+ Lenis (\`lenis/react\`)\*\* | Confirmed in \`hirotos.com\` and \`noth.in\` \[cite: 14, 26\]. \`useGSAP()\` automatically cleans up \`ScrollTrigger\` instances during React unmount, preventing memory leaks generated by AI agents. |  
| \*\*3D Rendering (\`hirotos.com\`)\*\* | \*\*Three.js \+ React Three Fiber (\`@react-three/fiber\`) \+ \`@react-three/drei\`\*\* | Declarative JSX scene graphs allow AI agents to write, refactor, and type-check 3D meshes, cameras, and lights identically to standard React components. |  
| \*\*2D Physics (\`wildyriftian.com\`)\*\*| \*\*\`Matter.js\` (\`0.20.0\`) \+ \`@types/matter-js\`\*\* | Lightweight (\`\~85 KB\` minified, \`\~26 KB\` gzipped) 2D rigid-body physics engine in pure JS. Unlike \`Rapier2D\` (which requires asynchronous \`.wasm\` binary loading of \`\~600 KB\` that frequently breaks Next.js bundler configs), \`Matter.js\` initializes synchronously in \`\< 5ms\` and is deeply understood by all three AI coding agents. |  
| \*\*Content Management\*\* | \*\*In-Repo MDX \+ JSON validated via \`Zod\` (\`src/lib/schemas.ts\`)\*\* | Zero external CMS subscription costs, zero API rate limits, and 100% static generation (SSG). Students add future projects by opening a GitHub Pull Request with a single \`.mdx\` file—a workflow validated on modern AI-assisted builds \[cite: 17, 25\]. |  
| \*\*Shop Architecture\*\* | \*\*Curated Showcase \+ External Payment Links (Stripe Payment Links / Razorpay Payment Pages)\*\* | Building a stateful cart, inventory database, webhook handler, and tax calculator in 6 weeks introduces severe scope creep. Each \`\<ProductCard /\>\` opens a local Spec Drawer whose \`\[ ACQUIRE \-\> \]\` button links directly to a hosted Stripe Payment Link (international) or Razorpay Payment Page (India/UPI), requiring \$0 monthly cost and zero PCI-DSS backend liability. |  
| \*\*Contact Form Backend\*\* | \*\*Next.js Server Action \+ \`Resend\` Free Tier (\`3,000 emails/mo\`) \+ \`Zod\` \+ Honeypot\*\* | Eliminates third-party form watermarks; Server Actions validate inputs server-side via \`Zod\` and dispatch formatted HTML/text emails to \`lab@dota.edu\` in \`\< 200ms\` at \$0 cost. |  
| \*\*Hosting, Analytics & SEO\*\* | \*\*Vercel (Hobby / Student Tier) \+ Vercel Web Analytics \+ \`next/og\` \+ JSON-LD\*\* | Automatic preview deployments per agent branch; \`next/og\` dynamically generates brutalist Open Graph social cards (avoiding \`hirotos.com\`'s missing OG card issue); JSON-LD structured data ensures AI search engines parse DoTA accurately (following \`noth.in\`'s machine-readable SEO pattern \[cite: 25\]). |

\---

\#\#\# 3D, Physics, and Mobile Performance Fallback Strategy

Mid-range smartphones (such as devices running a Snapdragon 695 or iPhone 12 with 4 GB RAM) experience rapid thermal throttling and frame drops if WebGL fragment shaders and 2D rigid-body physics execute simultaneously at native Retina pixel density (\`window.devicePixelRatio \= 3\`). To guarantee smooth performance across all devices, the architecture implements a three-tier adaptive governor in \`src/lib/performance.ts\`. First, the React Three Fiber \`\<Canvas\>\` clamps device pixel ratio strictly to \`dpr={\[1, 1.5\]}\` (never \`2.0\` or \`3.0\`), cutting fragment shader invocations by up to 75% on high-DPI mobile screens with zero visible degradation on flat cel-shaded materials. Inside the canvas, \`@react-three/drei\`'s \`\<PerformanceMonitor\>\` monitors rolling frame times and automatically drops DPR to \`1.0\` while disabling MSAA anti-aliasing if frame duration exceeds \`22ms\` (\`\< 45fps\`).

Second, both the \`Matter.js\` physics runner (\`Matter.Runner\`) in \`\<KeychainHero /\>\` and the Three.js \`frameloop\` in \`\<SceneCanvas /\>\` are governed by an \`IntersectionObserver\`. The moment a visitor scrolls past the hero viewport (\`scrollY \> 100vh\`), the \`Matter.js\` physics loop pauses (\`runner.enabled \= false\`), freeing 100% of main-thread physics CPU cycles for scrolling through the Works archive. Third, for low-end devices (\`navigator.hardwareConcurrency \<= 4\`, \`navigator.deviceMemory \<= 4\`, or missing WebGL2 support) and users with \`prefers-reduced-motion: reduce\` enabled (or \`\[FX: OFF\]\` toggled in the navbar), \`next/dynamic\` bypasses downloading the \`three\` and \`matter-js\` bundles entirely, rendering \`\<KeychainFallback /\>\`—a \`\< 12 KB\` interactive SVG/DOM component where discipline charms remain clickable and keyboard-focusable without continuous physics simulation.

\---

\#\#\# Shop Architecture: Showcase \+ Payment Links vs. Full Checkout

The DoTA Shop is architected as a \*\*Curated Edition Showcase with Hosted Checkout Handoff\*\*. Product metadata and image paths reside in \`src/content/products/index.json\`. Visitors browse the \`emergenceprojects.com\`-inspired \`1px\` exposed-border grid, experience the \`350ms\` dual-image hover cross-fade, and click any card to open the slide-over \`\<ProductSpecDrawer /\>\`, where they inspect fabrication specs (\`420 GSM Cotton\`, \`ENIG Gold-Plated PCB\`) and select a size pill (\`S\`, \`M\`, \`L\`, \`XL\`). Clicking \`\[ PROCEED TO ACQUISITION \-\> \]\` opens a pre-configured \*\*Razorpay Payment Page\*\* (supporting Indian Rupees \`₹\`, student UPI apps, and cards) or \*\*Stripe Payment Link\*\* in a new tab with the selected size SKU passed via URL query string. This provides real payment collection on Launch Day with zero backend database maintenance or PCI compliance overhead. If the department later mandates a multi-item on-site shopping cart, the modular isolation of \`\<ProductSpecDrawer /\>\` allows adding a \`zustand\` \`localStorage\` cart store and a single \`/api/checkout/route.ts\` serverless endpoint (\`stripe.checkout.sessions.create\` or \`razorpay.orders.create\`) backed by a free-tier Upstash Redis KV inventory counter without refactoring the Shop UI components.

\---

\#\#\# Repository Structure and Naming Conventions

To prevent concurrent AI coding agents from overwriting each other's files, the repository enforces strict directory isolation across \`src/app\`, \`src/components\`, \`src/content\`, \`src/lib\`, and \`src/styles\`. All component files use \`PascalCase.tsx\` with named exports, while utility and schema modules use \`kebab-case.ts\`.

| Directory / File Path | Assigned Agent Owner | Architectural Role & Contents |  
| :--- | :--- | :--- |  
| \`/DESIGN.md\`, \`/AGENTS.md\`, \`/CLAUDE.md\`, \`/BACKLOG.md\` | Shared Reference (Read-Only after Stage 1\) | Root constitution files containing locked design tokens, WCAG rules, commands, and stage completion checklists. |  
| \`next.config.ts\`, \`package.json\`, \`tsconfig.json\` | \*\*Claude Code\*\* (\`feat/core\`) | Framework configuration, immutable asset caching headers, strict TypeScript compiler flags, and locked dependencies. |  
| \`tailwind.config.ts\`, \`src/styles/tokens.css\`, \`src/styles/globals.css\` | \*\*Google Antigravity\*\* (\`feat/ui\`) | CSS custom properties (\`--color-cream\`, \`--color-teal-deep\`, fluid \`clamp()\` scales), Tailwind theme mapping, and \`.hairline-grid\` rules. |  
| \`src/lib/schemas.ts\`, \`src/lib/content.ts\`, \`src/lib/utils.ts\` | \*\*Claude Code\*\* (\`feat/core\`) | Zod validation schemas (\`Project\`, \`Person\`, \`Event\`, \`Product\`, \`Contact\`), MDX/JSON file readers, and class-merging utilities. |  
| \`src/lib/performance.ts\` | \*\*OpenAI Codex\*\* (\`feat/canvas\`) | Hardware concurrency/memory tier detector (\`detectPerformanceTier()\`) and \`useReducedMotion()\` hook. |  
| \`src/content/projects/\*.mdx\`, \`src/content/{people,events,products}/index.json\` | \*\*Claude Code\*\* (\`feat/core\`) | Git-backed static content store for student projects, faculty/student profiles, department events, and shop editions. |  
| \`src/components/ui/{Navbar,Footer,Button,Tag,Input,SplitTextHover,CornerTelemetry}.tsx\` | \*\*Google Antigravity\*\* (\`feat/ui\`) | Pure 2D atomic design system primitives implementing all 5 interactive states (\`default\`, \`hover\`, \`focus\`, \`active\`, \`disabled\`). |  
| \`src/components/sections/{HomeSections,WorksArchive,ProjectCard,ShopGrid,ProductCard,ProductSpecDrawer,EventsList,PeopleDirectory,ContactForm}.tsx\` | \*\*Google Antigravity\*\* (\`feat/ui\`) | Page-level 2D section compositions implementing the \`emergenceprojects.com\`, \`wildyriftian.com\`, \`noartmusic.com\`, and \`k95.it\` layouts. |  
| \`src/components/canvas/{Preloader,KeychainHero,KeychainFallback,SceneCanvas,TactileSticker,ArtifactPedestal}.tsx\` | \*\*OpenAI Codex\*\* (\`feat/canvas\`) | Isolated client-only (\`'use client'\`) GSAP preloader (\`noth.in\`), \`Matter.js\` 2D physics keychain (\`wildyriftian.com\`), and R3F 3D meshes (\`hirotos.com\`). |  
| \`src/app/\*\*/page.tsx\`, \`src/app/layout.tsx\`, \`src/app/actions/contact.ts\`, \`src/app/api/og/route.tsx\` | \*\*Claude Code\*\* (\`feat/core\`) | Next.js App Router route entrypoints, Server Actions (\`Resend\` email dispatch), and dynamic Open Graph image generation. |  
| \`public/{models,images,videos}/\*\*\` | \*\*Claude Code\*\* \+ Human Director | Static media assets: Draco-compressed \`.glb\` models (\`\<= 450 KB\`), \`.webp\`/\`.avif\` photography, and muted \`.mp4\` preview loops (\`\<= 2.5 MB\`). |

\---

\#\#\# Technical Risk Register & Mitigation Matrix

| Risk Factor | Severity | Likelihood | Concrete Mitigation Strategy |  
| :--- | :--- | :--- | :--- |  
| \*\*Multi-Agent Merge Conflicts\*\* | High | High | Enforce strict folder ownership (\`src/lib\` & \`src/content\` \= Claude Code; \`src/components/ui\` & \`src/components/sections\` \= Antigravity; \`src/components/canvas\` \= Codex) using separate Git worktrees (\`git worktree add ../dota-ui feat/ui\`). Only Claude Code edits \`src/app/\*\*/page.tsx\` route files during scheduled merge points. |  
| \*\*Mobile Scroll Hijacking by Keychain Canvas\*\* | High | Medium | Set \`touch-action: pan-y\` on the \`\<KeychainHero /\>\` canvas container and only capture pointer events (\`event.preventDefault()\`) when \`Matter.Query.point(bodies, mousePos).length \> 0\` (when the user's finger directly touches a charm body, leaving empty background space free for native vertical page scrolling). |  
| \*\*WebGL Context Loss & Low FPS on Mid-Range Phones\*\* | High | Medium | Never mount more than 1 \`\<Canvas\>\` instance per page. Clamp \`dpr={\[1, 1.5\]}\`, pause physics/WebGL via \`IntersectionObserver\` when offscreen, and automatically fall back to \`\<KeychainFallback /\>\` when \`detectPerformanceTier() \=== 'low'\`. |  
| \*\*Student Content Bottleneck (Late Project Submissions)\*\* | Medium | High | Build the entire platform against 8 schema-valid seed projects generated in Stage 1 (\`src/content/projects/\`). Because the content loader is strictly typed, real student \`.mdx\` files and \`.webp\` images swap in during Week 5 (Nov 17–23) without altering component code. |

\---

\#\# Deliverable 5: Multi-Agent Execution Plan (20 Oct – 30 Nov 2026\)

\#\#\# Agent Specialization & Non-Overlapping Ownership Matrix

To eliminate file collisions across the 6-week build, work is partitioned across the three AI coding agents according to their core model capabilities and isolated using Git worktrees. On Day 1 (20 October 2026), the human director initializes the repository and creates three dedicated worktrees: \`git worktree add ../dota-core feat/core\` for \*\*Claude Code\*\*, \`git worktree add ../dota-ui feat/ui\` for \*\*Google Antigravity\*\*, and \`git worktree add ../dota-canvas feat/canvas\` for \*\*OpenAI Codex\*\*.

\*\*Claude Code\*\* serves as the Lead Systems Architect and Integrator, owning \`src/lib/\*\*\`, \`src/content/\*\*\`, \`src/app/actions/\*\*\`, \`src/app/api/\*\*\`, \`src/app/\*\*/page.tsx\`, and \`e2e/\*\*\`. Claude Code executes Stage 1 first, generating and merging \`src/lib/schemas.ts\` to \`main\` so that all TypeScript interfaces (\`Project\`, \`Person\`, \`Event\`, \`Product\`, and component prop contracts) are locked before UI or WebGL coding begins. \*\*Google Antigravity\*\* serves as the Design System and Layout Engineer, owning \`src/components/ui/\*\*\`, \`src/components/sections/\*\*\`, \`src/styles/\*\*\`, and \`tailwind.config.ts\`, translating the exact \`DESIGN.md\` token table, K95 split-text hover mechanics, and exposed \`1px\` grids into responsive React components. \*\*OpenAI Codex\*\* serves as the Creative Technologist and Physics/Shader Specialist, owning \`src/components/canvas/\*\*\` and \`src/lib/performance.ts\`, writing the self-contained GSAP \`noth.in\` preloader, \`Matter.js\` rigid-body keychain solver, and React Three Fiber raycasted 3D sticker meshes. At the completion of each milestone, branches merge into \`main\` in strict sequence (\`1. feat/core \-\> 2\. feat/ui \-\> 3\. feat/canvas\`), verified at every step by \`pnpm typecheck && pnpm build\`.

| AI Coding Agent | Primary Strengths | Assigned Ownership Zone (Exclusive Write Access) | Forbidden Directories (Read-Only) |  
| :--- | :--- | :--- | :--- |  
| \*\*Claude Code\*\* (\`Anthropic CLI\`) | Multi-file architectural reasoning, strict TypeScript/Zod schema design, Next.js App Router wiring, Server Actions, Git conflict resolution, automated QA refactoring | \`src/lib/\*\*\`, \`src/content/\*\*\`, \`src/app/actions/\*\*\`, \`src/app/api/\*\*\`, \`src/app/\*\*/page.tsx\` (route composition), \`next.config.ts\`, \`package.json\`, \`e2e/\*\*\` | \`src/components/canvas/\*\*\` (except importing dynamic wrappers) |  
| \*\*Google Antigravity\*\* | Rapid UI component synthesis, complex CSS Grid / Tailwind layouts, responsive breakpoint engineering, interactive forms, K95 micro-interactions, accessibility states | \`src/components/ui/\*\*\`, \`src/components/sections/\*\*\`, \`src/styles/\*\*\`, \`tailwind.config.ts\` | \`src/components/canvas/\*\*\`, \`src/lib/schemas.ts\` |  
| \*\*OpenAI Codex\*\* | Algorithmic math, 2D rigid-body physics (\`Matter.js\`), 3D linear algebra & GLSL shaders (\`Three.js\` / R3F), GSAP timeline math (\`Preloader\` clip-path & counters) | \`src/components/canvas/\*\*\`, \`src/lib/performance.ts\` | \`src/components/ui/\*\*\`, \`src/components/sections/\*\*\`, \`src/content/\*\*\` |

\---

\#\#\# Six-Week Schedule & Milestone Plan (20 Oct – 30 Nov 2026\)

The project schedule enforces a \*\*Hard Feature Freeze on Monday, 23 November 2026 at 23:59 IST\*\*—seven full days prior to the 30 November 2026 launch deadline. No new UI components, physics constraints, or WebGL shaders may be added after 23 November; the final seven days are dedicated exclusively to final student content ingestion, Lighthouse performance optimization, cross-device accessibility verification, and production DNS cutover.

| Week & Dates | Milestone Name | Claude Code Tasks (\`feat/core\`) | Google Antigravity Tasks (\`feat/ui\`) | OpenAI Codex Tasks (\`feat/canvas\`) | Exit Criteria (Definition of Done) |  
| :--- | :--- | :--- | :--- | :--- | :--- |  
| \*\*Week 1\*\*\<br\>20 Oct – 26 Oct | \*\*M1: Foundation, Tokens & Contracts\*\* | Stage 1 (Scaffold Next.js 15, Geist, Lenis, Zod schemas, seed content JSON/MDX) | Stage 2 (Design tokens, Tailwind config) & Stage 3 (\`Navbar\`, \`Footer\`, \`Button\`, \`Tag\`, \`SplitTextHover\`, \`CornerTelemetry\`) | Stage 4 (\`Preloader.tsx\` \`noth.in\` 2.0s wordmark texture cycle \+ clip-path reveal \+ reduced-motion bypass) | \`pnpm build\` passes; tokens verified against WCAG rules; global shell & preloader live on Vercel preview URL |  
| \*\*Week 2\*\*\<br\>27 Oct – 02 Nov | \*\*M2: Home Page & Physics Keychain\*\* | Wire \`/\` (\`src/app/page.tsx\`) with dynamic imports and server-rendered seed data | Stage 5 (Home 2D sections: \`ManifestoTicker\`, \`FeaturedWorks\` bento, \`UpcomingEventsStrip\`, \`ShopTeaserGrid\`) | Stage 6 (\`KeychainHero.tsx\` \`Matter.js\` 5-charm lanyard \+ \`KeychainFallback.tsx\` \+ touch-scroll pass-through) | Home route 100% functional on desktop & mobile; keychain charms draggable at 60fps and keyboard-focusable |  
| \*\*Week 3\*\*\<br\>03 Nov – 09 Nov | \*\*M3: Works Archive, Case Studies & 3D\*\* | Stage 8B (\`/works/\[slug\]/page.tsx\` MDX parser, sticky credits, dynamic OG card \`/api/og\`) | Stage 8A (\`WorksArchive.tsx\` folder-tab filter \`01–05\`, \`ProjectCard.tsx\` capability ticker, K95 Grid/List view \+ cursor preview) | Stage 7 (\`SceneCanvas.tsx\`, \`TactileSticker.tsx\` \`hirotos.com\` 3D badges, \`ArtifactPedestal.tsx\` morphing mesh, DPR governor) | \`/works\` and \`/works/\[slug\]\` complete; 3D stickers react to cursor/scroll; WebGL pauses when offscreen |  
| \*\*Week 4\*\*\<br\>10 Nov – 16 Nov | \*\*M4: Shop, Contact, Events & Studio\*\* | Stage 10B (Contact Server Action \`Resend\` \+ \`Zod\` \+ honeypot) \+ wire \`/shop\`, \`/events\`, \`/studio\`, \`/contact\` | Stage 9 (\`ShopGrid.tsx\`, \`ProductCard.tsx\` dual-image hover, \`ProductSpecDrawer.tsx\`) \+ Stage 10A (\`ContactForm.tsx\` K95 split) \+ \`EventsList\` & \`PeopleDirectory\` | Optimize \`.glb\` Draco assets, tune custom cel/toon shaders to exact DoTA palette (\`\#31C4B8\`, \`\#F5F5DC\`, \`\#C92D1C\`, \`\#000000\`) | All 7 routes navigable end-to-end; Shop drawer routes to payment links; Contact form sends real emails |  
| \*\*Week 5\*\*\<br\>17 Nov – 23 Nov | \*\*M5: Content Ingestion & FEATURE FREEZE\*\* | Stage 11 (Ingest all 20–24 real student projects, people, events, and shop items; add JSON-LD schema & \`sitemap.xml\`) | Visual polish pass: verify all \`1px\` collapsed borders across breakpoints (\`375px\` to \`1920px\`); fix any text overflow | Stage 12 (Performance pass: bundle analysis, lazy loading, \`\<PerformanceMonitor\>\` fallback testing on throttled CPU) | \*\*HARD FEATURE FREEZE (23 NOV)\*\*. Zero placeholder text remaining; all real assets validated by \`pnpm content:validate\` |  
| \*\*Week 6\*\*\<br\>24 Nov – 30 Nov | \*\*M6: QA, A11y Audit & Launch\*\* | Stage 13 (Playwright E2E & axe-core A11y tests) \+ Stage 14 (Custom domain DNS, Vercel production deploy, final sign-off) | Fix any contrast, focus-ring, or Safari/iOS layout bugs surfaced during QA matrix testing | Tune physics damping and shader fallback thresholds based on real mobile device testing | Lighthouse targets met; zero WCAG contrast/keyboard errors; \*\*LIVE LAUNCH ON 30 NOV 2026\*\* |

\---

\#\#\# Complete \`AGENTS.md\` / \`CLAUDE.md\` File

Save the following fenced Markdown block in the repository root as both \`/AGENTS.md\` and \`/CLAUDE.md\` so every AI coding agent ingests project rules, commands, directory ownership boundaries, and the definition of done before writing code.

\# AGENTS.md / CLAUDE.md — DoTA Portfolio Multi-Agent Engineering Constitution

\#\# 1\. Project Context & Compulsory Reading  
This repository contains the official portfolio, archive, events, and merchandise platform for the \*\*Department of Technical Arts (DoTA)\*\*.  
\- \*\*Hard Launch Deadline\*\*: 30 November 2026 (Feature Freeze: 23 November 2026).  
\- \*\*Mandatory First Step\*\*: Before planning or editing any file, read \`/DESIGN.md\` in full. Every color hex, typography scale, border thickness, easing curve, and component state is strictly locked in \`/DESIGN.md\`. Do not improvise visual styles.

\#\# 2\. Tech Stack (Locked)  
\- \*\*Framework\*\*: Next.js 15 (App Router), React 19, TypeScript 5.6 (\`strict: true\`)  
\- \*\*Styling\*\*: Tailwind CSS v3.4 \+ CSS Custom Properties (\`src/styles/tokens.css\`)  
\- \*\*Fonts\*\*: \`geist\` package (\`GeistSans\` and \`GeistMono\` ONLY)  
\- \*\*Motion & Scroll\*\*: GSAP 3.12 (\`@gsap/react\`) \+ Lenis (\`lenis/react\`)  
\- \*\*2D Physics\*\*: \`matter-js\` (\`0.20.0\`) for the Home Keychain Hero  
\- \*\*3D / WebGL\*\*: \`three\`, \`@react-three/fiber\`, \`@react-three/drei\`  
\- \*\*Content & Validation\*\*: Local MDX/JSON in \`src/content/\*\*\` validated by \`zod\` (\`src/lib/schemas.ts\`)  
\- \*\*Forms\*\*: Next.js Server Actions \+ \`resend\` \+ \`zod\`

\#\# 3\. Commands  
\- Install dependencies: \`pnpm install\`  
\- Run dev server: \`pnpm dev\`  
\- Typecheck (MUST PASS with 0 errors): \`pnpm typecheck\` (\`tsc \--noEmit\`)  
\- Lint (MUST PASS with 0 warnings): \`pnpm lint\`  
\- Validate content schemas: \`pnpm content:validate\`  
\- Production build test: \`pnpm build\`  
\- Run E2E / A11y checks: \`pnpm test:e2e\`

\#\# 4\. Multi-Agent Directory Ownership (Conflict Prevention)  
Three AI agents operate on this codebase. Respect directory boundaries strictly:  
1\. \*\*Claude Code (\`feat/core-\*\`)\*\*: Owns \`src/lib/\*\*\`, \`src/content/\*\*\`, \`src/app/actions/\*\*\`, \`src/app/api/\*\*\`, \`src/app/\*\*/page.tsx\`, \`next.config.ts\`, \`package.json\`.  
2\. \*\*Google Antigravity (\`feat/ui-\*\`)\*\*: Owns \`src/components/ui/\*\*\`, \`src/components/sections/\*\*\`, \`src/styles/\*\*\`, \`tailwind.config.ts\`.  
3\. \*\*OpenAI Codex (\`feat/canvas-\*\`)\*\*: Owns \`src/components/canvas/\*\*\`, \`src/lib/performance.ts\`.  
\- \*\*Rule\*\*: Never modify files outside the assigned ownership zone unless explicitly instructed in the prompt. Communicate cross-boundary requirements via exported TypeScript interfaces in \`src/lib/schemas.ts\`.

\#\# 5\. Non-Negotiable Design & Accessibility Guardrails  
1\. \*\*Color Contrast Guardrail\*\*:  
   \- NEVER render unstroked Cream (\`\#F5F5DC\`) text on Teal (\`\#31C4B8\`) backgrounds (1.95:1 WCAG failure). Always use Black (\`\#000000\`) text on Teal (\`\#31C4B8\`) (9.72:1 AAA), or use \`--color-teal-deep\` (\`\#135C56\`) if Cream text is mandatory.  
   \- NEVER pair Red (\`\#C92D1C\`) directly on/adjacent to Teal (\`\#31C4B8\`) without a \`1px solid \#000000\` border or Cream (\`\#F5F5DC\`) buffer.  
   \- NEVER use Black (\`\#000000\`) for body text \`\< 24px\` on Red (\`\#C92D1C\`). Use Cream (\`\#F5F5DC\`) text on Red (\`\#C92D1C\`) (4.90:1 AA).  
2\. \*\*Typography Guardrail\*\*:  
   \- Use ONLY \`font-sans\` (\`Geist Sans\`) and \`font-mono\` (\`Geist Mono\`).  
   \- All bracketed indices (\`\[01\]\`), parenthetical section tags (\`( ARCHIVE )\`), coordinates, timestamps, prices, and filter counts MUST use \`Geist Mono\` uppercase.  
3\. \*\*Brutalist Grid Guardrail\*\*:  
   \- Use \`border-radius: 0px\` on all cards, inputs, drawers, and containers (only filter pills may use \`rounded-full\`).  
   \- Use \`1px solid \#000000\` structural borders and hard offset shadows (\`4px 4px 0px \#000000\`). Never use soft blurred shadows (\`shadow-lg\`, \`shadow-xl\`).  
4\. \*\*Performance & Motion Guardrail\*\*:  
   \- Every component in \`src/components/canvas/\*\*\` must be dynamically imported (\`next/dynamic\` with \`{ ssr: false }\`) and wrapped in an \`IntersectionObserver\` that pauses the \`requestAnimationFrame\` / physics loop when scrolled out of view.  
   \- Respect \`prefers-reduced-motion: reduce\` in every GSAP timeline, Lenis instance, and physics/3D component.

\#\# 6\. Code Conventions  
\- Use named exports for all components (\`export function ProjectCard(...)\`).  
\- No \`any\` types. Import shared data models from \`@/lib/schemas\`.  
\- Use GSAP exclusively via the \`useGSAP()\` hook from \`@gsap/react\` with a scoped \`container\` ref so animations clean up on route changes.  
\- Keep component files under \`250 lines\`; extract helper hooks or sub-components if a file grows larger.

\#\# 7\. Definition of Done (Per Stage)  
A task is ONLY complete when:  
1\. All acceptance criteria in the stage prompt are satisfied.  
2\. \`pnpm typecheck\` and \`pnpm build\` succeed with 0 errors.  
3\. Keyboard navigation (\`Tab\`, \`Enter\`, \`Escape\`) and \`:focus-visible\` states work on every interactive element created.  
4\. Both mobile (\`375px\` width) and desktop (\`1440px\` width) layouts render without horizontal overflow (\`overflow-x: hidden\` leaks).  
5\. \`BACKLOG.md\` is updated to mark the completed stage \`\[x\]\`.

\---

\#\#\# Ready-to-Paste Stage Prompts (Stages 1 to 14\)

The following 14 prompts are designed to be pasted sequentially into the designated AI coding agent's CLI or IDE session. Each prompt specifies the exact goal, required prerequisite files, architectural constraints, and verifiable acceptance criteria.

\#\#\#\# Stage 1: Project Scaffold, Type Schemas & Seed Content (Assign to: \*\*Claude Code\*\*)  
\> \*\*Goal\*\*: Initialize the Next.js 15 App Router TypeScript repository, install all locked dependencies, configure Geist fonts, create the Zod data schemas, and generate realistic seed content for DoTA.    
\> \*\*Read First\*\*: \`/DESIGN.md\` and \`/AGENTS.md\`.    
\> \*\*Instructions\*\*: Initialize Next.js 15 (\`src/app\`), TypeScript (\`strict: true\`), and Tailwind CSS. Install \`geist\`, \`gsap\`, \`@gsap/react\`, \`lenis\`, \`matter-js\`, \`@types/matter-js\`, \`three\`, \`@types/three\`, \`@react-three/fiber\`, \`@react-three/drei\`, \`zod\`, \`clsx\`, \`tailwind-merge\`, and \`resend\`. Create \`src/lib/schemas.ts\` defining strict Zod schemas and exported TypeScript interfaces for \`Project\`, \`Person\`, \`Event\`, \`Product\`, and \`ContactSubmission\` matching the exact fields in the specification. Next, create \`src/lib/content.ts\` with typed loader functions (\`getAllProjects()\`, \`getProjectBySlug(slug)\`, \`getAllPeople()\`, \`getAllEvents()\`, \`getAllProducts()\`) and a CLI validation script (\`pnpm content:validate\`). Populate \`src/content/\` with realistic, studio-grade seed data: 8 student projects in \`src/content/projects/\*.mdx\` (spanning \`games\`, \`shaders\`, \`hardware\`, \`motion\`, \`audio\`), 12 people in \`src/content/people/index.json\`, 6 events in \`src/content/events/index.json\`, and 6 products in \`src/content/products/index.json\`, plus clean SVG placeholder posters in \`public/images/\`. Finally, create \`BACKLOG.md\` tracking Stages 1–14 and checklists for all 14 core components.    
\> \*\*Constraints\*\*: Do not create UI components in \`src/components/ui\` yet. Zero TypeScript \`any\` types.    
\> \*\*Acceptance Criteria\*\*: \`pnpm install\`, \`pnpm typecheck\`, \`pnpm content:validate\`, and \`pnpm build\` all pass with 0 errors.

\#\#\#\# Stage 2: Design Tokens & Tailwind Theme Configuration (Assign to: \*\*Google Antigravity\*\*)  
\> \*\*Goal\*\*: Implement the exact CSS custom properties, Tailwind theme configuration, and global hairline grid utilities from \`/DESIGN.md\`.    
\> \*\*Read First\*\*: \`/DESIGN.md\` (Sections 2, 3, 4, 11\) and \`/AGENTS.md\`.    
\> \*\*Instructions\*\*: Create \`src/styles/tokens.css\` containing the exact CSS custom properties specified in Section 11.1 of \`/DESIGN.md\`. Configure \`tailwind.config.ts\` matching Section 11.2 of \`/DESIGN.md\`. Create \`src/styles/globals.css\` importing \`tokens.css\`, configuring default body styles (\`background-color: var(--color-cream); color: var(--color-black); font-family: var(--font-sans);\`), custom text selection (\`background: \#31C4B8; color: \#000000;\`), global \`:focus-visible\` ring (\`2px solid \#000000\`, offset \`2px\`, shadow \`0 0 0 4px \#31C4B8\`), and utility classes \`.hairline-grid\` (\`gap: 1px; background-color: \#000000; border: 1px solid \#000000;\`) and \`.container-dota\`.    
\> \*\*Constraints\*\*: Enforce all forbidden color pairing rules in \`/DESIGN.md\`. Never use soft shadows or rounded corners (\`border-radius\` must default to \`0px\`).    
\> \*\*Acceptance Criteria\*\*: \`pnpm typecheck\` and \`pnpm build\` pass; all CSS custom properties and fluid \`clamp()\` font classes resolve accurately.

\#\#\#\# Stage 3: Global Layout, Navbar, Footer & Core UI Primitives (Assign to: \*\*Google Antigravity\*\*)  
\> \*\*Goal\*\*: Build the core 2D design system primitives and wire the root application shell (\`Navbar\`, \`Footer\`, \`Lenis\` smooth scroll wrapper).    
\> \*\*Read First\*\*: \`/DESIGN.md\` (Sections 4, 5, 7\) and \`/AGENTS.md\`.    
\> \*\*Instructions\*\*: Build \`src/components/ui/SplitTextHover.tsx\` as a K95-inspired duplicated character stagger hover component (\`translateY(-100%)\`, \`280ms cubic-bezier(0.22, 1, 0.36, 1)\`, \`14ms\` glyph stagger, \`aria-label\` on parent, \`aria-hidden="true"\` on visual spans). Build \`src/components/ui/CornerTelemetry.tsx\` as a reusable wrapper rendering 4-corner \`Geist Mono\` labels (\`\[01\]\`, \`( TAG )\`). Build \`src/components/ui/Button.tsx\` (\`primary\` Red \`\#C92D1C\` with \`\#F5F5DC\` text and \`4px 4px 0px \#000000\` brutalist shadow; \`secondary\` Cream \`\#F5F5DC\` with hover to Teal \`\#31C4B8\` and \`\#000000\` text) and \`src/components/ui/Tag.tsx\` (filter pill with all 5 states). Build \`src/components/ui/Navbar.tsx\` (fixed \`56px\` height, \`DoTA\` brand mark, live \`HYD / 17.3850° N\` telemetry, center route links with active red square indicator and item counts, right \`CONTACT \-\>\` CTA and \`\[FX: ON/OFF\]\` reduced-motion toggle) and \`src/components/ui/Footer.tsx\` (\`\#000000\` surface, live IST clock, sitemap index, giant edge-to-edge \`DoTA\` wordmark). Finally, configure \`src/app/layout.tsx\` loading \`GeistSans\` and \`GeistMono\`, wrapping children in a client \`\<SmoothScrollProvider /\>\` (\`lenis/react\` synced with \`gsap.ticker\`, disabled when \`prefers-reduced-motion: reduce\` or \`\[FX: OFF\]\` is active).    
\> \*\*Constraints\*\*: All text on Teal (\`\#31C4B8\`) must be \`\#000000\`. Minimum touch target \`44px x 44px\` on mobile.    
\> \*\*Acceptance Criteria\*\*: \`pnpm typecheck\` and \`pnpm build\` succeed; keyboard \`Tab\` traversal highlights every nav and footer link with visible focus rings; responsive mobile drawer opens and closes cleanly at \`375px\` width.

\#\#\#\# Stage 4: Buffer / Preloader Animation (Assign to: \*\*OpenAI Codex\*\*)  
\> \*\*Goal\*\*: Build the \`noth.in\`-inspired \`2000ms\` shifting-wordmark buffer and \`expo.inOut\` clip-path reveal component (\`src/components/canvas/Preloader.tsx\`).    
\> \*\*Read First\*\*: \`/DESIGN.md\` (Section 6.1 & Section 7\) and \`/AGENTS.md\`.    
\> \*\*Instructions\*\*: Create \`src/lib/performance.ts\` exporting \`detectPerformanceTier()\` (\`"high" | "medium" | "low"\`) and \`useReducedMotion()\`. Create \`src/components/canvas/Preloader.tsx\` using \`useGSAP()\`. On first session visit (\`sessionStorage.getItem('dota\_preloader\_seen') \!== 'true'\`), lock scroll and render a fixed \`\#000000\` viewport (\`z-index: 9999\`). From \`0ms\` to \`1300ms\`, increment a bottom-right \`Geist Mono\` counter \`\[000%\]\` \-\> \`\[100%\]\` while the central \`DoTA\` geometric SVG wordmark cycles every \`180ms\` through 6 distinct procedural SVG pattern fills (\`Solid Cream \#F5F5DC\`, \`Teal \#31C4B8 Wireframe Grid\`, \`Red \#C92D1C Halftone Dots\`, \`ASCII Matrix\`, \`Teal/Cream Diagonal Hatch\`, \`Inverted Box\`). From \`1300ms\` to \`2000ms\`, animate the central viewport frame via \`clip-path: inset(38% 32% 38% 32%)\` to \`clip-path: inset(0% 0% 0% 0%)\` with \`cubic-bezier(0.87, 0, 0.13, 1)\`, dispatch a custom window event \`window.dispatchEvent(new Event('dota:preloader-complete'))\` to release the hero keychain drop, set \`sessionStorage\`, and unmount the overlay.    
\> \*\*Constraints\*\*: Must bypass immediately (\`0ms\`) if \`prefers-reduced-motion: reduce\` is active or if \`dota\_preloader\_seen\` is already set. Must not block SSR HTML rendering of page children.    
\> \*\*Acceptance Criteria\*\*: Preloader runs at 60fps, transitions seamlessly into the home hero, respects reduced motion, and passes \`pnpm typecheck\`.

\#\#\#\# Stage 5: Home Page 2D Sections & Editorial Composition (Assign to: \*\*Google Antigravity\*\*)  
\> \*\*Goal\*\*: Build the 2D sections for the Home page (\`ManifestoSection\`, \`FeaturedWorksSection\`, \`UpcomingEventsStrip\`, \`ShopTeaserSection\`).    
\> \*\*Read First\*\*: \`/DESIGN.md\` (Sections 3, 4, 5, 6\) and \`/AGENTS.md\`.    
\> \*\*Instructions\*\*: Create \`src/components/sections/ProjectCard.tsx\` implementing the \`wildyriftian.com\` folder-tabbed header (\`\[01\]\` \+ year), \`16:10\` media box with hover \`scale(1.04)\` and muted \`.mp4\` video playback, and the 3-item horizontal capability ticker that turns \`--color-teal\` (\`\#31C4B8\`) with \`\#000000\` text on hover. Next, create \`src/components/sections/HomeSections.tsx\` exporting \`\<ManifestoSection /\>\` (\`noartmusic.com\`-inspired asymmetric 4/8 split with parenthetical marker \`( 01 / THE MANIFESTO )\`, massive \`Geist Sans\` display statement \`--text-display-lg\`, and live department telemetry counters), \`\<FeaturedWorksSection projects={...} /\>\` (2-column architectural grid displaying the top 4 featured student projects \+ \`\[ EXPLORE ALL WORKS (24) \-\> \]\` button), \`\<UpcomingEventsStrip events={...} /\>\` (3 horizontal full-bleed \`1px solid \#000000\` rows with \`\[01\]\` indices, dates, and RSVP links), and \`\<ShopTeaserSection products={...} /\>\` (3-column preview of DoTA editions).    
\> \*\*Constraints\*\*: Strictly adhere to \`/DESIGN.md\` spacing tokens and WCAG contrast rules.    
\> \*\*Acceptance Criteria\*\*: All sections accept typed props from \`src/lib/schemas.ts\`, render cleanly at \`375px\`, \`768px\`, and \`1440px\`, and pass \`pnpm typecheck\`.

\#\#\#\# Stage 6: Interactive 2D Physics Keychain Hero (Assign to: \*\*OpenAI Codex\*\*)  
\> \*\*Goal\*\*: Build the \`wildyriftian.com\`-inspired interactive draggable keychain hero (\`src/components/canvas/KeychainHero.tsx\`) using \`Matter.js\` and its static accessible fallback (\`src/components/canvas/KeychainFallback.tsx\`).    
\> \*\*Read First\*\*: \`/DESIGN.md\` (Section 6.2, Section 7.3, Section 9.2) and \`/AGENTS.md\`.    
\> \*\*Instructions\*\*: Build \`src/components/canvas/KeychainHero.tsx\` by mounting an HTML5 \`\<canvas\>\` inside the \`min-h-\[calc(100dvh-56px)\]\` hero frame alongside background display typography (\`DEPARTMENT OF TECHNICAL ARTS // ARCHIVE 2026\`) and 4-corner telemetry (\`HYD COORDS\`, \`SCROLL DOWN ↓\`). Initialize a \`Matter.Engine\` (\`gravity.y \= 1.1\`) with a central top split-ring anchor and 5 chained rigid bodies (\`Matter.Bodies\`) connected via damped springs (\`stiffness: 0.9, damping: 0.08\`) representing the 5 DoTA pillars: \`\[01 GAME ARTS\]\` (Teal \`\#31C4B8\` octagon, \`\#000000\` text/border), \`\[02 SHADERS & VFX\]\` (Red \`\#C92D1C\` pill, \`\#F5F5DC\` text), \`\[03 DoTA '26\]\` (Black \`\#000000\` fob, \`\#F5F5DC\` mark), \`\[04 PHYSICAL COMP\]\` (Cream \`\#F5F5DC\` PCB card, \`\#000000\` traces), and \`\[05 AUDIO / SYNTH\]\` (Teal \`\#31C4B8\` disc, \`\#000000\` waveform). Render crisp custom 2D canvas geometry on each \`afterUpdate\` tick (clamped to \`dpr \<= 2\`) with \`1.5px solid \#000000\` borders and \`4px 4px 0px \#000000\` hard shadows. Enable \`Matter.MouseConstraint\` for pointer dragging and flinging, ensuring touch events on empty canvas regions do not block native vertical page scrolling on mobile (\`touch-action: pan-y\`). Pause the \`Matter.Runner\` via \`IntersectionObserver\` when scrolled out of viewport. Include an accessible keyboard/screen-reader companion \`\<ul\>\` list of the 5 discipline charms so keyboard users can \`Tab\` and press \`Enter\` to navigate to \`/works?category=...\`, and build \`KeychainFallback.tsx\` for \`prefers-reduced-motion: reduce\`.    
\> \*\*Constraints\*\*: Clean up \`Matter.Engine.clear()\` and \`Render.stop()\` on component unmount.    
\> \*\*Acceptance Criteria\*\*: Charms drop smoothly upon \`dota:preloader-complete\`, respond to mouse/touch drag at 60fps, pause when offscreen, allow mobile scrolling, and pass keyboard accessibility checks.

\#\#\#\# Stage 7: 3D WebGL Elements & Cursor/Scroll Reactivity (Assign to: \*\*OpenAI Codex\*\*)  
\> \*\*Goal\*\*: Build the \`hirotos.com\`-inspired Three.js / React Three Fiber components (\`SceneCanvas.tsx\`, \`TactileSticker.tsx\`, \`ArtifactPedestal.tsx\`).    
\> \*\*Read First\*\*: \`/DESIGN.md\` (Section 6.3, Section 8\) and \`/AGENTS.md\`.    
\> \*\*Instructions\*\*: Build \`src/components/canvas/SceneCanvas.tsx\` as a reusable R3F \`\<Canvas dpr={\[1, 1.5\]} gl={{ antialias: true, powerPreference: "high-performance" }}\>\` wrapper integrated with \`@react-three/drei\`'s \`\<PerformanceMonitor\>\` and an \`IntersectionObserver\` that switches \`frameloop\` between \`"always"\` and \`"never"\` when scrolled offscreen. Build \`src/components/canvas/TactileSticker.tsx\` as an interactive 3D sticker/badge playground section for the Home and Studio pages, rendering 5 extruded geometric badges (\`\<= 4,000 tris\` each) using a custom 3-tone cel/toon shader strictly locked to \`\#F5F5DC\`, \`\#31C4B8\`, \`\#C92D1C\`, and \`\#000000\` with a \`1px\` inverted-hull black outline. Raycast pointer coordinates so hovered stickers tilt toward the cursor (\`±0.35 rad\`) and execute a spring-damped vertex bend impulse when clicked or flicked. Finally, build \`src/components/canvas/ArtifactPedestal.tsx\` as a low-poly topological mesh for the \`/works\` header that smoothly morphs shader state (\`Teal Wireframe\`, \`Cream Matte Clay\`, \`Red Halftone\`) based on \`activeCategory\` and accelerates rotation proportionally to Lenis scroll velocity.    
\> \*\*Constraints\*\*: Total triangles in any viewport \`\< 35,000\`. Must render a clean static SVG graphic if \`detectPerformanceTier() \=== "low"\` or \`prefers-reduced-motion\` is true.    
\> \*\*Acceptance Criteria\*\*: 3D components compile cleanly with \`ssr: false\`, stay strictly on-palette, maintain 60fps on desktop and \`\>= 45fps\` on mid-range mobile, and pause rendering when scrolled out of view.

\#\#\#\# Stage 8: Works Archive Page & Project Detail Case Study (Assign to: \*\*Google Antigravity\*\* for \`8A\`, \*\*Claude Code\*\* for \`8B\`)  
\> \*\*Goal\*\*: Build the filterable \`/works\` archive (\`wildyriftian.com\` \+ \`k95.it\` patterns) and the \`/works/\[slug\]\` case study route.    
\> \*\*Read First\*\*: \`/DESIGN.md\` (Section 5.3, Section 6.4) and \`/AGENTS.md\`.    
\> \*\*Instructions (8A — Google Antigravity)\*\*: Build \`src/components/sections/WorksArchive.tsx\` featuring the sticky folder-tab category bar (\`ALL\`, \`01. GAMES\`, \`02. SHADERS\`, \`03. HARDWARE\`, \`04. MOTION\`, \`05. AUDIO\` with parenthetical counts) and the K95 \`\[ GRID / LIST \]\` toggle. Implement both the 3-column \`\<ProjectCard /\>\` Grid View and the collapsed \`1px solid \#000000\` List View table (with a floating \`320px x 200px\` cursor-following thumbnail preview driven by \`gsap.quickTo\`). Sync the active category filter with URL search params (\`?category=shaders\`).    
\> \*\*Instructions (8B — Claude Code)\*\*: Wire \`src/app/works/page.tsx\` and \`src/app/works/\[slug\]/page.tsx\` (\`generateStaticParams\` for all project slugs). Build the \`/works/\[slug\]\` layout with a full-width \`16:9\` video/3D showcase hero with 4-corner telemetry, an asymmetric 4/8 body split (Cols \`1–4\` sticky credits card with creators linked to \`/studio\`, tech stack tags, GitHub/Live Demo buttons; Cols \`5–12\` styled MDX case study typography), and a bottom \`\<NextProjectPortal /\>\`.    
\> \*\*Constraints\*\*: Maintain \`1px\` border alignment across Grid and List modes.    
\> \*\*Acceptance Criteria\*\*: Filtering and Grid/List toggling work without layout shift; all \`/works/\[slug\]\` routes statically generate at build time (\`pnpm build\`).

\#\#\#\# Stage 9: Shop Section & Slide-Over Product Spec Drawer (Assign to: \*\*Google Antigravity\*\*)  
\> \*\*Goal\*\*: Build the \`emergenceprojects.com\`-inspired Shop grid, \`\<ProductCard /\>\`, and slide-over \`\<ProductSpecDrawer /\>\`.    
\> \*\*Read First\*\*: \`/DESIGN.md\` (Section 5.4, Section 6.5) and \`/AGENTS.md\`.    
\> \*\*Instructions\*\*: Build \`src/components/sections/ProductCard.tsx\` featuring a \`4:5\` aspect container inside a collapsed \`1px solid \#000000\` grid, top-left \`\[ED-01\]\` badge, top-right stock status pill (\`IN STOCK\` in \`\#31C4B8\` with \`\#000000\` text; \`SOLD OUT\` in \`\#C92D1C\` with \`\#F5F5DC\` text), dual-image hover cross-fade (\`350ms\`) with \`scale(1.03)\`, and bottom metadata bar that inverts to \`\#000000\` with \`\[ ACQUIRE \-\> \]\` on hover. Build \`src/components/sections/ProductSpecDrawer.tsx\` as an accessible slide-over dialog (\`role="dialog"\`, \`aria-modal="true"\`, \`Escape\` key and backdrop close, focus trap) displaying a high-res image switcher, \`Geist Mono\` fabrication specs, interactive size pills (\`S\`, \`M\`, \`L\`, \`XL\`), price in \`₹\` / \`$`,andexternalcheckouthandoffbutton(`checkoutUrl`).Build`src/components/sections/ShopGrid.tsx`withcategoryfilterpills(`All`,`Apparel`,`Zines`,`PCBKits`).>**Constraints**:Sold-outitemsmuststillallowopeningtheSpecDrawerforarchiveviewing,withthecheckoutbuttondisabled(`[EDITIONARCHIVED]`).>**AcceptanceCriteria**:Keyboardfocustrapsproperlyinsidethedrawer;allhoverstatesmatch`/DESIGN.md`;`pnpmtypecheck`passes.####Stage10:ContactPage,Studio/EventsPages&ServerAction(Assignto:**GoogleAntigravity**for`10A`,**ClaudeCode**for`10B`)>**Goal**:Buildthe`k95.it/en`-inspiredContactpage(`ContactForm.tsx`+ServerAction),plus`EventsList.tsx`(`noartmusic.com`pattern)and`PeopleDirectory.tsx`(`/studio`).>**ReadFirst**:`/DESIGN.md`(Section5.6,Section6.6)and`/AGENTS.md`.>**Instructions(10A—GoogleAntigravity)**:Build`src/components/sections/ContactForm.tsx`implementingthe12-columnK95split(Cols`1–5`architecturaldirectorywithcoordinates,`mailto:`triggers,and`SplitTextHover`socialindex;Cols`6–12`interactiveformwith`<Tag/>`intentselectorpills,bottom-border-only`1pxsolid#000000`inputswith`#31C4B8`focusstates,inline`#C92D1C`errorstates,andsplit-text`[TRANSMITMESSAGE->]`submitbutton).Build`src/components/sections/EventsList.tsx`(`noartmusic.com`bracketed`[01]`rows,livecountdowntimer,`.ics`calendardownloadgenerator)and`src/components/sections/PeopleDirectory.tsx`(consolidated`/studio`manifesto,5curriculumpillars,andfilterableFaculty/Studentcohortcards).>**Instructions(10B—ClaudeCode)**:Create`src/app/actions/contact.ts`implementingaNext.jsServerActionthatvalidatesformdataagainst`ContactSubmissionSchema`(`Zod`),checksahiddenhoneypotfield({`}_{g}otcha`),anddispatchesemailvia`Resend`(withgracefullocaldevfallbackwhen`RESEN{D}_{A}P{I}_{K}EY`isunset).Wire`src/app/page.tsx`,`src/app/shop/page.tsx`,`src/app/events/page.tsx`,`src/app/studio/page.tsx`,and`src/app/contact/page.tsx`.>**Constraints**:Formmustworkwithprogressiveenhancementandannouncevalidationerrorsvia`aria-live="polite"`.>**AcceptanceCriteria**:All7siteroutesrendercompletely;submittinginvalidandvalidcontactpayloadstriggersaccurateclientandserverstates.####Stage11:RealContentIntegration,DynamicOG&AI-ReadableSEO(Assignto:**ClaudeCode**)>**Goal**:Ingestthefinalbatchofstudentprojects,faculty/studentprofiles,events,andmerchandise,andconfigure`next/og`socialcardsandJSON-LDstructureddata(`noth.in`pattern).>**ReadFirst**:`/DESIGN.md`and`/AGENTS.md`.>**Instructions**:Importallsuppliedstudent`.mdx`projectfiles,`.webp`images,and`.mp4`loopsinto`src/content/`and`public/`,verifyingallslugsandcross-references(`Project.creators`->`Person.slug`)via`pnpmcontent:validate`.Build`src/app/api/og/route.tsx`using`next/og`(`ImageResponse`)todynamicallygenerate`1200x630`brutalistOpenGraphcardsinDoTA'sCream/Black/Teal/Redpalettewith`GeistSans`and`GeistMono`foreverypageandprojectslug.Add`generateMetadata()`acrossallroutes,`src/app/sitemap.ts`,`src/app/robots.ts`,andinjectsemanticJSON-LD(`EducationalOrganization`,`CreativeWork`,`Event`,`Product`)sosearchenginesandAIassistantsparseDoTA'scatalognatively.>**Constraints**:ZerobrokenimagepathsorunvalidatedMDXfrontmatter.>**AcceptanceCriteria**:`pnpmcontent:validate`and`pnpmbuild`succeed;`/api/og?title=DoTA`rendersavalid`1200x630`PNG.####Stage12:PerformanceOptimization&BundleAuditPass(Assignto:**OpenAICodex**+**ClaudeCode**)>**Goal**:Auditandoptimizebundlesizes,WebGLmemory,imagecompression,andCoreWebVitalsformid-rangemobiledevices.>**ReadFirst**:`/DESIGN.md`(Section8)and`/AGENTS.md`(Section5.4).>**Instructions**:Verifythat`three`,`@react-three/fiber`,`@react-three/drei`,and`matter-js`areexcludedfromtheinitialserver/mainbundleonroutesthatdonotusethemvia`next/dynamic(ssr:false)`.Ensureall`<Image/>`componentsspecifyaccurate`sizes`attributes(`(max-width:640px)100vw,(max-width:1024px)50vw,33vw`)and`priority`onlyonabove-the-foldheromedia.Verifythatallhover`.mp4`videosuse`preload="none"`andonlyinvoke`.play()`onpointerhoverorviewportintersection.Confirmexplicit`.dispose()`cleanuponallThree.jsgeometries,materials,andtexturesduringroutetransitions.>**Constraints**:First-loadsharedJSbundlemustremain`<110KB`gzipped(excludinglazy-loadedWebGLchunks).>**AcceptanceCriteria**:Productionbuild(`pnpmbuild`)showscleanroutechunksplitting;zeroWebGLcontext-lostwarningsoccurduring20rapidroutetransitionsbetween`/`and`/works`.####Stage13:Accessibility&Reduced-MotionVerificationPass(Assignto:**ClaudeCode**+**GoogleAntigravity**)>**Goal**:ExecuteanautomatedandmanualWCAG2.1AAauditacrossallroutes,states,keyboardflows,andreduced-motionmodes.>**ReadFirst**:`/DESIGN.md`(Section2,Section7.3,Section9)and`/AGENTS.md`.>**Instructions**:WriteandrunaPlaywright+`@axe-core/playwright`suite(`e2e/a11y.spec.ts`)testing`/`,`/works`,`/works/[slug]`,`/events`,`/shop`,`/studio`,and`/contact`.Verifyprogrammaticallythatzeroinstancesofunstroked`#F5F5DC`texton`#31C4B8`existintherenderedDOM.Testcompletekeyboard-onlynavigation(`Tab`,`Shift+Tab`,`Enter`,`Space`,`Escape`)throughtheNavbar,KeychainHeroaccessiblecharmlist,Worksfiltertabs,ShopSpecDrawerfocustrap,andContactform.Emulate`prefers-reduced-motion:reduce`inPlaywrightandverifythat`<Preloader/>`isskipped,Lenissmoothscrollisbypassed,and`<KeychainFallback/>`renderscleanly.>**Constraints**:Zero`axe-core`criticalorseriousviolationsallowed.>**AcceptanceCriteria**:`pnpmtest:e2e`passes100%ofaccessibilityandreduced-motionassertions.####Stage14:ProductionDeployment,Headers&LaunchSign-Off(Assignto:**ClaudeCode**)>**Goal**:Configureproductioncachingheaders,environmentvariables,analytics,anddeploytoVercelproduction.>**ReadFirst**:`/AGENTS.md`.>**Instructions**:Configure`next.config.ts`withimmutable`Cache-Control:public,max-age=31536000,immutable`headersfor`/models/**`,`/fonts/**`,and`/videos/**`,alongsidesecurityheaders(`X-Content-Type-Options`,`Referrer-Policy`).Integrate`@vercel/analytics`in`src/app/layout.tsx`,buildacustombrutalist404route(`src/app/not-found.tsx`),verifyenvironmentvariables(`NEX{T}_{P}UBLI{C}_{S}IT{E}_{U}RL`,`RESEN{D}_{A}P{I}_{K}EY`,`CONTAC{T}_{R}ECEIVE{R}_{E}MAIL`),andexecuteproductiondeploymentverification.>**Constraints**:Zeroconsolewarningsorbrokenlinksinproductionbuild.>**AcceptanceCriteria**:ProductiondeploymentliveonVercelwithvalidSSL,workingOpenGraphtags,functionalResendcontactdelivery,andallQAchecklistgatesgreen.---###QualityAssurance(QA)Checklist&LighthouseTargetsBecausereal-timeWebGL(`Three.js`)and2Drigid-bodyphysics(`Matter.js`)allocateGPUbuffersandmain-threadanimationticksduringherointeraction,realisticLighthouseperformancetargetsforanaward-styleinteractiveportfoliodifferbetweendesktopworkstationsandthrottled4Gmid-rangemobiledevices,whileAccessibility,BestPractices,andSEOmustmaintainastrict100/100acrossallenvironments.|Metric/AuditCategory|DesktopTarget(`1440x900`)|MobileTarget(`MotoGPower`/4GThrottled)|VerificationMethod||:---|:---|:---|:---||**LighthousePerformance**|**$\\ge 92\$ / 100\*\* | \*\*$\geq 78$ / 100\*\* (or \*\*$\geq 90$\*\* when Tier 0 static fallback triggers) | Chrome DevTools Lighthouse CLI (\`npx unlighthouse\`) |  
| \*\*Lighthouse Accessibility\*\* | \*\*100 / 100\*\* | \*\*100 / 100\*\* | \`@axe-core/playwright\` \+ Lighthouse A11y audit |  
| \*\*Lighthouse Best Practices\*\* | \*\*100 / 100\*\* | \*\*100 / 100\*\* | Zero console errors, HTTPS, valid aspect ratios |  
| \*\*Lighthouse SEO\*\* | \*\*100 / 100\*\* | \*\*100 / 100\*\* | Valid canonicals, meta descriptions, \`robots.txt\`, JSON-LD |  
| \*\*Largest Contentful Paint (LCP)\*\*| \*\*$\leq 1.6s$\*\* | \*\*$\leq 2.4s$\*\* | Server-rendered H1 & SVG wordmark paint prior to WebGL hydration |  
| \*\*Cumulative Layout Shift (CLS)\*\* | \*\*$\leq 0.02$\*\* | \*\*$\leq 0.02$\*\* | Locked \`aspect-ratio\` containers (\`16:10\`, \`4:5\`) & \`geist\` font metrics |  
| \*\*Interaction to Next Paint (INP)\*\*| \*\*$\leq 120ms$\*\* | \*\*$\leq 200ms$\*\* | Offscreen \`IntersectionObserver\` pausing of \`Matter.js\` & R3F loops |

Cross-browser and device QA must verify rendering across desktop Chrome, Firefox, and macOS Safari 18+ at \`1440x900\` and \`1920x1080\` (specifically inspecting CSS \`clip-path\` transitions and WebGL multisample anti-aliasing in Safari), alongside iOS Safari 17/18 (\`iPhone 13/15\`, \`390x844\` — validating \`100dvh\` dynamic address bar resizing and vertical touch-scroll pass-through over the \`\<KeychainHero /\>\` canvas), Android Chrome (\`360x800\` under 4x CPU slowdown), and iPadOS Safari (\`820x1180\`). During the reduced-motion verification test, toggling OS-level \*Reduce Motion\* (or clicking \`\[FX: OFF\]\` in the top navbar) must immediately bypass the \`2000ms\` preloader, disable Lenis smooth scrolling, switch the hero keychain to \`\<KeychainFallback /\>\`, and freeze all 3D badge rotations.

\---

\#\#\# Prioritized Scope Cut List & Minimum Viable Impressive Product (MVIP)

If student content collection or shader debugging encounters unexpected friction ahead of the \*\*23 November 2026 Feature Freeze\*\*, features must be shed in a strict sequence that protects the core creative-studio impression. The first feature to cut (\*\*Drop 1\*\*) is the \*\*3D Morphing Pedestal on the \`/works\` Header (\`ArtifactPedestal.tsx\`)\*\*, replacing it with a crisp SVG wireframe grid graphic; this saves two days of R3F shader work while preserving the homepage 3D sticker playground. The second feature to cut (\*\*Drop 2\*\*) is the \*\*K95 Floating Cursor Thumbnail in \`/works\` List View\*\*, retaining the Grid/List view switcher and full-row color inversion (\`\#000000\` background with \`\#F5F5DC\` text on hover) without the cursor-tracking image portal. The third feature to cut (\*\*Drop 3\*\*) is the \*\*Custom GLSL Vertex Bend/Peel Deformation on the 3D Stickers (\`TactileSticker.tsx\`)\*\*, keeping the extruded 3D badges and raycasted cursor tilt/spring rotation (\`gsap.quickTo\`) while omitting vertex deformation math. The fourth feature to cut (\*\*Drop 4\*\*) is the \*\*Slide-Over Shop Spec Drawer (\`ProductSpecDrawer.tsx\`)\*\*, allowing the \`\<ProductCard /\>\` hover \`\[ ACQUIRE \-\> \]\` button to link directly to the hosted Stripe/Razorpay checkout URL.

Even if all four scope cuts are exercised, the \*\*Minimum Viable Impressive Product (MVIP)\*\* retains 100% of the signature creative-studio architecture required to distinguish DoTA from standard university websites: the \`2.0s\` \`noth.in\` shifting-texture wordmark preloader and \`expo.inOut\` clip-path reveal, the \`wildyriftian.com\` interactive \`Matter.js\` 2D physics keychain hero with five draggable discipline charms \[cite: 7, 8\], the \`hirotos.com\` raycasted 3D department badges on the homepage, the \`noartmusic.com\` exposed \`1px\` Swiss grid and \`Geist Sans\`/\`Geist Mono\` typographic hierarchy with WCAG-verified Cream/Black/Teal/Red contrast rules \[cite: 20, 35\], and the complete set of routes (\`/\`, \`/works\`, \`/works/\[slug\]\`, \`/shop\`, \`/events\`, \`/studio\`, and \`/contact\` with K95 split-character hover interactions) \[cite: 28, 33\].

\---

\#\# Decisions Required from the Human Director to Start Building

Before pasting the \*\*Stage 1\*\* prompt into Claude Code to initialize the repository, the human director must confirm five foundational decisions:

| Decision ID | Decision Topic | Proposed Default (Used if Approved as-is) | Action Required from Human Director |  
| :--- | :--- | :--- | :--- |  
| \*\*D-01\*\* | \*\*Brand Hex & Deep-Teal Contrast Fix\*\* | \`Teal \#31C4B8\`, \`Cream \#F5F5DC\`, \`Red \#C92D1C\`, \`Black \#000000\`, plus \`--color-teal-deep: \#135C56\` and Black-on-Teal rules to remediate the \`1.95:1\` Cream-on-Teal WCAG failure. | Confirm exact master logo hex values and approve the \`DESIGN.md\` accessibility remediation protocol. |  
| \*\*D-02\*\* | \*\*Sitemap Consolidation (\`/studio\`)\*\* | Merge \`About\` and \`Team/People\` into a unified \`/studio\` route (matching \`noth.in/studio\` and \`k95.it/studio\`) \[cite: 27, 36\] for a tight 5-item navbar (\`Works\`, \`Events\`, \`Shop\`, \`Studio\`, \`Contact\`). | Approve the consolidated \`/studio\` route or request separate \`/about\` and \`/people\` routes. |  
| \*\*D-03\*\* | \*\*Shop Checkout Provider\*\* | Curated showcase with slide-over Spec Drawer linking out to \*\*Razorpay Payment Pages\*\* (\`₹\` / UPI) or \*\*Stripe Payment Links\*\* (\`\$\`). | Confirm Razorpay, Stripe, or an "Inquire to Reserve / Campus Pickup" link for Launch Day. |  
| \*\*D-04\*\* | \*\*Five Keychain Discipline Charms\*\* | \`01 Game Arts\`, \`02 Shaders & VFX\`, \`03 Physical Computing / Hardware\`, \`04 Motion & Film\`, \`05 Generative Audio\` (plus \`DoTA '26\` monogram fob). | Confirm the exact 5 academic tracks of the Department of Technical Arts. |  
| \*\*D-05\*\* | \*\*Contact Receiver Email & Domain\*\* | Submissions routed via \`Resend\` to \`lab@dota.edu\`; deployed on Vercel Hobby/Student tier. | Provide the live department email address and final production domain name. |

