import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men/hoodies/bomber")({
  component: () => (
    <CategoryListing
      eyebrow="Men · Hoodies"
      title="Bomber Jackets"
      productType="Men's Bomber Jacket"
    />
  ),
  head: () => ({ meta: [{ title: "Men's Bomber Jackets — Applix Wear" }] }),
});
