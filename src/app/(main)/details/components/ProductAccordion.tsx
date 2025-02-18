import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProductAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="features">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Convertible straps for multiple carrying options</li>
            <li>Durable canvas construction</li>
            <li>Secure zip-top closure</li>
            <li>Spacious main compartment</li>
            <li>Water-resistant material</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="care">
        <AccordionTrigger>Care</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-2">
            <li>Spot clean with mild detergent</li>
            <li>Do not machine wash</li>
            <li>Air dry only</li>
            <li>Store in a cool, dry place</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="shipping">
        <AccordionTrigger>Shipping</AccordionTrigger>
        <AccordionContent>
          <p>
            Free standard shipping on orders over $50. Estimated delivery time:
            3-5 business days.
          </p>
          <p className="mt-2">Express shipping available at checkout.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="returns">
        <AccordionTrigger>Returns</AccordionTrigger>
        <AccordionContent>
          <p>
            We accept returns within 30 days of delivery. Items must be unused
            and in original packaging.
          </p>
          <p className="mt-2">Free returns on all orders.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
