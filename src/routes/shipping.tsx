import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/shipping")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">Help</p>
        <h1 className="display-md text-ink mb-6">Shipping Policy</h1>
        <div className="prose prose-sm text-ink-muted space-y-4">
          <p>
            We are committed to delivering your orders as swiftly and safely as possible across India. This policy provides you with detailed information about our delivery practices.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-6 mb-2">Order Processing</h2>
          <p>
            All orders are processed within 1 to 2 business days (excluding weekends and public holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-6 mb-2">Shipping Timelines & Rates</h2>
          <p>
            We partner with reliable courier services to ensure timely delivery:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Standard Delivery:</strong> 3-5 business days depending on your location in India.</li>
            <li><strong>Metro Cities:</strong> Usually delivered within 2-3 business days.</li>
            <li><strong>Remote Locations:</strong> May take up to 7 business days.</li>
          </ul>
          <p>
            We offer <strong>Free Shipping</strong> on all prepaid orders across India. For Cash on Delivery (COD) orders, a nominal convenience fee may apply, which will be clearly displayed at checkout.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-6 mb-2">Order Tracking</h2>
          <p>
            Once your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 24 hours for the tracking information to become available.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-6 mb-2">Delays and Issues</h2>
          <p>
            While we strive for prompt delivery, occasional delays may occur due to unforeseen circumstances or high order volumes. If you haven't received your order within 7 days of receiving your shipping confirmation email, please contact us at <span className="text-ink font-medium">support@applixwear.com</span> with your name and order number, and we will look into it for you.
          </p>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Shipping Policy — Applix Wear" }] }),
});
