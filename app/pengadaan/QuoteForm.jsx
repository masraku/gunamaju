"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { getWhatsAppLink } from "@/data/company";
import styles from "./page.module.css";

const initial = { nama: "", instansi: "", kota: "", kebutuhan: "" };

// Builds a structured WhatsApp message. Nothing is stored on the website.
export default function QuoteForm() {
  const [form, setForm] = useState(initial);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const message = [
    "Halo Mulia Berkat Alkesindo, saya ingin meminta penawaran harga.",
    "",
    `Nama: ${form.nama}`,
    `Instansi/Perusahaan: ${form.instansi}`,
    `Kota pengiriman: ${form.kota}`,
    "",
    "Daftar kebutuhan:",
    form.kebutuhan,
  ].join("\n");

  const canSubmit = form.nama.trim() && form.kebutuhan.trim();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formRow}>
        <label className={styles.field}>
          <span>Nama *</span>
          <input
            type="text"
            value={form.nama}
            onChange={update("nama")}
            autoComplete="name"
            required
          />
        </label>
        <label className={styles.field}>
          <span>Instansi / Perusahaan</span>
          <input
            type="text"
            value={form.instansi}
            onChange={update("instansi")}
            autoComplete="organization"
            placeholder="Contoh: Klinik Sehat, PT Maju Jaya"
          />
        </label>
      </div>
      <label className={styles.field}>
        <span>Kota pengiriman</span>
        <input
          type="text"
          value={form.kota}
          onChange={update("kota")}
          autoComplete="address-level2"
          placeholder="Contoh: Jakarta Utara"
        />
      </label>
      <label className={styles.field}>
        <span>Daftar produk & jumlah *</span>
        <textarea
          rows={5}
          value={form.kebutuhan}
          onChange={update("kebutuhan")}
          required
          placeholder={"Contoh:\n- Masker 3M 8210 – 10 box\n- Sarung tangan latex Sensi – 20 box"}
        />
      </label>
      {/* data-track-location is read by ClickTracker for analytics */}
      <button
        type="submit"
        className={`btn btn-whatsapp ${styles.submit}`}
        disabled={!canSubmit}
        onClick={() => {
          if (canSubmit) {
            import("@vercel/analytics").then(({ track }) =>
              track("whatsapp_click", { page: "/pengadaan", location: "form_penawaran" }),
            );
          }
        }}
      >
        <Send size={18} />
        Kirim Permintaan via WhatsApp
      </button>
      <p className={styles.formNote}>
        Formulir ini membuka WhatsApp dengan pesan yang sudah terisi. Data Anda
        tidak disimpan di situs ini.
      </p>
    </form>
  );
}
