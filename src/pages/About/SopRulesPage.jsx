import { useState } from 'react';
import { FileText, ClipboardList, ShieldAlert, Award, Clock, BookOpen, CreditCard, UserCheck, GraduationCap, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './SopRulesPage.css';

export default function SopRulesPage() {
  const [activeTab, setActiveTab] = useState('sop');
  const [expandedSection, setExpandedSection] = useState('pembelajaran');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <SEO
        title="SOP & Tata Tertib Lembaga"
        description="Standar Operasional Prosedur (SOP) dan Tata Tertib di Bimbel Junior untuk Peserta Didik, Pendidik, dan Staf Administrasi demi kenyamanan belajar bersama."
        keywords="sop bimbel junior, tata tertib siswa, aturan guru bimbel, sop pengajaran bimbel, administrasi bimbingan belajar"
      />

      {/* ===== Hero Banner ===== */}
      <section className="sop-hero gradient-hero">
        <div className="sop-hero__overlay" />
        <div className="container sop-hero__inner">
          <span className="sop-hero__badge">
            <ClipboardList size={14} /> Tata Kelola
          </span>
          <h1 className="sop-hero__title">SOP &amp; Tata Tertib</h1>
          <p className="sop-hero__subtitle">
            Sistem regulasi terstandarisasi untuk mewujudkan lingkungan bimbingan belajar yang disiplin, aman, profesional, dan menyenangkan.
          </p>
        </div>
      </section>

      {/* ===== Interactive Tabs System ===== */}
      <section className="section sop-main">
        <div className="container">
          {/* Tab Navigation */}
          <div className="sop-tabs-nav">
            <button
              className={`sop-tab-btn ${activeTab === 'sop' ? 'active' : ''}`}
              onClick={() => { setActiveTab('sop'); setExpandedSection('pembelajaran'); }}
            >
              <FileText size={18} />
              <span>Standar Operasional Prosedur</span>
            </button>
            <button
              className={`sop-tab-btn ${activeTab === 'siswa' ? 'active' : ''}`}
              onClick={() => { setActiveTab('siswa'); setExpandedSection('kehadiran_siswa'); }}
            >
              <GraduationCap size={18} />
              <span>Tata Tertib Siswa</span>
            </button>
            <button
              className={`sop-tab-btn ${activeTab === 'staff' ? 'active' : ''}`}
              onClick={() => { setActiveTab('staff'); setExpandedSection('guru'); }}
            >
              <UserCheck size={18} />
              <span>Aturan Guru &amp; Staf</span>
            </button>
          </div>

          {/* ===== TAB CONTENT: STANDAR OPERASIONAL PROSEDUR ===== */}
          {activeTab === 'sop' && (
            <div className="tab-content animate-fade-in">
              <div className="tab-header">
                <h2 className="tab-title">Standar Operasional Prosedur (SOP)</h2>
                <p className="tab-subtitle">Pilar utama operasional LKP Bimbel Junior terhitung sejak 10 Juli 2025.</p>
              </div>

              <div className="accordion-list">
                {/* 1. SOP Pembelajaran */}
                <div className={`accordion-card ${expandedSection === 'pembelajaran' ? 'open' : ''}`}>
                  <div className="accordion-card__header" onClick={() => toggleSection('pembelajaran')}>
                    <div className="header-left">
                      <BookOpen className="header-icon" />
                      <div>
                        <h3>1. SOP Pembelajaran &amp; Akademik</h3>
                        <p>Mengatur tata cara persiapan, pelaksanaan kelas 90 menit, dan penilaian belajar.</p>
                      </div>
                    </div>
                    <ChevronDown className="chevron-icon" />
                  </div>
                  <div className="accordion-card__body">
                    <div className="sop-sub-section">
                      <h4>1.1 Perencanaan Pembelajaran</h4>
                      <ul>
                        <li>Menyusun silabus dan RPP secara berkala sesuai kurikulum terbaru nasional yang berlaku.</li>
                        <li>Menentukan jadwal belajar mingguan/bulanan peserta didik secara presisi.</li>
                        <li>Menyediakan bahan ajar premium lengkap: modul, LKPD (Lembar Kerja Peserta Didik), dan media interaktif.</li>
                        <li>Guru wajib memeriksa kelengkapan kelas (kebersihan, papan tulis, alat tulis, perangkat digital, pendingin ruang).</li>
                        <li>Melayani bimbingan dan konsultasi belajar online bagi peserta didik yang terkendala mata pelajaran sekolah, PR, atau tugas mandiri di luar jam reguler.</li>
                      </ul>
                    </div>

                    <div className="sop-sub-section">
                      <h4>1.2 Pelaksanaan Pembelajaran</h4>
                      <ul>
                        <li>Peserta didik dikelompokkan dalam kelompok belajar yang kondusif (maksimal seminggu dua kali pertemuan).</li>
                        <li>Pendidik melakukan proses belajar secara interaktif di mana <strong>tiap sesi berlangsung selama 90 menit</strong>.</li>
                        <li>Peserta didik tingkat SMP memperoleh 4 mata pelajaran: <strong>Matematika, IPA, Bahasa Indonesia, dan Bahasa Inggris</strong>.</li>
                        <li>Peserta didik tingkat SD mendapatkan mata pelajaran: <strong>IPAS, Matematika, Bahasa Indonesia, dan Bahasa Inggris</strong> sesuai jadwal.</li>
                        <li>Proses pengajaran mengedepankan metode belajar aktif: diskusi interaktif, drill latihan soal, demonstrasi, dan tanya jawab.</li>
                        <li>Memberikan latihan penguatan singkat (quiz) dan evaluasi pemahaman di setiap akhir sesi pembelajaran.</li>
                        <li>Guru wajib melaporkan kehadiran siswa dan mengisi jurnal guru pada awal dan akhir sesi ke sistem admin.</li>
                      </ul>
                    </div>

                    <div className="sop-sub-section">
                      <h4>1.3 Evaluasi &amp; Penilaian Pembelajaran</h4>
                      <ul>
                        <li>Mendata hasil evaluasi belajar dan asesmen rutin di sekolah peserta didik untuk dianalisis bersama.</li>
                        <li>Menyelenggarakan kelas pengayaan khusus (remedial/pendekatan individual) bagi peserta didik dengan nilai di bawah KKM sekolah.</li>
                        <li>Mengumpulkan berkas fotokopi rapor bayangan atau laporan ulangan harian siswa demi memantau grafik perkembangan belajar.</li>
                        <li>Melakukan evaluasi berkala bagi tenaga pendidik di akhir bulan melalui observasi kelas, wawancara, dan survei kuisioner kepuasan siswa/orang tua.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2. SOP Keuangan */}
                <div className={`accordion-card ${expandedSection === 'keuangan' ? 'open' : ''}`}>
                  <div className="accordion-card__header" onClick={() => toggleSection('keuangan')}>
                    <div className="header-left">
                      <CreditCard className="header-icon" />
                      <div>
                        <h3>2. SOP Keuangan &amp; Administrasi</h3>
                        <p>Mengatur transaksi pendaftaran, pembayaran SPP bulanan, dan audit internal.</p>
                      </div>
                    </div>
                    <ChevronDown className="chevron-icon" />
                  </div>
                  <div className="accordion-card__body">
                    <div className="sop-sub-section">
                      <h4>2.1 Pembayaran Uang Pendaftaran</h4>
                      <ul>
                        <li>Orang tua membayar biaya pendaftaran melalui kasir/staf admin (secara tunai maupun transfer bank resmi).</li>
                        <li>Admin menerbitkan kuitansi fisik/digital berstempel resmi. Setiap pendaftaran baru <strong>mendapatkan 4 buku LKS premium gratis</strong>.</li>
                        <li>Uang pendaftaran dapat dilunasi saat pertemuan pertama masuk kelas, atau maksimal dalam 1 minggu sejak siswa aktif belajar.</li>
                      </ul>
                    </div>

                    <div className="sop-sub-section">
                      <h4>2.2 Pembayaran Bulanan / Biaya Program SPP</h4>
                      <ul>
                        <li>Pembayaran dihitung berdasarkan tanggal masuk perdana siswa (tanggal jatuh tempo jatuh pada tanggal yang sama setiap bulannya).</li>
                        <li>Toleransi pembayaran diberikan maksimal 7 hari kalender setelah tanggal jatuh tempo.</li>
                        <li>Admin mengirimkan pesan reminder H-3 sebelum tanggal jatuh tempo kepada orang tua via WhatsApp.</li>
                        <li>Keterlambatan pembayaran melebihi 10 hari sejak jatuh tempo dikenakan denda sesuai peraturan internal lembaga.</li>
                        <li>Semua bukti transaksi wajib didokumentasikan dalam arsip digital dan diberikan kwitansi sah.</li>
                      </ul>
                    </div>

                    <div className="sop-sub-section">
                      <h4>2.3 Pengelolaan Keuangan &amp; Audit Internal</h4>
                      <ul>
                        <li>Seluruh pemasukan harian (biaya pendaftaran, SPP bulanan, modul tambahan) dicatat teliti di buku kas harian.</li>
                        <li>Semua pengeluaran (honorarium pengajar, belanja ATK, biaya operasional) didokumentasikan disertai nota pembelanjaan asli.</li>
                        <li>Laporan keuangan laba/rugi disusun rapi setiap akhir bulan oleh staf keuangan untuk ditinjau pimpinan.</li>
                        <li>Menyelenggarakan audit keuangan internal berkala tiap 3 bulan atau 6 bulan sekali.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. SOP Pendidik */}
                <div className={`accordion-card ${expandedSection === 'pendidik' ? 'open' : ''}`}>
                  <div className="accordion-card__header" onClick={() => toggleSection('pendidik')}>
                    <div className="header-left">
                      <UserCheck className="header-icon" />
                      <div>
                        <h3>3. SOP Pendidik (Tutor / Guru)</h3>
                        <p>Mengatur prosedur rekrutmen pengajar, pembagian tugas, dan kode etik pendidik.</p>
                      </div>
                    </div>
                    <ChevronDown className="chevron-icon" />
                  </div>
                  <div className="accordion-card__body">
                    <div className="sop-sub-section">
                      <h4>3.1 Rekrutmen Tenaga Pendidik Baru</h4>
                      <ul>
                        <li>Calon pengajar wajib menyerahkan CV lengkap, portofolio mengajar, dan transkrip akademis.</li>
                        <li>Wajib memiliki ijazah sarjana (S1/S2) yang linier dengan disiplin mata pelajaran yang akan diampu.</li>
                        <li>Melalui tes tertulis kompetensi materi pelajaran serta ujian praktik mengajar langsung (microteaching).</li>
                        <li>Mengikuti tes wawancara akhir langsung bersama kepala/pimpinan Bimbel Junior.</li>
                        <li>Menandatangani lembar kontrak kerja resmi dan bersedia menaati seluruh kode etik profesi pendidik.</li>
                      </ul>
                    </div>

                    <div className="sop-sub-section">
                      <h4>3.2 Tugas Utama &amp; Tanggung Jawab</h4>
                      <ul>
                        <li>Menyelenggarakan bimbingan kelas secara prima sesuai jadwal penugasan.</li>
                        <li>Melakukan persiapan matang dan menyusun rencana materi sebelum masuk kelas.</li>
                        <li>Mengobservasi, menilai, dan memantau secara berkala perkembangan individual setiap anak didik.</li>
                        <li>Membina komunikasi yang interaktif, terbuka, dan sopan dengan admin serta orang tua murid mengenai perkembangan anak.</li>
                        <li>Wajib menghadiri rapat koordinasi dan evaluasi bulanan pendidik.</li>
                      </ul>
                    </div>

                    <div className="sop-sub-section">
                      <h4>3.3 Standar Kode Etik Pengajar</h4>
                      <ul>
                        <li>Hadir di lokasi bimbel tepat waktu sesuai ketentuan.</li>
                        <li>Berpenampilan rapi, bersih, sopan, dan mencerminkan citra pendidik yang mulia.</li>
                        <li>Sangat dilarang keras melakukan tindakan kekerasan verbal, fisik, maupun diskriminatif dalam bentuk apa pun.</li>
                        <li>Dilarang meninggalkan ruang kelas tanpa izin atau pemberitahuan terlebih dahulu ke staf administrasi.</li>
                        <li>Senantiasa ramah anak, sabar, komunikatif, dan menjadi teladan yang baik.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4. SOP Pendaftaran */}
                <div className={`accordion-card ${expandedSection === 'pendaftaran' ? 'open' : ''}`}>
                  <div className="accordion-card__header" onClick={() => toggleSection('pendaftaran')}>
                    <div className="header-left">
                      <Clock className="header-icon" />
                      <div>
                        <h3>4. SOP Pendaftaran Siswa Baru</h3>
                        <p>Alur administrasi penerimaan, orientasi, dan penentuan jadwal kelas.</p>
                      </div>
                    </div>
                    <ChevronDown className="chevron-icon" />
                  </div>
                  <div className="accordion-card__body">
                    <div className="sop-sub-section">
                      <h4>4.1 Alur Pendaftaran</h4>
                      <ol>
                        <li>Calon peserta didik/orang tua mengisi formulir pendaftaran secara online (website/WA) atau offline di kantor admin.</li>
                        <li>Staf administrasi melakukan input data, pemeriksaan berkas, dan verifikasi kelengkapan identitas siswa.</li>
                        <li>Calon siswa didampingi orang tua memilih paket program belajar dan jadwal kelas yang kosong.</li>
                        <li>Admin memberikan penjelasan komprehensif mengenai kebijakan pembayaran, tata tertib, dan sistem kelas.</li>
                        <li>Orang tua melakukan pembayaran biaya registrasi awal sesuai tagihan yang ditentukan.</li>
                        <li>Admin memasukkan nomor WhatsApp aktif orang tua siswa ke dalam grup koordinasi resmi Bimbel Junior.</li>
                      </ol>
                    </div>

                    <div className="sop-sub-section">
                      <h4>4.2 Persyaratan Administratif</h4>
                      <ul>
                        <li>Mengisi lengkap data diri siswa dan profil kontak darurat orang tua/wali murid.</li>
                        <li>Memilih jenjang pendidikan yang sesuai (SD/SMP) dan kelas reguler atau privat.</li>
                        <li>Membayar lunas biaya registrasi awal sesuai dengan rincian yang berlaku.</li>
                      </ul>
                    </div>

                    <div className="sop-sub-section">
                      <h4>4.3 Program Orientasi Siswa Baru</h4>
                      <ul>
                        <li>Admin memberikan lembaran konfirmasi jadwal tetap dimulainya bimbingan belajar perdana.</li>
                        <li>Siswa menerima modul pengajaran lengkap, LKPD, serta perangkat belajar pendukung.</li>
                        <li>Memberikan edukasi singkat mengenai tata tertib tata krama dan presensi digital kehadiran bimbel.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== TAB CONTENT: TATA TERTIB SISWA ===== */}
          {activeTab === 'siswa' && (
            <div className="tab-content animate-fade-in">
              <div className="tab-header">
                <h2 className="tab-title">Tata Tertib Peserta Didik</h2>
                <p className="tab-subtitle">Aturan disiplin wajib bagi seluruh siswa LKP Bimbel Junior guna menciptakan suasana belajar kondusif.</p>
              </div>

              <div className="rules-grid">
                <div className="rules-section-card">
                  <div className="rules-section-card__header">
                    <Clock size={20} className="section-icon text-primary" />
                    <h3>1. Kehadiran &amp; Waktu</h3>
                  </div>
                  <ul className="rules-list">
                    <li>Wajib hadir di kelas tepat waktu sesuai jadwal kelas masing-masing.</li>
                    <li>Mengisi daftar hadir digital / fisik di meja resepsionis sebelum masuk kelas.</li>
                    <li>Bila berhalangan hadir, wajib mengirimkan konfirmasi ketidakhadiran kepada admin minimal 1 jam sebelum kelas dimulai melalui WhatsApp.</li>
                  </ul>
                </div>

                <div className="rules-section-card">
                  <div className="rules-section-card__header">
                    <UserCheck size={20} className="section-icon text-success" />
                    <h3>2. Sikap &amp; Perilaku</h3>
                  </div>
                  <ul className="rules-list">
                    <li>Menjaga tata krama, sopan santun kepada guru, staf karyawan, dan sesama rekan siswa.</li>
                    <li>Sangat dilarang membuat kegaduhan atau mengganggu kenyamanan siswa lain di lingkungan bimbel.</li>
                    <li>Mengikuti seluruh rangkaian proses belajar dengan tertib, fokus, aktif, dan kooperatif.</li>
                  </ul>
                </div>

                <div className="rules-section-card">
                  <div className="rules-section-card__header">
                    <Award size={20} className="section-icon text-warning" />
                    <h3>3. Kebersihan &amp; Kerapihan</h3>
                  </div>
                  <ul className="rules-list">
                    <li>Ikut serta menjaga kebersihan ruangan; dilarang keras membuang sampah sembarangan.</li>
                    <li>Berpakaian rapi, bersih, sopan (tidak menggunakan celana pendek ketat atau pakaian robek).</li>
                    <li>Wajib menjaga dan merawat dengan baik sarana prasarana serta fasilitas belajar yang digunakan.</li>
                  </ul>
                </div>

                <div className="rules-section-card">
                  <div className="rules-section-card__header">
                    <FileText size={20} className="section-icon text-info" />
                    <h3>4. Penggunaan Fasilitas</h3>
                  </div>
                  <ul className="rules-list">
                    <li>Dilarang merusak atau mencoret peralatan belajar (meja, kursi, papan tulis, IFP layar sentuh, AC, dsb).</li>
                    <li>Kerusakan yang ditimbulkan akibat kesengajaan atau kelalaian wajib diganti oleh pihak siswa bersangkutan.</li>
                    <li>Dilarang membawa barang berbahaya (sajam, pemantik api) atau barang yang tidak ada kaitannya dengan KBM.</li>
                  </ul>
                </div>

                <div className="rules-section-card rules-section-card--highlight">
                  <div className="rules-section-card__header">
                    <ShieldAlert size={20} className="section-icon text-danger" />
                    <h3>5. Larangan Keras</h3>
                  </div>
                  <ul className="rules-list rules-list--danger">
                    <li><strong>Dilarang keras mengoperasikan gadget/HP selama kelas berlangsung</strong>, kecuali diizinkan instruktur untuk keperluan materi.</li>
                    <li>Dilarang membawa makanan berat/minuman berwarna ke dalam kelas, kecuali air putih dalam wadah tertutup.</li>
                    <li>Dilarang berkata kasar, mencaci, menghina, atau melakukan intimidasi/bullying fisik &amp; psikis ke siswa lain.</li>
                  </ul>
                </div>

                <div className="rules-section-card rules-section-card--sanksi">
                  <div className="rules-section-card__header">
                    <AlertCircle size={20} className="section-icon text-danger" />
                    <h3>6. Sistem Sanksi Pelanggaran</h3>
                  </div>
                  <div className="sanksi-flow">
                    <div className="flow-step">
                      <span className="step-num">1</span>
                      <span className="step-text">Teguran Lisan Pertama</span>
                    </div>
                    <div className="flow-arrow">➔</div>
                    <div className="flow-step">
                      <span className="step-num">2</span>
                      <span className="step-text">Surat Teguran Tertulis</span>
                    </div>
                    <div className="flow-arrow">➔</div>
                    <div className="flow-step">
                      <span className="step-num">3</span>
                      <span className="step-text">Pemanggilan Orang Tua</span>
                    </div>
                    <div className="flow-arrow">➔</div>
                    <div className="flow-step highlight">
                      <span className="step-num">4</span>
                      <span className="step-text">Pemberhentian Sementara / Tetap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== TAB CONTENT: ATURAN GURU & STAF ===== */}
          {activeTab === 'staff' && (
            <div className="tab-content animate-fade-in">
              <div className="tab-header">
                <h2 className="tab-title">Tata Tertib Guru &amp; Karyawan</h2>
                <p className="tab-subtitle">Panduan integritas moral dan profesionalisme bagi pendidik serta staf administrasi Bimbel Junior.</p>
              </div>

              <div className="staff-rules-container">
                {/* 1. Guru & Pengajar */}
                <div className="staff-block">
                  <h3 className="staff-block-title">A. Tata Tertib Guru / Pengajar (Tutor)</h3>
                  <div className="staff-rules-grid">
                    <div className="staff-sub-card">
                      <h4>Kehadiran &amp; Persiapan</h4>
                      <ul>
                        <li>Hadir di lembaga paling lambat <strong>10 menit sebelum kelas dimulai</strong>.</li>
                        <li>Mengisi lembar absensi mengajar serta menyiapkan seluruh modul &amp; alat peraga belajar.</li>
                        <li>Bila berhalangan mengajar, wajib melapor ke koordinator akademik minimal 3 jam sebelumnya agar dicarikan tutor pengganti.</li>
                      </ul>
                    </div>

                    <div className="staff-sub-card">
                      <h4>Etika &amp; Hubungan Siswa</h4>
                      <ul>
                        <li>Menunjukkan sikap ramah, adil, asih, dan tidak membeda-bedakan latar belakang siswa (non-diskriminatif).</li>
                        <li>Dilarang keras melakukan tindak kekerasan fisik, intimidasi emosional, maupun hukuman verbal ekstrem.</li>
                        <li>Menjaga kerahasiaan data pribadi, rekap nilai, serta permasalahan pribadi siswa dari pihak luar.</li>
                      </ul>
                    </div>

                    <div className="staff-sub-card">
                      <h4>Pengajaran &amp; Administrasi</h4>
                      <ul>
                        <li>Menyusun dan mengacu pada RPP/silabus bimbingan belajar resmi Bimbel Junior.</li>
                        <li>Menggunakan metode pengajaran interaktif, kreatif, dan tidak monoton.</li>
                        <li>Mengisi jurnal mengajar harian secara akurat dan melaporkan grafik nilai ulangan siswa.</li>
                      </ul>
                    </div>

                    <div className="staff-sub-card staff-sub-card--larangan">
                      <h4>Larangan Pengajar</h4>
                      <ul>
                        <li>Dilarang menggunakan HP saat jam mengajar berlangsung (kecuali kebutuhan mendesak).</li>
                        <li>Dilarang memungut bayaran/tips tambahan di luar transaksi resmi admin kasir dari orang tua.</li>
                        <li>Dilarang memberikan tugas tidak berfaedah yang bertentangan dengan materi kurikulum lembaga.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2. Staf Karyawan / Admin */}
                <div className="staff-block">
                  <h3 className="staff-block-title">B. Tata Tertib Staf Administrasi / Karyawan</h3>
                  <div className="staff-rules-grid">
                    <div className="staff-sub-card">
                      <h4>Jam Kerja &amp; Pelayanan</h4>
                      <ul>
                        <li>Hadir tepat waktu sesuai pembagian shift jam kerja yang telah ditentukan pimpinan.</li>
                        <li>Wajib memberikan pelayanan yang ramah, sopan, sabar, dan solutif bagi siswa, orang tua, dan pengajar.</li>
                        <li>Menjaga ketertiban arsip dokumen, database pendaftaran, dan laporan keuangan bimbel.</li>
                      </ul>
                    </div>

                    <div className="staff-sub-card">
                      <h4>Kebersihan &amp; Kenyamanan</h4>
                      <ul>
                        <li>Bertanggung jawab memelihara kebersihan, kerapihan, kenyamanan kantor, dan suasana lobi bimbel.</li>
                        <li>Membantu memfasilitasi kebutuhan perlengkapan pengajar (spidol, modul cetak, proyektor).</li>
                        <li>Menjaga etika hubungan harmonis dan koordinasi aktif dengan jajaran pengajar.</li>
                      </ul>
                    </div>

                    <div className="staff-sub-card staff-sub-card--larangan">
                      <h4>Larangan Karyawan</h4>
                      <ul>
                        <li>Dilarang membawa pulang aset inventaris lembaga tanpa izin tertulis dari pimpinan.</li>
                        <li>Dilarang memalsukan kuitansi pembayaran atau melakukan kecurangan keuangan kas.</li>
                        <li>Dilarang menggunakan aset penting lembaga untuk keperluan komersial pribadi.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. Sanksi Staf */}
                <div className="staff-block staff-block--sanksi">
                  <h3 className="staff-block-title text-danger">C. Sistem Sanksi Guru &amp; Karyawan</h3>
                  <p className="sanksi-intro-text">Setiap pelanggaran kode etik dan kedisiplinan guru/staf akan diproses secara profesional berdasar tahapan sanksi berikut:</p>
                  <div className="staff-sanksi-grid">
                    <div className="sanksi-box">
                      <div className="sanksi-box__num">01</div>
                      <h4>Teguran Lisan Pertama</h4>
                      <p>Pemberian masukan persuasif oleh kepala lembaga demi perbaikan kinerja.</p>
                    </div>
                    <div className="sanksi-box">
                      <div className="sanksi-box__num">02</div>
                      <h4>Surat Peringatan Tertulis</h4>
                      <p>Diterbitkan resmi bila pelanggaran serupa terulang dalam rentang waktu evaluasi.</p>
                    </div>
                    <div className="sanksi-box warning">
                      <div className="sanksi-box__num">03</div>
                      <h4>Peringatan Terakhir</h4>
                      <p>Diberikan surat pembinaan intensif dan pemotongan insetif/skorsing tugas sementara.</p>
                    </div>
                    <div className="sanksi-box danger">
                      <div className="sanksi-box__num">04</div>
                      <h4>Pemutusan Hubungan Kerja (PHK)</h4>
                      <p>Dilakukan jika terjadi pelanggaran hukum berat atau ketidakdisiplinan yang tidak dapat dibina lagi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== Legal Signature Footer ===== */}
      <section className="section sop-signature bg-light">
        <div className="container text-center">
          <div className="signature-card">
            <CheckCircle size={32} className="signature-icon text-success animate-pulse-slow" />
            <p className="signature-date">Ditetapkan di: Jakarta, 10 Juli 2025</p>
            <p className="signature-authority">Mengetahui &amp; Mengesahkan,</p>
            <h3 className="signature-name">Manajemen Bimbel Junior</h3>
            <p className="signature-role">Lembaga Kursus &amp; Pelatihan</p>
            <div className="certified-stamp-badge">DOKUMEN RESMI DISAHKAN</div>
          </div>
        </div>
      </section>
    </>
  );
}
