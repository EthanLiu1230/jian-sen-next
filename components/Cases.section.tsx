import React, { useState } from "react";
import { circulateIndex } from "./data/utils";
import {
  CarouselIndicator,
  CarouselIndicatorGroup,
} from "./carousel/CarouselIndicator";
import { CarouselButton } from "./buttons/CarouselButton";

export default function CasesSection(cases) {
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
