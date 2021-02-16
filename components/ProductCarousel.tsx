import cn from "classnames";
import { hold_img } from "../pages/dev";
import React from "react";

export function SquareImage({ ring = false }: { ring?: boolean }) {
  return (
    <div
      className={cn("overflow-hidden relative w-9 h-9 rounded flex-none", {
        "ring-2 ring-primary ring-offset-4": ring,
      })}
    >
      <img src={hold_img} alt="" className="img-ratio" />
    </div>
  );
}
export function ProductCarousel({ images }: { images?: string[] }) {
  return (
    <>
      <div className="overflow-hidden relative max-w-screen-sm h-96 rounded-xl">
        <img src={hold_img} alt="" className="img-ratio" />
      </div>
      <div className="flex flex-wrap gap-4 py-4">
        <SquareImage />
        <SquareImage ring />
        <SquareImage />
      </div>
    </>
  );
}
