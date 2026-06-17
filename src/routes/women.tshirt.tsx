import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/tshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="T-Shirts"
      productType="Women's T-Shirt"
    />
  ),
  head: () => ({ meta: [{ title: "Women's T-Shirts — Applix Wear" }] }),
});
