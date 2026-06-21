import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-3xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="display-md text-ink mb-10">Terms & Conditions</h1>
        
        <div className="prose prose-sm text-ink-muted space-y-6">
          <p>
            Welcome to Applix Wear! These Terms & Conditions outline the rules and regulations for the use of our Website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Applix Wear if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">1. License and Site Access</h2>
          <p>
            Unless otherwise stated, Applix Wear and/or its licensors own the intellectual property rights for all material on Applix Wear. All intellectual property rights are reserved. You may access this from Applix Wear for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must not republish material from Applix Wear.</li>
            <li>You must not sell, rent or sub-license material from Applix Wear.</li>
            <li>You must not reproduce, duplicate or copy material from Applix Wear.</li>
          </ul>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">2. Product Accuracy and Pricing</h2>
          <p>
            We attempt to be as accurate as possible. However, Applix Wear does not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">3. Consumer Protection Compliance</h2>
          <p>
            In compliance with the Consumer Protection (E-Commerce) Rules, 2020, Applix Wear ensures that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>No hidden charges will be imposed in the form of cancellation fees.</li>
            <li>We have a clear return, refund, and shipping policy accessible on the platform.</li>
            <li>We have an appointed Grievance Officer whose details are provided on our Contact Us page to address consumer grievances within specified timelines.</li>
          </ul>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">4. Jurisdiction</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">5. Indemnification</h2>
          <p>
            You agree to indemnify, defend and hold harmless Applix Wear and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
          </p>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Terms & Conditions — Applix Wear" }] }),
});
