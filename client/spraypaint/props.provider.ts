import { Link, LinkGroup } from "../../components/Header/props.type";
import { Category } from "./models";

export const getLinkGroups = async (): Promise<LinkGroup[]> => {
  const mainCategories = (
    await Category.where({ parentId: "null" }).includes("children").all()
  ).data;

  return mainCategories.map(({ children, id, name }) => {
    let linkGroup: LinkGroup = { id: +id, name, links: [], href: {} };

    linkGroup.links = children.map(
      (category): Link => ({
        id: +category.id,
        name: category.name,
        href: {
          pathname: "/collections/[scene]/[category]",
          query: { scene: name, category: category.name },
        },
      })
    );

    linkGroup.href = linkGroup.links.length
      ? linkGroup.links[0].href
      : { pathname: "/" };

    return linkGroup;
  });
};
