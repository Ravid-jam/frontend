"use client";

import { Button } from "@/components/ui/button";
import { products } from "@/src/data/products";
import { Heart, Star } from "lucide-react";
import { Product } from "../../homepage/components/Product";
import { ProductAccordion } from "../components/ProductAccordion";
import { ProductGallery } from "../components/ProductGallery";
import { ProductVariants } from "../components/ProductVariants";
import { ReviewSection } from "../components/ReviewSection";

interface PageProps {
  params: {
    productId: string;
  };
}

export default function Page({ params }: PageProps) {
  console.log(params.productId);
  const filterItems = products.find(
    (item: Product) => item.id === params.productId
  );
  console.log(filterItems);
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <ProductGallery images={filterItems?.images || []} />

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{filterItems?.name}</h1>
            <div className="text-2xl mt-2">₹{filterItems?.price}</div>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <Star className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <p className="text-gray-600">{filterItems?.description}</p>

          <ProductVariants productSize={filterItems?.size || []} />

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
      <ReviewSection />
    </div>
  );
}
