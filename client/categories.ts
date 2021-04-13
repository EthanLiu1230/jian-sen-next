import app from "./index";

export async function getScenes(): Promise<{ id: number; name: string }[]> {
  const query = { level: 0 };
  const res = await app.service("categories").find({ query });
  return res.data.map(({ id, name }) => ({ id, name }));
}

export async function getCategoriesBySceneId(
  sceneId: number
): Promise<
  {
    id: number;
    name: string;
  }[]
> {
  const query = { parentId: sceneId, level: 1 };
  const res = await app.service("categories").find({ query });
  return res.data.map(({ id, name, parentId }) => ({ id, name, parentId }));
}
