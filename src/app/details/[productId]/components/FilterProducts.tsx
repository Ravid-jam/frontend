import { Product } from "@/src/app/homepage/components/Product";
import ProductItem from "@/src/app/homepage/components/ProductItem";
import { products } from "@/src/data/products";
import React from "react";
type Props = {
  category: string;
};

export default function FilterProducts({ category }: Props) {
  return (
    <div className="grid gap-3 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:px-0 px-2 mt-5">
      {products
        .filter((item: Product) => item.category === category)
        .map((row: Product, index: number) => (
          <div key={index}>
            <ProductItem row={row} />
          </div>
        ))}
    </div>
  );
}
