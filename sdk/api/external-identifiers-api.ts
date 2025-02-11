import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import ExternalIdentifier from '../models/external-identifier';


export default class ExternalIdentifiersApi {
  constructor(private client: Client) {}
  async delete({ 
    resource,
    resourceId,
    service }: {
    resource: string,
    resourceId: string,
    service: string
  })  {
    const pathParams = {resource: resource,resourceId: resourceId,service: service};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/{resource}/{resourceId}/external-identifiers/{service}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({ 
    resource,
    resourceId,
    service }: {
    resource: string,
    resourceId: string,
    service: string
  })  {
    const pathParams = {resource: resource,resourceId: resourceId,service: service};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/{resource}/{resourceId}/external-identifiers/{service}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new ExternalIdentifier(response.data);
  }
  async getAll({ 
    filter = null,
    sort = null,
    limit = null,
    offset = null }: {
    filter?: string | null,
    sort?: Array<any> | null,
    limit?: number | null,
    offset?: number | null
  }= {})  {
    const queryParams = { 
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/external-identifiers?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<ExternalIdentifier>(
      response.data.map((item: any) => new ExternalIdentifier(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async sync({ 
    resource,
    resourceId,
    service }: {
    resource: string,
    resourceId: string,
    service: string
  })  {
    const pathParams = {resource: resource,resourceId: resourceId,service: service};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/{resource}/{resourceId}/external-identifiers/{service}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async update({ 
    resource,
    resourceId,
    service,
    externalIdentifier }: {
    resource: string,
    resourceId: string,
    service: string,
    externalIdentifier: ExternalIdentifier
  })  {
    const pathParams = {resource: resource,resourceId: resourceId,service: service};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/{resource}/{resourceId}/external-identifiers/{service}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: externalIdentifier.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new ExternalIdentifier(response.data);
  }}
