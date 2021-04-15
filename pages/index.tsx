import React from "react";

import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import faker from "faker";
import { range } from "lodash";
import { Header } from "../components/Header";
import HeroSection from "../components/Hero.section";
import ProductsSection from "../components/Products.section";
import { getLinkGroups } from "../client/get-props";

export default function HomePage({
  hero,
  cases,
  header,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Header {...header} />
      <div className="pt-16 space-y-32">
        <HeroSection content={hero} />
        <ProductsSection />
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // ...
  const linkGroups = await getLinkGroups();

  return {
    props: {
      header: {
        linkGroups,
      },
      hero: generateArticle(),
      cases: range(faker.random.number({ min: 3, max: 6 })).map(() =>
        generateArticle()
      ),
    },
  };
};
