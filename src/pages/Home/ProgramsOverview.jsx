import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Award } from 'lucide-react';
import { programs } from '../../data/programs';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './ProgramsOverview.css';

const iconMap = {
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
  Award: Award,
};

const programOrder = ['sd', 'smp', 'sma'];

export default function ProgramsOverview() {
  return (
    <section className="programs-overview section" id="program-overview">
      <div className="container">
        <AnimateOnScroll>
          <div className="section-header">
            <h2 className="section-title">Program Belajar Kami</h2>
            <p className="section-subtitle">
              Pilih jenjang pendidikan yang sesuai untuk putra-putri Anda
            </p>
          </div>
        </AnimateOnScroll>

        <div className="programs-grid stagger-children">
          {programOrder.map((key, index) => {
            const program = programs[key];
            const IconComponent = iconMap[program.icon] || BookOpen;
            const subjects = program.subjects.slice(0, 4);

            return (
              <AnimateOnScroll key={program.id} delay={index * 0.15}>
                <Link
                  to={`/program#${program.id}`}
                  className="program-card"
                >
                  {program.isNew && (
                    <span className="program-card-badge">🆕 Baru!</span>
                  )}

                  {/* Gradient header */}
                  <div
                    className="program-card-header"
                    style={{ background: `linear-gradient(135deg, ${program.color}, ${program.color}dd)` }}
                  >
                    <div className="program-card-icon">
                      <IconComponent />
                    </div>
                    <h3 className="program-card-name">{program.name}</h3>
                    <span className="program-card-level">{program.fullName}</span>
                  </div>

                  {/* Body */}
                  <div className="program-card-body">
                    <p className="program-card-desc">{program.shortDesc}</p>

                    <div className="program-card-subjects">
                      {subjects.map((subject) => (
                        <span
                          key={subject.name}
                          className="program-subject-tag"
                          style={{
                            background: program.colorLight,
                            color: program.color,
                          }}
                        >
                          {subject.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link (Visual button only) */}
                  <div
                    className="program-card-link"
                    style={{ color: program.color }}
                  >
                    Lihat Program Lengkap
                    <span className="program-card-link-arrow">→</span>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
