import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import Fee from '../models/fee';
import PatchFee from '../models/patch-fee';


export default class FeesApi {
  constructor(private client: Client) {}
  async create({ 
    fee }: {
    fee: Fee
  })  {
    const uri = '/fees';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: fee.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Fee(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/fees/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/fees/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Fee(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    sort = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    sort?: Array<any> | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {})
    } as Record<string, string>;
    const uri = '/fees?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<Fee>(
      response.data.map((item: any) => new Fee(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async patch({ 
    id,
    patchFee }: {
    id: string,
    patchFee: PatchFee
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/fees/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchFee.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Fee(response.data);
  }
  async upsert({ 
    id,
    fee }: {
    id: string,
    fee: Fee
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/fees/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: fee.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Fee(response.data);
  }}
