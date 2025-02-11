import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import SystemEvent from '../models/system-event';
import RuleSet from '../models/rule-set';
import RulesEngineTimeline from '../models/rules-engine-timeline';
import RuleSetHistoryItem from '../models/rule-set-history-item';
import RuleSetVersion from '../models/rule-set-version';
import RuleSetDraft from '../models/rule-set-draft';


export default class EventsApi {
  constructor(private client: Client) {}
  async createDraftRuleset({ 
    eventType,
    ruleSetDraft }: {
    eventType: string,
    ruleSetDraft: RuleSetDraft
  })  {
    const pathParams = {eventType: eventType};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules/drafts'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: ruleSetDraft.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new RuleSetDraft(response.data);
  }
  async createRules({ 
    eventType,
    ruleSet }: {
    eventType: string,
    ruleSet: RuleSet
  })  {
    const pathParams = {eventType: eventType};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: ruleSet.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new RuleSet(response.data);
  }
  async createTimelineComment({ 
    eventType,
    rulesEngineTimeline }: {
    eventType: string,
    rulesEngineTimeline: RulesEngineTimeline
  })  {
    const pathParams = {eventType: eventType};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/timeline'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: rulesEngineTimeline.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new RulesEngineTimeline(response.data);
  }
  async deleteDraftRuleset({ 
    eventType,
    id }: {
    eventType: string,
    id: string
  })  {
    const pathParams = {eventType: eventType,id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules/drafts/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async deleteTimelineMessage({ 
    eventType,
    messageId }: {
    eventType: string,
    messageId: string
  })  {
    const pathParams = {eventType: eventType,messageId: messageId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async get({ 
    eventType }: {
    eventType: string
  })  {
    const pathParams = {eventType: eventType};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new SystemEvent(response.data);
  }
  async getAll({ 
    limit = null,
    offset = null,
    filter = null,
    q = null }: {
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null
  }= {})  {
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
    const uri = '/events?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<SystemEvent>(
      response.data.map((item: any) => new SystemEvent(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllDraftRulesets({ 
    eventType,
    limit = null,
    offset = null,
    filter = null,
    q = null,
    sort = null,
    fields = null }: {
    eventType: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null,
    sort?: Array<any> | null,
    fields?: string | null
  })  {
    const pathParams = {eventType: eventType};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(fields ? { fields: fields.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules/drafts'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<RuleSetDraft>(
      response.data.map((item: any) => new RuleSetDraft(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllTimelineMessages({ 
    eventType,
    limit = null,
    offset = null,
    filter = null,
    sort = null,
    q = null }: {
    eventType: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    sort?: Array<any> | null,
    q?: string | null
  })  {
    const pathParams = {eventType: eventType};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(q ? { q: q.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/timeline'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<RulesEngineTimeline>(
      response.data.map((item: any) => new RulesEngineTimeline(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getDraftRuleset({ 
    eventType,
    id,
    fields = null }: {
    eventType: string,
    id: string,
    fields?: string | null
  })  {
    const pathParams = {eventType: eventType,id: id};
  
    const queryParams = { 
      ...(fields ? { fields: fields.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules/drafts/{id}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RuleSetDraft(response.data);
  }
  async getRules({ 
    eventType }: {
    eventType: string
  })  {
    const pathParams = {eventType: eventType};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RuleSet(response.data);
  }
  async getRulesHistory({ 
    eventType,
    limit = null,
    offset = null,
    filter = null,
    q = null,
    sort = null,
    fields = null }: {
    eventType: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    q?: string | null,
    sort?: Array<any> | null,
    fields?: string | null
  })  {
    const pathParams = {eventType: eventType};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(q ? { q: q.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(fields ? { fields: fields.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules/history'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<RuleSetHistoryItem>(
      response.data.map((item: any) => new RuleSetHistoryItem(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getRulesVersionDetail({ 
    eventType,
    version,
    fields = null }: {
    eventType: string,
    version: number,
    fields?: string | null
  })  {
    const pathParams = {eventType: eventType,version: version};
  
    const queryParams = { 
      ...(fields ? { fields: fields.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules/versions/{version}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RuleSetVersion(response.data);
  }
  async getRulesVersionNumber({ 
    eventType,
    version,
    fields = null }: {
    eventType: string,
    version: number,
    fields?: string | null
  })  {
    const pathParams = {eventType: eventType,version: version};
  
    const queryParams = { 
      ...(fields ? { fields: fields.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules/history/{version}'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RuleSetHistoryItem(response.data);
  }
  async getTimelineMessage({ 
    eventType,
    messageId }: {
    eventType: string,
    messageId: string
  })  {
    const pathParams = {eventType: eventType,messageId: messageId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/timeline/{messageId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RulesEngineTimeline(response.data);
  }
  async updateDraftRuleset({ 
    eventType,
    id,
    ruleSetDraft }: {
    eventType: string,
    id: string,
    ruleSetDraft: RuleSetDraft
  })  {
    const pathParams = {eventType: eventType,id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/events/{eventType}/rules/drafts/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: ruleSetDraft.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new RuleSetDraft(response.data);
  }}
