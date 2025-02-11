import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import EmailMessage from '../models/email-message';
import PatchEmailMessageRequest from '../models/patch-email-message-request';


export default class EmailMessagesApi {
  constructor(private client: Client) {}
  async create({ 
    emailMessage }: {
    emailMessage: EmailMessage
  })  {
    const uri = '/email-messages';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: emailMessage.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new EmailMessage(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/email-messages/{id}'
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
      '/email-messages/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new EmailMessage(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    q = null,
    sort = null,
    filter = null }: {
    limit?: number | null,
    offset?: number | null,
    q?: string | null,
    sort?: Array<any> | null,
    filter?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/email-messages?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<EmailMessage>(
      response.data.map((item: any) => new EmailMessage(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async send({ 
    id,
    patchEmailMessageRequest }: {
    id: string,
    patchEmailMessageRequest: PatchEmailMessageRequest
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/email-messages/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchEmailMessageRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new EmailMessage(response.data);
  }}
