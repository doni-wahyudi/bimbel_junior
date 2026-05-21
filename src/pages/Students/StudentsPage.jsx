import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Search,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  School,
  Smile,
  BookOpen,
  ChevronDown
} from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import { students } from '../../data/students';
import './StudentsPage.css';

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeClassFilter, setActiveClassFilter] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter categories for tabs
  const classFilters = ['Semua', 'Kelas 4 SD', 'Kelas 6 SD', 'Kelas 7 SMP', 'Kelas 8 SMP', 'Kelas 9 SMP'];

  // Calculate dynamic stats from master list
  const stats = useMemo(() => {
    const total = students.length;
    const boys = students.filter((s) => s.gender === 'Laki-laki').length;
    const girls = students.filter((s) => s.gender === 'Perempuan').length;
    
    // Schools breakdown
    const uniqueSchools = [...new Set(students.map(s => s.school))].length;

    return { total, boys, girls, uniqueSchools };
  }, []);

  // Filter and Search logic
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.school.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesClass =
        activeClassFilter === 'Semua' || student.class === activeClassFilter;

      return matchesSearch && matchesClass;
    });
  }, [searchTerm, activeClassFilter]);

  // Reset page when filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, activeClassFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;
  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredStudents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredStudents, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <SEO
        title="Daftar Peserta Didik"
        description="Daftar lengkap siswa-siswi berprestasi yang belajar di Junior Bimbel. Menampilkan data transparan sebaran kelas dan asal sekolah dasar hingga menengah."
        keywords="daftar murid bimbel, siswa junior bimbel, profil murid tanjung priok, bimbel sd smp jakarta utara"
      />

      {/* Hero Section */}
      <section className="students-hero gradient-hero">
        <div className="students-hero__overlay" />
        <div className="container students-hero__inner">
          <span className="students-hero__badge">
            <GraduationCap size={14} /> Kesiswaan
          </span>
          <h1 className="students-hero__title">Daftar Peserta Didik</h1>
          <p className="students-hero__subtitle">
            Membimbing 70+ siswa aktif dari berbagai sekolah favorit di Tanjung Priok dan sekitarnya meraih potensi akademik terbaiknya
          </p>
          <nav className="students-hero__breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="students-hero__breadcrumb-sep">/</span>
            <span>Tentang Kami</span>
            <span className="students-hero__breadcrumb-sep">/</span>
            <span>Peserta Didik</span>
          </nav>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="students-stats-section">
        <div className="container">
          <div className="students-stats-grid">
            <AnimateOnScroll direction="up" delay={0.05} className="student-stat-card">
              <div className="student-stat-card__icon student-stat-card__icon--total">
                <Users size={24} />
              </div>
              <div className="student-stat-card__info">
                <span className="student-stat-card__label">Total Siswa Aktif</span>
                <h3 className="student-stat-card__value">{stats.total}</h3>
              </div>
              <div className="student-stat-card__glow" />
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.1} className="student-stat-card">
              <div className="student-stat-card__icon student-stat-card__icon--boys">
                <Smile size={24} className="icon-boy" />
              </div>
              <div className="student-stat-card__info">
                <span className="student-stat-card__label">Siswa Laki-laki</span>
                <h3 className="student-stat-card__value">{stats.boys}</h3>
              </div>
              <div className="student-stat-card__glow" />
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.15} className="student-stat-card">
              <div className="student-stat-card__icon student-stat-card__icon--girls">
                <Smile size={24} className="icon-girl" />
              </div>
              <div className="student-stat-card__info">
                <span className="student-stat-card__label">Siswi Perempuan</span>
                <h3 className="student-stat-card__value">{stats.girls}</h3>
              </div>
              <div className="student-stat-card__glow" />
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.2} className="student-stat-card">
              <div className="student-stat-card__icon student-stat-card__icon--schools">
                <School size={24} />
              </div>
              <div className="student-stat-card__info">
                <span className="student-stat-card__label">Sebaran Asal Sekolah</span>
                <h3 className="student-stat-card__value">{stats.uniqueSchools}</h3>
              </div>
              <div className="student-stat-card__glow" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Directory & Directory Filter Area */}
      <section className="section students-directory-section">
        <div className="container">
          <AnimateOnScroll>
            <div className="directory-panel">
              {/* Search & Filter Header */}
              <div className="directory-header">
                <div className="search-box-wrapper">
                  <Search size={18} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Cari nama siswa atau asal sekolah..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>

                <div className="filters-scroll">
                  <div className="filters-wrapper">
                    {classFilters.map((cls) => (
                      <button
                        key={cls}
                        className={`filter-pill-btn ${activeClassFilter === cls ? 'filter-pill-btn--active' : ''}`}
                        onClick={() => setActiveClassFilter(cls)}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glassmorphic Table Container */}
              <div className="table-responsive-wrapper">
                <table className="students-table">
                  <thead>
                    <tr>
                      <th style={{ width: '80px' }}>No</th>
                      <th>Nama Lengkap</th>
                      <th style={{ width: '180px' }}>Jenis Kelamin</th>
                      <th>Kelas</th>
                      <th>Asal Sekolah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedStudents.length > 0 ? (
                      paginatedStudents.map((student, index) => {
                        const globalIndex = (currentPage - 1) * itemsPerPage + index + 1;
                        return (
                          <tr key={globalIndex} className="table-row-animate">
                            <td className="col-index">{globalIndex}</td>
                            <td className="col-name">{student.name}</td>
                            <td>
                              <span className={`gender-tag ${student.gender === 'Laki-laki' ? 'gender-tag--boy' : 'gender-tag--girl'}`}>
                                {student.gender}
                              </span>
                            </td>
                            <td>
                              <span className="class-tag">{student.class}</span>
                            </td>
                            <td className="col-school">
                              <div className="school-cell">
                                <School size={14} className="school-cell-icon" />
                                <span>{student.school}</span>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={5} className="no-results-cell">
                          <div className="no-results">
                            <BookOpen size={48} className="no-results-icon" />
                            <h4>Tidak ada data yang cocok</h4>
                            <p>Coba gunakan kata kunci lain atau ubah filter kelas Anda.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              {filteredStudents.length > 0 && (
                <div className="directory-footer">
                  <span className="pagination-info">
                    Menampilkan <strong>{Math.min(filteredStudents.length, (currentPage - 1) * itemsPerPage + 1)}</strong> - <strong>{Math.min(filteredStudents.length, currentPage * itemsPerPage)}</strong> dari <strong>{filteredStudents.length}</strong> siswa
                  </span>

                  <div className="pagination-buttons">
                    <button
                      className="pagination-btn"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      aria-label="Halaman sebelumnya"
                    >
                      <ChevronLeft size={16} /> Prev
                    </button>
                    
                    <div className="pagination-pages">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          className={`page-number-btn ${currentPage === page ? 'page-number-btn--active' : ''}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      className="pagination-btn"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      aria-label="Halaman berikutnya"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
