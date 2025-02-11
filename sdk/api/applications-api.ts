import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import UserApplication from '../models/user-application';
import Application from '../models/application';
import OwnerApplicationInstance from '../models/owner-application-instance';


export default class ApplicationsApi {
  constructor(private client: Client) {}
  async create({ 
    application }: {
    application: Application
  })  {
    const uri = '/applications';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: application.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Application(response.data);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/applications/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new UserApplication(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    q = null,
    expand = null,
    fields = null,
    sort = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null,
    expand?: string | null,
    fields?: string | null,
    sort?: Array<any> | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(expand ? { expand: expand.toString() } : {}),
      ...(fields ? { fields: fields.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {})
    } as Record<string, string>;
    const uri = '/applications?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<UserApplication>(
      response.data.map((item: any) => new UserApplication(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getInstance({ 
    id,
    organizationId }: {
    id: string,
    organizationId: string
  })  {
    const pathParams = {id: id,organizationId: organizationId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/applications/{id}/instances/{organizationId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new OwnerApplicationInstance(response.data);
  }
  async getInstances({ 
    id,
    limit = null,
    offset = null }: {
    id: string,
    limit?: number | null,
    offset?: number | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/applications/{id}/instances'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<OwnerApplicationInstance>(
      response.data.map((item: any) => new OwnerApplicationInstance(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }}
