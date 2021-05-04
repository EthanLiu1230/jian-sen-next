import { isEmpty } from "lodash";
import {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from "react-admin";
import { fetcher } from "./utils";

function reactAdminParamsToGraphitiQuery(params: GetListParams) {
  const { sort, filter, pagination } = params;

  const statsParam = `stats[total]=count`;

  let query = "?" + statsParam;

  if (!isEmpty(sort)) {
    const sortParam = `sort=${() => (sort.order === "ASC" ? "" : "-")}${
      sort.field
    }`;
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

const dataProvider: DataProvider = {
  create<RecordType>(
    resource: string,
    params: CreateParams
  ): Promise<CreateResult<RecordType>> {
    return Promise.resolve(undefined);
  },
  delete<RecordType>(
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult<RecordType>> {
    return Promise.resolve(undefined);
  },
  deleteMany(
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> {
    return Promise.resolve(undefined);
  },
  async getList<RecordType>(
    resource: string,
    params: GetListParams
  ): Promise<GetListResult<RecordType>> {
    const query = reactAdminParamsToGraphitiQuery(params);

    const response = await fetcher(resource, query, { method: "GET" });

    const result: GetListResult<RecordType> = {
      total: response.meta.stats.total.count,
      data: [],
    };
    result.data = response.data.map(({ id, attributes }) => ({
      id: +id,
      ...attributes,
    }));
    return result;
  },
  getMany<RecordType>(
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> {
    return Promise.resolve(undefined);
  },
  getManyReference<RecordType>(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> {
    return Promise.resolve(undefined);
  },
  getOne<RecordType>(
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult<RecordType>> {
    const { id } = params;

    return Promise.resolve(undefined);
  },
  update<RecordType>(
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult<RecordType>> {
    return Promise.resolve(undefined);
  },
  updateMany(
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult> {
    return Promise.resolve(undefined);
  },
};
export default dataProvider;
