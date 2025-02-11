import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Collection from '../collection';
import Paginator from '../paginator';
import RiskScoreSimulationJob from '../models/risk-score-simulation-job';
import RiskScoreSimulationTransaction from '../models/risk-score-simulation-transaction';


export default class RiskScoreSimulationJobsApi {
  constructor(private client: Client) {}
  async create({ 
    riskScoreSimulationJob }: {
    riskScoreSimulationJob: RiskScoreSimulationJob
  })  {
    const uri = '/risk-score-simulation-jobs';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      },
      data: riskScoreSimulationJob.jsonSerialize()
    };
    const response = await this.client.send(requestConfig);
    return new RiskScoreSimulationJob(response.data);
  }
  async get({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/risk-score-simulation-jobs/{id}'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RiskScoreSimulationJob(response.data);
  }
  async getAll({ 
    filter = null,
    sort = null,
    limit = null,
    offset = null }: {
    filter?: string | null,
    sort?: Array<any> | null,
    limit?: number | null,
    offset?: number | null
  }= {})  {
    const queryParams = { 
      ...(filter ? { filter: filter.toString() } : {}),
      ...(sort ? { sort: sort.toString() } : {}),
      ...(limit ? { limit: limit.toString() } : {}),
      ...(offset ? { offset: offset.toString() } : {})
    } as Record<string, string>;
    const uri = '/risk-score-simulation-jobs?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<RiskScoreSimulationJob>(
      response.data.map((item: any) => new RiskScoreSimulationJob(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async getTransactions({ 
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
      '/risk-score-simulation-jobs/{id}/transactions'
    ) + '?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
  
    return new Collection<RiskScoreSimulationTransaction>(
      response.data.map((item: any) => new RiskScoreSimulationTransaction(item)),
      response.headers[Collection.HEADER_LIMIT],
      response.headers[Collection.HEADER_OFFSET],
      response.headers[Collection.HEADER_TOTAL],
    );
  }
  async stop({ 
    id }: {
    id: string
  })  {
    const pathParams = {id: id};
  
  
    let uri = Object.keys(pathParams).reduce(
      (str, key) => str.replace(`{${key}}`, pathParams[key as keyof typeof pathParams].toString()),
      '/risk-score-simulation-jobs/{id}/stop'
    );
  
    const requestConfig: AxiosRequestConfig = {
      method: 'POST',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new RiskScoreSimulationJob(response.data);
  }}
