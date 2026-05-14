import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/returns")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">Help</p>
        <h1 className="display-md text-ink mb-6">Returns</h1>
        <div className="space-y-4 text-ink-muted text-sm">
          <p>Unworn, unwashed items can be returned within 14 days of delivery for a full refund.</p>
          <p>Custom printed items are final sale.</p>
          <p>To start a return, email <span className="text-ink">support@applixwear.com</span> with your order number.</p>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Returns — Applix Wear" }] }),
});
