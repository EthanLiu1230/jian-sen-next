import React from "react";

import { Header } from "../components/Header";
import { Filter } from "../components/Filter";

export default function Dev() {
  return (
    <>
      <Header />
      <div className="pt-14">
        <Filter />
      </div>
    </>
  );
}
