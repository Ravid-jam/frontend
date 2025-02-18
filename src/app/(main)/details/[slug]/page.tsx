"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Heart, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Product } from "../../homepage/components/Product";
import { getSingleProduct } from "../actions";
import { ProductAccordion } from "../components/ProductAccordion";
import { ReviewSection } from "../components/ReviewSection";
import FilterProducts from "./components/FilterProducts";
import { ProductGallery } from "../components/ProductGallery";
import { ProductVariants } from "../components/ProductVariants";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<Product>();

  const query = useQuery({
    queryKey: ["products", params.slug],
    queryFn: async () => {
      const response = await getSingleProduct(params.slug);
      setProductDetails(response?.data);
      return response.data;
    },
  });
  if (!query.data) return;
  return (
    <div className="container mx-auto pt-0 lg:pt-2">
      <div className="flex flex-col gap-5 lg:gap-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-10 min-h-[550px]">
          <ProductGallery images={productDetails?.images || []} />
          <div className="space-y-5 pt-12 md:pt-24 lg:pt-5 px-3 lg:px-4">
            <div>
              <h1 className="text-xl font-bold">{productDetails?.title}</h1>
              <div className="flex items-center my-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <Star className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex gap-3">
                {productDetails?.discount && (
                  <div className="text-xl text-red-500 font-medium mt-2">
                    {productDetails.discount} %
                  </div>
                )}
                <div className="text-2xl font-bold mt-2">
                  ₹{productDetails?.price}
                </div>
              </div>
            </div>

            <p className="text-gray-600">{productDetails?.productDetail}</p>

            <ProductVariants productSize={productDetails?.size || []} />

            <div className="grid grid-cols-3  gap-4">
              <Button
                onClick={() => router.push("/checkout")}
                className="bg-primary text-white"
              >
                Buy Now
              </Button>
              <div>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <ProductAccordion />
          </div>
        </div>
        <FilterProducts category={productDetails?.category._id || ""} />
      </div>

      <ReviewSection />
    </div>
  );
}
