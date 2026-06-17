import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men/oversized-tshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Men"
      title="Oversized T-Shirts"
      description="Relaxed, drop-shoulder fits in heavyweight cotton."
      productType="Men's Oversized T-Shirt"
    />
  ),
  head: () => ({
    meta: [
      { title: "Men's Oversized T-Shirts — Applix Wear" },
      { name: "description", content: "Shop men's oversized t-shirts." },
    ],
  }),
});
