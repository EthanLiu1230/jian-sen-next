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

export default function HomePage({
  hero,
  cases,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  function Hero() {
    return (
      <div className="container grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
        <div className="flex flex-col gap-6 place-self-center w-3/4 text-center md:text-left lg:gap-8">
          <h1 className="text-2xl font-extrabold lg:text-4xl">
            JIANSEN <br /> Office Furniture
          </h1>
          <p>{hero.description}</p>
          <button className="flex place-self-center md:place-self-start">
            <Box variant="filled">
              <div className="py-3 px-6 text-sm lg:px-12">Explore More</div>
            </Box>
          </button>
        </div>
        <div className="hidden place-self-center w-4/5 md:block">
          <HeroCarousel images={hero.images} />
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
          className="flex flex-col items-center py-2 justify-around md:border-2 rounded-lg transform transition duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:border-primary hover:shadow-xl"
        >
          <div className="w-7">
            <Icon />
          </div>
          <p>{text}</p>
        </a>
      );
    }

    return (
      <div className="container grid grid-cols-1 gap-14 md:grid-cols-2">
        {/*left*/}
        <div className="relative place-self-center w-4/5">
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
        <div className="grid grid-cols-3 grid-rows-2 gap-y-3 gap-x-5 place-self-center w-4/5 md:grid-cols-2 md:grid-rows-3 md:gap-x-7 md:gap-y-5 lg:gap-x-10 lg:gap-y-8">
          {products.map((p, i) => (
            <ProductLink onMouseOver={() => setCur(i)} key={i} {...p} />
          ))}
        </div>
      </div>
    );
  }

  function Cases() {
    const [cur, setCur] = useState(0);

    const ci = circulateIndex(cases.length);
    const at = (i) => cases[ci(i)];

    const renderIndicators = cases.map((_, i) => (
      <button onClick={() => setCur(i)} key={i} className="mr-2 lg:mr-4">
        <CarouselIndicator active={i === cur} />
      </button>
    ));

    return (
      <div className="relative py-6 md:py-10">
        {/* content */}
        <div className="container px-4 mx-auto w-4/5 lg:w-full md:grid md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3">
          {/* current image */}
          <div className="relative md:col-start-2">
            <div className="relative pb-4/5 lg:pb-13/10">
              <img
                src={at(cur).images[0]}
                alt="i"
                className="rounded-3xl img-ratio"
              />
              <CarouselButton
                onClick={() => setCur(ci(cur - 1))}
                className="absolute top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 lg:hidden"
                left
              />
              <CarouselButton
                onClick={() => setCur(ci(cur + 1))}
                className="absolute right-0 top-1/2 z-10 transform translate-x-1/2 -translate-y-1/2 lg:hidden"
              />
            </div>
            {/* indicators sm, md */}
            <CarouselIndicatorGroup className="mx-auto mt-2 w-min lg:hidden">
              {renderIndicators}
            </CarouselIndicatorGroup>
          </div>
          {/* text */}
          <div className="text-left md:col-start-1 md:row-start-1 md:self-center md:w-4/5">
            <h3 className="mt-7 mb-4 text-xl font-bold md:mt-0 lg:text-2xl">
              {at(cur).title}
            </h3>
            <p>{at(cur).description}</p>
          </div>
          {/*   next image */}
          <div className="hidden lg:block">
            <div className="px-8">
              <div className="relative pb-13/10">
                <img
                  src={at(cur + 1).images[0]}
                  alt="img"
                  className="rounded-3xl img-ratio"
                />
                <CarouselButton
                  onClick={() => setCur(ci(cur + 1))}
                  className="hidden absolute right-0 top-1/2 z-10 transform translate-x-1/2 -translate-y-1/2 lg:flex"
                />
              </div>
              {/* IC large */}
              <CarouselIndicatorGroup className="mt-8 w-min">
                {renderIndicators}
              </CarouselIndicatorGroup>
            </div>
          </div>
        </div>
        {/* colored background */}
        <div className="absolute bottom-0 w-full h-full rounded-t-3xl -z-10 bg-light md:rounded-none" />
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="pt-16 space-y-32">
        <Hero />
        <ProductCategory />
        <Cases />
      </div>
    </>
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
