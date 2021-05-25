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
} from 'react-admin';
import { fetcher, getListParamsToQuery, parseRecord } from './utils';

function setHeaders() {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  const accessToken = localStorage.getItem('Access-Token');
  if (accessToken) {
    headers.append('Authorization', `Bearer ${accessToken}`);
  }
  return headers;
}

export default {
  async create<RecordType>(
    resource: string,
    params: CreateParams
  ): Promise<CreateResult<RecordType>> {
    const { data } = params;
    const responseBody = await fetcher(`${resource}`, {
      method: 'POST',
      headers: setHeaders(),
      body: JSON.stringify({
        data: {
          type: resource,
          attributes: data,
        },
      }),
    }).then((r) => r.json());
    return { data: parseRecord(responseBody) };
  },

  async delete<RecordType>(
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult<RecordType>> {
    const { id } = params;
    const record = await fetcher(`${resource}/${id}`, {
      method: 'DELETE',
      headers: setHeaders(),
    })
      .then((r) => r.json())
      .then(parseRecord);
    return { data: record };
  },

  async deleteMany(
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> {
    const { ids } = params;
    const records = await Promise.all(
      ids.map((id) =>
        fetcher(`${resource}/${id}`, {
          method: 'DELETE',
          headers: setHeaders(),
        })
          .then((r) => r.json())
          .then(parseRecord)
      )
    );
    return { data: records };
  },

  async update<RecordType>(
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult<RecordType>> {
    const { data, id } = params;

    const { created_at, updated_at, ...attributes } = data;
    const response = await fetcher(`${resource}/${id}`, {
      method: 'PATCH',
      headers: setHeaders(),
      body: JSON.stringify({
        data: {
          id,
          type: resource,
          attributes,
        },
      }),
    }).then((r) => r.json());
    return { data: parseRecord(response) };
  },

  async updateMany(
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult> {
    const { data, ids } = params;
    const records = await Promise.all(
      ids.map((id) =>
        fetcher(`${resource}/${id}`, {
          method: 'PATCH',
          headers: setHeaders(),
          body: JSON.stringify({
            data: {
              id,
              type: resource,
              attributes: data,
            },
          }),
        })
          .then((r) => r.json())
          .then(parseRecord)
      )
    );
    return { data: records };
  },

  async getList<RecordType>(
    resource: string,
    params: GetListParams
  ): Promise<GetListResult<RecordType>> {
    const query = getListParamsToQuery(params);
    const responseBody = await fetcher(`${resource}?${query}`, {
      method: 'GET',
      headers: setHeaders(),
    }).then((r) => r.json());
    return {
      total: responseBody.meta.stats.total.count,
      data: responseBody.data.map(parseRecord),
    };
  },

  async getMany<RecordType>(
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> {
    const { ids } = params;
    const records = await Promise.all(
      ids.map((id) =>
        fetcher(`${resource}/${id}`, { method: 'GET', headers: setHeaders() })
          .then((r) => r.json())
          .then(parseRecord)
      )
    );
    return { data: records };
  },

  async getManyReference<RecordType>(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> {
    const { target, id, ...getListParams } = params;
    let query = getListParamsToQuery(getListParams);
    query = [query, `filter[${target}]=${id}`].join('&');
    const response = await fetcher(`${resource}?${query}`, {
      method: 'GET',
      headers: setHeaders(),
    }).then((r) => r.json());
    return {
      total: response.meta.stats.total.count,
      data: response.data.map(parseRecord),
    };
  },

  async getOne<RecordType>(
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult<RecordType>> {
    const { id } = params;
    const record = await fetcher(`${resource}/${id}`, {
      method: 'GET',
      headers: setHeaders(),
    })
      .then((r) => r.json())
      .then(parseRecord);
    return { data: record };
  },
};
