import React from "react";
import { Header } from "../components/Header";
import { Filter } from "../components/Filter";
import { Card } from "../components/Card";

const cards = [1, 2, 3, 4, 5, 6];
export default function _products() {
  return (
    <>
      <Header />
      <div className="container flex flex-col gap-6 px-4 pt-28 md:flex-row">
        <div className="md:w-1/3 lg:w-1/4">
          <h1 className="mb-4 text-xl">Desk</h1>
          <div className="flex gap-4 md:flex-col">
            <div className="flex-auto">
              <Filter key={1} />
            </div>
            <div className="flex-auto">
              <Filter key={2} />
            </div>
          </div>
        </div>

        <div className="grid flex-auto grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Card key={c} />
          ))}
        </div>
      </div>
    </>
  );
}
