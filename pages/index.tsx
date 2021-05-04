import React from "react";

import { GetStaticProps } from "next";
import faker from "faker";
import { range } from "lodash";
import { getLinkGroups } from "../client/graphiti/props.provider";
import { Header } from "../components/Header";
import HeroSection from "../components/Hero.section";
import ProductsSection from "../components/Products.section";

export default function HomePage({ hero, cases, header }) {
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

export const getStaticProps: GetStaticProps = async () => {
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
