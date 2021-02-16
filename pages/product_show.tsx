import React from "react";
import { hold_img } from "./dev";
import { ProductCarousel, SquareImage } from "../components/ProductCarousel";

export default function product_show() {
  return (
    <div className="container py-4 px-4 pt-28">
      <ProductCarousel />
    </div>
  );
}
