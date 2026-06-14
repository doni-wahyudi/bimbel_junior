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
        title="Prestasi &amp; Alumni"
        description="Ratusan siswa telah berhasil meraih sekolah impian bersama Bimbel Junior. Temukan kisah inspiratif mereka di sini."
      />

      <section className="alumni-hero gradient-hero">
        <div className="container">
          <AnimateOnScroll className="alumni-hero__content">
            <h1 className="alumni-hero__title">Jejak Prestasi &amp; Alumni</h1>
            <p className="alumni-hero__subtitle">
              Setiap anak memiliki potensi. Kami bangga telah menjadi bagian dari perjalanan mereka menuju sekolah dan kampus impian.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section alumni-list-section">
        <div className="container">
          {/* ===== Prestasi Unggulan Siswa (SMPN 129 Jakarta) ===== */}
          <AnimateOnScroll>
            <div className="prestige-section-header">
              <span className="prestige-badge">
                <Trophy size={14} /> Papan Prestasi Utama
              </span>
              <h2 className="prestige-title">Prestasi Gemilang Siswa Bimbel Junior</h2>
              <p className="prestige-subtitle">
                Apresiasi tinggi kepada siswa bimbingan kami di SMPN 129 Jakarta yang sukses meraih peringkat 10 besar paralel akademik tahun ini!
              </p>
            </div>
          </AnimateOnScroll>

          <div className="prestige-grid">
            {/* Card 1: Nizam Abdurrahman */}
            <AnimateOnScroll direction="left" className="prestige-card">
              <div className="prestige-card__image-container">
                <img 
                  src={`${import.meta.env.BASE_URL || '/'}images/student/nizam.jpeg`} 
                  alt="Nizam Abdurrahman" 
                  className="prestige-card__img" 
                />
                <div className="prestige-card__rank-badge rank-2">Peringkat 2</div>
              </div>
              <div className="prestige-card__content">
                <h3 className="prestige-card__name">Nizam Abdurrahman</h3>
                <div className="prestige-card__badges-row">
                  <span className="prestige-card__badge-tag badge-osis">Ketua OSIS</span>
                  <span className="prestige-card__badge-tag badge-category">Nilai Ijazah</span>
                </div>
                <div className="prestige-card__divider" />
                <ul className="prestige-card__details">
                  <li>
                    <span className="detail-label">Kategori:</span>
                    <span className="detail-val">Nilai Ijazah Tertinggi (10 Besar)</span>
                  </li>
                  <li>
                    <span className="detail-label">Sekolah:</span>
                    <span className="detail-val">SMPN 129 Jakarta</span>
                  </li>
                  <li>
                    <span className="detail-label">Hasil:</span>
                    <span className="detail-val font-highlight">Peringkat 2 (Kelas IX-H | Nilai: 93.77)</span>
                  </li>
                  <li>
                    <span className="detail-label">Organisasi:</span>
                    <span className="detail-val">Ketua OSIS SMPN 129 Jakarta</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Card 2: Yanuar Ahmad Al-Azmi */}
            <AnimateOnScroll direction="right" className="prestige-card">
              <div className="prestige-card__image-container">
                <img 
                  src={`${import.meta.env.BASE_URL || '/'}images/student/yanuar.jpeg`} 
                  alt="Yanuar Ahmad Al-Azmi" 
                  className="prestige-card__img" 
                />
                <div className="prestige-card__rank-badge rank-4">Peringkat 4</div>
              </div>
              <div className="prestige-card__content">
                <h3 className="prestige-card__name">Yanuar Ahmad Al-Azmi</h3>
                <div className="prestige-card__badges-row">
                  <span className="prestige-card__badge-tag badge-double">Double Top 5</span>
                  <span className="prestige-card__badge-tag badge-category">Ijazah &amp; Sidanira</span>
                </div>
                <div className="prestige-card__divider" />
                <ul className="prestige-card__details">
                  <li>
                    <span className="detail-label">Kategori 1:</span>
                    <span className="detail-val">Nilai Ijazah Tertinggi (10 Besar)</span>
                  </li>
                  <li>
                    <span className="detail-label">Hasil 1:</span>
                    <span className="detail-val font-highlight">Peringkat 4 (Kelas IX-E | Nilai: 93.55)</span>
                  </li>
                  <li>
                    <span className="detail-label">Kategori 2:</span>
                    <span className="detail-val">Nilai Sidanira / Akademik Terbaik (10 Besar)</span>
                  </li>
                  <li>
                    <span className="detail-label">Hasil 2:</span>
                    <span className="detail-val font-highlight">Peringkat 4 (Kelas 9E | Nilai Akademik: 60,55)</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Highlight Box: Yanuar Double Top 5 */}
          <AnimateOnScroll>
            <div className="prestige-highlight-box">
              <div className="prestige-highlight-box__icon-wrapper">
                <Sparkles size={28} className="prestige-highlight-box__icon" />
              </div>
              <div className="prestige-highlight-box__content">
                <span className="prestige-highlight-box__badge">Catatan Prestasi Khusus (High Achievement)</span>
                <h4 className="prestige-highlight-box__title">Double Top 5 — Yanuar Ahmad Al-Azmi</h4>
                <p className="prestige-highlight-box__desc">
                  Selamat kepada <strong>Yanuar Ahmad Al-Azmi</strong> yang berhasil mencatatkan prestasi ganda yang luar biasa (Double Top 5) dengan mengamankan posisi <strong>Peringkat 4 di kedua kategori sekaligus</strong>, baik pada Nilai Ijazah maupun Nilai Sidanira di SMPN 129 Jakarta!
                </p>
              </div>
              <div className="prestige-highlight-box__glow" />
            </div>
          </AnimateOnScroll>

          {/* Carousel Section Divider Title */}
          <AnimateOnScroll>
            <div className="prestige-section-divider">
              <h3 className="prestige-divider-title">Kisah Sukses &amp; Testimoni Alumni</h3>
              <p className="prestige-divider-subtitle">Mendengar langsung pengalaman mereka belajar dan meraih impian bersama Bimbel Junior</p>
            </div>
          </AnimateOnScroll>

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
