import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Women's Collection"
      description="T-shirts, crop tops, bombers, dresses and hoodies — modern silhouettes in honest fabrics."
    />
  ),
  head: () => ({
    meta: [
      { title: "Women — Applix Wear" },
      { name: "description", content: "Shop women's t-shirts, crop tops, bombers, dresses and more." },
    ],
  }),
});
