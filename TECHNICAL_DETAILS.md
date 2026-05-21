# Project Technical Details — Bimbel Junior

This document records the exact, up-to-date technical state, active routing, data models, removed elements, and custom design guidelines for the **Bimbel Junior** codebase. 

---

## 1. Technology Stack & Core Architecture

* **Core**: React 18, Vite, JavaScript/JSX, TypeScript (`tsconfig` compiler checks enabled).
* **Styling**: Pure, native CSS (`src/index.css` design system and component-level stylesheets). 
* **Icons**: `lucide-react` library.
* **SEO**: Custom `<SEO />` component handling meta titles, descriptions, and keywords dynamically.

---

## 2. Active Routing & Navigation (`src/App.jsx`, `src/components/Navbar/Navbar.jsx`)

The routing table uses lazy-loaded code-splitting for performance. Active top-level routes include:
* `.` or `/` (Home Page)
* `/tentang-kami` (Profil & Guru Page)
* `/tentang-kami/pengajar/:id` (Individual Teacher Profile view)
* `/program` (Program Page)
* `/galeri` (Gallery Page)
* `/alumni` (Alumni Testimonials Page)
* `/blog` (Blog listing Page)
* `/blog/:id` (Individual Blog Article view)
* `/kontak` (Contact Page)
* `/registrasi` (Registration Page)
* `/legalitas` (Legality & Dapodik Status Page)
* `/sop-rules` (SOP & Rule Guidelines Page)

---

## 3. Permanently Cleaned Up & Removed Features

The following modules and pages have been completely deleted from the active codebase:
1. **Program Tahunan**: Deleted routing, layout files, and data lists.
2. **Struktur Organisasi**: Deleted routing, team hierarchy logic, and custom structure components.
3. **Daftar Peserta Didik**: Deleted routing, table listings, and student data files.
4. **Denah Ruang (FloorPlan)**: Deleted physical files `FloorPlanPage.jsx` & `FloorPlanPage.css`, route config, and menu dropdown links.

---

## 4. Key Configurations & Restorations

### A. Team Database & Divisions (`src/data/team.js`, `src/pages/About/AboutPage.jsx`)
* **Ona Rahmawati, M.Pd. (Pimpinan)**: Restored as `id: 1` at the beginning of the `teamMembers` array. Her details are integrated back into the about narrative and SEO descriptions.
  - **No Founder Reference**: Removed all references to "pendiri" (founder) and "mendirikan" (founded) in her card profile bio, longBio description, and achievements list. She is referred to purely as **Pimpinan Bimbel Junior** to preserve standard, clean title profiles.
* **Zahratul Jannah, S.Pd. (Bendahara & Tutor)**: Promoted to **Bendahara & Guru IPA SMP/SD** (`id: 3`). She resides in both:
  - **Pimpinan, Bendahara & Administrasi** group
  - **Tutor Sains / IPA** group (she displays in both sections seamlessly).
* **"Tutor" Terminology**: All user-facing division headers are renamed from "Divisi ..." to **"Tutor ..."** (e.g. *Tutor Matematika & Guru Kelas*, *Tutor Sains / IPA*, etc.).

### B. Contact Page Restructure (`src/pages/Contact/ContactPage.jsx`)
* The registration form has been completely removed to streamline offline signups via the main registration CTA.
* Centered single-column layout centered around a premium Google Maps container. The "Buka di Google Maps" link is styled as a premium outline pill button with elegant hover translations.

### C. Legality Page Visibility & Alignment (`src/pages/About/LegalityPage.jsx`)
* Centered flex alignment in the *Komitmen Transparansi Publik* section.
* High-contrast `.trust-title` set to pure white (`#ffffff`) for perfect visibility against the dark backdrop.
* Green and blue highlight coloring applied to key icons.
* Native slow-pulse and slow-bounce animations added directly in pure CSS to keep the layout interactive and engaging.

### D. Brand Logo & Favicon Integration (`src/components/Navbar/`, `src/components/Footer/`, `index.html`)
* **Logo Update**: Replaced `images/logo.webp` with `images/Logo Bimbel Junior.png` in the header (`Navbar.jsx`) and footer (`Footer.jsx`) layouts.
* **Bigger Logo Layout**: Increased header logo image container size from `40px` to `54px` in `Navbar.css` and set HTML dimensions to `54` inside `Navbar.jsx` to make it prominent and beautiful. Increased footer logo image to `50px`.
* **Favicon Integration**: Updated `index.html`'s `<link rel="icon">` reference to `/images/Logo Bimbel Junior.png` so the browser tab matches the new brand identity.

