import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import ServiceCredentialFactory from '../factories/service-credential-factory';
import ServiceCredential from '../models/service-credential';
import PatchServiceCredentialRequest from '../models/patch-service-credential-request';
import GoogleSpreadsheet from '../models/google-spreadsheet';


export default class ServiceCredentialsApi {
  constructor(private client: Client) {}
  async create({ 
    type,
    serviceCredential }: {
    type: string,
    serviceCredential: ServiceCredential
  })  {
    const pathParams = {type: type};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/service-credentials/{type}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: serviceCredential.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return ServiceCredentialFactory.from(response.data);
  }
  async get({ 
    type,
    id }: {
    type: string,
    id: string
  })  {
    const pathParams = {type: type,id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/service-credentials/{type}/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return ServiceCredentialFactory.from(response.data);
  }
  async getAll({ 
    type,
    filter = null,
    limit = null,
    offset = null,
    sort = null,
    q = null }: {
    type: string,
    filter?: string | null,
    limit?: number | null,
    offset?: number | null,
    sort?: Array<any> | null,
    q?: string | null
  })  {
    const pathParams = {type: type};
  
    const queryParams = { 
      ...(filter ? { filter: filter.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/service-credentials/{type}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<ServiceCredential>(
      response.data.map((item: any) => ServiceCredentialFactory.from(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getItems({ 
    type,
    id,
    limit = null,
    offset = null,
    filter = null,
    q = null,
    fields = null,
    sort = null }: {
    type: string,
    id: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null,
    fields?: string | null,
    sort?: Array<any> | null
  })  {
    const pathParams = {type: type,id: id};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(fields ? { fields: fields.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/service-credentials/{type}/{id}/items'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<GoogleSpreadsheet>(
      response.data.map((item: any) => new GoogleSpreadsheet(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async update({ 
    type,
    id,
    patchServiceCredentialRequest }: {
    type: string,
    id: string,
    patchServiceCredentialRequest: PatchServiceCredentialRequest
  })  {
    const pathParams = {type: type,id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/service-credentials/{type}/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchServiceCredentialRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return ServiceCredentialFactory.from(response.data);
  }}
