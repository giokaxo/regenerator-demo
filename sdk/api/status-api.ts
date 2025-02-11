import type { AxiosRequestConfig } from 'axios';
import type Client from '../client';  
import Status from '../models/status';


export default class StatusApi {
  constructor(private client: Client) {}
  async get({  }: {
  }= {})
   {
    const uri = '/status';
  
    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: uri,
      headers: {
        Accept: 'application/json'
      }
    };
    const response = await this.client.send(requestConfig);
    return new Status(response.data);
  }}
