"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ProductCarousel from "@/src/common/ProductCarousel";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Filter from "./Filter";
// export const products = [
//   {
//     id: 1,
//     title: "Princess Elegant Jewellery Sets",
//     img: [
//       "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
//     ],
//     price: 1500,
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     title: "Fashionable Anarkali Kurta",
//     img: [
//       "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=172284",
//       "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
//     ],
//     price: 1200,
//     rating: 4.2,
//   },
//   {
//     id: 3,
//     title: "Sophisticated Anarkali Kurta",
//     img: [
//       "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=172284",
//       "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
//     ],
//     price: 1800,
//     rating: 4.7,
//   },
//   {
//     id: 4,
//     title: "Exquisite Anarkali Kurta",

//     img: [
//       "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=172284",
//       "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
//     ],
//     price: 2000,
//     rating: 4.9,
//   },
//   {
//     id: 5,
//     title: "Elegant Anarkali Kurta",

//     img: [
//       "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
//     ],
//     price: 1800,
//     rating: 4.8,
//   },
//   {
//     id: 6,
//     title: "Elegant Anarkali Kurta",

//     img: [
//       "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
//     ],
//     price: 1700,
//     rating: 4.6,
//   },
//   {
//     id: 7,
//     title: "Elegant Anarkali Kurta",
//     img: [
//       "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
//       "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
//     ],
//     price: 1600,
//     rating: 4.7,
//   },
// ];

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // Use Date if you convert to Date type later
    updatedAt: string; // Use Date if you convert to Date type later
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // Use Date if you convert to Date type later
  reviewerName: string;
  reviewerEmail: string;
}
interface IProduct {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}

export default function Product() {
  const router = useRouter();
  const [products, setProducts] = useState<IProduct>();

  useEffect(() => {
    function getProducts() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((response) => response)
        .then((data) => setProducts(data));
    }

    getProducts();
  }, []);
  return (
    <div className="md:px-4   flex">
      <Filter />
      <div className="w-full lg:w-3/2">
        <div className="my-5 flex justify-between items-center sm:px-0 px-2">
          <div>
            <h2 className="text-2xl font-bold font-serif leading-[1.1] md:text-3xl">
              Products For You
            </h2>
            <p className="max-w-[46.875rem] text-sm leading-normal text-muted-foreground">
              Explore products from around the world
            </p>
          </div>
        </div>

        <div className="grid gap-3 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:px-0 px-2">
          {products?.products?.map((row: Product, index: number) => (
            <div key={index}>
              <Card className="!p-0 ">
                <CardHeader className="!p-0 !h-22">
                  <ProductCarousel slides={row.images} />
                </CardHeader>
                <CardContent className="!py-1 !px-2">
                  <div>
                    <h3
                      className="text-base font-serif truncate cursor-pointer hover:underline text-[#8A8AA2] w-full"
                      onClick={() => router.push(`/details/${row.id}`)}
                    >
                      {row.title}
                    </h3>
                    <div className="">
                      <p className="text-lg font-bold font-mono text-gray-600 line-through">
                        <span className="text-base">₹</span>
                        {row.discountPercentage}
                      </p>
                      <p className="text-[#353543] font-bold text-2xl font-mono">
                        <span className="text-lg">₹</span>
                        {row.price}
                      </p>
                    </div>
                    <div className="flex items-center my-3">
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
                      <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
                      <a
                        href="#"
                        className="text-base font-medium font-sans text-gray-500 hover:underline  dark:text-white"
                      >
                        {row.reviews.length} Reviews
                      </a>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-x-2 !pt-1 !px-2 !pb-3">
                  <div className="flex-1">
                    <Button className="w-full !bg-[#004AAC]">
                      Add To Cart
                    </Button>
                  </div>
                  {/* <div>
                    <Button variant="outline">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                  </div> */}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
