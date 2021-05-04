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

function getListParamsToQuery(params: GetListParams): string {
  const { sort, filter, pagination } = params;

  let query = `stats[total]=count`;

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

const parseRecord = ({ id, attributes }) => ({
  id: +id,
  ...attributes,
});

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
    const query = getListParamsToQuery(params);

    const response = await fetcher(resource, `?${query}`, { method: "GET" });

    return {
      total: response.meta.stats.total.count,
      data: response.data.map(parseRecord),
    };
  },
  async getMany<RecordType>(
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> {
    const { ids } = params;
    const records = await Promise.all(
      ids.map((id) =>
        fetcher(resource, `/${id}`, { method: "GET" }).then(parseRecord)
      )
    );
    return { data: records };
  },
  getManyReference<RecordType>(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> {
    // return Promise.resolve(undefined);
    const { target, id, ...getListParams } = params;
    let query = getListParamsToQuery(getListParams);
    query = [query, `filter[${target}]=${id}`].join("&");
  },

  async getOne<RecordType>(
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult<RecordType>> {
    const { id } = params;
    const record = await fetcher(resource, `/${id}`, { method: "GET" }).then(
      parseRecord
    );
    return { data: record };
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
