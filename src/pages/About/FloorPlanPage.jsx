import { useState } from 'react';
import { MapPin, Navigation, Compass, Layers, Phone, Clock, ArrowRight, Eye, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import './FloorPlanPage.css';

export default function FloorPlanPage() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: 'Ruang Kantor (Lobi & Administrasi)',
      size: '4m x 3m',
      icon: '💼',
      features: ['Meja Resepsionis & Pendaftaran', 'Ruang Kerja Pimpinan', 'Penyimpanan Modul & LKPD', 'Area Konsultasi Orang Tua', 'Pendingin Ruangan (AC)'],
      description: 'Pusat pelayanan administrasi, pendaftaran, dan konsultasi orang tua siswa. Tempat administrasi transaksi keuangan dan penerimaan tamu.'
    },
    {
      id: 2,
      name: 'Ruang Belajar 1 (Kelas Reguler)',
      size: '5m x 4m',
      icon: '📖',
      features: ['Layar Sentuh Interaktif (IFP)', 'Meja & Kursi Ergonomis', 'Pendingin Ruangan (AC)', 'Papan Tulis Magnetik', 'Kapasitas Kondusif 8-10 Siswa'],
      description: 'Ruang kelas utama yang didesain interaktif untuk bimbingan belajar reguler SD/SMP, didukung alat bantu visual premium.'
    },
    {
      id: 3,
      name: 'Ruang Belajar 2 (Kelas Privat / Diskusi)',
      size: '4m x 3.5m',
      icon: '✏️',
      features: ['Papan Tulis Kaca', 'Meja Diskusi Kelompok', 'Pendingin Ruangan (AC)', 'Suasana Sunyi / Fokus Tinggi', 'Kapasitas Maksi 6 Siswa'],
      description: 'Kelas khusus yang hening dan nyaman untuk bimbingan belajar privat satu-satu (one-on-one) atau kelompok diskusi kecil terfokus.'
    },
    {
      id: 4,
      name: 'Toilet (Fasilitas Bersih)',
      size: '2m x 1.5m',
      icon: '🚿',
      features: ['Sanitasi Bersih Berkala', 'Ventilasi Udara Nyaman', 'Cermin & Wastafel Air Bersih', 'Penyediaan Sabun Cuci Tangan'],
      description: 'Fasilitas sanitasi yang selalu dijaga kebersihannya secara rutin demi kesehatan dan kebersihan bersama.'
    }
  ];

  const landmarks = [
    { name: 'Polsek Tanjung Priok', distance: 'Sekitar 400m', desc: 'Arah utara sebagai acuan utama jalur masuk Jl. Warakas Raya.' },
    { name: 'Taman Segitiga Warakas', distance: 'Sekitar 200m', desc: 'RTH hijau sebagai patokan belokan ke arah Jl. Warakas Gg 8.' },
    { name: 'Mesjid Alhusna', distance: 'Sekitar 100m', desc: 'Landmark ibadah utama di seberang persimpangan jalan gang bimbel.' }
  ];

  return (
    <>
      <SEO
        title="Denah Lokasi & Ruang Belajar"
        description="Denah Ruang dan Peta Lokasi Bimbel Junior. Fasilitas lengkap: Ruang Kantor, Ruang Belajar 1 & 2 dengan AC, Toilet, dan rute mudah dari Polsek Tanjung Priok."
        keywords="denah bimbel junior, lokasi bimbel junior, fasilitas bimbel junior, peta warakas jakarta utara, ruang belajar ac"
      />

      {/* ===== Hero Banner ===== */}
      <section className="floor-hero gradient-hero">
        <div className="floor-hero__overlay" />
        <div className="container floor-hero__inner">
          <span className="floor-hero__badge">
            <Compass size={14} /> Infrastruktur
          </span>
          <h1 className="floor-hero__title">Denah Lokasi &amp; Ruang</h1>
          <p className="floor-hero__subtitle">
            Visualisasi tata letak ruang belajar premium dan panduan rute navigasi menuju kampus Bimbel Junior.
          </p>
        </div>
      </section>

      {/* ===== Section 1: INTERACTIVE FLOOR PLAN ===== */}
      <section className="section floor-layout">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Denah Tata Letak Ruangan</h2>
              <p className="section-subtitle">
                Eksplorasi tata letak ruang Bimbel Junior. Klik pada ruangan di denah untuk melihat fasilitas lengkapnya.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="floor-grid">
            {/* Interactive Graphic Map */}
            <div className="floor-graphic-card">
              <div className="floor-graphic-container">
                <div className="compass-rose">
                  <Compass size={24} className="compass-icon" />
                  <span>UTARA</span>
                </div>

                <div className="floor-blueprint">
                  {/* Outer Walls Grid */}
                  <div className="blueprint-grid">
                    {/* Ruang Belajar 1 - Large Room (Top Left) */}
                    <div
                      className={`blueprint-room room-rb1 ${selectedRoom?.id === 2 ? 'active' : ''}`}
                      onClick={() => setSelectedRoom(rooms[1])}
                    >
                      <div className="room-label">
                        <span className="room-num">2</span>
                        <span className="room-title">Ruang Belajar 1</span>
                        <span className="room-dims">5m x 4m</span>
                      </div>
                      <div className="interactive-indicator"><Eye size={12} /> Klik Detail</div>
                    </div>

                    {/* Toilet (Top Right) */}
                    <div
                      className={`blueprint-room room-toilet ${selectedRoom?.id === 4 ? 'active' : ''}`}
                      onClick={() => setSelectedRoom(rooms[3])}
                    >
                      <div className="room-label">
                        <span className="room-num">4</span>
                        <span className="room-title">Toilet</span>
                        <span className="room-dims">2m x 1.5m</span>
                      </div>
                      <div className="interactive-indicator"><Eye size={12} /></div>
                    </div>

                    {/* Ruang Kantor - Lobby (Bottom Left) */}
                    <div
                      className={`blueprint-room room-office ${selectedRoom?.id === 1 ? 'active' : ''}`}
                      onClick={() => setSelectedRoom(rooms[0])}
                    >
                      <div className="room-label">
                        <span className="room-num">1</span>
                        <span className="room-title">Ruang Kantor &amp; Lobi</span>
                        <span className="room-dims">4m x 3m</span>
                      </div>
                      <div className="interactive-indicator"><Eye size={12} /> Klik Detail</div>
                    </div>

                    {/* Ruang Belajar 2 - Small Room (Bottom Right) */}
                    <div
                      className={`blueprint-room room-rb2 ${selectedRoom?.id === 3 ? 'active' : ''}`}
                      onClick={() => setSelectedRoom(rooms[2])}
                    >
                      <div className="room-label">
                        <span className="room-num">3</span>
                        <span className="room-title">Ruang Belajar 2</span>
                        <span className="room-dims">4m x 3.5m</span>
                      </div>
                      <div className="interactive-indicator"><Eye size={12} /> Klik Detail</div>
                    </div>
                  </div>

                  {/* Entrance / Main Gate Indicator */}
                  <div className="blueprint-entrance">
                    <ArrowRight size={16} className="entrance-arrow" />
                    <span>PINTU MASUK UTAMA (GANG 10)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Details Sidebar / Display Card */}
            <div className="room-details-card">
              {selectedRoom ? (
                <div className="room-details-view animate-fade-in">
                  <div className="room-details-view__header">
                    <span className="room-icon-badge">{selectedRoom.icon}</span>
                    <div>
                      <span className="room-number-tag">Ruangan 0{selectedRoom.id}</span>
                      <h3>{selectedRoom.name}</h3>
                    </div>
                  </div>
                  <div className="room-details-view__body">
                    <p className="room-desc">{selectedRoom.description}</p>
                    <div className="room-meta">
                      <div className="meta-item">
                        <Layers size={14} className="text-primary-light" />
                        <span>Dimensi Ruang: <strong>{selectedRoom.size}</strong></span>
                      </div>
                    </div>
                    <div className="room-features">
                      <h4>Fasilitas Ruangan:</h4>
                      <ul>
                        {selectedRoom.features.map((feature, idx) => (
                          <li key={idx}>
                            <CheckCircle size={14} className="text-success" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="reset-room-btn" onClick={() => setSelectedRoom(null)}>
                    Kembali ke Panduan Umum
                  </button>
                </div>
              ) : (
                <div className="room-details-placeholder">
                  <Layers size={48} className="placeholder-icon animate-bounce-slow" />
                  <h3>Pilih Ruangan di Denah</h3>
                  <p>
                    Klik salah satu ruangan pada bagan grafis di sebelah kiri untuk melihat dimensi ruang, fungsi, dan daftar fasilitas pendingin, alat bantu ajar interaktif, atau sanitasi yang lengkap.
                  </p>
                  <div className="quick-summary-list">
                    <div className="summary-item" onClick={() => setSelectedRoom(rooms[0])}>
                      <span>1</span> Ruang Kantor (Lobi &amp; Admin)
                    </div>
                    <div className="summary-item" onClick={() => setSelectedRoom(rooms[1])}>
                      <span>2</span> Ruang Belajar 1 (Kelas Reguler)
                    </div>
                    <div className="summary-item" onClick={() => setSelectedRoom(rooms[2])}>
                      <span>3</span> Ruang Belajar 2 (Kelas Privat)
                    </div>
                    <div className="summary-item" onClick={() => setSelectedRoom(rooms[3])}>
                      <span>4</span> Toilet Bersih
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: ROUTE MAP & LANDMARKS ===== */}
      <section className="section floor-route bg-light">
        <div className="container">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Panduan Lokasi &amp; Landmark</h2>
              <p className="section-subtitle">
                Panduan jalan masuk menuju lokasi bimbingan belajar kami yang berada di tengah kota administrasi Jakarta Utara.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="route-grid">
            {/* Landmark Guidance Cards */}
            <div className="landmarks-container">
              <h3 className="landmarks-title">Titik Acuan Terdekat (Landmarks)</h3>
              <div className="landmarks-list">
                {landmarks.map((landmark, idx) => (
                  <div key={idx} className="landmark-card">
                    <div className="landmark-card__marker">
                      <MapPin size={18} />
                    </div>
                    <div className="landmark-card__content">
                      <div className="landmark-header">
                        <h4>{landmark.name}</h4>
                        <span className="landmark-dist">{landmark.distance}</span>
                      </div>
                      <p>{landmark.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Route Flow Map */}
            <div className="route-flow-card">
              <h3 className="route-flow-title">Panduan Rute Jalan Utama</h3>
              <div className="route-flow-steps">
                <div className="route-step">
                  <div className="step-badge">1</div>
                  <div className="step-details">
                    <h4>Start: Jl. Enggano / Jl. Martadinata</h4>
                    <p>Ambil arah lurus menuju Jalan Enim atau langsung ke area Jl. Gadang.</p>
                  </div>
                </div>
                <div className="route-step-arrow">▼</div>
                <div className="route-step">
                  <div className="step-badge">2</div>
                  <div className="step-details">
                    <h4>Jl. Warakas Raya &amp; Gang 8</h4>
                    <p>Lewati Polsek Tj Priok &amp; Taman Segitiga, lalu masuk ke Jl. Warakas Gg 8.</p>
                  </div>
                </div>
                <div className="route-step-arrow">▼</div>
                <div className="route-step highlight">
                  <div className="step-badge">3</div>
                  <div className="step-details">
                    <h4>Masuk Jl. Warakas 8 Gg 10 No.34</h4>
                    <p>Berada di dekat Masjid Alhusna, temukan plang resmi "Bimbel Junior".</p>
                  </div>
                </div>
              </div>

              {/* Call to action contact details */}
              <div className="route-callout">
                <div className="callout-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h5>Kesulitan Menemukan Lokasi?</h5>
                  <p>Hubungi admin kami di <strong>0812-1166-3711</strong>. Staf kami siap memandu atau menjemput Anda di depan Gang 10.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
