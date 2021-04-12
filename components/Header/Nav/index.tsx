import React from "react";
import NavMobile from "./mobile";

export function Nav() {
  return (
    <>
      <div className="md:hidden">
        <NavMobile />
      </div>
      {/*<div className="hidden md:block">*/}
      {/*  <NavDesktop />*/}
      {/*</div>*/}
    </>
  );
}
