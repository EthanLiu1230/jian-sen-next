import { isEmpty } from "lodash";
import { GetListParams } from "react-admin";

/**
 * @param resource
 * 'categories'
 * @param query
 * '?stats[total]=count'
 * @param init
 * {method: 'GET'}
 */
export const fetcher = async (
  resource: string,
  query: string,
  init: RequestInit
) => {
  const baseUrl = "http://localhost:3000";
  const apiNamespace = "/api/v1";
  return await fetch(
    `${baseUrl}${apiNamespace}/${resource}${query}`,
    init
  ).then((res) => res.json());
};

export function getListParamsToQuery(params: GetListParams): string {
  const { sort, filter, pagination } = params;

  let query = `stats[total]=count`;

  if (!isEmpty(sort)) {
    const sortParam = `sort=${sort.order === "ASC" ? "" : "-"}${sort.field}`;
    query = [query, sortParam].join("&");
  }

  if (!isEmpty(filter)) {
    const filterParams = filter.entries.map(
      ([key, value]) => `filter[${key}]=${value}`
    );
    query = [query, ...filterParams].join("&");
  }

  if (!isEmpty(pagination)) {
    const pageParams = [
      `page[size]=${pagination.perPage}`,
      `page[number]=${pagination.page}`,
    ];
    query = [query, ...pageParams].join("&");
  }

  return query;
}

export const parseRecord = ({ id, attributes }) => ({
  id: +id,
  ...attributes,
});
