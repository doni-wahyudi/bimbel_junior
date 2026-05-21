import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Filter,
  BookOpen,
  Users,
  Monitor,
  FileText,
  Trophy,
  Sofa,
  GraduationCap,
  Award,
  MapPin,
  Play
} from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { galleryItems } from '../../data/gallery';
import './GalleryPage.css';

const gridCategories = [
  { key: 'semua', label: 'Semua Aktivitas' },
  { key: 'outing', label: 'Outing & Rekreasi' },
  { key: 'SD', label: 'Tingkat SD' },
  { key: 'SMP', label: 'Tingkat SMP' },
  { key: 'highlight', label: 'Sorotan Utama' }
];

const categoryLabels = {
  belajar: 'Kegiatan Belajar',
  fasilitas: 'Fasilitas',
  prestasi: 'Prestasi',
  outing: 'Outing & Rekreasi'
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [lightboxSource, setLightboxSource] = useState('grid'); // 'featured', 'outing', or 'grid'
  const [visibleCount, setVisibleCount] = useState(12);

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // Featured items for the top scrolling filmstrip
  const featuredItems = useMemo(() => {
    return galleryItems.filter((item) => item.isFeatured);
  }, []);

  // Outing items for the bottom scrolling filmstrip
  const outingItems = useMemo(() => {
    return galleryItems.filter((item) => item.category === 'outing');
  }, []);

  // Filtered items for the main grid
  const filteredGridItems = useMemo(() => {
    if (activeFilter === 'semua') return galleryItems;
    if (activeFilter === 'outing') return galleryItems.filter((item) => item.category === 'outing');
    if (activeFilter === 'SD') return galleryItems.filter((item) => item.jenjang === 'SD');
    if (activeFilter === 'SMP') return galleryItems.filter((item) => item.jenjang === 'SMP');
    if (activeFilter === 'highlight') return galleryItems.filter((item) => item.isFeatured);
    return galleryItems;
  }, [activeFilter]);

  // Reset page limit on filter change
  useEffect(() => {
    setVisibleCount(12);
  }, [activeFilter]);

  // Auto scroll effect for filmstrips
  useEffect(() => {
    let animationFrameId;
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;

    // Use floating-point trackers to avoid integer truncation in browser scrollLeft
    let scrollPos1 = scrollContainer1 ? scrollContainer1.scrollLeft : 0;
    let scrollPos2 = scrollContainer2 ? scrollContainer2.scrollLeft : 0;

    const scroll = () => {
      // Forward scroll
      if (scrollContainer1 && !isHovered1) {
        scrollPos1 += 0.45;
        if (
          scrollPos1 >=
          scrollContainer1.scrollWidth - scrollContainer1.clientWidth - 1
        ) {
          scrollPos1 = 0;
        }
        scrollContainer1.scrollLeft = Math.round(scrollPos1);
      }

      // Reverse scroll
      if (scrollContainer2 && !isHovered2) {
        scrollPos2 -= 0.45;
        if (scrollPos2 <= 1) {
          scrollPos2 =
            scrollContainer2.scrollWidth - scrollContainer2.clientWidth;
        }
        scrollContainer2.scrollLeft = Math.round(scrollPos2);
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    if (featuredItems.length > 0 || outingItems.length > 0) {
      if (scrollContainer2 && scrollContainer2.scrollLeft === 0) {
        scrollContainer2.scrollLeft = scrollContainer2.scrollWidth;
        scrollPos2 = scrollContainer2.scrollWidth;
      }
      animationFrameId = requestAnimationFrame(scroll);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered1, isHovered2, featuredItems, outingItems]);

  const openLightboxFromFeatured = (index) => {
    setLightboxSource('featured');
    setSelectedIndex(index);
  };

  const openLightboxFromOuting = (index) => {
    setLightboxSource('outing');
    setSelectedIndex(index);
  };

  const openLightboxFromGrid = (index) => {
    setLightboxSource('grid');
    setSelectedIndex(index);
  };

  const closeLightbox = () => setSelectedIndex(null);

  const activeItemsList = useMemo(() => {
    if (lightboxSource === 'featured') return featuredItems;
    if (lightboxSource === 'outing') return outingItems;
    return filteredGridItems;
  }, [lightboxSource, featuredItems, outingItems, filteredGridItems]);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev + 1) % activeItemsList.length);
  }, [selectedIndex, activeItemsList]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev - 1 + activeItemsList.length) % activeItemsList.length);
  }, [selectedIndex, activeItemsList]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, goNext, goPrev]);

  const currentItem = selectedIndex !== null ? activeItemsList[selectedIndex] : null;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <>
      <SEO
        title="Galeri Kegiatan"
        description="Galeri foto Bimbel Junior — lihat dokumentasi kelas harian, fasilitas premium, dan prestasi gemilang siswa di Bimbel Junior."
        keywords="galeri bimbel junior, foto les, suasana belajar, fasilitas bimbel tanjung priok, dokumentasi kelas"
      />

      {/* ===== Hero ===== */}
      <section className="gallery-hero gradient-hero">
        <div className="gallery-hero__overlay" />
        <div className="container gallery-hero__inner">
          <span className="gallery-hero__badge">
            <Camera size={14} /> Galeri
          </span>
          <h1 className="gallery-hero__title">Dokumentasi Bimbel</h1>
          <p className="gallery-hero__subtitle">
            Melihat realitas belajar interaktif dan suasana kelas nyata di Bimbel Junior
          </p>
          <nav className="gallery-hero__breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="gallery-hero__breadcrumb-sep">/</span>
            <span>Galeri</span>
          </nav>
        </div>
      </section>

      {/* ===== Sorotan/Featured Section ===== */}
      <section className="section gallery-featured-section" style={{ paddingBottom: 'var(--space-md)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="section-tag">Sorotan Galeri</span>
            <h2 className="section-title">Aktivitas & Fasilitas Pilihan</h2>
            <p className="section-description">
              Galeri foto utama yang menampilkan kelas interaktif, fasilitas pendukung belajar, dan panggung apresiasi siswa.
            </p>
          </div>
        </div>

        <div className="container-fluid" style={{ padding: 0 }}>
          {/* Row 1: Forward Scroll */}
          <div
            className="gallery-filmstrip gallery-filmstrip--top"
            ref={scrollRef1}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            onTouchStart={() => setIsHovered1(true)}
            onTouchEnd={() => setIsHovered1(false)}
          >
            {[...featuredItems, ...featuredItems, ...featuredItems, ...featuredItems].map(
              (item, index) => {
                const originalIndex = index % featuredItems.length;
                const Icon = item.icon || BookOpen;
                return (
                  <div key={`row1-${item.id}-${index}`} className="gallery-item">
                    <button
                      className="gallery-item__card"
                      onClick={() => openLightboxFromFeatured(originalIndex)}
                      aria-label={`Lihat foto: ${item.title}`}
                    >
                      {item.photo ? (
                        item.isVideo ? (
                          <div className="gallery-item__video-wrapper">
                            <video
                              src={item.photo.startsWith('http') ? `${item.photo}#t=0.1` : `${import.meta.env.BASE_URL || '/'}${item.photo}#t=0.1`}
                              className="gallery-item__card-img"
                              preload="metadata"
                              muted
                              playsInline
                            />
                            <div className="gallery-item__play-btn">
                              <Play size={24} fill="currentColor" />
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.photo.startsWith('http') ? item.photo : `${import.meta.env.BASE_URL || '/'}${item.photo}`}
                            alt={item.title}
                            className="gallery-item__card-img"
                          />
                        )
                      ) : (
                        <div
                          className="gallery-item__card-fallback"
                          style={{ background: item.gradient }}
                        >
                          <Icon size={48} className="gallery-item__card-icon" />
                        </div>
                      )}
                      <div className="gallery-item__card-overlay" />
                      <div className="gallery-item__card-info">
                        <span
                          className={`gallery-item__card-category gallery-item__card-category--${item.category}`}
                        >
                          {categoryLabels[item.category] || 'Kegiatan'}
                        </span>
                        <h3 className="gallery-item__card-title">{item.title}</h3>
                      </div>
                      <div className="gallery-item__card-zoom">
                        <Camera size={20} />
                      </div>
                    </button>
                  </div>
                );
              }
            )}
          </div>

          {/* Row 2: Reverse Scroll */}
          {outingItems.length > 0 && (
            <div
              className="gallery-filmstrip gallery-filmstrip--bottom"
              ref={scrollRef2}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onTouchStart={() => setIsHovered2(true)}
              onTouchEnd={() => setIsHovered2(false)}
            >
              {[...outingItems]
                .reverse()
                .concat(
                  [...outingItems].reverse(),
                  [...outingItems].reverse(),
                  [...outingItems].reverse()
                )
                .map((item, index) => {
                  const originalIndex = outingItems.findIndex((orig) => orig.id === item.id);
                  const Icon = item.icon || BookOpen;
                  return (
                    <div key={`row2-${item.id}-${index}`} className="gallery-item">
                      <button
                        className="gallery-item__card"
                        onClick={() => openLightboxFromOuting(originalIndex)}
                        aria-label={`Lihat foto: ${item.title}`}
                      >
                        {item.photo ? (
                          item.isVideo ? (
                            <div className="gallery-item__video-wrapper">
                              <video
                                src={item.photo.startsWith('http') ? `${item.photo}#t=0.1` : `${import.meta.env.BASE_URL || '/'}${item.photo}#t=0.1`}
                                className="gallery-item__card-img"
                                preload="metadata"
                                muted
                                playsInline
                              />
                              <div className="gallery-item__play-btn">
                                <Play size={24} fill="currentColor" />
                              </div>
                            </div>
                          ) : (
                            <img
                              src={item.photo.startsWith('http') ? item.photo : `${import.meta.env.BASE_URL || '/'}${item.photo}`}
                              alt={item.title}
                              className="gallery-item__card-img"
                            />
                          )
                        ) : (
                          <div
                            className="gallery-item__card-fallback"
                            style={{ background: item.gradient }}
                          >
                            <Icon size={48} className="gallery-item__card-icon" />
                          </div>
                        )}
                        <div className="gallery-item__card-overlay" />
                        <div className="gallery-item__card-info">
                          <span
                            className={`gallery-item__card-category gallery-item__card-category--${item.category}`}
                          >
                            {categoryLabels[item.category] || 'Kegiatan'}
                          </span>
                          <h3 className="gallery-item__card-title">{item.title}</h3>
                        </div>
                        <div className="gallery-item__card-zoom">
                          <Camera size={20} />
                        </div>
                      </button>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>

      {/* ===== Main Grid & Filter Section ===== */}
      <section className="section gallery-grid-section" style={{ paddingTop: 'var(--space-2xl)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="section-tag">Jurnal Belajar</span>
            <h2 className="section-title">Linimasa Aktivitas Harian Kelas</h2>
            <p className="section-description">
              Dokumentasi nyata kegiatan belajar mengajar siswa SD & SMP di Bimbel Junior yang terus diupdate secara harian.
            </p>
          </div>

          {/* Grid Filters */}
          <div className="gallery-filter" style={{ marginBottom: 'var(--space-xl)' }}>
            <div className="gallery-filter__bar">
              <Filter size={18} className="gallery-filter__icon" />
              {gridCategories.map((cat) => (
                <button
                  key={cat.key}
                  className={`gallery-filter__btn${activeFilter === cat.key ? ' gallery-filter__btn--active' : ''}`}
                  onClick={() => setActiveFilter(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredGridItems.slice(0, visibleCount).map((item, index) => {
              const Icon = item.icon || BookOpen;
              return (
                <AnimateOnScroll key={`grid-${item.id}`} delay={(index % 4) * 0.05}>
                  <div className="gallery-item" style={{ width: '100%' }}>
                    <button
                      className="gallery-item__card"
                      onClick={() => openLightboxFromGrid(index)}
                      aria-label={`Lihat detail: ${item.title}`}
                    >
                      {item.photo ? (
                        item.isVideo ? (
                          <div className="gallery-item__video-wrapper">
                            <video
                              src={item.photo.startsWith('http') ? `${item.photo}#t=0.1` : `${import.meta.env.BASE_URL || '/'}${item.photo}#t=0.1`}
                              className="gallery-item__card-img"
                              preload="metadata"
                              muted
                              playsInline
                            />
                            <div className="gallery-item__play-btn">
                              <Play size={24} fill="currentColor" />
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.photo.startsWith('http') ? item.photo : `${import.meta.env.BASE_URL || '/'}${item.photo}`}
                            alt={item.title}
                            className="gallery-item__card-img"
                          />
                        )
                      ) : (
                        <div
                          className="gallery-item__card-fallback"
                          style={{ background: item.gradient }}
                        >
                          <Icon size={48} className="gallery-item__card-icon" />
                        </div>
                      )}
                      <div className="gallery-item__card-overlay" />
                      <div className="gallery-item__card-info">
                        <span
                          className={`gallery-item__card-category gallery-item__card-category--${item.category}`}
                        >
                          {item.jenjang || categoryLabels[item.category] || 'Kegiatan'}
                        </span>
                        <h3 className="gallery-item__card-title">{item.title}</h3>
                      </div>
                      <div className="gallery-item__card-zoom">
                        <Camera size={20} />
                      </div>
                    </button>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredGridItems.length === 0 && (
            <div className="gallery-empty">
              <Camera size={48} />
              <p>Belum ada dokumentasi di kategori ini</p>
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredGridItems.length && (
            <div className="gallery-load-more">
              <button className="gallery-load-more__btn" onClick={loadMore}>
                Tampilkan Lebih Banyak ({filteredGridItems.length - visibleCount} foto lagi)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== Lightbox Modal ===== */}
      {currentItem && (
        <div
          className="gallery-lightbox"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Lightbox galeri"
        >
          <div className="gallery-lightbox__content">
            {/* Close */}
            <button
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Tutup"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={goPrev}
              aria-label="Media sebelumnya"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Card */}
            <div className="gallery-lightbox__card">
              {currentItem.photo ? (
                <div className="gallery-lightbox__img-container">
                  {currentItem.isVideo ? (
                    <video
                      src={currentItem.photo.startsWith('http') ? currentItem.photo : `${import.meta.env.BASE_URL || '/'}${currentItem.photo}`}
                      controls
                      autoPlay
                      className="gallery-lightbox__video"
                    />
                  ) : (
                    <img
                      src={currentItem.photo.startsWith('http') ? currentItem.photo : `${import.meta.env.BASE_URL || '/'}${currentItem.photo}`}
                      alt={currentItem.title}
                      className="gallery-lightbox__img"
                    />
                  )}
                </div>
              ) : (
                <div
                  className="gallery-lightbox__fallback"
                  style={{ background: currentItem.gradient }}
                >
                  <Icon size={80} className="gallery-lightbox__card-icon" />
                  <span
                    className={`gallery-lightbox__card-category gallery-lightbox__card-category--${currentItem.category}`}
                  >
                    {categoryLabels[currentItem.category]}
                  </span>
                  <h3 className="gallery-lightbox__card-title">{currentItem.title}</h3>
                  <p className="gallery-lightbox__card-placeholder">
                    📷 Foto akan segera ditambahkan
                  </p>
                </div>
              )}
            </div>

            {/* Next */}
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={goNext}
              aria-label="Media berikutnya"
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <span className="gallery-lightbox__counter">
              {selectedIndex + 1} / {activeItemsList.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
