export const categories = [
  {
    id: "alat-diagnostik",
    name: "Alat Diagnostik",
    description: "Tensimeter, stetoskop, termometer, dan alat pemeriksaan lainnya",
    icon: "🩺",
    image: "/categories/diagnostik.jpg"
  },
  {
    id: "alat-terapi",
    name: "Alat Terapi",
    description: "Nebulizer, oksigen konsentrator, dan peralatan terapi",
    icon: "💨",
    image: "/categories/terapi.jpg"
  },
  {
    id: "alat-bantu-jalan",
    name: "Alat Bantu Jalan",
    description: "Kursi roda, tongkat, walker, dan alat mobilitas",
    icon: "🦽",
    image: "/categories/mobilitas.jpg"
  },
  {
    id: "peralatan-rumah-sakit",
    name: "Peralatan Rumah Sakit",
    description: "Ranjang pasien, kasur medis, dan perlengkapan rumah sakit",
    icon: "🏥",
    image: "/categories/hospital.jpg"
  }
];

export const getCategoryById = (id) => {
  return categories.find(c => c.id === id);
};

export const getCategoryName = (id) => {
  const category = getCategoryById(id);
  return category ? category.name : id;
};
