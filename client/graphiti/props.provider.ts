import { Link, LinkGroup } from "../../components/Header/props.type";
import { fetcher } from "./utils";

export const getLinkGroups = async (): Promise<LinkGroup[]> => {
  const response = await fetcher(
    `categories?filter[parent_id]=null&include=children`,
    { method: "GET" }
  );

  const { data, included } = response;

  const genHref = (scene: string, category: string) => ({
    pathname: "/collections/[scene]/[category]",
    query: { scene, category },
  });

  return data.map(
    (mainCat): LinkGroup => {
      const linkGroup: LinkGroup = {
        id: +mainCat.id,
        name: mainCat.attributes.name,
        links: [],
        href: "",
      };

      linkGroup.links = mainCat.relationships.children.data.map(
        ({ id }): Link => {
          const subCat = included.find((i) => i.id === id);

          return {
            id: +id,
            name: subCat.attributes.name,
            href: genHref(mainCat.attributes.name, subCat.attributes.name),
          };
        }
      );

      linkGroup.href = linkGroup.links.length
        ? linkGroup.links[0].href
        : { pathname: "/" };

      return linkGroup;
    }
  );
};
