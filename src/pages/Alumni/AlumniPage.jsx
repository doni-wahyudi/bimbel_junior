import { useState, useEffect, useCallback } from 'react';
import { GraduationCap, ChevronLeft, ChevronRight, Trophy, Sparkles } from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { alumniData } from '../../data/alumni';
import './AlumniPage.css';

const getAlumniColorTheme = (category) => {
  switch (category) {
    case 'PTN':
      return { accent: '#D97706', bgLight: '#FEF3C7', label: 'SNBT / PTN' }; // Gold
    case 'SMA':
      return { accent: '#2563EB', bgLight: '#DBEAFE', label: 'PPDB SMA' }; // Blue
    case 'SMK':
      return { accent: '#7C3AED', bgLight: '#F3E8FF', label: 'PPDB SMK' }; // Purple
    case 'SMP':
      return { accent: '#0D9488', bgLight: '#CCFBF1', label: 'PPDB SMP' }; // Teal
    default:
      return { accent: '#2563EB', bgLight: '#DBEAFE', label: 'Alumni' };
  }
};

export default function AlumniPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Determine slides per view based on viewport
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, alumniData.length - slidesPerView);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const goTo = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  return (
    <div className="alumni-page">
      <SEO 
        title="Kisah Sukses Alumni"
        description="Ratusan siswa telah berhasil meraih sekolah impian bersama Bimbel Junior. Temukan kisah inspiratif mereka di sini."
      />

      <section className="alumni-hero gradient-hero">
        <div className="container">
          <AnimateOnScroll className="alumni-hero__content">
            <h1 className="alumni-hero__title">Jejak Prestasi Alumni</h1>
            <p className="alumni-hero__subtitle">
              Setiap anak memiliki potensi. Kami bangga telah menjadi bagian dari perjalanan mereka menuju sekolah dan kampus impian.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section alumni-list-section">
        <div className="container">
          <div className="alumni-carousel-wrapper">
            <div className="alumni-carousel">
              <div
                className="alumni-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                }}
              >
                {alumniData.map((alumni) => {
                  const theme = getAlumniColorTheme(alumni.category);
                  const achievementText = alumni.achievement;
                  return (
                    <div key={alumni.id} className="alumni-slide">
                      <div
                        className="alumni-card"
                        style={{
                          '--alumni-accent': theme.accent,
                          '--alumni-accent-light': theme.bgLight
                        }}
                      >
                        {/* Brand Logo in Upper Left */}
                        <div className="alumni-card__brand-badge">
                          <img
                            src={`${import.meta.env.BASE_URL || '/'}images/Logo Bimbel Junior.webp`}
                            alt="Bimbel Junior"
                          />
                        </div>

                        {/* Floating Trophy Ribbon */}
                        <div className="alumni-card__badge-ribbon">
                          <Trophy size={12} />
                          <span>{theme.label}</span>
                        </div>

                        <div className="alumni-card__header">
                          <div className="alumni-card__avatar-container">
                            <div className="alumni-card__avatar">
                              {alumni.image ? (
                                <img src={alumni.image} alt={alumni.name} loading="lazy" />
                              ) : (
                                <div className="alumni-card__avatar-fallback">
                                  <GraduationCap size={32} />
                                </div>
                              )}
                            </div>
                            <div className="alumni-card__avatar-cap">
                              <GraduationCap size={14} />
                            </div>
                          </div>
                          
                          <div className="alumni-card__profile">
                            <h2 className="alumni-card__name">{alumni.name}</h2>
                            <div className="alumni-card__badge-row">
                              <span className="alumni-card__year">Alumni {alumni.year}</span>
                            </div>
                          </div>
                        </div>

                        {/* Accepted Destination */}
                        <div className="alumni-card__destination">
                          <div className="destination-header">
                            <GraduationCap size={16} className="destination-icon" />
                            <span className="destination-label">Diterima di</span>
                          </div>
                          <span className="destination-value">{alumni.currentSchool}</span>
                          {alumni.pathway && (
                            <span className="destination-pathway">({alumni.pathway})</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="alumni-nav">
              <button
                className="alumni-nav-arrow"
                onClick={goPrev}
                disabled={currentIndex === 0}
                aria-label="Alumni sebelumnya"
              >
                <ChevronLeft />
              </button>

              <div className="alumni-dots">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    className={`alumni-dot ${i === currentIndex ? 'active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Ke alumni ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className="alumni-nav-arrow"
                onClick={goNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Alumni berikutnya"
              >
                <ChevronRight />
              </button>
            </div>

            <AnimateOnScroll delay={0.2}>
              <div className="alumni-carousel-caption">
                <Sparkles className="alumni-carousel-caption__icon" size={24} />
                <p>
                  ...dan masih banyak alumni lainnya yang telah <strong>sukses mengukir prestasi terbaik</strong>, menembus sekolah impian, serta <strong>berkembang lebih baik</strong> bersama <strong>Bimbel Junior</strong>.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.4}>
            <div className="alumni-cta">
              <h2>Jadilah Kisah Sukses Selanjutnya!</h2>
              <p>Mari ukir prestasi terbaikmu bersama tutor profesional kami.</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdO_nrN-Xz7HyRVaJ2gLOzIwoa2X-g3cIDrvKqKwMQ3Hpn_tQ/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <GraduationCap size={20} />
                Daftar Sekarang
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
