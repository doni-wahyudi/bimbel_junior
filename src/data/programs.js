export const programs = {
  sd: {
    id: 'sd',
    name: 'Program SD',
    fullName: 'Sekolah Dasar',
    shortDesc: 'Membangun fondasi akademik yang kuat untuk anak Anda sejak dini',
    longDesc: 'Program bimbingan belajar SD dirancang untuk membantu siswa memahami konsep dasar dengan metode belajar yang menyenangkan dan interaktif. Dengan pendekatan personal, setiap siswa mendapat perhatian khusus sesuai kemampuannya.',
    icon: 'BookOpen',
    color: '#2D6CB4',
    colorLight: '#E8F0FE',
    target: 'Siswa Kelas 1-6 SD',
    classSize: 'Maks. 10 siswa per kelas',
    schedule: 'Senin - Kamis, 15:00 - 17:00',
    method: 'Interaktif & Menyenangkan',
    subjects: [
      {
        name: 'Matematika',
        icon: 'Calculator',
        description: 'Operasi hitung, geometri, pecahan, dan pemecahan masalah'
      },
      {
        name: 'Bahasa Indonesia',
        icon: 'BookText',
        description: 'Membaca, menulis, tata bahasa, dan pemahaman teks'
      },
      {
        name: 'IPA',
        icon: 'FlaskConical',
        description: 'Sains dasar, eksperimen sederhana, dan lingkungan hidup'
      },
      {
        name: 'Bahasa Inggris',
        icon: 'Globe',
        description: 'Vocabulary, grammar dasar, reading, dan speaking'
      }
    ],
    scheduleTable: [
      { day: 'Senin', time: '15:00 - 17:00', subject: 'Matematika & IPA' },
      { day: 'Selasa', time: '15:00 - 17:00', subject: 'Bahasa Indonesia & Inggris' },
      { day: 'Rabu', time: '15:00 - 17:00', subject: 'Latihan Soal & Review' },
      { day: 'Kamis', time: '15:00 - 17:00', subject: 'Matematika & IPA' }
    ],
    pricing: [
      {
        tier: 'Reguler',
        price: '350.000',
        period: '/bulan',
        features: ['4x pertemuan/minggu', 'Kelas grup (maks 10 siswa)', 'Modul belajar lengkap', 'Latihan soal harian'],
        popular: false
      },
      {
        tier: 'Intensif',
        price: '500.000',
        period: '/bulan',
        features: ['4x pertemuan/minggu', 'Kelas grup (maks 10 siswa)', 'Modul belajar lengkap', 'Sesi latihan tambahan', 'Tryout bulanan'],
        popular: true
      },
      {
        tier: 'Privat',
        price: '750.000',
        period: '/bulan',
        features: ['2x pertemuan/minggu', 'Bimbingan 1-on-1', 'Modul khusus personal', 'Jadwal fleksibel', 'Laporan progress mingguan'],
        popular: false
      }
    ]
  },
  smp: {
    id: 'smp',
    name: 'Program SMP',
    fullName: 'Sekolah Menengah Pertama',
    shortDesc: 'Persiapan ujian dan pendalaman materi untuk meraih SMA favorit',
    longDesc: 'Program SMP kami memfokuskan pada pendalaman materi dan persiapan ujian. Siswa dibimbing untuk memahami konsep secara mendalam, bukan hanya menghafal, sehingga siap menghadapi berbagai jenis soal ujian.',
    icon: 'GraduationCap',
    color: '#10B981',
    colorLight: '#D1FAE5',
    target: 'Siswa Kelas 7-9 SMP',
    classSize: 'Maks. 10 siswa per kelas',
    schedule: 'Senin - Kamis, 17:00 - 19:00',
    method: 'Konseptual & Problem-Solving',
    subjects: [
      {
        name: 'Matematika',
        icon: 'Calculator',
        description: 'Aljabar, geometri, statistika, dan penalaran matematis'
      },
      {
        name: 'IPA (Fisika & Biologi)',
        icon: 'FlaskConical',
        description: 'Fisika dasar, biologi, dan praktikum laboratorium'
      },
      {
        name: 'Bahasa Inggris',
        icon: 'Globe',
        description: 'Grammar, reading comprehension, writing, dan speaking'
      },
      {
        name: 'Bahasa Indonesia',
        icon: 'BookText',
        description: 'Tata bahasa, sastra, menulis esai, dan pemahaman bacaan'
      },
      {
        name: 'IPS',
        icon: 'Map',
        description: 'Geografi, sejarah, ekonomi, dan sosiologi'
      }
    ],
    scheduleTable: [
      { day: 'Senin', time: '17:00 - 19:00', subject: 'Matematika & IPA' },
      { day: 'Selasa', time: '17:00 - 19:00', subject: 'Bahasa Indonesia & Inggris' },
      { day: 'Rabu', time: '17:00 - 19:00', subject: 'IPS & Latihan Soal' },
      { day: 'Kamis', time: '17:00 - 19:00', subject: 'Matematika & Review' }
    ],
    pricing: [
      {
        tier: 'Reguler',
        price: '400.000',
        period: '/bulan',
        features: ['4x pertemuan/minggu', 'Kelas grup (maks 10 siswa)', 'Modul belajar lengkap', 'Latihan soal harian'],
        popular: false
      },
      {
        tier: 'Intensif',
        price: '600.000',
        period: '/bulan',
        features: ['4x pertemuan/minggu', 'Kelas grup (maks 10 siswa)', 'Modul belajar lengkap', 'Sesi latihan tambahan', 'Tryout bulanan', 'Persiapan ujian masuk SMA'],
        popular: true
      },
      {
        tier: 'Privat',
        price: '850.000',
        period: '/bulan',
        features: ['2x pertemuan/minggu', 'Bimbingan 1-on-1', 'Modul khusus personal', 'Jadwal fleksibel', 'Laporan progress mingguan'],
        popular: false
      }
    ]
  },
  sma: {
    id: 'sma',
    name: 'Program SMA',
    fullName: 'Sekolah Menengah Atas',
    shortDesc: 'Persiapan UTBK/SNBT dan pendalaman materi menuju PTN impian',
    longDesc: 'Program SMA kami dirancang khusus untuk mempersiapkan siswa menghadapi UTBK/SNBT dan ujian masuk perguruan tinggi negeri. Dengan materi yang komprehensif dan latihan intensif, siswa siap meraih PTN impian.',
    icon: 'Award',
    color: '#8B5CF6',
    colorLight: '#EDE9FE',
    target: 'Siswa Kelas 10-12 SMA',
    classSize: 'Maks. 10 siswa per kelas',
    schedule: 'Senin - Kamis, 19:00 - 21:00',
    method: 'Intensif & Strategis',
    isNew: true,
    subjects: [
      {
        name: 'Matematika',
        icon: 'Calculator',
        description: 'Kalkulus, trigonometri, matriks, dan penalaran kuantitatif'
      },
      {
        name: 'Fisika',
        icon: 'Zap',
        description: 'Mekanika, listrik, gelombang, dan termodinamika'
      },
      {
        name: 'Kimia',
        icon: 'FlaskConical',
        description: 'Kimia organik, anorganik, dan stoikiometri'
      },
      {
        name: 'Biologi',
        icon: 'Leaf',
        description: 'Genetika, sel, ekosistem, dan bioteknologi'
      },
      {
        name: 'Bahasa Inggris',
        icon: 'Globe',
        description: 'Advanced grammar, TOEFL prep, academic writing'
      },
      {
        name: 'Ekonomi',
        icon: 'TrendingUp',
        description: 'Mikro-makro ekonomi, akuntansi, dan manajemen'
      }
    ],
    scheduleTable: [
      { day: 'Senin', time: '19:00 - 21:00', subject: 'Matematika & Fisika' },
      { day: 'Selasa', time: '19:00 - 21:00', subject: 'Kimia & Biologi' },
      { day: 'Rabu', time: '19:00 - 21:00', subject: 'Bahasa Inggris & Ekonomi' },
      { day: 'Kamis', time: '19:00 - 21:00', subject: 'Latihan UTBK & Review' }
    ],
    pricing: [
      {
        tier: 'Reguler',
        price: '500.000',
        period: '/bulan',
        features: ['4x pertemuan/minggu', 'Kelas grup (maks 10 siswa)', 'Modul belajar lengkap', 'Latihan soal harian'],
        popular: false
      },
      {
        tier: 'Intensif',
        price: '700.000',
        period: '/bulan',
        features: ['4x pertemuan/minggu', 'Kelas grup (maks 10 siswa)', 'Modul belajar lengkap', 'Sesi latihan tambahan', 'Tryout UTBK bulanan', 'Persiapan SNBT'],
        popular: true
      },
      {
        tier: 'Privat',
        price: '1.000.000',
        period: '/bulan',
        features: ['2x pertemuan/minggu', 'Bimbingan 1-on-1', 'Modul khusus personal', 'Jadwal fleksibel', 'Laporan progress mingguan', 'Konsultasi PTN'],
        popular: false
      }
    ]
  }
};
