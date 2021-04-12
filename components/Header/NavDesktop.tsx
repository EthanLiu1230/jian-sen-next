import React, { useState } from "react";
import { Logo } from "../styles/Logo";
import { Link, LINK_GROUPS, LinkGroup, LINKS } from "./props.type";
import SubNavDesktop from "./SubNavDesktop";
import MainLink from "./MainLink";
import { AnimatePresence, motion } from "framer-motion";

function AnimateShowGroup({ isVisible, linkGroup }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute bg-white w-full"
          key="showGroup"
          initial={{ opacity: 0, y: "-10%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-10%" }}
        >
          <SubNavDesktop linkGroup={linkGroup} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NavDesktop({
  linkGroups = LINK_GROUPS,
  links = LINKS,
}: {
  linkGroups?: LinkGroup[];
  links?: Link[];
}) {
  const [showGroup, setShowGroup] = useState<LinkGroup>(null);

  return (
    <div className="divide-y">
      <div className="flex justify-between items-center p-4 w-full">
        <nav className="flex space-x-10">
          {linkGroups.map((group, index) => (
            <a key={group.name} href="">
              <div key={index} onMouseEnter={() => setShowGroup(group)}>
                <MainLink selected={group.name === "Hotel"}>
                  {group.name}
                </MainLink>
              </div>
            </a>
          ))}
        </nav>
        <nav>
          <a href="">
            <Logo />
          </a>
        </nav>
        <nav className="flex space-x-10">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              <MainLink>{link.name}</MainLink>
            </a>
          ))}
        </nav>
      </div>
      <div onMouseLeave={() => setShowGroup(null)}>
        <AnimateShowGroup isVisible={showGroup} linkGroup={showGroup} />
      </div>
    </div>
  );
}
