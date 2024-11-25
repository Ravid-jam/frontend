import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ProductCarousel from "@/src/common/ProductCarousel";
import { useRouter } from "next/navigation";
import { Product } from "./Product";

type Props = {
  row: Product;
};

export default function ProductItem({ row }: Props) {
  const router = useRouter();
  return (
    <Card className="!p-0 ">
      <CardHeader className="!p-0 !h-22">
        <ProductCarousel slides={row.images} />
      </CardHeader>
      <CardContent className="!py-1 !px-2">
        <div>
          <h3
            className="text-base line-clamp-2  font-serif cursor-pointer hover:underline text-[#8A8AA2] w-auto"
            onClick={() => router.push(`/details/${row.id}`)}
          >
            {row?.title}
          </h3>
          <div className="">
            <p className="text-lg font-bold font-mono text-gray-600 line-through">
              <span className="text-lg">₹</span>
              {row.discountPercentage}
            </p>
            <p className="text-[#353543] font-bold text-2xl font-mono">
              <span className="text-2xl">₹</span>
              {row.price}
            </p>
          </div>
          <div className="flex items-center md:flex-nowrap flex-wrap gap-2 my-3">
            <div className="flex items-center border rounded-full p-2 bg-[#23BB75]">
              <svg
                className="w-4 h-4 text-white me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 font-mono text-sm font-bold text-white">
                {row.rating}
              </p>
            </div>
            <a
              href="#"
              className="sm:text-base text-sm font-medium font-sans text-gray-500 hover:underline dark:text-white"
            >
              {row.reviews.length} Reviews
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-x-2 !pt-1 !px-2 !pb-3">
        <div className="flex-1">
          <Button className="w-full !bg-[#004AAC]">Add To Cart</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
