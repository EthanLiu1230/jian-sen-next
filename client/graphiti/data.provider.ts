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
  getList<RecordType>(
    resource: string,
    params: GetListParams
  ): Promise<GetListResult<RecordType>> {
    return Promise.resolve(undefined);
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
