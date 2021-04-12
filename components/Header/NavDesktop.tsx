import React, { useState } from "react";
import { Logo } from "../styles/Logo";
import { Link, LINK_GROUPS, LinkGroup, LINKS } from "./props.type";
import SubLink from "./SubLink";
import SubNavDesktop from "./SubNavDesktop";
import MainLink from "./MainLink";

export default function NavDesktop({
  linkGroups = LINK_GROUPS,
  links = LINKS,
}: {
  linkGroups?: LinkGroup[];
  links?: Link[];
}) {
  // const [showSubNav, setShowSubNav] = useState<boolean>(false);
  const [group, setGroup] = useState<LinkGroup>(null);

  return (
    <div className="divide-y text-md">
      {/* Main Nav */}
      <div className="container flex justify-between items-center p-4 w-full">
        <nav className="flex space-x-10">
          {linkGroups.map((group, index) => (
            <a key={group.name} href="">
              <div
                key={index}
                // onMouseEnter={() => {
                //   setGroup(group);
                //   setShowSubNav(true);
                // }}
                // onMouseLeave={() => setShowSubNav(false)}
              >
                <MainLink selected={group.name === "Hotel"}>
                  {group.name}
                </MainLink>
              </div>
            </a>
          ))}
        </nav>
        <nav>
          <a href="">
            <Logo />
          </a>
        </nav>
        <nav className="flex space-x-10">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              <MainLink>{link.name}</MainLink>
            </a>
          ))}
        </nav>
      </div>
      {/* Sub Nav */}
      {/*{showSubNav && (*/}
      {/*  <div className="container px-4">*/}
      {/*    <SubNavDesktop>*/}
      {/*      {group.group.map((link) => (*/}
      {/*        <a href={link.href}>*/}
      {/*          <SubLink selected={link.name === "Desk"}>{link.name}</SubLink>*/}
      {/*        </a>*/}
      {/*      ))}*/}
      {/*    </SubNavDesktop>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}
