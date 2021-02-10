import React from "react";
import cn from "classnames";

export function FilledButton({
  children = "Filled Button",
  filled = true,
  onClick,
}: {
  children?: React.ReactNode;
  filled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn("focus:outline-none py-2.5 px-4 rounded w-full", {
        "bg-primary text-white": filled,
        "bg-warmGray-200 text-black": !filled,
      })}
    >
      {children}
    </button>
  );
}
