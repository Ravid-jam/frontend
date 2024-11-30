"use client";
import { products } from "@/src/data/products";
import { useState } from "react";
import Filter from "./Filter";
import ProductItem from "./ProductItem";
export interface ISizes {
  id: string;
  size: string;
  stock: number;
}
export interface IColors {
  id: string;
  name: string;
  code: string;
}
export interface Product {
  id: string;
  category: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  images: string[];
  size?: ISizes[];
  description: string;
  color?: IColors[];
}
export default function Product() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleFilterChange = (minPrice: number, maxPrice: number) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    applyFilters(minPrice, maxPrice, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    applyFilters(minPrice, maxPrice, category);
  };

  const applyFilters = (
    minPrice: number,
    maxPrice: number,
    category: string
  ) => {
    const filtered = products.filter((product) => {
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;
      const categoryMatch = category ? product.category === category : true;
      return priceMatch && categoryMatch;
    });
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedCategory("");
    setFilteredProducts(products);
  };

  return (
    <div className="md:px-4 flex">
      <Filter
        onFilterChange={handleFilterChange}
        resetFilters={resetFilters} // Pass reset function to Filter
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="w-full lg:w-3/2">
        <div className="my-5 flex justify-between items-center sm:px-0 px-2">
          <div>
            <h2 className="text-2xl font-bold font-serif leading-[1.1] md:text-3xl">
              Products For You
            </h2>
            <p className="max-w-[46.875rem] text-sm leading-normal text-muted-foreground">
              Explore products from around the world
            </p>
          </div>
        </div>
        <div className="grid gap-3 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:px-0 px-2">
          {filteredProducts.map((row: Product, index: number) => (
            <div key={index}>
              <ProductItem row={row} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
