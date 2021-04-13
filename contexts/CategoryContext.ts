import { getCategoriesBySceneId } from "../client/categories";
import { createContext, ReactNode, useState } from "react";

interface abc {
  id: number;
  name: string;
  subCategories: Category[];
}

interface Category {
  id: number;
  name: string;
}

async function getCategoriesContext(): Promise<abc[]> {
  const scenes = await getScenes();

  return await Promise.all(
    scenes.map(async (scene) => {
      const subCategories = await getCategoriesBySceneId(scene.id);
      return {
        ...scene,
        subCategories,
      };
    })
  );
}

export const CategoryContext = createContext(null);

export function CategoriesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [scenes, setScenes] = useState(() => getCategoriesContext());

  return (

  )
}
