# Mulia Berkat Alkesindo — Website

Situs toko & distributor alat kesehatan **Mulia Berkat Alkesindo (MBA)**, Kelapa Gading, Jakarta Utara.
Dibangun dengan Next.js (App Router), CSS Modules + Tailwind CSS v4, dan di-deploy di Vercel.

## Menjalankan secara lokal

```bash
bun install
bun dev          # http://localhost:3000
bun run build    # build produksi
bun run lint
```

Variabel lingkungan (opsional, `.env.local`):

| Nama | Keterangan |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | URL situs untuk canonical, sitemap, dan structured data. Default `https://muliaberkatalkes.com` |

## Mengubah konten

Hampir semua konten ada di folder `data/`, jadi tidak perlu mengubah komponen:

| File | Isi |
|---|---|
| `data/company.js` | Nama, kontak, jam buka, link media sosial & marketplace, file S-IPAK |
| `data/products.js` | Daftar produk. `tokopediaUrl` / `shopeeUrl` opsional — kosongkan untuk menyembunyikan tombolnya. Harga **tidak** ditampilkan di situs |
| `data/categories.js` | Kategori produk |
| `data/articles.js` | Artikel di `/artikel` (format blok dijelaskan di atas file) |
| `data/testimonials.js` | Ulasan asli dari Tokopedia/Shopee. Bagian testimoni di beranda tersembunyi selama daftar kosong |

Gambar produk ada di `public/products/`, dokumen di `public/dokumen/`.

## Halaman

| URL | Keterangan |
|---|---|
| `/` | Beranda |
| `/katalog` (`?kategori=…`) | Katalog dengan filter kategori & pencarian |
| `/produk/[slug]` | Detail produk |
| `/pengadaan` | Pengadaan untuk instansi/perusahaan + formulir penawaran via WhatsApp |
| `/artikel`, `/artikel/[slug]` | Artikel & panduan |

## SEO & analitik

- `app/sitemap.js`, `app/robots.js`, `app/opengraph-image.jsx` dibuat otomatis oleh Next.js.
- Structured data (JSON-LD): bisnis lokal di `app/layout.js`, produk + breadcrumb di halaman produk, artikel di halaman artikel.
- `components/ClickTracker.jsx` mengirim event Vercel Analytics `whatsapp_click` dan `marketplace_click`
  (lihat di dashboard Vercel → Analytics → Events; fitur custom events memerlukan paket Vercel Pro).
