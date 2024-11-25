"use client";
import { products } from "@/src/data/products";
import Filter from "./Filter";
import ProductItem from "./ProductItem";
// Interface for RAM and ROM specifications
interface RamAndRom {
  id: number;
  rom: string;
  price: number;
  stoke: number; // Note: "stoke" seems to be a typo; should be "stock"
}

// Interface for variant specifications
interface Variant {
  id: number;
  color: string;
  ramAndRom: RamAndRom[];
  price: number;
  stoke: number; // Note: "stoke" seems to be a typo; should be "stock"
  images: string[];
}

// Interface for review specifications
interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

// Interface for dimensions specifications
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  subCategory: string;
  price: number;
  variants: Variant[];
  discountPercentage: number | string; // Ensure this is a number
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
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

export default function Product() {
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
          {products.map((row: Product, index: number) => (
            <div key={index}>
              <ProductItem row={row} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
