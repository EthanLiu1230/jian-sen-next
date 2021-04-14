import React, { useContext } from "react";
import NavMobile from "./NavMobile";
import SubNavMobile from "./SubNavMobile";
import NavDesktop from "./NavDesktop";
import SubNavDesktop from "./SubNavDesktop";
import { CategoryContext } from "../../contexts/CategoryContext";

export function Header() {
  const categories = useContext(CategoryContext);
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="md:hidden text-md">
        <NavMobile />
        <SubNavMobile />
      </div>
      <div className="hidden md:block text-sm divide-y container">
        <NavDesktop />
        <SubNavDesktop />
      </div>
    </header>
  );
}
