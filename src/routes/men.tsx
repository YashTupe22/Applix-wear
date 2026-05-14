import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men")({
  component: () => (
    <CategoryListing
      eyebrow="Men"
      title="Men's Collection"
      description="T-shirts, oversized tees, hoodies, sweatshirts and custom prints — built for everyday wear."
    />
  ),
  head: () => ({
    meta: [
      { title: "Men — Applix Wear" },
      { name: "description", content: "Shop men's t-shirts, hoodies, sweatshirts and more." },
    ],
  }),
});
