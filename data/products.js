export const products = [
  {
    id: "1",
    name: "Tensimeter Digital Omron HEM-7156",
    category: "alat-diagnostik",
    price: 850000,
    image: "/products/tensimeter.jpg",
    description: "Tensimeter digital akurat dengan teknologi Intellisense untuk pengukuran tekanan darah yang mudah dan cepat.",
    featured: true
  },
  {
    id: "2",
    name: "Stetoskop Littmann Classic III",
    category: "alat-diagnostik",
    price: 2500000,
    image: "/products/stetoskop.jpg",
    description: "Stetoskop profesional kualitas tinggi untuk pemeriksaan jantung dan paru-paru.",
    featured: true
  },
  {
    id: "3",
    name: "Kursi Roda Aluminium Ringan",
    category: "alat-bantu-jalan",
    price: 3200000,
    image: "/products/kursi-roda.jpg",
    description: "Kursi roda ringan dan kokoh dengan rangka aluminium, mudah dilipat untuk mobilitas.",
    featured: true
  },
  {
    id: "4",
    name: "Nebulizer Compressor Omron NE-C28",
    category: "alat-terapi",
    price: 1200000,
    image: "/products/nebulizer.jpg",
    description: "Nebulizer berkualitas untuk terapi inhalasi asma dan gangguan pernapasan.",
    featured: true
  },
  {
    id: "5",
    name: "Pulse Oximeter Fingertip",
    category: "alat-diagnostik",
    price: 350000,
    image: "/products/oximeter.jpg",
    description: "Oximeter portable untuk mengukur kadar oksigen dalam darah dan detak jantung.",
    featured: false
  },
  {
    id: "6",
    name: "Termometer Infrared Non-Contact",
    category: "alat-diagnostik",
    price: 450000,
    image: "/products/termometer.jpg",
    description: "Termometer digital infrared tanpa sentuh, hasil cepat dan akurat.",
    featured: true
  },
  {
    id: "7",
    name: "Tongkat Jalan Lipat Aluminium",
    category: "alat-bantu-jalan",
    price: 180000,
    image: "/products/tongkat.jpg",
    description: "Tongkat jalan ringan yang dapat dilipat, adjustable height.",
    featured: false
  },
  {
    id: "8",
    name: "Walker Rollator 4 Roda",
    category: "alat-bantu-jalan",
    price: 1800000,
    image: "/products/walker.jpg",
    description: "Walker dengan 4 roda, rem tangan, dan tempat duduk untuk istirahat.",
    featured: false
  },
  {
    id: "9",
    name: "Ranjang Rumah Sakit 3 Crank",
    category: "peralatan-rumah-sakit",
    price: 8500000,
    image: "/products/ranjang.jpg",
    description: "Ranjang pasien 3 engkol manual, adjustable tinggi, kepala, dan kaki.",
    featured: true
  },
  {
    id: "10",
    name: "Alat Cek Gula Darah Accu-Chek",
    category: "alat-diagnostik",
    price: 550000,
    image: "/products/glucometer.jpg",
    description: "Glucometer akurat untuk monitoring kadar gula darah harian.",
    featured: false
  },
  {
    id: "11",
    name: "Kasur Dekubitus Anti Luka Baring",
    category: "peralatan-rumah-sakit",
    price: 2800000,
    image: "/products/kasur-dekubitus.jpg",
    description: "Kasur angin anti dekubitus dengan pompa, mencegah luka baring.",
    featured: false
  },
  {
    id: "12",
    name: "Oksigen Konsentrator 5L",
    category: "alat-terapi",
    price: 12000000,
    image: "/products/oxygen-concentrator.jpg",
    description: "Konsentrator oksigen 5 liter per menit untuk terapi oksigen di rumah.",
    featured: true
  }
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export const getProductsByCategory = (categorySlug) => {
  return products.filter(p => p.category === categorySlug);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};
