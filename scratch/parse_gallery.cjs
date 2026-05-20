const fs = require('fs');
const path = require('path');

const galleryDir = 'c:/Users/almay/Documents/web_development/bimbel_junior/public/images/gallery';
const outputFile = 'c:/Users/almay/Documents/web_development/bimbel_junior/src/data/gallery.js';

const monthNames = [
  '', 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 
  'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'
];

// Read directory
const files = fs.readdirSync(galleryDir);

// Original 8 highlight items from gallery.js
const originalItems = [
  {
    id: 1,
    category: 'belajar',
    title: 'Suasana belajar di kelas SD',
    gradient: 'linear-gradient(135deg, #2D6CB4, #1B3A5C)',
    span: false,
    photo: 'images/gallery/belajar_sd.png',
    description: 'Kegiatan belajar mengajar untuk tingkat Sekolah Dasar berlangsung sangat interaktif. Pengajar menggunakan alat peraga yang menarik agar siswa lebih mudah memahami materi pelajaran seperti Matematika dan IPA.',
    date: '12 Mei 2026',
    location: 'Kelas Cerdas, Lantai 1'
  },
  {
    id: 2,
    category: 'belajar',
    title: 'Diskusi kelompok siswa SMP',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    span: true,
    photo: 'images/gallery/belajar_smp.png',
    description: 'Siswa SMP sedang melakukan Focus Group Discussion (FGD) untuk memecahkan soal-soal Sains tingkat lanjut. Metode ini terbukti melatih kolaborasi dan kekritisan berpikir siswa di masa pubertas.',
    date: '08 Mei 2026',
    location: 'Kelas Kreatif, Lantai 2'
  },
  {
    id: 3,
    category: 'fasilitas',
    title: 'Ruang belajar utama',
    gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    span: false,
    photo: 'images/gallery/fasilitas1.png',
    description: 'Inilah ruang belajar utama kami yang dilengkapi dengan fasilitas AC, meja ergonomis, dan papan tulis pintar (smartboard) untuk mendukung kenyamanan visual dan fisik siswa selama sesi pembelajaran yang panjang.',
    date: '01 Jan 2026',
    location: 'Bimbel Junior Pusat'
  },
  {
    id: 4,
    category: 'belajar',
    title: 'Latihan soal bersama',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    span: false,
    photo: 'images/gallery/tutor.png',
    description: 'Menjelang ujian tengah semester, siswa dikumpulkan untuk melakukan drilling latihan soal. Guru memberikan tips dan trik cepat agar siswa dapat mengatur waktu pengerjaan ujian dengan sangat efisien.',
    date: '20 Apr 2026',
    location: 'Aula Belajar'
  },
  {
    id: 5,
    category: 'prestasi',
    title: 'Siswa berprestasi semester 1',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    span: true,
    photo: 'images/gallery/prestasi1.png',
    description: 'Pemberian penghargaan kepada para siswa peraih nilai tertinggi dalam Try Out Akbar Bimbel Junior semester pertama. Penghargaan ini bertujuan untuk terus memotivasi seluruh siswa agar rajin belajar dan berani bermimpi besar.',
    date: '15 Des 2025',
    location: 'Auditorium Bimbel Junior'
  },
  {
    id: 6,
    category: 'fasilitas',
    title: 'Area belajar nyaman',
    gradient: 'linear-gradient(135deg, #14B8A6, #0D9488)',
    span: false,
    photo: 'images/gallery/fasilitas1.png',
    description: 'Selain ruang kelas formal, kami juga menyediakan area belajar bersantai (lounge). Di sini, siswa dapat membaca buku, berdiskusi santai, atau beristirahat menunggu sesi kelas selanjutnya dengan nyaman.',
    date: '01 Jan 2026',
    location: 'Lounge Lantai 1'
  },
  {
    id: 7,
    category: 'belajar',
    title: 'Sesi bimbingan privat',
    gradient: 'linear-gradient(135deg, #6366F1, #4F46E5)',
    span: false,
    photo: 'images/gallery/tutor.png',
    description: 'Sesi bimbingan belajar privat satu-lawan-satu (1-on-1). Metode ini sangat cocok bagi siswa yang membutuhkan perhatian penuh untuk mengejar ketertinggalan atau fokus intensif pada topik spesifik yang dirasa sulit.',
    date: '10 Mei 2026',
    location: 'Bilik Privat'
  },
  {
    id: 8,
    category: 'prestasi',
    title: 'Peraih nilai tertinggi UAS',
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
    span: true,
    photo: 'images/gallery/prestasi1.png',
    description: 'Kebanggaan luar biasa saat siswa-siswi kami berhasil memborong peringkat teratas pada Ujian Akhir Sekolah di sekolah masing-masing. Teruslah berprestasi dan banggakan orang tua kalian!',
    date: '20 Jun 2025',
    location: 'Acara Kelulusan'
  }
];

