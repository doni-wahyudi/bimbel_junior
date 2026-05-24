import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BookOpen,
  MapPin,
  Wifi,
  Bath,
  Monitor,
  Star,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  FileCheck,
  Building2
} from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { teamMembers } from '../../data/team';
import './AboutPage.css';

function getInitials(name) {
  const parts = name.replace(/,.*$/, '').replace(/\./g, '').trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0][0].toUpperCase();
}

const stats = [
  { value: '5+', label: 'Tahun Pengalaman', icon: Award },
  { value: '4.9', label: 'Rating Google', icon: Star },
  { value: '100+', label: 'Siswa Alumni', icon: Users },
  { value: '3', label: 'Jenjang Pendidikan', icon: GraduationCap }
];

const missionItems = [
  'Menyediakan pengajaran berkualitas dengan metode terkini',
  'Membimbing siswa secara personal sesuai kemampuan masing-masing',
  'Membangun karakter dan motivasi belajar siswa',
  'Menjalin komunikasi aktif dengan orang tua'
];

const facilities = [
  {
    icon: Monitor,
    title: '2 Ruang Belajar Nyaman',
    desc: 'Dilengkapi AC untuk kenyamanan belajar'
  },
  {
    icon: Users,
    title: 'Ruang Admin',
    desc: 'Tempat konsultasi orang tua dan administrasi'
  },
  {
    icon: Bath,
    title: 'Toilet Bersih',
    desc: 'Fasilitas toilet yang selalu terjaga kebersihannya'
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Gratis',
    desc: 'Koneksi internet untuk mendukung pembelajaran digital'
  }
];

const legalItems = [
  { icon: ShieldCheck, label: 'NPSN', value: 'K5669620' },
  { icon: Building2, label: 'Jenis', value: 'Satuan Pendidikan Non Formal' },
  { icon: FileCheck, label: 'Status', value: 'Terdaftar di Dapodik' }
];

