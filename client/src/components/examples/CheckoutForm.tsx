import CheckoutForm from '../CheckoutForm'
import { CartProvider } from '@/lib/CartContext'

export default function CheckoutFormExample() {
  return (
    <CartProvider>
      <CheckoutForm onBack={() => console.log('Back clicked')} />
    </CartProvider>
  )
}
