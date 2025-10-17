import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Farm_landscape_hero_background_6ec97ae0.png";

export default function Hero({ onShopClick }: { onShopClick?: () => void }) {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${heroImage})`
        }}
      />
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <Badge 
          className="mb-6 bg-primary/90 text-primary-foreground border-primary text-sm backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-700"
          data-testid="badge-trust"
        >
          ✓ 100% Natural & Farm Fresh
        </Badge>
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
          data-testid="text-hero-title"
        >
          Farm Fresh Meat & Eggs<br />
          <span className="text-chart-2">Delivered to Your Door</span>
        </h2>
        <p 
          className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
          data-testid="text-hero-subtitle"
        >
          Experience the difference of authentic farm-raised quality. 
          Locally sourced, naturally raised, and delivered fresh daily.
        </p>
        <Button 
          size="lg" 
          className="bg-chart-2 text-white border-chart-2 hover-elevate active-elevate-2 text-lg px-10 py-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 shadow-2xl"
          onClick={onShopClick}
          data-testid="button-shop-now"
        >
          Shop Now
        </Button>
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={onShopClick}
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}
