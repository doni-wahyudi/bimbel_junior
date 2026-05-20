import {
  BookOpen,
  Users,
  Monitor,
  FileText,
  Trophy,
  Sofa,
  GraduationCap,
  Award
} from 'lucide-react';

const cleanBaseUrl = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? import.meta.env.BASE_URL || '/'
  : `${import.meta.env.BASE_URL || '/'}/`;

export const galleryItems = [
  {
    id: 1,
    category: 'belajar',
    title: 'Suasana belajar di kelas SD',
    gradient: 'linear-gradient(135deg, #2D6CB4, #1B3A5C)',
    icon: BookOpen,
    span: false,
    photo: `${cleanBaseUrl}images/gallery/belajar_sd.png`,
    description: 'Kegiatan belajar mengajar untuk tingkat Sekolah Dasar berlangsung sangat interaktif. Pengajar menggunakan alat peraga yang menarik agar siswa lebih mudah memahami materi pelajaran seperti Matematika dan IPA.',
    date: '12 Mei 2026',
    location: 'Kelas Cerdas, Lantai 1'
  },
  {
    id: 2,
    category: 'belajar',
    title: 'Diskusi kelompok siswa SMP',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    icon: Users,
    span: true,
    photo: `${cleanBaseUrl}images/gallery/belajar_smp.png`,
    description: 'Siswa SMP sedang melakukan Focus Group Discussion (FGD) untuk memecahkan soal-soal Sains tingkat lanjut. Metode ini terbukti melatih kolaborasi dan kekritisan berpikir siswa di masa pubertas.',
    date: '08 Mei 2026',
    location: 'Kelas Kreatif, Lantai 2'
  },
  {
    id: 3,
    category: 'fasilitas',
    title: 'Ruang belajar utama',
    gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    icon: Monitor,
    span: false,
    photo: `${cleanBaseUrl}images/gallery/fasilitas1.png`,
    description: 'Inilah ruang belajar utama kami yang dilengkapi dengan fasilitas AC, meja ergonomis, dan papan tulis pintar (smartboard) untuk mendukung kenyamanan visual dan fisik siswa selama sesi pembelajaran yang panjang.',
    date: '01 Januari 2026',
    location: 'Bimbel Junior Pusat'
  },
  {
    id: 4,
    category: 'belajar',
    title: 'Latihan soal bersama',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    icon: FileText,
    span: false,
    photo: `${cleanBaseUrl}images/gallery/tutor.png`,
    description: 'Menjelang ujian tengah semester, siswa dikumpulkan untuk melakukan drilling latihan soal. Guru memberikan tips dan trik cepat agar siswa dapat mengatur waktu pengerjaan ujian dengan sangat efisien.',
    date: '20 April 2026',
    location: 'Aula Belajar'
  },
  {
    id: 5,
    category: 'prestasi',
    title: 'Siswa berprestasi semester 1',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    icon: Trophy,
    span: true,
    photo: `${cleanBaseUrl}images/gallery/prestasi1.png`,
    description: 'Pemberian penghargaan kepada para siswa peraih nilai tertinggi dalam Try Out Akbar Bimbel Junior semester pertama. Penghargaan ini bertujuan untuk terus memotivasi seluruh siswa agar rajin belajar dan berani bermimpi besar.',
    date: '15 Desember 2025',
    location: 'Auditorium Bimbel Junior'
  },
  {
    id: 6,
    category: 'fasilitas',
    title: 'Area belajar nyaman',
    gradient: 'linear-gradient(135deg, #14B8A6, #0D9488)',
    icon: Sofa,
    span: false,
    photo: `${cleanBaseUrl}images/gallery/fasilitas1.png`,
    description: 'Selain ruang kelas formal, kami juga menyediakan area belajar bersantai (lounge). Di sini, siswa dapat membaca buku, berdiskusi santai, atau beristirahat menunggu sesi kelas selanjutnya dengan nyaman.',
    date: '01 Januari 2026',
    location: 'Lounge Lantai 1'
  },
  {
    id: 7,
    category: 'belajar',
    title: 'Sesi bimbingan privat',
    gradient: 'linear-gradient(135deg, #6366F1, #4F46E5)',
    icon: GraduationCap,
    span: false,
    photo: `${cleanBaseUrl}images/gallery/tutor.png`,
    description: 'Sesi bimbingan belajar privat satu-lawan-satu (1-on-1). Metode ini sangat cocok bagi siswa yang membutuhkan perhatian penuh untuk mengejar ketertinggalan atau fokus intensif pada topik spesifik yang dirasa sulit.',
    date: '10 Mei 2026',
    location: 'Bilik Privat'
  },
  {
    id: 8,
    category: 'prestasi',
    title: 'Peraih nilai tertinggi UAS',
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
    icon: Award,
    span: true,
    photo: `${cleanBaseUrl}images/gallery/prestasi1.png`,
    description: 'Kebanggaan luar biasa saat siswa-siswi kami berhasil memborong peringkat teratas pada Ujian Akhir Sekolah di sekolah masing-masing. Teruslah berprestasi dan banggakan orang tua kalian!',
    date: '20 Juni 2025',
    location: 'Acara Kelulusan'
  }
];
