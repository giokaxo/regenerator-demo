import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import CreditMemo from '../models/credit-memo';
import PatchCreditMemo from '../models/patch-credit-memo';
import CreditMemoTimeline from '../models/credit-memo-timeline';


export default class CreditMemosApi {
  constructor(private client: Client) {}
  async create({ 
    creditMemo }: {
    creditMemo: CreditMemo
  })  {
    const uri = '/credit-memos';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: creditMemo.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new CreditMemo(response.data);
  }
  async createTimelineComment({ 
    id,
    creditMemoTimeline }: {
    id: string,
    creditMemoTimeline: CreditMemoTimeline
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credit-memos/{id}/timeline'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: creditMemoTimeline.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new CreditMemoTimeline(response.data);
  }
  async deleteTimelineMessage({ 
    id,
    messageId }: {
    id: string,
    messageId: string
  })  {
    const pathParams = {id: id,messageId: messageId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credit-memos/{id}/timeline/{messageId}'
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
      '/credit-memos/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new CreditMemo(response.data);
  }
  async getAll({ 
    filter = null,
    sort = null,
    limit = null,
    offset = null,
    q = null }: {
    filter?: string | null,
    sort?: Array<any> | null,
    limit?: number | null,
    offset?: number | null,
    q?: string | null
  }= {})  {
    const queryParams = { 
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
    const uri = '/credit-memos?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<CreditMemo>(
      response.data.map((item: any) => new CreditMemo(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllTimelineMessages({ 
    id,
    limit = null,
    offset = null,
    filter = null,
    sort = null,
    q = null }: {
    id: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    sort?: Array<any> | null,
    q?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credit-memos/{id}/timeline'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<CreditMemoTimeline>(
      response.data.map((item: any) => new CreditMemoTimeline(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getTimelineMessage({ 
    id,
    messageId }: {
    id: string,
    messageId: string
  })  {
    const pathParams = {id: id,messageId: messageId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credit-memos/{id}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new CreditMemoTimeline(response.data);
  }
  async patch({ 
    id,
    patchCreditMemo }: {
    id: string,
    patchCreditMemo: PatchCreditMemo
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credit-memos/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchCreditMemo.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new CreditMemo(response.data);
  }
  async update({ 
    id,
    creditMemo }: {
    id: string,
    creditMemo: CreditMemo
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credit-memos/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: creditMemo.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new CreditMemo(response.data);
  }
  async void({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/credit-memos/{id}/void'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new CreditMemo(response.data);
  }}
