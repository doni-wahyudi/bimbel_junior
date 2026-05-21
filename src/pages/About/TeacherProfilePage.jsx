import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, GraduationCap, Award, BookOpen } from 'lucide-react';
import { teamMembers } from '../../data/team';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './TeacherProfilePage.css';

function getInitials(name) {
  const parts = name.replace(/,.*$/, '').replace(/\./g, '').trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0][0].toUpperCase();
}

export default function TeacherProfilePage() {
  const { id } = useParams();
  const teacher = teamMembers.find(t => t.id === parseInt(id, 10));

  if (!teacher) {
    return <Navigate to="/tentang-kami" replace />;
  }

  return (
    <>
      <SEO 
        title={`Profil Pengajar - ${teacher.name}`}
        description={`Mengenal lebih dekat ${teacher.name}, ${teacher.role} di Junior Bimbel.`}
      />

      <div className="teacher-profile">
        {/* Header Section */}
        <section className="teacher-profile-header gradient-hero">
          <div className="container">
            <nav className="teacher-profile__breadcrumb">
              <Link to="/tentang-kami" className="teacher-profile__back-link">
                <ChevronLeft size={20} />
                Kembali ke Tentang Kami
              </Link>
            </nav>
            
            <div className="teacher-profile__hero-content">
              <div className="teacher-profile__image-wrapper">
                <div 
                  className="teacher-profile__image-bg" 
                  style={{ background: teacher.color }}
                />
                {teacher.image ? (
                  <div className="teacher-profile__image-container">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="teacher-profile__image" 
                    />
                  </div>
                ) : (
                  <div 
                    className="teacher-profile__image-placeholder"
                    style={{ background: teacher.color }}
                  >
                    {getInitials(teacher.name)}
                  </div>
                )}
              </div>
              <div className="teacher-profile__title-wrapper">
                <h1 className="teacher-profile__name">{teacher.name}</h1>
                <p className="teacher-profile__role">{teacher.role}</p>
                <div className="teacher-profile__badges-container">
                  <div className="teacher-profile__subject-badge" style={{ backgroundColor: `${teacher.color}20`, color: '#fff', border: `1px solid ${teacher.color}` }}>
                    <BookOpen size={16} />
                    {teacher.subjects}
                  </div>
                  {teacher.certified && (
                    <div className="teacher-profile__certified-badge">
                      <Award size={16} />
                      Sertifikasi Pendidik
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="teacher-profile-content section">
          <div className="container">
            <div className="teacher-profile__grid">
              
              {/* Left Column - Main Bio */}
              <div className="teacher-profile__main">
                <AnimateOnScroll>
                  <div className="teacher-profile__card" style={{ marginBottom: 0 }}>
                    <h2 className="teacher-profile__section-title">Tentang {teacher.name.split(',')[0]}</h2>
                    <p className="teacher-profile__bio">{teacher.longBio || teacher.bio}</p>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Right Column - Sidebar */}
              <div className="teacher-profile__sidebar">
                <AnimateOnScroll delay={0.2}>
                  <div className="teacher-profile__card">
                    <h3 className="teacher-profile__sidebar-title">
                      <GraduationCap size={20} style={{ color: teacher.color }} />
                      Riwayat Pendidikan
                    </h3>
                    <ul className="teacher-profile__list">
                      {teacher.education?.map((edu, idx) => (
                        <li key={idx} className="teacher-profile__list-item">
                          <span className="teacher-profile__bullet" style={{ backgroundColor: teacher.color }} />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.3}>
                  <div className="teacher-profile__card" style={{ marginBottom: 0 }}>
                    <h3 className="teacher-profile__sidebar-title">
                      <Award size={20} style={{ color: teacher.color }} />
                      Pencapaian
                    </h3>
                    <ul className="teacher-profile__list">
                      {teacher.achievements?.map((ach, idx) => (
                        <li key={idx} className="teacher-profile__list-item">
                          <span className="teacher-profile__bullet" style={{ backgroundColor: teacher.color }} />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
