import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import announcementData from '../../data/announcement.json';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  const { id, isActive, text, link, ctaText } = announcementData;
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Only show if active and not dismissed in localStorage
    const isDismissed = localStorage.getItem(`dismissed_announcement_${id}`) === 'true';
    if (isActive && !isDismissed) {
      setIsVisible(true);
      // Dynamically set the height offset for the fixed navbar
      document.documentElement.style.setProperty('--announcement-height', '40px');
    } else {
      document.documentElement.style.setProperty('--announcement-height', '0px');
    }

    return () => {
      // Reset height offset on unmount
      document.documentElement.style.setProperty('--announcement-height', '0px');
    };
  }, [id, isActive]);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissing(true);
    
    // Smooth transition delay before hiding completely
    setTimeout(() => {
      localStorage.setItem(`dismissed_announcement_${id}`, 'true');
      setIsVisible(false);
      document.documentElement.style.setProperty('--announcement-height', '0px');
    }, 300); // Matches CSS transition duration
  };

  if (!isVisible) return null;

  return (
    <div className={`announcement-bar ${isDismissing ? 'announcement-bar--dismissing' : ''}`}>
      <div className="announcement-bar__container">
        <div className="announcement-bar__content">
          <span className="announcement-bar__text">{text}</span>
          {link && ctaText && (
            <Link to={link} className="announcement-bar__link">
              {ctaText} <ArrowRight size={14} className="announcement-bar__arrow" />
            </Link>
          )}
        </div>
        <button 
          onClick={handleDismiss} 
          className="announcement-bar__close" 
          aria-label="Tutup pengumuman"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
