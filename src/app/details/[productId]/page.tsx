"use client";

import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { ProductAccordion } from "../components/ProductAccordion";
import { ProductGallery } from "../components/ProductGallery";
import { ProductVariants } from "../components/ProductVariants";
import { RelatedProducts } from "../components/RelatedProducts";
import { ReviewSection } from "../components/ReviewSection";

// Define types for the component props
interface PageProps {
  params: {
    productId: string;
  };
}

export default function Page({ params }: PageProps) {
  console.log(params.productId);
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <ProductGallery
          images={[
            "https://m.media-amazon.com/images/I/61FQOvP93fL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71RLxREu-CL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/717ayT6vKyL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71ylnBOx-DL._SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61l0g5ge1LL._SL1500_.jpg",
          ]}
        />

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Zip Tote Basket</h1>
            <div className="text-2xl mt-2">$140</div>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <Star className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <p className="text-gray-600">
            The Zip Tote Basket is the perfect midpoint between shopping tote
            and comfy backpack. With convertible straps, you can hand carry,
            should sling, or backpack this convenient and spacious bag. The zip
            top and durable canvas construction keeps your goods protected for
            all-day use.
          </p>

          <ProductVariants />

          <div className="flex gap-4">
            <Button className="flex-1 bg-[#6366F1] hover:bg-[#4F46E5] text-white">
              Add to bag
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <ProductAccordion />
        </div>
      </div>
      <RelatedProducts category="Product 1" subCategory="" />
      <ReviewSection />
    </div>
  );
}
