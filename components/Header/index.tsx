import React from "react";
import { Link, LINK_GROUPS, LinkGroup, LINKS } from "./props.type";
import { Nav } from "./Nav";
import NavMobile from "./NavMobile";
import SubNavMobile from "./SubNavMobile";
import NavDesktop from "./NavDesktop";

export function Header({
  linkGroups = LINK_GROUPS,
  links = LINKS,
}: {
  linkGroups?: LinkGroup[];
  links?: Link[];
}) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="md:hidden">
        <NavMobile />
        <SubNavMobile />
      </div>
      <div className="hidden md:block">
        <NavDesktop />
      </div>
    </header>
  );
}
