import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import GlobalWebhook from '../models/global-webhook';


export default class WebhooksApi {
  constructor(private client: Client) {}
  async create({ 
    globalWebhook }: {
    globalWebhook: GlobalWebhook
  })  {
    const uri = '/webhooks';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: globalWebhook.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GlobalWebhook(response.data);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/webhooks/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GlobalWebhook(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/webhooks?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<GlobalWebhook>(
      response.data.map((item: any) => new GlobalWebhook(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async update({ 
    id,
    globalWebhook }: {
    id: string,
    globalWebhook: GlobalWebhook
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/webhooks/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: globalWebhook.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GlobalWebhook(response.data);
  }}
