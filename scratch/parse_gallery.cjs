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

let currentId = 1;
const parsedItems = [];

// Parse filename format: "DD_MM_YY class.jpg/png/mp4"
const filenameRegex = /^(\d+)_(\d+)_(\d+)\s+([^.]+)\.(jpg|png|mp4)$/i;

// List of AI generated files to exclude
const aiGeneratedFiles = [
  'belajar_sd.png',
  'belajar_sma.png',
  'belajar_smp.png',
  'fasilitas1.png',
  'prestasi1.png',
  'tutor.png'
];

files.forEach(file => {
  // Exclude AI files
  if (aiGeneratedFiles.includes(file)) return;
  
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

// Assign IDs and mark the first 8 items as featured highlights
const finalItems = parsedItems.map((item, index) => {
  return {
    id: currentId++,
    ...item,
    isFeatured: index < 8 // Make the top 8 newest real images featured
  };
});

// Generate JS output content
const outputContent = `// File ini dihasilkan secara otomatis oleh skrip parse_gallery.cjs
export const galleryItems = ${JSON.stringify(finalItems, null, 2)};
`;

fs.writeFileSync(outputFile, outputContent);
console.log(`Successfully generated gallery data with ${finalItems.length} items (no AI placeholders).`);
