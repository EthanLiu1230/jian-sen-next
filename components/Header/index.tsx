import React from "react";
import { Link, LINK_GROUPS, LinkGroup, LINKS } from "./prop-types";
import { Nav } from "./Nav";

export function Header({
  linkGroups = LINK_GROUPS,
  links = LINKS,
}: {
  linkGroups?: LinkGroup[];
  links?: Link[];
}) {
  return (
    <header className="fixed z-50 w-full bg-white">
      <Nav />
    </header>
  );
}
