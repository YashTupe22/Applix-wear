import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/hoodies")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Hoodies"
      productType="Women's Hoodie"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Hoodies — Applix Wear" }] }),
});
