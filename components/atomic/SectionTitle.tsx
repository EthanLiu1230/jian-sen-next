import React from "react";

export function SectionTitle({ text = "" }: { text?: string }) {
  return (
    <h2 className="mt-16 mb-9 text-center md:mb-14 md:mt-28 lg:mb-16 lg:mt-40">
      {text}
    </h2>
  );
}
