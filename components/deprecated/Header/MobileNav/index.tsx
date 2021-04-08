import classNames from "classnames";
import React, { useRef, useState } from "react";
import {
  animated,
  config,
  useChain,
  useTrail,
  useTransition,
} from "react-spring";
import { Props } from "../index";
import { Logo } from "../Logo";
import { NavLink } from "../NavLink";
import { MenuToggle } from "../../../buttons/MenuToggle";

export function MobileNav({ navLinks }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const trailRef = useRef();
  const trail = useTrail(navLinks.length, {
    opacity: open ? 1 : 0,
    transform: open ? "translate3d(0,0,0)" : "translate3d(15px,-15px,0)",
    config: config.stiff,
    ref: trailRef,
  });

  const transitionRef = useRef();
  const transition = useTransition(open, null, {
    from: { clipPath: "circle(0% at 100% 0%)" },
    enter: { clipPath: "circle(150% at 100% 0%)" },
    leave: { clipPath: "circle(0% at 100% 0%)" },
    unique: true,
    config: config.stiff,
    ref: transitionRef,
  });

  useChain(open ? [transitionRef, trailRef] : [trailRef, transitionRef], [
    0,
    open ? 0.02 : 0.4,
  ]);
  return (
    <div className="relative">
      <div className="absolute w-full">
        <div className={classNames("py-2 px-screen", { "bg-white": !open })}>
          <nav className="flex relative z-30 justify-between items-center">
            <Logo />
            <MenuToggle opened={open} onClick={() => setOpen(!open)} />
          </nav>
          {transition.map(
            ({ item, key }) =>
              item && (
                <ul key={key} className="relative z-30 my-6">
                  {trail.map((props, index) => (
                    <animated.li style={props}>
                      <NavLink {...navLinks[index]} />
                    </animated.li>
                  ))}
                </ul>
              )
          )}
        </div>
        {transition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                className="absolute top-0 left-0 z-20 w-full h-full bg-light rounded-2xl"
                style={props}
              />
            )
        )}
      </div>
    </div>
  );
}
