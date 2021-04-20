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
import { Query } from "@feathersjs/feathers";
import client from "../client";
import { postFile, putFile } from "./file-crud";

export const dataProvider: DataProvider = {
  async create<RecordType>(
    resource: string,
    params: CreateParams
  ): Promise<CreateResult<RecordType>> {
    let res;
    if (resource === "uploads") {
      const file: File = params.data.file.rawFile;
      res = await postFile(file);
      return { data: res };
    }

    res = await client.service(resource).create(params.data);
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

  // todo
  getManyReference<RecordType>(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> {
    return Promise.resolve(undefined);
  },

  /**
   * getList and getOne must return same shapes of object
   */
  async getOne<RecordType>(
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult<RecordType>> {
    const res = await client.service(resource).get(params.id);
    return { data: res };
  },

  async update<RecordType>(
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult<RecordType>> {
    const { id, data } = params;
    let res;
    if (resource === "uploads") {
      const file: File = params.data.file.rawFile;
      res = await putFile(+id, file);
      return { data: res };
    }

    res = await client.service(resource).update(id, data);
    return { data: res };
  },

  // todo: omit for now
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
