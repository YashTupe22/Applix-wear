import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/oversized-tshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Oversized T-Shirts"
      shopifyQuery="tag:women AND tag:oversized-tshirt"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Oversized T-Shirts — Applix Wear" }] }),
});
