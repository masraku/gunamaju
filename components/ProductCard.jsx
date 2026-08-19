"use client";
import Link from "next/link";
import { getCategoryName } from "@/data/categories";
import { getProductWhatsAppLink } from "@/data/company";
import { ShoppingCart, MessageCircle, Star, Tag } from "lucide-react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  // Use slug if available, fallback to id
  const productLink = `/produk/${product.slug || product.id}`;

  return (
    <div className={styles.productCard}>
      <Link href={productLink} className={styles.productLink}>
        <div className={styles.productImage}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImg}
            loading="lazy"
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
        {(product.rating || product.sold) && (
          <div className={styles.productMeta}>
            {product.rating && (
              <span className={styles.productRating}>
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                {product.rating}
              </span>
            )}
            {product.sold && (
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
            {product.tokopediaUrl && (
              <a
                href={product.tokopediaUrl}
                target="_blank"
                rel="noopener noreferrer"
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
              className={styles.btnWhatsapp}
            >
              <MessageCircle size={16} />
              Chat Harga
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
