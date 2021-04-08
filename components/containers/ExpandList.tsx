import cn from "classnames";
import React, { useState } from "react";

function ArrowIcon(
  props: { onClick?: () => void; opened?: boolean } = { opened: false }
) {
  return (
    <svg
      onClick={props.onClick}
      className={cn("w-4.5 h-4.5 stroke-current cursor-pointer", {
        "transform -rotate-90": props.opened,
      })}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.9375 6.46875L9 11.5312L14.0625 6.46875"
        strokeWidth="1.6875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExpandList(props: {
  children?: React.ReactNode;
  childrenToOpen?: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center my-4 w-full">
        <div onClick={() => setOpened(!opened)}>{props.children}</div>
        <ArrowIcon onClick={() => setOpened(!opened)} opened={opened} />
      </div>
      {opened && <div className="ml-4">{props.childrenToOpen}</div>}
    </div>
  );
}
