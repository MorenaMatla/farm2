import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import farmTableImage from "@assets/generated_images/Farm_to_table_concept_60764489.png";

export default function CTASection({ onOrderClick }: { onOrderClick?: () => void }) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${farmTableImage})`
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
          data-testid="text-cta-title"
        >
          Ready to Experience <br/>Farm-Fresh Quality?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Order now and taste the difference that authentic, naturally-raised meat makes. 
          Your family deserves the best.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-chart-2 text-white border-chart-2 hover-elevate active-elevate-2 text-lg px-8"
            onClick={onOrderClick}
            data-testid="button-order-now"
          >
            Order Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-background/10 backdrop-blur-sm border-white/30 text-white hover-elevate active-elevate-2 text-lg px-8"
            asChild
            data-testid="button-contact-whatsapp"
          >
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
