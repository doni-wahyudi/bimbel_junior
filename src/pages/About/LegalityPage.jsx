import { ShieldCheck, FileCheck, Landmark, CheckCircle, Calendar, FileText, UserCheck, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './LegalityPage.css';

export default function LegalityPage() {
  const documents = [
    {
      title: 'Izin Pendirian Satuan Pendidikan Non Formal',
      subtitle: 'Izin Operasional Lembaga Kursus dan Pelatihan (LKP)',
      icon: FileCheck,
      badgeColor: '#10B981',
      details: [
        { label: 'Nomor Keputusan', value: '2/A.5a/31.72.02.1007.14.R-1/3/TM.08.18/e/2025' },
        { label: 'Jenis Perizinan', value: 'Izin Operasional LKP' },
        { label: 'Nama Lembaga', value: 'BIMBEL JUNIOR' },
        { label: 'Penyelenggara / Pemilik', value: 'ONA RAHMAWATI' },
        { label: 'Penanggung Jawab Edukatif', value: 'ONA RAHMAWATI, M.Pd' },
        { label: 'Jenis Pendidikan', value: 'Bimbingan Belajar' },
        { label: 'Rumpun Pendidikan', value: 'Pendidikan Dasar & Menengah (SD dan SMP)' },
        { label: 'Pejabat Penandatangan', value: 'MOHAMAD RIZKY WIRAWAN (Kepala Unit Pengelola PM-PTSP Kec. Tanjung Priok)' },
        { label: 'NIP Pejabat', value: '198704232006021003' },
        { label: 'Tanggal Terbit', value: '12 Desember 2025' },
        { label: 'Masa Berlaku', value: 'Berlaku Selama Lembaga Beroperasi' },
      ],
      stampText: 'IZIN OPERASIONAL TERBIT',
      stampSubText: 'UP PM-PTSP TJ. PRIOK',
      sealType: 'gold'
    },
    {
      title: 'Nomor Induk Berusaha (NIB)',
      subtitle: 'Perizinan Berusaha Berbasis Risiko (Sistem OSS)',
      icon: ShieldCheck,
      badgeColor: '#2563EB',
      details: [
        { label: 'Nomor Induk Berusaha', value: '2106250057343' },
        { label: 'Nama Pelaku Usaha', value: 'ONA RAHMAWATI' },
        { label: 'Kode KBLI Utama', value: '85495' },
        { label: 'Judul KBLI', value: 'Pendidikan Bimbingan Belajar dan Konseling Swasta' },
        { label: 'Skala Usaha', value: 'Usaha Mikro' },
        { label: 'Tingkat Risiko', value: 'Tinggi (Terverifikasi)' },
        { label: 'Alamat Pelaku Usaha', value: 'Jl. Papanggo II E, Kel. Papanggo, Kec. Tanjung Priok, Jakarta Utara' },
        { label: 'Alamat Lokasi Usaha', value: 'Jl. Warakas 8 Gang 10 No.34, Kel. Warakas, Kec. Tanjung Priok, Jakarta Utara' },
        { label: 'Tanggal Terbit Pertama', value: '21 Juni 2025' },
        { label: 'Penerbit Dokumen', value: 'Menteri Investasi dan Hilirisasi / Kepala BKPM RI' },
        { label: 'Keabsahan', value: 'Ditandatangani secara elektronik (BSrE - BSSN)' }
      ],
      stampText: 'NIB TERDAFTAR RESMI',
      stampSubText: 'BKPM RI - OSS SYSTEM',
      sealType: 'blue'
    },
    {
      title: 'Nomor Pokok Sekolah Nasional (NPSN)',
      subtitle: 'Registrasi Resmi Kementerian Pendidikan RI',
      icon: Landmark,
      badgeColor: '#8B5CF6',
      details: [
        { label: 'Nomor Pokok Satuan (NPSN)', value: 'K5669620' },
        { label: 'Nama Lembaga Terdaftar', value: 'LKP BIMBEL JUNIOR' },
        { label: 'Status Verifikasi', value: 'Aktif / Terdaftar dalam Referensi Data Kemendikbudristek' },
        { label: 'Fungsi Kode', value: 'Identitas Tunggal Satuan Pendidikan di Indonesia' },
        { label: 'Kewenangan Data', value: 'Pusat Data dan Teknologi Informasi (Pusdatin) Kemendikbudristek' }
      ],
      stampText: 'NPSN VERIFIED',
      stampSubText: 'KEMENDIKBUDRISTEK RI',
      sealType: 'purple'
    }
  ];

  return (
    <>
      <SEO
        title="Legalitas & Perizinan Lembaga"
        description="Legalitas Resmi Lembaga Kursus dan Pelatihan (LKP) Bimbel Junior. NIB 2106250057343, NPSN K5669620, dan Izin Operasional resmi dari DPMPTSP DKI Jakarta."
        keywords="legalitas bimbel junior, npsn bimbel junior, nib bimbel junior, izin operasional bimbel, lembaga kursus terdaftar"
      />

      {/* ===== Hero Banner ===== */}
      <section className="legality-hero gradient-hero">
        <div className="legality-hero__overlay" />
        <div className="container legality-hero__inner">
          <span className="legality-hero__badge">
            <ShieldCheck size={14} /> Kredibilitas
          </span>
          <h1 className="legality-hero__title">Legalitas &amp; Perizinan</h1>
          <p className="legality-hero__subtitle">
            Bimbel Junior berkomitmen penuh pada kepatuhan regulasi pendidikan nasional demi kenyamanan dan jaminan mutu belajar putra-putri Anda.
          </p>
        </div>
      </section>

      {/* ===== Introduction / Value Prop ===== */}
      <section className="section legality-intro bg-light">
        <div className="container">
          <div className="legality-intro__card">
            <div className="legality-intro__visual">
              <div className="legality-badge-seal animate-pulse-slow">
                <ShieldCheck size={48} className="seal-icon" />
                <span className="seal-badge-text">VERIFIED</span>
              </div>
            </div>
            <div className="legality-intro__text">
              <h2 className="legality-intro__title">Lembaga Terdaftar &amp; Terverifikasi</h2>
              <p className="legality-intro__desc">
                Setiap program bimbingan belajar dan manajemen di <strong>Bimbel Junior</strong> diselenggarakan secara resmi di bawah payung hukum yang lengkap dan sah. Kami memiliki perizinan lengkap dari tingkat kementerian pusat hingga pemerintah daerah kota DKI Jakarta.
              </p>
              <div className="legality-highlights">
                <div className="highlight-item">
                  <CheckCircle size={18} className="highlight-icon text-success" />
                  <span>Izin Operasional Dinas Penanaman Modal &amp; PTSP</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle size={18} className="highlight-icon text-success" />
                  <span>NPSN Terdaftar Resmi Kemendikbudristek</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle size={18} className="highlight-icon text-success" />
                  <span>NIB Berbasis Risiko dari Kementerian Investasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Certificates Section ===== */}
      <section className="section legality-certificates">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Dokumen Resmi Kelembagaan</h2>
              <p className="section-subtitle">
                Detail dokumen perizinan resmi LKP Bimbel Junior yang tercatat pada sistem pemerintahan
              </p>
            </div>
          </AnimateOnScroll>

          <div className="certificates-list">
            {documents.map((doc, index) => {
              const DocIcon = doc.icon;
              return (
                <AnimateOnScroll key={index} direction={index % 2 === 0 ? 'left' : 'right'} className="certificate-wrapper">
                  <div className="certificate-card">
                    {/* Header */}
                    <div className="certificate-card__header" style={{ borderLeftColor: doc.badgeColor }}>
                      <div className="certificate-card__icon-box" style={{ backgroundColor: `${doc.badgeColor}15`, color: doc.badgeColor }}>
                        <DocIcon size={28} />
                      </div>
                      <div>
                        <h3 className="certificate-card__title">{doc.title}</h3>
                        <p className="certificate-card__subtitle">{doc.subtitle}</p>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="certificate-card__body">
                      <div className="details-grid">
                        {doc.details.map((detail, idx) => (
                          <div key={idx} className="detail-row">
                            <span className="detail-label">{detail.label}</span>
                            <span className="detail-value">{detail.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Official Visual Stamp Seal */}
                      <div className={`digital-stamp digital-stamp--${doc.sealType}`}>
                        <div className="stamp-circle">
                          <span className="stamp-title">{doc.stampText}</span>
                          <span className="stamp-mid">★ ★ ★</span>
                          <span className="stamp-sub">{doc.stampSubText}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="certificate-card__footer">
                      <span className="secure-badge">
                        <ShieldCheck size={12} /> Terverifikasi Secara Elektronik
                      </span>
                      <span className="doc-meta-date">
                        <Calendar size={12} /> Status: AKTIF / BERLAKU
                      </span>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Transparency and Trust Banner ===== */}
      <section className="section legality-trust bg-dark text-white text-center">
        <div className="legality-trust__overlay" />
        <div className="container relative z-1">
          <Landmark size={48} className="trust-icon text-primary-light animate-bounce-slow" />
          <h2 className="trust-title text-white">Komitmen Transparansi Publik</h2>
          <p className="trust-desc">
            Sebagai wujud akuntabilitas publik, wali murid dan instansi terkait dapat langsung melakukan pencocokan data keabsahan dokumen perizinan kami menggunakan NPSN atau NIB yang terdaftar pada sistem referensi Satu Data Kemendikbudristek serta Sistem Online Single Submission (OSS).
          </p>
          <div className="trust-meta">
            <span className="trust-meta-item">
              <MapPin size={14} className="text-success" /> Alamat Kampus: Jl. Warakas 8 Gg. 10 No.34, Tanjung Priok, Jakarta Utara
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
