import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import GridSegment from '../models/grid-segment';


export default class SegmentsApi {
  constructor(private client: Client) {}
  async create({ 
    gridSegment }: {
    gridSegment: GridSegment
  })  {
    const uri = '/grid-segments';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gridSegment.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GridSegment(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/grid-segments/{id}'
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
      '/grid-segments/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GridSegment(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    sort = null,
    filter = null,
    q = null }: {
    limit?: number | null,
    offset?: number | null,
    sort?: Array<any> | null,
    filter?: string | null,
    q?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
    const uri = '/grid-segments?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<GridSegment>(
      response.data.map((item: any) => new GridSegment(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async update({ 
    id,
    gridSegment }: {
    id: string,
    gridSegment: GridSegment
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/grid-segments/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gridSegment.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GridSegment(response.data);
  }}
