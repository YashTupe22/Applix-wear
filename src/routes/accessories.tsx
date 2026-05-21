import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/accessories")({
  component: () => (
    <CategoryListing
      eyebrow="Accessories"
      title="Accessories"
      description="Acrylic, framed and custom posters to finish the room."
      shopifyQuery="tag:poster"
    />
  ),
  head: () => ({
    meta: [
      { title: "Accessories — Applix Wear" },
      { name: "description", content: "Acrylic, framed and custom posters." },
    ],
  }),
});
