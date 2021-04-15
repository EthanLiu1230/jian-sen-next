import useSWR from "swr";
import { Query } from "@feathersjs/feathers";
import client from "../client";

const fetcher = async (resource: string, query: Query) => {
  const res = await client.service(resource).find({ query });
  console.log("resource ->", resource);
  console.log("query", JSON.stringify(query));
  console.log(res);
  return res.data;
};

export default function useServiceSWR(resource: string, query: Query) {
  const { data, error } = useSWR([resource, query], fetcher);
  return {
    data: data,
    isError: error,
  };
}
