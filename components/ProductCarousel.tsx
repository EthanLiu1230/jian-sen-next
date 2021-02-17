import cn from "classnames";
import React from "react";
import { useState } from "react";
import { IMAGE, IMAGES } from "../DUMMY";

export function SquareImage({
  ring = false,
  src = IMAGE,
}: {
  ring?: boolean;
  src?: string;
}) {
  return (
    <div
      className={cn("overflow-hidden relative w-9 h-9 rounded flex-none", {
        "ring-2 ring-primary ring-offset-4": ring,
      })}
    >
      <img src={src} alt="" className="img-ratio" />
    </div>
  );
}

export function ProductCarousel({ images = IMAGES }: { images?: string[] }) {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  return (
    <div className="max-w-screen-sm">
      <div className="overflow-hidden relative h-96 rounded-xl">
        <img src={mainImage} alt="" className="img-ratio" />
      </div>
      <div className="flex flex-wrap gap-4 py-4">
        {images.map((image, index) => (
          <button key={index} onClick={() => setMainImage(image)}>
            <SquareImage src={image} ring={image === mainImage} />
          </button>
        ))}
      </div>
    </div>
  );
}
