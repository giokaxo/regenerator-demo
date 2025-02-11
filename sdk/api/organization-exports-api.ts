import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import OrganizationExport from '../models/organization-export';
import PostOrganizationExportRequest from '../models/post-organization-export-request';


export default class OrganizationExportsApi {
  constructor(private client: Client) {}
  async create({ 
    postOrganizationExportRequest }: {
    postOrganizationExportRequest: PostOrganizationExportRequest
  })  {
    const uri = '/organization-exports';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: postOrganizationExportRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new OrganizationExport(response.data);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/organization-exports/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new OrganizationExport(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    q = null,
    sort = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null,
    sort?: Array<any> | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {})
    } as Record<string, string>;
    const uri = '/organization-exports?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<OrganizationExport>(
      response.data.map((item: any) => new OrganizationExport(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }}
