import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import CompositeTokenFactory from '../factories/composite-token-factory';
import CompositeToken from '../models/composite-token';


export default class PaymentTokensApi {
  constructor(private client: Client) {}
  async create({ 
    compositeToken }: {
    compositeToken: CompositeToken
  })  {
    const uri = '/tokens';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: compositeToken.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return CompositeTokenFactory.from(response.data);
  }
  async get({ 
    token }: {
    token: string
  })  {
    const pathParams = {token: token};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tokens/{token}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return CompositeTokenFactory.from(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null }: {
    limit?: number | null,
    offset?: number | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/tokens?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<CompositeToken>(
      response.data.map((item: any) => CompositeTokenFactory.from(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }}
