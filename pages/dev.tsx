import React from "react";

import { Header, Link, SubLink, SubNav } from "../components/Header";
import { Filter } from "../components/Filter";

export default function Dev() {
  return (
    <>
      <Header />
      <div className="pt-14">
        <Filter />
      </div>
      <Link>Link</Link>
      <div className="flex">
        <SubLink>abc</SubLink>

        <SubLink selected>bcdd</SubLink>
      </div>
      <SubNav />
    </>
  );
}
