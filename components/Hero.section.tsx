import { Box } from "./styles/Box";
import { HeroCarousel } from "./carousel/HeroCarousel";
import React from "react";

export default function HeroSection({
  content,
}: {
  content: { images: string[]; title: string; description: string };
}) {
  return (
    <div className="container grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
      <div className="flex flex-col gap-6 place-self-center w-3/4 text-center md:text-left lg:gap-8">
        <h1 className="text-2xl font-extrabold lg:text-4xl">
          JIANSEN <br /> Office Furniture
        </h1>
        <p>{content.description}</p>
        <button className="flex place-self-center md:place-self-start">
          <Box variant="filled">
            <div className="py-3 px-6 text-sm lg:px-12">Explore More</div>
          </Box>
        </button>
      </div>
      <div className="hidden place-self-center w-4/5 md:block">
        <HeroCarousel images={content.images} />
      </div>
    </div>
  );
}
