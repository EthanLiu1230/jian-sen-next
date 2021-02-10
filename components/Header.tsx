import React, { useState } from "react";
import { Logo } from "./atomic/Logo";
import { MenuToggle } from "./atomic/buttons/MenuToggle";
import { Separator } from "./atomic/Separator";
import { useTransition } from "react-spring";
import { animated } from "react-spring";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useRef } from "react";
import { Box } from "./atomic/Box";

const leftLinks = ["Office", "School", "Hotel"];
const rightLinks = ["Home", "Cases", "Contact Us"];
const subLinks = ["Desk", "Cabinet", "Chair", "Sofa"];

export function Header() {
  const [opened, setOpened] = useState(false);

  const transitions = useTransition(opened, null, {
    from: { transform: "translate3d(-100%,0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(-100%,0,0)" },
  });

  const outsideClickRef = useRef(null);
  useOutsideClick(outsideClickRef, () => setOpened(!opened));

  return (
    <header className="fixed z-50 w-full bg-white bg-opacity-95">
      <div className="grid grid-cols-3 items-center px-4 w-full h-14 md:container">
        {/* left link group */}
        <div className="justify-self-start">
          <nav className="hidden md:flex">
            {leftLinks.map((link) => (
              <a key={link} href="" className="mr-8 text-sm">
                {link}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <MenuToggle opened={opened} onClick={() => setOpened(!opened)} />
          </div>
        </div>
        {/* Logo link */}
        <div className="col-start-2 justify-self-center">
          <Logo />
        </div>
        {/* right link group */}
        <nav className="hidden justify-self-end md:flex">
          {rightLinks.map((link) => (
            <a href="" className="ml-8 text-sm">
              {link}
            </a>
          ))}
        </nav>
      </div>
      {/* side bar panel */}
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <div className="absolute z-20 w-screen h-screen bg-black bg-opacity-20 md:hidden">
              <animated.div
                ref={outsideClickRef}
                style={{ transform: props.transform, opacity: 1 }}
                className="overflow-scroll px-4 w-3/4 h-full bg-white no-scrollbar"
              >
                <div className="flex flex-wrap py-10">
                  {leftLinks.map((l) => (
                    <div className="mr-3 mb-3 cursor-pointer">
                      <button>
                        <Box variant={l === "Office" ? "filled" : "fill"}>
                          <label className="text-sm">{l}</label>
                        </Box>
                      </button>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="py-10">
                  {subLinks.map((l) => (
                    <a className="block mb-6 text-sm" href="">
                      {l}
                    </a>
                  ))}
                </div>
                <Separator />
                <div className="py-10">
                  {rightLinks.map((l) => (
                    <a className="block mb-6 text-sm text-warmGray-600" href="">
                      {l}
                    </a>
                  ))}
                </div>
              </animated.div>
            </div>
          )
      )}
    </header>
  );
}
