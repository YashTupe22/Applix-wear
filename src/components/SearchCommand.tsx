import { useEffect, useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { fetchProducts } from "@/lib/shopify";

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

export function SearchCommand() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Cmd/Ctrl + K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["product-search", debouncedSearch],
    queryFn: () => fetchProducts(10, debouncedSearch),
    enabled: debouncedSearch.length > 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);

    if (!isOpen) {
      setSearch("");
      setDebouncedSearch("");
    }
  };

  const handleSelect = (handle: string) => {
    navigate({
      to: "/product/$handle",
      params: { handle },
    });

    handleClose(false);
  };

  const formatPrice = (
    amount?: string,
    currencyCode?: string
  ) => {
    if (!amount || !currencyCode) return "";

    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
    }).format(Number(amount));
  };

  return (
    <>
      <button
        type="button"
        aria-label="Search products"
        onClick={() => setOpen(true)}
        className="grid w-9 h-9 place-items-center rounded-md text-ink-muted hover:bg-surface-1"
      >
        <Search className="w-[18px] h-[18px]" />
      </button>

      <CommandDialog open={open} onOpenChange={handleClose}>
        <CommandInput
          placeholder="Search for products..."
          value={search}
          onValueChange={setSearch}
        />

        <CommandList>
          {isLoading && (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
            </div>
          )}

          {!isLoading && products.length === 0 && (
            <CommandEmpty>
              {debouncedSearch.length === 0
                ? "Start typing to search products..."
                : "No products found."}
            </CommandEmpty>
          )}

          {products.length > 0 && (
            <CommandGroup heading="Products">
              {products.map(({ node: product }) => {
                const imageUrl =
                  product.images?.edges?.[0]?.node?.url;

                const price =
                  product.priceRange?.minVariantPrice;

                return (
                  <CommandItem
                    key={product.id}
                    value={product.title}
                    onSelect={() =>
                      handleSelect(product.handle)
                    }
                    className="flex items-center gap-3 py-2 cursor-pointer"
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={product.title}
                        loading="lazy"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-sm object-cover bg-surface-1"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-sm bg-surface-1" />
                    )}

                    <div className="flex flex-col min-w-0">
                      <span className="truncate text-sm font-medium text-ink">
                        {product.title}
                      </span>

                      <span className="text-xs text-ink-muted">
                        {formatPrice(
                          price?.amount,
                          price?.currencyCode
                        )}
                      </span>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}

