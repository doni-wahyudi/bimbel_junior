const cleanBaseUrl = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? import.meta.env.BASE_URL || '/'
  : `${import.meta.env.BASE_URL || '/'}/`;

export const blogPosts = [
  {
    id: 'tips-fokus-belajar-anak',
    title: '5 Cara Ampuh Agar Anak Lebih Fokus Belajar di Rumah',
    slug: 'tips-fokus-belajar-anak',
    excerpt: 'Mempertahankan konsentrasi belajar anak di rumah seringkali menjadi tantangan bagi orang tua. Simak 5 strategi praktis berikut ini...',
    content: `
# 5 Cara Ampuh Agar Anak Lebih Fokus Belajar di Rumah

Mempertahankan konsentrasi belajar anak di rumah seringkali menjadi tantangan bagi orang tua, terutama dengan banyaknya distraksi dari gawai dan televisi. Namun, dengan beberapa langkah sederhana, Anda dapat menciptakan lingkungan yang kondusif.

## 1. Ciptakan Area Belajar Khusus
Jangan biarkan anak belajar di tempat tidur atau di depan TV. Sediakan meja belajar khusus yang bebas dari gangguan. Pastikan pencahayaannya baik dan kursi yang digunakan nyaman.

## 2. Tetapkan Jadwal Rutin
Otak anak lebih mudah berkonsentrasi jika mereka memiliki rutinitas. Buatlah jadwal belajar harian yang konsisten, misalnya setiap pukul 16.00 hingga 17.30 setelah mereka beristirahat sepulang sekolah.

## 3. Singkirkan Distraksi Digital
Selama waktu belajar, pastikan gawai dan televisi dimatikan atau dijauhkan. Jika anak memerlukan perangkat untuk belajar online, gunakan aplikasi pengunci (app blocker) untuk mencegah mereka mengakses media sosial atau game.

## 4. Gunakan Teknik Pomodoro
Anak-anak, terutama usia SD, memiliki rentang perhatian yang terbatas. Gunakan teknik Pomodoro: biarkan mereka belajar fokus selama 25 menit, lalu berikan waktu istirahat (jeda) selama 5 menit untuk minum atau meregangkan otot.

## 5. Berikan Nutrisi yang Baik
Asupan makanan yang sehat sangat berpengaruh pada konsentrasi. Berikan camilan sehat seperti buah-buahan atau kacang-kacangan, dan pastikan anak minum cukup air putih saat belajar.

Di **Bimbel Junior**, kami tidak hanya mengajarkan materi akademik, tetapi juga mendampingi siswa untuk membangun kebiasaan belajar yang efektif. Jadilah bagian dari kami dan raih prestasi terbaik!
    `,
    date: '20 Okt 2026',
    author: 'Tim Akademik',
    category: 'Tips Belajar',
    readTime: '4 menit baca',
    image: `${cleanBaseUrl}images/blog_1.jpg`
  },
  {
    id: 'persiapan-snbt-2027',
    title: 'Strategi Sukses Menghadapi SNBT 2027 Sejak Dini',
    slug: 'persiapan-snbt-2027',
    excerpt: 'Persiapan SNBT tidak bisa dilakukan dalam semalam. Berikut panduan lengkap untuk siswa SMA agar siap menghadapi seleksi PTN.',
    content: `
# Strategi Sukses Menghadapi SNBT 2027 Sejak Dini

Seleksi Nasional Berdasarkan Tes (SNBT) merupakan gerbang utama menuju Perguruan Tinggi Negeri (PTN) impian. Persaingan yang ketat menuntut persiapan yang matang sejak kelas 11 atau awal kelas 12.

## Pahami Materi Tes Potensi Skolastik (TPS)
Fokus utama SNBT saat ini adalah Tes Potensi Skolastik yang mencakup:
- Kemampuan Penalaran Umum
- Pengetahuan dan Pemahaman Umum
- Kemampuan Memahami Bacaan dan Menulis
- Pengetahuan Kuantitatif

## Latihan Soal Secara Rutin
Tidak ada cara instan selain memperbanyak latihan soal. Kerjakan soal-soal SNBT dari tahun-tahun sebelumnya untuk membiasakan diri dengan pola dan tingkat kesulitan soal.

## Ikuti Tryout Berkala
Tryout sangat penting untuk mengukur kesiapan mental dan manajemen waktu. Di **Bimbel Junior**, kami menyelenggarakan Tryout SNBT setiap bulan dengan sistem CBT (Computer Based Test) yang menyerupai tes aslinya.

Mari persiapkan masa depan Anda bersama program Intensif SNBT Bimbel Junior!
    `,
    date: '15 Okt 2026',
    author: 'Konsultan Pendidikan',
    category: 'Info Kampus',
    readTime: '3 menit baca',
    image: `${cleanBaseUrl}images/blog_2.jpg`
  },
  {
    id: 'matematika-itu-menyenangkan',
    title: 'Mengubah Stigma: Kenapa Matematika Itu Sebenarnya Menyenangkan?',
    slug: 'matematika-itu-menyenangkan',
    excerpt: 'Banyak siswa yang takut dengan pelajaran Matematika. Padahal, dengan pendekatan yang tepat, Matematika bisa jadi sangat seru!',
    content: `
# Mengubah Stigma: Matematika Itu Menyenangkan

Sebagian besar siswa merasa cemas saat menghadapi pelajaran Matematika. Namun, tahukah Anda bahwa ketakutan ini seringkali berasal dari metode pengajaran yang kurang tepat, bukan dari materinya itu sendiri?

## Matematika adalah Teka-Teki
Anggaplah soal Matematika seperti *games* atau teka-teki yang harus dipecahkan. Ketika Anda berhasil menemukan polanya, ada kepuasan tersendiri yang akan membuat Anda ketagihan.

## Relasikan dengan Kehidupan Nyata
Matematika bukan sekadar angka di atas kertas. Konsep persentase digunakan saat diskon belanja, konsep geometri dipakai saat menyusun tata letak kamar, dan probabilitas digunakan dalam memprediksi cuaca.

Di Bimbel Junior, tutor-tutor kami menggunakan metode pembelajaran *Fun Math* yang membuat siswa memahami konsep dasar dengan cara yang interaktif dan tidak membosankan.
    `,
    date: '02 Okt 2026',
    author: 'Tim Matematika',
    category: 'Mata Pelajaran',
    readTime: '5 menit baca',
    image: `${cleanBaseUrl}images/blog_3.jpg`
  },
  {
    id: 'pentingnya-bahasa-inggris',
    title: 'Pentingnya Mahir Bahasa Inggris di Era Digital',
    slug: 'pentingnya-bahasa-inggris',
    excerpt: 'Bahasa Inggris bukan lagi sekadar nilai rapot, melainkan kunci untuk bersaing di dunia global. Simak tips mahir berbahasa Inggris.',
    content: `
# Pentingnya Mahir Bahasa Inggris di Era Digital

Penguasaan Bahasa Inggris di abad ke-21 bukan lagi sekadar pelengkap, melainkan kebutuhan esensial. Baik untuk meneruskan studi ke luar negeri, maupun untuk mengakses jutaan literatur akademik di internet, Bahasa Inggris adalah kuncinya.

## Belajar dari Kebiasaan Kecil
Mempelajari bahasa baru tidak harus selalu lewat buku tata bahasa yang tebal. Anda bisa mulai dengan:
- Menonton film atau video YouTube tanpa subtitle bahasa Indonesia.
- Mengubah pengaturan bahasa di gawai Anda menjadi Bahasa Inggris.
- Berlatih berbicara sendiri di depan cermin atau merekam suara Anda.

## Kunci Utama: Praktik
Grammar memang penting, tetapi keberanian untuk praktik berbicara jauh lebih penting. Jangan takut salah! Kesalahan adalah bagian alami dari proses belajar bahasa.

Di program Reguler maupun Privat kami, materi Bahasa Inggris diajarkan dengan porsi praktik (conversation) yang seimbang dengan tata bahasa (grammar), agar siswa tidak hanya pintar di atas kertas, namun juga fasih berbicara.
    `,
    date: '28 Sep 2026',
    author: 'Tutor Bahasa Inggris',
    category: 'Mata Pelajaran',
    readTime: '4 menit baca',
    image: `${cleanBaseUrl}images/blog_4.jpg`
  },
  {
    id: 'manajemen-waktu-belajar',
    title: 'Manajemen Waktu Belajar untuk Siswa Sibuk',
    slug: 'manajemen-waktu-belajar',
    excerpt: 'Aktif di OSIS dan ekskul tapi tetap ingin nilai bagus? Ini dia rahasia manajemen waktu dari siswa berprestasi.',
    content: `
# Manajemen Waktu Belajar untuk Siswa Sibuk

Banyak siswa SMA yang kesulitan membagi waktu antara kegiatan ekstrakurikuler, organisasi (seperti OSIS), dan tanggung jawab akademik. Namun, bukan berarti Anda tidak bisa berprestasi di keduanya.

## Prioritas dan Kuadran Waktu
Gunakan matriks prioritas. Pisahkan tugas-tugas Anda menjadi empat kuadran:
1. Penting dan Mendesak (Misal: PR untuk besok)
2. Penting tapi Tidak Mendesak (Misal: Belajar untuk ujian minggu depan)
3. Tidak Penting tapi Mendesak (Misal: Pesan grup WhatsApp)
4. Tidak Penting dan Tidak Mendesak (Misal: Scroll media sosial tanpa tujuan)

Fokuslah menghabiskan lebih banyak waktu di Kuadran 2, agar Kuadran 1 tidak selalu menumpuk.

## Buat Kalender Belajar
Beli atau buat sebuah *study planner*. Visualisasikan semua tenggat waktu Anda. Saat semuanya dicatat, otak Anda akan merasa lebih rileks karena tidak perlu mengingat-ingat semuanya secara bersamaan.

Di Bimbel Junior, jadwal kami sangat fleksibel. Bagi Anda yang super sibuk, kelas Privat bisa menjadi solusi terbaik untuk menyesuaikan waktu belajar dengan jadwal pribadi Anda.
    `,
    date: '10 Sep 2026',
    author: 'Psikolog Pendidikan',
    category: 'Tips Belajar',
    readTime: '5 menit baca',
    image: `${cleanBaseUrl}images/blog_5.jpg`
  },
  {
    id: 'peran-orang-tua',
    title: 'Seberapa Penting Peran Orang Tua dalam Prestasi Anak?',
    slug: 'peran-orang-tua',
    excerpt: 'Prestasi anak tidak hanya ditentukan oleh guru di sekolah. Orang tua memiliki peran yang sangat krusial di rumah.',
    content: `
# Seberapa Penting Peran Orang Tua dalam Prestasi Anak?

Pendidikan adalah kerja sama segitiga antara Sekolah, Siswa, dan Orang Tua. Sehebat apapun guru di kelas, jika anak tidak mendapat dukungan emosional di rumah, prestasinya tidak akan maksimal.

## Jangan Sekadar Menuntut Nilai
Orang tua seringkali hanya melihat hasil akhir berupa angka di rapor. Padahal, proses belajarnya jauh lebih penting. Apresiasi usaha keras mereka, meskipun nilainya belum sempurna. Kata-kata penyemangat seperti "Kamu sudah berusaha keras, Mama bangga" akan sangat memotivasi mereka.

## Jadilah Fasilitator
Fasilitator bukan berarti mengerjakan PR mereka. Jadilah tempat bertanya, atau berikan suasana rumah yang tenang saat mereka belajar. Tunjukkan ketertarikan Anda pada apa yang mereka pelajari di sekolah hari itu.

Bimbel Junior selalu mengirimkan laporan perkembangan siswa secara berkala kepada orang tua, agar orang tua dapat memantau dan memberikan dukungan yang tepat dari rumah.
    `,
    date: '01 Sep 2026',
    author: 'Konsultan Pendidikan',
    category: 'Tips Parenting',
    readTime: '4 menit baca',
    image: `${cleanBaseUrl}images/blog_6.jpg`
  },
  {
    id: 'pentingnya-belajar-kelompok',
    title: 'Pentingnya Belajar Kelompok (Study Group) untuk Meningkatkan Pemahaman Siswa',
    slug: 'pentingnya-belajar-kelompok',
    excerpt: 'Belajar kelompok bukan sekadar ajang mengobrol. Jika dilakukan dengan benar, metode ini sangat efektif untuk menguasai materi sulit.',
    content: `
# Pentingnya Belajar Kelompok (Study Group) untuk Siswa

Belajar secara mandiri memang baik, namun belajar kelompok (study group) menawarkan dimensi pembelajaran yang berbeda. Melalui diskusi, siswa dapat saling melengkapi pemahaman dan memecahkan soal-soal sulit bersama-sama.

## 1. Menjelaskan Materi Melatih Pemahaman
Salah satu cara terbaik untuk memahami suatu konsep adalah dengan menjelaskannya kepada orang lain. Saat seorang siswa menjelaskan materi kepada temannya yang belum paham, otaknya secara aktif menyusun kembali informasi tersebut secara terstruktur, memperkuat ingatannya sendiri.

## 2. Mendapatkan Sudut Pandang Baru
Setiap orang memiliki cara berpikir dan memecahkan masalah yang unik. Dalam belajar kelompok, Anda bisa melihat bagaimana teman Anda menyelesaikan sebuah soal matematika dengan rumus atau logika yang lebih cepat dan kreatif.

## 3. Meningkatkan Motivasi Belajar
Belajar sendirian terkadang membosankan dan memicu kantuk. Belajar bersama teman-teman yang memiliki visi prestasi yang sama akan memicu semangat belajar dan meminimalisir kebiasaan menunda-nunda (prokrastinasi).

Di **Bimbel Junior**, kami menerapkan sistem kelas interaktif interdisipliner di mana siswa didorong untuk aktif berdiskusi dan saling membantu di bawah bimbingan langsung tutor berpengalaman.
    `,
    date: '25 Agt 2026',
    author: 'Tim Akademik',
    category: 'Tips Belajar',
    readTime: '4 menit baca',
    image: `${cleanBaseUrl}images/blog_7.png`
  },
  {
    id: 'menghadapi-ujian-tanpa-stres',
    title: 'Menghadapi Ujian Tanpa Stres: Tips Regulasi Emosi bagi Pelajar',
    slug: 'menghadapi-ujian-tanpa-stres',
    excerpt: 'Ujian sering kali memicu kecemasan yang berlebihan pada siswa. Pelajari langkah-langkah praktis untuk tetap tenang dan fokus.',
    content: `
# Menghadapi Ujian Tanpa Stres: Tips Regulasi Emosi

Kecemasan saat menghadapi ujian adalah hal yang wajar. Namun, kecemasan yang berlebihan (*exam anxiety*) dapat mengganggu konsentrasi dan memicu fenomena "blank" saat membaca soal. Berikut adalah tips agar Anda bisa menghadapi ujian dengan tenang.

## Persiapan yang Matang Adalah Kunci
Sebagian besar kecemasan berasal dari rasa tidak siap. Belajar dengan sistem SKS (Sistem Kebut Semalam) hanya akan meningkatkan kadar hormon stres (kortisol) di otak Anda. Mulailah mencicil belajar setidaknya dua minggu sebelum ujian.

## Latihan Relaksasi dan Pernapasan
Ketika merasa panik di ruang ujian, pejamkan mata sejenak, tarik napas dalam-dalam melalui hidung selama 4 detik, tahan selama 4 detik, lalu hembuskan perlahan melalui mulut selama 4 detik. Latihan ini secara instan menurunkan detak jantung dan mengirimkan sinyal tenang ke sistem saraf pusat Anda.

## Tidur Cukup Sebelum Hari H
Banyak siswa mengorbankan tidur malam sebelum ujian untuk belajar. Ini adalah kesalahan besar. Kurang tidur menurunkan fungsi kognitif, daya ingat jangka pendek, dan kemampuan fokus. Pastikan Anda tidur minimal 7-8 jam sebelum hari ujian.

Program review intensif dan simulasi tryout berkala di **Bimbel Junior** dirancang agar siswa terbiasa dengan iklim ujian asli, meminimalkan rasa cemas, dan meningkatkan kepercayaan diri akademik.
    `,
    date: '18 Agt 2026',
    author: 'Konselor Pendidikan',
    category: 'Tips Belajar',
    readTime: '5 menit baca',
    image: `${cleanBaseUrl}images/blog_8.png`
  }
];
