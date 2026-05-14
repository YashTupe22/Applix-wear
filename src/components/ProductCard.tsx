import { Link } from "@tanstack/react-router";
import { formatPrice, type ShopifyProduct } from "@/lib/shopify";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const p = product.node;
  const img = p.images.edges[0]?.node;
  const price = p.priceRange.minVariantPrice;
  const isNew = p.tags?.some((t) => t.toLowerCase() === "new");
  const isSale = p.tags?.some((t) => t.toLowerCase() === "sale");

  return (
    <Link
      to="/product/$handle"
      params={{ handle: p.handle }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-lg bg-surface-1 aspect-[4/5]">
        {img ? (
          <img
            src={img.url}
            alt={img.altText ?? p.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-ink-tertiary text-sm">
            No image
          </div>
        )}
        {(isNew || isSale) && (
          <span
            className={`absolute top-3 left-3 text-[11px] font-semibold tracking-wider uppercase px-2 py-1 rounded-sm ${
              isSale ? "bg-badge-sale text-white" : "bg-badge-new text-white"
            }`}
          >
            {isSale ? "Sale" : "New"}
          </span>
        )}
      </div>
      <div className="pt-3 flex items-start justify-between gap-3">
        <h3 className="card-title text-ink line-clamp-1">{p.title}</h3>
        <span className="price text-ink whitespace-nowrap">
          {formatPrice(price.amount, price.currencyCode)}
        </span>
      </div>
    </Link>
  );
}
