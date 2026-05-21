import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const ProgramPage = lazy(() => import('./pages/Programs/ProgramPage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const StructurePage = lazy(() => import('./pages/About/StructurePage'));
const LegalityPage = lazy(() => import('./pages/About/LegalityPage'));
const SopRulesPage = lazy(() => import('./pages/About/SopRulesPage'));
const FloorPlanPage = lazy(() => import('./pages/About/FloorPlanPage'));
const GalleryPage = lazy(() => import('./pages/Gallery/GalleryPage'));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));
const TeacherProfilePage = lazy(() => import('./pages/About/TeacherProfilePage'));
const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/Blog/BlogPostPage'));
const AlumniPage = lazy(() => import('./pages/Alumni/AlumniPage'));
const RegistrationPage = lazy(() => import('./pages/Registration/RegistrationPage'));
const ProgramTahunanPage = lazy(() => import('./pages/ProgramTahunan/ProgramTahunanPage'));
const StudentsPage = lazy(() => import('./pages/Students/StudentsPage'));

function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: 'var(--color-primary-light)'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid var(--color-border)',
        borderTopColor: 'var(--color-primary-light)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/tentang-kami/struktur" element={<StructurePage />} />
          <Route path="/tentang-kami/legalitas" element={<LegalityPage />} />
          <Route path="/tentang-kami/sop-tata-tertib" element={<SopRulesPage />} />
          <Route path="/tentang-kami/denah" element={<FloorPlanPage />} />
          <Route path="/tentang-kami/pengajar/:id" element={<TeacherProfilePage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/hubungi-kami" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/daftar" element={<RegistrationPage />} />
          <Route path="/program-tahunan" element={<ProgramTahunanPage />} />
          <Route path="/tentang-kami/peserta-didik" element={<StudentsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
