import React, { useRef, useState } from "react";
import { animated, useTransition } from "react-spring";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { MenuToggle } from "../../buttons/MenuToggle";
import { Logo } from "../../styles/Logo";
import { Box } from "../../styles/Box";
import { LinkGroup } from "../prop-types";
import SubLink from "../SubLink";
import SubNavMobile from "../SubNav/mobile";
import { SubNav } from "../SubNav/desktop";

export default function NavMobile() {
  const [opened, setOpened] = useState<boolean>(false);
  const [linkGroup, setLinkGroup] = useState<LinkGroup>();
  const [showMobileSubNav, setShowMobileSubNav] = useState<boolean>(false);

  const transitions = useTransition(opened, null, {
    from: { transform: "translate3d(-100%,0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(-100%,0,0)" },
  });
  const outsideClickRef = useRef(null);
  useOutsideClick(outsideClickRef, () => setOpened(!opened));

  return (
    <div className="divide-y">
      <div className="grid grid-cols-3 items-center py-3 px-4">
        <div className="justify-self-start">
          <MenuToggle opened={opened} onClick={() => setOpened(!opened)} />
        </div>
        <div className="justify-self-center">
          <Logo />
        </div>
      </div>
      {showMobileSubNav && <SubNavMobile />}
      {transitions.map(
        ({ item, props }) =>
          item && (
            <div className="absolute z-20 w-screen h-screen bg-black bg-opacity-20 md:hidden">
              <animated.div
                ref={outsideClickRef}
                style={{ transform: props.transform, opacity: 1 }}
                className="overflow-scroll px-4 w-3/4 h-full bg-white divide-y no-scrollbar"
              >
                <div className="flex flex-wrap py-10">
                  {linkGroups.map((lg) => (
                    <div key={lg.name} className="mr-4 mb-4">
                      <button
                        className="focus:outline-none"
                        onClick={() => setLinkGroup(lg)}
                      >
                        <Box variant={lg === linkGroup ? "filled" : "fill"}>
                          <p className="text-sm px-4 py-3">{lg.name}</p>
                        </Box>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="py-10">
                  {linkGroup.group.map((l) => (
                    <a className="block mb-6 text-sm" href={l.href}>
                      {l.name}
                    </a>
                  ))}
                </div>
                <div className="py-10">
                  {links.map((link) => (
                    <a
                      className="block mb-6 text-sm text-warmGray-600"
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
    </div>
  );
}
