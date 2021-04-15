import React, { ReactNode } from "react";
import cn from "classnames";
import { useRouter } from "next/router";

export default function MainLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  const router = useRouter();
  const selected = router.pathname.includes(name);
  return (
    <a
      className={cn(
        {
          "font-bold": selected,
          "text-shadow": selected,
          "text-primary": selected,
        },
        "hover:text-primary hover:text-shadow"
      )}
      onClick={() => router.push(href)}
    >
      {name}
    </a>
  );
}
