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
* `/tentang-kami/legalitas` (Legality & Dapodik Status Page)
* `/tentang-kami/sop-tata-tertib` (SOP & Rule Guidelines Page)
* `/program` (Program Page)
* `/galeri` (Gallery Page)
* `/alumni` (Alumni Testimonials Page)
* `/blog` (Blog listing Page)
* `/blog/:slug` (Individual Blog Article view)
* `/hubungi-kami` (Contact Page)
* `/daftar` (Registration Page)

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
* **Simplified Two-Section Structure**: The teacher profiles overview page is structured into exactly two main visual blocks, displaying sequentially without complex filter tabs:
  1. **Manajemen & Administrasi**: Houses Ona Rahmawati (id: 1), Zahratul Jannah (id: 3), and Admin Syakira (id: 10).
  2. **Tutor & Staf Pengajar**: Groups all 10 tutors together seamlessly in a single unified grid.
* **Ona Rahmawati, M.Pd. (Pimpinan)**: Restored as `id: 1` at the beginning of the `teamMembers` array. Her details are integrated back into the about narrative and SEO descriptions.
  - **No Founder Reference**: Removed all references to "pendiri" (founder) and "mendirikan" (founded) in her card profile bio, longBio description, and achievements list. She is referred to purely as **Pimpinan Bimbel Junior** to preserve standard, clean title profiles.
* **Zahratul Jannah, S.Pd. (Bendahara & Tutor)**: She resides in both the *Manajemen & Administrasi* group and the *Tutor & Staf Pengajar* group seamlessly since she is both the treasurer and active in SMP/SD science tutoring.
* **Salsabillah Rizki Al Husna (ID 5)**: Role updated to **Guru SD (Kelas 4, 5, 6)** (subjects: *Seluruh Pelajaran (SD)*) to align with her PGSD teacher education profile, placing her in the Tutor & Staf Pengajar section.

### B. Contact & WhatsApp Forms Streamlining
* **Registration Form Simplification** (`src/pages/Registration/RegistrationPage.jsx`): Completely removed the `phone` form input and `No. WhatsApp: ${formData.phone}` message template string. Since submissions are directed straight to WhatsApp, the user's phone number is already visible in the chat thread, removing duplicate inputs.
* **Quick Contact Modal Streamlining** (`src/components/WhatsAppModal/WhatsAppModal.jsx`): Removed the `phone` input group and associated formatted text template lines to speed up user submissions and prevent redundant data entry.
* **Contact Page Restructure** (`src/pages/Contact/ContactPage.jsx`): The registration form has been completely removed to streamline offline signups via the main registration CTA.
* Centered single-column layout centered around a premium Google Maps container. The "Buka di Google Maps" link is styled as a premium outline pill button with elegant hover translations.

### C. Legality Page & Document Previews (`src/pages/About/LegalityPage.jsx`, `src/pages/About/LegalityPage.css`)
* **Spacious Document Previews**: Converted the document cards into elegant, single-column vertical flows. Inside each card, the live interactive PDF preview frame (`<iframe>`) is embedded directly below the metadata details table, taking full-width visual scale (`680px` height on desktop).
* **No Redundant Elements**: Completely removed the "Lihat / Unduh Dokumen Asli" buttons and official visual digital stamp seals from the cards, producing an extremely clean, modern, and uncluttered presentation.
* **Responsive Falling Back**: Shrinks the viewer height on tablets and collapses to a neat fallback placeholder badge on mobile viewports (where inline PDF iframes are unsupported by browsers).
* **Tabbed Viewer Removal**: Completely removed the redundant bottom tabbed interactive viewer and associated state controllers to keep the page clean and loading instantly.
* Centered flex alignment in the *Komitmen Transparansi Publik* section.
* High-contrast `.trust-title` set to pure white (`#ffffff`) for perfect visibility against the dark backdrop.
* Green and blue highlight coloring applied to key icons.
* Native slow-pulse and slow-bounce animations added directly in pure CSS to keep the layout interactive and engaging.

### D. Brand Logo & Favicon Integration (`src/components/Navbar/`, `src/components/Footer/`, `index.html`)
* **Logo Update**: Replaced `images/logo.webp` with `images/Logo Bimbel Junior.webp` in the header (`Navbar.jsx`) and footer (`Footer.jsx`) layouts.
* **Bigger Logo Layout**: Increased header logo image container size from `40px` to `54px` in `Navbar.css` and set HTML dimensions to `54` inside `Navbar.jsx` to make it prominent and beautiful. Increased footer logo image to `50px`.
* **Favicon Integration**: Updated `index.html`'s `<link rel="icon">` reference to `/images/Logo Bimbel Junior.webp` so the browser tab matches the new brand identity.

