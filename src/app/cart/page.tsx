"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { products } from "@/src/data/products";
import { useRouter } from "next/navigation";
import React, { SVGProps } from "react";

export default function Component() {
  const router = useRouter();
  return (
    <React.Fragment>
      <main className="max-w-screen-xl mx-auto my-8  grid grid-cols-1 px-6 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="">
          <h2 className="text-2xl font-bold font-serif leading-[1.1] md:text-3xl">
            Your Cart
          </h2>
          <div className="mt-4 space-y-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-950"
              >
                <img
                  src={product.images[0]}
                  width={80}
                  height={80}
                  alt="Product Image"
                  className="rounded-md"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">Acme Headphones</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Black, Large
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <span>1</span>
                  <Button variant="outline" size="icon">
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-right font-medium">$99.99</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="sticky top-40 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>$139.98</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxes</span>
                  <span>$11.20</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>$151.18</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => router.push("/checkout")}
                >
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
