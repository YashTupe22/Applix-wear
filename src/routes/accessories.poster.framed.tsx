import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/accessories/poster/framed")({
  component: () => (
    <CategoryListing
      eyebrow="Accessories · Posters"
      title="Framed Posters"
      shopifyQuery="tag:framed-poster"
    />
  ),
  head: () => ({ meta: [{ title: "Framed Posters — Applix Wear" }] }),
});
