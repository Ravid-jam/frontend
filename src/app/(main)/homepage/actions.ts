"use server";

import axios from "axios";

export async function getProducts() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/getAllProducts`
  );
  return response?.data;
}
