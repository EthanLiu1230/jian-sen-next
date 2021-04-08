import { defaultImages } from "../data/default-data";
import React, { useState } from "react";
import { circulateIndex } from "../data/utils";
import {
  CarouselIndicator,
  CarouselIndicatorGroup,
} from "./CarouselIndicator";

export function HeroCarousel({ images = defaultImages }: { images: string[] }) {
  const [cur, setCur] = useState(0);

  const ci = circulateIndex(images.length);
  const at = (i: number) => images[ci(i)];

  return (
    <div className="relative">
      <div className="relative pb-3/4">
        {/* Indicator */}
        <CarouselIndicatorGroup
          vertical
          className="absolute top-1/2 transform md:-left-6 lg:-left-9 -translate-y-4/5"
        >
          {images.map((_, i) => (
            <button key={i} className="m-0.5" onClick={() => setCur(i)}>
              <CarouselIndicator active={i === cur} />
            </button>
          ))}
        </CarouselIndicatorGroup>
        {/* cur image */}
        <img src={at(cur)} alt="big" className="rounded-3xl img-ratio" />
      </div>
      <div className="absolute bottom-0 z-10 w-2/5 -left-1/5">
        <div className="relative pb-2/3">
          {/* next image */}
          <img
            src={at(cur + 1)}
            alt="small"
            className="rounded-2xl img-ratio"
          />
          {/* right button */}
          <button
            onClick={() => setCur(ci(cur + 1))}
            className="absolute z-20 md:-bottom-4 md:-right-4 lg:-bottom-8 lg:-right-8 focus:outline-none"
          >
            <svg
              className="md:w-9 lg:w-16"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32.0328" cy="32.25" r="32" fill="#E4AB81" />
              <path
                d="M28.033 22.9166L37.3663 32.25L28.033 41.5833"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
