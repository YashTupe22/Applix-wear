import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy-policy")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-3xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="display-md text-ink mb-10">Privacy Policy</h1>
        
        <div className="prose prose-sm text-ink-muted space-y-6">
          <p>
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Applix Wear (the "Site"). This policy is compliant with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Consumer Protection (E-Commerce) Rules, 2020.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">1. Personal Information We Collect</h2>
          <p>
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
          </p>
          <p>
            When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers/UPI/Net Banking), email address, and phone number.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">2. How Do We Use Your Personal Information?</h2>
          <p>
            We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Communicate with you;</li>
            <li>Screen our orders for potential risk or fraud; and</li>
            <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
          </ul>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">3. Sharing Your Personal Information</h2>
          <p>
            We share your Personal Information with third parties to help us use your Personal Information, as described above. We use Shopify to power our online store. We also use third-party logistics (3PL) partners to deliver your orders across India.
          </p>
          <p>
            Finally, we may also share your Personal Information to comply with applicable Indian laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">4. Data Retention</h2>
          <p>
            When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information, subject to mandatory retention periods under applicable Indian taxation and corporate laws.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">5. Your Rights</h2>
          <p>
            If you are an Indian resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact our Grievance Officer using the contact information below.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">6. Changes</h2>
          <p>
            We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">7. Grievance Officer</h2>
          <p>
            In accordance with the Consumer Protection (E-Commerce) Rules, 2020 and Information Technology Act, 2000, please find our Grievance Officer details on our <a href="/contact" className="text-ink underline">Contact Us</a> page. The Grievance Officer will acknowledge your complaint within 48 hours and resolve it within one month from the date of receipt.
          </p>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Privacy Policy — Applix Wear" }] }),
});
