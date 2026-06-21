import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/returns")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">Help</p>
        <h1 className="display-md text-ink mb-6">Returns & Refunds</h1>
        <div className="prose prose-sm text-ink-muted space-y-4">
          <p>
            In compliance with the Consumer Protection (E-Commerce) Rules, 2020, we offer a transparent and hassle-free return and refund policy.
          </p>
          <h2 className="text-lg font-semibold text-ink mt-6 mb-2">Return Window</h2>
          <p>
            Unworn, unwashed, and undamaged items can be returned within <strong>7 days</strong> of delivery for a full refund or exchange. Custom printed items or customized apparel are final sale and cannot be returned unless they are defective or damaged upon delivery.
          </p>
          
          <h2 className="text-lg font-semibold text-ink mt-6 mb-2">Conditions for Return</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>The product must be in its original packaging with all tags intact.</li>
            <li>In case of a defective product, please notify us within 48 hours of delivery. We bear the return shipping costs for defective goods.</li>
            <li>No hidden cancellation charges apply. You will receive the full amount paid for the item.</li>
          </ul>

          <h2 className="text-lg font-semibold text-ink mt-6 mb-2">Refund Process</h2>
          <p>
            Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed back to your original method of payment (or via NEFT/UPI for Cash on Delivery orders) within <strong>5-7 business days</strong>.
          </p>

          <p className="mt-8">
            To start a return, email <span className="text-ink font-medium">support@applixwear.com</span> with your order number and reason for return.
          </p>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Returns & Refunds — Applix Wear" }] }),
});
