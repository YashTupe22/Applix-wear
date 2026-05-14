import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/our-story")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">About</p>
        <h1 className="display-md text-ink mb-6">Our Story</h1>
        <div className="space-y-4 text-ink-muted">
          <p>Applix Wear is a modern apparel brand built on one idea: clothes should feel honest.</p>
          <p>We work with considered fabrics, refined cuts, and a single accent color that lets the product speak for itself.</p>
          <p>Everything we make is designed to be worn often and last long.</p>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Our Story — Applix Wear" }] }),
});
