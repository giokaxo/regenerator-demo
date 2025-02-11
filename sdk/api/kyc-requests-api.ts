import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import KycRequest from '../models/kyc-request';
import PatchKycRequestRequest from '../models/patch-kyc-request-request';


export default class KycRequestsApi {
  constructor(private client: Client) {}
  async create({ 
    kycRequest }: {
    kycRequest: KycRequest
  })  {
    const uri = '/kyc-requests';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: kycRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new KycRequest(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/kyc-requests/{id}'
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
      '/kyc-requests/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new KycRequest(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    sort = null,
    expand = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    sort?: Array<any> | null,
    expand?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
    const uri = '/kyc-requests?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<KycRequest>(
      response.data.map((item: any) => new KycRequest(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async update({ 
    id,
    patchKycRequestRequest }: {
    id: string,
    patchKycRequestRequest: PatchKycRequestRequest
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/kyc-requests/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchKycRequestRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new KycRequest(response.data);
  }}
