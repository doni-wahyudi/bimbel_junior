import { GraduationCap, Users, BarChart3, FileText, Trophy, MapPin } from 'lucide-react';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './WhyChooseUs.css';

const features = [
  {
    icon: GraduationCap,
    title: 'Pengajar Berpengalaman',
    desc: 'Didukung oleh tim pengajar berpengalaman, bersertifikat pendidik, dan lulusan universitas terkemuka.',
  },
  {
    icon: Users,
    title: 'Kelas Kecil & Personal',
    desc: 'Maksimal 10 siswa per kelas untuk perhatian individual yang optimal bagi setiap anak.',
  },
  {
    icon: BarChart3,
    title: 'Laporan Perkembangan',
    desc: 'Orang tua menerima laporan perkembangan berkala setiap bulan untuk memantau kemajuan anak.',
  },
  {
    icon: FileText,
    title: 'Latihan Soal Lengkap',
    desc: 'Bank soal lengkap untuk latihan ujian harian, UTS, UAS, dan UN agar siswa siap hadapi ujian.',
  },
  {
    icon: Trophy,
    title: 'Terbukti Berprestasi',
    desc: 'Rating 4.9 di Google Maps dengan banyak alumni berprestasi di berbagai sekolah favorit.',
  },
  {
    icon: MapPin,
    title: 'Lokasi Strategis',
    desc: 'Mudah dijangkau di jantung Tanjung Priok, Jakarta Utara. Aman dan nyaman untuk belajar.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us section">
      <div className="container">
        <AnimateOnScroll>
          <div className="section-header">
            <h2 className="section-title">Mengapa Memilih Bimbel Junior?</h2>
            <p className="section-subtitle">
              Kami berkomitmen memberikan bimbingan belajar terbaik untuk putra-putri Anda
            </p>
          </div>
        </AnimateOnScroll>

        <div className="features-grid stagger-children">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
