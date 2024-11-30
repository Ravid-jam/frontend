"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react"; // Import useState for local state management
import { IColors, ISizes } from "../../homepage/components/Product";

export function ProductVariants({
  productSize,
  productColor,
}: {
  productSize: ISizes[];
  productColor: IColors[];
}) {
  const [selectedSize, setSelectedSize] = useState(productSize[0]?.size);
  const [selectedColor, setSelectedColor] = useState<string>(
    productColor[0]?.name
  );

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  console.log(productSize);
  return (
    <div className="space-y-4">
      {productSize.length >= 1 && (
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
      {productColor.length >= 1 && (
        <React.Fragment>
          <div className="mb-4 md:mb-6">
            <h3 className="text-sm font-medium mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {productColor.map((color) => (
                <button
                  key={color.code}
                  type="button"
                  onClick={() => handleColorChange(color.name)}
                  className={`h-8 w-8 rounded-full border ring-2 ring-offset-1 transition duration-100 ${
                    selectedColor === color.name
                      ? `border-${color.code} ring-${color.code}`
                      : "border-gray-300 ring-transparent hover:ring-gray-200"
                  }`}
                  style={{ backgroundColor: color.code }}
                />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              Selected Color: <strong>{selectedColor}</strong>
            </p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
