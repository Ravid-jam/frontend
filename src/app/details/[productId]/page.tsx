"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import EmblaCarouselDotButton from "../../../common/DotButton";
import { Product } from "../../homepage/components/Product";

// Define types for the component props
interface PageProps {
  params: {
    productId: number;
  };
}

// Define types for Reviews
interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

// Define types for Product Variant
interface Variant {
  id: number;
  color: string;
  sizes: string[];
}

// Define types for Related Products
interface RelatedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}

// Define the main Product type
interface ProductList {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  variants: Variant[];
  reviews: Review[];
  relatedProducts: RelatedProduct[];
}

export default function Page({ params }: PageProps) {
  const product: ProductList = {
    id: 1,
    name: "Acme Prism T-Shirt",
    description:
      "A stylish and comfortable t-shirt featuring a unique prism-inspired design.",
    price: 49.99,
    images: [
      "https://juniperfashion.com/cdn/shop/files/juniper_banner_tulssi.png?v=1712321177&width=1600",
      "https://juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=300%20300w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=400%20400w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=500%20500w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=600%20600w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=700%20700w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=800%20800w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=900%20900w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=1000%201000w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=1200%201200w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=1400%201400w,%20//juniperfashion.com/cdn/shop/files/3_5.png?v=1712321327&width=1600%201600w",
      "https://juniperfashion.com/cdn/shop/files/Juniper_Fashion_Banner_2_-_Desktop_751c255a-193d-42a3-8850-1faf6fc81cb5.webp?v=1725968642&width=1600",
      "https://juniperfashion.com/cdn/shop/files/WhatsApp_Image_2024-04-05_at_18.46.32.jpg?v=1712323299&width=1600",
    ],
    variants: [
      { id: 1, color: "Black", sizes: ["S", "M", "L", "XL"] },
      { id: 2, color: "White", sizes: ["S", "M", "L", "XL"] },
      { id: 3, color: "Blue", sizes: ["S", "M", "L", "XL"] },
    ],
    reviews: [
      {
        id: 1,
        author: "Sarah Johnson",
        rating: 4,
        comment:
          "I love the unique design and the fabric is so soft and comfortable.",
      },
      {
        id: 2,
        author: "Alex Smith",
        rating: 5,
        comment: "This is the best t-shirt I've ever owned. Highly recommend!",
      },
      {
        id: 3,
        author: "Emily Parker",
        rating: 3,
        comment:
          "The fit is a bit loose for my liking, but the quality is good.",
      },
    ],
    relatedProducts: [
      {
        id: 2,
        name: "Acme Circles Hoodie",
        image: "/placeholder.svg",
        price: 59.99,
      },
      {
        id: 3,
        name: "Acme Triangles Sweatpants",
        image: "/placeholder.svg",
        price: 39.99,
      },
      {
        id: 4,
        name: "Acme Hexagon Socks",
        image: "/placeholder.svg",
        price: 9.99,
      },
      {
        id: 5,
        name: "Acme Octagon Beanie",
        image: "/placeholder.svg",
        price: 14.99,
      },
    ],
  };
  const [productDetails, setProductDetails] = useState<Product>();
  useEffect(() => {
    function getProducts() {
      fetch(`https://dummyjson.com/products/${params.productId}`)
        .then((res) => res.json())
        .then((response) => response)
        .then((data) => setProductDetails(data));
    }

    getProducts();
  }, []);

  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product?.variants?.[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    selectedVariant?.sizes?.[0]
  );

  const handleVariantChange = (variantId: number) => {
    const variant = product.variants.find((v: Variant) => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
      setSelectedSize(variant.sizes[0]);
    }
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-5 px-4 md:px-6">
      <div className="flex md:flex-nowrap md:gap-4 gap-2">
        <div className="flex flex-col gap-y-2">
          {productDetails &&
            productDetails?.images?.map((image: string, index: number) => (
              <button
                key={index}
                className={`border rounded-md w-20 h-20 overflow-hidden transition-colors ${
                  selectedIndex === index
                    ? "border-[1.5px] border-[#004AAC]"
                    : "border-muted"
                }`}
                onMouseOver={() => {
                  if (emblaApi) {
                    emblaApi.scrollTo(index);
                  }
                }}
              >
                <img
                  src={image}
                  alt={`Product image ${index + 1}`}
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
              </button>
            ))}
        </div>
        <div>
          <div
            className="relative overflow-hidden rounded-sm  border xl:h-[450px]"
            ref={emblaRef}
          >
            <div className="embla__container  cursor-pointer">
              {productDetails?.images?.map((item, index) => (
                <div
                  className="embla__slide flex justify-center items-center"
                  key={index}
                >
                  <img
                    src={item}
                    className="w-full aspect-square object-cover transition-transform duration-300 ease-in-out"
                  />
                </div>
              ))}
            </div>
            <div className="embla__dots flex justify-center">
              {productDetails &&
                productDetails?.images.length > 1 &&
                productDetails?.images.map((_, index) => (
                  <EmblaCarouselDotButton
                    key={index}
                    selected={selectedIndex === index}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <h1 className="text-3xl font-bold">{productDetails?.title}</h1>
          <p className="text-muted-foreground">{productDetails?.description}</p>
        </div>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="color" className="text-base">
              Color
            </Label>
            <RadioGroup
              id="color"
              value={selectedVariant.id.toString()}
              onValueChange={(value) => handleVariantChange(Number(value))}
              className="flex items-center gap-2"
            >
              {product.variants.map(
                (variant: { id: number; color: string }) => (
                  <Label
                    key={variant.id}
                    htmlFor={`color-${variant.id}`}
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem
                      id={`color-${variant.id}`}
                      value={variant.id.toString()}
                    />
                    {variant.color}
                  </Label>
                )
              )}
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="size" className="text-base">
              Size
            </Label>
            <RadioGroup
              id="size"
              value={selectedSize}
              onValueChange={handleSizeChange}
              className="flex items-center gap-2"
            >
              {selectedVariant.sizes.map((size: string) => (
                <Label
                  key={size}
                  htmlFor={`size-${size}`}
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id={`size-${size}`} value={size} />
                  {size}
                </Label>
              ))}
            </RadioGroup>
          </div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap items-center gap-4">
          <h2 className="text-4xl font-bold">${product.price.toFixed(2)}</h2>
          <div className="flex gap-2">
            <Button size="lg">Add to Cart</Button>
            <Button size="lg">Buy Now</Button>
          </div>
        </div>
      </div>
      {/* <div className="col-span-2">
        <Separator />
        <div className="grid gap-8 py-8">
          <div>
            <h2 className="text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {product.relatedProducts.map((relatedProduct: any) => (
                <Card key={relatedProduct.id} className="group">
                  <Link
                    href="#"
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">View {relatedProduct.name}</span>
                  </Link>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{relatedProduct.name}</h3>
                    <p className="text-muted-foreground">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Reviews</h2>
            <div className="grid gap-6 mt-4">
              {product.reviews.map((review: any) => (
                <div key={review.id} className="flex gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt={review.author}
                    />
                    <AvatarFallback>
                      {review.author.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{review.author}</h3>
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon className="w-5 h-5 fill-primary" key={i} />
                        ))}
                        {[...Array(5 - review.rating)].map((_, i) => (
                          <StarIcon
                            className="w-5 h-5 fill-muted stroke-muted-foreground"
                            key={i}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
