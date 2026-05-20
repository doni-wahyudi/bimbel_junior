import { useState } from 'react';
import { Send, GraduationCap, MapPin, User, BookOpen, Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './RegistrationPage.css';

const WHATSAPP_NUMBER = '6281211663711';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    school: '',
    grade: 'SD', // Default
    gradeClass: '',
    program: 'Reguler'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Halo Bimbel Junior! Saya ingin mendaftar dengan rincian berikut:
    
*DATA SISWA*
Nama Lengkap: ${formData.name}
No. WhatsApp: ${formData.phone}
Asal Sekolah: ${formData.school}
Jenjang: ${formData.grade}
Kelas: ${formData.gradeClass}
Paket Pilihan: ${formData.program}

Mohon informasi mengenai ketersediaan jadwal dan metode pembayaran. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="registration-page">
      <SEO 
        title="Pendaftaran Online"
        description="Daftar bimbingan belajar di Bimbel Junior Tanjung Priok sekarang. Tersedia paket untuk SD, SMP, dan SMA dengan kelas intensif, reguler, maupun privat."
      />

      <section className="registration-hero gradient-hero">
        <div className="container">
          <AnimateOnScroll className="registration-hero__content">
            <h1 className="registration-hero__title">Pendaftaran Online</h1>
            <p className="registration-hero__subtitle">
              Satu langkah lebih dekat menuju prestasi terbaik. Isi formulir di bawah ini dan admin kami akan segera menghubungi Anda.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="section registration-form-section">
        <div className="container">
          <div className="registration-layout">
            
            {/* Left side: Information */}
            <div className="registration-info">
              <AnimateOnScroll delay={0.1}>
                <div className="registration-info-card">
                  <h2 className="registration-info-title">Mengapa Memilih Kami?</h2>
                  <ul className="registration-benefits">
                    <li>
                      <div className="benefit-icon"><GraduationCap size={20} /></div>
                      <div>
                        <strong>Pengajar M.Pd & Profesional</strong>
                        <p>Tutor berpengalaman di bidangnya.</p>
                      </div>
                    </li>
                    <li>
                      <div className="benefit-icon"><User size={20} /></div>
                      <div>
                        <strong>Kelas Eksklusif</strong>
                        <p>Maksimal 10 siswa per kelas agar lebih fokus.</p>
                      </div>
                    </li>
                    <li>
                      <div className="benefit-icon"><BookOpen size={20} /></div>
                      <div>
                        <strong>Modul Terpadu</strong>
                        <p>Materi disesuaikan dengan kurikulum terbaru.</p>
                      </div>
                    </li>
                  </ul>

                  <div className="registration-contact">
                    <h3>Butuh Bantuan?</h3>
                    <p>Hubungi admin kami jika ada pertanyaan seputar pendaftaran.</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="contact-link">
                      <Phone size={18} />
                      0812-1166-3711
                    </a>
                    <div className="contact-address">
                      <MapPin size={18} />
                      <span>Jl. Cipeucang II No.2, Koja, Tanjung Priok, Jakarta Utara</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right side: Form */}
            <div className="registration-form-wrapper">
              <AnimateOnScroll delay={0.2} className="registration-form-card">
                <h2 className="form-title">Formulir Siswa Baru</h2>
                
                <form onSubmit={handleSubmit} className="registration-form">
                  <div className="form-group">
                    <label htmlFor="name">Nama Lengkap Siswa *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Nomor WhatsApp *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contoh: 0812xxxxxx"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="school">Asal Sekolah *</label>
                    <input 
                      type="text" 
                      id="school" 
                      name="school" 
                      value={formData.school}
                      onChange={handleChange}
                      placeholder="Contoh: SMP Negeri 30 Jakarta"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="grade">Jenjang Pendidikan *</label>
                      <select 
                        id="grade" 
                        name="grade" 
                        value={formData.grade}
                        onChange={handleChange}
                        required
                      >
                        <option value="SD">SD (Sekolah Dasar)</option>
                        <option value="SMP">SMP (Sekolah Menengah Pertama)</option>
                        <option value="SMA">SMA (Sekolah Menengah Atas)</option>
                        <option value="Alumni/Gap Year">Alumni / Gap Year</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="gradeClass">Kelas *</label>
                      <input 
                        type="text" 
                        id="gradeClass" 
                        name="gradeClass" 
                        value={formData.gradeClass}
                        onChange={handleChange}
                        placeholder="Contoh: 9 SMP"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="program">Pilihan Program/Paket *</label>
                    <select 
                      id="program" 
                      name="program" 
                      value={formData.program}
                      onChange={handleChange}
                      required
                    >
                      <option value="Reguler">Paket Reguler</option>
                      <option value="Intensif UN/Ujian Sekolah">Paket Intensif Ujian Sekolah</option>
                      <option value="Intensif SNBT (SMA)">Paket Intensif SNBT (Khusus SMA)</option>
                      <option value="Privat (1 on 1)">Kelas Privat (1 on 1)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={18} />
                    Kirim Pendaftaran via WhatsApp
                  </button>
                  <p className="form-note">
                    * Anda akan diarahkan ke WhatsApp untuk mengonfirmasi pendaftaran ini.
                  </p>
                </form>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
