import React from "react";
import { Products } from "../components/sections/Products";
import { Cases } from "../components/sections/Cases";
import { Hero } from "../components/sections/Hero";
import { Cards as Qualification } from "../components/sections/Cards";
import { SectionTitle } from "../components/atomic/SectionTitle";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <SectionTitle text="Our Products" />
      <Products />

      <SectionTitle text="Our Cases" />
      <Cases />

      <SectionTitle text="Qualification" />
      <Qualification />
    </>
  );
}
