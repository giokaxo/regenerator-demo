import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import HistogramData from '../models/histogram-data';


export default class HistogramsApi {
  constructor(private client: Client) {}
  async getTransactionHistogramReport({ 
    periodStart,
    periodEnd,
    aggregationPeriod,
    metric,
    filter = null }: {
    periodStart: Date,
    periodEnd: Date,
    aggregationPeriod: string,
    metric: string,
    filter?: string | null
  })  {
    const queryParams = { 
      ...(periodStart ? { periodStart: periodStart.toISOString().substring(0, 10) } : {}),
      ...(periodEnd ? { periodEnd: periodEnd.toISOString().substring(0, 10) } : {}),
      ...(aggregationPeriod ? { aggregationPeriod: aggregationPeriod.toString() } : {}),
      ...(metric ? { metric: metric.toString() } : {}),
      ...(filter ? { filter: filter.toString() } : {})
    } as Record<string, string>;
    const uri = '/experimental/histograms/transactions?' + new URLSearchParams(queryParams).toString();
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new HistogramData(response.data);
  }}
