import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getLinkGroups } from "../client/spraypaint/props.provider";
import { LinkGroup } from "../components/Header/props.type";

export default function dev({ linkGroups }: { linkGroups: LinkGroup[] }) {
  return <div>{JSON.stringify(linkGroups)}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const linkGroups: LinkGroup[] = await getLinkGroups();
  return {
    props: {
      linkGroups,
    },
  };
};
