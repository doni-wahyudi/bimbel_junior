import { Users, Award, BookOpen, GraduationCap, ArrowDown } from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { teamMembers } from '../../data/team';
import './StructurePage.css';

export default function StructurePage() {
  // Extract key individuals from data model
  const founder = teamMembers.find(t => t.id === 1); // Ona
  const admin = teamMembers.find(t => t.id === 10); // Syakira

  // Group other tutors by subject divisions
  const divisions = [
    {
      title: 'Divisi Matematika',
      icon: GraduationCap,
      color: '#8B5CF6',
      description: 'Fokus pada pemahaman logika, numerasi, aljabar, geometri, serta persiapan ujian akhir sekolah.',
      members: teamMembers.filter(t => t.subjects.toLowerCase().includes('matematika') || t.subjects.toLowerCase().includes('mtk'))
    },
    {
      title: 'Divisi Sains / IPA',
      icon: Award,
      color: '#10B981',
      description: 'Mengembangkan kecerdasan ilmiah melalui pemahaman biologi, fisika, kimia, dan IPAS dasar.',
      members: teamMembers.filter(t => t.subjects.toLowerCase().includes('ipa') || t.subjects.toLowerCase().includes('ipas'))
    },
    {
      title: 'Divisi Bahasa Inggris',
      icon: BookOpen,
      color: '#F59E0B',
      description: 'Meningkatkan kecakapan komunikasi, literasi bahasa, pemahaman grammar, dan persiapan TOEFL/UTBK.',
      members: teamMembers.filter(t => t.subjects.toLowerCase().includes('inggris'))
    },
    {
      title: 'Divisi Bahasa Indonesia',
      icon: Users,
      color: '#EF4444',
      description: 'Fokus pada literasi membaca, kemampuan penulisan karya, pemahaman bacaan kritis, dan tata bahasa formal.',
      members: teamMembers.filter(t => t.subjects.toLowerCase().includes('indonesia'))
    }
  ];

  return (
    <>
      <SEO
        title="Struktur Organisasi"
        description="Struktur Organisasi Lembaga Bimbingan Belajar Junior. Dipimpin oleh Ona Rahmawati, M.Pd. dengan pembagian divisi pengajar profesional di bidangnya."
        keywords="struktur organisasi bimbel, pengajar junior bimbel, manajemen bimbel junior, tim bimbingan belajar"
      />

      {/* ===== Hero Banner ===== */}
      <section className="structure-hero gradient-hero">
        <div className="structure-hero__overlay" />
        <div className="container structure-hero__inner">
          <span className="structure-hero__badge">
            <Users size={14} /> Kelembagaan
          </span>
          <h1 className="structure-hero__title">Struktur Organisasi</h1>
          <p className="structure-hero__subtitle">
            Sinergi manajemen profesional dan pendidik berdedikasi demi prestasi terbaik putra-putri Anda
          </p>
        </div>
      </section>

      {/* ===== Organization Flowchart ===== */}
      <section className="section structure-chart">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Bagan Organisasi</h2>
              <p className="section-subtitle">
                Hierarki pembagian tugas dan wewenang operasional Bimbel Junior
              </p>
            </div>
          </AnimateOnScroll>

          <div className="structure-chart__flow">
            {/* Top Node - Founder/Pimpinan */}
            <AnimateOnScroll direction="down" className="structure-node-wrapper">
              <div className="structure-node structure-node--founder" style={{ borderColor: founder.color }}>
                <div className="structure-node__badge" style={{ backgroundColor: founder.color }}>
                  Owner &amp; Pimpinan
                </div>
                <div className="structure-node__content">
                  <h3 className="structure-node__name">{founder.name}</h3>
                  <p className="structure-node__role">{founder.role}</p>
                  <p className="structure-node__desc">{founder.bio}</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Connection Arrow */}
            <div className="structure-chart__arrow">
              <ArrowDown size={28} className="arrow-icon animate-bounce-slow" />
            </div>

            {/* Middle Node - Staf Admin */}
            <AnimateOnScroll direction="down" className="structure-node-wrapper">
              <div className="structure-node structure-node--admin" style={{ borderColor: admin.color }}>
                <div className="structure-node__badge" style={{ backgroundColor: admin.color }}>
                  Administrasi &amp; Keuangan
                </div>
                <div className="structure-node__content">
                  <h3 className="structure-node__name">{admin.name}</h3>
                  <p className="structure-node__role">{admin.role}</p>
                  <p className="structure-node__desc">{admin.bio}</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Connection Arrow */}
            <div className="structure-chart__arrow">
              <ArrowDown size={28} className="arrow-icon animate-bounce-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Subject Tutors Divisions ===== */}
      <section className="section structure-divisions bg-light">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Divisi Kependidikan (Tutor)</h2>
              <p className="section-subtitle">
                Pembagian tenaga pendidik berdasarkan rumpun keahlian mata pelajaran
              </p>
            </div>
          </AnimateOnScroll>

          <div className="structure-divisions__grid">
            {divisions.map((div, i) => {
              const Icon = div.icon;
              return (
                <AnimateOnScroll key={i} delay={i * 0.1} className="division-card">
                  <div className="division-card__header" style={{ borderBottomColor: div.color }}>
                    <div className="division-card__icon-box" style={{ backgroundColor: `${div.color}15`, color: div.color }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="division-card__title">{div.title}</h3>
                      <span className="division-card__count">{div.members.length} Pengajar</span>
                    </div>
                  </div>
                  <div className="division-card__body">
                    <p className="division-card__desc">{div.description}</p>
                    <div className="division-card__member-list">
                      <h4 className="division-card__section-title">Anggota Tim Pengajar:</h4>
                      <ul>
                        {div.members.map((member, idx) => (
                          <li key={idx} className="division-card__member-item">
                            <div className="division-card__member-dot" style={{ backgroundColor: div.color }} />
                            <div>
                              <span className="division-card__member-name">{member.name}</span>
                              <span className="division-card__member-role">{member.role}</span>
                            </div>
                            {member.certified && (
                              <span className="division-card__certified" title="Telah Bersertifikat Pendidik">
                                Certified
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
