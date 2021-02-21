import React, { useState } from "react";
import { Cases } from "../components/homepage-sections/Cases";

import { Header } from "../components/Header";
import { Box } from "../components/atomic/Box";
import { HeroCarousel } from "../components/carousel/HeroCarousel";
import { IMAGES, PRODUCTS } from "../DUMMY";
import { IconSofa } from "../public/product-icons/IconSofa";

export default function HomePage() {
  function Hero() {
    return (
      <div className="container grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
        <div className="flex flex-col gap-6 place-self-center w-3/4 text-center md:text-left lg:gap-8">
          <h1 className="text-2xl font-bold lg:text-4xl lg:font-extrabold">
            JIANSEN <br /> Office Furniture
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            animi cum dignissimos dolorum eveniet ex harum hic in ipsam
            laboriosam neque nisi, non numquam qui quia ratione repudiandae,
            sequi voluptatum.
          </p>
          <button className="flex place-self-center md:place-self-start">
            <Box variant="filled">
              <div className="py-3 px-6 text-sm lg:px-12">See Product</div>
            </Box>
          </button>
        </div>
        <div className="hidden place-self-center w-3/4 md:block">
          <HeroCarousel images={IMAGES} />
        </div>
      </div>
    );
  }

  function ProductCategory({
    products = PRODUCTS,
  }: {
    products?: {
      Icon: React.FC;
      text: string;
      href: string;
      image: string;
    }[];
  }) {
    const [cur, setCur] = useState<number>(0);

    function ProductLink({
      Icon = IconSofa,
      text = "text",
      onMouseOver,
      ...props
    }: {
      Icon: React.FC;
      text: string;
      onMouseOver: (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
      ) => void;
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

    return (
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {/*left*/}
        <div className="relative place-self-center w-3/4">
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

  return (
    <>
      <Header />

      <div className="pt-16 space-y-16">
        <Hero />
        <ProductCategory />
        <Cases />
      </div>
    </>
  );
}
