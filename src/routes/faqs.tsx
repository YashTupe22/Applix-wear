import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const faqs = [
  { q: "How long does shipping take?", a: "Orders ship within 1–2 business days. Domestic delivery typically 3–5 business days." },
  { q: "Do you offer returns?", a: "Yes — unworn items can be returned within 14 days of delivery." },
  { q: "How do I track my order?", a: "You'll receive a tracking link by email as soon as your order ships." },
  { q: "Can I customize a product?", a: "Yes — see our Custom Printed T-Shirt pages to start designing." },
];

export const Route = createFileRoute("/faqs")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">Help</p>
        <h1 className="display-md text-ink mb-8">Frequently Asked Questions</h1>
        <div className="divide-y divide-hairline">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <h3 className="card-title text-ink mb-2">{f.q}</h3>
              <p className="text-ink-muted text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "FAQs — Applix Wear" }] }),
});
