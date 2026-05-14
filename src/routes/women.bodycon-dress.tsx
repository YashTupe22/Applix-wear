import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/bodycon-dress")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Bodycon Dresses"
      shopifyQuery="tag:women AND tag:bodycon-dress"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Bodycon Dresses — Applix Wear" }] }),
});
