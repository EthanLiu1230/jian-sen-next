import React from "react";

const hold_img = "/images/hold_0.jpg";

export function Card() {
  return (
    <div className="flex overflow-hidden max-w-sm rounded-lg shadow">
      <div className="relative flex-none w-3/5">
        <img src={hold_img} alt="" className="img-ratio" />
      </div>
      <form className="flex flex-col flex-auto p-6 space-y-6">
        <h1>Title</h1>
        <h2 className="opacity-70">subtitle</h2>
        <span>action</span>
      </form>
    </div>
  );
}

export function Card2() {
  return (
    <div className="flex overflow-hidden flex-col max-w-sm rounded-lg shadow">
      <div className="relative pb-3/5">
        <img src={hold_img} alt="" className="img-ratio" />
      </div>
      <form className="flex flex-col flex-auto p-6 space-y-2">
        <h1>Title</h1>
        <h2 className="opacity-70">subtitle</h2>
        {/*<span>action</span>*/}
      </form>
    </div>
  );
}

export function Card3() {
  return <div className="flex overflow-hidden max-w-sm shadow"></div>;
}

export default function Dev() {
  return (
    <>
      <div className="px-4">
        <Card />
        <Card2 />
      </div>
    </>
  );
}
