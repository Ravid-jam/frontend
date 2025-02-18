import { Button } from "@/components/ui/button";
import { Product } from "../app/(main)/homepage/components/Product";

type AddToCartProps = {
  product: Product;
};

export default function AddToCart({ product }: AddToCartProps) {
  const handleAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("AddToCart") || "[]");

    // Add the new product to the cart
    cart.push(product);

    localStorage.setItem("AddToCart", JSON.stringify(cart));
  };
  return (
    <Button
      variant="default"
      className="bg-primary text-white"
      onClick={() => handleAddToCart(product)}
    >
      Add To Cart
    </Button>
  );
}
