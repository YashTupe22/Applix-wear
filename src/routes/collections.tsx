import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/collections")({
  component: () => (
    <CategoryListing
      eyebrow="All Products"
      title="Collections"
      description="The complete Applix Wear catalog — every piece in one place."
    />
  ),
  head: () => ({
    meta: [
      { title: "Collections — Applix Wear" },
      { name: "description", content: "Browse the complete Applix Wear catalog." },
    ],
  }),
});
