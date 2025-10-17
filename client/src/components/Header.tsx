import { ShoppingCart } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/IMG-20251016-WA0063_1760672301612.jpg";
import { useCart } from "@/lib/CartContext";

export default function Header({ onCartClick }: { onCartClick?: () => void }) {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Dada Agro Farm Logo" 
              className="h-12 w-12 rounded-full object-cover"
              data-testid="img-logo"
            />
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground" data-testid="text-brand-name">
                Dada Agro Farm
              </h1>
              <p className="text-xs text-muted-foreground" data-testid="text-tagline">Farm Fresh Quality</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-facebook"
            >
              <Button variant="ghost" size="icon" className="hover-elevate active-elevate-2">
                <FaFacebook className="h-5 w-5" />
              </Button>
            </a>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-whatsapp"
            >
              <Button variant="ghost" size="icon" className="hover-elevate active-elevate-2">
                <FaWhatsapp className="h-5 w-5" />
              </Button>
            </a>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover-elevate active-elevate-2"
              onClick={onCartClick}
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs"
                  data-testid="badge-cart-count"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
