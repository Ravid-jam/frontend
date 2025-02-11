"use client";

import { Button } from "@/components/ui/button";
import { products } from "@/src/data/products";
import { Heart, Star } from "lucide-react";
import { Product } from "../../homepage/components/Product";
import { ProductAccordion } from "../components/ProductAccordion";
import { ProductGallery } from "../components/ProductGallery";
import { ProductVariants } from "../components/ProductVariants";
import { ReviewSection } from "../components/ReviewSection";
import FilterProducts from "./components/FilterProducts";

interface PageProps {
  params: {
    productId: string;
  };
}

export default function Page({ params }: PageProps) {
  const filterItems = products.find(
    (item: Product) => item.id === params.productId
  );
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 my-6">
          <ProductGallery images={filterItems?.images || []} />
          <div className="space-y-5">
            <div>
              <h1 className="text-xl font-bold">{filterItems?.name}</h1>
              <div className="flex items-center my-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <Star className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex gap-3">
                <div className="text-xl text-red-500 font-medium mt-2">25%</div>
                <div className="text-2xl font-bold mt-2">
                  ₹{filterItems?.price}
                </div>
              </div>
            </div>

            <p className="text-gray-600">{filterItems?.description}</p>

            <ProductVariants
              productColor={filterItems?.color || []}
              productSize={filterItems?.size || []}
            />

            <div className="flex flex-wrap gap-4">
              <Button className="flex-1 bg-primary text-white">Add cart</Button>
              <Button className="flex-1 bg-primary text-white">Buy Now</Button>

              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <ProductAccordion />
          </div>
        </div>
        <FilterProducts category={filterItems?.category || ""} />
      </div>

      <ReviewSection />
    </div>
  );
}
