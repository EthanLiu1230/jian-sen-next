import React, { ReactNode } from "react";

function Item({
  name = "item",
  children = "content of item",
}: {
  name?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-4">
      <h2 className="inline-block pr-4 text-base font-semibold border-b border-black">
        {name}
      </h2>
      <div className="flex flex-wrap gap-4 pt-4 text-sm text-warmGray-600">
        {children}
      </div>
    </div>
  );
}

function ColorCircle({
  hex = "#6184ff",
  caption = "blue",
}: {
  hex?: string;
  caption?: string;
}) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div
        className="flex-none w-7 h-7 rounded-full"
        style={{ backgroundColor: hex }}
      />
      <caption>{caption}</caption>
    </div>
  );
}

export function ProductContent() {
  return (
    <article className="max-w-screen-sm">
      <header className="mb-4">
        <h1 className="mb-2 text-xl font-bold">Title</h1>
        <caption className="text-md text-warmGray-500">subtitle</caption>
      </header>
      <Item />
      <Item />
      <Item>
        <ColorCircle />
        <ColorCircle />
        <ColorCircle />
        <ColorCircle />
        <ColorCircle />
        <ColorCircle />
        <ColorCircle />
        <ColorCircle />
      </Item>
    </article>
  );
}
