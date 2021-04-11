import React from "react";
import NavDesktop from "./desktop";
import { MobileNav } from "../../deprecated/Header/MobileNav";

export function Nav() {
  return (
    <>
      <div className="md:hidden">
        <MobileNav />
      </div>
      {/*<div className="hidden md:block">*/}
      {/*  <NavDesktop />*/}
      {/*</div>*/}
    </>
  );
}
