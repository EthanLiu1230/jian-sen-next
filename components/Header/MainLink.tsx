import React, { ReactNode } from "react";
import cn from "classnames";

export default function MainLink({
  children,
  selected = false,
}: {
  children: ReactNode;
  selected?: boolean;
}) {
  return (
    <p
      className={cn(
        {
          "font-bold": selected,
          "text-shadow": selected,
          "text-primary": selected,
        },
        "hover:text-primary hover:text-shadow"
      )}
    >
      {children}
    </p>
  );
}
