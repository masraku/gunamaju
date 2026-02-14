"use client";
import { formatPrice } from "@/data/products";
import { getCategoryName } from "@/data/categories";
import { getProductWhatsAppLink } from "@/data/company";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
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

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        {(product.rating || product.sold) && (
          <div className="product-meta">
            {product.rating && (
              <span className="product-rating">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 2h3.5l2.24 10.69c.15.71.78 1.22 1.51 1.22h9.72c.73 0 1.36-.51 1.51-1.22L22.5 5H5.21M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
                Beli
              </a>
            )}
            <a
              href={getProductWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-order"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
          background: #42b549;
          color: white;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-tokopedia:hover {
          background: #2e8b37;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(66, 181, 73, 0.3);
        }

        .btn-order {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.625rem 1rem;
          background: #25d366;
          color: white;
          border-radius: 9999px;
          font-size: 0.8125rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-order:hover {
          background: #128c7e;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.3);
        }
      `}</style>
    </div>
  );
}