### E. Spacious & Enlarged Hero Slider System (`src/pages/Home/HeroSection.jsx`, `src/pages/Home/HeroSection.css`)
* **Automatic Slider Without Nav**: Built a clean, zero-navigation React slider that loops through `13.webp`, `14.webp`, and `15.webp` images in the `public/images/hero/` folder every 4 seconds.
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
* **Profil & Kontak Removal**: Completely removed the private data / contact card (`.teacher-profile__card` with title "Profil & Kontak") from the right sidebar column to protect tutor privacy and simplify teacher profiles.
* **Unused Code Cleanup**: Cleaned up the unused icon imports (`User`, `MapPin`, `Calendar`, `Heart`, `Mail`, `Phone`, `Building2`, `Quote`, and `MessageCircle` from `lucide-react`) to keep code compilation lean and prevent build or static analysis warnings.
* **Layout Margin Alignment & Loading**: Set `style={{ marginBottom: 0 }}` on the achievements card (`Pencapaian`), which is now the last card of the sidebar. Adjusted the progressive stag-loading transition delays (`delay={0.1}` on `Riwayat Pendidikan` and `delay={0.2}` on `Pencapaian`) to preserve smooth progressive entry animation sequences.
* **High-Contrast Typography**: Explicitly assigned `color: var(--color-text-white)` to `.teacher-profile__name` in `TeacherProfilePage.css`. This overrides the global dark slate heading styling inherited from `index.css`, creating a crisp, accessible, and high-contrast white presentation for all teacher names against the dark blue gradient hero background.
* **Column Height Matching**: Configured `.teacher-profile__grid` with `align-items: stretch` and styled `.teacher-profile__main` and `.animate-on-scroll` to use flex column layouts (`display: flex; flex-direction: column; flex: 1`). This allows the main "Tentang" card to stretch and match the combined height of "Riwayat Pendidikan" and "Pencapaian" in the sidebar, producing an aligned, cohesive, and premium grid layout.

### G. Gallery Filter & Teacher Avatars Polishing (`src/pages/Gallery/GalleryPage.css`, `src/pages/About/AboutPage.css`)
* **Gallery Filter Bar**: Expanded the `.gallery-filter__bar` desktop `max-width` to `820px` with `flex-wrap: nowrap` to prevent desktop wrapping. Integrated a premium horizontal scroll overflow system for viewports under `850px` with a sticky funnel icon on the left, keeping filter pills on a single clean line across mobile and tablet viewports.
* **Centered Teacher Avatars**: Configured `.about-team__avatar-img` with absolute positioning (`position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center;`) to eliminate baseline spacing offsets or browser rendering shifts, rendering all teacher photos beautifully centered inside their circular outlines.

### H. Search Crawling & Off-Screen Image Optimization (`public/sitemap.xml`, `public/robots.txt`)
* **Crawling & Indexing Assets**: Created `public/sitemap.xml` and `public/robots.txt` containing all 10+ core pages, 12 teacher profiles, and 8 blog articles mapped under the production base URL (`https://doni-wahyudi.github.io/bimbel_junior/`).
* **Off-Screen Image Lazy Loading**: Injected `loading="lazy"` in scroll-dependent images across `Footer.jsx`, `AboutPage.jsx`, `GalleryPage.jsx`, `BlogPage.jsx`, and `AlumniPage.jsx` to maximize Google PageSpeed performance.

### I. Teacher WebP Avatars Conversion & Binding (`public/images/teacher/`, `src/data/team.js`)
* **WebP Image Conversion & Updates**: Converted new high-resolution avatar source photos `Ona Rahmawati.jpeg`, `Frans Detio.jpeg`, and `Ratna Sari Irsyad.jpeg` into optimized, high-performance `.webp` versions using Python's Pillow library. This keeps pages loading rapidly and maintains consistent design system parameters.
* **Database Alignment**: The team records in `src/data/team.js` for Ona Rahmawati (`id: 1`), Ratna Sari Irsyad (`id: 2`), and Frans Detio (`id: 7`) are all bound to their corresponding `.webp` paths. All images now resolve and render successfully.

