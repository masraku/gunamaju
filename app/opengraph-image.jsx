import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/data/company";

// Preview image shown when the site is shared on WhatsApp, Facebook, X, etc.
// Product pages override this with their own product photo.
export const alt = `${company.name} - Toko & Distributor Alat Kesehatan Kelapa Gading`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/assets/image/favicon.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0e7490 0%, #0891b2 55%, #22d3ee 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              display: "flex",
              background: "white",
              borderRadius: 28,
              padding: 12,
            }}
          >
            <img src={logoSrc} width={112} height={112} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 52, fontWeight: 800 }}>{company.name}</div>
            <div style={{ fontSize: 28, opacity: 0.9 }}>
              Kelapa Gading, Jakarta Utara
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
            Toko & Distributor Alat Kesehatan Terpercaya
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 28 }}>
            {["Berizin S-IPAK", "100% Original", "Kirim se-Indonesia"].map(
              (t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    padding: "10px 22px",
                    borderRadius: 9999,
                    background: "rgba(255,255,255,0.18)",
                    border: "2px solid rgba(255,255,255,0.4)",
                  }}
                >
                  {t}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
