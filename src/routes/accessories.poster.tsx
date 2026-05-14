import { createFileRoute, Link } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

const subs = [
  { to: "/accessories/poster/acrylic" as const, label: "Acrylic Poster" },
  { to: "/accessories/poster/framed" as const, label: "Framed Poster" },
  { to: "/accessories/poster/custom" as const, label: "Custom Poster" },
];

export const Route = createFileRoute("/accessories/poster")({
  component: () => (
    <div>
      <div className="container-app pt-10 md:pt-14">
        <div className="flex flex-wrap gap-2">
          {subs.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="text-[13px] px-3 py-1.5 rounded-full border border-hairline-strong text-ink-muted hover:bg-surface-1"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
      <CategoryListing
        eyebrow="Accessories"
        title="Posters"
        description="Acrylic, framed and custom posters."
        shopifyQuery="tag:poster"
      />
    </div>
  ),
  head: () => ({ meta: [{ title: "Posters — Applix Wear" }] }),
});
