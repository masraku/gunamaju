export const company = {
  name: "Mulia Berkat Alkesindo",
  tagline: "Distributor Alat Kesehatan Terpercaya, Jujur, dan Cepat",
  description: "Mulia Berkat Alkesindo (MBA) adalah toko dan distributor alat kesehatan terlengkap dan terpercaya di Kelapa Gading, Jakarta Utara yang telah memiliki izin S-IPAK. Kami berkomitmen menyediakan produk medis berkualitas dengan pelayanan jujur, cepat, dan pengiriman ke seluruh Indonesia.",
  
  contact: {
    whatsapp: "+6281319235451",
    phone: "+62 813-1923-5451",
    email: "muliaberkat2@gmail.com",
    address: "9, Jl. Inspeksi Kali Sunter No.8, RT.9/RW.4, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240",
    maps: "https://maps.app.goo.gl/Ff4ZzLsQpknF7WjR9"
  },
  
  social: {
    instagram: "https://www.instagram.com/mulia_berkat_alkes/",
    facebook: "https://www.facebook.com/mulia.b.abadi?locale=id_ID",
    tokopedia: "https://www.tokopedia.com/mulia-berkat-alkesindo",
    tokopedia2: "https://www.tokopedia.com/jossfy",
    // Shopee: belum ditayangkan. Hapus "//" di depan baris setelah link-nya benar.
    // shopee: "https://shopee.co.id/muliaberkatalkesindo",
    // shopee2: "https://shopee.co.id/muliaberkatalkesindo2",
  },
  
  // Official S-IPAK licence (PDF in /public/dokumen)
  sipakPdf: "/dokumen/izin-s-ipak-mulia-berkat-alkesindo.pdf",

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

// Marketplace stores. Entries whose URL is commented out / empty in `social`
// are skipped automatically so no button ever links to "undefined".
export const marketplaces = [
  { key: "tokopedia", label: "Tokopedia MBA", url: company.social.tokopedia, type: "tokopedia" },
  { key: "tokopedia2", label: "Tokopedia Joss Safety", url: company.social.tokopedia2, type: "tokopedia" },
  { key: "shopee", label: "Shopee MBA", url: company.social.shopee, type: "shopee" },
  { key: "shopee2", label: "Shopee MBA 2", url: company.social.shopee2, type: "shopee" },
].filter((m) => Boolean(m.url));

export const getWhatsAppLink = (message = "") => {
  const encodedMessage = encodeURIComponent(message);
  // wa.me expects digits only (no "+", spaces or dashes)
  const number = company.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}${message ? `?text=${encodedMessage}` : ''}`;
};

export const getProductWhatsAppLink = (productName) => {
  const message = `Halo, saya tertarik dengan produk: ${productName}. Apakah barang ini tersedia?.`;
  return getWhatsAppLink(message);
};
