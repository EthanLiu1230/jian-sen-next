import React from "react";
import { Box } from "../components/atomic/Box";

const hold_img = "/images/hold_0.jpg";

export function Card() {
  return (
    <div className="flex overflow-hidden rounded shadow-2xl max-w-screen-sm">
      <div className="relative flex-none w-3/5">
        <img src={hold_img} alt="" className="img-ratio" />
      </div>
      <form className="flex flex-col flex-auto p-6 h-40 space-y-4">
        <h1>Title</h1>
        <h2 className="opacity-70">subtitle</h2>
        <p>see more</p>
      </form>
    </div>
  );
}

export default function Dev() {
  return (
    <>
      <div className="px-4">
        <Card />
      </div>
    </>
  );
}
