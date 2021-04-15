export interface Link {
  id?: number;
  name: string;
  href: any;
}

export interface LinkGroup {
  id?: number;
  href?: any;
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
    ],
  },
  {
    name: "Hotel",
    group: [
      { name: "Bed", href: "" },
      { name: "Closet", href: "" },
    ],
  },
  {
    name: "School",
    group: [
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
