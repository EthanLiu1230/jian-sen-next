import React from "react";
import { IMAGE } from "../DUMMY";

export function Card() {
  return (
    <div className="flex overflow-hidden max-w-screen-sm rounded-lg shadow sm:flex-col">
      <div className="relative flex-none w-3/5 sm:pb-3/5 sm:w-full sm:flex-1">
        <img src={IMAGE} alt="" className="img-ratio" />
      </div>
      <form className="flex flex-col flex-auto p-6 space-y-6 sm:space-y-2">
        <h1>Title</h1>
        <h2 className="opacity-70">subtitle</h2>
        <span className="sm:hidden">action</span>
      </form>
    </div>
  );
}
