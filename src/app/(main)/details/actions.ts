"use server";

import axios from "axios";

export async function getSingleProduct(slug: string) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/singleProduct/${slug}`
  );
  return response?.data;
}
