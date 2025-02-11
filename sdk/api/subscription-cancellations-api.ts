import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import SubscriptionCancellation from '../models/subscription-cancellation';
import PatchSubscriptionCancellationRequest from '../models/patch-subscription-cancellation-request';


export default class SubscriptionCancellationsApi {
  constructor(private client: Client) {}
  async create({ 
    subscriptionCancellation }: {
    subscriptionCancellation: SubscriptionCancellation
  })  {
    const uri = '/subscription-cancellations';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: subscriptionCancellation.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new SubscriptionCancellation(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscription-cancellations/{id}'
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
      '/subscription-cancellations/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new SubscriptionCancellation(response.data);
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
    const uri = '/subscription-cancellations?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<SubscriptionCancellation>(
      response.data.map((item: any) => new SubscriptionCancellation(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async patch({ 
    id,
    patchSubscriptionCancellationRequest }: {
    id: string,
    patchSubscriptionCancellationRequest: PatchSubscriptionCancellationRequest
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscription-cancellations/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchSubscriptionCancellationRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new SubscriptionCancellation(response.data);
  }
  async update({ 
    id,
    subscriptionCancellation }: {
    id: string,
    subscriptionCancellation: SubscriptionCancellation
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscription-cancellations/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: subscriptionCancellation.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new SubscriptionCancellation(response.data);
  }}
