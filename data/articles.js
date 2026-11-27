// Articles / blog posts.
//
// Each article body is a list of blocks:
//   { type: "p", text }                 paragraph
//   { type: "h2", text }                section heading
//   { type: "ul", items: [..] }         bullet list
//   { type: "ol", items: [..] }         numbered list
//   { type: "note", text }              highlighted note box
//   { type: "products", ids: [..] }     product cards (ids from data/products.js)
//
// `datePublished` / `dateModified` use YYYY-MM-DD.

export const articles = [
  {
    slug: "perbedaan-masker-n95-kn95-ffp2",
    title: "Perbedaan Masker N95, KN95, dan FFP2: Panduan Memilih Masker 3M",
    excerpt:
      "N95, KN95, dan FFP2 sama-sama masker respirator, tapi standarnya berbeda. Kenali bedanya dan pilih tipe masker 3M yang sesuai kebutuhan Anda.",
    category: "Panduan APD",
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
    keywords: [
      "perbedaan n95 kn95 ffp2",
      "masker ffp3",
      "masker 3m 8210",
      "masker 3m 9502+",
      "masker aura 9320a+",
      "masker respirator",
    ],
    body: [
      {
        type: "p",
        text: "Saat mencari masker pelindung, Anda pasti sering menemukan istilah N95, KN95, dan FFP2. Ketiganya adalah masker respirator, yaitu masker yang dirancang untuk menyaring partikel halus di udara dan menempel rapat di wajah. Bedanya terletak pada standar sertifikasi yang dipakai di masing-masing negara.",
      },
      { type: "h2", text: "N95: standar Amerika Serikat (NIOSH)" },
      {
        type: "p",
        text: "N95 adalah standar dari NIOSH, lembaga keselamatan kerja Amerika Serikat. Masker N95 harus mampu menyaring minimal 95% partikel uji. Huruf \"N\" berarti tidak tahan minyak (not oil resistant), sedangkan \"R\" (seperti R95) berarti cukup tahan terhadap partikel berminyak.",
      },
      {
        type: "p",
        text: "Contoh masker 3M bersertifikasi NIOSH yang kami jual: 3M 8210 dan 8210V, 3M VFlex 9105, 3M 8511, 3M 8515 untuk pengelasan, serta 3M 8247 (R95).",
      },
      { type: "products", ids: ["4", "5", "6"] },
      { type: "h2", text: "KN95: standar Tiongkok (GB2626)" },
      {
        type: "p",
        text: "KN95 mengikuti standar Tiongkok GB2626 dengan tingkat penyaringan minimal 95%, setara dengan N95 dari sisi efisiensi filter. Masker 3M 9502+ dengan tali kepala (headband) termasuk kategori ini dan banyak dipilih karena nyaman untuk pemakaian sehari-hari.",
      },
      { type: "products", ids: ["2", "82"] },
      { type: "h2", text: "FFP2 dan FFP3: standar Eropa (EN 149)" },
      {
        type: "p",
        text: "FFP2 dan FFP3 adalah kelas dalam standar Eropa EN 149. FFP2 menyaring minimal 94% partikel, sedangkan FFP3 minimal 99% sehingga cocok untuk paparan debu halus dan asap logam yang lebih tinggi. Masker 3M Aura 9320A+ termasuk FFP2, sedangkan 3M Aura 9332+ termasuk FFP3. Keduanya berdesain lipat datar tiga panel sehingga ringkas dibawa dan nyaman saat berbicara.",
      },
      { type: "products", ids: ["1", "68"] },
      { type: "h2", text: "Pakai katup (valve) atau tanpa katup?" },
      {
        type: "ul",
        items: [
          "Masker dengan katup buang (misalnya 3M 8511, 8515, dan 8210V) lebih sejuk dan nyaman dipakai lama, cocok untuk pekerja industri atau area berdebu.",
          "Katup hanya menyaring udara yang masuk, bukan udara yang Anda hembuskan. Untuk lingkungan yang menuntut perlindungan dua arah, seperti ruang tindakan medis steril, pilih masker tanpa katup.",
        ],
      },
      { type: "h2", text: "Tali telinga atau tali kepala?" },
      {
        type: "p",
        text: "Tali kepala (headband) umumnya menghasilkan kerapatan yang lebih baik karena tarikannya merata di belakang kepala, sehingga lebih disarankan untuk pemakaian berjam-jam atau di lingkungan berisiko tinggi. Tali telinga (earloop) lebih praktis untuk dipakai dan dilepas berulang kali.",
      },
      { type: "h2", text: "Ringkasan cara memilih" },
      {
        type: "ul",
        items: [
          "Perlindungan harian dan perjalanan: KN95 3M 9502+ atau Aura 9320A+.",
          "Lingkungan kerja berdebu atau industri: N95 3M 8210, 8210V, atau 8511.",
          "Debu sangat halus dan asap logam tingkat tinggi: FFP3 3M Aura 9332+.",
          "Pengelasan (asap las): 3M 8515.",
          "Fasilitas kesehatan: N95 tanpa katup seperti 3M VFlex 9105 atau 8210.",
        ],
      },
      {
        type: "note",
        text: "Masker bedah 3 ply dan masker duckbill biasa bukan masker respirator. Keduanya cocok untuk perlindungan harian dari percikan, tapi tidak dirancang untuk menyaring partikel halus serapat N95/KN95/FFP2.",
      },
    ],
    relatedProductIds: ["1", "2", "68", "6"],
  },
  {
    slug: "cara-memakai-masker-n95-dengan-benar",
    title: "Cara Memakai Masker N95 dengan Benar dan Melakukan Uji Kerapatan",
    excerpt:
      "Masker N95 hanya bekerja maksimal jika menempel rapat di wajah. Ikuti langkah pemakaian dan uji kerapatan (seal check) sederhana berikut.",
    category: "Panduan APD",
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
    keywords: [
      "cara memakai masker n95",
      "seal check masker",
      "uji kerapatan masker",
      "cara pakai masker 3m",
    ],
    body: [
      {
        type: "p",
        text: "Kemampuan menyaring 95% partikel hanya berlaku jika udara benar-benar melewati filter, bukan bocor lewat celah di pinggir masker. Karena itu, cara memakai sama pentingnya dengan memilih jenis masker.",
      },
      { type: "h2", text: "Langkah memakai masker N95 bertali kepala" },
      {
        type: "ol",
        items: [
          "Cuci tangan terlebih dahulu dengan sabun atau hand sanitizer.",
          "Pegang masker dengan bagian penjepit hidung (logam) di atas, lalu tempelkan ke wajah sehingga menutupi hidung dan dagu.",
          "Tarik tali bawah melewati kepala dan posisikan di belakang leher, di bawah telinga.",
          "Tarik tali atas melewati kepala dan posisikan di bagian atas belakang kepala, di atas telinga.",
          "Tekan penjepit hidung dengan ujung jari kedua tangan, dari tengah ke arah luar, sampai mengikuti bentuk hidung. Jangan menjepit dengan satu tangan saja.",
        ],
      },
      { type: "h2", text: "Uji kerapatan (seal check)" },
      {
        type: "p",
        text: "Lakukan setiap kali memakai masker:",
      },
      {
        type: "ul",
        items: [
          "Masker tanpa katup: tutup permukaan masker dengan kedua tangan lalu hembuskan napas dengan kuat. Jika terasa ada udara keluar di sekitar hidung, tekan ulang penjepit hidung. Jika bocor di pinggir, atur ulang posisi tali.",
          "Masker dengan katup: tutup permukaan masker dengan kedua tangan lalu tarik napas dengan kuat. Masker seharusnya sedikit mengempis ke arah wajah. Jika ada udara masuk dari pinggir, atur ulang posisinya.",
        ],
      },
      {
        type: "note",
        text: "Jenggot, kumis tebal, atau rambut wajah di area tepi masker dapat menghalangi kerapatan. Jika tidak bisa mendapatkan kerapatan yang baik, coba ukuran atau model masker lain.",
      },
      { type: "h2", text: "Kapan harus mengganti masker?" },
      {
        type: "ul",
        items: [
          "Masker rusak, sobek, atau talinya kendur.",
          "Masker kotor, basah, atau terkena cairan.",
          "Napas terasa makin berat saat memakai masker.",
          "Sesuai petunjuk pemakaian dari produsen dan aturan di tempat kerja Anda.",
        ],
      },
      { type: "h2", text: "Cara melepas masker" },
      {
        type: "p",
        text: "Lepaskan dengan memegang tali, mulai dari tali bawah lalu tali atas, tanpa menyentuh bagian depan masker. Buang di tempat sampah tertutup, lalu cuci tangan.",
      },
      { type: "products", ids: ["4", "5", "2"] },
    ],
    relatedProductIds: ["4", "5", "2", "8"],
  },
  {
    slug: "alat-kesehatan-yang-wajib-ada-di-rumah",
    title: "Alat Kesehatan yang Sebaiknya Ada di Rumah",
    excerpt:
      "Termometer, tensimeter, oximeter, alkohol swab, dan masker adalah beberapa alat kesehatan sederhana yang membantu Anda memantau kondisi keluarga di rumah.",
    category: "Tips Kesehatan",
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
    keywords: [
      "alat kesehatan di rumah",
      "tensimeter digital",
      "termometer digital",
      "oximeter",
      "alat kesehatan keluarga",
    ],
    body: [
      {
        type: "p",
        text: "Memiliki beberapa alat kesehatan dasar di rumah membantu Anda memantau kondisi keluarga sehari-hari dan memberikan informasi yang lebih jelas saat berkonsultasi dengan dokter. Berikut daftar yang bisa Anda pertimbangkan.",
      },
      { type: "h2", text: "1. Termometer" },
      {
        type: "p",
        text: "Termometer digital atau termometer infrared (thermogun) adalah alat paling dasar untuk memantau demam. Thermogun mengukur tanpa sentuhan sehingga praktis untuk anak-anak atau pemeriksaan banyak orang, misalnya di kantor dan sekolah.",
      },
      { type: "products", ids: ["86", "102", "93", "29"] },
      { type: "h2", text: "2. Tensimeter digital" },
      {
        type: "p",
        text: "Tensimeter digital membantu memantau tekanan darah secara rutin, terutama bagi anggota keluarga dengan hipertensi atau lansia. Catat hasil pengukuran di waktu yang sama setiap hari agar perkembangannya mudah dibandingkan saat kontrol ke dokter.",
      },
      { type: "products", ids: ["80", "79"] },
      { type: "h2", text: "3. Pulse oximeter" },
      {
        type: "p",
        text: "Pulse oximeter mengukur kadar oksigen dalam darah (SpO2) dan denyut nadi hanya dengan menjepit ujung jari. Alat ini berguna untuk memantau kondisi anggota keluarga yang sedang sakit, terutama yang memiliki gangguan pernapasan. Untuk bayi dan anak, pilih oximeter yang dilengkapi probe ukuran anak.",
      },
      { type: "products", ids: ["91", "71"] },
      { type: "h2", text: "4. Perlengkapan kebersihan dan perawatan" },
      {
        type: "ul",
        items: [
          "Alkohol swab untuk membersihkan kulit sebelum cek darah atau injeksi.",
          "Sarung tangan sekali pakai saat merawat anggota keluarga yang sakit.",
          "Underpad untuk perawatan lansia atau pasien di tempat tidur.",
        ],
      },
      { type: "products", ids: ["100", "67", "33"] },
      { type: "h2", text: "5. Masker" },
      {
        type: "p",
        text: "Simpan masker medis 3 ply untuk pemakaian harian (termasuk ukuran anak) dan beberapa masker KN95 atau N95 untuk kondisi udara buruk atau saat merawat anggota keluarga yang sakit.",
      },
      { type: "products", ids: ["62", "82"] },
      {
        type: "note",
        text: "Alat ukur di rumah membantu pemantauan, tetapi tidak menggantikan pemeriksaan dan diagnosis dokter. Konsultasikan hasil pengukuran yang tidak normal dengan tenaga kesehatan.",
      },
    ],
    relatedProductIds: ["80", "86", "91", "100"],
  },
];

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);

export const formatArticleDate = (date) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
