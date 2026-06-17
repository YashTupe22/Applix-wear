import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/bodycon-dress")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Bodycon Dresses"
      productType="Women's Bodycon Dress"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Bodycon Dresses — Applix Wear" }] }),
});
