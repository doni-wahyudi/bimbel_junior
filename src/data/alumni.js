const cleanBaseUrl = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? import.meta.env.BASE_URL || '/'
  : `${import.meta.env.BASE_URL || '/'}/`;

export const alumniData = [
  {
    id: 1,
    name: 'Indah Maulia Agiska',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 13 Jakarta',
    pathway: 'Jalur Prestasi Akademik',
    achievement: 'Lolos SMAN 13 (Prestasi)',
    category: 'SMA',
    quote: 'Belajar di Bimbel Junior seru sekali! Gurunya sabar dan cara menjelaskan konsep materi sangat gampang dipahami. Terima kasih telah membantu saya lolos lewat jalur prestasi akademik!',
    image: `${cleanBaseUrl}images/alumni/indah_maulia_agiska.png`
  },
  {
    id: 2,
    name: 'Alleatansyah',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 13 Jakarta',
    pathway: 'Jalur Prestasi Akademik',
    achievement: 'Lolos SMAN 13 (Prestasi)',
    category: 'SMA',
    quote: 'Suasana kelasnya nyaman dan kondusif untuk belajar. Penjelasan materi dari tutor sangat sistematis, sehingga saya bisa bersaing meraih kursi SMA 13 melalui jalur prestasi akademik.',
    image: `${cleanBaseUrl}images/alumni/Alleatansyah.png`
  },
  {
    id: 3,
    name: 'Radix Saadati',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 13 Jakarta',
    pathway: 'Jalur Prestasi Non Akademik',
    achievement: 'Lolos SMAN 13 (Prestasi)',
    category: 'SMA',
    quote: 'Di Bimbel Junior, waktu belajar sangat fleksibel bagi saya yang punya kegiatan non-akademik. Bimbingan tutor di sini membantu saya menyeimbangkan prestasi hingga diterima di sekolah impian.',
    image: `${cleanBaseUrl}images/alumni/Radix_Saadanti.png`
  },
  {
    id: 4,
    name: 'Bagas Ridho Wibisono',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 15 Jakarta',
    achievement: 'Lolos SMAN 15 Jakarta',
    category: 'SMA',
    quote: 'Latihan soal dan pembahasan tryout-nya sangat lengkap. Mentor-mentornya sangat bersahabat dan selalu memberi motivasi hingga saya sukses masuk SMAN 15 Jakarta!',
    image: `${cleanBaseUrl}images/alumni/Bagas_Ridho_Wibisono.png`
  },
  {
    id: 5,
    name: 'Firdan Al-Ghatani',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 80 Jakarta',
    achievement: 'Lolos SMAN 80 Jakarta',
    category: 'SMA',
    quote: 'Kelas kecil di Bimbel Junior membuat saya lebih fokus belajar dan bebas bertanya. Penjelasan rumus-rumus sulit jadi terasa sangat sederhana. Sangat bersyukur bisa dibimbing di sini!',
    image: `${cleanBaseUrl}images/alumni/Firdan_Al-Ghatani.png`
  },
  {
    id: 6,
    name: 'Syahira Tiara Jalianty',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 80 Jakarta',
    achievement: 'Lolos SMAN 80 Jakarta',
    category: 'SMA',
    quote: 'Setiap sesi belajarnya menyenangkan dan tidak membosankan. Terima kasih Bimbel Junior atas bimbingan dan tips-tips mengerjakan soal ujian dengan cepat!',
    image: `${cleanBaseUrl}images/alumni/Syahira_Tiara_Jalianty.png`
  },
  {
    id: 7,
    name: 'Aulianda Allia Muid',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 80 Jakarta',
    achievement: 'Lolos SMAN 80 Jakarta',
    category: 'SMA',
    quote: 'Tutor di Bimbel Junior selalu siap membantu kapan pun saya kesulitan memahami materi sekolah. Dukungan penuh mereka mengantarkan saya lolos ke SMAN 80 Jakarta.',
    image: `${cleanBaseUrl}images/alumni/Aulianda_Allia_Muid.png`
  },
  {
    id: 8,
    name: 'Keyfandra Putra Pradyatama',
    year: '2023',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 80 Jakarta',
    pathway: 'Jalur Prestasi — Saat ini kuliah di IPB: Teknologi Hasil Perairan',
    achievement: 'Lolos IPB University',
    category: 'SMA',
    quote: 'Bimbel Junior menanamkan konsep dasar belajar yang kuat sejak SMP hingga saya lolos ke SMA 80 lewat jalur prestasi, dan kini berhasil melanjutkan kuliah di IPB. Terima kasih banyak!',
    image: `${cleanBaseUrl}images/alumni/Keyfandra_Putra_Pradyatama.png`
  },
  {
    id: 9,
    name: 'Ijlal Hafidz Syadi',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 18 Jakarta',
    pathway: 'Jalur Prestasi Non Akademik',
    achievement: 'Lolos SMAN 18 (Prestasi)',
    category: 'SMA',
    quote: 'Meskipun masuk lewat jalur prestasi non-akademik, bimbingan akademik di Bimbel Junior sangat membantu saya mempertahankan nilai rapor yang bagus di sekolah.',
    image: `${cleanBaseUrl}images/alumni/Ijlal_Hafidz_Syadi.png`
  },
  {
    id: 10,
    name: 'Fasha Anugrah Pratama',
    year: '2023',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMK Negeri 12 Jakarta',
    achievement: 'Lolos SMKN 12 Jakarta',
    category: 'SMK',
    quote: 'Materi belajar yang praktis dan suasana kekeluargaan di Bimbel Junior sangat mendukung saya dalam mempersiapkan diri hingga sukses diterima di SMKN 12 Jakarta.',
    image: `${cleanBaseUrl}images/alumni/Fasha_Anugrah_Pratama.png`
  },
  {
    id: 11,
    name: 'Jihan Nur Afifah',
    year: '2024',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 80 Jakarta',
    achievement: 'Lolos SMAN 80 Jakarta',
    category: 'SMA',
    quote: 'Metode belajarnya terstruktur and mentornya asyik-asyik. Bimbel Junior adalah partner belajar terbaik yang membuat saya percaya diri menghadapi ujian.',
    image: `${cleanBaseUrl}images/alumni/Jihan_Nur_Afifah.png`
  },
  {
    id: 12,
    name: 'I Putu Pandu',
    year: '2023',
    previousSchool: 'SMP Asal (Jakarta Utara)',
    currentSchool: 'SMA Negeri 18 Jakarta',
    pathway: 'Jalur Prestasi — Saat ini kuliah di UPN',
    achievement: 'Lolos UPN Veteran Jakarta',
    category: 'SMA',
    quote: 'Fondasi belajar yang dibangun di Bimbel Junior sangat berguna bahkan hingga tingkat kuliah. Sangat merekomendasikan tempat belajar ini untuk siapa saja yang ingin berprestasi!',
    image: `${cleanBaseUrl}images/alumni/I_Putu_Pandu.png`
  }
];
