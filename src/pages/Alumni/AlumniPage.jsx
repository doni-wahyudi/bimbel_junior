import { Quote, GraduationCap, MapPin, School, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { alumniData } from '../../data/alumni';
import './AlumniPage.css';

export default function AlumniPage() {
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
          <div className="alumni-grid">
            {alumniData.map((alumni, index) => (
              <AnimateOnScroll key={alumni.id} delay={index * 0.1}>
                <div className="alumni-card">
                  <div className="alumni-card__header">
                    <div className="alumni-card__avatar">
                      {alumni.image ? (
                        <img src={alumni.image} alt={alumni.name} />
                      ) : (
                        <div className="alumni-card__avatar-fallback">
                          <GraduationCap size={32} />
                        </div>
                      )}
                    </div>
                    <div className="alumni-card__profile">
                      <h2 className="alumni-card__name">{alumni.name}</h2>
                      <span className="alumni-card__year">Alumni {alumni.year}</span>
                    </div>
                  </div>

                  <div className="alumni-card__schools">
                    <div className="alumni-card__school-item">
                      <MapPin size={16} />
                      <div className="alumni-card__school-info">
                        <span className="alumni-card__school-label">Asal Sekolah</span>
                        <span className="alumni-card__school-name">{alumni.previousSchool}</span>
                      </div>
                    </div>
                    
                    <div className="alumni-card__school-arrow">
                      <ArrowRight size={20} />
                    </div>

                    <div className="alumni-card__school-item alumni-card__school-item--current">
                      <School size={16} />
                      <div className="alumni-card__school-info">
                        <span className="alumni-card__school-label">Diterima di</span>
                        <span className="alumni-card__school-name">{alumni.currentSchool}</span>
                      </div>
                    </div>
                  </div>

                  <div className="alumni-card__quote-wrapper">
                    <Quote className="alumni-card__quote-icon" size={24} />
                    <p className="alumni-card__quote">{alumni.quote}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.4}>
            <div className="alumni-cta">
              <h2>Jadilah Kisah Sukses Selanjutnya!</h2>
              <p>Mari ukir prestasi terbaikmu bersama tutor profesional kami.</p>
              <Link to="/daftar" className="btn btn-primary">
                <GraduationCap size={20} />
                Daftar Sekarang
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
