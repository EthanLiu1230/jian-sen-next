export const defaultImages: string[] = [
  '/images/hold_0.jpg',
  '/images/hold_1.jpg',
  '/images/hold_3.jpg',
  '/images/hold_4.jpg',
  '/images/hold_5.jpg',
];

export const defaultCases = defaultImages.map((img, i) => ({
  image: img,
  title: `case ${i}`,
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cupiditate doloribus ducimus enim exercitationem facilis,',
}));

export const defaultQualification = defaultImages.map((img, i) => ({
  image: img,
  text: `qualification ${i}`,
}));
