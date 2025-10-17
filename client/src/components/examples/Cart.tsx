import { useState } from 'react'
import Cart from '../Cart'
import { CartProvider } from '@/lib/CartContext'
import { Button } from '@/components/ui/button'

export default function CartExample() {
  const [open, setOpen] = useState(true)

  return (
    <CartProvider>
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Cart</Button>
        <Cart 
          open={open} 
          onOpenChange={setOpen}
          onCheckout={() => console.log('Checkout clicked')}
        />
      </div>
    </CartProvider>
  )
}
