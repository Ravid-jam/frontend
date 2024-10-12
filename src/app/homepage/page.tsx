import Hero from "@/src/common/Hero";
import React from "react";
import Product from "./components/Product";

export default function Homepage() {
  return (
    <React.Fragment>
      <Hero />
      <Product />
    </React.Fragment>
  );
}
