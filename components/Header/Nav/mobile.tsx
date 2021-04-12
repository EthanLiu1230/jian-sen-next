import React, { useRef, useState } from "react";
import { animated, useTransition } from "react-spring";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { Logo } from "../../styles/Logo";
import { Box } from "../../styles/Box";
import { Link, LINK_GROUPS, LinkGroup, LINKS } from "../prop-types";
import MenuToggle from "../../buttons/MenuToggle";
import { motion, useCycle } from "framer-motion";

export default function NavMobile({
  linkGroups = LINK_GROUPS,
  links = LINKS,
}: {
  linkGroups?: LinkGroup[];
  links?: Link[];
}) {
  const [open, toggleOpen] = useCycle<string>("closed", "open");
  const [linkGroup, setLinkGroup] = useState<LinkGroup>(linkGroups[0]);

  const outsideClickRef = useRef(null);
  useOutsideClick(outsideClickRef, () => toggleOpen());

  return (
    <motion.div className="divide-y" initial={false} animate={open}>
      <div className="grid grid-cols-3 items-center py-3 px-4">
        <div className="justify-self-start">
          <MenuToggle toggle={() => toggleOpen()} />
        </div>
        <div className="justify-self-center">
          <Logo />
        </div>
      </div>
      {/*{isOpen && (*/}
      {/*  <div className="absolute z-20 w-screen h-screen bg-black bg-opacity-20 md:hidden">*/}
      {/*    <div*/}
      {/*      ref={outsideClickRef}*/}
      {/*      className="overflow-scroll px-4 w-3/4 h-full bg-white divide-y no-scrollbar"*/}
      {/*    >*/}
      {/*      <div className="flex flex-wrap py-10">*/}
      {/*        {linkGroups.map((lg) => (*/}
      {/*          <div key={lg.name} className="mr-4 mb-4">*/}
      {/*            <button*/}
      {/*              className="focus:outline-none"*/}
      {/*              onClick={() => setLinkGroup(lg)}*/}
      {/*            >*/}
      {/*              <Box variant={lg === linkGroup ? "filled" : "fill"}>*/}
      {/*                <p className="text-sm px-4 py-3">{lg.name}</p>*/}
      {/*              </Box>*/}
      {/*            </button>*/}
      {/*          </div>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*      <div className="py-10">*/}
      {/*        {linkGroup.group.map((l) => (*/}
      {/*          <a className="block mb-6 text-sm" href={l.href}>*/}
      {/*            {l.name}*/}
      {/*          </a>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*      <div className="py-10">*/}
      {/*        {links.map((link) => (*/}
      {/*          <a*/}
      {/*            className="block mb-6 text-sm text-warmGray-600"*/}
      {/*            href={link.href}*/}
      {/*          >*/}
      {/*            {link.name}*/}
      {/*          </a>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </motion.div>
  );
}
