import { Link, LinkGroup } from "../../components/Header/props.type";

const url = (baseUrl = "http://localhost:3000", apiNamespace = "/api/v1") => (
  query: string
) => `${baseUrl}${apiNamespace}${query}`;

export const getLinkGroups = async (): Promise<LinkGroup[]> => {
  const myUrl = url();
  const res = await fetch(
    myUrl("/categories?filter[parent_id]=null&include=children"),
    {
      method: "GET",
      redirect: "follow",
    }
  ).then((res) => res.json());

  const { data, included } = res;

  const genHref = (scene: string, category: string) => ({
    pathname: "/collections/[scene]/[category]",
    query: { scene, category },
  });

  const linkGroups: LinkGroup[] = data.map(
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

  return linkGroups;
};
