"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import ProductCarousel from "./ProductCarousel";
import CategoryGrid from "./Category";
export const products = [
  {
    img: [
      "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
    ],
  },
  {
    img: [
      "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
    ],
  },
  {
    img: [
      "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
    ],
  },
  {
    img: [
      "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
    ],
  },
  {
    img: [
      "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
    ],
  },
  {
    img: [
      "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
    ],
  },
  {
    img: [
      "https://juniperfashion.com/cdn/shop/files/Juniper_Peach_Cotton_Tribal_Print_Crushed_Anarkali_Kurta_With_Pant_Dupatta_Set_With_Kantha_Work_Button_-2164400.jpg?v=1722842940&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4374MUSTARD-13_334c9184-5092-46f7-ad6e-c24109f27f10.jpg?v=1712725485&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4354PEACH-7_73091204-78b4-4a96-999e-6e408d9cf53d.jpg?v=1712665508&width=300",
      "https://juniperfashion.com/cdn/shop/files/S4388CORAL-8_c1414c87-99c1-4420-bd1f-902501f58231.jpg?v=1712726955&width=300",
    ],
  },
];

export default function Product() {
  return (
    <div className="md:p-5  p-2">
      <CategoryGrid />
      <div className="my-5 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold leading-[1.1] md:text-3xl">
            Featured products
          </h2>
          <div>
            <p className="max-w-[46.875rem] text-balance text-sm leading-normal text-muted-foreground sm:text-base sm:leading-7">
              Explore products from around the world
            </p>
          </div>
        </div>
        <div className="sm:block hidden">
          <Button variant="outline">
            View all products <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="sm:hidden block">
          <Button variant="outline">
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid gap-3 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1">
        {products?.map((row, index) => (
          <div key={index}>
            <Card className=" !p-0">
              <CardHeader className="!p-0">
                <ProductCarousel slides={row.img} />
              </CardHeader>
              <CardContent className="!p-2">
                <div className="flex justify-between">
                  <h3 className="font-[550] text-base truncate w-28">
                    Product Name
                  </h3>
                  <p>Price: $100</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-x-2 !p-3">
                <div className="flex-1">
                  <Button className="w-full !bg-[#004AAC]">Add To Cart</Button>
                </div>
                <div>
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
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
