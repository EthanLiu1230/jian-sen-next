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
  create<RecordType>(
    resource: string,
    params: CreateParams
  ): Promise<CreateResult<RecordType>> {
    return Promise.resolve(undefined);
  },
  async delete<RecordType>(
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult<RecordType>> {
    // return Promise.resolve(undefined);
    const res = await client.service(resource).remove(params.id);
    const { id, ...data } = res;
    console.log("res", res);
    return { data };
  },
  deleteMany(
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> {
    return Promise.resolve(undefined);
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
    return Promise.resolve(undefined);
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
