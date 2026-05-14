import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/tshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="T-Shirts"
      shopifyQuery="tag:women AND tag:tshirt"
    />
  ),
  head: () => ({ meta: [{ title: "Women's T-Shirts — Applix Wear" }] }),
});
