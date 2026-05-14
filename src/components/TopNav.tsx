import { Link } from "@tanstack/react-router";
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";

type SubLink = { to: string; label: string };
type NavGroup = { to: string; label: string; subs?: SubLink[] };

const navGroups: NavGroup[] = [
  {
    to: "/men",
    label: "Men",
    subs: [
      { to: "/men/tshirt", label: "T-Shirt" },
      { to: "/men/oversized-tshirt", label: "Oversized T-Shirt" },
      { to: "/men/hoodies", label: "Hoodies" },
      { to: "/men/hoodies/zip", label: "— Zip Hoodie" },
      { to: "/men/hoodies/pullover", label: "— Pullover Hoodie" },
      { to: "/men/hoodies/acid-wash", label: "— Acid Wash Hoodie" },
      { to: "/men/hoodies/bomber", label: "— Bomber Jacket" },
      { to: "/men/sweatshirt", label: "Sweatshirt" },
      { to: "/men/custom-printed-tshirt", label: "Custom Printed T-Shirt" },
    ],
  },
  {
    to: "/women",
    label: "Women",
    subs: [
      { to: "/women/tshirt", label: "T-Shirt" },
      { to: "/women/crop-top", label: "Crop Top" },
      { to: "/women/bomber-jacket", label: "Bomber Jacket" },
      { to: "/women/bodycon-dress", label: "Bodycon Dress" },
      { to: "/women/oversized-tshirt", label: "Oversized T-Shirt" },
      { to: "/women/hoodies", label: "Hoodies" },
      { to: "/women/custom-printed-tshirt", label: "Custom Printed T-Shirt" },
    ],
  },
  {
    to: "/accessories",
    label: "Accessories",
    subs: [
      { to: "/accessories/poster", label: "Posters" },
      { to: "/accessories/poster/acrylic", label: "— Acrylic Poster" },
      { to: "/accessories/poster/framed", label: "— Framed Poster" },
      { to: "/accessories/poster/custom", label: "— Custom Poster" },
    ],
  },
  { to: "/collections", label: "Collections" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-canvas border-b border-hairline">
      <div className="container-app flex items-center justify-between h-[60px]">
        <Link to="/" className="text-[22px] font-bold tracking-tight text-ink">
          Applix Wear
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navGroups.map((group) => (
            <div key={group.to} className="relative group">
              <Link
                to={group.to}
                className="inline-flex items-center gap-1 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors py-5"
                activeProps={{ className: "text-primary text-[13px] font-medium inline-flex items-center gap-1 py-5" }}
              >
                {group.label}
                {group.subs && <ChevronDown className="w-3 h-3" />}
              </Link>
              {group.subs && (
                <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  <div className="min-w-[220px] bg-canvas border border-hairline rounded-md shadow-lg py-2">
                    {group.subs.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block px-4 py-2 text-[13px] text-ink-muted hover:text-ink hover:bg-surface-1"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="w-9 h-9 grid place-items-center rounded-md text-ink-muted hover:bg-surface-1">
            <Search className="w-[18px] h-[18px]" />
          </button>
          <button aria-label="Account" className="hidden sm:grid w-9 h-9 place-items-center rounded-md text-ink-muted hover:bg-surface-1">
            <User className="w-[18px] h-[18px]" />
          </button>
          <CartDrawer />
          <button
            aria-label="Menu"
            className="md:hidden w-9 h-9 grid place-items-center rounded-md text-ink-muted hover:bg-surface-1"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-canvas md:hidden overflow-y-auto">
          <div className="container-app flex items-center justify-between h-[60px] border-b border-hairline">
            <span className="text-[22px] font-bold">Applix Wear</span>
            <button onClick={() => setOpen(false)} aria-label="Close" className="w-9 h-9 grid place-items-center">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="container-app flex flex-col py-8 gap-6">
            {navGroups.map((group) => (
              <div key={group.to}>
                <Link
                  to={group.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-ink"
                >
                  {group.label}
                </Link>
                {group.subs && (
                  <div className="mt-3 ml-1 flex flex-col gap-2">
                    {group.subs.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setOpen(false)}
                        className="text-[14px] text-ink-muted"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
