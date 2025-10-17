import { useState } from "react";
import ProductCard, { type Product } from "./ProductCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Chicken", "Pork", "Beef", "Eggs"];

export default function ProductGrid({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3"
            data-testid="text-products-title"
          >
            Our Fresh Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Browse our selection of premium farm-fresh meat and eggs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="hover-elevate active-elevate-2"
              data-testid={`button-category-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-12" data-testid="text-no-products">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