### E. Spacious & Enlarged Hero Slider System (`src/pages/Home/HeroSection.jsx`, `src/pages/Home/HeroSection.css`)
* **Automatic Slider Without Nav**: Built a clean, zero-navigation React slider that loops through `13.jpg.jpeg`, `14.jpg.jpeg`, and `15.jpg.jpeg` images in the `public/images/hero/` folder every 4 seconds.
* **Overlapping Cross-fade**: Used absolute positioning within the `.hero-image-wrapper` (along with `aspect-ratio: 4 / 3` and `max-width: 520px` boundaries) and styled `opacity: 0; transition: opacity 0.8s ease-in-out` on `.hero-image` so slides overlap and cross-fade dynamically without nav buttons or layout shifts.
* **Generous Grand Hero Layout**: Enlarged all vertical margins, padding, typography, and element spacing to give the homepage a bold, premium, and professional first impression:
  - Set `.hero` min-height to `80vh` and padding to `calc(var(--navbar-height) + var(--space-3xl))` top, `var(--space-3xl)` bottom for deep breathing room.
  - Set `.hero-content` to a wider `1.15fr 0.85fr` layout with `padding: var(--space-xl) 0` and `gap: var(--space-3xl)`.
  - Scaled `.hero-badge` to `font-size: var(--text-sm)` and `padding: 0.5rem 1.15rem`.
  - Enlarged `.hero-title` to a grand responsive `clamp(2.5rem, 5.2vw, 4.25rem)` with `margin-bottom: var(--space-md)`.
  - Scaled `.hero-subtitle` to `font-size: var(--text-lg)`, `line-height: 1.6`, and `margin-bottom: var(--space-xl)`.
  - Enlarged primary and secondary buttons to `padding: 1.1rem 2.2rem`, `font-size: var(--text-base)`, and `border-radius: var(--radius-xl)`.
  - Scaled `.hero-stats` margin-top to `var(--space-2xl)`.
  - Expanded `.hero-stats-bar` with `padding: 1.5rem 2rem` and `gap: var(--space-xl)`.
  - Scaled up stat icons to `50px` (with `22px` SVG inside) and set value numbers to a bold `var(--text-2xl)` for outstanding visibility and visual weight.

### F. Teacher Profile Details Layout Refinement (`src/pages/About/TeacherProfilePage.jsx`, `src/pages/About/TeacherProfilePage.css`)
* **Quotation Card Removal**: Completely removed the quotation/motto card (`.teacher-profile__quote-card`) from the bottom of the left bio column (`teacher-profile__main`).
* **CTA Card Removal**: Completely removed the enrollment/consultation CTA card (`.teacher-profile__cta-card`) from the bottom of the right sidebar column (`teacher-profile__sidebar`).
* **Unused Code Cleanup**: Removed unused icon imports (`Quote` and `MessageCircle` from `lucide-react`) to keep code compilation ultra lean.
* **Layout Margin Alignment**: Set `style={{ marginBottom: 0 }}` on the final cards of both columns so there are no dangling margins.
* **Column Height Matching**: Configured `.teacher-profile__grid` with `align-items: stretch` and styled `.teacher-profile__main` and `.animate-on-scroll` to use flex column layouts (`display: flex; flex-direction: column; flex: 1`). This allows the main "Tentang" card to stretch and match the combined height of "Riwayat Pendidikan" and "Pencapaian" in the sidebar, producing an aligned, cohesive, and premium grid layout.

### G. Gallery Filter & Teacher Avatars Polishing (`src/pages/Gallery/GalleryPage.css`, `src/pages/About/AboutPage.css`)
* **Gallery Filter Bar**: Expanded the `.gallery-filter__bar` desktop `max-width` to `820px` with `flex-wrap: nowrap` to prevent desktop wrapping. Integrated a premium horizontal scroll overflow system for viewports under `850px` with a sticky funnel icon on the left, keeping filter pills on a single clean line across mobile and tablet viewports.
* **Centered Teacher Avatars**: Configured `.about-team__avatar-img` with absolute positioning (`position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center;`) to eliminate baseline spacing offsets or browser rendering shifts, rendering all teacher photos beautifully centered inside their circular outlines.

---

## 5. Guidelines for Future Chats & Agents
* **Read This File First**: Before making edits to routes, team arrays, or layout pages, consult this file to verify the current structure.
* **Keep Staged/Unstaged Local Changes**: Do not commit (`git commit`) or push (`git push`) or deploy (`npm run deploy`) code unless explicitly asked by the user in the prompt.
* **Keep This Document Updated**: Any subsequent design edits, component additions, or structural changes must be immediately recorded here to preserve codebase alignment.

---

## 6. Verification Pipeline & Smoke Tests
To verify changes are structurally correct and fully buildable, future agents should execute these steps locally in order:
1. **Local Dev Check**: Confirm the local web server compiles assets cleanly using `npm run dev`.
2. **Type Compilations**: Execute `tsc` to verify that there are zero TypeScript compiler warnings or errors.
3. **Production Compilations**: Run `npm run build` to verify the production asset bundler succeeds completely without any syntax or path resolution issues.

