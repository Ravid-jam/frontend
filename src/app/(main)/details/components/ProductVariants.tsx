"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react"; // Import useState for local state management
import { Size } from "../../homepage/components/Product";

export function ProductVariants({ productSize }: { productSize: Size[] }) {
  const [selectedSize, setSelectedSize] = useState(
    productSize[0]?.name.sizeName
  );
  // const [selectedColor, setSelectedColor] = useState<string>(
  //   productColor.colorName
  // );

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };
  // const handleColorChange = (color: string) => {
  //   setSelectedColor(color);
  // };
  return (
    <div className="space-y-4">
      {productSize.length >= 1 && (
        <React.Fragment>
          <div>
            <h3 className="text-sm font-medium mb-3">Size</h3>
            <RadioGroup
              defaultValue={productSize[0]?.name?.sizeName}
              onValueChange={handleSizeChange}
              className="flex flex-wrap gap-2"
            >
              {productSize.map((size) => (
                <div key={size._id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={size.name.sizeName}
                    id={`size-${size._id}`}
                    className="peer hidden"
                  />
                  <Label
                    htmlFor={`size-${size._id}`}
                    className={`px-3 py-2 border rounded-md cursor-pointer ${
                      selectedSize == size.name.sizeName
                        ? "bg-primary text-white"
                        : "bg-white text-black"
                    } peer-checked:text-white`}
                  >
                    {size.name.sizeName}
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
      {/* {productColor.length >= 1 && (
        <React.Fragment>
          <div className="mb-4 md:mb-6">
            <h3 className="text-sm font-medium mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {productColor.map((color) => (
                <button
                  key={color._id}
                  type="button"
                  onClick={() => handleColorChange(color.colorName)}
                  className={`h-8 w-8 rounded-full border ring-2 ring-offset-1 transition duration-100 ${
                    selectedColor === color.colorName
                      ? `border-${color.colorCode} ring-${color.colorCode}`
                      : "border-gray-300 ring-transparent hover:ring-gray-200"
                  }`}
                  style={{ backgroundColor: color.colorCode }}
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
      )} */}
    </div>
  );
}
