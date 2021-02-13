import React, { ReactNode, useEffect, useState } from "react";
import { Logo } from "./atomic/Logo";
import { MenuToggle } from "./atomic/buttons/MenuToggle";
import { Separator } from "./atomic/Separator";
import { useTransition } from "react-spring";
import { animated } from "react-spring";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useRef } from "react";
import { Box } from "./atomic/Box";
import cn from "classnames";

interface Link {
  name: string;
  href: string;
}

interface LinkGroup {
  name: string;
  group: Link[];
}

const LINK_GROUPS: LinkGroup[] = [
  {
    name: "Office",
    group: [
      { name: "Desk", href: "" },
      { name: "Chair", href: "" },
      { name: "Sofa", href: "" },
      { name: "Office", href: "" },
    ],
  },
  {
    name: "Hotel",
    group: [
      { name: "Desk", href: "" },
      { name: "Chair", href: "" },
      { name: "Sofa", href: "" },
      { name: "Hotel", href: "" },
    ],
  },
  {
    name: "School",
    group: [
      { name: "Desk", href: "" },
      { name: "Chair", href: "" },
      { name: "Sofa", href: "" },
      { name: "School", href: "" },
    ],
  },
];
const LINKS: Link[] = [
  { name: "Home", href: "" },
  { name: "Cases", href: "" },
  { name: "Contact Us", href: "" },
];

export function Header({
  linkGroups = LINK_GROUPS,
  links = LINKS,
}: {
  linkGroups?: LinkGroup[];
  links?: Link[];
}) {
  function Mobile() {
    const [opened, setOpened] = useState<boolean>(false);
    const [linkGroup, setLinkGroup] = useState<LinkGroup>(linkGroups[0]);
    const [showMobileSubNav, setShowMobileSubNav] = useState<boolean>(true);

    useEffect(() => {
      setShowMobileSubNav(!opened);
    }, [opened]);

    const transitions = useTransition(opened, null, {
      from: { transform: "translate3d(-100%,0,0)" },
      enter: { transform: "translate3d(0,0,0)" },
      leave: { transform: "translate3d(-100%,0,0)" },
    });
    const outsideClickRef = useRef(null);
    useOutsideClick(outsideClickRef, () => setOpened(!opened));

    function MobileSubNav() {
      return (
        <div className="flex flex-nowrap">
          <p className="text-sm font-bold text-black">{linkGroup.name}</p>
          <p className="px-4 text-md font-bold text-warmGray-600">/</p>
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

    return (
      <>
        <div className="grid grid-cols-3 items-center py-3 px-4">
          <div className="justify-self-start">
            <MenuToggle opened={opened} onClick={() => setOpened(!opened)} />
          </div>
          <div className="justify-self-center">
            <Logo />
          </div>
        </div>
        {showMobileSubNav && (
          <div className="px-4 py-3">
            <MobileSubNav />
          </div>
        )}
        {transitions.map(
          ({ item, props }) =>
            item && (
              <div className="absolute z-20 w-screen h-screen bg-black bg-opacity-20 md:hidden">
                <animated.div
                  ref={outsideClickRef}
                  style={{ transform: props.transform, opacity: 1 }}
                  className="overflow-scroll px-4 w-3/4 h-full bg-white no-scrollbar"
                >
                  <div className="flex flex-wrap py-10">
                    {linkGroups.map((lg) => (
                      <div key={lg.name} className="mr-3 mb-3 cursor-pointer">
                        <button onClick={() => setLinkGroup(lg)}>
                          <Box variant={lg === linkGroup ? "filled" : "fill"}>
                            <p className="text-sm p-box">{lg.name}</p>
                          </Box>
                        </button>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="py-10">
                    {linkGroup.group.map((l) => (
                      <a className="block mb-6 text-xs" href={l.href}>
                        {l.name}
                      </a>
                    ))}
                  </div>
                  <Separator />
                  <div className="py-10">
                    {links.map((link) => (
                      <a
                        className="block mb-6 text-xs text-warmGray-600"
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </animated.div>
              </div>
            )
        )}
      </>
    );
  }

  function Desktop() {
    const [showSubNav, setShowSubNav] = useState<boolean>(false);
    const [group, setGroup] = useState<LinkGroup>(null);

    return (
      <>
        <div className="container flex justify-between items-center py-4 px-3 w-full">
          <nav className="flex space-x-10">
            {linkGroups.map((lg, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setGroup(lg);
                  setShowSubNav(true);
                }}
                onMouseLeave={() => setShowSubNav(false)}
              >
                <Link>{lg.name}</Link>
              </div>
            ))}
          </nav>
          <nav>
            <a href="">
              <Logo />
            </a>
          </nav>
          <nav className="flex space-x-10">
            {links.map((link) => (
              <a href={link.href}>
                <Link>{link.name}</Link>
              </a>
            ))}
          </nav>
        </div>
        {showSubNav && (
          <div className="container px-4">
            <SubNav>
              {group.group.map((link) => (
                <a href={link.href}>
                  <SubLink selected={link.name === "Desk"}>{link.name}</SubLink>
                </a>
              ))}
            </SubNav>
          </div>
        )}
      </>
    );
  }

  return (
    <header className="fixed z-50 w-full bg-white">
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Desktop />
      </div>
    </header>
  );
}

export function SubNav({ children }: { children: ReactNode }) {
  return <nav className="flex pb-3 space-x-10 w-full">{children}</nav>;
}

export function Link({
  children,
  bold,
}: {
  children: ReactNode;
  bold?: boolean;
}) {
  return (
    <p
      className={cn("text-sm", {
        "font-bold": bold,
      })}
    >
      {children}
    </p>
  );
}

export function SubLink({
  children,
  selected = false,
}: {
  children: ReactNode;
  selected?: boolean;
}) {
  return (
    <span className="flex flex-col justify-between items-center w-auto h-7">
      <p
        className={cn("text-sm", {
          " font-bold text-black": selected,
          "text-warmGray-600": !selected,
        })}
      >
        {children}
      </p>
      {selected && (
        <svg
          width="5"
          height="4"
          viewBox="0 0 5 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2" r="2" fill="black" />
        </svg>
      )}
    </span>
  );
}
