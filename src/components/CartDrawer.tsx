import { useState, useEffect } from "react";
import { ShoppingBag, Minus, Plus, Trash2, Loader2, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } =
    useCartStore();

  useEffect(() => {
    if (open) syncCart();
  }, [open, syncCart]);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode ?? "USD";

  const handleCheckout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, "_blank");
      setOpen(false);
    }
  };

  return (
    <>
      <button
        aria-label="Cart"
        onClick={() => setOpen(true)}
        className="relative w-9 h-9 grid place-items-center rounded-md text-ink-muted hover:bg-surface-1"
      >
        <ShoppingBag className="w-[18px] h-[18px]" />
        {totalItems > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold grid place-items-center">
            {totalItems}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside className="w-full sm:w-[420px] bg-canvas h-full flex flex-col shadow-xl">
            <div className="flex items-center justify-between px-6 h-[60px] border-b border-hairline">
              <h2 className="headline">Cart</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close cart"
                className="w-9 h-9 grid place-items-center rounded-md hover:bg-surface-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 grid place-items-center px-6 text-center">
                <div>
                  <ShoppingBag className="w-10 h-10 mx-auto text-ink-tertiary mb-3" />
                  <p className="text-ink-subtle text-sm">Your cart is empty</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
                  {items.map((item) => {
                    const img = item.product.node.images.edges[0]?.node;
                    return (
                      <div key={item.variantId} className="flex gap-4">
                        <div className="w-20 h-24 bg-surface-1 rounded-md overflow-hidden flex-shrink-0">
                          {img && (
                            <img
                              src={img.url}
                              alt={item.product.node.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between gap-2">
                            <h3 className="text-[14px] font-medium text-ink line-clamp-2">
                              {item.product.node.title}
                            </h3>
                            <button
                              onClick={() => removeItem(item.variantId)}
                              aria-label="Remove"
                              className="text-ink-tertiary hover:text-ink"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          {item.selectedOptions.length > 0 && (
                            <p className="text-[12px] text-ink-subtle mt-0.5">
                              {item.selectedOptions.map((o) => o.value).join(" · ")}
                            </p>
                          )}
                          <div className="mt-2 flex items-center justify-between">
                            <div className="inline-flex items-center border border-hairline-strong rounded-md">
                              <button
                                onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                                className="w-7 h-7 grid place-items-center hover:bg-surface-1"
                                aria-label="Decrease"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-7 text-center text-[13px]">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                                className="w-7 h-7 grid place-items-center hover:bg-surface-1"
                                aria-label="Increase"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="text-[14px] font-semibold">
                              {formatPrice(parseFloat(item.price.amount) * item.quantity, item.price.currencyCode)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-hairline px-6 py-5 space-y-4 bg-canvas">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-ink-subtle">Subtotal</span>
                    <span className="price">{formatPrice(totalPrice, currency)}</span>
                  </div>
                  <p className="text-[12px] text-ink-tertiary">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading || isSyncing}
                    className="btn-primary w-full"
                  >
                    {isLoading || isSyncing ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Proceed to Checkout"
                    )}
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