### J. Home Hero Title & Subtitle Wrapping Refinements (`src/pages/Home/HeroSection.jsx`)
* **Bimbel Junior nowrap**: Wrapped the word "Bimbel Junior" inside the main hero title `<h1 className="hero-title">` in a `nowrap` span, preventing awkward wrapping that pushes "Junior" alone to the next line.
* **Location nowrap**: Wrapped "di Tanjung Priok, Jakarta Utara" inside the hero subtitle `<p className="hero-subtitle">` in a `nowrap` span, ensuring the location remains neatly formatted on a single line at all viewports.

### K. Class Size Wrapping & Spacing Refinements (`src/pages/Programs/ProgramPage.jsx`)
* **Block Element Splitting**: Modified the `classSize` rendering logic under `Ukuran Kelas`. It now splits the en-dash enfolded string by the `' / '` separator and maps each portion into its own block-level span element. This cleanly wraps the `"1–2 siswa (Privat)"` text onto a new line, preventing it from breaking mid-word or wrapping awkwardly.

### L. SOP Signature Block Removal (`src/pages/About/SopRulesPage.jsx`)
* **Signature Section Cleanup**: Completely removed the legal signature footer section (`.sop-signature`) from the bottom of the page to maintain a clean, modern, and non-redundant structure.
* **Unused Code Cleanup**: Cleaned up the import list to remove the unused `CheckCircle` icon, ensuring clean compilation.

### M. Contact Page Landmark Cards & Segmented Layout Polish (`src/pages/Contact/ContactPage.jsx`, `src/pages/Contact/ContactPage.css`)
* **Visual Layout Polish & Premium Aesthetics**: Elevated the entire directions and landmarks layout on the Contact page to create a luxury premium feel:
  - Replaced the flat white section style with a rich dual-color background gradient (`linear-gradient(180deg, var(--color-background) 0%, #eff6ff 100%)`) featuring blur-filtered background glowing accent circles.
  - Upgraded the tab controls into a sleek, iOS-inspired segmented grid (`.transit-tabs`) that handles tablet and mobile viewports seamlessly, adding vibrant hover transformations and glowing primary active gradients.
  - Revamped the vertical timeline steps into beautifully elevated cards (`.transit-step`) that hover/translate elegantly, coupled with a perfectly aligned connecting pipeline track (`margin-left: 46px`) matching the number circles mathematically.
  - Enhanced the landmark cards (`.contact-directions-landmark-card`) with rich glowing color-accented headers, circular icon backings, bold typography, and interactive scale/rotate animations when hovered.
* **Pixel-Perfect Card Sizing & Alignment**: Configured labels inside the `landmarks` array in `ContactPage.jsx` to use explicit string array line breaks (`['Landmark', 'Terdekat']`, `['Akses', 'Commuter & Bus']`, and `['Titik Temu', 'Lingkungan']`). To prevent horizontal flex wrapping inside the flexbox container, set `flex-direction: column` and `align-items: center` on `.contact-directions-landmark-card__label`, causing each split segment to stack and center vertically with absolute precision. Assigned explicit `min-height` boxes to titles (`min-height: 2.8em`) and descriptions (`min-height: 3.2em`) to guarantee absolute baseline consistency across the grid.
* **Increased Breathing Room (Card Gaps)**: Increased vertical margin gaps inside landmark cards—adjusting the space below the icon to `var(--space-lg)` (24px) and the space below the title label to `var(--space-md)` (16px) to give a spacious, high-end vertical rhythm between the card header and content.
* **Landmarks Data Enrichment**: Upgraded the `landmarks` array from flat strings to object arrays, mapping specific icons (`School`, `Train`, `ShoppingBag`), context-rich labels, and visual color styles (`primary`, `success`, `warning`) to each respective landmark.
* **Responsive 3-Column Grid**: Replaced the wrapping flex pills container with a clean, highly structured responsive 3-column CSS Grid. On tablets and mobile, it collapses naturally into a perfectly centered single-column grid.

### N. Footer Navigation Sync & Real-World Directions Refinement (`src/components/Footer/`, `src/pages/Contact/ContactPage.jsx`)
* **Footer Menu Sync**: Expanded the footer structure in `Footer.jsx` and `Footer.css` into a perfectly balanced 5-column layout (`1.5fr 1fr 1fr 1fr 1.2fr`). Added the missing active pages (`/alumni`, `/blog`, `/daftar`, `/tentang-kami/legalitas`, `/tentang-kami/sop-tata-tertib`) into a dedicated **"Informasi & Legal"** column to match the header Navbar exactly.
* **In-Depth Real-World Directions**: Replaced synthetic landmarks in `ContactPage.jsx` with highly specific, verified points of interest—specifically highlighting **Sekolah Mekar Tanjung (SDS & SMP)** just 10 meters away, along with local hubs like **Pasar Warakas** and **Puskesmas Warakas**. 

