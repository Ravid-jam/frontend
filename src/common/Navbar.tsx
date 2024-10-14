"use client";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { cn } from "../lib/utils";
interface MegaRoute {
  id: number;
  title: string;
  href: string;
}

interface SubCategory {
  id: number;
  title: string;
  megaRoute: MegaRoute[];
}

interface Category {
  id: number;
  title: string;
  subCategory: SubCategory[];
}

const category: Category[] = [
  {
    id: 1,
    title: "Women Ethnic",
    subCategory: [
      {
        id: 1,
        title: "Sarees",
        megaRoute: [
          {
            id: 1,
            title: "Silk Sarees",
            href: "/women-ethnic/sarees/green-stripes",
          },
          {
            id: 2,
            title: "Printed Sarees",
            href: "/women-ethnic/sarees/pink-dots",
          },
          {
            id: 3,
            title: "Cotton Silk Sarees",
            href: "/women-ethnic/sarees/blue-dots",
          },
          {
            id: 4,
            title: "Georgette Sarees",
            href: "/women-ethnic/sarees/yellow-stripes",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Men Ethnic",
    subCategory: [
      {
        id: 1,
        title: "Shirts",
        megaRoute: [
          {
            id: 1,
            title: "Cotton Shirts",
            href: "/men-ethnic/shirts/green-stripes",
          },
          {
            id: 2,
            title: "Printed Shirts",
            href: "/men-ethnic/shirts/pink-dots",
          },
          {
            id: 3,
            title: "Denim Shirts",
            href: "/men-ethnic/shirts/blue-dots",
          },
          {
            id: 4,
            title: "Flannel Shirts",
            href: "/men-ethnic/shirts/yellow-stripes",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Kids Ethnic",
    subCategory: [
      {
        id: 1,
        title: "T-Shirts",
        megaRoute: [
          {
            id: 1,
            title: "Cotton T-Shirts",
            href: "/kids-ethnic/t-shirts/green-stripes",
          },
          {
            id: 2,
            title: "Printed T-Shirts",
            href: "/kids-ethnic/t-shirts/pink-dots",
          },
          {
            id: 3,
            title: "Denim T-Shirts",
            href: "/kids-ethnic/t-shirts/blue-dots",
          },
          {
            id: 4,
            title: "Flannel T-Shirts",
            href: "/kids-eth",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Home & Garden",
    subCategory: [
      {
        id: 1,
        title: "Home Decor",
        megaRoute: [
          {
            id: 1,
            title: "Wall Art",
            href: "/home-garden/home-decor/wall-art",
          },
          {
            id: 2,
            title: "Wallpaper",
            href: "/home-garden/home-decor/wallpaper",
          },
          {
            id: 3,
            title: "Flooring",
            href: "/home-garden/home-decor/flooring",
          },
          {
            id: 4,
            title: "Rugs",
            href: "/home-garden/home-decor/rugs",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Electronics",
    subCategory: [
      {
        id: 1,
        title: "Mobile Phones",
        megaRoute: [
          {
            id: 1,
            title: "Smartphones",
            href: "/electronics/mobile-phones/smartphones",
          },
          {
            id: 2,
            title: "Tablets",
            href: "/electronics/mobile-phones/tablets",
          },
          {
            id: 3,
            title: "Accessories",
            href: "/electronics/mobile-phones/accessories",
          },
          {
            id: 4,
            title: "Headphones",
            href: "/electronics/mobile-phones/headphones",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Books & Magazines",
    subCategory: [
      {
        id: 1,
        title: "Books",
        megaRoute: [
          {
            id: 1,
            title: "Fiction",
            href: "/books-magazines/books/fiction",
          },
          {
            id: 2,
            title: "Non-Fiction",
            href: "/books-magazines/books/non-fiction",
          },
          {
            id: 3,
            title: "Children's Books",
            href: "/books-magazines/books/childrens-books",
          },
          {
            id: 4,
            title: "Business & Finance",
            href: "/books-magazines/books/business-finance",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Clothing & Accessories",
    subCategory: [
      {
        id: 1,
        title: "Clothing",
        megaRoute: [
          {
            id: 1,
            title: "Women's Clothing",
            href: "/clothing-accessories/clothing/women",
          },
          {
            id: 2,
            title: "Men's Clothing",
            href: "/clothing-accessories/clothing/men",
          },
          {
            id: 3,
            title: "Kids' Clothing",
            href: "/clothing-accessories/clothing/kids",
          },
          {
            id: 4,
            title: "Home & Garden Clothing",
            href: "/clothing-accessories/clothing/home-garden",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Groceries & Essentials",
    subCategory: [
      {
        id: 1,
        title: "Groceries",
        megaRoute: [
          {
            id: 1,
            title: "Breakfast",
            href: "/groceries-essentials/groceries/breakfast",
          },
          {
            id: 2,
            title: "Lunch & Dinner",
            href: "/groceries-essentials/groceries/lunch-dinner",
          },
          {
            id: 3,
            title: "Snacks",
            href: "/groceries-essentials/groceries/snacks",
          },
          {
            id: 4,
            title: "Meat & Poultry",
            href: "/groceries-essentials/groceries/meat-poultry",
          },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isActive, setIsActive] = React.useState<number | null>(null);

  return (
    <div className=" gap-6  px-5">
      <NavigationMenu
        onMouseLeave={() => setIsActive(null)}
        className="[&_div.absolute]:w-full"
      >
        <NavigationMenuList>
          {category.map((item: Category, index: number) => (
            <NavigationMenuItem key={item.id}>
              <div className="relative group">
                <NavigationMenuTrigger
                  className={`hide-trigger hover:!bg-transparent  font-normal rounded-none ${
                    isActive === index ? "!text-[#004AAC]" : ""
                  }`}
                  aria-expanded="false"
                  data-state="closed"
                  style={{ backgroundImage: "none" }}
                  onMouseEnter={() => setIsActive(index)}
                >
                  <NavigationMenuLink className="!bg-transparent !font-serif hover:!bg-transparent focus:!bg-transparent after:content-none !text-base ">
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuTrigger>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#014aad] transition-all ${
                    isActive === index ? "w-full" : "w-0"
                  } 
                `}
                ></span>
              </div>

              <NavigationMenuContent
                onMouseLeave={() => setIsActive(null)}
                className="mega-content"
              >
                <div className="grid  gap-3 p-4">
                  {item.subCategory.map((subItem: SubCategory) => (
                    <div key={subItem.id}>
                      <h3 className="text-base font-serif font-bold mb-2 text-[#014aad]">
                        All {subItem.title}
                      </h3>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {subItem.megaRoute.map((route: MegaRoute) => (
                          <ListItem
                            key={route.id}
                            className="text-sm !font-bold !font-serif !p-0 hover:text-[#014aad] !bg-transparent leading-none"
                            title={route.title}
                            href={route.href}
                          ></ListItem>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
