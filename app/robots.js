const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Do NOT disallow /_next/: Googlebot needs the CSS, JS and optimized
        // images served from there to render pages and index product photos.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
