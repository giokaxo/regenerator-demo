import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import BroadcastMessage from '../models/broadcast-message';


export default class BroadcastMessagesApi {
  constructor(private client: Client) {}
  async create({ 
    broadcastMessage }: {
    broadcastMessage: BroadcastMessage
  })  {
    const uri = '/broadcast-messages';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: broadcastMessage.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new BroadcastMessage(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/broadcast-messages/{id}'
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
      '/broadcast-messages/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new BroadcastMessage(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    sort = null,
    filter = null }: {
    limit?: number | null,
    offset?: number | null,
    sort?: Array<any> | null,
    filter?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/broadcast-messages?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<BroadcastMessage>(
      response.data.map((item: any) => new BroadcastMessage(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async update({ 
    id,
    broadcastMessage }: {
    id: string,
    broadcastMessage: BroadcastMessage
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/broadcast-messages/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: broadcastMessage.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new BroadcastMessage(response.data);
  }}
