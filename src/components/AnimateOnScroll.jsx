import { useEffect, useRef, useState } from 'react';

export default function AnimateOnScroll({ children, className = '', direction = 'up', threshold = 0.1, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const directionClass = {
    up: '',
    left: 'from-left',
    right: 'from-right',
    scale: 'scale-in'
  }[direction] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${directionClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
