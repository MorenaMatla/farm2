import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import farmerImage from "@assets/generated_images/Farmer_with_chickens_lifestyle_2af654e7.png";

export default function AboutSection({ onShopClick }: { onShopClick?: () => void }) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge 
              className="mb-4 bg-primary/10 text-primary border-primary/20"
              data-testid="badge-our-story"
            >
              Our Story
            </Badge>
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6"
              data-testid="text-about-title"
            >
              Family Farm, <br/>Premium Quality
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For generations, the Dada Agro Farm has been a cornerstone of quality meat production 
                in our community. What started as a small family operation has grown into a trusted 
                source for premium, naturally-raised livestock.
              </p>
              <p>
                Every animal on our farm is raised with care and respect, grazing on open pastures 
                and fed a natural diet. We believe that happy, healthy animals produce the best quality 
                meat and eggs for your family.
              </p>
              <p>
                When you choose Dada Agro Farm, you're not just buying meat - you're supporting 
                sustainable farming practices and becoming part of our extended family.
              </p>
            </div>
            <Button 
              size="lg" 
              className="mt-6 bg-primary text-primary-foreground hover-elevate active-elevate-2"
              onClick={onShopClick}
              data-testid="button-shop-products"
            >
              Shop Our Products
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={farmerImage} 
                alt="Farmer with livestock"
                className="w-full h-auto object-cover"
                data-testid="img-about-farmer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
