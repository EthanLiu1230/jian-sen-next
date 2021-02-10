import React from "react";
import { defaultImages } from "../../data/default-data";
import { Cta } from "./Cta";
import { HeroCarousel } from "./HeroCarousel";

interface Props {
  hero?: { title: string; text: string };
  cta?: { href: string; text: string };
  images?: string[];
}

const defaultProps = {
  hero: {
    title: "hero title",
    text: `MATOA Way Kambas - This wood is chosen to represent the 
    Sumatran Rhino's skin which is designed with an overlap effect on its strap 
    to represent Rhino's skin.`,
  },
  cta: {
    text: "SEE PRODUCTS",
    href: "#",
  },
  images: defaultImages,
};

export function Hero(props: Props) {
  return (
    <div className="container grid grid-cols-1 pt-4 px-4 md:pt-20 lg:pt-28 md:grid-cols-2">
      {/*left*/}
      <div
        className="text-center md:text-left
      w-4/5 mx-auto md:ml-0
      pt-20 md:pt-2 lg:pt-12"
      >
        <h1 className="mb-4 leading-tight">{props.hero.title}</h1>
        <p className="mb-8 leading-relaxed">{props.hero.text}</p>
        <a href={props.cta.href}>
          <Cta>{props.cta.text}</Cta>
        </a>
      </div>
      {/*right*/}
      <div className="hidden justify-self-end self-end w-11/12 md:block">
        <HeroCarousel images={props.images} />
      </div>
    </div>
  );
}

Hero.defaultProps = defaultProps;
