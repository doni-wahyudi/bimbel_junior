import SEO from '../../components/SEO';
import HeroSection from './HeroSection';
import ProgramsOverview from './ProgramsOverview';
import WhyChooseUs from './WhyChooseUs';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <SEO
        title="Beranda"
        description="Bimbel Junior — Bimbingan belajar terpercaya untuk SD, SMP, dan SMA di Tanjung Priok, Jakarta Utara. Rating 4.9⭐, pengajar M.Pd., kelas kecil maks 10 siswa. Hubungi: 0881-0241-93340"
        keywords="bimbel tanjung priok, les privat jakarta utara, bimbingan belajar SD SMP SMA, les tanjung priok, bimbel junior, tempat les jakarta utara"
      />

      <HeroSection />
      <ProgramsOverview />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
