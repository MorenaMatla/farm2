import ProductCard from '../ProductCard'
import { CartProvider } from '@/lib/CartContext'
import chickenImage from '@assets/chicken meat_1760672278462.jfif'

export default function ProductCardExample() {
  const mockProduct = {
    id: '1',
    name: 'Fresh Chicken',
    price: 85.00,
    unit: 'kg',
    category: 'Chicken',
    image: chickenImage,
    inStock: true
  }

  return (
    <CartProvider>
      <div className="p-8 max-w-sm">
        <ProductCard product={mockProduct} />
      </div>
    </CartProvider>
  )
}
