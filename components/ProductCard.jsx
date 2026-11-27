import Link from "next/link";
import Image from "next/image";
import { getCategoryName } from "@/data/categories";
import { getProductWhatsAppLink } from "@/data/company";
import { ShoppingCart, MessageCircle, Star, Tag } from "lucide-react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, priority = false }) {
  // Use slug if available, fallback to id
  const productLink = `/produk/${product.slug || product.id}`;

  return (
    <article className={styles.productCard}>
      <Link href={productLink} className={styles.productLink}>
        <div className={styles.productImage}>
          {/* next/image serves resized WebP/AVIF instead of the 1–2 MB originals */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 25vw"
            className={styles.productImg}
            priority={priority}
          />
          <span className={styles.productCategory}>
            {getCategoryName(product.category)}
          </span>
        </div>
      </Link>

      <div className={styles.productInfo}>
        <Link href={productLink} className={styles.productTitleLink}>
          <h3 className={styles.productName}>{product.name}</h3>
        </Link>
        <p className={styles.productDesc}>{product.description}</p>
        {(Boolean(product.rating) || Boolean(product.sold)) && (
          <div className={styles.productMeta}>
            {Boolean(product.rating) && (
              <span className={styles.productRating}>
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                {product.rating}
              </span>
            )}
            {Boolean(product.sold) && (
              <span className={styles.productSold}>{product.sold} terjual</span>
            )}
          </div>
        )}

        {/* Promo Banner */}
        <div className={styles.promoBanner}>
          <div className={styles.promoText}>
            <Tag size={14} />
            <span>Harga Lebih Murah Offline!</span>
          </div>
        </div>

        <div className={styles.productFooter}>
          <div className={styles.productActions}>
            {product.shopeeUrl && (
              <a
                href={product.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track="marketplace_click"
                data-track-store="shopee"
                data-track-product={product.name}
                className={styles.btnShopee}
                title="Beli di Shopee"
              >
                <ShoppingCart size={16} />
                Shopee
              </a>
            )}
            {product.tokopediaUrl && (
              <a
                href={product.tokopediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track="marketplace_click"
                data-track-store="tokopedia"
                data-track-product={product.name}
                className={styles.btnTokopedia}
                title="Beli di Tokopedia"
              >
                <ShoppingCart size={16} />
                Tokopedia
              </a>
            )}
            <a
              href={getProductWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="kartu_produk"
              data-track-product={product.name}
              className={styles.btnWhatsapp}
            >
              <MessageCircle size={16} />
              Chat Harga
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
