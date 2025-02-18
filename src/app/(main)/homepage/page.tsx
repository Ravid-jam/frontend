import Hero from "@/src/common/Hero";
import React from "react";
import Product from "./components/Product";

export default function Homepage() {
  return (
    <React.Fragment>
      <Hero />
      <div className="max-w-full lg:max-w-screen-2xl  lg:mx-auto">
        <Product />
      </div>
    </React.Fragment>
  );
}
