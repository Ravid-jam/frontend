"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Heading from "@/src/common/Heading";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProducts } from "../actions";
import Filter from "./Filter";
import ProductItem from "./ProductItem";
export type IImage = {
  id: string;
  url: string;
};

export type SizeName = {
  _id: string;
  sizeName: string;
  __v: number;
};

export type Size = {
  name: SizeName; // Populated size reference
  availableStock: number;
  _id: string;
};

export type Category = {
  _id: string;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  image: IImage;
  createdAt: string;
  updatedAt: string;
};

export type Subcategory = {
  _id: string;
  name: string;
  category: string;
  status: "ACTIVE" | "INACTIVE";
  image: IImage;
  createdAt: string;
  updatedAt: string;
};

export type Color = {
  _id: string;
  colorName: string;
  colorCode: string;
};

export type Product = {
  _id: string;
  title: string;
  slug: string;
  price: number;
  discount: number;
  totalPrice: number;
  category: Category;
  subcategory: Subcategory;
  brandName: string;
  returnPolicy: string;
  brandDetails: string;
  shipping: string;
  deliveryDetail: string;
  productDetail: string;
  color: Color;
  Offers: string[]; // Assuming Offers is an array of strings
  size?: Size[];
  rating: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  images: IImage[];
};

export default function Product() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const handleFilterChange = (minPrice: number, maxPrice: number) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    applyFilters(minPrice, maxPrice, selectedCategory);
  };

  const query = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await getProducts();
      setFilteredProducts(response.data);
      return response.data;
    },
  });
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    applyFilters(minPrice, maxPrice, category);
  };

  const applyFilters = (
    minPrice: number,
    maxPrice: number,
    category: string
  ) => {
    const filtered = filteredProducts.filter((product: Product) => {
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;
      const categoryMatch = category
        ? product?.category._id === category
        : true;
      return priceMatch && categoryMatch;
    });
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedCategory("");
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="flex gap-5 px-2 md:px-5">
      <Filter
        onFilterChange={handleFilterChange}
        resetFilters={resetFilters}
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="w-full">
        <Heading
          title=" Products For You"
          description="Explore products from around the world"
        />
        <div className="grid gap-3 md:gap-5 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {query.isLoading || query.isFetching || query.isPending
            ? [...Array(10)].map((_, index) => (
                <Card key={index} className="p-0 h-full animate-pulse">
                  <CardHeader className="p-0 h-60 md:h-72 bg-gray-300 rounded-md"></CardHeader>
                  <CardContent className="py-1 px-2">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                  </CardContent>
                  <CardFooter className="flex flex-col justify-end px-2 pb-3">
                    <Button className="w-full bg-gray-300 h-10"></Button>
                  </CardFooter>
                </Card>
              ))
            : filteredProducts.map((row: Product, index: number) => (
                <div key={index}>
                  <ProductItem row={row} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
