import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/our-story")({
  component: () => (
    <SiteLayout>
      <div className="container-app pt-10 md:pt-14 pb-20 max-w-2xl">
        <p className="eyebrow mb-3">About Us</p>
        <h1 className="display-md text-ink mb-6">Our Story</h1>
        
        <div className="prose prose-sm text-ink-muted space-y-6">
          <p className="text-[16px] leading-relaxed text-ink">
            Applixwear is a modern streetwear brand focused on delivering premium oversized t-shirts and trend-driven apparel for today's generation. We create clothing that combines comfort, style, and individuality, helping people express themselves through fashion. Our collections are designed for those who want to stand out while staying comfortable every day.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">Our Mission</h2>
          <p>
            At Applixwear, our mission is to make premium-quality streetwear accessible and affordable. We started this brand to bridge the gap between high-end fashion and everyday wear, offering stylish oversized clothing that reflects confidence, creativity, and self-expression without compromising on quality.
          </p>

          <h2 className="text-lg font-semibold text-ink mt-8 mb-4">What Makes Us Different?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Premium cotton fabrics for superior comfort and durability.</li>
            <li>Trendy oversized fits inspired by global streetwear culture.</li>
            <li>Unique and eye-catching graphic designs.</li>
            <li>Designed and proudly made in India.</li>
            <li>Quality-focused production with attention to every detail.</li>
            <li>Affordable pricing without sacrificing style or comfort.</li>
            <li>A brand built for Gen Z and modern fashion enthusiasts.</li>
          </ul>

          <div className="bg-surface-1 border border-hairline p-6 rounded-md mt-10">
            <p className="text-[16px] italic text-center font-medium text-ink">
              "At Applixwear, we believe clothing is more than fashion—it's a statement. Our goal is to help you wear your confidence and Rise Above Limits."
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  ),
  head: () => ({ meta: [{ title: "Our Story — Applix Wear" }] }),
});
