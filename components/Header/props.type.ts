export interface Link {
  id?: number;
  name: string;
  href: any;
}

export interface LinkGroup {
  id?: number;
  href?: any;
  name: string;
  links: Link[];
}

/**
 *  default props
 *  */
export const LINK_GROUPS: LinkGroup[] = [
  {
    name: "Office",
    links: [
      { name: "Desk", href: "" },
      { name: "Chair", href: "" },
      { name: "Sofa", href: "" },
    ],
  },
  {
    name: "Hotel",
    links: [
      { name: "Bed", href: "" },
      { name: "Closet", href: "" },
    ],
  },
  {
    name: "School",
    links: [
      { name: "Student Bed", href: "" },
      { name: "Desk", href: "" },
      { name: "Chair", href: "" },
    ],
  },
];
export const LINKS: Link[] = [
  { name: "Home", href: "" },
  { name: "Cases", href: "" },
  { name: "Contact Us", href: "" },
];
