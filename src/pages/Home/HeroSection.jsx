import { useState, useEffect } from 'react';
import { GraduationCap, Star, Users, Award, MessageCircle, BookOpen } from 'lucide-react';
import './HeroSection.css';

const WHATSAPP_URL = 'https://wa.me/6281211663711?text=Halo%20Bimbel%20Junior%2C%20saya%20ingin%20bertanya%20tentang%20program%20bimbingan%20belajar.';

export default function HeroSection() {
  const HERO_IMAGES = [
    `${import.meta.env.BASE_URL}images/hero/13.jpg.jpeg`,
    `${import.meta.env.BASE_URL}images/hero/14.jpg.jpeg`,
    `${import.meta.env.BASE_URL}images/hero/15.jpg.jpeg`
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero gradient-hero">
      {/* Floating geometric shapes */}
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape--1" />
        <div className="hero-shape hero-shape--2" />
        <div className="hero-shape hero-shape--3" />
        <div className="hero-shape hero-shape--4" />
        <div className="hero-shape hero-shape--5" />
        <div className="hero-shape hero-shape--6" />
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Left - Text Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <Star size={16} />
              <span>Rating 4.9 di Google Maps</span>
            </div>

            <h1 className="hero-title">
              Raih{' '}
              <span className="hero-title-highlight">Prestasi Terbaikmu</span>{' '}
              Bersama Bimbel Junior
            </h1>

            <p className="hero-subtitle">
              Bimbingan belajar terpercaya untuk SD, SMP, dan SMA di Tanjung Priok, Jakarta Utara
            </p>

            <div className="hero-buttons">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdO_nrN-Xz7HyRVaJ2gLOzIwoa2X-g3cIDrvKqKwMQ3Hpn_tQ/viewform" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
                <GraduationCap size={20} />
                Daftar Sekarang
              </a>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-whatsapp-modal', {
                    detail: {
                      title: 'Konsultasi Gratis',
                      defaultMessage: 'Halo Bimbel Junior, saya ingin berkonsultasi mengenai bimbingan belajar.',
                      placeholder: 'Contoh: Jadwal kelas baru, harga paket, atau tryout terdekat.'
                    }
                  }));
                }}
                className="hero-btn-secondary"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <MessageCircle size={20} />
                Konsultasi Gratis
              </button>
            </div>
          </div>

          {/* Right - Hero Image Slider */}
          <div className="hero-illustration">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow" />
              {HERO_IMAGES.map((imgSrc, index) => (
                <img 
                  key={imgSrc}
                  src={imgSrc} 
                  alt={`Siswa-siswi Bimbel Junior belajar bersama ${index + 1}`} 
                  className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats">
          <div className="hero-stats-bar">
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Star />
              </div>
              <div className="hero-stat-info">
                <strong>4.9/5.0</strong>
                <span>Rating Google</span>
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Award />
              </div>
              <div className="hero-stat-info">
                <strong>5+ Tahun</strong>
                <span>Pengalaman</span>
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <Users />
              </div>
              <div className="hero-stat-info">
                <strong>5–10</strong>
                <span>Siswa/Kelas</span>
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon">
                <GraduationCap />
              </div>
              <div className="hero-stat-info">
                <strong>100%</strong>
                <span>Tutor M.Pd.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
