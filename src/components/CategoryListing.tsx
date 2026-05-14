import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { SiteLayout } from "@/components/SiteLayout";
import { fetchProducts } from "@/lib/shopify";

interface CategoryListProps {
  eyebrow: string;
  title: string;
  description?: string;
  shopifyQuery?: string;
}

export function CategoryListing({ eyebrow, title, description, shopifyQuery }: CategoryListProps) {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", "category", shopifyQuery ?? "all"],
    queryFn: () => fetchProducts(50, shopifyQuery),
  });

  return (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14">
        <nav className="text-[13px] text-ink-subtle mb-6">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{title}</span>
        </nav>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="display-md text-ink">{title}</h1>
        {description && (
          <p className="mt-3 text-ink-muted max-w-2xl">{description}</p>
        )}

        <div className="mt-10">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/5] rounded-lg bg-surface-1 animate-pulse" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="rounded-xl border border-dashed border-hairline-strong bg-surface-1 p-12 text-center">
              <p className="card-title mb-2">No products found</p>
              <p className="text-ink-subtle text-sm">
                We don't have anything to show here yet. Tell the chat what to add.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((p) => (
                <ProductCard key={p.node.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}
