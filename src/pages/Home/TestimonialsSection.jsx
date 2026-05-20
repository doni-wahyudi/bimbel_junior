import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Determine slides per view based on viewport
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const goTo = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  const totalDots = maxIndex + 1;

  return (
    <section className="testimonials section">
      <div className="container">
        <AnimateOnScroll>
          <div className="section-header">
            <h2 className="section-title">Apa Kata Mereka?</h2>
            <p className="section-subtitle">
              Testimoni dari orang tua dan siswa yang telah merasakan manfaat belajar di Bimbel Junior
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="testimonials-wrapper">
            <div className="testimonials-carousel">
              <div
                className="testimonials-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-slide">
                    <div className="testimonial-card">
                      <div className="testimonial-quote-icon">
                        <Quote />
                      </div>

                      {/* Stars */}
                      <div className="testimonial-stars">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <span key={i} className="testimonial-star">
                            <Star />
                          </span>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="testimonial-text">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="testimonial-author">
                        <div className="testimonial-avatar">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="testimonial-name">{testimonial.name}</div>
                          <div className="testimonial-role">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="testimonials-nav">
              <button
                className="testimonials-arrow"
                onClick={goPrev}
                disabled={currentIndex === 0}
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft />
              </button>

              <div className="testimonials-dots">
                {Array.from({ length: totalDots }, (_, i) => (
                  <button
                    key={i}
                    className={`testimonial-dot ${i === currentIndex ? 'active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Ke testimoni ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className="testimonials-arrow"
                onClick={goNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
