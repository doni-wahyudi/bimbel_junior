import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../data/faq';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './FAQSection.css';

const WHATSAPP_URL = 'https://wa.me/6281211663711?text=Halo%20Bimbel%20Junior%2C%20saya%20ingin%20bertanya%20tentang%20program%20bimbingan%20belajar.';

export default function FAQSection() {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section section">
      <div className="container">
        <AnimateOnScroll>
          <div className="section-header">
            <h2 className="section-title">Pertanyaan Umum</h2>
            <p className="section-subtitle">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang Bimbel Junior
            </p>
          </div>
        </AnimateOnScroll>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <AnimateOnScroll key={faq.id} delay={index * 0.05}>
              <div className={`faq-item ${activeId === faq.id ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={activeId === faq.id}
                >
                  <span className="faq-question-number">{index + 1}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-chevron">
                    <ChevronDown />
                  </span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}

          <AnimateOnScroll>
            <div className="faq-cta">
              <p className="faq-cta-text">
                Masih punya pertanyaan? <strong>Kami siap membantu!</strong>
              </p>
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-whatsapp-modal', {
                    detail: {
                      title: 'Tanya Pertanyaan Lain',
                      defaultMessage: 'Halo Bimbel Junior, saya memiliki pertanyaan mengenai bimbingan belajar yang belum ada di FAQ.',
                      placeholder: 'Tulis pertanyaan Anda di sini...'
                    }
                  }));
                }}
                className="btn btn-whatsapp"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                Tanya via WhatsApp
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
