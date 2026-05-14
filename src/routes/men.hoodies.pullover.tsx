import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men/hoodies/pullover")({
  component: () => (
    <CategoryListing
      eyebrow="Men · Hoodies"
      title="Pullover Hoodies"
      shopifyQuery="tag:men AND tag:pullover-hoodie"
    />
  ),
  head: () => ({ meta: [{ title: "Men's Pullover Hoodies — Applix Wear" }] }),
});
