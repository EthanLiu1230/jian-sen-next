import React from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { capitalize } from "lodash";

export default function MainLink({ name, href }: { name: string; href: any }) {
  const router = useRouter();
  const selected = router.asPath
    .replace("%20", " ")
    .toLowerCase()
    .includes(name.toLowerCase());
  return (
    <a
      className={cn(
        {
          "font-bold": selected,
          // "text-shadow": selected,
          "text-primary": selected,
        },
        "hover:text-primary hover:text-shadow",
        "cursor-pointer"
      )}
      onClick={() => router.push(href)}
    >
      {capitalize(name)}
    </a>
  );
}
