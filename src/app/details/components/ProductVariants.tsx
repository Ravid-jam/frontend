"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react"; // Import useState for local state management
import { ISizes } from "../../homepage/components/Product";

export function ProductVariants({ productSize }: { productSize: ISizes[] }) {
  const [selectedSize, setSelectedSize] = useState(productSize[0]?.size);

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };

  return (
    <div className="space-y-4">
      {productSize.length > 0 && (
        <React.Fragment>
          <div>
            <h3 className="text-sm font-medium mb-3">Size</h3>
            <RadioGroup
              defaultValue={productSize[0]?.size}
              onValueChange={handleSizeChange}
              className="flex flex-wrap gap-2"
            >
              {productSize.map((size) => (
                <div key={size.size} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={size.size}
                    id={`size-${size.size}`}
                    className="peer hidden"
                  />
                  <Label
                    htmlFor={`size-${size.size}`}
                    className={`px-3 py-2 border rounded-md cursor-pointer ${
                      selectedSize == size.size
                        ? "bg-primary text-white"
                        : "bg-white text-black"
                    } peer-checked:text-white`}
                  >
                    {size.size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              Selected Size: <strong>{selectedSize}</strong>
            </p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
