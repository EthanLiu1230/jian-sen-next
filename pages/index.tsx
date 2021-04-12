import React, { useState } from "react";

import { Box } from "../components/styles/Box";
import { HeroCarousel } from "../components/carousel/HeroCarousel";
import { PRODUCTS } from "../DUMMY";
import { IconSofa } from "../public/product-icons/IconSofa";
import { circulateIndex } from "../components/data/utils";
import {
  CarouselIndicator,
  CarouselIndicatorGroup,
} from "../components/carousel/CarouselIndicator";
import { CarouselButton } from "../components/buttons/CarouselButton";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import faker from "faker";
import { range } from "lodash";
import { Nav } from "../components/Header/Nav";
import { Header } from "../components/Header";
import HeroSection from "../components/Hero.section";
import ProductsSection from "../components/Products.section";
import CasesSection from "../components/Cases.section";

export default function HomePage({
  hero,
  cases,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Header />
      <div className="pt-16 space-y-32">
        <HeroSection content={hero} />
        <ProductsSection />
        {/*<CasesSection cases={cases} />*/}
      </div>
    </div>
  );
}

interface Article {
  title: string;
  description: string;
  images: string[];
}

const generateArticle = (): Article => {
  return {
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    images: range(faker.random.number({ min: 3, max: 6 })).map(() =>
      faker.image.image()
    ),
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // ...
  return {
    props: {
      hero: generateArticle(),
      cases: range(faker.random.number({ min: 3, max: 6 })).map(() =>
        generateArticle()
      ),
    },
  };
};
