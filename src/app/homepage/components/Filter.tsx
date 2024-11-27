import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Filter({
  onFilterChange,
  resetFilters,
  minPrice,
  maxPrice,
  selectedCategory,
  onCategoryChange,
}: {
  onFilterChange: (minPrice: number, maxPrice: number) => void;
  resetFilters: () => void;
  minPrice: number;
  maxPrice: number;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  const categories = ["Cosmetics", "Furniture", "Clothing", "Books"]; // Example categories

  return (
    <div className="hidden lg:block w-1/3 mr-5 sticky h-52 top-[10%]">
      <div className="mt-20">
        <h2 className="text-2xl font-bold">Filters</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="price">
            <AccordionTrigger className="text-base font-medium">
              Price
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price-min" className="text-sm font-medium">
                    Min Price
                  </Label>
                  <Input
                    id="price-min"
                    type="number"
                    placeholder="0"
                    className="w-full"
                    value={minPrice}
                    onChange={(e) =>
                      onFilterChange(Number(e.target.value), maxPrice)
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price-max" className="text-sm font-medium">
                    Max Price
                  </Label>
                  <Input
                    id="price-max"
                    type="number"
                    placeholder="1000"
                    className="w-full"
                    value={maxPrice}
                    onChange={(e) =>
                      onFilterChange(minPrice, Number(e.target.value))
                    }
                  />
                </div>
                <button
                  type="button"
                  onClick={() => onFilterChange(minPrice, maxPrice)}
                  className="mt-2 px-4 py-2 bg-primary text-white rounded"
                >
                  Apply Filters
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="category">
            <AccordionTrigger className="text-base font-medium">
              Category
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                {categories.map((category) => (
                  <Label
                    key={category}
                    className="flex items-center gap-2 font-normal"
                  >
                    <Checkbox
                      checked={selectedCategory === category}
                      onChange={() => onCategoryChange(category)}
                    />
                    {category}
                  </Label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand">
            <AccordionTrigger className="text-base font-medium">
              Brand
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-apple" /> Apple
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-nike" /> Nike
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-ikea" /> IKEA
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-sephora" /> Sephora
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Reset Filters Button */}
        <button
          type="button"
          onClick={resetFilters}
          className="mt-4 px-4 py-2 bg-gray-400 text-white rounded"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
