export const configUrl = (
  baseUrl = "http://localhost:3000",
  apiNamespace = "/api/v1"
) => (api: string) => `${baseUrl}${apiNamespace}${api}`;

/**
 * @param resource
 * 'categories'
 * @param query
 * '?stats[total]=count'
 * @param options
 * {method: 'GET'}
 */
export const fetcher = async (
  resource: string,
  query: string,
  options: { method: string }
) => {
  const baseUrl = "http://localhost:3000";
  const apiNamespace = "/api/v1";
  return await fetch(
    `${baseUrl}${apiNamespace}/${resource}${query}`,
    options
  ).then((res) => res.json());
};
