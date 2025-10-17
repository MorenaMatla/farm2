import { Leaf, Award, Truck, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No hormones, no antibiotics. Just pure, naturally raised livestock."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-selected cuts meeting the highest standards of excellence."
  },
  {
    icon: Truck,
    title: "Fresh Delivery",
    description: "Farm-to-door delivery ensuring maximum freshness every time."
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee or your money back, no questions asked."
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3"
            data-testid="text-features-title"
          >
            Why Choose Dada Agro Farm
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering the finest farm-fresh products with uncompromising quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover-elevate transition-transform"
                data-testid={`card-feature-${index}`}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
