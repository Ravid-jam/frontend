import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import AddToCart from "@/src/common/AddToCart";
import ProductCarousel from "@/src/common/ProductCarousel";
import { useRouter } from "next/navigation";
import { Product } from "./Product";

type Props = {
  row: Product;
};

export default function ProductItem({ row }: Props) {
  const router = useRouter();

  return (
    <Card className="p-0 h-full">
      <CardHeader className="p-0 h-22">
        <ProductCarousel slides={row.images} />
      </CardHeader>
      <CardContent className="py-1 px-2">
        <h3
          className="text-base font-serif text-[#8A8AA2] cursor-pointer hover:underline line-clamp-2 h-12"
          onClick={() => router.push(`/details/${row.slug}`)}
        >
          {row?.title}
        </h3>
        <div>
          <p className="text-lg font-bold font-mono text-gray-600 line-through">
            ₹{row.price}
          </p>
          <p className="text-2xl font-bold font-mono text-[#353543]">
            ₹{row.totalPrice}
          </p>
        </div>
        <div className="flex items-center flex-wrap md:flex-nowrap gap-2 my-3">
          <div className="flex items-center p-2 bg-[#23BB75] text-white border rounded-full">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold font-mono">{row.rating}</p>
          </div>
          <a
            href="#"
            className="text-sm sm:text-base font-medium text-gray-500 hover:underline"
          >
            {row.rating} Reviews
          </a>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-end px-2 pb-3">
        <AddToCart product={row} />
      </CardFooter>
    </Card>
  );
}
