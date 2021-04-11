import React, { ReactNode } from "react";

export default function SubNavDesktop({ children }: { children: ReactNode }) {
  return (
    <nav className="flex p-4 space-x-6 w-full lg:space-x-10">{children}</nav>
  );
}
