import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function dev({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return <div>dev</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: "data here",
    },
  };
};
