import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import Dispute from '../models/dispute';
import PostDisputeRequest from '../models/post-dispute-request';


export default class DisputesApi {
  constructor(private client: Client) {}
  async create({ 
    postDisputeRequest }: {
    postDisputeRequest: PostDisputeRequest
  })  {
    const uri = '/disputes';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: postDisputeRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Dispute(response.data);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/disputes/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Dispute(response.data);
  }
  async getAll({ 
    filter = null,
    sort = null,
    limit = null,
    offset = null,
    q = null,
    expand = null }: {
    filter?: string | null,
    sort?: Array<any> | null,
    limit?: number | null,
    offset?: number | null,
    q?: string | null,
    expand?: string | null
  }= {})  {
    const queryParams = { 
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
    const uri = '/disputes?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<Dispute>(
      response.data.map((item: any) => new Dispute(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async update({ 
    id,
    postDisputeRequest }: {
    id: string,
    postDisputeRequest: PostDisputeRequest
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/disputes/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: postDisputeRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Dispute(response.data);
  }}
