import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/IMG-20251016-WA0063_1760672301612.jpg";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Dada Agro Farm" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <h3 className="text-xl font-serif font-bold text-foreground">
                Dada Agro Farm
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted source for premium farm-fresh meat and eggs. 
              We pride ourselves on quality, sustainability, and authentic farm-to-table goodness.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-about-title">
              About Us
            </h4>
            <p className="text-sm text-muted-foreground">
              At Dada Agro Farm, we believe in natural farming practices. 
              Our animals are raised with care, resulting in the highest quality products for your family.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-contact-title">
              Contact Us
            </h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-footer-facebook"
              >
                <Button variant="outline" size="icon" className="hover-elevate active-elevate-2">
                  <FaFacebook className="h-5 w-5" />
                </Button>
              </a>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-footer-whatsapp"
              >
                <Button variant="outline" size="icon" className="hover-elevate active-elevate-2">
                  <FaWhatsapp className="h-5 w-5" />
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Reach out via WhatsApp or Facebook for orders and inquiries.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Dada Agro Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
