import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/bomber-jacket")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Bomber Jackets"
      productType="Women's Bomber Jacket"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Bomber Jackets — Applix Wear" }] }),
});
