import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/women/custom-printed-tshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Women"
      title="Custom Printed T-Shirts"
      description="Design your own — pick a base, upload art, preview live."
      shopifyQuery="tag:women AND tag:custom-printed"
    />
  ),
  head: () => ({ meta: [{ title: "Women's Custom Printed T-Shirts — Applix Wear" }] }),
});
