import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  return <div>{JSON.stringify(router.query)}</div>;
}
