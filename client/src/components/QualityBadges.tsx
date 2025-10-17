import { CheckCircle2 } from "lucide-react";

const badges = [
  "Hormone-Free",
  "Antibiotic-Free",
  "Pasture-Raised",
  "Locally Sourced",
  "100% Natural",
  "Family Owned"
];

export default function QualityBadges() {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2"
              data-testid={`badge-quality-${index}`}
            >
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
