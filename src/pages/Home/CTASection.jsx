import { Link } from 'react-router-dom';
import { GraduationCap, MessageCircle, Star, Users, ShieldCheck } from 'lucide-react';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './CTASection.css';

const WHATSAPP_URL = 'https://wa.me/6281211663711?text=Halo%20Bimbel%20Junior%2C%20saya%20ingin%20bertanya%20tentang%20program%20bimbingan%20belajar.';

export default function CTASection() {
  return (
    <section className="cta-section gradient-hero">
      {/* Floating shapes */}
      <div className="cta-bg-shapes">
        <div className="cta-shape cta-shape--1" />
        <div className="cta-shape cta-shape--2" />
        <div className="cta-shape cta-shape--3" />
      </div>

      <div className="container">
        <AnimateOnScroll>
          <div className="cta-content">
            <div className="cta-icon">
              <GraduationCap />
            </div>

            <h2 className="cta-title">Siap Meraih Prestasi Terbaikmu?</h2>

            <p className="cta-subtitle">
              Bergabung dengan ratusan siswa yang telah berhasil bersama Bimbel Junior.
              Konsultasi gratis, tanpa komitmen.
            </p>

            <div className="cta-buttons">
              <Link to="/hubungi-kami" className="cta-btn-primary">
                <GraduationCap size={20} />
                Daftar Sekarang
              </Link>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-whatsapp-modal', {
                    detail: {
                      title: 'Hubungi Bimbel Junior',
                      defaultMessage: 'Halo Bimbel Junior, saya tertarik untuk bertanya tentang program bimbingan belajar.',
                      placeholder: 'Tulis pertanyaan atau minat paket bimbel Anda di sini...'
                    }
                  }));
                }}
                className="cta-btn-whatsapp"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <MessageCircle size={20} />
                Hubungi via WhatsApp
              </button>
            </div>

            <div className="cta-trust">
              <div className="cta-trust-item">
                <Star size={18} />
                <span>Rating 4.9</span>
              </div>
              <div className="cta-trust-item">
                <Users size={18} />
                <span>Kelas Kecil</span>
              </div>
              <div className="cta-trust-item">
                <ShieldCheck size={18} />
                <span>Trial Gratis</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
