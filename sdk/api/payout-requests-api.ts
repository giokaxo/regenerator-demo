import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import PayoutRequest from '../models/payout-request';
import PayoutRequestCancellation from '../models/payout-request-cancellation';
import GetPayoutRequestPaymentInstrumentsResponse from '../models/get-payout-request-payment-instruments-response';


export default class PayoutRequestsApi {
  constructor(private client: Client) {}
  async cancel({ 
    id,
    payoutRequestCancellation }: {
    id: string,
    payoutRequestCancellation: PayoutRequestCancellation
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/payout-requests/{id}/cancel'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: payoutRequestCancellation.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new PayoutRequest(response.data);
  }
  async create({ 
    payoutRequest }: {
    payoutRequest: PayoutRequest
  })  {
    const uri = '/payout-requests';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: payoutRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new PayoutRequest(response.data);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/payout-requests/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new PayoutRequest(response.data);
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
    const uri = '/payout-requests?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<PayoutRequest>(
      response.data.map((item: any) => new PayoutRequest(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getPaymentInstruments({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/payout-requests/{id}/payment-instruments'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return response.data.map((item: any) => new GetPayoutRequestPaymentInstrumentsResponse(item));
  }
  async update({ 
    id,
    payoutRequest }: {
    id: string,
    payoutRequest: PayoutRequest
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/payout-requests/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: payoutRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new PayoutRequest(response.data);
  }}
