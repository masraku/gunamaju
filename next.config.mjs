import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old URLs that may still be linked or indexed elsewhere
  async redirects() {
    return [
      {
        source: "/assets/image/S-IPAK%20PT.%20MULIA%20BERKAT%20ALKESINDO.pdf",
        destination: "/dokumen/izin-s-ipak-mulia-berkat-alkesindo.pdf",
        permanent: true,
      },
      {
        source: "/s-ipak.pdf",
        destination: "/dokumen/izin-s-ipak-mulia-berkat-alkesindo.pdf",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: __dirname,
    resolveAlias: {
      tailwindcss: resolve(__dirname, "node_modules/tailwindcss"),
    },
  },
};

export default nextConfig;
