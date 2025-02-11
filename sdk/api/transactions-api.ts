import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import Transaction from '../models/transaction';
import PostTransactionRequest from '../models/post-transaction-request';
import PatchTransactionRequest from '../models/patch-transaction-request';
import TransactionQuery from '../models/transaction-query';
import TransactionUpdate from '../models/transaction-update';
import TransactionRefund from '../models/transaction-refund';
import TransactionTimeline from '../models/transaction-timeline';


export default class TransactionsApi {
  constructor(private client: Client) {}
  async create({ 
    postTransactionRequest,
    expand = null }: {
    postTransactionRequest: PostTransactionRequest,
    expand?: string | null
  })  {
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
    const uri = '/transactions?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: postTransactionRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Transaction(response.data);
  }
  async createTimelineComment({ 
    id,
    transactionTimeline }: {
    id: string,
    transactionTimeline: TransactionTimeline
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/transactions/{id}/timeline'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: transactionTimeline.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new TransactionTimeline(response.data);
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
      '/transactions/{id}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({ 
    id,
    expand = null }: {
    id: string,
    expand?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/transactions/{id}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Transaction(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    q = null,
    sort = null,
    expand = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null,
    sort?: Array<any> | null,
    expand?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
    const uri = '/transactions?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<Transaction>(
      response.data.map((item: any) => new Transaction(item)),
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
      '/transactions/{id}/timeline'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<TransactionTimeline>(
      response.data.map((item: any) => new TransactionTimeline(item)),
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
      '/transactions/{id}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new TransactionTimeline(response.data);
  }
  async patch({ 
    id,
    patchTransactionRequest }: {
    id: string,
    patchTransactionRequest: PatchTransactionRequest
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/transactions/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchTransactionRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Transaction(response.data);
  }
  async query({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/transactions/{id}/query'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new TransactionQuery(response.data);
  }
  async refund({ 
    id,
    transactionRefund,
    expand = null }: {
    id: string,
    transactionRefund: TransactionRefund,
    expand?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/transactions/{id}/refund'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: transactionRefund.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Transaction(response.data);
  }
  async update({ 
    id,
    transactionUpdate }: {
    id: string,
    transactionUpdate: TransactionUpdate
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/transactions/{id}/update'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: transactionUpdate.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Transaction(response.data);
  }}
