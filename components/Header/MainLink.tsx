import React, { ReactNode } from "react";
import cn from "classnames";

export default function MainLink({
  children,
  bold,
}: {
  children: ReactNode;
  bold?: boolean;
}) {
  return <p className={cn("text-sm", { "font-bold": bold })}>{children}</p>;
}
