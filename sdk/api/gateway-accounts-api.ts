import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import GatewayAccount from '../models/gateway-account';
import GatewayAccountDowntimeSchedule from '../models/gateway-account-downtime-schedule';
import GatewayAccountLimit from '../models/gateway-account-limit';
import GatewayAccountTimeline from '../models/gateway-account-timeline';
import GatewayAccountFinancialSettings from '../models/gateway-account-financial-settings';


export default class GatewayAccountsApi {
  constructor(private client: Client) {}
  async checkCredentials({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/check-credentials'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async close({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/close'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccount(response.data);
  }
  async create({ 
    gatewayAccount }: {
    gatewayAccount: GatewayAccount
  })  {
    const uri = '/gateway-accounts';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gatewayAccount.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccount(response.data);
  }
  async createDowntimeSchedule({ 
    id,
    gatewayAccountDowntimeSchedule }: {
    id: string,
    gatewayAccountDowntimeSchedule: GatewayAccountDowntimeSchedule
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/downtime-schedules'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gatewayAccountDowntimeSchedule.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountDowntimeSchedule(response.data);
  }
  async createTimelineComment({ 
    id,
    gatewayAccountTimeline }: {
    id: string,
    gatewayAccountTimeline: GatewayAccountTimeline
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/timeline'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gatewayAccountTimeline.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountTimeline(response.data);
  }
  async delete({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async deleteDowntimeSchedule({ 
    id,
    downtimeId }: {
    id: string,
    downtimeId: string
  })  {
    const pathParams = {id: id,downtimeId: downtimeId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/downtime-schedules/{downtimeId}'
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
      '/gateway-accounts/{id}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async deleteVolumeLimit({ 
    id,
    limitId }: {
    id: string,
    limitId: string
  })  {
    const pathParams = {id: id,limitId: limitId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/limits/{limitId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async disable({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/disable'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccount(response.data);
  }
  async enable({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/enable'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccount(response.data);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccount(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    sort = null,
    filter = null,
    q = null,
    fields = null }: {
    limit?: number | null,
    offset?: number | null,
    sort?: Array<any> | null,
    filter?: string | null,
    q?: string | null,
    fields?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(fields ? { fields: fields.toString() } : {})
    } as Record<string, string>;
    const uri = '/gateway-accounts?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<GatewayAccount>(
      response.data.map((item: any) => new GatewayAccount(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllDowntimeSchedules({ 
    id,
    limit = null,
    offset = null,
    filter = null,
    sort = null }: {
    id: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    sort?: Array<any> | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/downtime-schedules'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<GatewayAccountDowntimeSchedule>(
      response.data.map((item: any) => new GatewayAccountDowntimeSchedule(item)),
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
      '/gateway-accounts/{id}/timeline'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<GatewayAccountTimeline>(
      response.data.map((item: any) => new GatewayAccountTimeline(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllVolumeLimits({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/limits'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return response.data.map((item: any) => new GatewayAccountLimit(item));
  }
  async getDowntimeSchedule({ 
    id,
    downtimeId }: {
    id: string,
    downtimeId: string
  })  {
    const pathParams = {id: id,downtimeId: downtimeId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/downtime-schedules/{downtimeId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountDowntimeSchedule(response.data);
  }
  async getFinancialSettings({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/financial-settings'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountFinancialSettings(response.data);
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
      '/gateway-accounts/{id}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountTimeline(response.data);
  }
  async getVolumeLimit({ 
    id,
    limitId }: {
    id: string,
    limitId: string
  })  {
    const pathParams = {id: id,limitId: limitId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/limits/{limitId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountLimit(response.data);
  }
  async setFinancialSettings({ 
    id,
    gatewayAccountFinancialSettings }: {
    id: string,
    gatewayAccountFinancialSettings: GatewayAccountFinancialSettings
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/financial-settings'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gatewayAccountFinancialSettings.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountFinancialSettings(response.data);
  }
  async update({ 
    id,
    gatewayAccount }: {
    id: string,
    gatewayAccount: GatewayAccount
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PATCH',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gatewayAccount.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccount(response.data);
  }
  async updateDowntimeSchedule({ 
    id,
    downtimeId,
    gatewayAccountDowntimeSchedule }: {
    id: string,
    downtimeId: string,
    gatewayAccountDowntimeSchedule: GatewayAccountDowntimeSchedule
  })  {
    const pathParams = {id: id,downtimeId: downtimeId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/downtime-schedules/{downtimeId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gatewayAccountDowntimeSchedule.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountDowntimeSchedule(response.data);
  }
  async updateVolumeLimit({ 
    id,
    limitId,
    gatewayAccountLimit }: {
    id: string,
    limitId: string,
    gatewayAccountLimit: GatewayAccountLimit
  })  {
    const pathParams = {id: id,limitId: limitId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}/limits/{limitId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gatewayAccountLimit.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccountLimit(response.data);
  }
  async upsert({ 
    id,
    gatewayAccount }: {
    id: string,
    gatewayAccount: GatewayAccount
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/gateway-accounts/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: gatewayAccount.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new GatewayAccount(response.data);
  }}
