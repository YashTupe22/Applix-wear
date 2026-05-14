import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/hoodies")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Hoodies"
      shopifyQuery="tag:women AND tag:hoodie"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Hoodies — Applix Wear" }] }),
});
