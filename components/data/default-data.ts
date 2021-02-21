import { IMAGES } from "../../DUMMY";

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
