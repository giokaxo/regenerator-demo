import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import SubscriptionOrOneTimeSaleFactory from '../factories/subscription-or-one-time-sale-factory';
import SubscriptionOrOneTimeSale from '../models/subscription-or-one-time-sale';
import SubscriptionChange from '../models/subscription-change';
import SubscriptionItemUpdate from '../models/subscription-item-update';
import SubscriptionOrOneTimeSaleItem from '../models/subscription-or-one-time-sale-item';
import SubscriptionInvoice from '../models/subscription-invoice';
import Invoice from '../models/invoice';
import UpcomingInvoice from '../models/upcoming-invoice';
import InvoiceIssue from '../models/invoice-issue';
import OrderTimeline from '../models/order-timeline';
import SubscriptionSummaryMetrics from '../models/subscription-summary-metrics';


export default class SubscriptionsApi {
  constructor(private client: Client) {}
  async changeItems({ 
    id,
    subscriptionChange,
    expand = null }: {
    id: string,
    subscriptionChange: SubscriptionChange,
    expand?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}/change-items'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: subscriptionChange.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return SubscriptionOrOneTimeSaleFactory.from(response.data);
  }
  async create({ 
    subscriptionOrOneTimeSale,
    expand = null }: {
    subscriptionOrOneTimeSale: SubscriptionOrOneTimeSale,
    expand?: string | null
  })  {
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
    const uri = '/subscriptions?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: subscriptionOrOneTimeSale.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return SubscriptionOrOneTimeSaleFactory.from(response.data);
  }
  async createInterimInvoice({ 
    id,
    subscriptionInvoice }: {
    id: string,
    subscriptionInvoice: SubscriptionInvoice
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}/interim-invoice'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: subscriptionInvoice.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new Invoice(response.data);
  }
  async createTimelineComment({ 
    id,
    orderTimeline }: {
    id: string,
    orderTimeline: OrderTimeline
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}/timeline'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: orderTimeline.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new OrderTimeline(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}'
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
      '/subscriptions/{id}/timeline/{messageId}'
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
      '/subscriptions/{id}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return SubscriptionOrOneTimeSaleFactory.from(response.data);
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
    const uri = '/subscriptions?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<SubscriptionOrOneTimeSale>(
      response.data.map((item: any) => SubscriptionOrOneTimeSaleFactory.from(item)),
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
      '/subscriptions/{id}/timeline'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<OrderTimeline>(
      response.data.map((item: any) => new OrderTimeline(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllUpcomingInvoices({ 
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
      '/subscriptions/{id}/upcoming-invoices'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return response.data.map((item: any) => new UpcomingInvoice(item));
  }
  async getSubscriptionSummaryMetrics({ 
    subscriptionId }: {
    subscriptionId: string
  })  {
    const pathParams = {subscriptionId: subscriptionId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/experimental/subscriptions/{subscriptionId}/summary-metrics'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new SubscriptionSummaryMetrics(response.data);
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
      '/subscriptions/{id}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new OrderTimeline(response.data);
  }
  async getUpcomingInvoice({ 
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
      '/subscriptions/{id}/upcoming-invoice'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new UpcomingInvoice(response.data);
  }
  async issueEarlyUpcomingInvoice({ 
    id,
    invoiceIssue }: {
    id: string,
    invoiceIssue: InvoiceIssue
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}/upcoming-invoice/issue'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: invoiceIssue.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new UpcomingInvoice(response.data);
  }
  async issueUpcomingInvoice({ 
    id,
    invoiceId,
    invoiceIssue }: {
    id: string,
    invoiceId: string,
    invoiceIssue: InvoiceIssue
  })  {
    const pathParams = {id: id,invoiceId: invoiceId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}/upcoming-invoices/{invoiceId}/issue'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: invoiceIssue.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new UpcomingInvoice(response.data);
  }
  async update({ 
    id,
    subscriptionOrOneTimeSale,
    expand = null }: {
    id: string,
    subscriptionOrOneTimeSale: SubscriptionOrOneTimeSale,
    expand?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: subscriptionOrOneTimeSale.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return SubscriptionOrOneTimeSaleFactory.from(response.data);
  }
  async updateItem({ 
    id,
    itemId,
    subscriptionItemUpdate }: {
    id: string,
    itemId: string,
    subscriptionItemUpdate: SubscriptionItemUpdate
  })  {
    const pathParams = {id: id,itemId: itemId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}/items/{itemId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: subscriptionItemUpdate.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new SubscriptionOrOneTimeSaleItem(response.data);
  }
  async void({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/subscriptions/{id}/void'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return SubscriptionOrOneTimeSaleFactory.from(response.data);
  }}
