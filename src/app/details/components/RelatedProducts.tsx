import Image from "next/image";
import Link from "next/link";

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

const mockRelatedProducts: RelatedProduct[] = [
  {
    id: "1",
    name: "Related Product 1",
    price: 79.99,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Related Product 2",
    price: 89.99,
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Related Product 3",
    price: 69.99,
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Related Product 4",
    price: 99.99,
    image: "/placeholder.svg",
  },
];

export function RelatedProducts({
  category,
  subCategory,
}: {
  category: string;
  subCategory?: string;
}) {
  // In a real application, you would fetch related products based on the category and subCategory
  const relatedProducts = mockRelatedProducts;
  console.log(category, subCategory);
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group"
          >
            <div className="relative aspect-square mb-2 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
