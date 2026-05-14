import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/crop-top")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Crop Tops"
      shopifyQuery="tag:women AND tag:crop-top"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Crop Tops — Applix Wear" }] }),
});