### O. Interactive Transit Route Guide & Joko Sarjono's Avatar (`src/pages/Contact/`, `src/data/team.js`)
* **Interactive Transit Stepper**: Replaced the static text directions with a fully interactive tabs-and-stepper guide inside the contact page directions card. Users can switch between **KRL Commuter Line**, **TransJakarta / Busway**, and **Pribadi & Ojek Online** tabs, instantly rendering an animated vertical timeline complete with numbered step badges, connecting track lines, bold step titles, and transit descriptions.
* **Joko Sarjono's Avatar**: Converted Joko Sarjono's newly uploaded source photo `Joko Sarjono.jpeg` into optimized `Joko Sarjono.webp` via Python's Pillow library. Updated his team record (`id: 4`) in `team.js` from `image: null` to map to `cleanBaseUrl + 'images/teacher/Joko Sarjono.webp'`.

### P. Mobile Layout & Gallery Horizontal Scroll Optimization (`src/pages/Gallery/GalleryPage.jsx`, `src/pages/Gallery/GalleryPage.css`)
* **Horizontal Scroll & Overflow Resolution**: Mathematically eliminated all horizontal scrolling page overflows on mobile devices (e.g. iPhone viewports at 375px wide) so the layout stays locked and pixel-perfect.
* **Auto-Scrolling & Filmstrips Deactivation on Mobile**: 
  - Integrated a dynamic `isMobile` screen width listener (triggering at `window.innerWidth <= 768`).
  - Disabled the Javascript `requestAnimationFrame` filmstrip auto-scrolling render loop entirely on mobile viewports to conserve CPU/GPU resources and avoid offset glitches.
  - Converted the decorative desktop infinite marquee rows (`.gallery-filmstrip`) into a static grid display of exactly the top 3 unique featured/outing items, preventing flex strips from stretching thousands of pixels wide.
* **Fluid Grid Sizing & Aspect Ratios**:
  - Replaced the rigid `min-height: 180px` constraint on `.gallery-item__card` under `@media (max-width: 480px)`. Previously, because of the `4/3` aspect ratio, a minimum height of `180px` mathematically forced cards to expand to `240px` wide, blowing out the 2-column mobile grid to `496px` wide and breaking the viewport. Setting `min-height: auto` enables the cards to scale fluidly according to column size.
  - Cleaned up the redundant `flex: 0 0 280px` override from the `<= 480px` media query, guaranteeing `.gallery-item` is always `flex: none` and `width: 100%` on all mobile viewports.
  - Tightened the gallery grid gap to `var(--space-sm)` on mobile for a neat, compact visual presentation.

### Q. Home Page Hero Height Mobile Optimization (`src/pages/Home/HeroSection.css`)
* **Full-Screen Mobile Hero**: Set the home page `.hero` container height on mobile viewports ($\le 768\text{px}$) to exactly one full viewport width/height (`min-height: 100dvh` with a `100vh` fallback). This blocks off the layout so the hero occupies exactly one full visual fold on mobile devices.
* **Vertical Centering**: Enabled dynamic flex alignment (`display: flex; flex-direction: column; justify-content: center;`) on mobile so the text content and visual stats grid remain beautifully centered in the screen fold, providing a premium, uncluttered, and highly spacious presentation.

### R. Custom Domain Mapping & SEO Sync (`vite.config.js`, `public/CNAME`, `public/robots.txt`, `public/sitemap.xml`)
* **Base Path Re-Alignment**: Updated Vite configuration base path from `'/bimbel_junior/'` to `'/'`. This allows the built application bundles, CSS resources, dynamic scripts, and routers to resolve relative to the root of the custom domain rather than looking for a project subfolder.
* **Persistent CNAME File**: Created a `public/CNAME` file containing the domain `juniorbimbel.web.id`. This ensures that GitHub Pages maps the domain persistently across all subsequent deploy compiles.
* **SEO Domain Updates**:
  - Re-bound the `Sitemap` link inside `public/robots.txt` to point to `https://juniorbimbel.web.id/sitemap.xml`.
  - Updated all 31 static, teacher profile, and blog article locations in `public/sitemap.xml` to point directly to `https://juniorbimbel.web.id/` instead of the old GitHub Pages path, preserving pixel-perfect indexing health and SEO rankings.

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

