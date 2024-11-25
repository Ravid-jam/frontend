"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const variants = {
  Cosmetics: {
    Size: ["30ml", "50ml", "100ml"],
    Type: ["Eau de Parfum", "Eau de Toilette"],
  },
  "Home & Kitchen": {
    Size: ["Small", "Medium", "Large"],
    Color: ["Black", "White", "Gray"],
  },
  Clothing: {
    Size: ["XS", "S", "M", "L", "XL"],
    Color: ["Black", "White", "Gray"],
  },
};

export function ProductVariants() {
  // For demo purposes, using Clothing variants
  const productType = "Clothing";

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-3">Size</h3>
        <RadioGroup defaultValue="M" className="flex flex-wrap gap-2">
          {variants[productType as keyof typeof variants].Size.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <RadioGroupItem
                value={size}
                id={`size-${size}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`size-${size}`}
                className="px-3 py-2 border rounded-md cursor-pointer peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
              >
                {size}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Color</h3>
        {/* <RadioGroup defaultValue="Black" className="flex gap-3">
          {variants[productType as keyof typeof variants].Color.map(
            (color: any) => (
              <div key={color} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={color}
                  id={color}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={color}
                  className={cn(
                    "h-8 w-8 rounded-full border-2 cursor-pointer peer-data-[state=checked]:border-primary",
                    color === "Black" && "bg-black",
                    color === "White" && "bg-white",
                    color === "Gray" && "bg-gray-500"
                  )}
                />
              </div>
            )
          )}
        </RadioGroup> */}
      </div>
    </div>
  );
}
