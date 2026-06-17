import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Loader2, Heart, Truck, RotateCcw } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { fetchProductByHandle, formatPrice } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

export const Route = createFileRoute("/product/$handle")({
  component: ProductPage,
});

type ProductVariant = {
  id: string;
  title: string;
  price: { amount: string; currencyCode: string };
  availableForSale: boolean;
  image?: { url: string; altText: string | null } | null;
  selectedOptions: Array<{ name: string; value: string }>;
};

type ProductOption = { name: string; values: string[] };

function ProductPage() {
  const { handle } = useParams({ from: "/product/$handle" });
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", handle],
    queryFn: () => fetchProductByHandle(handle),
  });

  const [activeImage, setActiveImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const addItem = useCartStore((s) => s.addItem);
  const isLoadingCart = useCartStore((s) => s.isLoading);

  const variants = useMemo<ProductVariant[]>(
    () => product?.variants?.edges?.map((e: { node: ProductVariant }) => e.node) ?? [],
    [product]
  );

  useEffect(() => {
    const firstVariant = variants[0];
    if (!firstVariant || Object.keys(selectedOptions).length > 0) return;
    setSelectedOptions(
      Object.fromEntries(firstVariant.selectedOptions.map((option) => [option.name, option.value]))
    );
  }, [selectedOptions, variants]);

  const matchedVariant = useMemo(() => {
    if (!product) return null;
    return (
      variants.find((variant) =>
        variant.selectedOptions.every((option) => selectedOptions[option.name] === option.value)
      ) ?? null
    );
  }, [product, variants, selectedOptions]);

  const productOptions = useMemo<ProductOption[]>(() => {
    if (!product) return [];

    const options = new Map<string, Set<string>>();
    for (const option of product.options ?? []) {
      if (!options.has(option.name)) options.set(option.name, new Set());
      option.values.forEach((value) => options.get(option.name)?.add(value));
    }

    for (const variant of variants) {
      for (const option of variant.selectedOptions ?? []) {
        if (!options.has(option.name)) options.set(option.name, new Set());
        options.get(option.name)?.add(option.value);
      }
    }

    return Array.from(options, ([name, values]) => ({
      name,
      values: Array.from(values).filter(Boolean),
    })).filter(
      (option) =>
        option.name.toLowerCase() !== "title" ||
        option.values.some((value) => value.toLowerCase() !== "default title")
    );
  }, [product, variants]);

  const images: Array<{ url: string; altText: string | null }> = useMemo(
    () => product?.images.edges.map((e: { node: { url: string; altText: string | null } }) => e.node) ?? [],
    [product]
  );

  useEffect(() => {
    const variantImageUrl = matchedVariant?.image?.url;
    if (!variantImageUrl) return;
    const imageIndex = images.findIndex((image) => image.url === variantImageUrl);
    if (imageIndex >= 0) setActiveImage(imageIndex);
  }, [images, matchedVariant]);

  if (isLoading) {
    return (
      <SiteLayout>
        <div className="container-app py-20 grid place-items-center">
          <Loader2 className="w-6 h-6 animate-spin text-ink-tertiary" />
        </div>
      </SiteLayout>
    );
  }

  if (!product) {
    return (
      <SiteLayout>
        <div className="container-app py-20 text-center">
          <h1 className="display-md mb-3">Product not found</h1>
          <Link to="/collections" className="btn-primary">Browse collections</Link>
        </div>
      </SiteLayout>
    );
  }

  const handleAdd = async () => {
    if (!matchedVariant) return;
    await addItem({
      product: { node: product },
      variantId: matchedVariant.id,
      variantTitle: matchedVariant.title,
      price: matchedVariant.price,
      quantity: 1,
      selectedOptions: matchedVariant.selectedOptions ?? [],
      image: matchedVariant.image ?? images[activeImage] ?? null,
    });
  };

  const handleOptionSelect = (optionName: string, value: string) => {
    const nextOptions = { ...selectedOptions, [optionName]: value };
    const nextVariant =
      variants.find((variant) =>
        variant.selectedOptions.every((option) => nextOptions[option.name] === option.value)
      ) ??
      variants.find((variant) =>
        variant.selectedOptions.every(
          (option) => nextOptions[option.name] === undefined || nextOptions[option.name] === option.value
        )
      );

    setSelectedOptions(
      nextVariant
        ? Object.fromEntries(nextVariant.selectedOptions.map((option) => [option.name, option.value]))
        : nextOptions
    );
  };

  return (
    <SiteLayout>
      <div className="container-app pt-8 md:pt-12">
        <nav className="text-[13px] text-ink-subtle mb-6">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collections" className="hover:text-ink">Collections</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.title}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-surface-1 rounded-xl overflow-hidden">
              {images[activeImage] && (
                <img
                  src={images[activeImage].url}
                  alt={images[activeImage].altText ?? product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-5 gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square rounded-md overflow-hidden border ${
                      i === activeImage ? "border-ink" : "border-hairline"
                    }`}
                  >
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {product.productType && (
              <p className="eyebrow mb-3">{product.productType}</p>
            )}
            <h1 className="headline text-ink">{product.title}</h1>
            <p className="price mt-3">
              {formatPrice(
                matchedVariant?.price.amount ?? product.priceRange.minVariantPrice.amount,
                matchedVariant?.price.currencyCode ?? product.priceRange.minVariantPrice.currencyCode
              )}
            </p>

            {/* Options */}
            {productOptions.map((opt) => (
                <div key={opt.name} className="mt-6">
                  <p className="text-[13px] font-medium text-ink-muted mb-2">{opt.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {opt.values.map((value) => {
                      const selected =
                        (selectedOptions[opt.name] ?? matchedVariant?.selectedOptions?.find(
                          (o: { name: string }) => o.name === opt.name
                        )?.value) === value;
                      return (
                        <button
                          key={value}
                          onClick={() => handleOptionSelect(opt.name, value)}
                          className={`px-4 py-2 rounded-sm border text-[13px] font-medium transition-colors ${
                            selected
                              ? "bg-ink text-canvas border-ink"
                              : "bg-canvas text-ink border-hairline-strong hover:bg-surface-1"
                          }`}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAdd}
                disabled={!matchedVariant || isLoadingCart || !matchedVariant?.availableForSale}
                className="btn-primary flex-1"
              >
                {isLoadingCart ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : matchedVariant?.availableForSale === false ? (
                  "Out of stock"
                ) : (
                  "Add to Cart"
                )}
              </button>
              <button className="btn-secondary" aria-label="Save">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {product.description && (
              <p className="mt-8 text-ink-muted leading-relaxed text-[15px]">
                {product.description}
              </p>
            )}

            <div className="mt-10 border-t border-hairline pt-6 space-y-3 text-[13px] text-ink-subtle">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4" /> Free shipping on orders over $75.
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-4 h-4" /> 30-day easy returns.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
