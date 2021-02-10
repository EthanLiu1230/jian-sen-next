import React, { useState } from "react";
import { IconSofa } from "./product-icons/IconSofa";
import { Product, defaultProducts } from "./products";

function ProductLink({
  Icon = IconSofa,
  text = "text",
  onMouseOver,
  ...props
}: {
  Icon: React.FC;
  text: string;
  onMouseOver: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
  return (
    <a
      {...props}
      onMouseOver={onMouseOver}
      className="flex flex-col items-center py-2 justify-around md:border-2 rounded-lg
        transform transition duration-300 hover:-translate-y-0.5
        hover:bg-primary hover:text-white hover:border-primary
        hover:shadow-xl
       "
    >
      <div className="w-7">
        <Icon />
      </div>
      <p>{text}</p>
    </a>
  );
}

export function Products({
  products = defaultProducts,
}: {
  products?: Product[];
}) {
  const [cur, setCur] = useState<number>(0);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      {/*left*/}
      <div className="hidden relative place-self-center w-3/4 md:block">
        {/* product image */}
        <div className="relative pb-3/5">
          <img
            src={products[cur].image}
            alt="product left image"
            className="rounded-3xl img-ratio"
          />
        </div>
        {/* rotated rectangle */}
        <div
          className="absolute top-0 left-0
              w-full h-full rounded-6xl -z-10 bg-light
              transform scale-110 rotate-6"
        />
      </div>
      {/*right*/}
      <div
        className="w-5/6 justify-self-center grid grid-cols-3 grid-rows-2 md:grid-cols-2 md:grid-rows-3
              gap-x-5 gap-y-3 md:gap-x-7 md:gap-y-5 lg:gap-x-10 lg:gap-y-8"
      >
        {products.map((p, i) => (
          <ProductLink onMouseOver={() => setCur(i)} key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
