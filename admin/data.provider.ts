import {
    CreateParams, CreateResult,
    DataProvider,
    DeleteManyParams, DeleteManyResult,
    DeleteParams, DeleteResult, GetListParams,
    GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams,
    GetOneResult, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult
} from 'react-admin';
import client from "../client/client";

/**
 * getList and getOne must return same shapes of object
 */



export const dataProvider: DataProvider = {
    create<RecordType>(resource: string, params: CreateParams): Promise<CreateResult<RecordType>> {
        return Promise.resolve(undefined);
    },
    async delete<RecordType>(resource: string, params: DeleteParams): Promise<DeleteResult<RecordType>> {
        // return Promise.resolve(undefined);
        const res = await client.service(resource).remove(params.id)
        const {id, ...data} = res;
        console.log(
            'res', res
        )
        return {data}
    }
    ,
    deleteMany(resource: string, params: DeleteManyParams): Promise<DeleteManyResult> {
        return Promise.resolve(undefined);
    },
    async getList<RecordType>(resource: string, params: GetListParams): Promise<GetListResult<RecordType>> {

        const result = await client.service(resource).find();
        return result
    },
    getMany<RecordType>(resource: string, params: GetManyParams): Promise<GetManyResult<RecordType>> {
        return Promise.resolve(undefined);
    },
    getManyReference<RecordType>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> {
        return Promise.resolve(undefined);
    },
    getOne<RecordType>(resource: string, params: GetOneParams): Promise<GetOneResult<RecordType>> {
        return Promise.resolve(undefined);
    },
    update<RecordType>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        return Promise.resolve(undefined);
    },
    updateMany(resource: string, params: UpdateManyParams): Promise<UpdateManyResult> {
        return Promise.resolve(undefined);
    }

}