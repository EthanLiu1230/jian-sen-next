import React from "react";

export function NavLink(props: { href: string; text: string }) {
  return (
    <a
      href={props.href}
      className="font-semibold py-2 text-right mr-10 block transform transition duration-300 hover:-translate-y-0.5 hover:text-primary md:hover:scale-110"
    >
      {props.text}
    </a>
  );
}
