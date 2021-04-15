import React from "react";
import NavMobile from "./NavMobile";
import SubNavMobile from "./SubNavMobile";
import SubNavDesktop from "./SubNavDesktop";
import { Link, LinkGroup, LINKS } from "./props.type";
import NavDesktop from "./NavDesktop";
import { useRouter } from "next/router";

export function Header({
  links = LINKS,
  linkGroups,
}: {
  linkGroups: LinkGroup[];
  links?: Link[];
}) {
  const router = useRouter();
  // const showSubNav = router.asPath.includes("collections");
  const selectedLinkGroup =
    linkGroups.find((lg) => lg.name === router.query["scene"]) || null;

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="md:hidden text-sm">
        <NavMobile links={links} linkGroups={linkGroups} />
        {selectedLinkGroup && <SubNavMobile linkGroup={selectedLinkGroup} />}
      </div>
      <div className="hidden md:block text-md divide-y container">
        <NavDesktop links={links} linkGroups={linkGroups} />
        {selectedLinkGroup && <SubNavDesktop linkGroup={selectedLinkGroup} />}
      </div>
    </header>
  );
}
