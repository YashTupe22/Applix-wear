import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">About</p>
        <h1 className="display-md text-ink mb-6">Contact</h1>
        <div className="space-y-3 text-ink-muted">
          <p>Questions, press, or partnerships? We'd love to hear from you.</p>
          <p>Email: <span className="text-ink">hello@applixwear.com</span></p>
          <p>Support: <span className="text-ink">support@applixwear.com</span></p>
          <p>Mon–Fri, 9am–6pm.</p>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Contact — Applix Wear" }] }),
});
