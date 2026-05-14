import { TopNav } from "./TopNav";
import { SiteFooter } from "./SiteFooter";
import { useCartSync } from "@/hooks/useCartSync";
import { Toaster } from "sonner";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useCartSync();
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <TopNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <Toaster position="top-center" />
    </div>
  );
}
