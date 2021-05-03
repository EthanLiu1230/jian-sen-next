import app from "./setup";
import { LinkGroup } from "../../components/Header/props.type";

export async function getLinkGroups(): Promise<LinkGroup[]> {
  // get root categories and their children, convert to LinkGroups
  let { data } = await app
    .service("categories")
    .find({ query: { parentId: "null" } });

  const scenes = data.map(({ id, name }) => ({ id, name }));

  // for each scene grab its child categories as group
  // return whole as LinkGroup[]
  return await Promise.all(
    scenes.map(async (scene) => {
      // grab child categories and map to group
      const { data } = await app
        .service("categories")
        .find({ query: { parentId: scene.id } });
      const links = data.map(({ id, name }) => ({
        id,
        name,
        href: {
          pathname: "/collections/[scene]/[category]",
          query: { scene: scene.name, category: name },
        },
      }));
      const linkGroup: LinkGroup = {
        id: scene.id,
        name: scene.name,
        links: links,
        href: links.length ? links[0].href : { pathname: "/" },
      };

      return linkGroup;
    })
  );
}
