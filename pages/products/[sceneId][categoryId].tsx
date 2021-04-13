import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

import _ from "lodash";
import * as faker from "faker";

export default function Collection({
  params,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(params);
  return <div>page</div>;
}

interface ProductCollection {
  scene: string;
  categories: string[];
}

const PRODUCT_COLLECTIONS: ProductCollection[] = [
  { scene: "hotel", categories: ["bed", "tea table"] },
  {
    scene: "office",
    categories: [
      "desk",
      "cabinet",
      "chair",
      "sofa",
      "front desk",
      "conference table",
      "book shell",
    ],
  },
  {
    scene: "school",
    categories: ["apartment bed", "canteen table", "student desk"],
  },
  {
    scene: "steel",
    categories: ["airport chair", "safe box", "steel shelf"],
  },
];

const generateSlugs = (
  collections: ProductCollection[] = PRODUCT_COLLECTIONS
) => {
  const slugs: string[][] = [];
  collections.forEach((collection) => {
    collection.categories.forEach((category) => {
      slugs.push([collection.scene, _.kebabCase(category)]);
    });
  });
  return slugs;
};

const generateItem = () => {
  const _scene = faker.random.arrayElement(
    PRODUCT_COLLECTIONS.map((c) => c.scene)
  );
  const _category = faker.random.arrayElement(
    PRODUCT_COLLECTIONS.find((c) => c.scene === _scene).categories
  );
  return {
    _id: faker.random.uuid(),
    title: faker.lorem.words(),
    subtitle: faker.lorem.words(),
    dimension: `${faker.random.number()} x ${faker.random.number()} x ${faker.random.number()}`,
    material: `${faker.lorem.word()}; ${faker.lorem.word()}; ${faker.lorem.word()};`,
    images: _.range(faker.random.number(6)).map(() => faker.image.image()),
    colors: _.range(faker.random.number(4)).map(() =>
      faker.random.hexaDecimal()
    ),
    _scene,
    _category,
  };
};

const generateItems = (howMany: number) => {
  return _.range(howMany).map(() => generateItem());
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: generateSlugs().map((slug) => ({
      params: { slug },
    })),
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      params,
    },
  };
};
