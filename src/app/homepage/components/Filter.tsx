import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Filter() {
  return (
    <div className="hidden lg:block w-1/3 mr-5">
      <div className="mt-20">
        <div className="">
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
                    />
                  </div>
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
        </div>
      </div>
    </div>
  );
}
