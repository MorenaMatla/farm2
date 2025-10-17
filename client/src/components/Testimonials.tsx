import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Thabo Mokoena",
    initials: "TM",
    rating: 5,
    text: "The quality of meat from Dada Agro Farm is unmatched! You can really taste the difference. My family won't buy from anywhere else."
  },
  {
    name: "Mpho Khumalo",
    initials: "MK",
    rating: 5,
    text: "Fresh eggs delivered right to my door. The convenience and quality make it worth every maluti. Highly recommend!"
  },
  {
    name: "Lerato Nkosi",
    initials: "LN",
    rating: 5,
    text: "Supporting local farmers has never been easier. The chicken is always fresh and the service is excellent!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3"
            data-testid="text-testimonials-title"
          >
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Join hundreds of satisfied families enjoying farm-fresh quality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-elevate"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-chart-2 text-chart-2" 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
