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
import client from "../client/client";
import { Params, Query } from "@feathersjs/feathers";

export const dataProvider: DataProvider = {
  async create<RecordType>(
    resource: string,
    params: CreateParams
  ): Promise<CreateResult<RecordType>> {
    const res = await client.service(resource).create(params.data);
    return { data: res };
  },

  /**
   * getList and getOne must return same shapes of object
   */
  async getList<RecordType>(
    resource: string,
    params: GetListParams
  ): Promise<GetListResult<RecordType>> {
    // pagination
    const { sort, filter, pagination } = params;
    const { perPage, page } = pagination;
    const $limit = perPage;
    const $skip = (page - 1) * perPage;

    // sort
    const { field, order } = sort;
    const $sort = {};
    $sort[field] = order === "ASC" ? 1 : -1;

    // filter in RA corresponds to Equality in Feathers' Querying
    const query: Query = {
      $limit,
      $skip,

      $sort,

      ...filter,
    };
    return await client.service(resource).find({ query });
  },

  getMany<RecordType>(
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> {
    const { ids } = params;

    const query: Query = {
      id: {
        $in: ids,
      },
    };

    return client.service(resource).find({ query });
  },

  getManyReference<RecordType>(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> {
    return Promise.resolve(undefined);
  },
  /**
   * getList and getOne must return same shapes of object
   */
  getOne<RecordType>(
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult<RecordType>> {
    return client.service(resource).get(params.id);
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

  async delete<RecordType>(
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult<RecordType>> {
    const res = await client.service(resource).remove(params.id);
    return { data: res };
  },

  async deleteMany(
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> {
    const { ids } = params;
    const query: Query = {
      id: {
        $in: ids,
      },
    };
    const res = await client.service(resource).remove(null, { query });
    return { data: res };
  },
};
