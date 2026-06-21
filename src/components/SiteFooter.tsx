import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-surface-1 border-t border-hairline mt-20">
      <div className="container-app py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="eyebrow mb-4">Shop</h4>
            <ul className="space-y-2 text-[13px] text-ink-subtle">
              <li><Link to="/men" className="hover:text-ink">Men</Link></li>
              <li><Link to="/women" className="hover:text-ink">Women</Link></li>
              <li><Link to="/accessories" className="hover:text-ink">Accessories</Link></li>
              <li><Link to="/collections" className="hover:text-ink">Collections</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-4">Help</h4>
            <ul className="space-y-2 text-[13px] text-ink-subtle">
              <li><Link to="/faqs" className="hover:text-ink">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-ink">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-ink">Returns</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-ink">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-ink">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-4">About</h4>
            <ul className="space-y-2 text-[13px] text-ink-subtle">
              <li><Link to="/our-story" className="hover:text-ink">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-4">Social</h4>
            <ul className="space-y-2 text-[13px] text-ink-subtle">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-ink">Instagram</a></li>
              <li><a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-ink">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-hairline text-[12px] text-ink-tertiary">
          © {new Date().getFullYear()} Applix Wear. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
