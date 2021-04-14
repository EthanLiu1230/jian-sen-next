import React from "react";
import { LINK_GROUPS, LinkGroup } from "./props.type";
import SubLink from "./SubLink";

export default function SubNavDesktop({
  linkGroup = LINK_GROUPS[0],
}: {
  linkGroup?: LinkGroup;
}) {
  return (
    <nav className="flex p-4 space-x-6 w-full lg:space-x-10">
      {linkGroup.group.map((link, index) => (
        <SubLink key={index} href={link.href}>
          {link.name}
        </SubLink>
      ))}
    </nav>
  );
}
