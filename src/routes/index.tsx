import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/shopify";
import catMen from "@/assets/cat-men.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catAcc from "@/assets/cat-accessories.jpg";
import catColl from "@/assets/cat-collections.jpg";
import bannerCustom from "@/assets/banner-custom.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Applix Wear — Modern Apparel" },
      { name: "description", content: "Minimal, product-first apparel. Shop new arrivals from Applix Wear." },
    ],
  }),
});

const categories = [
  { to: "/men" as const, label: "Men", image: catMen },
  { to: "/women" as const, label: "Women", image: catWomen },
  { to: "/accessories" as const, label: "Accessories", image: catAcc },
  { to: "/collections" as const, label: "Collections", image: catColl },
];

function HomePage() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", "home"],
    queryFn: () => fetchProducts(8),
  });

  return (
    <SiteLayout>
      {/* Hero */}
      <Hero />

      {/* Categories */}
      <section className="container-app mt-20 md:mt-[80px]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eyebrow mb-3">Shop by</p>
            <h2 className="display-md">Categories</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative block overflow-hidden rounded-xl bg-surface-1"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={c.image}
                alt={c.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white card-title font-medium">
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="container-app mt-20 md:mt-[80px]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eyebrow mb-3">Best Sellers</p>
            <h2 className="display-md">Loved by customers</h2>
          </div>
          <Link to="/collections" className="btn-ghost hidden sm:inline-flex">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] rounded-lg bg-surface-1 animate-pulse" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <EmptyProducts />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.node.id} product={p} />
            ))}
          </div>
        )}
      </section>

      {/* Custom Print Banner */}
      <section className="container-app mt-20 md:mt-[80px]">
        <div className="rounded-xl bg-surface-1 border border-hairline overflow-hidden grid md:grid-cols-2">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <p className="eyebrow mb-3">Made by you</p>
            <h2 className="display-md mb-4">Design your own custom printed tee.</h2>
            <p className="text-ink-muted max-w-md mb-6">
              Pick a base, upload your art or text, preview live, and we'll print
              it on premium cotton.
            </p>
            <div>
              <Link to="/collections" className="btn-primary">
                Start Designing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] md:aspect-auto">
            <img
              src={bannerCustom}
              alt="Custom printed t-shirt"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function EmptyProducts() {
  return (
    <div className="rounded-xl border border-dashed border-hairline-strong bg-surface-1 p-12 text-center">
      <p className="card-title mb-2">No products found</p>
      <p className="text-ink-subtle text-sm">
        Tell the chat what you'd like to add (product name and price), and we'll
        publish it to your store.
      </p>
    </div>
  );
}
