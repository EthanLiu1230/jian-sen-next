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
      <div className="py-4 px-2">
        <MainLink name={linkGroup.name} href={linkGroup.href} />
      </div>
      <p className="py-4 px-2 font-bold text-warmGray-600">/</p>
      <nav className="flex p-4 space-x-6 w-full">
        {linkGroup.links.map((link, index) => (
          <div key={index}>
            <SubLink href={link.href} name={link.name} />
          </div>
        ))}
      </nav>
    </div>
  );
}
