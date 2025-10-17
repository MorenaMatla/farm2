import Header from '../Header'
import { CartProvider } from '@/lib/CartContext'

export default function HeaderExample() {
  return (
    <CartProvider>
      <Header onCartClick={() => console.log('Cart clicked')} />
    </CartProvider>
  )
}
