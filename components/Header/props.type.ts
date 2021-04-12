export interface Link {
  name: string;
  href: string;
}

export interface LinkGroup {
  name: string;
  group: Link[];
}

/**
 *  default props
 *  */
export const LINK_GROUPS: LinkGroup[] = [
  {
    name: "Office",
    group: [
      { name: "Desk", href: "" },
      { name: "Chair", href: "" },
      { name: "Sofa", href: "" },
      { name: "Office", href: "" },
    ],
  },
  {
    name: "Hotel",
    group: [
      { name: "Desk", href: "" },
      { name: "Chair", href: "" },
      { name: "Sofa", href: "" },
      { name: "Hotel", href: "" },
    ],
  },
  {
    name: "School",
    group: [
      { name: "Desk", href: "" },
      { name: "Chair", href: "" },
      { name: "Sofa", href: "" },
      { name: "School", href: "" },
    ],
  },
];
export const LINKS: Link[] = [
  { name: "Home", href: "" },
  { name: "Cases", href: "" },
  { name: "Contact Us", href: "" },
];
