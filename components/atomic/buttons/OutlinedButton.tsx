import cn from "classnames";
import React from "react";

export function OutlinedButton({
  children = "label",
  outlined = false,
  onClick,
}: {
  children?: React.ReactNode;
  outlined?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={cn("border focus:outline-none py-2.5 px-4 rounded w-full", {
        "text-black border-primary": outlined, //black_outline
        "text-warmGray-600 border-warmGray-300": !outlined, // warmGray_outline
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
