import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import CustomFieldFactory from '../factories/custom-field-factory';
import CustomField from '../models/custom-field';


export default class CustomFieldsApi {
  constructor(private client: Client) {}
  async create({ 
    resource,
    name,
    customField }: {
    resource: string,
    name: string,
    customField: CustomField
  })  {
    const pathParams = {resource: resource,name: name};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/custom-fields/{resource}/{name}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: customField.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return CustomFieldFactory.from(response.data);
  }
  async get({ 
    resource,
    name }: {
    resource: string,
    name: string
  })  {
    const pathParams = {resource: resource,name: name};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/custom-fields/{resource}/{name}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return CustomFieldFactory.from(response.data);
  }
  async getAll({ 
    resource,
    limit = null,
    offset = null }: {
    resource: string,
    limit?: number | null,
    offset?: number | null
  })  {
    const pathParams = {resource: resource};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/custom-fields/{resource}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<CustomField>(
      response.data.map((item: any) => CustomFieldFactory.from(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }}
