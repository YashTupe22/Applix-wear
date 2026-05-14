import { createFileRoute } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

export const Route = createFileRoute("/accessories/poster/custom")({
  component: () => (
    <CategoryListing
      eyebrow="Accessories · Posters"
      title="Custom Posters"
      description="Upload your own art — we print, frame and ship."
      shopifyQuery="tag:custom-poster"
    />
  ),
  head: () => ({ meta: [{ title: "Custom Posters — Applix Wear" }] }),
});
