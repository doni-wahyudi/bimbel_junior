import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/program', label: 'Program' },
    { path: '/alumni', label: 'Alumni' },
    { path: '/blog', label: 'Blog' },
    { path: '/galeri', label: 'Galeri' },
    { path: '/hubungi-kami', label: 'Kontak' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMobileOpen ? 'navbar--mobile-open' : ''}`}>
      <nav className="navbar__container container">
        <Link to="/" className="navbar__logo" aria-label="Bimbel Junior Home">
          <div className="navbar__logo-icon">
            <GraduationCap size={24} />
          </div>
          <span className="navbar__logo-text">
            Bimbel <strong>JUNIOR</strong>
          </span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.path} className="navbar__link-item">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/daftar" className="navbar__cta btn btn-primary">
          Daftar Sekarang
        </Link>

        <button
          className="navbar__hamburger"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`navbar__mobile-overlay ${isMobileOpen ? 'navbar__mobile-overlay--open' : ''}`}>
        <div className={`navbar__mobile-menu ${isMobileOpen ? 'navbar__mobile-menu--open' : ''}`}>
          <ul className="navbar__mobile-links">
            {navLinks.map((link, index) => (
              <li key={link.path} className="navbar__mobile-link-item" style={{ animationDelay: `${index * 0.05}s` }}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                  }
                  end={link.path === '/'}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/hubungi-kami"
            className="navbar__mobile-cta btn btn-primary btn-lg"
            onClick={() => setIsMobileOpen(false)}
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}