let currentId = originalItems.length + 1;
const parsedItems = [];

// Parse filename format: "DD_MM_YY class.jpg/png/mp4"
const filenameRegex = /^(\d+)_(\d+)_(\d+)\s+([^.]+)\.(jpg|png|mp4)$/i;

files.forEach(file => {
  const match = file.match(filenameRegex);
  if (!match) return;

  const [_, dayStr, monthStr, yearStr, rawClass, ext] = match;
  
  const day = parseInt(dayStr, 10);
  const month = parseInt(monthStr, 10);
  const year = 2000 + parseInt(yearStr, 10);
  const isVideo = ext.toLowerCase() === 'mp4';
  
  const dateFormatted = `${day} ${monthNames[month]} ${year}`;
  
  // Format class label nicely
  let classLabel = rawClass.toUpperCase().replace(/\(\d+\)/g, ''); // Remove (1) etc.
  let jenjang = 'SMP';
  let desc = 'Siswa aktif berdiskusi dan mendalami materi pelajaran sekolah bersama bimbingan intensif dari tutor Bimbel Junior.';
  
  if (classLabel.includes('SD')) {
    jenjang = 'SD';
    const num = classLabel.match(/\d+/);
    classLabel = `SD Kelas ${num ? num[0] : ''}`;
    desc = 'Pembelajaran interaktif tingkat Sekolah Dasar (SD) yang didesain menyenangkan untuk memperkuat konsep matematika dasar dan sains.';
  } else if (classLabel.startsWith('7')) {
    classLabel = `SMP Kelas ${classLabel}`;
    desc = 'Kelas bimbingan akademik SMP Kelas 7 untuk pemantapan kurikulum sekolah dan persiapan pengerjaan tugas harian.';
  } else if (classLabel.startsWith('8')) {
    classLabel = `SMP Kelas ${classLabel}`;
    desc = 'Bimbingan belajar SMP Kelas 8 berfokus pada materi IPA, Matematika, dan persiapan menghadapi asesmen sekolah.';
  } else if (classLabel.startsWith('9')) {
    classLabel = `SMP Kelas ${classLabel}`;
    desc = 'Kelas Intensif SMP Kelas 9. Fokus penuh pada pengerjaan bank soal dan drilling intensif persiapan kelulusan serta ujian sekolah.';
  }

  const title = isVideo 
    ? `Klip Belajar ${classLabel}` 
    : `Aktivitas Belajar ${classLabel}`;

  parsedItems.push({
    id: currentId++,
    category: 'belajar',
    title,
    photo: `images/gallery/${file}`,
    description: desc,
    date: dateFormatted,
    location: `Bimbel Junior (${classLabel})`,
    jenjang, // SD or SMP
    isVideo
  });
});

// Sort daily activities by date descending (newest first)
const monthMap = {
  'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'Mei': 5, 'Jun': 6,
  'Jul': 7, 'Agt': 8, 'Sep': 9, 'Okt': 10, 'Nov': 11, 'Des': 12
};

const parseDateObj = (dateStr) => {
  const parts = dateStr.split(' ');
  const day = parseInt(parts[0], 10);
  const month = monthMap[parts[1]] || 1;
  const year = parseInt(parts[2], 10);
  return new Date(year, month - 1, day);
};

parsedItems.sort((a, b) => parseDateObj(b.date) - parseDateObj(a.date));

// Combine
const allItems = [...originalItems.map(item => ({...item, isFeatured: true, jenjang: 'Fasilitas & Prestasi'})), ...parsedItems];

// Generate JS output content
const outputContent = `// File ini dihasilkan secara otomatis oleh skrip parse_gallery.js
export const galleryItems = ${JSON.stringify(allItems, null, 2)};
`;

fs.writeFileSync(outputFile, outputContent);
console.log(`Successfully generated gallery data with ${allItems.length} items.`);
