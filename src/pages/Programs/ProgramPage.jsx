import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen, GraduationCap, Award, Calculator, BookText,
  FlaskConical, Globe, Map, Zap, Leaf, TrendingUp,
  Clock, Users, Calendar, Check, Star, Sparkles,
  ChevronLeft, ChevronRight, MessageCircle, ArrowRight,
  Ticket, Gift
} from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { programs, registrationFee } from '../../data/programs';
import './ProgramPage.css';

const IconMap = {
  Calculator, BookText, FlaskConical, Globe, Map, Zap, Leaf, TrendingUp,
  BookOpen, GraduationCap, Award
};

const ProgramIcon = {
  sd: BookOpen,
  smp: GraduationCap,
  sma: Award
};

export default function ProgramPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('sd');
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

  const program = programs[activeTab];
  const TabIcon = ProgramIcon[activeTab];

  const maxIndex = Math.max(0, program.pricing.length - slidesPerView);

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex, activeTab]);

  // Reset index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const goTo = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `/program#${tab}`);
  };

  return (
    <>
      <SEO
        title="Program Bimbingan Belajar"
        description="Program bimbingan belajar SD, SMP, dan SMA di Junior Bimbel Tanjung Priok. Kurikulum lengkap, jadwal fleksibel, dan biaya terjangkau."
        keywords="program bimbel, les SD, les SMP, les SMA, bimbel Tanjung Priok, les privat Jakarta Utara"
      />

      {/* Hero */}
      <section className="program-hero">
        <div className="program-hero__shapes">
          <div className="program-hero__shape program-hero__shape--1"></div>
          <div className="program-hero__shape program-hero__shape--2"></div>
          <div className="program-hero__shape program-hero__shape--3"></div>
        </div>
        <div className="container program-hero__content">
          <nav className="program-hero__breadcrumb">
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <span>Program</span>
          </nav>
          <h1 className="program-hero__title">Program Bimbingan Belajar</h1>
          <p className="program-hero__subtitle">
            Pilih jenjang pendidikan yang sesuai untuk putra-putri Anda
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="program-tabs">
        <div className="container">
          <div className="program-tabs__nav">
            {Object.entries(programs).map(([key, prog]) => {
              const Icon = ProgramIcon[key];
              return (
                <button
                  key={key}
                  className={`program-tabs__tab ${activeTab === key ? 'program-tabs__tab--active' : ''}`}
                  onClick={() => handleTabClick(key)}
                  style={{
                    '--tab-color': prog.color,
                    '--tab-color-light': prog.colorLight
                  }}
                >
                  <Icon size={20} />
                  <span>{prog.name}</span>
                  {prog.isNew && <span className="badge badge-new">🆕 Baru!</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="program-content section">
        <div className="container">
          {/* Overview */}
          <AnimateOnScroll>
            <div className="program-overview" style={{ '--accent': program.color, '--accent-light': program.colorLight }}>
              <div className="program-overview__grid">
                <div className="program-overview__item">
                  <div className="program-overview__icon" style={{ background: program.colorLight, color: program.color }}>
                    <Users size={22} />
                  </div>
                  <div>
                    <span className="program-overview__label">Target Siswa</span>
                    <span className="program-overview__value">{program.target}</span>
                  </div>
                </div>
                <div className="program-overview__item">
                  <div className="program-overview__icon" style={{ background: program.colorLight, color: program.color }}>
                    <Users size={22} />
                  </div>
                  <div>
                    <span className="program-overview__label">Ukuran Kelas</span>
                    <span className="program-overview__value">{program.classSize}</span>
                  </div>
                </div>
                <div className="program-overview__item">
                  <div className="program-overview__icon" style={{ background: program.colorLight, color: program.color }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className="program-overview__label">Jadwal</span>
                    <span className="program-overview__value">{program.schedule}</span>
                  </div>
                </div>
                <div className="program-overview__item">
                  <div className="program-overview__icon" style={{ background: program.colorLight, color: program.color }}>
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <span className="program-overview__label">Metode</span>
                    <span className="program-overview__value">{program.method}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Mata Pelajaran */}
          <AnimateOnScroll>
            <div className="program-section">
              <h2 className="program-section__title">
                <BookOpen size={24} style={{ color: program.color }} />
                Mata Pelajaran
              </h2>
              <div className="program-subjects">
                {program.subjects.map((subject, index) => {
                  const SubjectIcon = IconMap[subject.icon] || BookOpen;
                  return (
                    <AnimateOnScroll key={subject.name} delay={index * 0.1}>
                      <div className="program-subject-card" style={{ '--accent': program.color, '--accent-light': program.colorLight }}>
                        <div className="program-subject-card__icon">
                          <SubjectIcon size={24} />
                        </div>
                        <h3 className="program-subject-card__name">{subject.name}</h3>
                        <p className="program-subject-card__desc">{subject.description}</p>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Jadwal */}
          <AnimateOnScroll>
            <div className="program-section">
              <h2 className="program-section__title">
                <Calendar size={24} style={{ color: program.color }} />
                Jadwal Belajar
              </h2>
              <div className="program-schedule-new" style={{ '--accent-color': program.color }}>
                <div className="program-schedule-new__grid">
                  <div className="program-schedule-new__info-card">
                    <h4>Informasi Jadwal</h4>
                    <ul>
                      <li>
                        <strong>Hari Belajar:</strong> {program.scheduleInfo.days}
                      </li>
                      <li>
                        <strong>Frekuensi:</strong> {program.scheduleInfo.frequency}
                      </li>
                      <li>
                        <strong>Durasi Sesi:</strong> {program.scheduleInfo.duration}
                      </li>
                    </ul>
                  </div>
                  <div className="program-schedule-new__slots-card">
                    <h4>Pilihan Slot Waktu</h4>
                    <p className="program-schedule-new__note">Siswa bebas memilih slot waktu berikut untuk setiap pertemuan:</p>
                    <div className="program-schedule-new__slots-list">
                      {program.scheduleInfo.slots.map((slot, index) => (
                        <div key={index} className="program-schedule-new__slot-item">
                          <span className="program-schedule-new__slot-label">{slot.label}</span>
                          <span className="program-schedule-new__slot-time">{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Biaya */}
          <AnimateOnScroll>
            <div className="program-section">
              <h2 className="program-section__title">
                <Star size={24} style={{ color: program.color }} />
                Biaya Bimbingan
              </h2>
              
              {/* Premium Registration Info & Highlights */}
              <div className="program-registration-container" style={{ '--accent-color': program.color, '--accent-light': program.colorLight }}>
                <div className="registration-price-box">
                  <div className="registration-price-badge">
                    <Sparkles size={14} className="sparkle-icon" /> Biaya Pendaftaran
                  </div>
                  <div className="registration-price-value">
                    <span className="registration-price-currency">Rp</span>
                    <span className="registration-price-number">{registrationFee.amount}</span>
                  </div>
                  <p className="registration-price-subtitle">Sekali bayar saat mendaftar awal</p>
                </div>
                
                <div className="registration-benefits-divider"></div>
                
                <div className="registration-benefits-box">
                  <h4 className="registration-benefits-title">Dapatkan Benefit Eksklusif Pendaftaran:</h4>
                  <div className="registration-benefits-grid">
                    <div className="benefit-highlight-card">
                      <div className="benefit-icon-wrapper" style={{ background: `${program.color}15`, color: program.color }}>
                        <BookText size={24} />
                        <span className="benefit-qty-badge">4x</span>
                      </div>
                      <div className="benefit-details">
                        <h5 className="benefit-name">4 Buku Lembar Kerja Siswa (LKS)</h5>
                        <p className="benefit-desc">Buku latihan soal lengkap untuk seluruh mata pelajaran utama sesuai kurikulum sekolah.</p>
                      </div>
                    </div>

                    <div className="benefit-highlight-card special-highlight">
                      <div className="benefit-icon-wrapper outing-voucher" style={{ background: '#F59E0B15', color: '#F59E0B' }}>
                        <Ticket size={24} />
                        <span className="benefit-free-badge">Gratis</span>
                      </div>
                      <div className="benefit-details">
                        <h5 className="benefit-name">Voucher Outing Akhir Semester</h5>
                        <p className="benefit-desc">Akses gratis ke acara jalan-jalan/outing seru bersama teman-teman Junior Bimbel di akhir semester!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Cards Carousel */}
              <div className="program-pricing-wrapper">
                <div className="program-pricing-carousel">
                  <div
                    className="program-pricing-track"
                    style={{
                      transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                    }}
                  >
                    {program.pricing.map((tier, index) => {
                      const isPrivat = tier.tier.toLowerCase().includes('privat');
                      const cleanTier = tier.tier.replace(/^(Reguler|Privat)\s+/, '');
                      return (
                        <div key={tier.tier} className="program-pricing-slide">
                          <div className={`program-pricing-card ${tier.popular ? 'program-pricing-card--popular' : ''} ${isPrivat ? 'program-pricing-card--privat' : 'program-pricing-card--reguler'}`}
                               style={{
                                 '--accent': isPrivat ? '#D97706' : program.color,
                                 '--accent-light': isPrivat ? '#FEF3C7' : program.colorLight
                               }}>
                            
                            {/* Category Badge */}
                            <div className={`program-pricing-card__category-badge ${isPrivat ? 'category-badge--privat' : 'category-badge--reguler'}`}>
                              {isPrivat ? (
                                <>
                                  <Sparkles size={12} /> Kelas Privat (1–2 Anak)
                                </>
                              ) : (
                                <>
                                  <Users size={12} /> Kelas Reguler (5–10 Anak)
                                </>
                              )}
                            </div>

                            {tier.popular && (
                              <div className="program-pricing-card__badge">
                                <Star size={14} /> Paling Populer
                              </div>
                            )}
                            <h3 className="program-pricing-card__tier">{cleanTier}</h3>
                            <div className="program-pricing-card__price">
                              <span className="program-pricing-card__currency">Rp</span>
                              <span className="program-pricing-card__amount">{tier.price}</span>
                              <span className="program-pricing-card__period">{tier.period}</span>
                            </div>
                            <ul className="program-pricing-card__features">
                              {tier.features.map((feature, i) => (
                                <li key={i}>
                                  <Check size={16} className="program-pricing-card__check" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <a
                              href="https://docs.google.com/forms/d/e/1FAIpQLSdO_nrN-Xz7HyRVaJ2gLOzIwoa2X-g3cIDrvKqKwMQ3Hpn_tQ/viewform"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`program-pricing-card__cta btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                              style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                            >
                              <GraduationCap size={18} />
                              Daftar Sekarang
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Carousel Navigation */}
                <div className="program-pricing-nav">
                  <button
                    className="program-pricing-arrow"
                    onClick={goPrev}
                    disabled={currentIndex === 0}
                    aria-label="Paket sebelumnya"
                    style={{ '--nav-accent': program.color }}
                  >
                    <ChevronLeft />
                  </button>

                  <div className="program-pricing-dots">
                    {Array.from({ length: maxIndex + 1 }, (_, i) => (
                      <button
                        key={i}
                        className={`program-pricing-dot ${i === currentIndex ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`Ke paket ${i + 1}`}
                        style={{ '--nav-accent': program.color }}
                      />
                    ))}
                  </div>

                  <button
                    className="program-pricing-arrow"
                    onClick={goNext}
                    disabled={currentIndex >= maxIndex}
                    aria-label="Paket berikutnya"
                    style={{ '--nav-accent': program.color }}
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* CTA */}
          <AnimateOnScroll>
            <div className="program-cta">
              <div className="program-cta__content">
                <h2 className="program-cta__title">Daftarkan Putra-Putri Anda Sekarang</h2>
                <p className="program-cta__text">
                  Konsultasi gratis untuk memilih program yang tepat. Hubungi kami sekarang!
                </p>
                <div className="program-cta__buttons">
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-whatsapp-modal', {
                        detail: {
                          title: `Konsultasi Program ${program.name}`,
                          defaultMessage: `Saya ingin bertanya lebih lanjut mengenai program bimbingan belajar *${program.name}*.`,
                          placeholder: 'Tulis pertanyaan atau info yang ingin Anda tanyakan...',
                          defaultGrade: activeTab.toUpperCase()
                        }
                      }));
                    }}
                    className="btn btn-whatsapp btn-lg"
                    style={{ border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <MessageCircle size={20} />
                    Chat via WhatsApp
                  </button>
                  <Link to="/hubungi-kami" className="btn btn-outline-white btn-lg">
                    <ArrowRight size={20} />
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
