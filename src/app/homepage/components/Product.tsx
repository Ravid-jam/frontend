"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ProductCarousel from "@/src/common/ProductCarousel";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Filter from "./Filter";

// Product Interface
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface IProduct {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}

export default function Product() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [limit] = useState(10); // Set the limit of products to fetch
  const [skip, setSkip] = useState(0); // Track how many products are skipped
  const [total, setTotal] = useState(0); // Total number of products available
  const [loading, setLoading] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );

        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }

        const data: IProduct = await res.json();
        setProducts((prev) => [...prev, ...data.products]);
        setTotal(data.total);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [skip, limit]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !loading && products.length < total) {
            setSkip((prev) => prev + limit); // Increase the skip count to load more data
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold if necessary
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, [loading, products.length, total, limit]);

  return (
    <div className="md:px-4 flex">
      <Filter />
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
          {loading ? (
            <>
              {Array.from({ length: total }).map((_, index) => (
                <Card
                  className="!p-0 border border-gray-200 animate-pulse"
                  key={index}
                >
                  <CardHeader className="!p-0">
                    <div className="h-48 bg-[#e4e4e7] rounded-t-xl"></div>
                  </CardHeader>
                  <CardContent className="!py-1 !px-2">
                    <div>
                      <div className="h-4 bg-[#e4e4e7] rounded w-3/2 mb-2"></div>
                      <div className="h-4 bg-[#e4e4e7] rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-[#e4e4e7] rounded w-1/2 mb-2"></div>
                      <div className="flex items-center md:flex-nowrap flex-wrap gap-2 my-3">
                        <div className="flex items-center border rounded-full p-2 w-20 bg-[#e4e4e7]">
                          <div className="h-4 w-4 bg-white rounded-full"></div>
                          <p className="ms-2 font-mono text-sm font-bold text-white"></p>
                        </div>
                        <div className="h-4 bg-[#e4e4e7] rounded w-1/2"></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-x-2 !pt-1 !px-2 !pb-3">
                    <div className="flex-1">
                      <Button className="w-full !bg-[#e4e4e7]"></Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </>
          ) : (
            <>
              {products.map((row: Product, index: number) => (
                <div key={index}>
                  <Card className="!p-0 ">
                    <CardHeader className="!p-0 !h-22">
                      <ProductCarousel slides={row.images} />
                    </CardHeader>
                    <CardContent className="!py-1 !px-2">
                      <div>
                        <h3
                          className="text-base font-serif truncate cursor-pointer hover:underline text-[#8A8AA2] w-full"
                          onClick={() => router.push(`/details/${row.id}`)}
                        >
                          {row.title}
                        </h3>
                        <div className="">
                          <p className="text-lg font-bold font-mono text-gray-600 line-through">
                            <span className="text-base">₹</span>
                            {row.discountPercentage}
                          </p>
                          <p className="text-[#353543] font-bold text-2xl font-mono">
                            <span className="text-lg">₹</span>
                            {row.price}
                          </p>
                        </div>
                        <div className="flex items-center md:flex-nowrap flex-wrap gap-2 my-3">
                          <div className="flex items-center border rounded-full p-2 bg-[#23BB75]">
                            <svg
                              className="w-4 h-4 text-white me-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p className="ms-2 font-mono text-sm font-bold text-white">
                              {row.rating}
                            </p>
                          </div>
                          <a
                            href="#"
                            className="sm:text-base text-sm font-medium font-sans text-gray-500 hover:underline dark:text-white"
                          >
                            {row.reviews.length} Reviews
                          </a>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between gap-x-2 !pt-1 !px-2 !pb-3">
                      <div className="flex-1">
                        <Button className="w-full !bg-[#004AAC]">
                          Add To Cart
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Observer element for infinite scroll */}
        <div ref={observerRef} className="h-10 w-full"></div>

        {/* Loading indicator */}
        {loading && (
          <div className="text-center py-5">
            <div className="flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#004AAC] border-t-transparent" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
