import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/shipping")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">Help</p>
        <h1 className="display-md text-ink mb-6">Shipping</h1>
        <div className="space-y-4 text-ink-muted text-sm">
          <p>Orders are processed within 1–2 business days.</p>
          <p>Standard domestic shipping arrives in 3–5 business days. Express options are available at checkout.</p>
          <p>International shipping is available to most countries — duties and taxes calculated at checkout.</p>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Shipping — Applix Wear" }] }),
});
