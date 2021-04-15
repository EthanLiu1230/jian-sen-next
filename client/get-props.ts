import client from "./index";
import { LinkGroup } from "../components/Header/props.type";

export async function getLinkGroups(): Promise<LinkGroup[]> {
  // get root categories and their children, convert to LinkGroups
  let { data } = await client
    .service("categories")
    .find({ query: { parentId: "null" } });

  const scenes = data.map(({ id, name }) => ({ id, name }));

  // for each scene grab its child categories as group
  // return whole as LinkGroup[]
  return await Promise.all(
    scenes.map(async (scene) => {
      // grab child categories and map to group
      const { data } = await client
        .service("categories")
        .find({ query: { parentId: scene.id } });
      const group = data.map(({ id, name }) => ({
        id,
        name,
        href: `${scene.name}/${name}`,
      }));
      console.log("group -> ", group);
      const linkGroup: LinkGroup = {
        id: scene.id,
        name: scene.name,
        group,
        href: group.length ? group[0].href : "",
      };

      return linkGroup;
    })
  );
}