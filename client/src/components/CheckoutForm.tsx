import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/CartContext";
import { FaWhatsapp } from "react-icons/fa";

export default function CheckoutForm({ onBack }: { onBack: () => void }) {
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderDetails = items.map(item => 
      `${item.quantity}x ${item.name} (M ${(item.price * item.quantity).toFixed(2)})`
    ).join('\n');
    
    const message = `*New Order from Dada Agro Farm*\n\nCustomer: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nOrder:\n${orderDetails}\n\nTotal: M ${total.toFixed(2)}\n\nNotes: ${formData.notes || 'None'}`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    alert("Order submitted! You'll be redirected to WhatsApp to confirm your order.");
    onBack();
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4" data-testid="text-empty-checkout">
          Your cart is empty
        </h2>
        <Button onClick={onBack} data-testid="button-back-shopping">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-6 hover-elevate active-elevate-2"
        data-testid="button-back"
      >
        ← Back to Shop
      </Button>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle data-testid="text-checkout-title">Checkout Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    data-testid="input-address"
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Order Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any special instructions..."
                    data-testid="input-notes"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover-elevate active-elevate-2"
                  size="lg"
                  data-testid="button-submit-order"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  Complete Order via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle data-testid="text-order-summary">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex justify-between text-sm"
                    data-testid={`summary-item-${item.id}`}
                  >
                    <span className="text-foreground">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="font-medium">M {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span data-testid="text-summary-total-label">Total</span>
                    <span data-testid="text-summary-total">M {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
