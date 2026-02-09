export const company = {
  name: "Guna Maju Bersama",
  tagline: "Distributor Alat Kesehatan Terpercaya",
  description: "Guna Maju Bersama adalah perusahaan distributor alat kesehatan yang menyediakan berbagai produk medis berkualitas tinggi dengan harga terjangkau. Kami berkomitmen untuk mendukung kesehatan masyarakat dengan menyediakan alat-alat kesehatan berstandar nasional.",
  
  contact: {
    whatsapp: "6281234567890", // Ganti dengan nomor asli
    phone: "+62 812-3456-7890",
    email: "info@gunamajubersama.com",
    address: "Jl. Kesehatan No. 123, Jakarta Selatan, DKI Jakarta 12345"
  },
  
  social: {
    instagram: "https://instagram.com/gunamajubersama",
    facebook: "https://facebook.com/gunamajubersama"
  },
  
  operationalHours: {
    weekdays: "Senin - Jumat: 08.00 - 17.00 WIB",
    weekend: "Sabtu: 08.00 - 14.00 WIB"
  },
  
  features: [
    {
      icon: "✓",
      title: "Produk Berkualitas",
      description: "Semua produk bergaransi resmi dan berstandar nasional"
    },
    {
      icon: "🚚",
      title: "Pengiriman Cepat",
      description: "Melayani pengiriman ke seluruh Indonesia"
    },
    {
      icon: "💬",
      title: "Konsultasi Gratis",
      description: "Tim ahli siap membantu memilih produk yang tepat"
    },
    {
      icon: "🔧",
      title: "Layanan Service",
      description: "Tersedia layanan perbaikan dan kalibrasi alat"
    }
  ]
};

export const getWhatsAppLink = (message = "") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${company.contact.whatsapp}${message ? `?text=${encodedMessage}` : ''}`;
};

export const getProductWhatsAppLink = (productName) => {
  const message = `Halo, saya tertarik dengan produk: ${productName}. Mohon informasi lebih lanjut.`;
  return getWhatsAppLink(message);
};
