import React from "react";
import NavMobile from "./NavMobile";
import SubNavMobile from "./SubNavMobile";
import SubNavDesktop from "./SubNavDesktop";
import { Link, LINK_GROUPS, LinkGroup, LINKS } from "./props.type";
import NavDesktop from "./NavDesktop";

export function Header({
  links = LINKS,
  linkGroups = LINK_GROUPS,
}: {
  linkGroups: LinkGroup[];
  links?: Link[];
}) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="md:hidden text-md">
        <NavMobile links={links} linkGroups={linkGroups} />
        <SubNavMobile />
      </div>
      <div className="hidden md:block text-sm divide-y container">
        <NavDesktop links={links} linkGroups={linkGroups} />
        <SubNavDesktop />
      </div>
    </header>
  );
}
