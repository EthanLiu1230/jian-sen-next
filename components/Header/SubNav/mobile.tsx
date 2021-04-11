import SubLink from "../SubLink";
import React from "react";
import { SubNav } from "./desktop";

export default function SubNavMobile() {
  return (
    <div className="flex flex-nowrap">
      <p className="py-4 px-2 text-sm font-bold text-black">{linkGroup.name}</p>
      <p className="py-4 px-2 text-sm font-bold text-warmGray-600">/</p>
      <SubNav>
        {linkGroup.group.map((link) => (
          <a href={link.href}>
            <SubLink selected={link.name === "Desk"}>{link.name}</SubLink>
          </a>
        ))}
      </SubNav>
    </div>
  );
}
