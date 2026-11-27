import Link from "next/link";
import {
  Building2,
  Hospital,
  FlaskConical,
  Pill,
  Factory,
  Briefcase,
  ShieldCheck,
  BadgeCheck,
  Truck,
  MessageCircle,
  ClipboardList,
  FileText,
  PackageCheck,
  Receipt,
  Landmark,
  Search,
} from "lucide-react";
import { company } from "@/data/company";
import { categories } from "@/data/categories";
import QuoteForm from "./QuoteForm";
import FaqSection from "@/components/sections/FaqSection";
import styles from "./page.module.css";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

export const metadata = {
  title: "Pengadaan Alat Kesehatan & APD untuk Instansi dan Perusahaan",
  description: `Supplier alat kesehatan & APD berizin S-IPAK untuk klinik, rumah sakit, pabrik & instansi. Faktur pajak, tempo, e-Katalog, harga grosir, kirim se-Indonesia.`,
  alternates: { canonical: "/pengadaan" },
  openGraph: {
    title: `Pengadaan untuk Instansi & Perusahaan - ${company.name}`,
    description:
      "Supplier alat kesehatan & APD berizin S-IPAK. Faktur pajak, pembayaran tempo, e-Katalog, harga grosir, dan pengiriman ke seluruh Indonesia.",
    url: "/pengadaan",
  },
};

const segments = [
  { icon: Hospital, title: "Rumah Sakit & Klinik", desc: "Brankar, tiang infus, tabung oksigen, oximeter, tensimeter, underpad, surgical gown, benang operasi, dan habis pakai medis." },
  { icon: FlaskConical, title: "Laboratorium", desc: "Tabung vakum darah, lancet, alkohol swab, safety box limbah medis, sarung tangan, dan APD laboratorium." },
  { icon: Pill, title: "Apotek & Toko Alkes", desc: "Stok produk cepat laku: masker, termometer, tensimeter, oximeter, strip tes, dan alat cek gula darah." },
  { icon: Factory, title: "Pabrik & Industri", desc: "Respirator 3M, coverall, safety goggle, sarung tangan kerja, dan perlengkapan industri." },
  { icon: Briefcase, title: "Kantor & Gedung", desc: "Glassboard, whiteboard, termometer, masker, dan perlengkapan kantor lainnya." },
  { icon: Building2, title: "Instansi & Lembaga", desc: "Kebutuhan APD dan alat kesehatan untuk instansi pemerintah maupun swasta." },
];

const reasons = [
  { icon: ShieldCheck, title: "Berizin S-IPAK", desc: "Distributor alat kesehatan dengan izin resmi." },
  { icon: Receipt, title: "Faktur Pajak & Tempo", desc: "Faktur pajak dan pembayaran tempo untuk instansi & perusahaan." },
  { icon: Landmark, title: "Melayani e-Katalog", desc: "Pengadaan instansi pemerintah melalui e-Katalog." },
  { icon: BadgeCheck, title: "Produk Original", desc: "Produk 3M, Sensi, OneMed, Dupont, dan merek resmi lainnya." },
  { icon: Truck, title: "Armada Sendiri", desc: "Antar langsung untuk partai besar ke Jabodetabek, Bandung, Cilegon & Merak. Ekspedisi ke seluruh Indonesia." },
  { icon: Search, title: "Semua By Request", desc: "Barang di luar katalog pun bisa kami carikan — dari alkes hingga kasur medis." },
  { icon: MessageCircle, title: "Respon Cepat", desc: "Penawaran dan konsultasi langsung lewat WhatsApp." },
  { icon: PackageCheck, title: "Satuan atau Grosir", desc: "Beli satuan atau per box, dengan harga khusus untuk grosir." },
];

const steps = [
  { icon: ClipboardList, title: "Kirim daftar kebutuhan", desc: "Isi formulir di bawah atau kirim daftar produk & jumlah via WhatsApp." },
  { icon: FileText, title: "Terima penawaran harga", desc: "Tim kami mengecek stok dan mengirimkan penawaran harga terbaik." },
  { icon: PackageCheck, title: "Konfirmasi & kirim", desc: "Setelah disetujui, pesanan diproses dan dikirim ke alamat Anda." },
];

export default function PengadaanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pengadaan Alat Kesehatan & APD",
    serviceType: "Supplier alat kesehatan dan alat pelindung diri",
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: { "@type": "Country", name: "Indonesia" },
    url: `${baseUrl}/pengadaan`,
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className={styles.header}>
        <div className="container">
          <span className="badge">Untuk Instansi & Perusahaan</span>
          <h1>
            Pengadaan <span className={styles.highlight}>Alat Kesehatan & APD</span>{" "}
            Jadi Lebih Mudah
          </h1>
          <p>
            Satu pemasok untuk kebutuhan medis dan keselamatan kerja klinik,
            rumah sakit, laboratorium, pabrik, hingga kantor Anda. Faktur pajak,
            pembayaran tempo, dan e-Katalog tersedia.
          </p>
          <a href="#penawaran" className="btn btn-primary">
            Minta Penawaran Harga
          </a>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Kami Melayani</h2>
          </div>
          <div className={styles.grid3}>
            {segments.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardIcon}>
                  <Icon size={26} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <div className="section-title">
            <h2>Kenapa Pengadaan di {company.name}?</h2>
          </div>
          <div className={styles.grid4}>
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.reason}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.categoryLinks}>
            <span>Lihat produk per kategori:</span>
            {categories.map((c) => (
              <Link key={c.id} href={`/katalog?kategori=${c.id}`}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="penawaran">
        <div className="container">
          <div className={styles.quoteWrap}>
            <div>
              <h2 className={styles.quoteTitle}>Cara Pemesanan</h2>
              <ol className={styles.steps}>
                {steps.map(({ icon: Icon, title, desc }, i) => (
                  <li key={title}>
                    <div className={styles.stepIcon}>
                      <Icon size={22} />
                      <span>{i + 1}</span>
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.formCard}>
              <h2 className={styles.quoteTitle}>Minta Penawaran Harga</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <FaqSection variant="b2b" id="faq-pengadaan" />
    </div>
  );
}
