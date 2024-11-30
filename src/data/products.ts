import { Product } from "../app/homepage/components/Product";

export const products: Product[] = [
  {
    id: "1",
    category: "Cosmetics",
    name: "Mamaearth Creamy Matte Long Stay Lipstick with Murumuru Butter and Vitamin E for 8-Hour Long Stay (Flakeproof & Non-Drying | Intense Color Payoff) - 4.2g (Rose Nude)",
    brand: "Maybelline",
    price: 298,
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1613255348289-1407e4f2f980?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1610844228349-76b56e6ac462?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611605472181-7962c1c85ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "This Maybelline lipstick provides a smooth, long-lasting color for all-day wear with a moisturizing formula.",
    color: [
      {
        id: "1",
        name: "Black",
        code: "#000000",
      },
      {
        id: "2",
        name: "White",
        code: "#ffffff",
      },
      {
        id: "3",
        name: "Pink",
        code: "#ff00ff",
      },
    ],
  },
  {
    id: "2",
    category: "Cosmetics",
    name: "Foundation",
    brand: "L'Oreal",
    price: 15.99,
    rating: 4.7,
    images: [
      "https://plus.unsplash.com/premium_photo-1679750866885-d3b7d2177711?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1527633412983-d80af308e660?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1703343320234-4c1a75b3ff13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "L'Oreal's lightweight foundation blends seamlessly to give you a natural, flawless complexion.",
  },
  {
    id: "3",
    category: "Cosmetics",
    name: "Mascara",
    brand: "Benefit",
    price: 22.5,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1650664370914-f026578ec2a4?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Benefit mascara lengthens and volumizes your lashes for a dramatic and bold look.",
    color: [
      {
        id: "1",
        name: "Black",
        code: "#000000",
      },
      {
        id: "2",
        name: "White",
        code: "#ffffff",
      },
      {
        id: "3",
        name: "Red",
        code: "#ff0000",
      },
      {
        id: "4",
        name: "Pink",
        code: "#ff00ff",
      },
    ],
  },
  {
    id: "4",
    category: "Home and Kitchen",
    name: "Blender",
    brand: "Ninja",
    price: 89.99,
    rating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1577495917765-9497a0de7caa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1717749801344-8ed38d55aead?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "This powerful Ninja blender can crush ice and blend smoothies with ease, making it a kitchen essential.",
  },
  {
    id: "5",
    category: "Home and Kitchen",
    name: "Non-stick Frying Pan",
    brand: "T-fal",
    price: 25.99,
    rating: 4.4,
    images: [
      "https://images.unsplash.com/photo-1608019526927-c4ea27a542a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1592771584685-c3c2edcd5c31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "Cook like a pro with this durable T-fal non-stick frying pan, perfect for easy cooking and cleaning.",
  },
  {
    id: "6",
    category: "Home and Kitchen",
    name: "Electric Kettle",
    brand: "Cuisinart",
    price: 39.99,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1647619124290-10fb9273b4b5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1643114786355-ff9e52736eab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571552879083-e93b6ea70d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "The Cuisinart electric kettle is designed to heat water quickly and efficiently for your favorite beverages.",
  },
  {
    id: "7",
    category: "Clothes",
    name: "T-Shirt",
    brand: "H&M",
    price: 9.99,
    rating: 4.3,
    images: [
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522706604291-210a56c3b376?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    size: [
      {
        id: "1",
        size: "M",
        stock: 10,
      },
      {
        id: "2",
        size: "L",
        stock: 5,
      },
      {
        id: "3",
        size: "XL",
        stock: 8,
      },
      {
        id: "4",
        size: "XXL",
        stock: 3,
      },
    ],

    description:
      " A comfortable cotton T-shirt from H&M, perfect for casual wear.",
    color: [
      {
        id: "4",
        name: "Pink",
        code: "#ff00ff",
      },
      {
        id: "5",
        name: "Blue",
        code: "#0000ff",
      },
      {
        id: "6",
        name: "Black",
        code: "#000000",
      },
    ],
  },
  {
    id: "8",
    category: "Clothes",
    name: "KETCH Men Skinny Fit Mid-Rise Jeans (Stretchable)",
    brand: "Levi's",
    price: 683,
    rating: 2.5,
    images: [
      "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1623120389902-6c846c80f4c8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1608613517869-07b097abbcf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    size: [
      {
        id: "1",
        size: "S",
        stock: 15,
      },
      {
        id: "2",
        size: "M",
        stock: 10,
      },
      {
        id: "3",
        size: "L",
        stock: 12,
      },
      {
        id: "4",
        size: "XL",
        stock: 8,
      },
    ],
    description:
      "Classic Levi's jeans with a comfortable fit, ideal for everyday wear.Stylish and comfortable Nike sneakers designed for all-day wear.",
    color: [
      {
        id: "1",
        name: "Black",
        code: "#000000",
      },
      {
        id: "2",
        name: "White",
        code: "#ffffff",
      },
    ],
  },
  {
    id: "9",
    category: "Clothes",
    name: "Sneakers",
    brand: "Nike",
    price: 79.99,
    rating: 4.6,
    images: [
      "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1579446650032-86effeeb3389?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    size: [
      {
        id: "1",
        size: "32",
        stock: 20,
      },
      {
        id: "2",
        size: "34",
        stock: 18,
      },
      {
        id: "3",
        size: "36",
        stock: 16,
      },
      {
        id: "4",
        size: "38",
        stock: 14,
      },
    ],
    description:
      "Stylish and comfortable Nike sneakers designed for all-day wear.",
    color: [
      {
        id: "1",
        name: "Black",
        code: "#000000",
      },
      {
        id: "2",
        name: "White",
        code: "#ffffff",
      },
      {
        id: "3",
        name: "Red",
        code: "#ff0000",
      },
      {
        id: "4",
        name: "Blue",
        code: "#0000ff",
      },
      {
        id: "5",
        name: "Green",
        code: "#00ff00",
      },
    ],
  },
];
