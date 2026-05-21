import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Calendar, Clock, Award, CheckCircle, ChevronRight,
  BookOpenCheck, Sparkles, GraduationCap, AlertCircle, ArrowRight
} from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { programTahunanData } from '../../data/programTahunan';
import './ProgramTahunanPage.css';

export default function ProgramTahunanPage() {
  const [activeGrade, setActiveGrade] = useState('kelas-7-smp');
  const [activeSemester, setActiveSemester] = useState('semester1');

  const prota = programTahunanData[activeGrade];
  const semesterData = prota[activeSemester];

  const gradeTabs = [
    { id: 'kelas-4-sd', label: 'SD Kelas 4', level: 'SD' },
    { id: 'kelas-6-sd', label: 'SD Kelas 6', level: 'SD' },
    { id: 'kelas-7-smp', label: 'SMP Kelas 7', level: 'SMP' },
    { id: 'kelas-8-smp', label: 'SMP Kelas 8', level: 'SMP' },
    { id: 'kelas-9-smp', label: 'SMP Kelas 9', level: 'SMP' }
  ];

  return (
    <>
      <SEO
        title={`Program Tahunan (Prota) - ${prota.grade}`}
        description="Program bimbingan belajar tahunan (Prota) SD & SMP di Bimbel Junior. Pembagian JP lengkap, capaian pembelajaran, dan jadwal berkala semester."
        keywords="program tahunan, prota sd, prota smp, capaian pembelajaran kurikulum merdeka, jadwal les bimbel"
      />

      {/* Hero */}
      <section className="prota-hero">
        <div className="prota-hero__shapes">
          <div className="prota-hero__shape prota-hero__shape--1"></div>
          <div className="prota-hero__shape prota-hero__shape--2"></div>
        </div>
        <div className="container prota-hero__content">
          <nav className="prota-hero__breadcrumb">
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <Link to="/program">Program</Link>
            <ChevronRight size={14} />
            <span>Program Tahunan</span>
          </nav>
          <h1 className="prota-hero__title">Program Tahunan (Prota)</h1>
          <p className="prota-hero__subtitle">
            Rencana alokasi waktu dan capaian pembelajaran kurikulum Bimbel Junior sepanjang tahun ajaran
          </p>
        </div>
      </section>

      {/* Class Level Selector Tabs */}
      <div className="prota-tabs-section">
        <div className="container">
          <div className="prota-grade-tabs">
            {gradeTabs.map((tab) => (
              <button
                key={tab.id}
                className={`prota-grade-btn ${activeGrade === tab.id ? 'prota-grade-btn--active' : ''}`}
                onClick={() => {
                  setActiveGrade(tab.id);
                  // Default to sem1 when changing class
                  setActiveSemester('semester1');
                }}
              >
                {tab.level === 'SD' ? (
                  <BookOpen size={16} className="prota-tab-icon" />
                ) : (
                  <GraduationCap size={16} className="prota-tab-icon" />
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="prota-main section">
        <div className="container">
          {/* Class Summary Banner */}
          <AnimateOnScroll>
            <div className="prota-summary-card">
              <div className="prota-summary-card__glow"></div>
              <div className="prota-summary-card__grid">
                <div className="prota-summary-info">
                  <span className="prota-badge">{prota.fase}</span>
                  <h2 className="prota-grade-heading">{prota.grade} Bimbel Junior</h2>
                  <p className="prota-grade-desc">
                    Program bimbingan belajar reguler komprehensif 4 Mata Pelajaran Utama (Matematika, IPA/IPAS, Bahasa Indonesia, & Bahasa Inggris) secara intensif 2x pertemuan per minggu.
                  </p>
                </div>
                <div className="prota-summary-stats">
                  <div className="prota-stat-item">
                    <Clock size={20} className="prota-stat-icon" />
                    <div>
                      <span className="prota-stat-label">Total Pertemuan</span>
                      <span className="prota-stat-value">192 JP / Tahun</span>
                    </div>
                  </div>
                  <div className="prota-stat-item">
                    <Calendar size={20} className="prota-stat-icon" />
                    <div>
                      <span className="prota-stat-label">Semester 1 (Ganjil)</span>
                      <span className="prota-stat-value">100 JP (Juli - Des)</span>
                    </div>
                  </div>
                  <div className="prota-stat-item">
                    <Calendar size={20} className="prota-stat-icon" />
                    <div>
                      <span className="prota-stat-label">Semester 2 (Genap)</span>
                      <span className="prota-stat-value">92 JP (Jan - Juni)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Semester Selector Tabs */}
          <div className="prota-semester-tabs-container">
            <div className="prota-semester-tabs">
              <button
                className={`prota-semester-btn ${activeSemester === 'semester1' ? 'prota-semester-btn--active' : ''}`}
                onClick={() => setActiveSemester('semester1')}
              >
                Semester 1 (Ganjil)
              </button>
              <button
                className={`prota-semester-btn ${activeSemester === 'semester2' ? 'prota-semester-btn--active' : ''}`}
                onClick={() => setActiveSemester('semester2')}
              >
                Semester 2 (Genap)
              </button>
            </div>
          </div>

          {/* Timetable Matrix (Full Width) */}
          <AnimateOnScroll>
            <div className="prota-section-card prota-matrix-card">
              <div className="prota-section-header">
                <Calendar size={22} className="prota-header-icon" />
                <h3 className="prota-section-title">Visualisasi Program Mingguan &amp; JP ({activeSemester === 'semester1' ? 'Ganjil' : 'Genap'})</h3>
              </div>

              <div className="prota-weeks-desc">
                <AlertCircle size={16} />
                <span>Visualisasi alokasi tatap muka per minggu (2 JP = 1 pertemuan 90 menit bimbingan aktif).</span>
              </div>

              <div className="prota-matrix-wrapper">
                <table className="prota-matrix-table">
                  <thead>
                    <tr>
                      <th rowSpan={2} className="sticky-col subject-header-col">Mata Pelajaran</th>
                      {semesterData.months.map((month) => (
                        <th key={month.name} colSpan={month.weeks.length} className="month-header-cell">
                          {month.name}
                        </th>
                      ))}
                    </tr>
                    <tr>
                      {semesterData.months.map((month) =>
                        month.weeks.map((_, wIdx) => (
                          <th key={`${month.name}-w${wIdx}`} className="week-header-cell">
                            W{wIdx + 1}
                          </th>
                        ))
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {semesterData.subjects.map((sub) => (
                      <tr key={sub.name}>
                        <td className="sticky-col subject-name-cell">
                          <span className="subject-cell-dot" />
                          {sub.name}
                        </td>
                        {semesterData.months.map((month) =>
                          month.weeks.map((jp, wIdx) => {
                            // Add slight variance for IPA/Inggris in July week 1 (MPLS week) to match client text files
                            const isFirstWeekJuly = month.name === 'Juli' && wIdx === 0;
                            const isIpaOrInggris = sub.name.toLowerCase().includes('ipa') || sub.name.toLowerCase().includes('inggris') || sub.name.toLowerCase().includes('ipas');
                            const isActive = jp === 2 && !(isFirstWeekJuly && isIpaOrInggris);

                            return (
                              <td
                                key={`${month.name}-w${wIdx}`}
                                className={`matrix-cell ${isActive ? 'matrix-cell--active' : 'matrix-cell--empty'}`}
                                title={isActive ? `Minggu ${wIdx + 1}: Bimbingan Aktif 2 JP` : `Minggu ${wIdx + 1}: Libur / Evaluasi`}
                              >
                                {isActive ? '2 JP' : '-'}
                              </td>
                            );
                          })
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="prota-eval-info">
                <h4 className="prota-eval-title">Alokasi Penilaian Harian &amp; Sumatif</h4>
                <div className="prota-eval-grid">
                  <div className="prota-eval-card">
                    <span className="prota-eval-label">Sumatif Tengah Semester</span>
                    <span className="prota-eval-val">{semesterData.sumatifTengah}</span>
                  </div>
                  <div className="prota-eval-card">
                    <span className="prota-eval-label">Sumatif Akhir Semester</span>
                    <span className="prota-eval-val">{semesterData.sumatifAkhir}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Capaian Pembelajaran Grid (Full Width) */}
          <div className="prota-capaian-section">
            <AnimateOnScroll>
              <div className="prota-section-header">
                <BookOpenCheck size={22} className="prota-header-icon" />
                <h3 className="prota-section-title">Target &amp; Capaian Pembelajaran ({prota.fase})</h3>
              </div>
            </AnimateOnScroll>

            <div className="prota-capaian-grid">
              {semesterData.subjects.map((sub, i) => {
                let color = '#3B82F6'; // Default primary light
                if (sub.name.toLowerCase().includes('matematika')) {
                  color = '#8B5CF6'; // Purple
                } else if (sub.name.toLowerCase().includes('ipa') || sub.name.toLowerCase().includes('ipas')) {
                  color = '#10B981'; // Green
                } else if (sub.name.toLowerCase().includes('inggris')) {
                  color = '#F97316'; // Amber/Orange
                } else if (sub.name.toLowerCase().includes('indonesia')) {
                  color = '#EF4444'; // Red
                }

                return (
                  <AnimateOnScroll key={i} delay={i * 0.05} className="prota-capaian-card" style={{ borderLeftColor: color }}>
                    <div className="prota-capaian-card__header">
                      <span className="prota-capaian-card__dot" style={{ backgroundColor: color }} />
                      <h4 className="prota-capaian-card__name" style={{ color: color }}>{sub.name}</h4>
                    </div>
                    <p className="prota-capaian-card__desc">{sub.capaian}</p>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>


          {/* Footer Warning & Notes */}
          <AnimateOnScroll>
            <div className="prota-notes">
              <Sparkles size={18} className="prota-notes-icon" />
              <div className="prota-notes-content">
                <strong>Catatan Penting:</strong> Program Tahunan di Bimbel Junior didesain adaptif agar linier dengan timeline kurikulum sekolah masing-masing siswa. Pada akhir Semester Genap kelas 6 SD & 9 SMP, program akademik difokuskan penuh pada persiapan <strong>TKA (Tes Kompetensi Akademik)</strong> dan latihan intensif Try-Out ujian kelulusan/seleksi sekolah favorit.
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
