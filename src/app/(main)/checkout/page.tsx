"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/src/data/products";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-8 py-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Delivery Information</h1>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Bryan Cranston" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" placeholder="+1 424-236-3574" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="thejon1" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Hawthorne" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select defaultValue="CA">
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CA">California</SelectItem>
                  <SelectItem value="NY">New York</SelectItem>
                  <SelectItem value="TX">Texas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="zip">ZIP</Label>
            <Input id="zip" placeholder="90250" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="4736 Libby Street" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address line 2</Label>
            <Input id="address" placeholder="4736 Libby Street" />
          </div>

          <div className="space-y-4">
            <Label>Payment Method</Label>
            <RadioGroup defaultValue="cash" className="grid gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online">Online Payment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">Cash on Delivery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pos" id="pos" />
                <Label htmlFor="pos">POS on Delivery</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="">
          <Card className="p-6 sticky top-52">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-6">
              <div className="h-80 overflow-auto space-y-6 p-3">
                {products?.map((product) => (
                  <div key={product?.id} className="flex items-center gap-4 ">
                    <Image
                      src={product?.images[0]}
                      alt={product?.id}
                      height={100}
                      width={100}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-1 ">
                      <h3 className="font-medium truncate w-64">
                        {product?.name}
                      </h3>

                      <p className="font-medium">
                        ₹{product?.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <MinusIcon className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">1</span>
                      <Button variant="outline" size="icon">
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹1250.32</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-medium text-lg">
                  <span>Total (USD)</span>
                  <span>₹1250.32</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Confirm Order
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
