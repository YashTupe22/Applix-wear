import { createFileRoute, Link } from "@tanstack/react-router";
import { CategoryListing } from "@/components/CategoryListing";

const subs = [
  { to: "/men/hoodies/zip" as const, label: "Zip Hoodie" },
  { to: "/men/hoodies/pullover" as const, label: "Pullover Hoodie" },
  { to: "/men/hoodies/acid-wash" as const, label: "Acid Wash Hoodie" },
  { to: "/men/hoodies/bomber" as const, label: "Bomber Jacket" },
];

export const Route = createFileRoute("/men/hoodies")({
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
        eyebrow="Men"
        title="Hoodies"
        description="Zip, pullover, acid wash and bomber styles."
        productType="Men's Hoodie"
      />
    </div>
  ),
  head: () => ({
    meta: [
      { title: "Men's Hoodies — Applix Wear" },
      { name: "description", content: "Shop men's hoodies and bomber jackets." },
    ],
  }),
});
