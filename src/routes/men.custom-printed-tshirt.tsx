import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men/custom-printed-tshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Men"
      title="Custom Printed T-Shirts"
      description="Design your own — pick a base, upload art, preview live."
      shopifyQuery="tag:men AND tag:custom-printed"
    />
  ),
  head: () => ({ meta: [{ title: "Men's Custom Printed T-Shirts — Applix Wear" }] }),
});
