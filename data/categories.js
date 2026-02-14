export const categories = [
  {
    id: "apd",
    name: "APD",
    description: "Masker, sarung tangan, dan alat pelindung diri lainnya",
    icon: "🧤",
    image: "/categories/apd.jpg"
  },
  {
    id: "alkes",
    name: "Alat Kesehatan",
    description: "Thermometer, suction pump, underpad, dan peralatan medis",
    icon: "🩺",
    image: "/categories/alkes.jpg"
  },
  {
    id: "perlengkapan-industri",
    name: "Perlengkapan Industri",
    description: "Kabel, batu gerinda, plastigauge, dan perlengkapan industri lainnya",
    icon: "🏭",
    image: "/categories/industri.jpg"
  },
  {
    id: "perlengkapan-kantor",
    name: "Perlengkapan Kantor",
    description: "Glassboard, whiteboard, dan perlengkapan kantor lainnya",
    icon: "🏢",
    image: "/categories/kantor.jpg"
  },
  {
    id: "perlengkapan-lainnya",
    name: "Perlengkapan Lainnya",
    description: "Baju cold storage, kaos kaki PDL, dan perlengkapan lainnya",
    icon: "📦",
    image: "/categories/lainnya.jpg"
  }
];

export const getCategoryById = (id) => {
  return categories.find(c => c.id === id);
};

export const getCategoryName = (id) => {
  const category = getCategoryById(id);
  return category ? category.name : id;
};
