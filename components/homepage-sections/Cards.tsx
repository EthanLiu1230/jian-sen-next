import React from "react";
import { defaultQualification } from "../data/default-data";

interface CardProps {
  image: string;
  text: string;
}

function Card({ image, text, ...props }: CardProps) {
  return (
    <div
      className="inline-block mx-2 w-1/2 rounded-b md:mx-5 md:w-1/3 lg:w-1/4 hover:shadow-2xl md:rounded-b-2xl"
      {...props}
    >
      <div className="relative pb-2/3">
        <img
          src={image}
          alt="card img"
          className="rounded-t img-ratio md:rounded-t-2xl"
        />
      </div>
      <div className="text-left font-semibold text-sm md:text-base lg:text-xl p-2.5 lg:p-4 whitespace-normal">
        {text}
      </div>
    </div>
  );
}

export function Cards({
  cards = defaultQualification,
}: {
  cards?: CardProps[];
}) {
  return (
    <div className="container overflow-x-scroll px-4 whitespace-nowrap no-scrollbar">
      {cards.map((c, i) => (
        <Card key={i} {...c} />
      ))}
    </div>
  );
}
