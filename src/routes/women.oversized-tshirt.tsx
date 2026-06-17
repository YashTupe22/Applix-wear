import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/oversized-tshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Oversized T-Shirts"
      productType="Women's Oversized T-Shirt"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Oversized T-Shirts — Applix Wear" }] }),
});
