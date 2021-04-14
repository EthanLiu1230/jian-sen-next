import React, { useCallback, useContext } from "react";
import NavMobile from "./NavMobile";
import SubNavMobile from "./SubNavMobile";
import NavDesktop from "./NavDesktop";
import SubNavDesktop from "./SubNavDesktop";
import { Category, CategoryContext } from "../../contexts/CategoryContext";
import { LinkGroup, LINKS } from "./props.type";

export function Header() {
  const categories: Category[] = useContext(CategoryContext);

  // const linkGroups: LinkGroup[] = [];
  // categories.forEach((scene) => {
  //   const linkGroup: LinkGroup = {
  //     name: scene.name,
  //     group: scene.children.map((category) => {
  //       return {
  //         name: category.name,
  //         href: `${scene.name}/${category.name}`,
  //       };
  //     }),
  //   };
  //   linkGroups.push(linkGroup);
  // });
  const links = LINKS;

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="md:hidden text-md">
        {/*<NavMobile links={links} linkGroups={linkGroups} />*/}
        <SubNavMobile />
      </div>
      <div className="hidden md:block text-sm divide-y container">
        {/*<NavDesktop links={links} linkGroups={linkGroups} />*/}
        <SubNavDesktop />
      </div>
    </header>
  );
}
