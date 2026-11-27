import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Info, MessageCircle } from "lucide-react";
import {
  articles,
  getArticleBySlug,
  formatArticleDate,
} from "@/data/articles";
import { productsWithSlugs } from "@/data/products";
import { company, getWhatsAppLink } from "@/data/company";
import ProductCard from "@/components/ProductCard";
import styles from "../artikel.module.css";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://muliaberkatalkes.com";

const findProducts = (ids = []) =>
  ids.map((id) => productsWithSlugs.find((p) => p.id === id)).filter(Boolean);

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `/artikel/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/artikel/${slug}`,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
  };
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "note":
      return (
        <aside className={styles.note}>
          <Info size={20} />
          <p>{block.text}</p>
        </aside>
      );
    case "products":
      return (
        <div className={styles.inlineProducts}>
          {findProducts(block.ids).map((p) => (
            <Link key={p.id} href={`/produk/${p.slug}`} className={styles.miniProduct}>
              <Image src={p.image} alt={p.name} width={64} height={64} />
              <span>{p.name}</span>
              <ChevronRight size={16} />
            </Link>
          ))}
        </div>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = findProducts(article.relatedProductIds);
  const url = `${baseUrl}/artikel/${article.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      inLanguage: "id-ID",
      mainEntityOfPage: url,
      image: [`${baseUrl}/opengraph-image`],
      author: { "@type": "Organization", name: company.name, url: baseUrl },
      publisher: { "@id": `${baseUrl}/#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Artikel", item: `${baseUrl}/artikel` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/">Beranda</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/artikel">Artikel</Link>
        </nav>

        <article className={styles.article}>
          <header>
            <span className={styles.meta}>
              {article.category} · {formatArticleDate(article.datePublished)}
            </span>
            <h1>{article.title}</h1>
            <p className={styles.lead}>{article.excerpt}</p>
          </header>

          <div className={styles.body}>
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className={styles.cta}>
            <div>
              <h2>Butuh bantuan memilih produk?</h2>
              <p>
                Konsultasi gratis dengan tim {company.name}. Harga offline lebih
                murah dibanding marketplace.
              </p>
            </div>
            <a
              href={getWhatsAppLink(
                `Halo, saya baru membaca artikel "${article.title}" dan ingin bertanya.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="artikel"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              Tanya via WhatsApp
            </a>
          </div>
        </article>

        {related.length > 0 && (
          <section className={styles.related} aria-labelledby="related-heading">
            <h2 id="related-heading">Produk Terkait</h2>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        <Link href="/artikel" className={styles.back}>
          <ArrowLeft size={18} /> Semua artikel
        </Link>
      </div>
    </div>
  );
}
