import { useState, useEffect, useCallback } from 'react';
import { Quote, GraduationCap, School, ArrowRight, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { alumniData } from '../../data/alumni';
import './AlumniPage.css';

const getAlumniColorTheme = (id) => {
  switch (id) {
    case 1:
    case 4:
      return { accent: '#D97706', bgLight: '#FEF3C7', label: 'SNBT / PTN' }; // Gold
    case 2:
    case 5:
      return { accent: '#2563EB', bgLight: '#DBEAFE', label: 'PPDB SMA' }; // Blue
    case 3:
      return { accent: '#0D9488', bgLight: '#CCFBF1', label: 'PPDB SMP' }; // Teal
    default:
      return { accent: '#2563EB', bgLight: '#DBEAFE', label: 'Alumni' };
  }
};

const getBadgeText = (id) => {
  switch (id) {
    case 1:
      return 'Lolos FK UI';
    case 2:
      return 'Lolos SMAN 8 Jakarta';
    case 3:
      return 'Lolos SMPN 115 Jakarta';
    case 4:
      return 'Lolos Teknik ITB';
    case 5:
      return 'Lolos Taruna Nusantara';
    default:
      return 'Lolos Sekolah Impian';
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
                  const theme = getAlumniColorTheme(alumni.id);
                  const achievementText = getBadgeText(alumni.id);
                  return (
                    <div key={alumni.id} className="alumni-slide">
                      <div
                        className="alumni-card"
                        style={{
                          '--alumni-accent': theme.accent,
                          '--alumni-accent-light': theme.bgLight
                        }}
                      >
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
                              <span className="alumni-card__success-badge">{achievementText}</span>
                            </div>
                          </div>
                        </div>

                        {/* Pathway Flow */}
                        <div className="alumni-card__pathway">
                          <div className="pathway-step pathway-step--prev">
                            <span className="pathway-label">Asal Sekolah</span>
                            <span className="pathway-value">{alumni.previousSchool}</span>
                          </div>
                          <div className="pathway-connector">
                            <div className="connector-dot connector-dot--start"></div>
                            <div className="connector-line"></div>
                            <ArrowRight size={14} className="connector-arrow" />
                            <div className="connector-dot connector-dot--end"></div>
                          </div>
                          <div className="pathway-step pathway-step--curr">
                            <span className="pathway-label">Diterima di</span>
                            <span className="pathway-value">{alumni.currentSchool}</span>
                          </div>
                        </div>

                        <div className="alumni-card__quote-wrapper">
                          <Quote className="alumni-card__quote-icon" size={24} />
                          <p className="alumni-card__quote">"{alumni.quote}"</p>
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
