import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const ProgramPage = lazy(() => import('./pages/Programs/ProgramPage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const GalleryPage = lazy(() => import('./pages/Gallery/GalleryPage'));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));
const TeacherProfilePage = lazy(() => import('./pages/About/TeacherProfilePage'));
const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/Blog/BlogPostPage'));
const AlumniPage = lazy(() => import('./pages/Alumni/AlumniPage'));
const RegistrationPage = lazy(() => import('./pages/Registration/RegistrationPage'));

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
          <Route path="/tentang-kami/pengajar/:id" element={<TeacherProfilePage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/hubungi-kami" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/daftar" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
