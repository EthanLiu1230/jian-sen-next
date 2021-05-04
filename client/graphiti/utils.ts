export const configUrl = (
  baseUrl = "http://localhost:3000",
  apiNamespace = "/api/v1"
) => (api: string) => `${baseUrl}${apiNamespace}${api}`;

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
