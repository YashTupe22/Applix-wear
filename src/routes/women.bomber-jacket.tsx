import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/bomber-jacket")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Bomber Jackets"
      shopifyQuery="tag:women AND tag:bomber-jacket"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Bomber Jackets — Applix Wear" }] }),
});
