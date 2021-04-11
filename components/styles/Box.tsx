import React from "react";
import cn from "classnames";

export function Box({
  variant = "filled",
  shadow = false,
  children,
}: {
  variant?: "fill" | "filled" | "outline" | "outlined" | "ghost";
  children: React.ReactNode;
  shadow?: boolean;
}) {
  return (
    <div
      className={cn("rounded-xl text-xs", {
        "bg-warmGray-200 text-warmGray-600": variant === "fill",
        "bg-primary text-white": variant === "filled",
        "border text-warmGray-600 border-warmGray-300": variant === "outline",
        "border text-primary border-primary": variant === "outlined",
        "bg-white text-warmGray-600": variant === "ghost",
        "shadow-spread": shadow,
      })}
    >
      {children}
    </div>
  );
}
