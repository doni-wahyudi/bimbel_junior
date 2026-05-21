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
* **Ona Rahmawati, M.Pd. (Pimpinan)**: Restored as `id: 1` at the beginning of the `teamMembers` array. Her details are integrated back into the about narrative and SEO descriptions. Note: Card is kept clean and standard (no special founder badge or overlay).
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

