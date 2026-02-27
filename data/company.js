export const company = {
  name: "Mulia Berkat Alkesindo",
  tagline: "Distributor Alat Kesehatan Terpercaya, Jujur, dan Cepat",
  description: "Mulia Berkat Alkesindo (MBA) adalah distributor alat kesehatan terpercaya yang telah memiliki izin S-IPAK. Kami berkomitmen menyediakan produk berkualitas dengan pelayanan yang jujur, cepat, dan pengiriman ke seluruh Indonesia.",
  
  contact: {
    whatsapp: "+6281319235451",
    phone: "+62 813-1923-5451",
    email: "muliaberkat@gmail.com",
    address: "9, Jl. Inspeksi Kali Sunter No.8, RT.9/RW.4, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
    maps: "https://maps.app.goo.gl/Ff4ZzLsQpknF7WjR9"
  },
  
  social: {
    instagram: "https://www.instagram.com/mulia_berkat_alkes/",
    facebook: "https://www.facebook.com/mulia.b.abadi?locale=id_ID",
    tokopedia: "https://www.tokopedia.com/mulia-berkat-alkesindo",
    tokopedia2: "https://www.tokopedia.com/jossfy"
  },
  
  operationalHours: {
    weekdays: "Senin - Jumat: 08.00 - 17.00 WIB",
    weekend: "Sabtu: 08.00 - 14.00 WIB"
  },
  
  features: [
    {
      icon: "ShieldCheck",
      title: "Terpercaya & Resmi",
      description: "Memiliki izin S-IPAK dan menjamin produk 100% original"
    },
    {
      icon: "Truck",
      title: "Pengiriman Cepat",
      description: "Melayani pengiriman ke seluruh wilayah Indonesia dengan aman"
    },
    {
      icon: "MessageCircle",
      title: "Respon Cepat",
      description: "Tim kami siap melayani konsultasi dan pemesanan dengan ramah"
    },
    {
      icon: "Award",
      title: "Kualitas Terjamin",
      description: "Seluruh produk telah melalui quality control yang ketat"
    }
  ]
};

export const getWhatsAppLink = (message = "") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${company.contact.whatsapp}${message ? `?text=${encodedMessage}` : ''}`;
};

export const getProductWhatsAppLink = (productName) => {
  const message = `Halo, saya tertarik dengan produk: ${productName}. Apakah barang ini tersedia?.`;
  return getWhatsAppLink(message);
};
