import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  inStock: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, items } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const cartItem = items.find(item => item.id === product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 600);
  };

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" data-testid={`card-product-${product.id}`}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid={`img-product-${product.id}`}
        />
        {product.inStock && (
          <Badge 
            className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs shadow-lg"
            data-testid={`badge-stock-${product.id}`}
          >
            In Stock
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <CardContent className="p-4">
        <h3 
          className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200"
          data-testid={`text-product-name-${product.id}`}
        >
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2" data-testid={`text-unit-${product.id}`}>
          per {product.unit}
        </p>
        <p 
          className="text-2xl font-bold text-primary"
          data-testid={`text-price-${product.id}`}
        >
          M {product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center gap-2">
        <div className="flex items-center border border-border rounded-md">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 hover-elevate active-elevate-2"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            data-testid={`button-decrease-${product.id}`}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span 
            className="px-3 text-sm font-medium min-w-[2rem] text-center"
            data-testid={`text-quantity-${product.id}`}
          >
            {quantity}
          </span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 hover-elevate active-elevate-2"
            onClick={() => setQuantity(quantity + 1)}
            data-testid={`button-increase-${product.id}`}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button 
          className={`flex-1 bg-chart-2 text-white border-chart-2 hover-elevate active-elevate-2 transition-all duration-300 ${isAdding ? 'scale-95' : ''}`}
          onClick={handleAddToCart}
          disabled={!product.inStock}
          data-testid={`button-add-to-cart-${product.id}`}
        >
          <ShoppingCart className={`h-4 w-4 mr-2 transition-transform duration-300 ${isAdding ? 'scale-125' : ''}`} />
          {isAdding ? 'Added!' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}
