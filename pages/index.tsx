import React from "react";
import { ProductCategory } from "../components/sections/Products";
import { Cases } from "../components/sections/Cases";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      {/* HERO */}

      <ProductCategory />

      <Cases />
    </>
  );
}
