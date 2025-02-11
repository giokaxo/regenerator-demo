import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import DataExportFactory from '../factories/data-export-factory';
import DataExport from '../models/data-export';


export default class DataExportsApi {
  constructor(private client: Client) {}
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/experimental/data-exports/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({ 
    id,
    expand = null }: {
    id: string,
    expand?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/experimental/data-exports/{id}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return DataExportFactory.from(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    sort = null,
    expand = null,
    filter = null,
    q = null,
    criteria = null }: {
    limit?: number | null,
    offset?: number | null,
    sort?: Array<any> | null,
    expand?: string | null,
    filter?: string | null,
    q?: string | null,
    criteria?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(expand ? { expand: expand.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(criteria ? { criteria: criteria.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/data-exports?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<DataExport>(
      response.data.map((item: any) => DataExportFactory.from(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async queue({ 
    dataExport,
    expand = null }: {
    dataExport: DataExport,
    expand?: string | null
  })  {
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/data-exports?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: dataExport.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return DataExportFactory.from(response.data);
  }
  async update({ 
    id,
    dataExport,
    expand = null }: {
    id: string,
    dataExport: DataExport,
    expand?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/experimental/data-exports/{id}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: dataExport.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return DataExportFactory.from(response.data);
  }}
