import React from "react";
import { useSpring, animated } from "react-spring";

function Path(props) {
  return (
    <animated.path
      fill="transparent"
      strokeWidth="2"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
}

export function MenuToggle({
  opened,
  onClick,
}: {
  opened: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  const spring = useSpring({
    d1: opened ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5",
    // d2: open ? 0 : 1,
    d3: opened ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346",
  });
  return (
    <button className="focus:outline-none" onClick={onClick}>
      <svg className="inline-block h-5" viewBox="0 0 22 22">
        <Path d={spring.d1} />
        {/*<Path d="M 2 9.423 L 20 9.423" opacity={spring.d2} />*/}
        <Path d={spring.d3} />
      </svg>
    </button>
  );
}
