import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import TagUntagRule from '../models/tag-untag-rule';


export default class TagsRulesApi {
  constructor(private client: Client) {}
  async createTagsRule({ 
    tagUntagRule }: {
    tagUntagRule: TagUntagRule
  })  {
    const uri = '/tags-rules';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: tagUntagRule.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new TagUntagRule(response.data);
  }
  async deleteTagsRule({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags-rules/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async getAllTagsRules({ 
    limit = null,
    offset = null,
    sort = null,
    filter = null,
    q = null }: {
    limit?: number | null,
    offset?: number | null,
    sort?: Array<any> | null,
    filter?: string | null,
    q?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
    const uri = '/tags-rules?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<TagUntagRule>(
      response.data.map((item: any) => new TagUntagRule(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getTagsRule({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags-rules/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new TagUntagRule(response.data);
  }
  async updateTagsRule({ 
    id,
    tagUntagRule }: {
    id: string,
    tagUntagRule: TagUntagRule
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/tags-rules/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: tagUntagRule.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new TagUntagRule(response.data);
  }}
