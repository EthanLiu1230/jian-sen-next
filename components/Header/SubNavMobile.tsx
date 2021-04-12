import SubLink from "./SubLink";
import React from "react";
import { LINK_GROUPS, LinkGroup } from "./props.type";
import MainLink from "./MainLink";

export default function SubNavMobile({
  linkGroup = LINK_GROUPS[0],
}: {
  linkGroup?: LinkGroup;
}) {
  return (
    <div className="flex flex-nowrap text-sm">
      {/*<p className="py-4 px-2 text-sm font-bold text-black">{linkGroup.name}</p>*/}
      <MainLink selected>
        <p className="py-4 px-2">{linkGroup.name}</p>
      </MainLink>
      <p className="py-4 px-2 font-bold text-warmGray-600">/</p>
      <nav className="flex p-4 space-x-6 w-full">
        {linkGroup.group.map((link) => (
          <a href={link.href}>
            <SubLink selected={link.name === "Desk"}>{link.name}</SubLink>
          </a>
        ))}
      </nav>
    </div>
  );
}
