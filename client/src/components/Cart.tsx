import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Cart({ 
  open, 
  onOpenChange, 
  onCheckout 
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
  onCheckout: () => void;
}) {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle data-testid="text-cart-title">Shopping Cart ({items.length})</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground" data-testid="text-empty-cart">Your cart is empty</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex gap-4 p-4 bg-card rounded-md border border-card-border"
                    data-testid={`cart-item-${item.id}`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                      data-testid={`img-cart-${item.id}`}
                    />
                    <div className="flex-1">
                      <h4 
                        className="font-semibold text-foreground mb-1"
                        data-testid={`text-cart-name-${item.id}`}
                      >
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        M {item.price.toFixed(2)} / {item.unit}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 hover-elevate active-elevate-2"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            data-testid={`button-cart-decrease-${item.id}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span 
                            className="px-3 text-sm font-medium"
                            data-testid={`text-cart-quantity-${item.id}`}
                          >
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 hover-elevate active-elevate-2"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            data-testid={`button-cart-increase-${item.id}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive hover-elevate active-elevate-2"
                          onClick={() => removeFromCart(item.id)}
                          data-testid={`button-remove-${item.id}`}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p 
                        className="font-bold text-foreground"
                        data-testid={`text-cart-subtotal-${item.id}`}
                      >
                        M {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="flex-col gap-4">
              <div className="flex justify-between items-center text-lg font-bold border-t border-border pt-4">
                <span data-testid="text-total-label">Total:</span>
                <span data-testid="text-total-amount">M {total.toFixed(2)}</span>
              </div>
              <Button 
                className="w-full bg-chart-2 text-white border-chart-2 hover-elevate active-elevate-2"
                size="lg"
                onClick={() => {
                  onCheckout();
                  onOpenChange(false);
                }}
                data-testid="button-proceed-checkout"
              >
                Proceed to Checkout
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
