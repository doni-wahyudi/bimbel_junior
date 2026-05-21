import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdO_nrN-Xz7HyRVaJ2gLOzIwoa2X-g3cIDrvKqKwMQ3Hpn_tQ/viewform';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
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
    setActiveMobileSubmenu(null);
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
    {
      label: 'Tentang Kami',
      path: '/tentang-kami',
      submenu: [
        { path: '/tentang-kami', label: 'Profil & Guru' },
        { path: '/tentang-kami/legalitas', label: 'Legalitas & Perizinan' },
        { path: '/tentang-kami/sop-tata-tertib', label: 'SOP & Tata Tertib' },
      ]
    },
    { path: '/alumni', label: 'Alumni' },
    { path: '/blog', label: 'Blog' },
    { path: '/galeri', label: 'Galeri' },
    { path: '/hubungi-kami', label: 'Kontak' },
  ];

  const isSubmenuActive = (submenu) => {
    return submenu.some(sub => location.pathname === sub.path);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMobileOpen ? 'navbar--mobile-open' : ''}`}>
      <nav className="navbar__container container">
        <Link to="/" className="navbar__logo" aria-label="Junior Bimbel Home">
          <img
            src={`${import.meta.env.BASE_URL}images/Logo Junior Bimbel.png`}
            alt="Junior Bimbel Logo"
            className="navbar__logo-img"
            width="54"
            height="54"
          />
          <span className="navbar__logo-text">
            <strong>JUNIOR </strong>BIMBEL
          </span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`navbar__link-item ${link.submenu ? 'navbar__link-item--has-submenu' : ''}`}
            >
              {link.submenu ? (
                <>
                  <button
                    className={`navbar__link navbar__link--dropdown-trigger ${isSubmenuActive(link.submenu) ? 'navbar__link--active' : ''
                      }`}
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.label}
                    <ChevronDown size={14} className="navbar__dropdown-arrow" />
                  </button>
                  <ul className="navbar__dropdown">
                    {link.submenu.map((sub) => (
                      <li key={sub.path} className="navbar__dropdown-item">
                        <NavLink
                          to={sub.path}
                          className={({ isActive }) =>
                            `navbar__dropdown-link ${isActive ? 'navbar__dropdown-link--active' : ''}`
                          }
                          end
                        >
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="navbar__cta btn btn-primary">
          Daftar Sekarang
        </a>

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
              <li key={link.label} className="navbar__mobile-link-item" style={{ animationDelay: `${index * 0.05}s` }}>
                {link.submenu ? (
                  <div className="navbar__mobile-submenu-container">
                    <button
                      className={`navbar__mobile-link navbar__mobile-link--trigger ${isSubmenuActive(link.submenu) ? 'navbar__mobile-link--active' : ''
                        }`}
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown size={18} className={`navbar__mobile-arrow ${activeMobileSubmenu === link.label ? 'navbar__mobile-arrow--open' : ''}`} />
                    </button>
                    <ul className={`navbar__mobile-submenu ${activeMobileSubmenu === link.label ? 'navbar__mobile-submenu--open' : ''}`}>
                      {link.submenu.map((sub) => (
                        <li key={sub.path} className="navbar__mobile-submenu-item">
                          <NavLink
                            to={sub.path}
                            className={({ isActive }) =>
                              `navbar__mobile-submenu-link ${isActive ? 'navbar__mobile-submenu-link--active' : ''}`
                            }
                            onClick={() => setIsMobileOpen(false)}
                            end
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-cta btn btn-primary btn-lg"
            onClick={() => setIsMobileOpen(false)}
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