export default function AboutPage() {
  const divisions = [
    {
      id: 'manajemen',
      title: 'Manajemen & Administrasi',
      desc: 'Pengelola operasional, keuangan, akademis, dan administrasi Bimbel Junior.',
      members: teamMembers.filter(m => m.id === 1 || m.id === 3 || m.id === 10)
    },
    {
      id: 'tutor',
      title: 'Tutor & Staf Pengajar',
      desc: 'Tenaga pendidik profesional dan berpengalaman yang berdedikasi tinggi membimbing siswa meraih prestasi.',
      members: teamMembers.filter(m => m.id === 2 || m.id === 3 || m.id === 4 || m.id === 5 || m.id === 6 || m.id === 7 || m.id === 9 || m.id === 11 || m.id === 12 || m.id === 13)
    }
  ];

  return (
    <>
      <SEO
        title="Tentang Kami"
        description="Tentang Bimbel Junior — lembaga bimbingan belajar terpercaya di Tanjung Priok, Jakarta Utara. Didirikan oleh Ona Rahmawati, M.Pd. dengan rating 4.9 di Google."
        keywords="tentang bimbel junior, profil bimbel, les privat tanjung priok, bimbel terpercaya jakarta utara"
      />

      {/* ===== Hero ===== */}
      <section className="about-hero gradient-hero">
        <div className="about-hero__overlay" />
        <div className="container about-hero__inner">
          <span className="about-hero__badge">
            <Heart size={14} /> Tentang Kami
          </span>
          <h1 className="about-hero__title">Tentang Bimbel Junior</h1>
          <p className="about-hero__subtitle">
            Lebih dari sekadar tempat les — kami adalah partner belajar anak Anda
          </p>
          <nav className="about-hero__breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="about-hero__breadcrumb-sep">/</span>
            <span>Tentang Kami</span>
          </nav>
        </div>
      </section>

      {/* ===== Sejarah & Profil ===== */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story__grid">
            <AnimateOnScroll direction="left" className="about-story__text">
              <span className="about-story__label">
                <BookOpen size={16} /> Cerita Kami
              </span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Sejarah &amp; Profil
              </h2>
              <p>
                Bimbel Junior didirikan oleh <strong>Ona Rahmawati, M.Pd.</strong> dengan visi menciptakan lingkungan belajar yang menyenangkan dan efektif bagi
                siswa di Tanjung Priok, Jakarta Utara.
              </p>
              <p>
                Berawal dari keinginan untuk membantu anak-anak di lingkungan sekitar
                yang kesulitan dalam pelajaran sekolah, Bimbel Junior kini telah
                berkembang menjadi lembaga bimbingan belajar terpercaya yang melayani
                jenjang SD, SMP, dan SMA.
              </p>
              <p>
                Dengan pengalaman lebih dari 5 tahun dan rating 4.9 di Google Maps,
                kami berkomitmen untuk terus memberikan yang terbaik bagi setiap siswa.
              </p>
              <Link to="/program" className="btn btn-primary about-story__cta">
                Lihat Program Kami <ArrowRight size={18} />
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" className="about-story__stats">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div className="about-stat-card" key={i}>
                    <div className="about-stat-card__icon">
                      <Icon size={22} />
                    </div>
                    <span className="about-stat-card__value">{s.value}</span>
                    <span className="about-stat-card__label">{s.label}</span>
                  </div>
                );
              })}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== Visi & Misi ===== */}
      <section className="section about-vision">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Visi &amp; Misi</h2>
              <p className="section-subtitle">
                Komitmen kami untuk pendidikan yang lebih baik
              </p>
            </div>
          </AnimateOnScroll>

          <div className="about-vision__grid">
            <AnimateOnScroll direction="left" className="about-vision__card about-vision__card--visi">
              <div className="about-vision__card-icon about-vision__card-icon--visi">
                <Eye size={28} />
              </div>
              <h3 className="about-vision__card-title">Visi</h3>
              <p className="about-vision__card-text">
                Menjadi bimbingan belajar terdepan yang menghasilkan generasi
                berprestasi dan berkarakter di Jakarta Utara
              </p>
              <div className="about-vision__card-glow" />
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" className="about-vision__card about-vision__card--misi">
              <div className="about-vision__card-icon about-vision__card-icon--misi">
                <Target size={28} />
              </div>
              <h3 className="about-vision__card-title">Misi</h3>
              <ul className="about-vision__mission-list">
                {missionItems.map((item, i) => (
                  <li key={i} className="about-vision__mission-item">
                    <CheckCircle size={18} className="about-vision__check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="about-vision__card-glow" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== Tim Pengajar ===== */}
      <section className="section about-team">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Tim Pengajar Kami</h2>
              <p className="section-subtitle">
                Tenaga pengajar berpengalaman dan berdedikasi tinggi
              </p>
            </div>
          </AnimateOnScroll>
          <div className="about-team__divisions stagger-children">
            {divisions.map((division) => (
              <div key={division.id} className="about-team__division-section">
                <div className="about-team__division-header">
                  <h3 className="about-team__division-title">{division.title}</h3>
                  <p className="about-team__division-desc">{division.desc}</p>
                </div>
                
                <div className="about-team__grid">
                  {division.members.map((member) => (
                    <AnimateOnScroll key={member.id}>
                      <Link to={`/tentang-kami/pengajar/${member.id}`} className="about-team__card">
                        {member.certified && (
                          <span className="about-team__certified-badge" title="Sertifikasi Pendidik">
                            <Award size={12} />
                          </span>
                        )}
                        <div className="about-team__avatar-container">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="about-team__avatar-img"
                              loading="lazy"
                            />
                          ) : (
                            <div
                              className="about-team__avatar"
                              style={{ background: member.color }}
                            >
                              {getInitials(member.name)}
                            </div>
                          )}
                        </div>
                        <div className="about-team__details">
                          <h4 className="about-team__name">{member.name}</h4>
                          <p className="about-team__role">{member.role}</p>
                          <div className="about-team__subjects-container">
                            <span className="about-team__subjects">{member.subjects}</span>
                          </div>
                        </div>
                        
                        <div className="about-team__hover-cta">
                          Lihat Profil <ArrowRight size={14} />
                        </div>
                      </Link>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Fasilitas ===== */}
      <section className="section about-facilities">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Fasilitas Kami</h2>
              <p className="section-subtitle">
                Lingkungan belajar yang nyaman dan mendukung
              </p>
            </div>
          </AnimateOnScroll>

          <div className="about-facilities__grid stagger-children">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimateOnScroll key={i} className="about-facility-card">
                  <div className="about-facility-card__icon">
                    <Icon size={28} />
                  </div>
                  <h4 className="about-facility-card__title">{f.title}</h4>
                  <p className="about-facility-card__desc">{f.desc}</p>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Legalitas ===== */}
      <section className="section about-legality">
        <div className="container">
          <AnimateOnScroll>
            <div className="about-legality__inner">
              <h3 className="about-legality__title">
                <ShieldCheck size={22} /> Legalitas &amp; Akreditasi
              </h3>
              <div className="about-legality__badges">
                {legalItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div className="about-legality__badge" key={i}>
                      <Icon size={20} className="about-legality__badge-icon" />
                      <div>
                        <span className="about-legality__badge-label">{item.label}</span>
                        <span className="about-legality__badge-value">{item.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
