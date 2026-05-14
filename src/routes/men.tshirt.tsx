import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men/tshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Men"
      title="T-Shirts"
      description="Everyday tees in soft, breathable cotton."
      shopifyQuery="tag:men AND tag:tshirt"
    />
  ),
  head: () => ({
    meta: [
      { title: "Men's T-Shirts — Applix Wear" },
      { name: "description", content: "Shop men's t-shirts in premium cotton." },
    ],
  }),
});
