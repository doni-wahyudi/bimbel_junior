import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Clock,
  Camera,
  Send,
  MessageCircle,
  User,
  BookOpen,
  ChevronRight,
  Navigation,
  ExternalLink
} from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './ContactPage.css';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Jl. Warakas 8 Gg. 10 No.34, RT.13/RW.5, Kel. Warakas, Kec. Tanjung Priok, Jakarta Utara 14370',
    color: 'primary',
    link: null
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+62 812-1166-3711',
    color: 'whatsapp',
    link: 'https://wa.me/6281211663711'
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: 'Senin - Kamis: 15:00 - 21:00',
    subvalue: 'Jumat - Minggu: Tutup',
    color: 'secondary',
    link: null
  },
  {
    icon: Camera,
    label: 'Instagram',
    value: '@juniorbimbel',
    color: 'accent',
    link: 'https://instagram.com/juniorbimbel'
  }
];

const landmarks = [
  'Dekat dengan SDN Warakas 01',
  '5 menit dari Stasiun Tanjung Priok',
  '10 menit dari Mall Kelapa Gading'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    jenjang: '',
    pesan: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nama.trim()) newErrors.nama = 'Nama lengkap wajib diisi';
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.whatsapp.trim())) {
      newErrors.whatsapp = 'Format nomor tidak valid';
    }
    if (!formData.jenjang) newErrors.jenjang = 'Pilih jenjang pendidikan';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const pesanText = formData.pesan.trim() ? ` ${formData.pesan.trim()}` : '';
    const message = `Halo Bimbel Junior, saya ${formData.nama.trim()} ingin mendaftar/bertanya tentang program ${formData.jenjang}. No. WA saya: ${formData.whatsapp.trim()}.${pesanText}`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281211663711?text=${encodedMessage}`;

    window.open(waUrl, '_blank');

    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <>
      <SEO
        title="Hubungi Kami"
        description="Hubungi Bimbel Junior untuk konsultasi gratis. Alamat: Jl. Warakas 8 Gg. 10 No.34, Tanjung Priok, Jakarta Utara. WhatsApp: 0812-1166-3711."
        keywords="kontak bimbel junior, hubungi bimbel, les tanjung priok, bimbel jakarta utara, konsultasi gratis"
      />

      {/* ===== HERO ===== */}
      <section className="contact-hero gradient-hero">
        <div className="contact-hero__overlay" />
        <div className="container contact-hero__content">
          <nav className="contact-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <span>Hubungi Kami</span>
          </nav>
          <h1 className="contact-hero__title">Hubungi Kami</h1>
          <p className="contact-hero__subtitle">
            Kami siap membantu Anda. Hubungi kami untuk konsultasi gratis!
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-grid stagger-children">
            {contactInfo.map((info, index) => {
              const IconComp = info.icon;
              const cardContent = (
                <>
                  <div className={`contact-info-card__icon contact-info-card__icon--${info.color}`}>
                    <IconComp size={24} />
                  </div>
                  <h3 className="contact-info-card__label">{info.label}</h3>
                  <p className="contact-info-card__value">{info.value}</p>
                  {info.subvalue && (
                    <p className="contact-info-card__subvalue">{info.subvalue}</p>
                  )}
                </>
              );

              return (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-card contact-info-card--link"
                    >
                      {cardContent}
                      <span className="contact-info-card__cta">
                        <ExternalLink size={14} />
                      </span>
                    </a>
                  ) : (
                    <div className="contact-info-card">{cardContent}</div>
                  )}
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FORM + MAP ===== */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* --- Left: Registration Form --- */}
            <AnimateOnScroll direction="left">
              <div className="contact-form-wrapper">
                <div className="contact-form-header">
                  <h2 className="contact-form-header__title">Formulir Pendaftaran</h2>
                  <p className="contact-form-header__subtitle">
                    Isi formulir di bawah ini dan kami akan menghubungi Anda melalui WhatsApp
                  </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  {/* Nama Lengkap */}
                  <div className={`form-group ${errors.nama ? 'form-group--error' : ''}`}>
                    <label htmlFor="nama" className="form-label">
                      Nama Lengkap <span className="form-required">*</span>
                    </label>
                    <div className="form-input-wrapper">
                      <User size={18} className="form-input-icon" />
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        className="form-input"
                        placeholder="Masukkan nama lengkap"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.nama && <span className="form-error">{errors.nama}</span>}
                  </div>

                  {/* No. WhatsApp */}
                  <div className={`form-group ${errors.whatsapp ? 'form-group--error' : ''}`}>
                    <label htmlFor="whatsapp" className="form-label">
                      No. WhatsApp <span className="form-required">*</span>
                    </label>
                    <div className="form-input-wrapper">
                      <Phone size={18} className="form-input-icon" />
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        className="form-input"
                        placeholder="0812xxxxxxxx"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.whatsapp && <span className="form-error">{errors.whatsapp}</span>}
                  </div>

                  {/* Jenjang */}
                  <div className={`form-group ${errors.jenjang ? 'form-group--error' : ''}`}>
                    <label htmlFor="jenjang" className="form-label">
                      Jenjang <span className="form-required">*</span>
                    </label>
                    <div className="form-input-wrapper">
                      <BookOpen size={18} className="form-input-icon" />
                      <select
                        id="jenjang"
                        name="jenjang"
                        className="form-input form-select"
                        value={formData.jenjang}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Pilih jenjang</option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA">SMA</option>
                      </select>
                    </div>
                    {errors.jenjang && <span className="form-error">{errors.jenjang}</span>}
                  </div>

                  {/* Pesan */}
                  <div className="form-group">
                    <label htmlFor="pesan" className="form-label">
                      Pesan <span className="form-optional">(opsional)</span>
                    </label>
                    <div className="form-input-wrapper form-input-wrapper--textarea">
                      <MessageCircle size={18} className="form-input-icon form-input-icon--textarea" />
                      <textarea
                        id="pesan"
                        name="pesan"
                        className="form-input form-textarea"
                        placeholder="Tulis pertanyaan atau pesan Anda..."
                        rows={4}
                        value={formData.pesan}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`btn btn-whatsapp btn-lg contact-form__submit ${isSubmitting ? 'is-submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Mengirim...' : 'Kirim via WhatsApp'}
                  </button>
                </form>
              </div>
            </AnimateOnScroll>

            {/* --- Right: Google Maps --- */}
            <AnimateOnScroll direction="right">
              <div className="contact-map-wrapper">
                <div className="contact-map-container">
                  <iframe
                    title="Lokasi Bimbel Junior"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8769387!3d-6.1210449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f7b2c7e7c1f%3A0x1234567890abcdef!2sBimbel%20Junior!5e0!3m2!1sid!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=-6.1210449,106.8769387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-link"
                >
                  <ExternalLink size={16} />
                  Buka di Google Maps
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== DIRECTIONS ===== */}
      <section className="section contact-directions-section">
        <div className="container">
          <AnimateOnScroll>
            <div className="contact-directions-card">
              <div className="contact-directions-card__icon">
                <Navigation size={28} />
              </div>
              <h2 className="contact-directions-card__title">Cara Menuju Bimbel Junior</h2>
              <p className="contact-directions-card__text">
                Dari Stasiun Tanjung Priok, ambil arah selatan menuju Jl. Warakas. Belok ke Gg. 10,
                Bimbel Junior berada di No. 34 sisi kanan jalan.
              </p>

              <div className="contact-directions-landmarks">
                {landmarks.map((item, i) => (
                  <div className="contact-directions-landmark" key={i}>
                    <MapPin size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
