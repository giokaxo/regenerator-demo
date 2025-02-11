import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import Customer from '../models/customer';
import LeadSource from '../models/lead-source';
import CustomerTimeline from '../models/customer-timeline';
import CustomerInformation from '../models/customer-information';
import Edd from '../models/edd';
import PatchCustomerEddScoreRequest from '../models/patch-customer-edd-score-request';
import EddTimeline from '../models/edd-timeline';
import EddSearchResult from '../models/edd-search-result';


export default class CustomersApi {
  constructor(private client: Client) {}
  async create({ 
    customer }: {
    customer: Customer
  })  {
    const uri = '/customers';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: customer.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Customer(response.data);
  }
  async createEddTimelineComment({ 
    id,
    eddTimeline }: {
    id: string,
    eddTimeline: EddTimeline
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/edd-timeline'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: eddTimeline.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new EddTimeline(response.data);
  }
  async createLeadSource({ 
    id,
    leadSource }: {
    id: string,
    leadSource: LeadSource
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/lead-source'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: leadSource.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new LeadSource(response.data);
  }
  async createTimelineComment({ 
    id,
    customerTimeline }: {
    id: string,
    customerTimeline: CustomerTimeline
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/timeline'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: customerTimeline.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new CustomerTimeline(response.data);
  }
  async deleteEddTimelineMessage({ 
    id,
    messageId }: {
    id: string,
    messageId: string
  })  {
    const pathParams = {id: id,messageId: messageId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/edd-timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async deleteLeadSource({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/lead-source'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
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
      '/customers/{id}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({ 
    id,
    expand = null,
    fields = null }: {
    id: string,
    expand?: string | null,
    fields?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {}),
      ...(fields ? { fields: fields.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Customer(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    q = null,
    expand = null,
    fields = null,
    sort = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null,
    expand?: string | null,
    fields?: string | null,
    sort?: Array<any> | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(expand ? { expand: expand.toString() } : {}),
      ...(fields ? { fields: fields.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {})
    } as Record<string, string>;
    const uri = '/customers?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<Customer>(
      response.data.map((item: any) => new Customer(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllEddSearchResults({ 
    id,
    limit = null,
    offset = null }: {
    id: string,
    limit?: number | null,
    offset?: number | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/edd-search-results'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<EddSearchResult>(
      response.data.map((item: any) => new EddSearchResult(item)),
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
      '/customers/{id}/timeline'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<CustomerTimeline>(
      response.data.map((item: any) => new CustomerTimeline(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getCustomerEddScore({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/edd-score'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Edd(response.data);
  }
  async getCustomerLifetimeSummaryMetrics({ 
    customerId }: {
    customerId: string
  })  {
    const pathParams = {customerId: customerId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/experimental/customers/{customerId}/summary-metrics'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new CustomerInformation(response.data);
  }
  async getEddSearchResult({ 
    id,
    searchResultId }: {
    id: string,
    searchResultId: string
  })  {
    const pathParams = {id: id,searchResultId: searchResultId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/edd-search-results/{searchResultId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new EddSearchResult(response.data);
  }
  async getEddTimelineCollection({ 
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
      '/customers/{id}/edd-timeline'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<EddTimeline>(
      response.data.map((item: any) => new EddTimeline(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getEddTimelineMessage({ 
    id,
    messageId }: {
    id: string,
    messageId: string
  })  {
    const pathParams = {id: id,messageId: messageId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/edd-timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new EddTimeline(response.data);
  }
  async getLeadSource({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/lead-source'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new LeadSource(response.data);
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
      '/customers/{id}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new CustomerTimeline(response.data);
  }
  async merge({ 
    id,
    targetCustomerId }: {
    id: string,
    targetCustomerId: string
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(targetCustomerId ? { targetCustomerId: targetCustomerId.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async patchCustomerEddScore({ 
    id,
    patchCustomerEddScoreRequest }: {
    id: string,
    patchCustomerEddScoreRequest: PatchCustomerEddScoreRequest
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}/edd-score'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: patchCustomerEddScoreRequest.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Edd(response.data);
  }
  async update({ 
    id,
    customer }: {
    id: string,
    customer: Customer
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/customers/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: customer.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Customer(response.data);
  }}
