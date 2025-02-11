import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import PaymentInstrumentFactory from '../factories/payment-instrument-factory';
import PostPaymentInstrumentRequestFactory from '../factories/post-payment-instrument-request-factory';
import PaymentInstrument from '../models/payment-instrument';
import PostPaymentInstrumentRequest from '../models/post-payment-instrument-request';
import PatchPaymentInstrumentRequest from '../models/patch-payment-instrument-request';
import PaymentInstrumentNameInquiry from '../models/payment-instrument-name-inquiry';


export default class PaymentInstrumentsApi {
  constructor(private client: Client) {}
  async create({ 
    postPaymentInstrumentRequest }: {
    postPaymentInstrumentRequest: PostPaymentInstrumentRequest
  })  {
    const uri = '/payment-instruments';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: postPaymentInstrumentRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return PaymentInstrumentFactory.from(response.data);
  }
  async deactivate({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/payment-instruments/{id}/deactivation'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return PaymentInstrumentFactory.from(response.data);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/payment-instruments/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return PaymentInstrumentFactory.from(response.data);
  }
  async getAll({ 
    filter = null,
    sort = null,
    limit = null,
    offset = null,
    q = null,
    expand = null }: {
    filter?: string | null,
    sort?: Array<any> | null,
    limit?: number | null,
    offset?: number | null,
    q?: string | null,
    expand?: string | null
  }= {})  {
    const queryParams = { 
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
    const uri = '/payment-instruments?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<PaymentInstrument>(
      response.data.map((item: any) => PaymentInstrumentFactory.from(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async nameInquiry({ 
    id,
    paymentInstrumentNameInquiry }: {
    id: string,
    paymentInstrumentNameInquiry: PaymentInstrumentNameInquiry
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/payment-instruments/{id}/name-inquiry'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: paymentInstrumentNameInquiry.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new PaymentInstrumentNameInquiry(response.data);
  }
  async update({ 
    id,
    patchPaymentInstrumentRequest }: {
    id: string,
    patchPaymentInstrumentRequest: PatchPaymentInstrumentRequest
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/payment-instruments/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchPaymentInstrumentRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return PaymentInstrumentFactory.from(response.data);
  }}
