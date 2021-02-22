import React from "react";
import { Header } from "../components/Header";
import { Filter } from "../components/Filter";
import { Card } from "../components/Card";
import { InferGetStaticPropsType } from "next";

const cards = [1, 2, 3, 4, 5, 6];

export default function products(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Header />
      <div className="container flex flex-col gap-6 py-4 px-4 pt-28 md:flex-row">
        <div className="md:w-1/3 lg:w-1/4">
          <h1 className="my-6 text-xl font-bold">Desk</h1>
          <div className="flex gap-4 md:flex-col md:w-5/6">
            <div className="flex-auto">
              <Filter key={1} />
            </div>
            <div className="flex-auto">
              <Filter key={2} />
            </div>
          </div>
        </div>
        <div className="flex-auto py-4">
          <div className="flex justify-between mb-2 text-warmGray-600">
            <h2>Desk</h2>
            <span>19 items</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <Card key={c} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
