import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import EmailDeliverySetting from '../models/email-delivery-setting';


export default class EmailDeliverySettingsApi {
  constructor(private client: Client) {}
  async create({ 
    emailDeliverySetting }: {
    emailDeliverySetting: EmailDeliverySetting
  })  {
    const uri = '/email-delivery-settings';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: emailDeliverySetting.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new EmailDeliverySetting(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/email-delivery-settings/{id}'
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
      '/email-delivery-settings/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new EmailDeliverySetting(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    sort = null,
    q = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    sort?: Array<any> | null,
    q?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
    const uri = '/email-delivery-settings?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<EmailDeliverySetting>(
      response.data.map((item: any) => new EmailDeliverySetting(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async resendVerification({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/email-delivery-settings/{id}/resend-email-verification'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new EmailDeliverySetting(response.data);
  }
  async update({ 
    id,
    emailDeliverySetting }: {
    id: string,
    emailDeliverySetting: EmailDeliverySetting
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/email-delivery-settings/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: emailDeliverySetting.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new EmailDeliverySetting(response.data);
  }
  async verify({ 
    token }: {
    token: string
  })  {
    const pathParams = {token: token};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/email-delivery-setting-verifications/{token}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new EmailDeliverySetting(response.data);
  }}
