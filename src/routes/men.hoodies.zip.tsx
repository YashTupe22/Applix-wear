import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men/hoodies/zip")({
  component: () => (
    <CategoryListing
      eyebrow="Men · Hoodies"
      title="Zip Hoodies"
      shopifyQuery="tag:men AND tag:zip-hoodie"
    />
  ),
  head: () => ({ meta: [{ title: "Men's Zip Hoodies — Applix Wear" }] }),
});
