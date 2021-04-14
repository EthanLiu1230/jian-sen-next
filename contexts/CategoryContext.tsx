import React, { ReactNode, useEffect, useState } from "react";
import client from "../client";

export interface Category {
  id: number;
  name: string;
  parentId?: number;
  children?: Category[];
}

async function getRootCategories(): Promise<Category[]> {
  const query = { level: 0 };
  const res = await client.service("categories").find({ query });
  return res.data.map(({ id, name }) => ({ id, name }));
}

async function getCategoriesByParentId(parentId: number): Promise<Category[]> {
  const query = { parentId, level: 1 };
  const res = await client.service("categories").find({ query });
  return res.data.map(({ id, name, parentId }) => ({ id, name, parentId }));
}

async function getTwoLevelCategories(): Promise<Category[]> {
  const scenes = await getRootCategories();
  return await Promise.all(
    scenes.map(async (scene) => {
      const children = await getCategoriesByParentId(scene.id);
      return { ...scene, children };
    })
  );
}

function useGetCategories() {
  const [categories, setCategories] = useState<Category[]>(null);
  useEffect(() => {
    getTwoLevelCategories().then((data) => setCategories(data));
  }, []);
  return categories;
}

export const CategoryContext = React.createContext(null);

export function CategoryContextProvider({ children }: { children: ReactNode }) {
  const categories: Category[] = useGetCategories();

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
}
