import React from "react";
import { ProductCategory } from "../components/sections/Products";
import { Cases } from "../components/sections/Cases";

import { Header } from "../components/Header";
import { HeroCarousel } from "../components/carousel/HeroCarousel";
import { IMAGES } from "../DUMMY";

export default function Home() {
  return (
    <>
      <Header />
      {/* HERO */}
      <div className="container grid grid-cols-1 px-4 pt-4 md:pt-20 lg:pt-28 md:grid-cols-2 mb-14">
        <div className="pt-20 mx-auto w-4/5 text-center md:text-left md:ml-0 md:pt-2 lg:pt-12">
          <h1 className="mb-4 leading-tight">Hero Title</h1>
          <p className="mb-8 leading-relaxed text-base">
            This wood is chosen to represent the Sumatran Rhino's skin which is
            designed with an overlap effect on its strap to represent Rhino's
            skin.
          </p>
          <a href="">see product</a>
        </div>
        {/*right*/}
        <div className="hidden justify-self-end self-end w-11/12 md:block">
          <HeroCarousel images={IMAGES} />
        </div>
      </div>
      <ProductCategory />

      <Cases />
    </>
  );
}
