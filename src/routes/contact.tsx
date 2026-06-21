import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">About</p>
        <h1 className="display-md text-ink mb-6">Contact Us</h1>

        <div className="prose prose-sm text-ink-muted space-y-8">
          <section>
            <p className="text-[15px] leading-relaxed">
              We'd love to hear from you. Whether you have a question about our products, need assistance with your order, or just want to share feedback, we're here to help.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">Customer Support</h2>
            <ul className="space-y-2">
              <li><strong>Email:</strong> <a href="mailto:support@applixwear.shop" className="text-ink underline">support@applixwear.shop</a></li>
              <li><strong>Phone/WhatsApp:</strong> +91 74990 34491</li>
              <li><strong>Hours:</strong> Monday to Saturday, 10 AM to 6 PM (IST)</li>
            </ul>
          </section>

          <section className="bg-surface-1 p-6 rounded-md border border-hairline mt-6">
            <h2 className="text-lg font-semibold text-ink mb-4">Grievance Officer</h2>
            <p className="text-[13px] mb-4">
              In accordance with the Consumer Protection (E-Commerce) Rules, 2020 and Information Technology Act, 2000, the name and contact details of the Grievance Officer are provided below:
            </p>
            <ul className="space-y-2 text-[14px]">
              <li><strong>Name:</strong> Harshad Shinde</li>
              <li><strong>Designation:</strong> CEO</li>
              <li><strong>Email:</strong> support@applixwear.shop</li>
              <li><strong>Phone:</strong> +91 74990 34491</li>
              <li><strong>Time:</strong> Monday to Saturday, 10 AM to 6 PM (IST)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-ink mb-3">Registered Office Address</h2>
            <address className="not-italic leading-relaxed">
              <strong>Applix Wear</strong><br />
              At post Chimbali<br />
              City - Pune, State - Maharashtra<br />
              Pincode - 412105<br />
              India
            </address>
          </section>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Contact Us — Applix Wear" }] }),
});
