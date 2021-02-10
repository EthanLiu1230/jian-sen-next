import React from "react";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

export interface Props {
  navLinks?: { href: string; text: string }[];
}

const defaultProps = {
  navLinks: [
    { text: "Home", href: "#" },
    { text: "Products", href: "#" },
    { text: "Cases", href: "#" },
    { text: "Contact", href: "#" },
  ],
};

export function Header({ navLinks }: Props) {
  return (
    <header className="fixed z-30 w-full bg-white">
      <div className="md:hidden">
        <MobileNav navLinks={navLinks} />
      </div>
      <nav className="container hidden justify-between items-center md:flex md:py-1 lg:py-3 px-4">
        <a href="/">
          <Logo />
        </a>
        <ul className="flex justify-between">
          {navLinks.map(({ href, text }, i) => (
            <NavLink key={i} href={href} text={text} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.defaultProps = defaultProps;
