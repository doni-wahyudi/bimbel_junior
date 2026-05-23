import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Clock, Camera, Heart, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,70 1440,60 L1440,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="footer__content">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img
                  src={`${import.meta.env.BASE_URL}images/Logo Bimbel Junior.png`}
                  alt="Bimbel Junior Logo"
                  className="footer__logo-img"
                  width="50"
                  height="50"
                />
                <span className="footer__logo-text">
                  <strong>BIMBEL</strong> JUNIOR
                </span>
              </Link>
              <div className="footer__tagline">Cerdaskan Generasi Bangsa</div>
              <p className="footer__brand-desc">
                Lembaga bimbingan belajar terpercaya untuk SD, SMP, dan SMA di Tanjung Priok, Jakarta Utara. Cerdaskan Generasi Bangsa.
              </p>
              <div className="footer__social">
                <a
                  href="https://instagram.com/juniorbimbel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram Bimbel Junior"
                >
                  <Camera size={20} />
                </a>
              </div>
            </div>

            {/* Menu Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Menu</h4>
              <ul className="footer__col-links">
                <li><Link to="/">Beranda</Link></li>
                <li><Link to="/program">Program</Link></li>
                <li><Link to="/tentang-kami">Tentang Kami</Link></li>
                <li><Link to="/galeri">Galeri</Link></li>
                <li><Link to="/hubungi-kami">Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Program Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Program</h4>
              <ul className="footer__col-links">
                <li><Link to="/program#sd">Program SD</Link></li>
                <li><Link to="/program#smp">Program SMP</Link></li>
                <li><Link to="/program#sma">Program SMA</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer__col">
              <h4 className="footer__col-title">Kontak</h4>
              <ul className="footer__col-contact">
                <li>
                  <MapPin size={16} />
                  <span>Jl. Warakas 8 Gg. 10 No.34, Tanjung Priok, Jakarta Utara 14370</span>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="https://wa.me/62881024193340">+62 881-0241-93340</a>
                </li>
                <li>
                  <Clock size={16} />
                  <span>Sen–Jum: 09:00–10:30, 16:00–17:30, 18:30–20:00 (Bebas Pilih)</span>
                </li>
                <li>
                  <Camera size={16} />
                  <a href="https://instagram.com/juniorbimbel" target="_blank" rel="noopener noreferrer">@juniorbimbel</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © {currentYear} Bimbel Junior. All rights reserved. Made with <Heart size={14} className="footer__heart" /> in Jakarta.
          </p>
        </div>
      </div>
    </footer>
  );
}
