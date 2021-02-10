import React from "react";

export function ProductCard() {
  return (
    <div className="overflow-hidden w-full border transition duration-300 ease-in-out cursor-pointer hover:rounded-xl hover:shadow-spread border-warmGray-300">
      <div className="relative pb-2/3">
        <img src={"/images/hold_0.jpg"} alt="" className="img-ratio" />
      </div>
      <div className="py-4 px-4 text-left bg-white">
        <p className="text-sm text-black">Title</p>
        <p className="mt-1 text-xs text-warmGray-400">subtitle</p>
      </div>
    </div>
  );
}
