import { useState, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QualityBadges from "@/components/QualityBadges";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Cart from "@/components/Cart";
import CheckoutForm from "@/components/CheckoutForm";
import Footer from "@/components/Footer";
import chickenImage from "@assets/generated_images/Premium_chicken_product_photo_9f9d19a5.png";
import porkImage from "@assets/generated_images/Premium_pork_product_photo_71edfe58.png";
import beefImage from "@assets/generated_images/Premium_beef_product_photo_5b788dae.png";
import eggsImage from "@assets/generated_images/Premium_eggs_product_photo_d947bd27.png";

const products = [
  {
    id: "1",
    name: "Free-Range Chicken",
    price: 85.00,
    unit: "kg",
    category: "Chicken",
    image: chickenImage,
    inStock: true,
  },
  {
    id: "2",
    name: "Premium Pork Cuts",
    price: 95.00,
    unit: "kg",
    category: "Pork",
    image: porkImage,
    inStock: true,
  },
  {
    id: "3",
    name: "Grass-Fed Beef",
    price: 120.00,
    unit: "kg",
    category: "Beef",
    image: beefImage,
    inStock: true,
  },
  {
    id: "4",
    name: "Organic Pork Ribs",
    price: 98.00,
    unit: "kg",
    category: "Pork",
    image: porkImage,
    inStock: true,
  },
  {
    id: "5",
    name: "Farm Fresh Eggs",
    price: 45.00,
    unit: "dozen",
    category: "Eggs",
    image: eggsImage,
    inStock: true,
  },
  {
    id: "6",
    name: "Premium Beef Steak",
    price: 135.00,
    unit: "kg",
    category: "Beef",
    image: beefImage,
    inStock: true,
  },
  {
    id: "7",
    name: "Whole Chicken",
    price: 75.00,
    unit: "kg",
    category: "Chicken",
    image: chickenImage,
    inStock: true,
  },
  {
    id: "8",
    name: "Jumbo Eggs",
    price: 52.00,
    unit: "dozen",
    category: "Eggs",
    image: eggsImage,
    inStock: true,
  },
];

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (showCheckout) {
    return (
      <>
        <Header onCartClick={() => setCartOpen(true)} />
        <CheckoutForm onBack={() => setShowCheckout(false)} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} />
      <Hero onShopClick={scrollToProducts} />
      <QualityBadges />
      <Features />
      <div ref={productsRef}>
        <ProductGrid products={products} />
      </div>
      <AboutSection onShopClick={scrollToProducts} />
      <Testimonials />
      <CTASection onOrderClick={scrollToProducts} />
      <Footer />
      <Cart 
        open={cartOpen} 
        onOpenChange={setCartOpen}
        onCheckout={() => setShowCheckout(true)}
      />
    </>
  );
}
