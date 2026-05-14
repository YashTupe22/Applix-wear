import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/accessories/poster/acrylic")({
  component: () => (
    <CategoryListing
      eyebrow="Accessories · Posters"
      title="Acrylic Posters"
      shopifyQuery="tag:acrylic-poster"
    />
  ),
  head: () => ({ meta: [{ title: "Acrylic Posters — Applix Wear" }] }),
});
