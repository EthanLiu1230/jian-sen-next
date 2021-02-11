import React, { ReactNode, useState } from "react";
import { Logo } from "./atomic/Logo";
import { MenuToggle } from "./atomic/buttons/MenuToggle";
import { Separator } from "./atomic/Separator";
import { useTransition } from "react-spring";
import { animated } from "react-spring";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useRef } from "react";
import { Box } from "./atomic/Box";
import cn from "classnames";

const leftLinks = ["Office", "School", "Hotel"];
const rightLinks = ["Home", "Cases", "Contact Us"];
const subLinks = ["Desk", "Cabinet", "Chair", "Sofa"];

export function Header() {
  function Mobile() {
    const [opened, setOpened] = useState(false);

    const transitions = useTransition(opened, null, {
      from: { transform: "translate3d(-100%,0,0)" },
      enter: { transform: "translate3d(0,0,0)" },
      leave: { transform: "translate3d(-100%,0,0)" },
    });
    const outsideClickRef = useRef(null);
    useOutsideClick(outsideClickRef, () => setOpened(!opened));

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
                            <p className="text-sm p-box">{l}</p>
                          </Box>
                        </button>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="py-10">
                    {subLinks.map((l) => (
                      <a className="block mb-6 text-xs" href="">
                        {l}
                      </a>
                    ))}
                  </div>
                  <Separator />
                  <div className="py-10">
                    {rightLinks.map((l) => (
                      <a
                        className="block mb-6 text-xs text-warmGray-600"
                        href=""
                      >
                        {l}
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
    return (
      <div className="container flex justify-between items-center py-4 px-4 w-full">
        <nav className="flex space-x-10">
          {leftLinks.map((link) => (
            <a href="">
              <Link>{link}</Link>
            </a>
          ))}
        </nav>
        <nav>
          <a href="">
            <Logo />
          </a>
        </nav>
        <nav className="flex space-x-10">
          {rightLinks.map((link) => (
            <a href="">
              <Link>{link}</Link>
            </a>
          ))}
        </nav>
      </div>
    );
  }

  return (
    <header className="fixed z-50 w-full bg-white bg-opacity-95">
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Desktop />
      </div>
    </header>
  );
}

export function SubNav() {
  return (
    <nav className="flex py-3 px-4 w-full shadow-spread">
      {subLinks.map((sl) => (
        <a href="" className="mr-9">
          <SubLink selected={sl === "Desk"}>{sl}</SubLink>
        </a>
      ))}
    </nav>
  );
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
