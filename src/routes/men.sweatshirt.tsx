import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/men/sweatshirt")({
  component: () => (
    <CategoryListing
      eyebrow="Men"
      title="Sweatshirts"
      description="Crewneck sweatshirts in heavyweight loopback cotton."
      productType="Men's Sweatshirt"
    />
  ),
  head: () => ({ meta: [{ title: "Men's Sweatshirts — Applix Wear" }] }),
});
