import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen, GraduationCap, Award, Calculator, BookText,
  FlaskConical, Globe, Map, Zap, Leaf, TrendingUp,
  Clock, Users, Calendar, Check, Star, Sparkles,
  ChevronRight, MessageCircle, ArrowRight
} from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { programs } from '../../data/programs';
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

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (['sd', 'smp', 'sma'].includes(hash)) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  const program = programs[activeTab];
  const TabIcon = ProgramIcon[activeTab];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `/program#${tab}`);
  };

  return (
    <>
      <SEO
        title="Program Bimbingan Belajar"
        description="Program bimbingan belajar SD, SMP, dan SMA di Bimbel Junior Tanjung Priok. Kurikulum lengkap, jadwal fleksibel, dan biaya terjangkau."
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
              <div className="program-schedule">
                <table className="program-schedule__table">
                  <thead>
                    <tr>
                      <th>Hari</th>
                      <th>Waktu</th>
                      <th>Mata Pelajaran</th>
                    </tr>
                  </thead>
                  <tbody>
                    {program.scheduleTable.map((row, index) => (
                      <tr key={index}>
                        <td>{row.day}</td>
                        <td>
                          <span className="program-schedule__time">{row.time}</span>
                        </td>
                        <td>{row.subject}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
              <div className="program-pricing">
                {program.pricing.map((tier, index) => (
                  <AnimateOnScroll key={tier.tier} delay={index * 0.15}>
                    <div className={`program-pricing-card ${tier.popular ? 'program-pricing-card--popular' : ''}`}
                         style={{ '--accent': program.color, '--accent-light': program.colorLight }}>
                      {tier.popular && (
                        <div className="program-pricing-card__badge">
                          <Star size={14} /> Paling Populer
                        </div>
                      )}
                      <h3 className="program-pricing-card__tier">{tier.tier}</h3>
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
                       <button
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent('open-whatsapp-modal', {
                            detail: {
                              title: `Daftar Paket ${tier.tier} - ${program.name}`,
                              defaultMessage: `Saya tertarik mendaftar Paket *${tier.tier}* untuk program *${program.name}*.`,
                              placeholder: 'Contoh: Tanya jadwal mulai bimbingan, sistem pembayaran, dll.',
                              defaultGrade: activeTab.toUpperCase()
                            }
                          }));
                        }}
                        className={`program-pricing-card__cta btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ border: 'none', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                      >
                        <MessageCircle size={18} />
                        Daftar Sekarang
                      </button>
                    </div>
                  </AnimateOnScroll>
                ))}
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
