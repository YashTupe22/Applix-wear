import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men/hoodies/acid-wash")({
  component: () => (
    <CategoryListing
      eyebrow="Men · Hoodies"
      title="Acid Wash Hoodies"
      shopifyQuery="tag:men AND tag:acid-wash-hoodie"
    />
  ),
  head: () => ({ meta: [{ title: "Men's Acid Wash Hoodies — Applix Wear" }] }),
});
