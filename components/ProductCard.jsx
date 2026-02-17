"use client";
import Link from "next/link";
import { formatPrice } from "@/data/products";
import { getCategoryName } from "@/data/categories";
import { getProductWhatsAppLink } from "@/data/company";
import { ShoppingCart, MessageCircle, Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link href={`/produk/${product.id}`} className="product-link">
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            className="product-img"
            loading="lazy"
          />
          <span className="product-category">
            {getCategoryName(product.category)}
          </span>
        </div>
      </Link>

      <div className="product-info">
        <Link href={`/produk/${product.id}`} className="product-title-link">
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-desc">{product.description}</p>
        {(product.rating || product.sold) && (
          <div className="product-meta">
            {product.rating && (
              <span className="product-rating">
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                {product.rating}
              </span>
            )}
            {product.sold && (
              <span className="product-sold">{product.sold} terjual</span>
            )}
          </div>
        )}
        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <div className="product-actions">
            {product.tokopediaUrl && (
              <a
                href={product.tokopediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tokopedia"
                title="Beli di Tokopedia"
              >
                <ShoppingCart size={16} />
                Beli
              </a>
            )}
            <a
              href={getProductWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-order"
            >
              <MessageCircle size={16} />
              Tanya
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          background: white;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: var(--primary-light);
        }

        .product-link,
        .product-title-link {
          text-decoration: none;
          color: inherit;
        }

        .product-image {
          position: relative;
          aspect-ratio: 1/1;
          background: var(--background-alt);
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.375rem 0.875rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(4px);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .product-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 0.75rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s;
        }

        .product-title-link:hover .product-name {
          color: var(--primary);
        }

        .product-desc {
          font-size: 0.875rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 0.8125rem;
        }

        .product-rating {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--foreground);
          font-weight: 600;
        }

        .product-sold {
          color: var(--muted);
        }

        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-top: auto;
          flex-wrap: wrap;
        }

        .product-price {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--primary);
        }

        .product-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-tokopedia {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.625rem 1rem;
          background: var(--primary); /* Unified Blue */
          color: white;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-tokopedia:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(8, 145, 178, 0.3);
        }

        .btn-order {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.625rem 1rem;
          background: var(--primary); /* Unified Blue */
          color: white;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-order:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(8, 145, 178, 0.3);
        }
      `}</style>
    </div>
  );
}
