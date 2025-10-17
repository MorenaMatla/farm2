import ProductGrid from '../ProductGrid'
import { CartProvider } from '@/lib/CartContext'
import chickenImage from '@assets/chicken meat_1760672278462.jfif'
import porkImage from '@assets/pork meat_1760672278461.jpg'
import beefImage from '@assets/beaf meat_1760672278461.webp'
import eggsImage from '@assets/eggs_1760672278459.jpeg'

export default function ProductGridExample() {
  const mockProducts = [
    { id: '1', name: 'Fresh Chicken', price: 85.00, unit: 'kg', category: 'Chicken', image: chickenImage, inStock: true },
    { id: '2', name: 'Premium Pork', price: 95.00, unit: 'kg', category: 'Pork', image: porkImage, inStock: true },
    { id: '3', name: 'Quality Beef', price: 120.00, unit: 'kg', category: 'Beef', image: beefImage, inStock: true },
    { id: '4', name: 'Farm Fresh Eggs', price: 45.00, unit: 'dozen', category: 'Eggs', image: eggsImage, inStock: true },
  ]

  return (
    <CartProvider>
      <ProductGrid products={mockProducts} />
    </CartProvider>
  )
}
