import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import JournalEntry from '../models/journal-entry';
import JournalRecord from '../models/journal-record';


export default class JournalEntriesApi {
  constructor(private client: Client) {}
  async createEntry({ 
    journalEntry }: {
    journalEntry: JournalEntry
  })  {
    const uri = '/journal-entries';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: journalEntry.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new JournalEntry(response.data);
  }
  async createRecord({ 
    id,
    journalRecord }: {
    id: string,
    journalRecord: JournalRecord
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/journal-entries/{id}/records'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: journalRecord.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new JournalRecord(response.data);
  }
  async deleteRecord({ 
    id,
    journalRecordId }: {
    id: string,
    journalRecordId: string
  })  {
    const pathParams = {id: id,journalRecordId: journalRecordId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/journal-entries/{id}/records/{journalRecordId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'DELETE',
      url: uri
    };
    return this.client.send(requestConfig);
  }
  async getAllEntries({ 
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
    const uri = '/journal-entries?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<JournalEntry>(
      response.data.map((item: any) => new JournalEntry(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getAllRecords({ 
    id,
    limit = null,
    offset = null,
    filter = null,
    sort = null,
    expand = null }: {
    id: string,
    limit?: number | null,
    offset?: number | null,
    filter?: string | null,
    sort?: Array<any> | null,
    expand?: string | null
  })  {
    const pathParams = {id: id};
  
    const queryParams = { 
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(expand ? { expand: expand.toString() } : {})
    } as Record<string, string>;
  
    const uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/journal-entries/{id}/records'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<JournalRecord>(
      response.data.map((item: any) => new JournalRecord(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getEntry({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/journal-entries/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new JournalEntry(response.data);
  }
  async getRecord({ 
    id,
    journalRecordId }: {
    id: string,
    journalRecordId: string
  })  {
    const pathParams = {id: id,journalRecordId: journalRecordId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/journal-entries/{id}/records/{journalRecordId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new JournalRecord(response.data);
  }
  async updateEntry({ 
    id,
    journalEntry }: {
    id: string,
    journalEntry: JournalEntry
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/journal-entries/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: journalEntry.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new JournalEntry(response.data);
  }
  async updateRecord({ 
    id,
    journalRecordId,
    journalRecord }: {
    id: string,
    journalRecordId: string,
    journalRecord: JournalRecord
  })  {
    const pathParams = {id: id,journalRecordId: journalRecordId};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/journal-entries/{id}/records/{journalRecordId}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'PUT',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: journalRecord.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new JournalRecord(response.data);
  }}
