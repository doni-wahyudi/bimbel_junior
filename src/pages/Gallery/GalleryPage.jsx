import { useState, useEffect, useCallback, useRef } from 'react';
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
  Star,
  Heart,
  MapPin
} from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './GalleryPage.css';

const categories = [
  { key: 'semua', label: 'Semua' },
  { key: 'belajar', label: 'Kegiatan Belajar' },
  { key: 'fasilitas', label: 'Fasilitas' },
  { key: 'prestasi', label: 'Prestasi' }
];

import { galleryItems } from '../../data/gallery';

const categoryLabels = {
  belajar: 'Kegiatan Belajar',
  fasilitas: 'Fasilitas',
  prestasi: 'Prestasi'
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const filteredItems =
    activeFilter === 'semua'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Auto scroll effect for filmstrips
  useEffect(() => {
    let animationFrameId;
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;

    const scroll = () => {
      // Forward scroll
      if (scrollContainer1 && !isHovered1) {
        scrollContainer1.scrollLeft += 1.2; 
        if (scrollContainer1.scrollLeft >= scrollContainer1.scrollWidth - scrollContainer1.clientWidth - 1) {
          scrollContainer1.scrollLeft = 0;
        }
      }
      
      // Reverse scroll
      if (scrollContainer2 && !isHovered2) {
        scrollContainer2.scrollLeft -= 1.2;
        if (scrollContainer2.scrollLeft <= 1) {
          scrollContainer2.scrollLeft = scrollContainer2.scrollWidth - scrollContainer2.clientWidth;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    if (filteredItems.length > 0) {
      // Initialize second container to the far right so it can scroll left
      if (scrollContainer2 && scrollContainer2.scrollLeft === 0) {
        scrollContainer2.scrollLeft = scrollContainer2.scrollWidth;
      }
      animationFrameId = requestAnimationFrame(scroll);
    }
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered1, isHovered2, filteredItems]);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

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

  // Reset index when filter changes
  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  const currentItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <>
      <SEO
        title="Galeri"
        description="Galeri foto Bimbel Junior — lihat suasana belajar, fasilitas, dan prestasi siswa di Bimbel Junior Tanjung Priok, Jakarta Utara."
        keywords="galeri bimbel junior, foto les, suasana belajar, fasilitas bimbel tanjung priok"
      />

      {/* ===== Hero ===== */}
      <section className="gallery-hero gradient-hero">
        <div className="gallery-hero__overlay" />
        <div className="container gallery-hero__inner">
          <span className="gallery-hero__badge">
            <Camera size={14} /> Galeri
          </span>
          <h1 className="gallery-hero__title">Galeri Bimbel Junior</h1>
          <p className="gallery-hero__subtitle">
            Lihat suasana belajar di Bimbel Junior
          </p>
          <nav className="gallery-hero__breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="gallery-hero__breadcrumb-sep">/</span>
            <span>Galeri</span>
          </nav>
        </div>
      </section>

      {/* ===== Filter Bar ===== */}
      <section className="gallery-filter">
        <div className="container">
          <AnimateOnScroll>
            <div className="gallery-filter__bar">
              <Filter size={18} className="gallery-filter__icon" />
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`gallery-filter__btn${activeFilter === cat.key ? ' gallery-filter__btn--active' : ''}`}
                  onClick={() => setActiveFilter(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== Photo Filmstrip ===== */}
      <section className="section gallery-filmstrip-section">
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
            {[...filteredItems, ...filteredItems, ...filteredItems, ...filteredItems].map((item, index) => {
              const originalIndex = index % filteredItems.length;
              const Icon = item.icon;
              return (
                <div key={`row1-${item.id}-${index}`} className="gallery-item">
                  <button
                    className="gallery-item__card"
                    onClick={() => openLightbox(originalIndex)}
                    aria-label={`Lihat foto: ${item.title}`}
                  >
                    {item.photo ? (
                      <img src={item.photo} alt={item.title} className="gallery-item__card-img" />
                    ) : (
                      <div className="gallery-item__card-fallback" style={{ background: item.gradient }}>
                        <Icon size={48} className="gallery-item__card-icon" />
                      </div>
                    )}
                    <div className="gallery-item__card-overlay" />
                    <div className="gallery-item__card-info">
                      <span className={`gallery-item__card-category gallery-item__card-category--${item.category}`}>
                        {categoryLabels[item.category]}
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

          {/* Row 2: Reverse Scroll */}
          {filteredItems.length > 0 && (
            <div 
              className="gallery-filmstrip gallery-filmstrip--bottom"
              ref={scrollRef2}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onTouchStart={() => setIsHovered2(true)}
              onTouchEnd={() => setIsHovered2(false)}
            >
              {[...filteredItems].reverse().concat([...filteredItems].reverse(), [...filteredItems].reverse(), [...filteredItems].reverse()).map((item, index) => {
                const originalIndex = filteredItems.findIndex(orig => orig.id === item.id);
                const Icon = item.icon;
                return (
                  <div key={`row2-${item.id}-${index}`} className="gallery-item">
                    <button
                      className="gallery-item__card"
                      onClick={() => openLightbox(originalIndex)}
                      aria-label={`Lihat foto: ${item.title}`}
                    >
                      {item.photo ? (
                        <img src={item.photo} alt={item.title} className="gallery-item__card-img" />
                      ) : (
                        <div className="gallery-item__card-fallback" style={{ background: item.gradient }}>
                          <Icon size={48} className="gallery-item__card-icon" />
                        </div>
                      )}
                      <div className="gallery-item__card-overlay" />
                      <div className="gallery-item__card-info">
                        <span className={`gallery-item__card-category gallery-item__card-category--${item.category}`}>
                          {categoryLabels[item.category]}
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

          {filteredItems.length === 0 && (
            <div className="gallery-empty">
              <Camera size={48} />
              <p>Belum ada foto di kategori ini</p>
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
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Card */}
            <div className="gallery-lightbox__card">
              {currentItem.photo ? (
                <div className="gallery-lightbox__img-container">
                  <img
                    src={currentItem.photo}
                    alt={currentItem.title}
                    className="gallery-lightbox__img"
                  />
                  <div className="gallery-lightbox__card-caption">
                    <div className="gallery-lightbox__card-header">
                      <span className={`gallery-lightbox__card-category gallery-lightbox__card-category--${currentItem.category}`}>
                        {categoryLabels[currentItem.category]}
                      </span>
                      {currentItem.date && (
                        <span className="gallery-lightbox__card-date">
                          {currentItem.date}
                        </span>
                      )}
                    </div>
                    <h3 className="gallery-lightbox__card-title">{currentItem.title}</h3>
                    {currentItem.description && (
                      <p className="gallery-lightbox__card-desc">{currentItem.description}</p>
                    )}
                    {currentItem.location && (
                      <div className="gallery-lightbox__card-location">
                        <MapPin size={16} />
                        {currentItem.location}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="gallery-lightbox__fallback"
                  style={{ background: currentItem.gradient }}
                >
                  <currentItem.icon size={80} className="gallery-lightbox__card-icon" />
                  <span className={`gallery-lightbox__card-category gallery-lightbox__card-category--${currentItem.category}`}>
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
              aria-label="Foto berikutnya"
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <span className="gallery-lightbox__counter">
              {selectedIndex + 1} / {filteredItems.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
