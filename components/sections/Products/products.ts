import React from "react";
import { IconCabinet } from "./product-icons/IconCabinet";
import { IconChair } from "./product-icons/IconChair";
import { IconDesk } from "./product-icons/IconDesk";
import { IconHotel } from "./product-icons/IconHotel";
import { IconSchool } from "./product-icons/IconSchool";
import { IconSofa } from "./product-icons/IconSofa";

export interface Product {
  Icon: React.FC;
  text: string;
  href: string;
  image: string;
}

export const defaultProducts: Product[] = [
  { Icon: IconDesk, text: "desk", href: "#", image: "/images/hold_0.jpg" },
  { Icon: IconChair, text: "chair", href: "#", image: "/images/hold_1.jpg" },
  { Icon: IconSofa, text: "sofa", href: "#", image: "/images/hold_2.jpg" },
  {
    Icon: IconCabinet,
    text: "cabinet",
    href: "#",
    image: "/images/hold_3.jpg",
  },
  { Icon: IconHotel, text: "hotel", href: "#", image: "/images/hold_4.jpg" },
  { Icon: IconSchool, text: "school", href: "#", image: "/images/hold_5.jpg" },
];
