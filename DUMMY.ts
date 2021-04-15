import React from "react";
import { IconDesk } from "./public/product-icons/IconDesk";
import { IconChair } from "./public/product-icons/IconChair";
import { IconSofa } from "./public/product-icons/IconSofa";
import { IconCabinet } from "./public/product-icons/IconCabinet";
import { IconHotel } from "./public/product-icons/IconHotel";
import { IconSchool } from "./public/product-icons/IconSchool";

export const IMAGES: string[] = [
  "/images/hold_0.jpg",

  "/images/hold_1.jpg",

  "/images/hold_2.jpg",

  "/images/hold_3.jpg",

  "/images/hold_4.jpg",

  "/images/hold_5.jpg",
];

export const IMAGE = "/images/hold_0.jpg";

export const CASES = IMAGES.map((img, i) => ({
  image: img,
  title: `case ${i}`,
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate doloribus ducimus enim exercitationem facilis,",
}));

export const PRODUCTS: {
  Icon: React.FC;
  text: string;
  href: string;
  image: string;
}[] = [
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

export const defaultImages: string[] = [
  "/images/hold_0.jpg",
  "/images/hold_1.jpg",
  "/images/hold_3.jpg",
  "/images/hold_4.jpg",
  "/images/hold_5.jpg",
];

export const defaultQualification = defaultImages.map((img, i) => ({
  image: img,
  text: `qualification ${i}`,
}));
