import React, { useRef, useState } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { Logo } from "../../styles/Logo";
import { Box } from "../../styles/Box";
import { Link, LINK_GROUPS, LinkGroup, LINKS } from "../prop-types";
import MenuToggle from "../../buttons/MenuToggle";
import { AnimatePresence, motion, useCycle } from "framer-motion";

function MobileNavPanel({
  linkGroups = LINK_GROUPS,
  links = LINKS,
}: {
  linkGroups?: LinkGroup[];
  links?: Link[];
}) {
  const [linkGroup, setLinkGroup] = useState<LinkGroup>(linkGroups[0]);

  return (
    <div className="overflow-scroll px-4 w-full h-full divide-y no-scrollbar">
      <div className="flex flex-wrap py-10">
        {linkGroups.map((lg) => (
          <div key={lg.name} className="mr-4 mb-4">
            <button
              className="focus:outline-none"
              onClick={() => setLinkGroup(lg)}
            >
              <Box variant={lg === linkGroup ? "filled" : "fill"}>
                <p className="text-sm px-4 py-3">{lg.name}</p>
              </Box>
            </button>
          </div>
        ))}
      </div>
      <div className="py-10">
        {linkGroup.group.map((l) => (
          <a className="block mb-6 text-sm" href={l.href}>
            {l.name}
          </a>
        ))}
      </div>
      <div className="py-10">
        {links.map((link) => (
          <a className="block mb-6 text-sm text-warmGray-600" href={link.href}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function AnimateShowPanel(props: {
  links: Link[];
  linkGroups: LinkGroup[];
  onClick: () => void;
  isVisible: boolean;
}) {
  return (
    <AnimatePresence>
      {props.isVisible && (
        <motion.div
          key="bg"
          className="absolute w-screen h-screen flex bg-black bg-opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-3/4 bg-white"
            key="panel"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ ease: "linear" }}
          >
            <MobileNavPanel links={props.links} linkGroups={props.linkGroups} />
          </motion.div>
          <div className="w-1/4 h-full" onClick={props.onClick} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NavMobile({
  linkGroups = LINK_GROUPS,
  links = LINKS,
}: {
  linkGroups?: LinkGroup[];
  links?: Link[];
}) {
  const [open, toggleOpen] = useCycle<string>("closed", "open");

  const outsideClickRef = useRef(null);
  useOutsideClick(outsideClickRef, () => toggleOpen());

  return (
    <motion.div className="divide-y overflow-hidden" animate={open}>
      <div className="grid grid-cols-3 items-center py-3 px-4">
        <div className="justify-self-start">
          <MenuToggle toggle={() => toggleOpen()} />
        </div>
        <div className="justify-self-center">
          <Logo />
        </div>
      </div>
      <AnimateShowPanel
        links={links}
        linkGroups={linkGroups}
        onClick={() => toggleOpen()}
        isVisible={open === "open"}
      />
    </motion.div>
  );
}
